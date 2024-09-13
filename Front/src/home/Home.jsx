import Categories from "./components/Categories/Categories";
import Hero from "./components/hero/Hero";
import ListMentors from "./components/ListMentors/ListMentors";
import CarouselMentors from "./components/CarouselMentors/CarouselMentors";
import FAQItemContainer from "./components/faqs/FAQItemContainer";
import MentorProgress from "./mentorprogress/MentorProgress";
import { getAllMentor } from "../redux/actions/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
    
 
  useEffect(() => {
    dispatch(getAllMentor());
 
  }, [dispatch]);

  
  return (
    <section className="">
      <section className="">
        <Hero />
      </section>
      <section className="flex justify-center bg-[#FAFAFA]">
        <MentorProgress />
      </section>
      <section className=" overflow-x-hidden bg-[#FAFAFA]">
        <Categories />
      </section>

      <CarouselMentors />

      <ListMentors />

      <FAQItemContainer />
    </section>
  );
}
