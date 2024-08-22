import { Helmet } from "react-helmet-async";
import PostPart from "../../components/HomePage/PostPart";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="grid grid-cols-[3fr] gap-x-8 mt-5">
        <div>
          <PostPart />
        </div>
      </div>
    </>
  );
};

export default Home;
