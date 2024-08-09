const Why = () => {
  return (
    <div className="px-40 flex flex-col gap-6 h-screen items-center justify-center">
      <p>Why ?</p>
      <div className="py-4 text-center">
        <p className="font-semibold text-4xl py-6">
          Why Our Mental Health Consultants are the Best Choice
        </p>
        <div className="flex py-8  items-center px-6">
          <div className="flex py-10 rounded-tl-3xl rounded-bl-3xl border-l border-black border-b border-t flex-col items-center">
            <img className="w-32 h-32" src="/historic.svg" alt="items" />
            <p>Holistic approach</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Convallis est urna
              adipiscing fringilla nulla diam lorem non mauris.
            </p>
          </div>

          <div className="bg-gradient-green py-20 space-y-4 border-black px-6 rounded-3xl flex flex-col items-center text-white">
            <img className="w-32 h-32" src="/expert.svg" alt="items" />
            <p>Expertise Team</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Convallis est urna
              adipiscing fringilla nulla diam lorem non mauris.
            </p>
          </div>
          
          <div className="flex py-10 rounded-tr-3xl rounded-br-3xl flex-col border-black border-r border-b border-t px-6 items-center">
            <img className="w-32 h-32" src="/access.svg" alt="items" />
            <p>Accessibility</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Convallis est urna
              adipiscing fringilla nulla diam lorem non mauris.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
