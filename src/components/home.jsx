import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="w-full h-190 border flex flex-col items-center py-6 gap-8 font-serif" >
            <h1 className="font-bold text-3xl">Features</h1>
            <p className="w-120 text-center">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            <ul className="flex gap-[150px]">
                <li className="p-10 border-y-4 border-y-white border-t-white text-2xl border-b-red-600"><Link to="/home/first">Simple bookmarking</Link></li>
                <li className="p-10 border-y-4 border-y-white border-t-white text-2xl border-b-red-600"><Link to="/home/second">Speedy searching</Link></li>
                <li className="p-10 border-y-4 border-y-white border-t-white text-2xl border-b-red-600"><Link to="/home/third">Easy sharing</Link></li>
            </ul>

            <div>
                
            </div>
        </div>
    )
}