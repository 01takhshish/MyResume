import React, { useEffect } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Box from '@mui/material/Box';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';

const EducationForm = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    degree: '',
    institute: '',
    year: '',
  });
  
  
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

  return (
    <div>
      <h2>Education</h2>
      <form>
{/* Education 1 */}

      <Box  height={240}  my={4}  alignItems="center"  gap={4} p={2} sx={{ border: '1px solid grey' }} >  
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <SchoolIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1, width: '50ch'}} id="input-with-sx" label="Degree" variant="standard" name="degree1" value={formData.degree1} onChange={handleChange}  />
      </Box> <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <ApartmentIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1, width: '50ch'}} id="input-with-sx" label="Institute Name" variant="standard" name="institute1" value={formData.institute1} onChange={handleChange}  />
      </Box> <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <AccessTimeFilledIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1, width: '20ch'}} id="input-with-sx" label="Year" variant="standard" name="year1" value={formData.year1} onChange={handleChange}  />
      </Box>
    </Box>

    {/* Education 2 */}
    <Box  height={240}   my={4}  alignItems="center"  gap={4} p={2} sx={{ border: '2px solid grey' }} >  
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <SchoolIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1, width: '50ch'}} id="input-with-sx" label="Degree" variant="standard" name="degree2" value={formData.degree2} onChange={handleChange}  />
      </Box> <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <ApartmentIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1, width: '50ch'}} id="input-with-sx" label="Institute Name" variant="standard" name="institute2" value={formData.institute2} onChange={handleChange}  />
      </Box> <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <AccessTimeFilledIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1, width: '20ch'}} id="input-with-sx" label="Year" variant="standard" name="year2" value={formData.year2} onChange={handleChange}  />
      </Box>
    </Box>
{/* {Education 3} */}

    <Box  height={240}  my={4}  alignItems="center"  gap={4} p={2} sx={{ border: '2px solid grey' }} >  
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <SchoolIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1, width: '50ch'}} id="input-with-sx" label="Degree" variant="standard" name="degree3" value={formData.degree3} onChange={handleChange}  />
      </Box> <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <ApartmentIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1, width: '50ch'}} id="input-with-sx" label="Institute Name" variant="standard" name="institute3" value={formData.institute3} onChange={handleChange}  />
      </Box> <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <AccessTimeFilledIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1, width: '20ch'}} id="input-with-sx" label="Year" variant="standard" name="year3" value={formData.year3} onChange={handleChange}  />
      </Box>
    </Box>

    {/* hobbies */}
    <div> 
      <FormControl variant="standard" sx={{ m: 1 }}>
        <InputLabel htmlFor="input-with-icon-adornment">  Hobbies (minimum Five) </InputLabel>
        <Grid container spacing={0}> 
        <Input id="input-with-icon-adornment" className='margin' startAdornment={
            <InputAdornment position="start">  <AddIcon />  </InputAdornment>
          }  
           name="hobbies1" value={formData.hobbies1}  onChange={handleChange} 
        />
       <Input id="input-with-icon-adornment" className='margin' startAdornment={
            <InputAdornment position="start">  <AddIcon />  </InputAdornment>
          }  
           name="hobbies2" value={formData.hobbies2}  onChange={handleChange} 
        /><Input id="input-with-icon-adornment" className='margin' startAdornment={
          <InputAdornment position="start">  <AddIcon />  </InputAdornment>
        }  
         name="hobbies3" value={formData.hobbies3}  onChange={handleChange} 
      />
       </Grid>


      </FormControl>
      </div>

      {/* languages */}
      <div> 
      <FormControl variant="standard" sx={{ m: 1 }}>
        <InputLabel htmlFor="input-with-icon-adornment">  Languages (minimum Five) </InputLabel>
        <Grid container spacing={0}> 
        <Input id="input-with-icon-adornment" className='margin' startAdornment={
            <InputAdornment position="start">  <AddIcon />  </InputAdornment>
          }  
           name="language1" value={formData.language1}  onChange={handleChange} 
        />
       <Input id="input-with-icon-adornment" className='margin' startAdornment={
            <InputAdornment position="start">  <AddIcon />  </InputAdornment>
          }  
           name="language2" value={formData.language2}  onChange={handleChange} 
        />
       </Grid>


      </FormControl>
      </div>
        
      </form>
    </div>
  );
};

export default EducationForm;
