import Categories from "./components/Categories/Categories";
import Hero from "./components/hero/Hero";
import ListMentors from "./components/ListMentors/ListMentors";
import CarouselMentors from "./components/CarouselMentors/CarouselMentors";
export default function Home() {
  return (
    <section className="">
      <section className="-ml-[7px]">
        <Hero />
      </section>
      <section className="">
        <Categories />
      </section>
      <section className="ml-[114px]">
        <CarouselMentors />
      </section>
      <section className="ml-[82px]">
        <ListMentors />
      </section>
    </section>
  );
}
