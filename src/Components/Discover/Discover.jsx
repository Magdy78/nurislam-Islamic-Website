import React from "react";
import { Box, Typography, Container } from "@mui/material";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>;

const Discover = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f9fa", padding: "80px 0" }}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          sx={{ marginBottom: "40px" }}
          fontFamily="serif"
          fontWeight={"100px"}
        >
          The Five Pillars of Islam <br />
          أركان الاسلام الخمسة 
        </Typography>

        <h3 style={{ fontFamily: "'Amiri', serif", textAlign: "center" }}>
          عن أبي عبد الرحمن عبد الله بن عمر بن الخطاب رضي الله عنهما قال : سمعت
          رسول الله صلى الله عليه وسلم يقول : ( بني الإسلام على خمس : شهادة أن
          <br />
          لا إله إلا الله ، وأن محمدا رسول الله ، وإقام الصلاة ، وإيتاء الزكاة ،
          وحج البيت ، وصوم رمضان ) رواه البخاري ومسلم .
        </h3>
        <h3 style={{ fontFamily: "'Amiri', serif", textAlign: "center" }}>
          On the authority of Ibn Omar, the son of Omar bin Al-Khattab, may
          Allah be pleased with both, who said : I heared the messenger of Allah
          say : "Islam has been built on five [pillars]: testifying that there
          is no god but Allah and that Muhammed is the messenger of Allah,
          performing the prayers, paying the zakat, making the pilgrimage to the
          House, and fasting in Ramadan." p related by Bukhari and Muslim
        </h3>
      </Container>

      <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/3pTs8mpgQqk"
          title="Pillars Of Islam"
          frameBorder="0"
          allowFullScreen
        ></iframe>

    </Box>

  );
};

// const Pillar = ({ title, description }) => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: "#fff",
//         padding: "20px",
//         borderRadius: "8px",
//         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//         textAlign: "center",
//         width: "200px",
//       }}
//     >
//       <Typography variant="h5" sx={{ marginBottom: "10px" }}>
//         {title}
//       </Typography>
//       <Typography>{description}</Typography>
//     </Box>
//   );
// };

export default Discover;
