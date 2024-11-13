import {useForm} from 'react-hook-form';
import { useAuth } from '../context/Authcontext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function RegisterPage(){
    const { register, handleSubmit} = useForm();
    const { signup, isAuthenticated} = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate("/home")
    }, [isAuthenticated])
    
    const onSubmit = handleSubmit(async (values)=>{
        signup(values);
    });

    return(
        <div className='bg-zinc-800 max-w-mdv p-10' >
            <form onSubmit= {onSubmit}>
                <input type='text' {...register("nombre", {required: true})}
                    className="w-full bg-zinc-700 text-white px-4 py-2"
                    placeholder='usuario'
                />
                
                <input type='email' {...register("correo", {required:true})}
                className="w-full bg-zinc-700 text-white px-4 py-2"
                    placeholder='correo'
                />
                
                <input type='password' {...register("contrasena", {required:true})}
                className="w-full bg-zinc-700 text-white px-4 py-2"
                    placeholder='contraseña'
                />
                
                
                <button type = "submit">Registrarse</button>
            
            </form>

            <p>
                ¿Ya tienes una cuenta? <Link to="/login" className='text-sky-500'>Inicia Sesión</Link>
            </p>

        </div>
    )
} 

export default RegisterPage