/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react';
import { getCategoryPhoto } from '../../../common/service/unplash/getPhotos';
import Slider from 'react-slick';
import PeopleIcon from '../../../common/components/icons/PeopleIcon';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './categories.css';

const categories = [
  { en: 'Art', es: 'Arte', amount: 500 },
  { en: 'Mathematics', es: 'Matemáticas', amount: 150 },
  { en: 'Physics', es: 'Física', amount: 120 },
  { en: 'Biology', es: 'Biología', amount: 150 },
  { en: 'Business', es: 'Negocios', amount: 1000 },
  { en: 'Programming', es: 'Programación', amount: 4400 },
  { en: 'Speech', es: 'Oratoria', amount: 500 }
];

export default function Categories() {
  const [categoryImages, setCategoryImages] = useState({});
  const apiKeyPhoto = import.meta.env.VITE_UNSPLASH_API_KEY;
  const imageRefs = useRef([]);

  useEffect(() => {
    async function fetchImages() {
      const images = {};
      for (const category of categories) {
        const imageUrl = await getCategoryPhoto(category.en, apiKeyPhoto);
        images[category.es] = imageUrl;
      }
      setCategoryImages(images);
    }
    fetchImages();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1600,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '50px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className=' relative slider-container z-20'>
      <header className='pl-[120px]'>
        <small className='text-base'>Explora</small>
        <h2 className='text-lg font-semibold mb-4'>Categorías Populares</h2>
      </header>

      <div className='relative h-[172px]'>
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div
              key={category.es}
              className='category-item fit-cover h-[172px] outline-none '
              ref={el => (imageRefs.current[index] = el)}
            >
              <img
              
                src={categoryImages[category.es]}
                alt={category.es}
                className='w-full h-full object-cover rounded-lg fade-out'
              />
              <div className='absolute bottom-1 left-5 text-white z-10'>
                <h3 className='text-base font-semibold'>{category.es}</h3>
                <div className='w-[54px] flex items-center justify-center gap-1 border rounded-xl'>
                  <PeopleIcon />
                  <span className='text-[8px]'>+{category.amount}</span>
                </div>
              </div>
              <div className='gradient-bottom rounded-lg'></div>
            </div>
          ))}
        </Slider>
        <div className='gradient-left'></div>
        <div className='gradient-right'></div>
      </div>
    </div>
  );
}
