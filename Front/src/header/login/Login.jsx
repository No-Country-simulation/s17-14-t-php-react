import { useState } from "react";
import GoogleLoginModal from "./components/GoogleLoginModal";

const Login = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="Login">
      <button
        onClick={() => setShowModal(true)}
        className="bg-white text-lg font-bold bg-gradient-to-r from-purple to-purple2 bg-clip-text text-transparent py-2 px-4 border-2 border-purple hover:bg-blue-600 rounded-tr-lg rounded-bl-lg"
      >
        Iniciar Sesión
      </button>

      <GoogleLoginModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Login;
