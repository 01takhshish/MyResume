import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import CreateIcon from '@mui/icons-material/Create';
import { useSelector } from 'react-redux';


const ProjectCertiForm = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    adTitle: '',
    description: '',
  });

  const {selectedOption } = useSelector((state) => state.form);


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
      <h2>Project & Certificates</h2>
      <form>
{/* company 1 */}

      <Box    my={4}  alignItems="center"  gap={4} p={2} sx={{ border: '2px solid grey' }} >  
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <CreateIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1, width: '50ch'}} id="input-with-sx" label="Company Name" variant="standard" name="companyName1" value={formData.companyName1} onChange={handleChange}  />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }} >
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <CreateIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1}} id="input-with-sx" label="Job Profile" variant="standard" name="jobProfile1" value={formData.jobProfile1} onChange={handleChange}  />
      </Box> <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <CreateIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1}} id="input-with-sx" label="Start-End" variant="standard" name="startEnd1" value={formData.startEnd1} onChange={handleChange}  />
      </Box>
      </Box>
      <div>
      <FormControl variant="standard" sx={{ m: 1, width: '60ch' }}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Job Responsibilites
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <CreateIcon />
            </InputAdornment>
          }
          name="responsilblite11" value={formData.responsilblite11} onChange={handleChange} 
        />
      </FormControl></div><div>
      <FormControl variant="standard" sx={{ m: 1,  width: '60ch' }}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Job Responsibilites
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <CreateIcon />
            </InputAdornment>
          }
          name="responsilblite12" value={formData.responsilblite12} onChange={handleChange} 
        />
      </FormControl></div>
      <div>
      <FormControl variant="standard" sx={{ m: 1,   width: '60ch' }}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Job Responsibilites
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <CreateIcon />
            </InputAdornment>
          }
          name="responsilblite13" value={formData.responsilblite13} onChange={handleChange} 
        />
      </FormControl></div>
    </Box>

{/* company 2 */}
    <Box    my={4}  alignItems="center"  gap={4} p={2} sx={{ border: '2px solid grey' }} >  
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <CreateIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1, width: '50ch'}} id="input-with-sx" label="Company Name" variant="standard" name="companyName2" value={formData.companyName2} onChange={handleChange}  />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }} >
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <CreateIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1}} id="input-with-sx" label="Job Profile" variant="standard" name="jobProfile2" value={formData.jobProfile2} onChange={handleChange}  />
      </Box> <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <CreateIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1}} id="input-with-sx" label="Start-End" variant="standard" name="startEnd2" value={formData.startEnd2} onChange={handleChange}  />
      </Box>
      </Box>
      <div>
      <FormControl variant="standard" sx={{ m: 1, width: '60ch' }}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Job Responsibilites
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <CreateIcon />
            </InputAdornment>
          }
          name="responsilblite21" value={formData.responsilblite21} onChange={handleChange} 
        />
      </FormControl></div><div>
      <FormControl variant="standard" sx={{ m: 1,  width: '60ch' }}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Job Responsibilites
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <CreateIcon />
            </InputAdornment>
          }
          name="responsilblite22" value={formData.responsilblite22} onChange={handleChange} 
        />
      </FormControl></div>
      <div>
      <FormControl variant="standard" sx={{ m: 1,   width: '60ch' }}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Job Responsibilites
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <CreateIcon />
            </InputAdornment>
          }
          name="responsilblite23" value={formData.responsilblite23} onChange={handleChange} 
        />
      </FormControl></div>
    </Box>

   

{/* project 1 */}
{ selectedOption === 1 && (
    <Box    my={4}  alignItems="center"  gap={4} p={2} sx={{ border: '2px solid grey' }} >  
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <CreateIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1, width: '50ch'}} id="input-with-sx" label="Project Name" variant="standard" name="projectName" value={formData.projectName} onChange={handleChange}  />
      </Box>
      
      <div>
      <FormControl variant="standard" sx={{ m: 1, width: '60ch' }}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Project Details
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <CreateIcon />
            </InputAdornment>
          }
          name="info1" value={formData.info1} onChange={handleChange} 
        />
      </FormControl></div><div>
      <FormControl variant="standard" sx={{ m: 1,  width: '60ch' }}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Project Details
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <CreateIcon />
            </InputAdornment>
          }
          name="info2" value={formData.info2} onChange={handleChange} 
        />
      </FormControl></div>
      <div>
      <FormControl variant="standard" sx={{ m: 1,   width: '60ch' }}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Project Details
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <CreateIcon />
            </InputAdornment>
          }
          name="info3" value={formData.info3} onChange={handleChange} 
        />
      </FormControl></div>
    </Box>
)}
{/* ceritficate */}

    <Box    my={4}  alignItems="center"  gap={4} p={2} sx={{ border: '2px solid grey' }} >  
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <CreateIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1, width: '50ch'}} id="input-with-sx" label="Certificate Name" variant="standard" name="certificateName" value={formData.certificateName} onChange={handleChange}  />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <CreateIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{ m: 1, width: '50ch'}} id="input-with-sx" label="Organization Name" variant="standard" name="organizationName" value={formData.organizationName} onChange={handleChange}  />
      </Box>
      
      <div>
      <FormControl variant="standard" sx={{ m: 1, width: '60ch' }}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Course Details
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <CreateIcon />
            </InputAdornment>
          }
          name="details" value={formData.details} onChange={handleChange} 
        />
      </FormControl></div>
    </Box>
    
    {/* certificate 2 */}
    { selectedOption === 2 && (
      <Box    my={4}  alignItems="center"  gap={4} p={2} sx={{ border: '2px solid grey' }} >  
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <CreateIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
           <TextField sx={{ m: 1, width: '50ch'}} id="input-with-sx" label="Certificate Name" variant="standard" name="certificateName2" value={formData.certificateName2} onChange={handleChange}  />
     </Box>

     <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <CreateIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
           <TextField sx={{ m: 1, width: '50ch'}} id="input-with-sx" label="Organization Name" variant="standard" name="organizationName2" value={formData.organizationName2} onChange={handleChange}  />
     </Box>
     
     <div>
     <FormControl variant="standard" sx={{ m: 1, width: '60ch' }}>
       <InputLabel htmlFor="input-with-icon-adornment">
         Course Details
       </InputLabel>
       <Input
         id="input-with-icon-adornment"
         startAdornment={
           <InputAdornment position="start">
             <CreateIcon />
           </InputAdornment>
         }
         name="details2" value={formData.details2} onChange={handleChange} 
       />
     </FormControl></div>
   </Box>
    )}
      </form>
    </div>
  );
};

export default ProjectCertiForm;
