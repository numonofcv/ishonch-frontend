import React, { useMemo } from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlinePhone,
} from "react-icons/hi";
import { REGIONS } from "../data/storesData";

const StoreCard = ({ region, city, lang = "uz" }) => {
  const filteredStores = useMemo(() => {
    const items = [];

    REGIONS.forEach((reg) => {
      if (region && reg.region !== region) return;

      reg.cities.forEach((c) => {
        if (city && c.name !== city) return;

        c.stores.forEach((store) => {
          items.push({
            ...store,
            region: reg.region,
            city: c.name,
          });
        });
      });
    });

    if (!region && !city) {
      return items.slice(0, 5);
    }

    return items;
  }, [region, city]);

  const hasFilters = !!region || !!city;

  const mapTextUz = "Yo'nalishlar uchun xaritaga qarang";
  const mapTextRu = "Посмотреть маршрут на карте";
  const openTextUz = "OCHIQ";
  const openTextRu = "ОТКРЫТО";

  return (
    <section className="w-full">

      <div className="flex items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {lang === "ru" ? "Список магазинов" : "Filiallar ro‘yxati"}
          </h2>

          {!hasFilters && (
            <p className="text-xs text-gray-400 mt-1">
              {lang === "ru"
                ? "Показаны все филиалы."
                : "Barcha filiallar ko‘rsatilmoqda."}
            </p>
          )}

          {hasFilters && filteredStores.length > 0 && (
            <p className="text-xs text-gray-400 mt-1">
              {lang === "ru"
                ? `Найдено: ${filteredStores.length} филиал(ов)`
                : `Topildi: ${filteredStores.length} ta filial`}
            </p>
          )}

          {hasFilters && filteredStores.length === 0 && (
            <p className="text-xs text-red-500 mt-1 font-semibold">
              {lang === "ru"
                ? "Ничего не найдено по выбранным параметрам."
                : "Natijalar topilmadi — filterlarni o‘zgartirib ko‘ring."}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 border border-gray-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {lang === "ru" ? "Всего:" : "Jami:"}
            <span className="font-semibold text-gray-800 ml-1">
              {filteredStores.length}
            </span>
          </span>
        </div>
      </div>

      {filteredStores.length === 0 && (
        <div className="mt-4 rounded-2xl border border-dashed border-gray-200 bg-white p-6 text-sm text-gray-500">
          {lang === "ru"
            ? "По выбранным фильтрам магазины не найдены. Попробуйте изменить регион или город."
            : "Tanlangan filter bo‘yicha filial topilmadi. Hudud yoki shaharni o‘zgartirib ko‘ring."}
        </div>
      )}

      <div className="mt-4 space-y-4">
        {filteredStores.map((store, idx) => (
          <article
            key={`${store.region}-${store.city}-${store.id}-${idx}`}
            className="
              w-full bg-white border border-gray-100
              rounded-[28px]
              shadow-[0_18px_45px_rgba(15,23,42,0.06)]
              flex flex-col md:flex-row overflow-hidden
            "
          >
            {/* LEFT — IMAGE */}
            <div className="relative md:w-[38%]">
              <img
                src={store.image}
                alt={store.address}
                className="h-48 md:h-full w-full object-cover"
              />

              <div className="absolute left-4 bottom-4">
                <span className="inline-flex items-center rounded-full bg-black/65 text-white text-[11px] px-3 py-1">
                  *Do‘konning asl surati emas
                </span>
              </div>
            </div>

            <div className="flex-1 px-6 py-5 md:py-6 flex flex-col gap-4 md:gap-5">
              <div>
                <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-900">
                  {store.region}
                </h3>
                <p className="mt-1 text-[13px] md:text-[14px] text-gray-600">
                  {store.address}
                </p>
              </div>

              <div className="flex flex-col gap-3 text-[14px] text-gray-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                    <HiOutlineClock size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">{store.time}</span>
                    <span className="text-xs font-semibold text-[#30B34A] uppercase tracking-wide">
                      {lang === "ru" ? openTextRu : openTextUz}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                    <HiOutlinePhone size={20} />
                  </div>
                  <a
                    href={`tel:${store.phone.replace(/\s/g, "")}`}
                    className="font-semibold hover:underline"
                  >
                    {store.phone}
                  </a>
                </div>
              </div>

              <div className="mt-1">
                <button
                  type="button"
                  onClick={() =>
                    store.mapUrl && store.mapUrl !== "#" &&
                    window.open(store.mapUrl, "_blank")
                  }
                  className="
                    inline-flex items-center gap-2
                    text-[13px] md:text-[14px]
                    font-medium text-[#2563eb]
                    hover:text-[#1d4ed8] hover:underline
                  "
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                    <HiOutlineLocationMarker size={18} />
                  </span>
                  <span>{lang === "ru" ? mapTextRu : mapTextUz}</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StoreCard;
