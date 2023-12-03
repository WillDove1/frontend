import { useAuth } from '../context/AuthContext';

function ProfilePage() {
    const { user } = useAuth();

    return (
    <div className="flex items-center justify-center h-screen">
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="text-3xl font-bold my-3 text-center">Perfil de Usuario</h1>
        <div>
            <p>Nombre de Usuario: {user ? user.username : 'Cargando...'}</p>
          {/* Agrega aquí más información del usuario si está disponible en tu contexto */}
        </div>
        </div>
    </div>
    );
}

export default ProfilePage;
