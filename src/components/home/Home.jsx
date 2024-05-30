import React from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { useDispatch } from 'react-redux';
import { setSelectedOption } from '../../feature/formSlice';
import resumeimg1 from '../gallery/resume1.png'
import resumeimg2 from '../gallery/resum2.png'
import Grid from '@mui/material/Grid';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();

  const handleImageClick = (id) => {
    dispatch(setSelectedOption(id));
  };

  return (
    <div className='home-body'>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className='imagediv'>
          <Grid container columns={16} justifyContent="space-evenly"> 
           {/* For Resume1 */}
              <Link to="/pr">
              <div className='grow' onClick={() => handleImageClick(1)}>   
                <img src={resumeimg1} alt='resume to create' className='resumeimg1' />
              </div>
              </Link>
            
            {/* For resume 2 */}
            <Link to="/pr">
              <div className='grow' onClick={() => handleImageClick(2)}>
                <img src={resumeimg2} alt='resume to create' className='resumeimg2' />
              </div>
              </Link>
            
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default Home
