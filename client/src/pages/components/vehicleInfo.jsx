function VehicleInfo({ marca, modelo, tipo, precio_diario, descripcion, disponibilidad = true }) {
    return (
        <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                <span className="font-bold">{marca}</span> <span className="font-bold">{modelo}</span>
            </h2>
            <p className="text-lg text-gray-700 mb-2"><strong>Tipo:</strong> {tipo}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Precio diario:</strong> ${precio_diario}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Descripción:</strong> {descripcion}</p>
            <p className="text-lg">
                <strong>Disponibilidad:</strong> 
                <span className={disponibilidad ? "text-green-500" : "text-red-500"}>
                    {disponibilidad ? "Disponible" : "No disponible"}
                </span>
            </p>
        </div>
    );
}

export default VehicleInfo;
