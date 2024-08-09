const Nav = () => {
  return (
    <div className="flex w-full py-4 justify-between items-center max-[600px]:hidden ">
      <div className="flex gap-2 items-center ">
        <div>
          <img width={40} height={40} src="/logo.svg" alt="logo" />
        </div>
        <div>
          <p className="text-lg font-semibold">Nova Minds</p>
        </div>
      </div>
      <div className="gap-6 text-sm flex">
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Plans</p>
      </div>
      <div>
        <button className="bg-orange rounded-full py-2 px-6 text-white">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Nav;
