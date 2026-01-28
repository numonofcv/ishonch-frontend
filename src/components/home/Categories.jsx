import React from "react";
import {
  MdOutlineTv,
  MdOutlineSmartphone,
  MdOutlineLocalLaundryService,
  MdOutlineLaptopMac,
  MdOutlineFitnessCenter,
} from "react-icons/md";

const categories = [
  {
    id: 1,
    label: "Televizorlar",
    icon: <MdOutlineTv className="text-[48px] text-slate-700" />,
    bg: "bg-[#E5D9FF]", 
  },
  {
    id: 2,
    label: "Smartfonlar",
    icon: <MdOutlineSmartphone className="text-[48px] text-slate-700" />,
    bg: "bg-[#D5F0FF]", 
  },
  {
    id: 3,
    label: "Maishiy texnika",
    icon: (
      <MdOutlineLocalLaundryService className="text-[48px] text-slate-700" />
    ),
    bg: "bg-[#C8F2CD]", 
  },
  {
    id: 4,
    label: "Noutbuklar",
    icon: <MdOutlineLaptopMac className="text-[48px] text-slate-700" />,
    bg: "bg-[#FDE4CB]", 
  },
  {
    id: 5,
    label: "Sport mahsulotlari",
    icon: <MdOutlineFitnessCenter className="text-[48px] text-slate-700" />,
    bg: "bg-[#FBD3DD]", 
  },
];

const Categories = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center text-center"
            >
              
              <div
                className={`
                  ${cat.bg}
                  w-full
                  rounded-[40px]
                  aspect-4/3
                  flex items-center justify-center
                  shadow-sm
                  transition-all duration-200
                  hover:shadow-md
                `}
              >
                {cat.icon}
              </div>

              <p className="mt-4 text-[17px] md:text-[19px] font-black text-slate-900">
                {cat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
