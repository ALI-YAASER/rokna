import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { products, assets } from "./assets/assets.js";
import { useNavigate } from "react-router-dom";
import FeaturesSection from "./FeaturesSection.jsx";

const Collection = () => {
  const [filterProducts, setFilterProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const navigate = useNavigate();

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (categoryFilter.length > 0) {
      filtered = filtered.filter((p) => categoryFilter.includes(p.category));
    }

    if (sortType === "low-high") filtered.sort((a, b) => a.price - b.price);
    else if (sortType === "high-low") filtered.sort((a, b) => b.price - a.price);

    setFilterProducts(filtered);
  }, [categoryFilter, sortType]);

  // دالة التمرير السلس للروابط
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="rtl bg-neutral-950 text-neutral-100 min-h-screen font-sans selection:bg-amber-500 selection:text-neutral-900">
      {/* 📌 Header / Navbar */}
      <header className="sticky top-0 z-50 bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <span className="text-2xl font-black tracking-wide text-amber-400 group-hover:text-amber-300 transition-colors">
              ركنة و أنتريه
            </span>
          </div>

          {/* Navigation Links مع Smooth Scroll */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a 
              href="#hero" 
              onClick={(e) => handleScrollTo(e, "hero")} 
              className="hover:text-amber-400 transition-colors"
            >
              الرئيسية
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleScrollTo(e, "about")} 
              className="hover:text-amber-400 transition-colors"
            >
              عن المعرض
            </a>
            <a 
              href="#products" 
              onClick={(e) => handleScrollTo(e, "products")} 
              className="hover:text-amber-400 transition-colors"
            >
              التشكيلة الفاخرة
            </a>
            <a 
              href="#features" 
              onClick={(e) => handleScrollTo(e, "features")} 
              className="hover:text-amber-400 transition-colors"
            >
              مميزاتنا
            </a>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={(e) => handleScrollTo(e, "products")}
              className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold px-5 py-2 rounded-xl text-sm transition-all duration-200"
            >
              تسوق الآن
            </button>
          </div>
        </div>
      </header>

      {/* 🔥 Hero Section */}
      <section id="hero" className="relative py-16 px-6 border-b border-neutral-800/60 bg-gradient-to-b from-neutral-900/60 to-neutral-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* النصوص الترويجية */}
          <div className="space-y-6 text-right">
           

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black leading-snug tracking-tight text-white"
            >
              صمّمنا الراحة لنصنع من منزلك <span className="text-amber-400">تحفة فنية</span>
            </motion.h1>

           

            {/* 🌟 الجملة المميزة */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3 text-amber-300 font-semibold text-sm md:text-base"
            >
              <span className="text-xl">✨</span>
              <span>متاح تنفيذ أي شكل ركنة أو أنتريه بأعلى الخامات وأقل تكلفة</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-2 flex gap-4"
            >
              <button
                onClick={(e) => handleScrollTo(e, "products")}
                className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold px-8 py-3.5 rounded-xl shadow-md transition duration-200"
              >
                استعرض المجموعات
              </button>
            </motion.div>
          </div>

          {/* صورة المعرض */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl h-72 sm:h-96">
              <img
                src={assets.header}
                alt="معرض الأثاث الفاخر"
                className="w-full h-full object-fill"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* مميزات المعرض */}
      <div id="features">
        <FeaturesSection />
      </div>

      {/* 🔽 رأس قسم المنتجات والفلترة */}
      <section id="products" className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-neutral-800/80 pb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">معرض الأثاث والأنتريهات</h2>
            <p className="text-sm text-neutral-400 mt-1">
              تصفح أحدث القطع المصممة بعناية لتناسب ذوقك
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <label className="text-sm text-neutral-400 whitespace-nowrap">ترتيب حسب:</label>
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 transition w-full md:w-auto cursor-pointer"
            >
              <option value="relevant">الأكثر صلة (الموصى به)</option>
              <option value="low-high">السعر: من الأقل للأعلى</option>
              <option value="high-low">السعر: من الأعلى للأقل</option>
            </select>
          </div>
        </div>
      </section>

      {/* 🛍 شبكة المنتجات (Products Grid) */}
      <main className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filterProducts.map((item, idx) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-neutral-900/70 border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* صورة المنتج */}
              <div
                className="relative h-52 bg-neutral-950 overflow-hidden cursor-pointer"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img
                  src={item.images?.[0]}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300 ease-out"
                />

                {/* شارة الخصم */}
                {item.oldPrice && (
                  <span className="absolute top-3 right-3 bg-red-600/90 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-md">
                    خصم خاص
                  </span>
                )}
              </div>

              {/* تفاصيل المنتج */}
              <div className="p-5 text-right flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="text-base font-bold text-neutral-100 hover:text-amber-400 transition cursor-pointer line-clamp-1"
                  >
                    {item.name}
                  </h3>

                  {/* تقييم المنتج */}
                  <div className="flex items-center gap-2 mt-2 text-sm text-neutral-400">
                    <span className="text-amber-400 font-bold">★ {item.rating || "4.9"}</span>
                    <span className="text-xs text-neutral-500">({item.reviews || "12"} تقييم)</span>
                  </div>
                </div>

                {/* سعر المنتج والأزرار */}
                <div className="mt-4 pt-4 border-t border-neutral-800/60">
                  <div className="flex items-baseline justify-between mb-4">
                    <div className="text-right">
                      <p className="text-xl font-black text-amber-400">
                        {item.price} <span className="text-xs font-normal text-neutral-400">جنيه</span>
                      </p>
                      {item.oldPrice && (
                        <p className="text-xs text-neutral-500 line-through">
                          {item.oldPrice} جنيه
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="w-full bg-neutral-800 hover:bg-amber-500 hover:text-neutral-950 text-neutral-200 font-bold py-2.5 rounded-xl transition-colors duration-200 text-sm"
                  >
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Collection;