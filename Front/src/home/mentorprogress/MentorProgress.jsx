import { useState, useEffect } from "react";
import MentorCard from "./components/MentorCard";
import MentorRecomendedCard from "./components/MentorRecomendedCard";
import Mentores from "../../common/data/Mentores.json";

export default function MentorProgress() {
  const mentors = Mentores;
  const [hasMentors, setHasMentors] = useState(false);

  // Simulamos aleatoriamente si hay mentores o no
  useEffect(() => {
    const randomMentorAvailability = Math.random() > 0.5; // 50% de probabilidad de que haya mentores
    setHasMentors(randomMentorAvailability);
  }, []);

  const mentorRandom = Math.floor(Math.random() * mentors.length);

  return (
    <div className="px-[120px] my-12">
      <header className="mb-6">
        <small className="text-base text-[#707172]">Progreso</small>
        <h1 className="text-lg font-bold">Mis mentores</h1>
      </header>

      {hasMentors ? (
        <div className="flex gap-6">
          <MentorCard mentor={mentors[mentorRandom]} />
          <MentorRecomendedCard mentor={mentors[mentorRandom]} />
        </div>
      ) : (
        // Si no hay mentores, mostramos el mensaje y botón
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="text-lg font-bold text-[#252729]">
            Aún no tienes mentores, ¡tu próximo gran paso está a un solo clic!
          </h2>
          <p className="text-sm text-[#707172] font-semibold">
            Elige un mentor y empieza a transformar tu futuro
          </p>
          <button className="relative p-3 rounded-lg text-[#AA5BFF] hover:text-white group">
            <span className="relative z-10 text-md font-semibold">Buscar mentor</span>
            <div
              className="absolute inset-0 rounded-lg border-2 border-transparent
              bg-gradient-to-r from-[#AA5BFF] to-[#F317FF] 

              group-hover:bg-transparent"
            >
              <div className="h-full w-full bg-white rounded-lg group-hover:bg-gradient-to-r from-[#AA5BFF] to-[#F317FF]"></div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
