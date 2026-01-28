import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiChevronUpDown, HiCheck } from "react-icons/hi2";

export default function CustomSelect({ label, value, onChange, options }) {
  return (
    <div className="w-full">
      <label className="text-xs font-semibold text-gray-400 mb-2 block tracking-wide">
        {label}
      </label>

      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button
            className="
              relative w-full cursor-pointer rounded-[14px] 
              bg-white py-4 px-5 pr-10 text-left
              border border-gray-200 text-gray-700 text-[15px]
              focus:outline-none focus:border-[#30B34A]
            "
          >
            <span className="block truncate">{value || label}</span>
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <HiChevronUpDown className="text-gray-400" size={20} />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="
                custom-scrollbar
                absolute mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white 
                shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100
                py-2 text-base focus:outline-none z-50
              "
            >
              {options.map((opt, idx) => (
                <Listbox.Option
                  key={idx}
                  value={opt}
                  className={({ active }) =>
                    `
                      relative cursor-pointer select-none py-3 pl-10 pr-4
                      text-[15px] 
                      ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}
                    `
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium text-[#30B34A]" : "font-normal"
                        }`}
                      >
                        {opt}
                      </span>
                      {selected ? (
                        <span className="absolute left-3 top-3 text-[#30B34A]">
                          <HiCheck size={18} />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
