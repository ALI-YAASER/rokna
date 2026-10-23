// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { products, egyptGovernorates } from "./assets/assets.js";
// import FeaturesSection from './FeaturesSection.jsx'
// import { FaWhatsapp, FaStar, FaShieldAlt, FaTruck, FaCheckCircle } from "react-icons/fa";
// import './App.css';

// const ProductItem = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const product = products.find(p => p.id === parseInt(id));

//     const [mainImage, setMainImage] = useState(product?.images[0] || "");
//     const [selectedOffer, setSelectedOffer] = useState("single");

//     // Form states
//     const [fullName, setFullName] = useState("");
//     const [city, setCity] = useState("");
//     const [phone, setPhone] = useState("");
//     const [address, setAddress] = useState("");
//     const [openIndex, setOpenIndex] = useState(null);

//     const toggleAccordion = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     // WhatsApp number
//     const whatsappNumber = "201101002190";

//     // حساب السعر النهائي للمنتج
//     const finalPrice = selectedOffer === "single" ? product?.price : (product?.price * 2);

//     // الأسئلة الشائعة
//     const faqData = product?.faq || [];

//     // الشحن أصبح مجانياً بالكامل
//     const shippingPrice = 0;
//     const totalPrice = finalPrice + shippingPrice;

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const message = `
// *طلب جديد – ${product.name}*

// سعر المنتج: ${finalPrice.toLocaleString()} ج.م
// الشحن: مجاني 🎁
// الإجمالي: ${totalPrice.toLocaleString()} ج.م

// الاسم: ${fullName}
// المدينة: ${city}
// رقم الهاتف: ${phone}
// العنوان بالتفصيل: ${address}

// طريقة الدفع: الدفع عند الاستلام

// 📩 ضمان 5 سنين  
// يرجى تأكيد الطلب في أقرب وقت!
//         `.trim();

//         const encodedMessage = encodeURIComponent(message);
//         const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
//         window.open(whatsappUrl, "_blank");
//     };

//     if (!product) {
//         return (
//             <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center gap-4">
//                 <p className="text-xl text-neutral-400">عذراً، المنتج المطلوب غير موجود</p>
//                 <button onClick={() => navigate("/")} className="bg-amber-500 text-neutral-950 font-bold px-6 py-2.5 rounded-xl">
//                     العودة للرئيسية
//                 </button>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500 selection:text-neutral-900 pb-16">
            
//             {/* Top Offer Banner */}
//             <div className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800 text-white text-center py-3 text-sm md:text-base shadow-xl">
//                 <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 flex-wrap">
//                 <span className="font-bold text-sm md:text-base">🔥 عرض خاص لفترة محدودة –  ركنة و أنترية</span>
//                     <button
//                         className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-extrabold px-6 py-1.5 rounded-full text-sm transition-all shadow-md shadow-amber-500/10 animate-pulse"
//                         onClick={() => {
//                             document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
//                         }}
//                     >
//                         اطلب الآن
//                     </button>
//                 </div>
//             </div>

//             {/* Delivery & Quality Banner */}
//             <div className="hidden md:block bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border-b border-neutral-800 text-neutral-200 py-4 mb-10 text-center font-bold text-base shadow-md">
//                 <div className="container mx-auto px-4 flex items-center justify-center gap-12 flex-wrap">
//                     <span className="flex items-center gap-2"><FaTruck className="text-amber-400" /> توصيل سريع لباب البيت والشحن مجاني 100%</span>
//                     <span className="flex items-center gap-2"><FaShieldAlt className="text-amber-400" /> جودة تليق بمنزلك وضمان 5 سنوات</span>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
//                 <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                    
//                     {/* LEFT – Info & Form */}
//                     <div className="flex flex-col gap-6 order-2 lg:order-1">
                        
//                         {/* Title + Rating + Price */}
//                         <div className="space-y-4 border-b border-neutral-800 pb-6">
//                             <h1 className="text-2xl font-black leading-tight text-white sm:text-3xl">
//                                 {product.name}
//                             </h1>
//                             <div className="flex items-center gap-3 text-sm text-neutral-400">
//                                 <span className="flex items-center gap-1 text-amber-400"><FaStar /> <strong className="text-white">{product.rating}</strong></span>
//                                 <span className="text-neutral-500">({product.reviews} تقييم موثوق)</span>
//                             </div>
//                             <div className="flex items-baseline gap-4 pt-2">
//                                 <span className="text-3xl font-extrabold text-amber-400 sm:text-4xl">
//                                     {product.price.toLocaleString()} <span className="text-sm font-normal text-neutral-400">ج.م</span>
//                                 </span>
//                                 <span className="text-lg text-neutral-500 line-through">
//                                     {product.oldPrice.toLocaleString()} ج.م
//                                 </span>
//                             </div>
//                         </div>

//                         {/* Features */}
//                         <div className="space-y-3 bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-5">
//                             <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2">مميزات المنتج:</h3>
//                             <ul className="space-y-2.5 text-neutral-300 text-sm md:text-base">
//                                 {product.features.map((feature, i) => (
//                                     <li key={i} className="flex items-start gap-3">
//                                         <FaCheckCircle className="text-amber-400 mt-1 flex-shrink-0" />
//                                         <span>{feature}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* Order Form */}
//                         <div id="order-form" className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-xl">
//                             <h3 className="mb-5 text-lg font-bold text-white flex items-center gap-2">
//                                 <span>📝</span> يرجى إدخال معلوماتك لإكمال الطلب
//                             </h3>
//                             <form onSubmit={handleSubmit} className="space-y-4">
//                                 <div>
//                                     <input
//                                         type="text"
//                                         placeholder="الاسم بالكامل"
//                                         value={fullName}
//                                         onChange={(e) => setFullName(e.target.value)}
//                                         className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition"
//                                         required
//                                     />
//                                 </div>
//                                 <div>
//                                     <select
//                                         value={city}
//                                         onChange={(e) => setCity(e.target.value)}
//                                         className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3.5 text-sm text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition"
//                                         required
//                                     >
//                                         <option value="" disabled className="text-neutral-500">اختر المحافظة / المدينة</option>
//                                         {egyptGovernorates.map((gov, i) => (
//                                             <option key={i} value={gov} className="bg-neutral-900 text-white">{gov}</option>
//                                         ))}
//                                     </select>
//                                 </div>
//                                 <div>
//                                     <input
//                                         type="tel"
//                                         placeholder="رقم الهاتف (11 رقم)"
//                                         value={phone}
//                                         onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
//                                         className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition"
//                                         required
//                                         minLength={11}
//                                         maxLength={11}
//                                         pattern="[0-9]{11}"
//                                         title="رقم الهاتف يجب أن يكون 11 رقمًا"
//                                     />
//                                 </div>
//                                 <div>
//                                     <textarea
//                                         placeholder="العنوان بالتفصيل (الشارع، رقم الحلم، العمارة، الطابق)"
//                                         value={address}
//                                         onChange={(e) => setAddress(e.target.value)}
//                                         rows={3}
//                                         className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition"
//                                         required
//                                     />
//                                 </div>

//                                 {/* Offer Selection */}
//                                 <div className="pt-4 border-t border-neutral-800 space-y-3">
//                                     <h4 className="font-bold text-white text-sm">اختر العرض المناسب</h4>
                                    
//                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                                         <label className={`relative block cursor-pointer rounded-xl border p-4 transition-all ${selectedOffer === "single" ? "border-amber-500 bg-amber-500/10" : "border-neutral-800 bg-neutral-950 hover:border-neutral-700"}`}>
//                                             <div className="flex items-center gap-3">
//                                                 <input
//                                                     type="radio"
//                                                     name="offer"
//                                                     value="single"
//                                                     checked={selectedOffer === "single"}
//                                                     onChange={() => setSelectedOffer("single")}
//                                                     className="h-4 w-4 accent-amber-500"
//                                                 />
//                                                 <span className="text-sm font-semibold text-white">شراء قطعة واحدة</span>
//                                             </div>
//                                         </label>

//                                         <label className={`relative block cursor-pointer rounded-xl border p-4 transition-all ${selectedOffer === "double" ? "border-amber-500 bg-amber-500/10" : "border-neutral-800 bg-neutral-950 hover:border-neutral-700"}`}>
//                                             <div className="flex items-center gap-3">
//                                                 <input
//                                                     type="radio"
//                                                     name="offer"
//                                                     value="double"
//                                                     checked={selectedOffer === "double"}
//                                                     onChange={() => setSelectedOffer("double")}
//                                                     className="h-4 w-4 accent-amber-500"
//                                                 />
//                                                 <span className="text-sm font-semibold text-white">شراء قطعتين (وفر أكثر)</span>
//                                             </div>
//                                         </label>
//                                     </div>
//                                 </div>

//                                 {/* Payment Method (Cash on Delivery Only) */}
//                                 <div className="space-y-3 pt-2">
//                                     <h4 className="font-bold text-white text-sm">وسيلة الدفع المتاحة</h4>
//                                     <div className="rounded-xl border border-amber-500 bg-amber-500/10 p-4 flex items-center gap-3">
//                                         <input
//                                             type="radio"
//                                             checked={true}
//                                             readOnly
//                                             className="h-4 w-4 accent-amber-500"
//                                         />
//                                         <span className="font-semibold text-sm text-white">الدفع عند الاستلام (متاح لجميع المحافظات)</span>
//                                     </div>
//                                 </div>

//                                 {/* Price Summary Box */}
//                                 <div className="mt-4 rounded-xl bg-neutral-950 border border-neutral-800 p-4 text-white space-y-2">
//                                     <div className="flex justify-between text-sm text-neutral-400">
//                                         <span>سعر المنتج:</span>
//                                         <span className="text-white font-medium">{finalPrice.toLocaleString()} ج.م</span>
//                                     </div>
//                                     <div className="flex justify-between text-sm text-neutral-400">
//                                         <span>مصاريف الشحن:</span>
//                                         <span className="text-amber-400 font-bold">مجاناً 🎁</span>
//                                     </div>
//                                     <div className="pt-2 border-t border-neutral-800 flex justify-between text-base font-bold text-amber-400">
//                                         <span>الإجمالي النهائي:</span>
//                                         <span>{totalPrice.toLocaleString()} ج.م</span>
//                                     </div>
//                                 </div>

//                                 <button
//                                     type="submit"
//                                     className="mt-6 w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold py-4 px-6 rounded-xl text-base transition duration-300 shadow-lg shadow-amber-500/20"
//                                 >
//                                     تأكيد الطلب والاتصال عبر واتساب 🚀
//                                 </button>
//                             </form>
//                         </div>
//                     </div>

//                     {/* RIGHT – Images */}
//                     <div className="order-1 lg:order-2">
//                         <div className="sticky top-24 space-y-4">
//                             <div className="rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden shadow-2xl h-80 sm:h-[450px]">
//                                 <img
//                                     src={mainImage}
//                                     alt={product.name}
//                                     className="w-full h-full object-fill"
//                                 />
//                             </div>
//                             <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-neutral-700">
//                                 {product.images.map((img, index) => (
//                                     <button
//                                         key={index}
//                                         type="button"
//                                         onClick={() => setMainImage(img)}
//                                         className={`flex-shrink-0 overflow-hidden rounded-xl border-2 transition ${
//                                             mainImage === img ? "border-amber-500" : "border-neutral-800 hover:border-neutral-600"
//                                         }`}
//                                     >
//                                         <img
//                                             src={img}
//                                             alt={`Thumbnail ${index + 1}`}
//                                             className="h-20 w-20 object-cover sm:h-24 sm:w-24 bg-neutral-900"
//                                         />
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

        

//             {/* FAQ */}
//             <div className="max-w-5xl my-16 mx-auto px-4">
//                 <div className="text-center mb-10">
//                     <span className="inline-block bg-amber-500/10 text-amber-400 border border-amber-500/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
//                         الأسئلة الشائعة
//                     </span>
//                     <h2 className="text-2xl md:text-3xl font-bold text-white">
//                         نسعد بالإجابة على كل ما يخطر ببالك
//                     </h2>
//                 </div>
//                 <div className="space-y-4">
//                     {faqData.map((item, index) => (
//                         <div
//                             key={index}
//                             className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900"
//                         >
//                             <button
//                                 onClick={() => toggleAccordion(index)}
//                                 className={`w-full flex justify-between items-center px-5 py-4 text-right transition-all duration-200
//                                     ${openIndex === index ? "bg-neutral-800 text-amber-400" : "text-white hover:bg-neutral-800/50"}`}
//                             >
//                                 <span className="text-base font-medium leading-snug">{item.question}</span>
//                                 <span className="text-xl font-bold ml-3 flex-shrink-0">
//                                     {openIndex === index ? "−" : "+"}
//                                 </span>
//                             </button>
//                             <div
//                                 className={`overflow-hidden transition-all duration-300 ease-in-out bg-neutral-950 text-neutral-300
//                                     ${openIndex === index ? "max-h-96 py-4 px-5 border-t border-neutral-800" : "max-h-0 py-0 px-5"}`}
//                             >
//                                 <p className="text-sm md:text-base leading-relaxed">{item.answer}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <FeaturesSection/>

//             {/* Floating WhatsApp button */}
//             <a
//                 href={`https://wa.me/${whatsappNumber}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="fixed bottom-6 left-6 text-2xl bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-2xl hover:bg-green-500 transition-all duration-300 z-50 hover:scale-110"
//                 aria-label="تواصل معنا عبر واتساب"
//             >
//                 <FaWhatsapp />
//             </a>

//         </div>
//     );
// };

// export default ProductItem;

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products, egyptGovernorates } from "./assets/assets.js";
import FeaturesSection from './FeaturesSection.jsx';
import { FaWhatsapp, FaStar, FaShieldAlt, FaTruck, FaCheckCircle } from "react-icons/fa";
import './App.css';

const ProductItem = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === parseInt(id));

    const [mainImage, setMainImage] = useState(product?.images[0] || "");
    const [selectedOffer, setSelectedOffer] = useState("single");
    
    // 🎨 حالة اللون المختار (يبدأ بأول لون متاح إذا وجد)
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name || "");

    // Form states
    const [fullName, setFullName] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // WhatsApp number
    const whatsappNumber = "201101002190";

    // حساب السعر النهائي للمنتج
    const finalPrice = selectedOffer === "single" ? product?.price : (product?.price * 2);

    // الأسئلة الشائعة
    const faqData = product?.faq || [];

    // الشحن أصبح مجانياً بالكامل
    const shippingPrice = 0;
    const totalPrice = finalPrice + shippingPrice;

    const handleSubmit = (e) => {
        e.preventDefault();

        // بناء رسالة الواتساب بشكل ديناميكي (إضافة اللون فقط إذا كان موجوداً ومختاراً)
        const message = [
            `*طلب جديد – ${product.name}*`,
            ``,
            `سعر المنتج: ${finalPrice.toLocaleString()} ج.م`,
            product?.colors && product.colors.length > 0 && selectedColor ? `اللون المختار: ${selectedColor}` : null,
            `الشحن: مجاني 🎁`,
            `الإجمالي: ${totalPrice.toLocaleString()} ج.م`,
            ``,
            `الاسم: ${fullName}`,
            `المدينة: ${city}`,
            `رقم الهاتف: ${phone}`,
            `العنوان بالتفصيل: ${address}`,
            ``,
            `طريقة الدفع: الدفع عند الاستلام`,
            ``,
            `📩 ضمان 5 سنين`,
            `يرجى تأكيد الطلب في أقرب وقت!`
        ].filter(Boolean).join("\n");

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
    };

    if (!product) {
        return (
            <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center gap-4">
                <p className="text-xl text-neutral-400">عذراً، المنتج المطلوب غير موجود</p>
                <button onClick={() => navigate("/")} className="bg-amber-500 text-neutral-950 font-bold px-6 py-2.5 rounded-xl">
                    العودة للرئيسية
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500 selection:text-neutral-900 pb-16">
            
            {/* Top Offer Banner */}
            <div className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800 text-white text-center py-3 text-sm md:text-base shadow-xl">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 flex-wrap">
                <span className="font-bold text-sm md:text-base">🔥 عرض خاص لفترة محدودة –  ركنة و أنتريه</span>
                    <button
                        className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-extrabold px-6 py-1.5 rounded-full text-sm transition-all shadow-md shadow-amber-500/10 animate-pulse"
                        onClick={() => {
                            document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        اطلب الآن
                    </button>
                </div>
            </div>

            {/* Delivery & Quality Banner */}
            <div className="hidden md:block bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border-b border-neutral-800 text-neutral-200 py-4 mb-10 text-center font-bold text-base shadow-md">
                <div className="container mx-auto px-4 flex items-center justify-center gap-12 flex-wrap">
                    <span className="flex items-center gap-2"><FaTruck className="text-amber-400" /> توصيل سريع لباب البيت والشحن مجاني 100%</span>
                    <span className="flex items-center gap-2"><FaShieldAlt className="text-amber-400" /> جودة تليق بمنزلك وضمان 5 سنوات</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                    
                    {/* LEFT – Info & Form */}
                    <div className="flex flex-col gap-6 order-2 lg:order-1">
                        
                        {/* Title + Rating + Price */}
                        <div className="space-y-4 border-b border-neutral-800 pb-6">
                            <h1 className="text-2xl font-black leading-tight text-white sm:text-3xl">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-3 text-sm text-neutral-400">
                                <span className="flex items-center gap-1 text-amber-400"><FaStar /> <strong className="text-white">{product.rating}</strong></span>
                                <span className="text-neutral-500">({product.reviews} تقييم موثوق)</span>
                            </div>
                            <div className="flex items-baseline gap-4 pt-2">
                                <span className="text-3xl font-extrabold text-amber-400 sm:text-4xl">
                                    {product.price.toLocaleString()} <span className="text-sm font-normal text-neutral-400">ج.م</span>
                                </span>
                                <span className="text-lg text-neutral-500 line-through">
                                    {product.oldPrice.toLocaleString()} ج.م
                                </span>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-5">
                            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2">مميزات المنتج:</h3>
                            <ul className="space-y-2.5 text-neutral-300 text-sm md:text-base">
                                {product.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-amber-400 mt-1 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Order Form */}
                        <div id="order-form" className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-xl">
                            <h3 className="mb-5 text-lg font-bold text-white flex items-center gap-2">
                                <span>📝</span> يرجى إدخال معلوماتك لإكمال الطلب
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="الاسم بالكامل"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition"
                                        required
                                    />
                                </div>
                                <div>
                                    <select
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3.5 text-sm text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition"
                                        required
                                    >
                                        <option value="" disabled className="text-neutral-500">اختر المحافظة / المدينة</option>
                                        {egyptGovernorates.map((gov, i) => (
                                            <option key={i} value={gov} className="bg-neutral-900 text-white">{gov}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="رقم الهاتف (11 رقم)"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                                        className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition"
                                        required
                                        minLength={11}
                                        maxLength={11}
                                        pattern="[0-9]{11}"
                                        title="رقم الهاتف يجب أن يكون 11 رقمًا"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="العنوان بالتفصيل (الشارع، رقم الحلم، العمارة، الطابق)"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        rows={3}
                                        className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition"
                                        required
                                    />
                                </div>

                                {/* 🎨 حقل الألوان (يظهر فقط إذا كانت الألوان موجودة ومتوفرة للمنتج) */}
                                {product.colors && product.colors.length > 0 && (
                                    <div className="pt-2 space-y-3">
                                        <h4 className="font-bold text-white text-sm">اختر اللون المفضل</h4>
                                        <div className="flex items-center gap-2.5 flex-wrap">
                                            {product.colors.map((color, index) => (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    onClick={() => setSelectedColor(color.name)}
                                                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all ${
                                                        selectedColor === color.name 
                                                            ? "border-amber-500 bg-amber-500/10 text-amber-400 scale-105 shadow-md" 
                                                            : "border-neutral-800 bg-neutral-950 text-neutral-300 hover:border-neutral-700"
                                                    }`}
                                                >
                                                    <span 
                                                        className="w-4 h-4 rounded-full border border-neutral-700 inline-block shadow-inner" 
                                                        style={{ backgroundColor: color.hex }}
                                                    />
                                                    <span>{color.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Offer Selection */}
                                <div className="pt-4 border-t border-neutral-800 space-y-3">
                                    <h4 className="font-bold text-white text-sm">اختر العرض المناسب</h4>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <label className={`relative block cursor-pointer rounded-xl border p-4 transition-all ${selectedOffer === "single" ? "border-amber-500 bg-amber-500/10" : "border-neutral-800 bg-neutral-950 hover:border-neutral-700"}`}>
                                            <div className="flex items-center gap-3">
                                                <input
                                                    type="radio"
                                                    name="offer"
                                                    value="single"
                                                    checked={selectedOffer === "single"}
                                                    onChange={() => setSelectedOffer("single")}
                                                    className="h-4 w-4 accent-amber-500"
                                                />
                                                <span className="text-sm font-semibold text-white">شراء قطعة واحدة</span>
                                            </div>
                                        </label>

                                        <label className={`relative block cursor-pointer rounded-xl border p-4 transition-all ${selectedOffer === "double" ? "border-amber-500 bg-amber-500/10" : "border-neutral-800 bg-neutral-950 hover:border-neutral-700"}`}>
                                            <div className="flex items-center gap-3">
                                                <input
                                                    type="radio"
                                                    name="offer"
                                                    value="double"
                                                    checked={selectedOffer === "double"}
                                                    onChange={() => setSelectedOffer("double")}
                                                    className="h-4 w-4 accent-amber-500"
                                                />
                                                <span className="text-sm font-semibold text-white">شراء قطعتين (وفر أكثر)</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {/* Payment Method (Cash on Delivery Only) */}
                                <div className="space-y-3 pt-2">
                                    <h4 className="font-bold text-white text-sm">وسيلة الدفع المتاحة</h4>
                                    <div className="rounded-xl border border-amber-500 bg-amber-500/10 p-4 flex items-center gap-3">
                                        <input
                                            type="radio"
                                            checked={true}
                                            readOnly
                                            className="h-4 w-4 accent-amber-500"
                                        />
                                        <span className="font-semibold text-sm text-white">الدفع عند الاستلام (متاح لجميع المحافظات)</span>
                                    </div>
                                </div>

                                {/* Price Summary Box */}
                                <div className="mt-4 rounded-xl bg-neutral-950 border border-neutral-800 p-4 text-white space-y-2">
                                    <div className="flex justify-between text-sm text-neutral-400">
                                        <span>سعر المنتج:</span>
                                        <span className="text-white font-medium">{finalPrice.toLocaleString()} ج.م</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-neutral-400">
                                        <span>مصاريف الشحن:</span>
                                        <span className="text-amber-400 font-bold">مجاناً 🎁</span>
                                    </div>
                                    <div className="pt-2 border-t border-neutral-800 flex justify-between text-base font-bold text-amber-400">
                                        <span>الإجمالي النهائي:</span>
                                        <span>{totalPrice.toLocaleString()} ج.م</span>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-6 w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold py-4 px-6 rounded-xl text-base transition duration-300 shadow-lg shadow-amber-500/20"
                                >
                                    تأكيد الطلب والاتصال عبر واتساب 🚀
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* RIGHT – Images */}
                    <div className="order-1 lg:order-2">
                        <div className="sticky top-24 space-y-4">
                            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden shadow-2xl h-80 sm:h-[450px]">
                                <img
                                    src={mainImage}
                                    alt={product.name}
                                    className="w-full h-full object-fill"
                                />
                            </div>
                            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-neutral-700">
                                {product.images.map((img, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setMainImage(img)}
                                        className={`flex-shrink-0 overflow-hidden rounded-xl border-2 transition ${
                                            mainImage === img ? "border-amber-500" : "border-neutral-800 hover:border-neutral-600"
                                        }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="h-20 w-20 object-cover sm:h-24 sm:w-24 bg-neutral-900"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="max-w-5xl my-16 mx-auto px-4">
                <div className="text-center mb-10">
                    <span className="inline-block bg-amber-500/10 text-amber-400 border border-amber-500/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
                        الأسئلة الشائعة
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                        نسعد بالإجابة على كل ما يخطر ببالك
                    </h2>
                </div>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`w-full flex justify-between items-center px-5 py-4 text-right transition-all duration-200
                                    ${openIndex === index ? "bg-neutral-800 text-amber-400" : "text-white hover:bg-neutral-800/50"}`}
                            >
                                <span className="text-base font-medium leading-snug">{item.question}</span>
                                <span className="text-xl font-bold ml-3 flex-shrink-0">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out bg-neutral-950 text-neutral-300
                                    ${openIndex === index ? "max-h-96 py-4 px-5 border-t border-neutral-800" : "max-h-0 py-0 px-5"}`}
                            >
                                <p className="text-sm md:text-base leading-relaxed">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <FeaturesSection />

            {/* Floating WhatsApp button */}
            <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 text-2xl bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-2xl hover:bg-green-500 transition-all duration-300 z-50 hover:scale-110"
                aria-label="تواصل معنا عبر واتساب"
            >
                <FaWhatsapp />
            </a>

        </div>
    );
};

export default ProductItem;