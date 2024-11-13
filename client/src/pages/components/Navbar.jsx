import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 shadow-md">
            <div className="flex justify-center space-x-8">
                <Link to="/home" className="text-white text-xl font-semibold hover:text-sky-500 transition duration-300">
                    Inicio
                </Link>
                <Link to="/ver_vehiculos" className="text-white text-xl font-semibold hover:text-sky-500 transition duration-300">
                    Vehículos
                </Link>
                <Link to="/ver_reservas" className="text-white text-xl font-semibold hover:text-sky-500 transition duration-300">
                    Reservas
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
