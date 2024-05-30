import React, { useState, useEffect } from 'react';
import { Box, Button,  Stepper, Step, StepButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import PersonalDetailsForm from '../forms/PersonalDetailsForm';
import EducationForm from '../forms/EducationForm';
import ProjectCertiForm from '../forms/ProjectCert';
import { setPersonalDetails, setEducation, setProjectCerti } from '../feature/formSlice';
import { useNavigate } from 'react-router-dom';
import Resume1 from '../resume-template/Resume1/Resume1';



const steps = ['Personal Details', 'Education', 'Project & Certificates'];


const Tab = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [formData, setFormData] = useState({
    personalDetails: {},
    education: {},
    projectCerti: {}
  });

  const dispatch = useDispatch();
  const savedFormData = useSelector((state) => state.form);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeStep === steps.length) {
      console.log('Form data:', savedFormData); // Debugging
    }
  }, [activeStep, savedFormData]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // handle submit button for each form
  const handleSubmit = () => {
    if (activeStep === 0) {
      dispatch(setPersonalDetails(formData.personalDetails));
    } else if (activeStep === 1) {
      dispatch(setEducation(formData.education));
    } else if (activeStep === 2) {
      dispatch(setProjectCerti(formData.projectCerti));
    }
    handleComplete();
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    if (activeStep === steps.length - 1) {
      navigate('/dis');
    } else {
      handleNext();
    }
  };

  // handle change from input value in each form

  const handleFormDataChange = (data) => {
    if (activeStep === 0) {
      setFormData((prevData) => ({ ...prevData, personalDetails: data }));
    } else if (activeStep === 1) {
      setFormData((prevData) => ({ ...prevData, education: data }));
    } else if (activeStep === 2) {
      setFormData((prevData) => ({ ...prevData, projectCerti: data }));
    }
  };

      // form section using switch section

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalDetailsForm onSubmit={handleFormDataChange} />;
      case 1:
        return <EducationForm onSubmit={handleFormDataChange} />;
      case 2:
        return <ProjectCertiForm onSubmit={handleFormDataChange} />;
      default:
        return 'Unknown step';
    }
  };

  

  return (
    <Box sx={{ width: '100%', maxWidth: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={() => setActiveStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>

      <Box>
        {activeStep < steps.length ? getStepContent(activeStep) : <Resume1 />}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', maxWidth: '100%' }}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
};

export default Tab;
