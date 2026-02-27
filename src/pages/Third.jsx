import ThirdImg from "../assets/third.png";

const Third = () => {
    return (
        <div className=" w-full gap-50 relative">
            <div className="w-300 h-95 bg-[#5267Df] rounded-r-full rounded-l-full absolute top-15 -left-190 z-[-1] "></div>
            <div className="flex z-50 justify-center items-center container gap-30">
                <div>
                    <img src={ThirdImg} alt="first" />
                </div>
                <div className="flex flex-col justify-center items-start gap-6  h-100">
                    <h2 className="font-bold text-4xl">Share your bookmarks</h2>
                    <p className="max-w-100 tracking-wide leading-7 text-[#5b5050] opacity-80">
                        Easily share your bookmarks and collections with others.
                        Create a shareable link that you can send at the click
                        of a button.
                    </p>
                    <button className="p-2 bg-[#5267Df] text-white font-bold text-[14px] rounded-sm">
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Third;
