import { useState } from "react";
import Card from "../../../common/components/CardMentor";
import Mentores from "../data/Mentores.json";

const CarouselMentors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const mentors = Mentores.slice(6, 15); // Asegúrate de que esto esté dentro del límite de 9.

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerPage;
      return newIndex < mentors.length ? newIndex : 0;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerPage;
      return newIndex >= 0 ? newIndex : mentors.length - itemsPerPage;
    });
  };

  return (
    <div className="relative w-full  py-12 ">
      <div className="pr-[70px]">
        <h1 className="text-[46px] font-semibold text-center text-[#707172] ">
          Inspírate
        </h1>
        <div className="flex flex-wrap items-center justify-center text-center">
          <h1 className="text-[56px] font-semibold mb-6 text-center">
            Con nuestros Mentores
          </h1>
          <h1 className="text-[56px] font-semibold mb-6 text-center bg-gradient-primary bg-clip-text text-transparent  py-1 px-4 hover:bg-violeta2 rounded-tr-lg rounded-bl-lg whitespace-nowrap select-none">
            Destacados
          </h1>
        </div>
      </div>

      <div className=" overflow-hidden  ">
        <div className=" bg-white/80 hover:bg-white pb-3 flex flex-row-reverse w-[93%]  rounded-full">
          <button
            className="  bg-white/80 hover:bg-white p-2 rounded-full"
            onClick={nextSlide}
            aria-label="Siguiente mentor"
          >
            <img src="./icons/arrowR.svg" className="size-[42px]" />
          </button>
          <button
            className="  bg-white/80 hover:bg-white p-2 rounded-full"
            onClick={prevSlide}
            aria-label="Mentor anterior"
          >
            <img src="./icons/arrowL.svg" className="size-[42px]" />
          </button>
        </div>
        <div className="flex gap-[30px]">
          {mentors
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((mentor, index) => (
              <div key={index}>
                <Card mentor={mentor} />
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(mentors.length / itemsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              className={`w-16 h-2 rounded-sm ${index * itemsPerPage === currentIndex ? "bg-[#545454]" : "bg-[#D9D9D9]"}`}
              onClick={() => setCurrentIndex(index * itemsPerPage)}
              aria-label={`Ir a la página ${index + 1}`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default CarouselMentors;
