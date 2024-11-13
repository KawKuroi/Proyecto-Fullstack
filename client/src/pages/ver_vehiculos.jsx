import React, { useEffect, useState } from "react";
import { vehicleRequest } from "../api/auth";
import VehicleInfo from "./components/vehicleInfo";
import axios from "axios"; // Asegúrate de tener axios importado

const API = 'http://localhost:3000/api';

function Ver_vehiculos() {
    const [vehicles, setVehicles] = useState([]); // Estado para almacenar los vehículos
    const [loading, setLoading] = useState(true); // Estado para manejar el cargando
    const [selectedVehicle, setSelectedVehicle] = useState(null); // Estado para el vehículo seleccionado
    const [reservationDates, setReservationDates] = useState({ fecha_inicio: '', fecha_fin: '' }); // Estado para las fechas de la reserva

    // Función para manejar el cambio de fechas
    const handleDateChange = (e) => {
        const { name, value } = e.target;
        setReservationDates(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Función para mostrar el formulario de reserva
    const showReservationForm = (vehicle) => {
        setSelectedVehicle(vehicle);
        console.log("Seleccionado el vehículo: ", vehicle);
    };

    // Función para crear la reserva
    const createReservation = async () => {
        try {
            if (!reservationDates.fecha_inicio || !reservationDates.fecha_fin) {
                alert("Por favor, complete las fechas de la reserva.");
                return;
            }

            const reservationData = {
                id_vehiculo: selectedVehicle.id_vehiculo,
                fecha_inicio: reservationDates.fecha_inicio,
                fecha_fin: reservationDates.fecha_fin
            };

            // Hacer la solicitud para crear la reserva
            const response = await axios.post(`${API}/reservas`, reservationData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}` // Asegúrate de tener el token de usuario
                }
            });

            alert(response.data.message); // Mostrar mensaje de éxito
            setSelectedVehicle(null); // Cerrar el formulario
            setReservationDates({ fecha_inicio: '', fecha_fin: '' }); // Limpiar las fechas
        } catch (error) {
            console.error("Error al crear la reserva", error);
            alert("Error al crear la reserva.");
        }
    };

    // Cargar los vehículos desde la API
    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await vehicleRequest(); // Llamada a la API para obtener vehículos
                setVehicles(response.data); // Asignar los vehículos al estado
            } catch (error) {
                console.error("Error al obtener los vehículos:", error);
            } finally {
                setLoading(false); // Cambiar el estado de cargando a falso
            }
        };

        fetchVehicles();
    }, []);

    if (loading) {
        return <div className="text-center text-xl font-semibold text-gray-700">Cargando vehículos...</div>; // Mensaje de cargando
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">Vehículos Disponibles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {vehicles.map((vehicle) => (
                    <div key={vehicle.id_vehiculo} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                        <VehicleInfo
                            marca={vehicle.marca}
                            modelo={vehicle.modelo}
                            tipo={vehicle.tipo}
                            precio_diario={vehicle.precio_diario}
                            descripcion={vehicle.descripcion}
                            disponibilidad={vehicle.disponibilidad}
                        />
                        <button
                            onClick={() => showReservationForm(vehicle)}
                            className="bg-yellow-500 text-white px-6 py-2 rounded-full mt-4 hover:bg-yellow-400 transition duration-300"
                        >
                            Añadir a reserva
                        </button>
                    </div>
                ))}
            </div>

            {selectedVehicle && (
                <div className="mt-8 p-6 border rounded-lg bg-white shadow-lg max-w-sm mx-auto">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Reservar vehículo: {selectedVehicle.marca} {selectedVehicle.modelo}</h3>
                    <label className="block text-gray-700 font-semibold mb-2">Fecha de inicio</label>
                    <input
                        type="date"
                        name="fecha_inicio"
                        value={reservationDates.fecha_inicio}
                        onChange={handleDateChange}
                        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                    />
                    <label className="block text-gray-700 font-semibold mb-2">Fecha de fin</label>
                    <input
                        type="date"
                        name="fecha_fin"
                        value={reservationDates.fecha_fin}
                        onChange={handleDateChange}
                        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                    />
                    <div className="flex justify-between">
                        <button
                            onClick={createReservation}
                            className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-400 transition duration-300"
                        >
                            Crear reserva
                        </button>
                        <button
                            onClick={() => setSelectedVehicle(null)}
                            className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-400 transition duration-300"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Ver_vehiculos;
