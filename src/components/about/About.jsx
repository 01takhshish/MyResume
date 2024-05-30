import { Stack, Typography, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import { GitHub } from "@mui/icons-material";
import Instagram from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import resumeimg from "../gallery/resumeimg.png";

export default function About() {
  return (
    <>
      <Stack
        p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px" }}
        sx={{ backgroundColor: "#f9f9f9", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
      >
        <Typography variant="h3" sx={{ fontFamily: `"Poppins", sans-serif`, fontWeight: 600, color: "#333" }}>
          Resume Builder
        </Typography>
        <Stack
          direction={{ xs: "column-reverse", sm: "column-reverse", md: "row", lg: "row" }}
          spacing={{ xs: 2, sm: 3, md: 4 }}
          mt="20px"
        >
          {/* About description */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
                pr: { xs: "15px", sm: "18px", lg: "25px" },
                textAlign: "justify",
                fontFamily: `"Poppins", sans-serif`,
                color: "#555",
                lineHeight: 1.6
              }}
            >
             <p> Welcome to My Resume, your go-to platform for crafting professional, standout resumes. We recognize the importance of a well-crafted resume in showcasing your skills and aspirations. Our mission is to simplify the resume-building process, making it accessible for everyone.</p>

            <p>  At My Resume, we believe every individual has a unique story to tell. Whether you're an experienced professional or a recent graduate, we are here to help you present your best self on paper.</p>


            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "22px", sm: "25px", md: "27px", lg: "30px" },
                fontWeight: 500,
                color: "#333",
                fontFamily: `"Poppins", sans-serif`,
                mt: "20px"
              }}
            >
              Share with your friends
            </Typography>
            <Box className="icons" sx={{ display: "flex", mt: "10px" }}>
              <Link to="https://www.instagram.com">
                <Instagram
                  sx={{ fontSize: "40px", pl: "15px", transition: "transform 0.3s", "&:hover": { transform: "scale(1.2)", color: "#E1306C" } }}
                />
              </Link>
              <Link to="https://www.facebook.com">
                <FacebookOutlinedIcon
                  sx={{ fontSize: "40px", pl: "15px", transition: "transform 0.3s", "&:hover": { transform: "scale(1.2)", color: "#3b5998" } }}
                />
              </Link>
              <Link to="https://www.linkedin.com/in/himanshu-kumawat-488b58266/">
                <GitHub
                  sx={{ fontSize: "40px", pl: "15px", transition: "transform 0.3s", "&:hover": { transform: "scale(1.2)", color: "#0077b5" } }}
                />
              </Link>
              <Link to="https://web.whatsapp.com">
                <WhatsAppIcon
                  sx={{ fontSize: "40px", pl: "15px", transition: "transform 0.3s", "&:hover": { transform: "scale(1.2)", color: "#25D366" } }}
                />
              </Link>
              <Link to="https://www.twitter.com">
                <TwitterIcon
                  sx={{ fontSize: "40px", pl: "15px", transition: "transform 0.3s", "&:hover": { transform: "scale(1.2)", color: "#1DA1F2" } }}
                />
              </Link>
              <Link to="https://www.linkedin.com/in/takhshish-bano-b95aa5235/">
                <LinkedInIcon
                  sx={{ fontSize: "40px", pl: "15px", color: "black", transition: "transform 0.3s", "&:hover": { transform: "scale(1.2)" } }}
                />
              </Link>
            </Box>
          </Box>

          {/* About Image */}
          <Stack sx={{ placeSelf: "center" }}>
            <img
              src={resumeimg}
              alt="img"
              className="sideimage"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                width: "150rem",
                height: "auto"
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
