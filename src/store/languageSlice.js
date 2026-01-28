import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: 'uz', // 'uz' yoki 'ru'
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setUzbek(state) {
      state.current = 'uz';
    },
    setRussian(state) {
      state.current = 'ru';
    },
    toggleLanguage(state) {
      state.current = state.current === 'uz' ? 'ru' : 'uz';
    },
  },
});

export const { setUzbek, setRussian, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
