import FeaturedProperties from "../features/Home/components/FeaturedProperties";
import Stats from "../features/Home/components/FeaturedProperties/components/Stats";
import HeroBanner from "../features/Home/components/HeroBanner";
import HeroBooks from "../features/Home/components/HeroBooks";
import MeetTheTeam from "../features/Home/components/MeetTheTeam";
import Partners from "../features/Home/components/Partners";
import Testimonials from "../features/Home/components/Testimonials";
import DefaultLayout from "../features/Layouts/DefaultLayout";

export default function Home({ featuredProperties }) {
  return (
    <>
      <DefaultLayout>
        <HeroBooks />
        {/* <HeroBanner /> */}
        <FeaturedProperties featuredProperties={featuredProperties} />
        <Stats />
        <MeetTheTeam />
        <Partners />
        <Testimonials />
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps() {
  const { hits } = require("../features/data/properties");
  return {
    props: { featuredProperties: hits.slice(0, 5) },
  };
}
