import { useState } from "react";
import First from "../pages/First";
import Two from "../pages/Two";
import Third from "../pages/Third";

export default function Home() {
    const [activeTab, setActiveTab] = useState("first");

    const tabStyle = (tab) =>
        activeTab === tab
            ? "border-b-4 border-red-500 text-black-600 pb-3"
            : "text-gray-500 pb-2";

    
    return (
        <div className="h-190  flex flex-col items-center py-6 gap-8  font-rubik">
            <h1 className="font-bold text-3xl">Features</h1>
            <p className="max-w-130 tracking-wide leading-7 text-[#5b5050] opacity-70 text-center">
                Our aim is to make it quick and easy for you to access your
                favourite websites. Your bookmarks sync between your devices so
                you can access them on the go.
            </p>
            <div className="flex gap-40 mb-4">
                <button
                    onClick={() => setActiveTab("first")}
                    className={tabStyle("first")}
                >
                    Simple bookmarking
                </button>

                <button
                    onClick={() => setActiveTab("second")}
                    className={tabStyle("second")}
                >
                    Speedy searching
                </button>

                <button
                    onClick={() => setActiveTab("third")}
                    className={tabStyle("third")}
                >
                    Easy sharing
                </button>
            </div>

            <div className="flex gap-8">
                {activeTab === "first" && <First />}
                {activeTab === "second" && <Two />}
                {activeTab === "third" && <Third />}
            </div>
        </div>
    );
}
