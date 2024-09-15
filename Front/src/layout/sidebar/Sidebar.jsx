import React, { useState } from 'react';
import { FaHome, FaComments, FaBook, FaHeart, FaCalendarAlt, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { MdWork, MdChatBubble, MdHelpOutline } from 'react-icons/md';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIconClick = (index) => {
    setActiveIndex(index);
  };

  const icons = [
    { icon: <FaHome />, label: 'Panel principal' },
    { icon: <MdWork />, label: 'Mis mentorías' },
    { icon: <MdChatBubble />, label: 'Chat' }, 
    { icon: <FaBook />, label: 'Materiales' },
    { icon: <FaHeart />, label: 'Mis favoritos' },
    { icon: <FaCalendarAlt />, label: 'Eventos' },
    { icon: <FaQuestionCircle />, label: 'Ayuda' }
  ];

  return (
    <nav className="flex flex-col w-20 bg-white border-r h-screen p-4">
      {icons.map((item, index) => (
        <div key={item.label} onClick={() => handleIconClick(index)} className={`flex items-center p-2 cursor-pointer hover:text-gray-900 ${activeIndex === index ? 'text-purple-500' : 'text-gray-500'}`}>
          <div className="w-6 h-6">
            {item.icon}
          </div>
          <span className="ml-2 text-sm">{item.label}</span>
        </div>
      ))}
      <div className="mt-auto flex items-center p-2 cursor-pointer text-gray-500 hover:text-gray-900" onClick={() => console.log('Cerrar sesión')}>
        <FaSignOutAlt className="w-6 h-6" />
        <span className="ml-2 text-sm">Cerrar sesión</span>
      </div>
    </nav>
  );
};


export default Sidebar;
