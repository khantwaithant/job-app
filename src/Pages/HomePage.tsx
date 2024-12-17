import CardSection from "../components/CardSection";
import Hero from "../components/Hero";
import JobListing from "../components/JobListing";
import ViewAll from "../components/ViewAll";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CardSection />
      <JobListing isHome={true} />
      <ViewAll />
    </>
  );
};

export default HomePage;
