import Background from "../components/index-body/Background";
import News from "../components/index-body/News/News";

function Home() {
  return (
    <div className="bg-pink-main h-screen pt-20">
      <Background />
      <h1 className="text-7xl text-blue-main w-96 ml-20 text-shadow-lg pt-28 pl-20 text-left z-10 drop-shadow-lg">
        VINTAGE IN SHAPE AND SOUND!
      </h1>
      <News />
    </div>
  );
}

export default Home;
