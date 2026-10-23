import React from "react";
import { FaCouch, FaTruck, FaShieldAlt, FaTags } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section id="features" className="border-y border-neutral-800 bg-neutral-900/50 py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 text-center">
        
        {/* Item 1 */}
        <div className="flex items-center justify-center gap-3">
          <FaCouch className="text-2xl text-amber-400 shrink-0" />
          <div className="text-right">
            <h4 className="text-sm font-bold text-neutral-200">خامات ممتازة</h4>
            <p className="text-xs text-neutral-400">أخشاب وأقمشة فاخرة</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center justify-center gap-3">
          <FaTruck className="text-2xl text-amber-400 shrink-0" />
          <div className="text-right">
            <h4 className="text-sm font-bold text-neutral-200">توصيل وتركيب</h4>
            <p className="text-xs text-neutral-400">شحن آمن حتى باب البيت</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center justify-center gap-3">
          <FaShieldAlt className="text-2xl text-amber-400 shrink-0" />
          <div className="text-right">
            <h4 className="text-sm font-bold text-neutral-200">ضمان حقيقي</h4>
            <p className="text-xs text-neutral-400">ضمان شامل على التصنيع</p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-center justify-center gap-3">
          <FaTags className="text-2xl text-amber-400 shrink-0" />
          <div className="text-right">
            <h4 className="text-sm font-bold text-neutral-200">أفضل قيمة</h4>
            <p className="text-xs text-neutral-400">أسعار تنافسية وعروض</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;