/* eslint-disable react/prop-types */
export default function MentorRecomendedCard({mentor}) {
  const {clase} = mentor;
  console.log(clase)
  return (
    <article className='w-[588px] h-[258px] bg-gray-100 rounded-lg flex gap-4 justify-center items-center flex-col border-[2px] border-gray-200'>
      <header>
        <h2 className='text-md font-semibold'>Continúa perfeccionándote en el área tecnológica</h2>
      </header>
      <div>
      <figure>
        <img src="./img/mentorgroup.png" alt="" />
      </figure>
      <p className="text-xs text-[#707172] mt-4">¡Hay más de 3.000 Mentores en el área IT disponibles!</p>
      </div>
      <button className="bg-gradient-primary p-2 rounded-lg text-white hover:bg-transparent hover:text-[#AA5BFF]">
      Explorar Mentores en {clase}
      </button>
    </article>
  );
}
