import Categories from "./components/Categories/Categories";
import Hero from "./components/hero/Hero";
import Card from "../common/components/CardMentor";
import ListMentors from "./components/ListMentors/ListMentors";
export default function Home() {
  return (
    <section className="">
      <section className="">
        <Hero />
      </section>

      <Categories />
      <ListMentors/>
    </section>
  );
}
