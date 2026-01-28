import { HiCheck } from "react-icons/hi";

const tagStyle = `
  flex items-center gap-2 bg-white py-2.5 px-5 rounded-[14px]
  shadow-[0_3px_12px_rgba(0,0,0,0.06)]
  text-gray-700 text-[14px] font-medium
`;

export const StoresTags = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-6">
      <div className={tagStyle}>
        <HiCheck className="text-[#30B34A]" /> MANZILI
      </div>
      <div className={tagStyle}>
        <HiCheck className="text-[#30B34A]" /> BOG'lANISH
      </div>
      <div className={tagStyle}>
        <HiCheck className="text-[#30B34A]" /> ISH VAQTLARI
      </div>
      <div className={tagStyle}>
        <HiCheck className="text-[#30B34A]" /> JOYLASHUV VA BOSHQA MA’LUMOTLAR
      </div>
    </div>
  );
};
