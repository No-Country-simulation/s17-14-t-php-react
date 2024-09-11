import { useState } from 'react';
import Mentores from '../common/data/Mentores.json';
export default function MentorInfoPage() {
  const [average, setAverage] = useState(0);
  const [comentNum, setComentNum] = useState(0);
  const mentor = Mentores[0];
  console.log(mentor);
  return (
    <section className='mt-24  '>
      <img className='w-full relative' src='./img/mentorinfohead.png' alt='' />
      <div className=''>
        <header className=' w-full '>
          <div className=' flex items-center justify-between  bg-red-500'>
            <div className=' absolute top-40  flex gap-4 items-center'>
            <img
              className='w-[214px] h-[226px] rounded-md'
              src={mentor.imagen_de_perfil}
              alt='mentor'
            />
            <div>
              <h1 className='font-bold text-2xl'>{mentor.clase}</h1>
              <p className='text-sm'>{mentor.nombre_completo}</p>
              <div className=' flex items-center'>
                <span className='text-xs font-normal h-4 text-white '>
                  {average}
                </span>
                <img src='./icons/star.svg' className='  ' />
                <span className='text-xs font-normal h-4 text-neutral-300 '>
                  ({comentNum})
                </span>
              </div>
            </div>
            </div>
            <figure>
            <img src="./icons/heartCard.svg" alt="" />
          </figure>
          </div>
   
        </header>
      </div>
    </section>
  );
}
