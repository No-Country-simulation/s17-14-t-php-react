import React from 'react';
import FAQItem from './FAQItem';

function FAQItemContainer() {
    const faqs = [     
        {
            question: '¿Cómo contratar un mentor?',
            answer: 'Puedes contratar un mentor siguiendo los pasos indicados en nuestra plataforma.'
        },
        {
            question: '¿Qué métodos de pago acepta Mentors?',
            answer: 'Aceptamos pagos mediante tarjeta de crédito, PayPal, y otras formas de pago digitales.'
        },
        {
            question: '¿Puedo programar una sesión de prueba antes de contratar?',
            answer: 'Sí, ofrecemos una sesión de prueba gratuita para que conozcas a tu mentor.'
        },
        {
            question: '¿Cómo puedo comunicarme con mi mentor?',
            answer: 'Puedes comunicarte con tu mentor a través de nuestro sistema de mensajería interno.'
        },
        {
            question: '¿Puedo cancelar o reprogramar una sesión?',
            answer: 'Sí, puedes cancelar o reprogramar una sesión hasta 24 horas antes de la misma.'
        },
    ];

    return (
        <div className="flex gap-4 flex-col items-center justify-center min-h-screen bg-gray-100  ">
            <h1 className="text-[40px] text-gray-500 font-semibold text-center mt-12 ">¿Dudas?</h1>
            <h2 className="text-[48px] font-semibold text-center text-purple-600 mb-6"><span className='text-black'>Consulta nuestras </span> FAQs</h2>
            <div className=" flex flex-col w-full px-[120px] min-h-[324px] gap-4  ">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
            <div className="mt-8 ">
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
                    Ponte en contacto con Nosotros
                </button>
            </div>
        </div>
    );
}

export default FAQItemContainer;


