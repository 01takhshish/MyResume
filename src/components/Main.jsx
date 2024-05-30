import React from 'react'
import TabForm from './TabForm'
import '../App.css';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import Resume2 from '../resume-template/Resume2/Resume2';
import Resume1 from '../resume-template/Resume1/Resume1';

import Box from '@mui/material/Box';

const Main = () => {
  const {selectedOption } = useSelector((state) => state.form);
  return (
    <div>
      {/* TabBar and preview Section */}
      <Grid container spacing={1} >

        {/* Tab Bar section */}
      <Grid xs={12} sm={6}>
      <Box component="section" sx={{ p: 2, border: '1px dashed grey' }} className='form-display'>
      <TabForm />
      </Box>
      </Grid>

      {/* Preview Section */}
      <Grid xs={12} sm={6}>
      <Box
      
      my={4}
      alignItems="center"
      gap={4}
      p={2} className=" preview-section border-2 border-black">
        
        { selectedOption === 2 && (
         <Resume2/>
        )}
         { selectedOption === 1 && (
        <Resume1 />
         )}
     
      </Box>
      </Grid>
      </Grid>
    </div>
  )
}

export default Main
