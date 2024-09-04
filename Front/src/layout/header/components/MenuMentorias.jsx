const MenuMentoriasModal = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute top-[11px] left-[193px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-violeta"></div>
        <div className="absolute top-full mt-5 left-[170px] right-0 w-[400px] bg-white bg-opacity-80 border-2 border-neutral-200 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transition-all duration-200 ease-in-out">
          {/* Triángulo de globo en la parte superior izquierda */}

          <div className="p-6">
            <div className="mb-6 my-2">
              <h2 className="text-base font-semibold flex items-center text-violeta">
                <img
                  src="./icons/tendencia-icon.svg"
                  className="flex items-center pr-2 select-none"
                  alt="mentos logo"
                />
                Tendencia
              </h2>
              <ul className="mt-3 ml-[120px] space-y-3">
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
                    className="text-gris text-sm font-semibold hover:text-violeta2 transition-colors duration-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="text-violeta hover:text-violeta2 underline ml-[120px] font-semibold  text-sm mt-3 inline-block"
              >
                Ver Todo
              </a>
            </div>

            <div>
              <div className="flex items-center h-[32px] space-x-1 bg-gradient-to-r from-blancoVioleta to-violeta rounded-xl">
                <img src="./icons/new.svg" className="ml-2 size-[14px]" alt="newIcon" />
                <h2 className="text-base font-semibold text-violeta">
                  Nuevos
                </h2>
              </div>
              <ul className="mt-2 space-y-2 ml-[120px] ">
                {["Química", "Cocina", "Oratoria"].map((item) => (
                  <li
                    key={item}
                    className="text-gris hover:text-violeta2 text-sm font-semibold transition-colors duration-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="text-violeta  ml-[120px] underline hover:text-violeta2 font-semibold text-sm mt-3 inline-block"
              >
                Ver Todo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuMentoriasModal;
