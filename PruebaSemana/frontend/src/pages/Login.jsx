import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../services/firebase";

export default function Login() {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">

      {/* 🔙 Botón volver */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 text-sm text-gray-600 hover:text-gray-900 transition"
      >
        ← Volver
      </button>

      {/* Card */}
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-center">

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Bienvenido
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Inicia sesión para continuar
        </p>

        <button
          onClick={login}
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg py-2 px-4 text-gray-700 hover:bg-gray-100 transition"
        >
          Continuar con Google
        </button>

      </div>
    </div>
  );
}