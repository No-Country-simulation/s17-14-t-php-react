import Card from "../../../common/components/CardMentor";
import Mentores from "../../../common/data/Mentores.json";

function ListMentors() {
  const mentors = Mentores.slice(0,6);
  return (
    <div className="container  px-8 py-8">
      <h1 className="text-base font-normal  text-[#707172] mb-2">Mentorías para ti</h1>
      <p className="text-black text-lg font-semibold mb-7">Basado en tus últimas búsquedas</p>
      <div className="grid gap-6 grid-cols-1 max-sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  ">
        {mentors.map((mentor, index) => (
          <Card key={index} mentor={mentor} />
        ))}
      </div>
    </div>
  );
}

export default ListMentors;
