import Categories from "./components/Categories/Categories";
import Hero from "./components/hero/Hero";
import ListMentors from "./components/ListMentors/ListMentors";
import CarouselMentors from "./components/CarouselMentors/CarouselMentors";
import FAQItemContainer from "./components/faqs/FAQItemContainer";
import MentorProgress from "./mentorprogress/MentorProgress";

export default function Home() {
  return (
    <section className="">
      <section className="-ml-[0.5%]">
        <Hero />
      </section>
      <section>
        <MentorProgress />
      </section>
      <section className="">
        <Categories />
      </section>
      <section className="ml-[7.91%]">
        <CarouselMentors />
      </section>
      <section className="ml-[5.69%]">
        <ListMentors />
      </section>

      <FAQItemContainer/>      
      
    </section>
  );
}
