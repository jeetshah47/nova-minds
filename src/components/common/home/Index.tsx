import Nav from "../navbar/Nav";
import Home from "./Home";
import Banner from "./Banner";

const Index = () => {
  return (
    <div className="h-screen flex flex-col  border border-blue relative">
      <div className="px-40 max-[600px]:px-0">
        <Nav />
        <Home />
      </div>
      <Banner />
    </div>
  );
};

export default Index;
