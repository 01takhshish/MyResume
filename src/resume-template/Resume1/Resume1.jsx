import React from 'react';
import './resume1.css'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

const Resume1 = () => {
  const formData = useSelector((state) => state.form);
  console.log(formData.personalDetails.skills)
  
  return ( 
    <div className="resume1 resume  w-full h-full ">
     
    <div className="heading font-serif mt-4">


        <div >
        <h1 className='text-center font-serif subpixel-antialiased font-black text-3xl ' >{formData.personalDetails.name}</h1>
        <h2 className='text-center font-serif subpixel-antialiased '>{formData.personalDetails.job}</h2>
        </div>
      
    </div>

    <div className="border-2 main-border "></div>

    <div className="main-content">
    <div className="main-left-content">
      
      <div className="left-content">
        <Grid className="left-content" spacing={0} columns={16} justifyContent="space-between"
  alignItems="baseline">
     <Grid xs={12}>
        <div className="left-top ">
          <h2 className="  text-slate-500 font-bold">CONTACT</h2>
          <div className="data">
            <ul className='contact-list leading-tight'>
              <li><SmartphoneIcon/>
              <div>{formData.personalDetails.phone}</div></li>
              <li><EmailIcon/><div>{formData.personalDetails.email}</div></li>
              <li><LinkedInIcon/><div>{formData.personalDetails.linkedin}</div></li>
              <li><GitHubIcon/><div>{formData.personalDetails.github}</div></li>
            </ul>
          </div>
        </div>
        </Grid>
        <Grid xs={12}>
        <div className="border-2 bd border-dashed "></div>
        </Grid>
        <Grid xs={12}>

        <div className="left-sec">
          <h2 className=" text-slate-500 font-bold">SKILLS</h2>
          <div className="data " >
                <div>{formData.personalDetails.skills1}</div>
                <div>{formData.personalDetails.skills2}</div>
                <div>{formData.personalDetails.skills3}</div>
                <div>{formData.personalDetails.skills4}</div>
                <div>{formData.personalDetails.skills5}</div>
          </div>
        </div>
        </Grid>
        <Grid xs={12}>
        
        <div className="border-2 bd border-dashed  "></div>
        </Grid>
        <Grid xs={12}>

        <div className="left-third py-2">
          <h2 className="  text-slate-500 font-bold">EDUCATION</h2>
  
             <div className="data" >
             <p className='font-bold font-lg'>{formData.education.degree1}</p>
             <p>{formData.education.institute1}</p>
             <p>{formData.education.year1}</p>
           </div>
           <div className="data" >
             <p className='font-bold font-lg'>{formData.education.degree2}</p>
             <p>{formData.education.institute2}</p>
             <p>{formData.education.year2}</p>
           </div>
           <div className="data" >
             <p className='font-bold font-lg'>{formData.education.degree3}</p>
             <p>{formData.education.institute3}</p>
             <p>{formData.education.year3}</p>
           </div>
      
          
        
        </div>
        </Grid>
        <Grid xs={12}>
        <div className="border-2 bd border-dashed "></div>
        </Grid>
        <Grid xs={12}>

<div className="left-end py-2">
   <h2 className="  text-slate-500 font-bold">Hobbies</h2>
   <div className=''>
   
    <div  > {formData.education.hobbies1} </div>
    <div  > {formData.education.hobbies2} </div>
    <div  > {formData.education.hobbies3} </div>
  
</div>
</div>
        </Grid>
        <Grid xs={12}>

        <div className="border-2 bd border-dashed "></div>

        </Grid>
        <Grid xs={12}>
        <div className="left-end py-2">
           <h2 className="  text-slate-500 font-bold">LANGUAGES</h2>
           <div className=''>
            <div  > {formData.education.language1} </div>
            <div > {formData.education.language2} </div>
         
        </div>
        </div>
        </Grid>
       </Grid>
      </div>
      </div>
     

      <div className="right-content ">

        <div className="right-top py-2">
          <h2 className="  text-slate-500 font-bold">PROFILE</h2>
          <p>{formData.personalDetails.profile}</p>
        </div>
        
        <div className="border-2"></div>


        <div className="right-sec py-2">
          <h2 className="  text-slate-500 font-bold">WORK EXPERINCE</h2>
         
              <div  className='data'>
                <p className='data font-bold mt-2'>{formData.projectCerti.companyName1}</p>
                <p className='text-slate-500'>{formData.projectCerti.jobProfile1} , {formData.projectCerti.startEnd1}</p>
            <ul className='list-style'>
              
              <li>{formData.projectCerti.responsilblite11}</li>
              <li>{formData.projectCerti.responsilblite12}</li>
              <li>{formData.projectCerti.responsilblite13}</li>
            </ul>
              </div>
              <div  className='data'>
                <p className='data font-bold mt-2'>{formData.projectCerti.companyName2}</p>
                <p className='text-slate-500'>{formData.projectCerti.jobProfile2} , {formData.projectCerti.startEnd2}</p>
            <ul className='list-style'>
              
              <li>{formData.projectCerti.responsilblite21}</li>
              <li>{formData.projectCerti.responsilblite22}</li>
              <li>{formData.projectCerti.responsilblite23}</li>
            </ul>
              </div>
        
            
        </div>

        <div className="border-2"></div>


<div className="right-sec py-2">
  <h2 className="  text-slate-500 font-bold">My Project</h2>

      <div  className='data'>
        <p className='data   font-bold mt-2'>{formData.projectCerti.projecctName}</p>
        {/* <p className='text-slate-500'>{data.designation} , {data.year}</p> */}
    <ul className='list-style'>
      
      <li>{formData.projectCerti.info1}</li>
      <li>{formData.projectCerti.info2}</li>
      <li>{formData.projectCerti.info3}</li>
      
    </ul>
      </div>
  
    
</div>


        <div className="border-2"></div>

        <div className="right-third py-2">
          <h2 className="  text-slate-500 font-bold">CERITIFICATES</h2>
          
              <div  className='data'>
                <p className='data   font-bold mt-2'>{formData.projectCerti.certificateName}</p>
                <p className='text-slate-500'>{formData.projectCerti.organizationName} </p>
               <p>{formData.projectCerti.details}</p>
              </div>
           
        </div>

      </div>
      
    </div>

    <div className="border-2 main-border  mb-8"></div>

 </div>

  )
}

export default Resume1
