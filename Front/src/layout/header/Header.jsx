/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { FaSearch, FaRegHeart, FaChevronDown, FaUserCircle } from 'react-icons/fa';
import MenuMentoriasModal from './components/MenuMentorias';
import MenuPerfilModal from './components/MenuPerfil';
import { RiUserAddLine } from 'react-icons/ri';
import { MdLogin } from 'react-icons/md';
import { login } from '../../common/service/auth/login';

const Header = () => {
  const [isMenuMentoriasOpen, setIsMenuMentoriasOpen] = useState(false);
  const [isMenuPerfilOpen, setIsMenuPerfilOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');  // Cambiado de 'username' a 'email'
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await login(email, password);  // Usar 'email' en lugar de 'username'
      console.log(response);
      // Aquí puedes manejar la respuesta del backend, como guardar el token en el estado o localStorage
      setIsModalOpen(false); // Cierra el modal después de iniciar sesión
    } catch (error) {
      console.error('Error en el login:', error);
    }
  };

  return (
    <div className='min-[80px]'>
      <nav className='fixed top-0 left-0 right-0 backdrop-blur-md bg-white/60 z-50'>
        <div className='max-w-full mx-auto py-[10px] px-4 sm:px-6 lg:px-2'>
          <div className='flex items-center justify-between h-16 mx-12'>
            <div className='flex'>
              <div className='flex-shrink-0'>
                <img
                  src='./icons/logo.svg'
                  className='flex items-center py-2 select-none'
                  alt='mentos logo'
                />
              </div>
              <div className='hidden md:block relative'>
                <div className='ml-10 flex items-baseline gap-6'>
                  <a
                    href='/'
                    className='text-black hover:text-violeta2 py-3 rounded-md text-base font-semibold cursor-pointer select-none'
                  >
                    Inicio
                  </a>
                  <div
                    className='flex items-center cursor-pointer'
                    onClick={() => setIsMenuMentoriasOpen(!isMenuMentoriasOpen)}
                  >
                    <a className='text-black hover:text-violeta2 pr-2 py-3 rounded-md text-base font-semibold cursor-pointer select-none'>
                      Mentorías
                    </a>
                    <FaChevronDown
                      className={`text-black transition-transform duration-200 select-none ${isMenuMentoriasOpen ? 'rotate-180' : ''}`}
                      size={14}
                    />
                  </div>
                  <a
                    href='#'
                    className='text-black hover:text-violeta2 py-3 rounded-md text-base font-semibold cursor-pointer select-none'
                  >
                    Ayuda
                  </a>
                </div>

                {isMenuMentoriasOpen && <MenuMentoriasModal />}
              </div>
            </div>
            <div className='flex flex-row gap-6 h-[42px] items-right'>
              <div className='flex items-center w-[360px] border-violeta border-2 rounded-lg'>
                <FaSearch
                  className='ml-2 text-black'
                  size={18}
                />
                <input
                  type='search'
                  placeholder='Buscar mentoría...'
                  className='bg-violeta text-sm font-medium placeholder-black bg-clip-text text text-violeta py-1 px-4 flex-1 outline-none'
                />
              </div>
              {isLogin ? (
                <div className='flex gap-6'>
                  <button
                    onClick={() => setIsModalOpen(true)} // Abre el modal al hacer clic
                    className='bg-white text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent py-1 px-4 border-2 border-violeta hover:bg-violeta2 rounded-tr-lg rounded-bl-lg whitespace-nowrap cursor-pointer select-none'
                  >
                    <MdLogin className='inline-block mr-2' size={16} />
                    Iniciar Sesión
                  </button>
                  <button className='bg-white text-sm font-semibold bg-gradient-primary text-blanco py-1.5 px-4 hover:bg-violeta2 rounded-tr-lg rounded-bl-lg cursor-pointer select-none'>
                    <RiUserAddLine className='inline-block mr-2' size={16} />
                    Registrarse
                  </button>
                </div>
              ) : (
                <div className='flex flex-nowrap gap-6 items-center'>
                  <div className='flex items-center bg-transparent rounded-full'>
                    <FaRegHeart
                      className='text-black transition-transform'
                      size={24}
                    />
                  </div>
                  <div
                    className='flex gap-4 cursor-pointer select-none'
                    onClick={() => setIsMenuPerfilOpen(!isMenuPerfilOpen)}
                  >
                    <div className='flex items-center'>
                      <FaUserCircle
                        className='text-black'
                        size={40}
                      />
                    </div>
                    <div className='flex flex-col items-start'>
                      <span className='text-sm text-black font-medium'>
                        Omar Luna
                      </span>
                      <span className='text-xs text-[#252729] text-muted-foreground'>
                        Mentee
                      </span>
                    </div>
                    <FaChevronDown
                      className={`text-black transition-transform duration-200 ${isMenuPerfilOpen ? 'rotate-180' : ''}`}
                      size={14}
                    />
                  </div>
                  {isMenuPerfilOpen && <MenuPerfilModal />}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Modal de inicio de sesión */}
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50'>
          <div className='bg-white rounded-lg p-6 w-full max-w-md'>
            <h2 className='text-xl font-bold mb-4'>Iniciar Sesión</h2>
            <input
              type='email'  // Cambiado a 'email'
              placeholder='Correo electrónico'
              className='border border-gray-300 rounded-md p-2 mb-2 w-full'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Contraseña'
              className='border border-gray-300 rounded-md p-2 mb-4 w-full'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='flex justify-between'>
              <button
                onClick={handleLogin}
                className='bg-violeta text-white py-2 px-4 rounded-md'
              >
                Iniciar Sesión
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className='bg-gray-300 text-black py-2 px-4 rounded-md'
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
