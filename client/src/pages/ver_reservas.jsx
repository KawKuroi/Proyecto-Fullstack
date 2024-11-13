    import React, { useState, useEffect } from 'react';
    import axios from '../api/axios'; // Asegúrate de que el archivo axios.js esté bien configurado

    const API = 'http://localhost:3000/api';

    const Reservas = () => {
        const [reservas, setReservas] = useState([]);
        const [loading, setLoading] = useState(true);

        // Función para obtener las reservas del usuario
        const fetchReservas = async () => {
            try {
                const response = await axios.get(`${API}/reservas`);
                setReservas(response.data);  // Actualizamos las reservas
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener las reservas', error);
                setLoading(false);
            }
        };

        // Cambiar el estado de una reserva a 'cancelada'
        const cancelarReserva = async (idReserva) => {
            try {
                // Actualizamos el estado de la reserva a "cancelada" en el backend
                await axios.put(`${API}/reservas/${idReserva}`, { estado: 'cancelada' });
                
                // Después de la actualización, actualizamos las reservas en el frontend
                setReservas((prevReservas) =>
                    prevReservas.map((reserva) =>
                        reserva.id_reserva === idReserva
                            ? { ...reserva, estado: 'cancelada' }
                            : reserva
                    )
                );
            } catch (error) {
                console.error('Error al cancelar la reserva', error);
            }
        };

        // Cargar las reservas cuando el componente se monta
        useEffect(() => {
            fetchReservas();
        }, []);

        if (loading) {
            return <div className="text-center text-xl font-semibold text-gray-700">Cargando...</div>;
        }

        return (
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">Mis Reservas</h2>
                {reservas.length === 0 ? (
                    <p className="text-lg text-gray-500 text-center">No tienes reservas.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reservas.map((reserva) => (
                            <div key={reserva.id_reserva} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-semibold text-gray-800">{reserva.nombre_vehiculo}</h3>
                                    <p className="text-gray-600 mt-1">Fecha de inicio: {new Date(reserva.fecha_inicio).toLocaleDateString()}</p>
                                    <p className="text-gray-600 mt-1">Fecha de fin: {new Date(reserva.fecha_fin).toLocaleDateString()}</p>
                                </div>
                                <div className="mb-6">
                                    <p className={`text-sm font-semibold ${reserva.estado === 'cancelada' ? 'text-red-500' : 'text-green-500'}`}>{reserva.estado}</p>
                                </div>
                                <div className="text-center">
                                    {/* Si el estado no es "cancelada", mostramos el botón de cancelar */}
                                    {reserva.estado !== 'cancelada' && (
                                        <button
                                            onClick={() => cancelarReserva(reserva.id_reserva)}
                                            className="bg-red-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-500 transition duration-300"
                                        >
                                            Cancelar Reserva
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    export default Reservas;
