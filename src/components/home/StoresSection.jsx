import React, { useMemo, useState } from "react";
import {
  HiOutlineSearch,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiChevronDown,
  HiOutlineGlobeAlt,
  HiPlus,
  HiMinus,
} from "react-icons/hi";

const brand = "#30B34A";

const REGIONS = [
  {
    slug: "andijon",
    name: "Andijon viloyati",
    branches: [
      {
        id: 1,
        title: "Andijon filiali",
        address: "Andijon shahri, 7-uy",
        time: "08:00 – 20:00",
        status: "OCHIQ",
      },
      {
        id: 2,
        title: "Asaka filiali",
        address: "Asaka shahri, 12-uy",
        time: "08:00 – 19:00",
        status: "OCHIQ",
      },
    ],
  },
  {
    slug: "buxoro",
    name: "Buxoro viloyati",
    branches: [
      {
        id: 10,
        title: "Buxoro markaziy",
        address: "Buxoro shahri, 25-uy",
        time: "09:00 – 21:00",
        status: "OCHIQ",
      },
    ],
  },
  {
    slug: "fargona",
    name: "Farg'ona viloyati",
    branches: [
      {
        id: 20,
        title: "Farg‘ona filiali",
        address: "Farg‘ona shahri, 18-uy",
        time: "09:00 – 21:00",
        status: "OCHIQ",
      },
    ],
  },
  {
    slug: "jizzax",
    name: "Jizzax viloyati",
    branches: [
      {
        id: 30,
        title: "Jizzax filiali",
        address: "Jizzax shahri, 11-uy",
        time: "09:00 – 20:00",
        status: "OCHIQ",
      },
    ],
  },
  {
    slug: "namangan",
    name: "Namangan viloyati",
    branches: [
      {
        id: 40,
        title: "Namangan filiali",
        address: "Namangan shahri, 30-uy",
        time: "09:00 – 21:00",
        status: "OCHIQ",
      },
    ],
  },
  {
    slug: "navoiy",
    name: "Navoiy viloyati",
    branches: [
      {
        id: 50,
        title: "Navoiy markaziy",
        address: "Navoiy shahri, 10-uy",
        time: "09:00 – 21:00",
        status: "OCHIQ",
      },
    ],
  },
  {
    slug: "qashqadaryo",
    name: "Qashqadaryo viloyati",
    branches: [
      {
        id: 60,
        title: "Qarshi filiali",
        address: "Qarshi shahri, 22-uy",
        time: "09:00 – 20:00",
        status: "OCHIQ",
      },
    ],
  },
  {
    slug: "qoraqalpogiston",
    name: "Qoraqalpog‘iston Respublikasi",
    branches: [
      {
        id: 70,
        title: "Nukus filiali",
        address: "Nukus shahri, 15-uy",
        time: "09:00 – 21:00",
        status: "OCHIQ",
      },
    ],
  },
  {
    slug: "samarqand",
    name: "Samarqand viloyati",
    branches: [
      {
        id: 80,
        title: "Samarqand markaziy",
        address: "Samarqand shahri, 5-uy",
        time: "09:00 – 21:00",
        status: "OCHIQ",
      },
    ],
  },
  {
    slug: "sirdaryo",
    name: "Sirdaryo viloyati",
    branches: [
      {
        id: 90,
        title: "Guliston filiali",
        address: "Guliston shahri, 12-uy",
        time: "09:00 – 20:00",
        status: "OCHIQ",
      },
    ],
  },
  {
    slug: "surxondaryo",
    name: "Surxondaryo viloyati",
    branches: [
      {
        id: 100,
        title: "Termiz filiali",
        address: "Termiz shahri, 19-uy",
        time: "09:00 – 21:00",
        status: "OCHIQ",
      },
    ],
  },
  {
    slug: "toshkent-viloyati",
    name: "Toshkent viloyati",
    branches: [
      {
        id: 110,
        title: "Nurafshon filiali",
        address: "Nurafshon shahri, 21-uy",
        time: "09:00 – 20:00",
        status: "OCHIQ",
      },
    ],
  },
  {
    slug: "toshkent-shahri",
    name: "Toshkent shahri",
    branches: [
      {
        id: 120,
        title: "Chilonzor filiali",
        address: "Chilonzor tumani, 5-uy",
        time: "09:00 – 23:00",
        status: "OCHIQ",
      },
      {
        id: 121,
        title: "Sergeli filiali",
        address: "Sergeli tumani, 42-uy",
        time: "09:00 – 22:00",
        status: "OCHIQ",
      },
    ],
  },
];

const StoresSection = () => {
  const [regionOpen, setRegionOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(REGIONS[0]);
  const [search, setSearch] = useState("");
  const [activeBranchId, setActiveBranchId] = useState(
    REGIONS[0].branches[0]?.id ?? null
  );

  const filteredBranches = useMemo(() => {
    if (!search.trim()) return selectedRegion.branches;
    const s = search.toLowerCase();
    return selectedRegion.branches.filter(
      (b) =>
        b.title.toLowerCase().includes(s) ||
        b.address.toLowerCase().includes(s)
    );
  }, [search, selectedRegion]);

  const activeBranch =
    selectedRegion.branches.find((b) => b.id === activeBranchId) ||
    selectedRegion.branches[0] ||
    null;

  const markerPositions = [
    { top: "25%", left: "35%" },
    { top: "40%", left: "55%" },
    { top: "60%", left: "48%" },
    { top: "35%", left: "70%" },
    { top: "55%", left: "30%" },
    { top: "50%", left: "65%" },
  ];
  const markers = filteredBranches.slice(0, markerPositions.length);

  return (
    <section className="bg-linear-to-b from-white to-[#f1f5f9] py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto px-0 md:px-2 lg:px-4 space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4 sm:mb-6">
          <div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
              style={{ color: brand }}
            >
              Do&apos;kon manzillari
            </h2>
            <div
              className="mt-3 h-1.5 sm:h-2 w-28 sm:w-32 rounded-full shadow-[0_10px_30px_rgba(48,179,74,0.45)]"
              style={{ backgroundColor: brand }}
            />
            <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-500 font-medium">
              {selectedRegion.name} bo&apos;yicha filiallar ro&apos;yxati
            </p>
          </div>

          <div className="relative w-full max-w-md md:max-w-sm md:w-auto">
            <button
              type="button"
              onClick={() => setRegionOpen((o) => !o)}
              className="flex w-full items-center justify-between gap-3 
                         bg-white px-4 sm:px-5 py-3 rounded-2xl font-semibold text-gray-900 
                         shadow-sm hover:shadow-md transition-all border border-gray-200 
                         hover:border-[#30B34A33] text-sm sm:text-base"
            >
              <span className="truncate">{selectedRegion.name}</span>
              <HiChevronDown
                className={`text-[#30B34A] transition-transform duration-200 ${
                  regionOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {regionOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl z-30 w-full py-2 max-h-72 overflow-y-auto custom-scrollbar">
                {REGIONS.map((region) => {
                  const isActive = region.slug === selectedRegion.slug;
                  return (
                    <button
                      key={region.slug}
                      type="button"
                      onClick={() => {
                        setSelectedRegion(region);
                        setActiveBranchId(region.branches[0]?.id ?? null);
                        setRegionOpen(false);
                        setSearch("");
                      }}
                      className={`w-full text-left px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold 
                                  flex items-center justify-between gap-2 transition-colors
                        ${
                          isActive
                            ? "bg-[#EBF7EE] text-[#30B34A]"
                            : "text-slate-800 hover:bg-slate-50"
                        }`}
                    >
                      <span className="truncate">{region.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#30B34A]" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div
          className="
            bg-white 
            rounded-3xl lg:rounded-[34px] 
            overflow-hidden 
            shadow-[0_18px_45px_rgba(15,23,42,0.08)] 
            border border-slate-100 
            flex flex-col md:flex-row
            md:h-130 lg:h-170
          "
        >
       
          <div className="w-full md:w-90 lg:w-105 flex flex-col border-b md:border-b-0 md:border-r border-slate-100 bg-linear-to-b from-white to-[#f8fafc]">
       
            <div className="p-4 sm:p-5 border-b border-slate-100">
              <div className="relative">
                <HiOutlineSearch className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base sm:text-lg" />
                <input
                  type="text"
                  placeholder="Do'kon manzili bo'yicha qidirish"
                  className="w-full bg-[#f9fafb] border border-gray-200 rounded-2xl py-2.5 sm:py-3.5 pl-9 sm:pl-11 pr-3.5 
                             outline-none focus:border-[#30B34A] focus:ring-2 focus:ring-[#30B34A33] 
                             transition-all font-medium text-gray-700 text-xs sm:text-sm placeholder:text-gray-400"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar px-3 sm:px-4 py-3 sm:py-4 space-y-3">
              {filteredBranches.map((branch) => {
                const isActive = branch.id === activeBranchId;
                return (
                  <button
                    key={branch.id}
                    type="button"
                    onClick={() => setActiveBranchId(branch.id)}
                    className={`w-full text-left rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-200 group
                      ${
                        isActive
                          ? "bg-[#EBF7EE] border border-[#30B34A] shadow-md shadow-[#30B34A29]"
                          : "bg-white border border-transparent hover:border-[#30B34A33] hover:bg-slate-50"
                      }`}
                  >
                    <div className="flex gap-3 px-4 sm:px-5 py-3 sm:py-4">
                      <div className="pt-0.5 sm:pt-1">
                        <div
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border text-base sm:text-lg bg-white
                            ${
                              isActive
                                ? "border-[#30B34A] text-[#30B34A]"
                                : "border-slate-200 text-slate-400"
                            }`}
                        >
                          <HiOutlineLocationMarker />
                        </div>
                      </div>

                      <div className="flex-1 space-y-1.5 sm:space-y-2">
                        <div>
                          <h3 className="text-xs sm:text-sm md:text-base font-black text-slate-900 mb-0.5">
                            {branch.title}
                          </h3>
                          <p className="text-[11px] sm:text-xs font-medium text-slate-500 leading-relaxed">
                            {branch.address}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs md:text-sm">
                          <div className="inline-flex items-center gap-1.5 font-semibold text-slate-900">
                            <HiOutlineClock className="text-sm sm:text-base text-slate-600" />
                            <span>{branch.time}</span>
                          </div>
                          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 sm:px-3 py-0.5 text-[9px] sm:text-[10px] md:text-xs font-bold text-emerald-600 border border-emerald-200 uppercase tracking-widest">
                            {branch.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}

              {filteredBranches.length === 0 && (
                <p className="text-[11px] sm:text-xs md:text-sm text-slate-400 px-1 py-4">
                  Bu viloyatda qidiruv bo‘yicha filial topilmadi.
                </p>
              )}
            </div>
          </div>

          <div className="relative flex-1 bg-[#e5e7eb] min-h-65 sm:min-h-80 md:min-h-90">
       
            <div className="absolute inset-0">
              <div className="h-full w-full bg-[radial-gradient(circle_at_10%_20%,#f3f4f6,transparent_60%),radial-gradient(circle_at_80%_60%,#e5e7eb,transparent_60%)]" />
              <div className="absolute inset-4 sm:inset-8 md:inset-10 border border-white/70 rounded-[26px] sm:rounded-4xl lg:rounded-[40px] shadow-inner" />
              <div className="absolute inset-4 sm:inset-8 md:inset-10 overflow-hidden opacity-40">
                <div className="absolute inset-0 grid grid-cols-5 grid-rows-4">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="border border-white/70 border-l-0 border-t-0 last:border-b-0 last:border-r-0"
                    />
                  ))}
                </div>
              </div>
            </div>

            {markers.map((branch, index) => {
              const isActiveMarker = branch.id === activeBranchId;
              const pos = markerPositions[index];
              return (
                <button
                  key={branch.id}
                  type="button"
                  onClick={() => setActiveBranchId(branch.id)}
                  style={{ top: pos.top, left: pos.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white shadow-md transition
                      ${
                        isActiveMarker
                          ? "border-[#30B34A] shadow-[#30B34A66] scale-110"
                          : "border-emerald-200"
                      }`}
                  >
                    <span
                      className={`h-3 w-3 rounded-full transition
                        ${isActiveMarker ? "bg-[#30B34A]" : "bg-emerald-300"}`}
                    />
                  </span>
                  <span className="pointer-events-none mt-2 inline-block max-w-40 -translate-x-1/2 rounded-xl bg-white/95 px-3 py-1 text-[10px] font-semibold text-slate-700 shadow opacity-0 group-hover:opacity-100 transition">
                    {branch.title}
                  </span>
                </button>
              );
            })}

            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex flex-col gap-2 z-10">
              <button className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-white shadow-md flex items-center justify-center text-slate-600 hover:bg-slate-50 active:scale-95 transition">
                <HiPlus />
              </button>
              <button className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-white shadow-md flex items-center justify-center text-slate-600 hover:bg-slate-50 active:scale-95 transition">
                <HiMinus />
              </button>
            </div>

            <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-10">
              <div className="rounded-xl bg-white/90 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-[11px] md:text-xs text-slate-500 shadow">
                Bu interfeys demo, haqiqiy xarita emas 🙂
              </div>
            </div>

            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 z-10 flex items-center gap-2 text-[9px] sm:text-[10px] text-slate-600">
              <div className="h-0.5 w-12 sm:w-16 bg-slate-500 rounded-full" />
              <span>5 km</span>
            </div>

            {activeBranch && (
              <div className="absolute top-4 sm:top-6 left-4 sm:left-8 z-10 max-w-[70%] sm:max-w-xs">
                <div className="rounded-2xl bg-white/95 px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-lg border border-slate-100">
                  <p className="text-[9px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-[0.18em] mb-1">
                    Tanlangan filial
                  </p>
                  <h3 className="text-xs sm:text-sm md:text-base font-black text-slate-900 mb-1">
                    {activeBranch.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 mb-2">
                    {activeBranch.address}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-slate-800">
                    <HiOutlineClock className="text-sm text-slate-600" />
                    <span>{activeBranch.time}</span>
                    <span className="ml-auto inline-flex items-"
                    ></span>
                  </div>
                </div>
              </div>
            )}

            <div className="relative flex h-full items-center justify-center p-3 sm:p-4 md:p-6 z-0 pointer-events-none">
              <div className="rounded-3xl bg-white/80 px-4 sm:px-6 py-1.5 sm:py-2 shadow-md flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm text-slate-700 backdrop-blur">
                <HiOutlineGlobeAlt className="text-base sm:text-lg text-slate-400" />
                <span>Xarita interfeysi maket ko‘rinishida.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoresSection;
