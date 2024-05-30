import React, { useEffect } from 'react';

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import WorkIcon from '@mui/icons-material/Work';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useDispatch } from 'react-redux';
import { setImage } from '../feature/upploadImage';
import {  useSelector } from 'react-redux';

// import TextField from '@mui/material/TextField';

const PersonalDetailsForm = ({ onSubmit }) => {
 
  const [formData, setFormData] = React.useState({
    name: '',
    age: '',
  });

  const dispatch = useDispatch();
  const {selectedOption } = useSelector((state) => state.form);


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(setImage(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  useEffect(() => {
    onSubmit(formData);
  }, [formData]);

  // console.log(skill)

  return (
    <div>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', margin: '10px', maxwidth : '100%' }}>
       {/* <div className='formBox'>     */}
      <h2>Personal Details</h2>

      <form>
        { selectedOption === 2 &&(
      <div>
      <input  type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
        )
}
        <div className='form-section'>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1, width: '30ch'}} id="input-with-sx" label="Full Name" variant="standard" name="name" value={formData.name} onChange={handleChange}  />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <WorkIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField sx={{ m: 1, width: '30ch'}} id="input-with-sx" label="Job Profile" variant="standard" name="job" value={formData.job} onChange={handleChange} />
      </Box>
      <Grid container > 
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SmartphoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField sx={{ m: 1, width: '25ch'}} id="input-with-sx" label="Phone Number" variant="standard" name="phone" value={formData.phone} onChange={handleChange} />
      </Box>   
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField sx={{ m: 1, width: '25ch'}} id="input-with-sx" label="Gmail I'd" variant="standard" name="email" value={formData.email} onChange={handleChange} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LinkedInIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField sx={{ m: 1, width: '25ch'}} id="input-with-sx" label="Linkedin" variant="standard" name="linkedin" value={formData.linkedin} onChange={handleChange} />
      </Box>
      { selectedOption !== 2 && (
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <GitHubIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField sx={{ m: 1, width: '25ch'}} id="input-with-sx" label="Github" variant="standard" name="github" value={formData.github} onChange={handleChange} />
      </Box>
      )}
         </Grid>


{/* Skill section */}
       <div> 
      <FormControl variant="standard" sx={{ m: 1 }}>
        <InputLabel htmlFor="input-with-icon-adornment">  Skills (minimum Five) </InputLabel>
        <Grid container spacing={0}> 
        <Input id="input-with-icon-adornment" className='margin' startAdornment={
            <InputAdornment position="start">  <AddIcon />  </InputAdornment>
          }  
           name="skills1" value={formData.skills1}  onChange={handleChange} 
        />
       <Input id="input-with-icon-adornment" className='margin' startAdornment={
            <InputAdornment position="start">  <AddIcon />  </InputAdornment>
          }  
           name="skills2" value={formData.skills2}  onChange={handleChange} 
        /><Input id="input-with-icon-adornment" className='margin' startAdornment={
          <InputAdornment position="start">  <AddIcon />  </InputAdornment>
        }  
         name="skills3" value={formData.skills3}  onChange={handleChange} 
      /><Input id="input-with-icon-adornment" className='margin' startAdornment={
        <InputAdornment position="start">  <AddIcon />  </InputAdornment>
      }  
       name="skills4" value={formData.skills4}  onChange={handleChange} 
    /><Input id="input-with-icon-adornment" className='margin' startAdornment={
      <InputAdornment position="start">  <AddIcon />  </InputAdornment>
    }  
     name="skills5" value={formData.skills5}  onChange={handleChange} 
  />
  
       </Grid>


      </FormControl>
      </div>
          <FormControl variant="standard" sx={{ m: 1 }}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Your Strength (in 200-240)
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          name="profile" required value={formData.profile} onChange={handleChange}  inputProps={{
            maxLength: 240, minLenght: 200
          }} 
        />
      </FormControl>
          
        </div>
      </form>
      {/* </div> */}
      </Box>
    </div>
  );
};

export default PersonalDetailsForm;
