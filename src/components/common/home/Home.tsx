const Home = () => {
  return (
    <div className="w-full pt-10">
      <div className="flex md:justify-between max-[600px]:flex-col max-[600px]:items-center">
        <div className="md:w-3/5">
          <p className="text-6xl max-[600px]:text-center font-semibold leading-snug">
            Healthy Minds, Happy Lives{" "}
            <span className="text-orange"> Mental Health </span> Consultancy{" "}
          </p>
        </div>
        <div className="">
          <img width={700} height={700} src="/cardio.svg" alt="cardio" />
        </div>
      </div>
    </div>
  );
};

export default Home;
