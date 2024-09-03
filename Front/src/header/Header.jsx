//import GoogleLoginModal from "./components/GoogleLoginModal";
import { ChevronDown, Heart } from "lucide-react";
import logo from "../assets/logo.svg";
import lupa from "../assets/lupa.svg";
import { useState } from "react";
import MenuMentoriasModal from "./components/MenuMentorias";
const Header = () => {
  //const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[80px]">
      <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-white/30 shadow-lg">
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-2">
          <div className="flex items-center justify-between h-16">
            <div className="flex ">
              <div className="flex-shrink-0">
                <img
                  src={logo}
                  className="flex items-center py-2"
                  alt="mentos logo"
                />
              </div>
              <div className="hidden md:block relative">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/"
                    className="text-gris hover:text-violeta2 px-3 py-3 rounded-md text-lg font-medium"
                  >
                    Inicio
                  </a>
                  <div className="flex items-center">
                    <a
                      className="text-gris hover:text-violeta2 px-3 py-3 rounded-md text-lg font-medium"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      Mentorías{" "}
                    </a>
                    <ChevronDown
                      className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                        isMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <a
                    href="#"
                    className="text-gris hover:text-violeta2 px-3 py-3 rounded-md text-lg font-medium"
                  >
                    Ayuda
                  </a>
                </div>

                {isMenuOpen && <MenuMentoriasModal />}
              </div>
            </div>
            <div className="flex flex-row gap-4 items-right">
              <div className="flex items-center border-violeta border-2 rounded-lg">
                <img src={lupa} className="ml-2 h-5 w-6" alt="vector" />
                <input
                  type="search"
                  placeholder="Buscar mentoría..."
                  className="bg-white text-lg font-medium bg-gradient-to-br from-violeta to-violeta2 bg-clip-text text-transparent py-1 px-4 flex-1 outline-none"
                />
              </div>
              {isLogin ? (
                <div className="flex gap-4">
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="bg-white text-lg  bg-gradient-primary bg-clip-text text-transparent font-semibold py-1 px-4 border-2 border-violeta hover:bg-violeta2 rounded-tr-lg rounded-bl-lg whitespace-nowrap"
                  >
                    Iniciar Sesión
                  </button>
                  {/* 
                  onClick={() => setShowModal(true)}
                  <GoogleLoginModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                  /> */}
                  <button className="bg-white text-lg bg-gradient-primary text-blanco py-1.5 px-4 hover:bg-violeta2 rounded-tr-lg rounded-bl-lg">
                    Registrarse
                  </button>
                </div>
              ) : (
                <div className="flex flex-nowrap gap-4 items-center">
                  <a className="  flex items-center h-10 w-10 p-2 bg-white/20 rounded-full backdrop-blur-sm">
                    <Heart className=" text-violeta size-12" />
                  </a>
                  <div
                    className="flex gap-4 "
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    <div className="flex items-center ">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="Omar Luna"
                        className=" h-10 w-10 rounded-full"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-sm text-gris font-medium">
                        Omar Luna
                      </span>
                      <span className="text-xs  text-gris text-muted-foreground">
                        Mentee
                      </span>
                    </div>
                    <ChevronDown
                      className={`ml-0 h-6 w-4 transition-transform duration-200 ${
                        isMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
