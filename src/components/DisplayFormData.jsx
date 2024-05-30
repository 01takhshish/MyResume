import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Resume2 from '../resume-template/Resume2/Resume2';
import Resume1 from '../resume-template/Resume1/Resume1';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DisplayFormData = () => {
  const resumeRef = useRef();
  const formData = useSelector((state) => state.form);
  const { selectedOption } = formData;
  const colorInputRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (selectedOption === 2) {
      const handleUpdate = (event) => {
        const suffix = event.target.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${event.target.name}`, event.target.value + suffix);
      };

      const colorInput = colorInputRef.current;
      if (colorInput) {
        colorInput.addEventListener('change', handleUpdate);

        // Cleanup event listener on component unmount or when selectedOption changes
        return () => {
          colorInput.removeEventListener('change', handleUpdate);
        };
      }
    }
  }, [selectedOption]);

  const handleDownload = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    // If the content is taller than one page, add multiple pages
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save(`resume_${selectedOption}.pdf`);
    setOpen(true); // Open the success modal
  };

  const handleClose = () => setOpen(false);

  return (
    <div className='display'>
      <Grid container columns={16} justifyContent="space-between">
        {/* Color changing option for resume 2 */}
        {selectedOption === 2 && (
          <div className="function-display">
            <p className='colortext'>Change your resume color as per your choice!</p>
            <label htmlFor="color">Resume Color</label>
            <input
              type="color"
              name="resume2color"
              defaultValue="#18185F"
              ref={colorInputRef}
              data-sizing=""
            />
          </div>
        )}
        {/* Download Button */}
        <Button variant="contained" startIcon={<DownloadIcon />} onClick={handleDownload}>
          Download Resume
        </Button>
      </Grid>
      <div className="resume-main border-2 border-black" ref={resumeRef}>
        {selectedOption === 2 && <Resume2 />}
        {selectedOption === 1 && <Resume1 />}
      </div>

      {/* Download Modal section */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Download Successful
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Your resume has been successfully downloaded.
          </Typography>
          <Button onClick={handleClose} variant="contained" sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default DisplayFormData;
