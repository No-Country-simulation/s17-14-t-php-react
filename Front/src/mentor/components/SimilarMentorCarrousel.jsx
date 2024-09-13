import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../MentorCarousel.css"; // Importar el CSS personalizado

export default function SimilarMentorCarrousel( mentors ) {
  // Configuración del slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: false,
  };

  const filteredMentors = mentors.mentors.filter((mentor) => mentor.role === "mentor");

  return (
    <div className="bg-white p-4">
      <Slider {...settings}>
        {filteredMentors.map((mentor) => (
          <div key={mentor._id} className="mentor-slide"> {/* Clase personalizada */}
            <div className=" slider flex flex-col   p-2 w-64 h-64 rounded-lg bg-white  ">
              <img
                src={mentor.avatar}
                alt={`${mentor.first_name} ${mentor.last_name}`}
                className="w-full h-40  object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900">
                  {mentor.first_name} {mentor.last_name}
                </h3>
                <p className="text-sm text-gray-600">
                  {mentor.category.join(", ")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
