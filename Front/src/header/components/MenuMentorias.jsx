import newIcon from "../../assets/new.svg";
import { TrendingUp } from "lucide-react";

const MenuMentoriasModal = () => {
  return (
    <>
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
              <img src={newIcon} className=" h-4 w-5" alt="newIcon" />
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
    </>
  );
};

export default MenuMentoriasModal;
