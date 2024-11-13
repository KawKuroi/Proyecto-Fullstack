import { createContext, useState, useContext } from 'react'
import { loginRequest, registerRequest} from "../api/auth"

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("use Auth must be used within an Auhtprovider")
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const signup = async (user) => {
        try{
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true)
        }catch (error){
            console.log(error)
        }
    };

    const signin = async (user) => {
        try{
            const res = await loginRequest(user);
            console.log(res.data);
            setIsAuthenticated(true)
        }catch (error){
            console.log(error)
        }
    };

    return (
        <AuthContext.Provider
            value={{
                signup,
                signin,
                user,
                isAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};