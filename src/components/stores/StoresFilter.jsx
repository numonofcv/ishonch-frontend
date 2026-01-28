import React, { useMemo, useState } from "react";
import CustomSelect from "./CustomSelect";
import { REGIONS } from "../data/storesData";

const StoresFilter = ({ onFilter }) => {
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");

  const regionOptions = useMemo(
    () => ["Hudud", ...REGIONS.map((r) => r.region)],
    []
  );

  const cityOptions = useMemo(() => {
    if (!region || region === "Hudud") return ["Shahar"];
    const selected = REGIONS.find((r) => r.region === region);
    return ["Shahar", ...selected.cities.map((c) => c.name)];
  }, [region]);

  const handleSearch = () => {
    onFilter?.({
      region: region === "Hudud" ? null : region,
      city: city === "Shahar" ? null : city,
    });
  };

  return (
    <div
      className="
        w-full bg-white rounded-4xl
        shadow-[0_18px_45px_rgba(0,0,0,0.06)]
        border border-gray-100
        px-6 py-8
        flex flex-col gap-6
        md:flex-row md:items-end md:justify-between
      "
    >

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="flex flex-col">
          <CustomSelect
            label="HUDUD"
            value={region}
            onChange={(val) => {
              setRegion(val);
              setCity("Shahar"); 
            }}
            options={regionOptions}
          />
        </div>

        <div className="flex flex-col">
          <CustomSelect
            label="SHAHAR"
            value={city}
            onChange={setCity}
            options={cityOptions}
          />
        </div>
      </div>

      <button
        onClick={handleSearch}
        className="
          mt-2 md:mt-0
          bg-[#30B34A] hover:bg-[#28a43f]
          text-white font-semibold
          text-sm
          rounded-xl
          px-10 py-4
          transition-all
          active:scale-95
        "
      >
        Izlash
      </button>
    </div>
  );
};

export default StoresFilter;