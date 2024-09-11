import { useState, useEffect } from "react";
import MentorCard from "./components/MentorCard";
import MentorRecomendedCard from "./components/MentorRecomendedCard";
import Mentores from "../../common/data/Mentores.json";

export default function MentorProgress() {
  const mentors = Mentores;
  const [hasMentors, setHasMentors] = useState(false);

  // Simulamos aleatoriamente si hay mentores o no
  useEffect(() => {
    const randomMentorAvailability = Math.random() > 0.3; // 50% de probabilidad de que haya mentores
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
          <button className="bg-white text-sm font-semibold  bg-gradient-primary bg-clip-text text-transparent  py-2 px-4 border-2 border-violeta hover:bg-violeta2 rounded-tr-lg rounded-bl-lg whitespace-nowrap cursor-pointer select-none ">
            <span className=" text-md font-semibold">Buscar mentor</span>
          </button>
        </div>
      )}
    </div>
  );
}
