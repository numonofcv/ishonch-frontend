import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUzbek, setRussian } from '../../store/languageSlice';

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.language.current);

  return (
    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white p-0.5 text-xs">
      <button
        onClick={() => dispatch(setUzbek())}
        className={`px-2 py-1 rounded-full ${
          current === 'uz'
            ? 'bg-sky-500 text-white'
            : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        UZ
      </button>
      <button
        onClick={() => dispatch(setRussian())}
        className={`px-2 py-1 rounded-full ${
          current === 'ru'
            ? 'bg-sky-500 text-white'
            : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
