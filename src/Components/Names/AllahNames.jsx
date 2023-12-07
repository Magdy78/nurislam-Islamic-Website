// AllahNamesSection.jsx

import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
</style>;

const AllahNamesSection = () => {
  const [namesOfAllah, setNamesOfAllah] = useState([]);
  const [showAdditionalNames, setShowAdditionalNames] = useState(false);

  useEffect(() => {
    const fetchNamesOfAllah = async () => {
      const url = "http://api.aladhan.com/v1/asmaAlHusna";
      const numbersParam = ""; // Modify this based on your requirements
      const fullUrl = numbersParam ? `${url}/${numbersParam}` : url;

      try {
        const response = await fetch(fullUrl);
        const data = await response.json();
        setNamesOfAllah(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNamesOfAllah();
  }, []);

  const handleShowMoreClick = () => {
    setShowAdditionalNames(true);
  };

  return (
    <Container sx={{ marginTop: "20px" }}>
      <Typography variant="h2" align="center" sx={{ marginBottom: "20px" }}>
        <h3 style={{ fontFamily: "'Rubik', sans-serif", textAlign: "center" }}>
          Names of Allah
        </h3>
      </Typography>
      <h2 style={{ fontFamily: "'Amiri', serif", textAlign: "center" }}>
        للبخاري عن أبي هريرة -رضي الله عنه- عن رسول الله -صلّى الله عليه
        <br />
        وسلّم- أنّه قال: (إنَّ لِلَّهِ تِسْعَةً وتِسْعِينَ اسْمًا، مِائَةً إلَّا
        واحِدًا، مَن أحْصاها دَخَلَ الجَنَّةَ)
      </h2>
      <h2 style={{ fontFamily: "'Amiri', serif", textAlign: "center" }}>
        By Al-Bukhari on the authority of Abu Hurairah on the authority of the Messenger of God - may God bless him
        <br />
        And peace be upon him - he said: (Indeed, God has ninety-nine names, one
        hundred except One, whoever counts them will enter Paradise)
      </h2>
      <Grid
        container
        spacing={3}
        style={{ direction: "rtl", textAlign: "right" }}
      >
        {namesOfAllah.slice(0, showAdditionalNames ? namesOfAllah.length : 6).map(({ number, name, transliteration, en_meaning }) => (
          <Grid item key={number} xs={12} sm={2} md={2}>
            <Card>
              <CardContent>
                <Typography variant="h6" align="center">
                  {name}
                </Typography>
                <Typography variant="subtitle1" align="center">
                  {en_meaning}
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  align="center"
                >
                  {transliteration}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {!showAdditionalNames && (
        <Button variant="outlined" onClick={handleShowMoreClick} sx={{ mt: 2 }} >
          Show More Names
        </Button>
      )}
    </Container>
  );
};

export default AllahNamesSection;
