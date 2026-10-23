import React from "react";

export default function Nav() {

    return (
        <nav
        >
            {/* الفلترة */}
            {/* ================== Top Offer Banner ================== */}
            <div className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center py-2.5 text-sm md:text-base shadow-md">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 flex-wrap">
                    <span className="font-bold text-sm md:text-base">🔥 عرض خاص لفترة محدودة – بوتاجازات</span>
                    <button className="bg-yellow-400 hover:bg-yellow-600 text-blue-900 font-bold animate-pulse px-5 py-1.5 rounded-full text-sm md:text-base transition-all"
                            onClick={() => {
                                document.getElementById("id").scrollIntoView({ behavior: "smooth" });
                            }}
                    >
                        اطلب الآن
                    </button>
                </div>
            </div>
            {/* ================== Delivery & Quality Banner ================== */}
            <div className="hidden md:block bg-gradient-to-r from-orange-400 to-orange-500 text-white py-4 mb-10 text-center font-bold text-lg md:text-xl shadow-md">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 flex-wrap">
                    <span>توصيل سريع لباب البيت 🚚</span>
                    <span>جودة تليق بمنزلك 🏡✨</span>
                </div>
            </div>
        </nav>
    );
}