import SecondImg from "../assets/second.png";
const Two = () => {
    return (
        <div className=" w-full gap-50 relative">
            <div className="w-300 h-95 bg-[#5267Df] rounded-r-full rounded-l-full absolute top-15 -left-190 z-[-1] "></div>
            <div className="flex z-50 justify-center items-center container gap-30">
                <div>
                    <img src={SecondImg} alt="first" />
                </div>
                <div className="flex flex-col justify-center items-start gap-6  h-100">
                    <h2 className="font-bold text-4xl">Intelligent search</h2>
                    <p className="max-w-100 tracking-wide leading-7 text-[#5b5050] opacity-80">
                        Our powerful search feature will help you find saved
                        sites in no time at all. No need to trawl through all of
                        your bookmarks.
                    </p>
                    <button className="p-2 bg-[#5267Df] text-white font-bold text-[14px] rounded-sm">
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Two;
