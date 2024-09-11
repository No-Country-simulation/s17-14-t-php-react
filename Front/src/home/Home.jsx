import Categories from "./components/Categories/Categories";
import Hero from "./components/hero/Hero";
import ListMentors from "./components/ListMentors/ListMentors";
import CarouselMentors from "./components/CarouselMentors/CarouselMentors";
import FAQItemContainer from "./components/faqs/FAQItemContainer";
import MentorProgress from "./mentorprogress/MentorProgress";

export default function Home() {
  return (
    <section className="">
      <section className="">
        <Hero />
      </section>
      <section>
        <MentorProgress />
      </section>
      <section className=" overflow-x-hidden">
        <Categories />
      </section>

      <CarouselMentors />

      <ListMentors />

      <FAQItemContainer />
    </section>
  );
}
