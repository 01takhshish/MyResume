import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    personalDetails: {},
    education: {},
    projectCerti: {},
    selectedOption: null,
  },
  reducers: {
    setPersonalDetails: (state, action) => {
      
      state.personalDetails = action.payload;
      console.log(state.personalDetails)
    },
    setEducation: (state, action) => {
      state.education = action.payload;
      console.log(state.education)
    },
    setProjectCerti: (state, action) => {
      state.projectCerti = action.payload;
      console.log(state.projectCerti)
    },
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { setPersonalDetails, setEducation, setProjectCerti, setSelectedOption } = formSlice.actions;

export default formSlice.reducer;
