const Ribbon = () => {
  return (
    <div className="h-36 top-0 w-full fixed border-2 border-emerald-400">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="font-rogue flex font-bold text-4xl">Hikaru Skies</div>
        <div className="font-montserrat flex font-semibold text-2xl justify-between mr-36 w-7/12 flex-row">
          <button className=" bg-red-100 py-3 hover:bg-red-200 hover:scale-110 transition ease-in-out px-10 justify-center rounded-full">
            Book
          </button>
          <button className=" bg-red-100 py-3 hover:bg-red-200 hover:scale-110 transition ease-in-out px-10 justify-center rounded-full">
            Plan
          </button>
          <button className=" bg-red-100 py-3 hover:bg-red-200 hover:scale-110 transition ease-in-out px-10 justify-center rounded-full">
            Travel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
