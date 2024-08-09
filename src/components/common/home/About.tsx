const About = () => {
  return (
    <div className="px-40 flex flex-col h-screen items-center justify-center">
      <div className="flex items-center justify-between">
        <div className="">
          <img width={450} src="/lab.svg" alt="chemical" />
        </div>
        <div className="w-1/2">
          <p>About Us</p>
          <p className="text-3xl py-6 font-semibold">
            Discover the Faces Behind Our Mental Health Consultancy
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
            at quam adipiscing feugiat interdum mattis. Placerat donec risus
            diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus A
            risus donec eget enim
          </p>
          <div className="py-4">
            <button className="bg-orange rounded-3xl px-6 py-2 text-white">
              See details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
