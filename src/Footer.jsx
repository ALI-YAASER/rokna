import React from 'react';
import {
    FaWhatsapp,
    FaTiktok,
    FaInstagram,
    FaTelegram,
    FaYoutube,
    FaFacebookF,
    FaFacebook
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-900 mt-auto pt-12 pb-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
                
                {/* 📌 Left / Brand info */}
                <div className="text-center md:text-right space-y-2">
                    <h3 className="text-xl font-black text-amber-400 tracking-wide">
                        ركنة و أنتريه
                    </h3>
                    <p className="text-xs text-neutral-400 max-w-sm">
                        نصنع من منزلك تحفة فنية بأرقى تصاميم الأثاث وعمليّة الخشب الزان الطبيعي.
                    </p>
                </div>

                {/* 📌 Middle: Social Icons */}
                <div className="flex justify-center items-center gap-4 text-lg">
                    <a 
                        href="https://wa.me/201101002190"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-neutral-950 hover:bg-green-500 hover:border-green-500 transition-all duration-300"
                        title="واتساب"
                    >
                        <FaWhatsapp />
                    </a>

                    <a 
                        href="/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-neutral-950 hover:bg-white hover:border-white transition-all duration-300"
                        title="تيك توك"
                    >
                        <FaTiktok />
                    </a>

                    <a 
                        href="https://www.instagram.com/roknawantareh?utm_source=ig_web_button_share_sheet&vrfl=ZDNlZDc0MzIxNw==" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-rose-600 hover:border-rose-600 transition-all duration-300"
                        title="انستجرام"
                    >
                        <FaInstagram />
                    </a>

                    <a 
                        href="/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                        title="تلجرام"
                    >
                        <FaTelegram />
                    </a>

                    <a 
                        href="https://www.facebook.com/share/1JzE6ijcGM/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                        title="يوتيوب"
                    >
                        <FaFacebook />
                    </a>
                </div>

                {/* 📌 Right: Copyright */}
                <div className="text-center md:text-left text-xs text-neutral-500">
                    © {new Date().getFullYear()} ركنة و أنتريه. جميع الحقوق محفوظة.
                </div>

            </div>

            {/* 💬 زر الواتساب الثابت (Floating WhatsApp Button) */}
            <a
                href="https://wa.me/201101002190"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 text-2xl bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50 border-2 border-neutral-950"
                aria-label="تواصل معنا عبر واتساب"
            >
                <FaWhatsapp />
            </a>
        </footer>
    );
};

Footer.displayName = "Footer";

export default Footer;