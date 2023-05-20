import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Minimalistic & Powerful
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Social Media</span>
      </h1>
      <p className="desc text-center">
        Better is a social media platform for modern world to discover, create
        and share creative ideas
      </p>
      <Feed />
    </section>
  );
};

export default Home;
