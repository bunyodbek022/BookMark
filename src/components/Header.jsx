import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import HeaderImg from "../assets/headerImg.png"

function Header() {
    return (
        <div className="container mx-auto pt-10 font-rubik pb-20">
            <nav className="flex justify-between items-center">
                <img
                    src="https://famous-pithivier-11c029.netlify.app/img/logo.svg"
                    alt="Logo"
                />
                <div className="flex gap-10 items-center">
                    <NavLink to="/features">Features</NavLink>
                    <NavLink to="/pricing">Pricing</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <button className="py-2 px-6 bg-[#fa5959] text-white font-bold text-[14px] rounded-sm">
                        Login
                    </button>
                </div>
            </nav>
            <div className="w-full h-160 flex items-center ">
                <div className="flex flex-col w-[50%] gap-10">
                    <h1 className="text-5xl w-150 font-rubik font-bold font-medium">A Simple Bookmark Manager</h1>
                    <p className="font-rubik font-normal">
                        A clean and simple interface to organize your favourite
                        websites. Open a new browser tab and see your sites load
                        instantly. Try it for free.
                    </p>
                    <div className="flex gap-6">
                        <Button variant="contained" className="w-40 h-10 bg-[#5267Df]"  sx={{ fontSize: "12px", padding: "6px 14px" }}>Get it on Chrome</Button>
                        <Button variant="outlined" className="w-40 h-10 bg-[#5267Df]"  sx={{ fontSize: "12px", padding: "6px 14px" }}>Get it on Firefox</Button>

                    </div>
                </div>
                <div className="w-[50%] h-140  relative flex items-center">
                    <img src={HeaderImg} alt="header" />
                    <div className="w-300 h-90 bg-[#5267Df] rounded-r-full rounded-l-full absolute top-60 left-30 z-[-1] "></div>
                </div>
            </div>
        </div>
    );
}

export default Header;
