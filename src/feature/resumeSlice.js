// resumeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: { name: '', job: '' },
  contact: { phone: '', email: '', linkedin: '', github: '' },
  skills: [],
  education: [],
  languages: [],
  hobbies: [],
  profile: '',
  workExperience: [],
  project: [],
  certificates: []
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => { state.personalInfo = action.payload; },
    setContact: (state, action) => { state.contact = action.payload; },
    setSkills: (state, action) => { state.skills = action.payload; },
    setEducation: (state, action) => { state.education = action.payload; },
    setLanguages: (state, action) => { state.languages = action.payload; },
    setHobbies: (state, action) => { state.hobbies = action.payload; },
    setProfile: (state, action) => { state.profile = action.payload; },
    setWorkExperience: (state, action) => { state.workExperience = action.payload; },
    setProject: (state, action) => { state.project = action.payload; },
    setCertificates: (state, action) => { state.certificates = action.payload; }
  }
});

export const {
  setPersonalInfo,
  setContact,
  setSkills,
  setEducation,
  setLanguages,
  setHobbies,
  setProfile,
  setWorkExperience,
  setProject,
  setCertificates
} = resumeSlice.actions;

export default resumeSlice.reducer;
