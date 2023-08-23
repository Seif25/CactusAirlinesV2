const UpcomingFlight = () => {
  return (
    <div className="flex flex-col items-end w-full gap-2 bg-transparent rounded-md hover:bg-[#dde8e0]  cursor-pointer">
      <div className="flex flex-col gap-0 rounded-md bg-[#dde8e0] p-5 w-full h-auto">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-light text-sm lowercase text-[#364B44]">23 Aug</h3>
            <h3 className="font-bold text-lg">14:32</h3>
          </div>
          <h3 className="font-light text-sm text-[#364B44]">5h 6m</h3>
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-light text-sm lowercase text-[#364B44]">23 Aug</h3>
            <h3 className="font-bold text-lg">19:38</h3>
          </div>
        </div>
        <div className="flex items-center justify-between px-3 text-[#364B44]">
          <div className="text-xs">●</div>
          <div className="w-[250px] mt-1 h-1 border-t border-[#364B44] border-dashed"></div>
          <div className="text-xs">●</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-light text-sm capitalize text-[#364B44]">cairo</h3>
            <h3 className="font-bold text-lg uppercase">cai</h3>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-light text-sm capitalize text-[#364B44]">london</h3>
            <h3 className="font-bold text-lg uppercase">lhr</h3>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-[#dde8e0] p-5 w-full h-auto">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-light text-sm capitalize text-[#364B44]">terminal</h3>
            <h3 className="font-bold text-lg uppercase">3</h3>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-light text-sm capitalize text-[#364B44]">gate</h3>
            <h3 className="font-bold text-lg uppercase">6h</h3>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-light text-sm capitalize text-[#364B44]">seat</h3>
            <h3 className="font-bold text-lg uppercase">21b</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingFlight;
