
import { useForm } from 'react-hook-form'
import {Link} from 'react-router-dom'
import { useAuth } from '../context/Authcontext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LoginPage(){

    const {register, handleSubmit } = useForm();
    const {signin, isAuthenticated} = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate("/home")
    }, [isAuthenticated])
    
    
    const onSubmit = handleSubmit((data) => {
        signin(data);
    });


    return(
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                        
            <form onSubmit= {onSubmit}>
                
                <h1 className='text-2xl font-bold'>Inciar Sesión</h1>
                <input type='email' {...register("correo", {required:true})}
                className="w-full bg-zinc-700 text-white px-4 py-2"
                    placeholder='correo'
                />
                
                
                <input type='password' {...register("contrasena", {required:true})}
                className="w-full bg-zinc-700 text-white px-4 py-2"
                    placeholder='contraseña'
                />
                
                <button type = "submit">Iniciar Sesión</button>
            
            </form>
            <p>
                ¿No tienes una cuenta? <Link to="/register" className='text-sky-500'>Registrate</Link>
            </p>

            </div>
            
        </div>
    )
} 

export default LoginPage

/*function LoginPage(){
    return (
        <div>Login</div>
    )
}

export default LoginPage*/