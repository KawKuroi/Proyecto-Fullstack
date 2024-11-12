import Usuario from './models/usuario.model.js';
import Vehiculo from './models/vehiculo.model.js';
import Reserva from './models/reserva.model.js';

const nuevoUsuario = await Usuario.crear({
    nombre: "Juan Perez",
    correo: "juan@example.com",
    contrasena: "password123",
});

const nuevoVehiculo = await Vehiculo.crear({
    marca: "Toyota",
    modelo: "Corolla",
    tipo: "Sedan",
    precio_diario: 50.00,
    descripcion: "",
});

const nuevaReserva = await Reserva.crear({
    id_usuario: nuevoUsuario.insertId,
    id_vehiculo: nuevoVehiculo.insertId,
    fecha_inicio: "2024-11-12",
    fecha_fin: "2024-11-15",
});

console.log("Reserva creada:", nuevaReserva);
/*
CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    correo VARCHAR(255) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,  -- contrasena encriptada
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
    tipo_usuario ENUM('cliente', 'administrador') DEFAULT 'cliente'
);
CREATE TABLE vehiculos (
    id_vehiculo INT PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(255) NOT NULL,
    modelo VARCHAR(255) NOT NULL,
    tipo VARCHAR(255) NOT NULL,  -- Ej: SUV, Sedan, etc.
    disponibilidad BOOLEAN DEFAULT TRUE,  -- Si está disponible para alquilar
    precio_diario DECIMAL(10, 2) NOT NULL,
    descripcion TEXT
);
CREATE TABLE reservas (
    id_reserva INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    id_vehiculo INT,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    estado ENUM('Pendiente', 'Confirmada', 'Cancelada', 'En Proceso', 'Finalizada') DEFAULT 'Pendiente',
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    fecha_cancelacion DATETIME,
    fecha_finalizacion DATETIME,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_vehiculo) REFERENCES vehiculos(id_vehiculo)
);
CREATE TABLE calificaciones (
    id_calificacion INT PRIMARY KEY AUTO_INCREMENT,
    id_reserva INT,
    calificacion INT CHECK (calificacion BETWEEN 1 AND 5),
    comentario TEXT,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_reserva) REFERENCES reservas(id_reserva)
);
CREATE TABLE mensajes (
    id_mensaje INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,  -- El cliente que envía el mensaje
    id_administrador INT,  -- El administrador que recibe el mensaje
    mensaje TEXT,
    tipo_mensaje ENUM('consulta', 'sugerencia', 'felicitaciones', 'agradecimiento'),
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    leido BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_administrador) REFERENCES usuarios(id_usuario)
);


*/