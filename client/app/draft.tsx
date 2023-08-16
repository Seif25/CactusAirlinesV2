const Draft = () => {
  return (
    <div className="p-0 lg:p-16 pb-40">
      {/* Hero */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 h-auto pb-20 md:pb-40">
        <div className="flex flex-col justify-center h-auto">
          <div className="absolute p-5">
            <h1 className="text-6xl font-extrabold w-64 text-[#005B48]">
              PLANNING A TRIP?
            </h1>
            <p className="font-light w-[350px] text-[#FFEACE] pb-5">
              Get ready to fly with Cactus Airlines. <br /> A world of comfort
              and luxury awaits you.
            </p>
            <button className="bg-[#005B48] rounded-md w-28 h-10 text-white transition ease-in-out duration-150 hover:scale-110">
              Book Now
            </button>
          </div>
          <div className="relative -z-10 lg:top-[38%]">
            <Image
              src={"/gradient.jpg"}
              alt="plane"
              width={500}
              height={500}
              loading="lazy"
              className="object-fill rounded-b-md"
            />
          </div>
        </div>
        <div className=""></div>
      </div>
      {/* Flight Search */}
      <div className="p-5 md:p-0 lg:p-0">
        <div
          id="browse"
          className="bg-[#FFEACE] shadow-sm shadow-[#534439] w-auto h-auto rounded-md p-5 flex flex-col"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between pb-5">
            <div className="flex flex-col lg:flex-row lg:items-center items-start gap-2 w-auto">
              <Select
                options={["Round-trip", "One-way"]}
                icon={<BiSolidPlaneAlt className="text-md" />}
                value={trip}
                setValue={setTrip}
              />
              <Select
                options={["1 Person", "2 Persons", "3 Persons", "4 Persons"]}
                icon={<BsFillPersonFill className="text-md" />}
                value={person}
                setValue={setPerson}
              />
              <Select
                options={["Economy", "Business", "First"]}
                icon={<MdFlightClass className="text-md" />}
                value={flightClass}
                setValue={setFlightClass}
              />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#534439]">
                Looking for travel ideas?{" "}
                <a href="#" className="hover:underline text-[#005B48]">
                  Explore Map
                </a>
              </h3>
            </div>
          </div>
          <div className="bg-[#534439] bg-opacity-10 rounded-md w-auto h-[70px] flex flex-col lg:flex-row items-center justify-evenly gap-5 px-2">
            <div className="flex flex-col lg:flex-row items-center justify-evenly gap-5">
              <input
                type="text"
                className="p-2 rounded-md bg-transparent border border-[#534439] bg-opacity-30 text-black focus:ring-2 focus:ring-[#534439] focus:outline-none placeholder:text-black placeholder:pl-2"
                placeholder="Egypt"
              />
              <FaPlane className="text-[#005B48] hover:animate-spin" />
              <input
                type="text"
                className="p-2 rounded-md bg-transparent border border-[#534439] bg-opacity-30 text-black focus:ring-2 focus:ring-[#534439] focus:outline-none placeholder:text-black placeholder:pl-2"
                placeholder="Anywhere"
              />
            </div>
            <div className="border-l-2 border-[#534439] pl-2 flex items-center justify-center gap-10">
              <input
                type="date"
                name="from"
                id="from-date"
                className="w-[150px] bg-transparent rounded-md p-2"
                defaultValue={moment().format("D, MM dd")}
              />
              -
              <input
                type="date"
                name="to"
                id="to-date"
                className="w-[150px] bg-transparent rounded-md p-2"
                defaultValue={moment().format("D, MM dd")}
              />
            </div>
            <div>
              <button className="bg-[#005B48] h-10 w-10 flex items-center justify-center rounded-md">
                <FiSearch className="text-white text-xl transition ease-in-out delay-75 duration-150 hover:scale-125" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Draft;
