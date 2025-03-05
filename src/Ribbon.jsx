const Ribbon = () => {
  return (
    <div className="h-36 top-0 w-full fixed bg-red-400">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="font-montserrat flex font-bold text-4xl">NAME IT!</div>
        <div className="font-montserrat flex font-semibold text-2xl justify-between mr-36 w-7/12 flex-row"> 
          <button>Book</button>
          <button>Plan</button>
          <button>Travel</button>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
