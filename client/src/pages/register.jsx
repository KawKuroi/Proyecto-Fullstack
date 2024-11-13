import { useForm } from 'react-hook-form';
import { useAuth } from '../context/Authcontext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function RegisterPage() {
    const { register, handleSubmit } = useForm();
    const { signup, isAuthenticated } = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate("/home")
    }, [isAuthenticated])
    
    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
            <div className="bg-zinc-800 max-w-sm w-full p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-center text-white mb-6">Crear Cuenta</h1>
                
                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            {...register("nombre", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                            placeholder="Nombre de Usuario"
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            {...register("correo", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                            placeholder="Correo Electrónico"
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            {...register("contrasena", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                            placeholder="Contraseña"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg transition duration-300"
                    >
                        Registrarse
                    </button>
                </form>

                <p className="text-center text-white mt-4">
                    ¿Ya tienes una cuenta?{" "}
                    <Link to="/login" className="text-sky-500 hover:text-sky-400">
                        Inicia sesión
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterPage;
