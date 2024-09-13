import { useEffect, useState } from 'react';
import { getUsers } from '../common/service/users/getUsers';

export default function MentorInfoPage() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setMentors(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const mentor = mentors[0];
  console.log(mentor);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!mentor) return <p>No se encontró ningún mentor.</p>;

  // Calcular promedio de las calificaciones y cantidad de reseñas
  const reviews = mentor.reviews || [];
  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0
    ? (reviews.reduce((sum, review) => sum + review.overallRating, 0) / totalReviews).toFixed(1)
    : 'N/A'; // Si no hay reseñas, se muestra "N/A"

  // Asegurarse de que el promedio esté entre 1 y 5
  const normalizedAverageRating = Math.max(1, Math.min(5, parseFloat(averageRating)));

  const experience = mentor.experience && mentor.experience[0];
  const title = experience?.title || 'Sin título';
  const place = experience?.place || 'Sin lugar';

  return (
    <section className='mt-24'>
      <img className='w-full' src='./img/mentorinfohead.png' alt='' />
      <div>
        <header className='px-[120px]'>
          <div className='absolute top-48 flex gap-4 items-center'>
            <img
              className='w-[214px] h-[226px] rounded-md'
              src={mentor.avatar}
              alt='mentor'
            />
            <div>
              <h1 className='font-bold text-2xl'>{mentor.category}</h1>
              <p className='text-sm text-[#545557] '>
                {mentor.first_name} {mentor.last_name}, {title} en {place}
              </p>
              <div className='flex items-center gap-1'>
                <img src='./icons/star.svg' className='' alt='star' />
                <span className='text-sm font-semibold h-4 '>{normalizedAverageRating}</span>
                <span className='text-sm font-normal h-4 text-neutral-300'>
                  ({totalReviews} reseñas)
                </span>
              </div>
            </div>
          </div>
          <figure>
            <img src='./icons/heartCard.svg' alt='' />
          </figure>
        </header>
      </div>
    </section>
  );
}
