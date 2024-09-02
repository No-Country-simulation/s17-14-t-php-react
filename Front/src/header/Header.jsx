import GoogleLoginModal from "./components/GoogleLoginModal";
import { ChevronDown, TrendingUp } from "lucide-react";
import logo from "../assets/logo.svg";
import lupa from "../assets/lupa.svg";
import newIcon from "../assets/new.svg";
import { useState } from "react";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen ">
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
                    <button
                      className="text-gris hover:text-violeta2 px-3 py-3 rounded-md text-lg font-medium"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      Mentorías{" "}
                    </button>
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

                {isMenuOpen && (
                  <div
                    className={`absolute top-full mt-8 left-0 right-0 bg-white bg-opacity-20 border-2 border-gris backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transition-all duration-200 ease-in-out`}
                  >
                    <div className="p-6">
                      <div className="mb-6">
                        <h2 className="text-xl font-semibold flex items-center text-violeta">
                          <TrendingUp className="mr-2 h-5 w-5 text-black" />
                          Tendencia
                        </h2>
                        <ul className="mt-2 ml-24 space-y-2">
                          {[
                            "Arte",
                            "Matemáticas",
                            "Física",
                            "Biología",
                            "Negocios",
                            "Programación",
                            "Diseño",
                          ].map((item) => (
                            <li
                              key={item}
                              className="text-gris hover:text-violeta2 transition-colors duration-200"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                        <a
                          href="#"
                          className="text-violeta hover:text-violeta2 underline ml-24  text-sm mt-2 inline-block"
                        >
                          Ver Todo
                        </a>
                      </div>

                      <div>
                        <div className="flex items-center h-6 space-x-1 bg-gradient-to-r from-blancoVioleta to-violeta rounded-lg">
                          <img
                            src={newIcon}
                            className=" h-4 w-5"
                            alt="newIcon"
                          />
                          <h2 className="  text-base h-6 font-semibold  font-medium text-violeta ">
                            Nuevos
                          </h2>
                        </div>
                        <ul className="mt-2 space-y-2 ml-24 ">
                          {["Química", "Cocina", "Oratoria"].map((item) => (
                            <li
                              key={item}
                              className="text-gris hover:text-violeta2   transition-colors duration-200"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                        <a
                          href="#"
                          className="text-violeta  ml-24 underline hover:text-violeta2 text-sm mt-2 inline-block"
                        >
                          Ver Todo
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-row gap-4 items-right">
              <div className="flex items-center border-violeta border-2 rounded-lg">
                <img src={lupa} className="ml-2 h-5 w-6" alt="vector" />
                <input
                  type="search"
                  placeholder="Buscar mentoría..."
                  className="bg-white text-lg font-bold bg-gradient-to-br from-violeta to-violeta2 bg-clip-text text-transparent py-1 px-4 flex-1 outline-none"
                />
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="bg-white text-lg font-bold bg-gradient-to-br from-violeta to-violeta2 bg-clip-text text-transparent py-1 px-4 border-2 border-violeta hover:bg-violeta2 rounded-tr-lg rounded-bl-lg whitespace-nowrap"
              >
                Iniciar Sesión
              </button>

              <GoogleLoginModal
                showModal={showModal}
                setShowModal={setShowModal}
              />
              <button className="bg-white text-lg bg-gradient-to-br from-violeta to-violeta2 text-blanco py-1.5 px-4 hover:bg-violeta2 rounded-tr-lg rounded-bl-lg">
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
