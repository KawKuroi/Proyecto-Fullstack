import React from 'react';

function Home() {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Bienvenido a la Aplicación de Reservas de Vehículos</h1>
            <p style={styles.description}>
                Esta aplicación permite a los usuarios ver vehículos disponibles y realizar reservas fácilmente. 
                Elige el vehículo que más te guste, selecciona las fechas y haz tu reserva al instante.
            </p>
            <p style={styles.info}>
                Si deseas obtener más detalles sobre los vehículos o realizar una reserva, navega a las secciones 
                correspondientes en el menú.
            </p>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f1f1f1',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: '20px',
    },
    description: {
        fontSize: '1.2rem',
        color: '#555',
        textAlign: 'center',
        marginBottom: '30px',
        maxWidth: '800px',
    },
    info: {
        fontSize: '1.2rem',
        color: '#555',
        textAlign: 'center',
        maxWidth: '800px',
    },
};

export default Home;
