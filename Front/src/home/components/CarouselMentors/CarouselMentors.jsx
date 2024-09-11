import { useState, useEffect } from "react";
import Card from "../../../common/components/CardMentor";
import Mentores from "../../../common/data/Mentores.json";

const CarouselMentors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const mentors = Mentores.slice(6, 15); // Asegúrate de que esto esté dentro del límite de 9.

  // Función para actualizar el número de tarjetas a mostrar según el tamaño de la pantalla
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 780) {
        setItemsPerPage(1); // Mostrar 1 tarjetas si la pantalla es más chica. 
      } else {
        setItemsPerPage(3); // Mostrar 3 tarjetas si es más pequeña
      }
    };

    // Ejecuta la función al cargar el componente y cuando la ventana cambia de tamaño
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    // Limpia el listener al desmontar el componente
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Avanzar una tarjeta
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex < mentors.length ? newIndex : 0; // Reinicia si llega al final
    });
  };

  // Retroceder una tarjeta
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex >= 0 ? newIndex : mentors.length - 1; // Va al último si llega al inicio
    });
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center py-12">
      <div className="">
        <h1 className="text-[46px] font-semibold text-center text-[#707172]">
          Inspírate
        </h1>
        <div className="flex flex-wrap items-center justify-center text-center">
          <h1 className="text-[56px] font-semibold mb-6 text-center">
            Con nuestros Mentores
          </h1>
          <h1 className="text-[56px] font-semibold mb-6 text-center bg-gradient-primary bg-clip-text text-transparent py-1 px-4 hover:bg-violeta2 rounded-tr-lg rounded-bl-lg whitespace-nowrap select-none">
            Destacados
          </h1>
        </div>
      </div>

      <div className="overflow-hidden xl:w-[1212px] md:w-[384px] flex flex-col">
        <div className="bg-white/80 hover:bg-white pb-3 flex flex-row-reverse rounded-full">
          <button
            className="bg-white/80 hover:bg-white p-2 rounded-full"
            onClick={nextSlide}
            aria-label="Siguiente mentor"
          >
            <img src="./icons/arrowR.svg" className="size-[42px]" />
          </button>
          <button
            className="bg-white/80 hover:bg-white p-2 rounded-full"
            onClick={prevSlide}
            aria-label="Mentor anterior"
          >
            <img src="./icons/arrowL.svg" className="size-[42px]" />
          </button>
        </div>

        {/* Tarjetas del carrusel */}
        <div className="flex gap-[30px] justify-center">
          {mentors
            .slice(currentIndex, currentIndex + itemsPerPage) // Mostrar tarjetas dentro del rango visible
            .map((mentor, index) => (
              <div key={index}>
                <Card mentor={mentor} />
              </div>
            ))}
        </div>
      </div>

      {/* Indicadores de navegación */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: mentors.length }).map((_, index) => (
          <button
            key={index}
            className={`w-4 h-2 rounded-sm ${
              index === currentIndex ? "bg-[#545454]" : "bg-[#D9D9D9]"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a la tarjeta ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselMentors;
