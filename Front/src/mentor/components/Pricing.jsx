/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Pricing({ mentor }) {
  const { pricing } = mentor;

  // Asegurarse de que pricing esté definido y sea un array
  const sortedPricing = (pricing || []).sort((a, b) => a - b);
  console.log(pricing)
  // Manejar los casos en los que hay menos de tres precios
  const basic = sortedPricing[0]?.toFixed(2) || '0.00';
  const premium = sortedPricing[1]?.toFixed(2) || '0.00';
  const pack = sortedPricing[2]?.toFixed(2) || '0.00';

  const [activeTab, setActiveTab] = useState('basic'); // Por defecto mostrar el básico

  // Ordenar los precios de menor a mayor
 

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg border">
      {/* Solapas */}
      <div className="flex justify-around mb-4">
        <button
          className={`px-4 py-2 font-semibold text-sm ${
            activeTab === 'basic'
              ? 'border-b-4 border-[#AA58FF] text-[#AA58FF]'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('basic')}
        >
          Básico
        </button>
        <button
          className={`px-4 py-2 font-semibold text-sm ${
            activeTab === 'premium'
              ? 'border-b-4 border-[#AA58FF] text-[#AA58FF]'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('premium')}
        >
          Premium
        </button>
        <button
          className={`px-4 py-2 font-semibold text-sm ${
            activeTab === 'pack'
              ? 'border-b-4 border-[#AA5BFF] text-[#AA5BFF]'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('pack')}
        >
          Pack
        </button>
      </div>

      {/* Cuerpo de la solapa seleccionada */}
      <div className="">
        {activeTab === 'basic' && (
          <div>
            <h3 className="text-xl font-bold">${basic} / Mensual</h3>
            <div className='mt-4 flex flex-col gap-1'>
              <p className="text-md font-semibold">Mentoría 1:1</p>
              <div className='flex gap-1 items-center'>
                <img src="/icons/call-dropped.svg" alt="" />
                <p className='text-xs'>45 minutos, 2 sesiones por semana</p>
              </div>
              <div className='flex gap-1 items-center'>
                <img src="/icons/message-circle.svg" alt="" />
                <p className='text-xs'>Acceso al chat 24/7</p>
              </div>
              <div className='flex gap-1 items-center'>
                <img src="/icons/time-circle.svg" alt="" />
                <p className='text-xs'>Respuestas en 24 horas o menos</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'premium' && (
          <div>
            <h3 className="text-xl font-bold">${premium} / Mensual</h3>
            <div className='mt-4 flex flex-col gap-1'>
              <p className="text-md font-semibold">Mentoría 1:1</p>
              <div className='flex gap-1 items-center'>
                <img src="./icons/call-dropped.svg" alt="" />
                <p className='text-xs'>2 horas, 2 sesiones por semana</p>
              </div>
              <div className='flex gap-1 items-center'>
                <img src="./icons/message-circle.svg" alt="" />
                <p className='text-xs'>Acceso al chat 24/7</p>
              </div>
              <div className='flex gap-1 items-center'>
                <img src="./icons/time-circle.svg" alt="" />
                <p className='text-xs'>Respuestas en 24 horas o menos</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pack' && (
          <div>
            <h3 className="text-xl font-bold">${pack} / Mensual</h3>
            <div className='mt-4 flex flex-col gap-1'>
              <p className="text-md font-semibold">Mentoría 1:1</p>
              <div className='flex gap-1 items-center'>
                <img src="./icons/call-dropped.svg" alt="" />
                <p className='text-xs'>Ilimitado</p>
              </div>
              <div className='flex gap-1 items-center'>
                <img src="./icons/message-circle.svg" alt="" />
                <p className='text-xs'>Acceso al chat 24/7</p>
              </div>
              <div className='flex gap-1 items-center'>
                <img src="./icons/time-circle.svg" alt="" />
                <p className='text-xs'>Respuestas inmediata</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <button className='mt-6 bg-gradient-primary text-white text-sm py-1 px-4 border-2 border-violeta hover:bg-violeta2 rounded-tr-lg rounded-bl-lg whitespace-nowrap select-none w-full'>
        Contratar
      </button>
    </div>
  );
}
