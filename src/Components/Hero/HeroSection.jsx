import React, { useState, useEffect } from "react";
import { Box,Button, Typography } from "@mui/material";
import { DateTime } from "luxon";

const HeroSection = () => {
  const [randomAyah, setRandomAyah] = useState(null);
  const [hijriDate, setHijriDate] = useState(null);
  const [gregorianDate, setGregorianDate] = useState(null);
  const [prayerTimes, setPrayerTimes] = useState(null);

  useEffect(() => {
    const generateRandomInteger = () => {
      return Math.floor(Math.random() * 6236) + 1;
    };

    const fetchRandomAyah = async () => {
      try {
        const reference = generateRandomInteger();
        const response = await fetch(
          `http://api.alquran.cloud/v1/ayah/${reference}`
        );
        const data = await response.json();

        console.log("API Response:", data);

        const ayahText = data.data.text;

        setRandomAyah(ayahText);
      } catch (error) {
        console.error("Error fetching random Ayah:", error);
      }
    };

    const fetchHijriDate = async () => {
      const today = new Date();
      const formattedDate = `${today.getDate()}-${
        today.getMonth() + 1
      }-${today.getFullYear()}`;
      const adjustment = 0;

      try {
        const response = await fetch(
          `http://api.aladhan.com/v1/gToH/${formattedDate}?adjustment=${adjustment}`
        );
        const data = await response.json();

        console.log("Hijri Date Response:", data);

        // Check if the Hijri date values are valid
        if (data.data && data.data.hijri) {
          const hijriDate = data.data.hijri;
          setHijriDate(hijriDate);
        } else {
          console.warn("Invalid Hijri date:", data);
          setHijriDate(null);
        }
      } catch (error) {
        console.error("Error fetching Hijri date:", error);
      }
    };

    const fetchPrayerTimes = async () => {
      const today = DateTime.local().toFormat("yyyy-MM-dd");
      const city = "Alexandria";
      const country = "Egypt";

      try {
        const response = await fetch(
          `http://api.aladhan.com/v1/timings/${today}?latitude=31.200092&longitude=29.918739&method=2`
        );
        const data = await response.json();

        console.log("Prayer Times Response:", data);

        // Check if the prayer times data is valid
        if (data.data && data.data.timings) {
          const prayerTimes = data.data.timings;
          setPrayerTimes(prayerTimes);
        } else {
          console.warn("Invalid prayer times data:", data);
          setPrayerTimes(null);
        }
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      }
    };

    const updateGregorianDate = () => {
      const today = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
      setGregorianDate(today);
    };

    fetchRandomAyah();
    fetchHijriDate();
    fetchPrayerTimes();
    updateGregorianDate();
  }, []);

  const formattedHijriDate = hijriDate
    ? hijriDate.date
    : "Loading Hijri Date...";

  return (
    <Box
      sx={{
        height: "70vh",
        backgroundColor: "#3498db",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="caption"
        gutterBottom
        style={{ position: "absolute", top: 70, left: 45, padding: "10px" }}
      >
        Gregorian Date: {gregorianDate}
      </Typography>
      <Typography
        variant="caption"
        gutterBottom
        style={{ position: "absolute", top: 50, left: 45, padding: "10px" }}
      >
        Hijri Date: {formattedHijriDate}
      </Typography>
      <h1>
        "Allahumma inni as'aluka al-'afiyah – O Allah, I ask You for
        well-being." 🕋
      </h1>
      <Typography variant="subtitle1" gutterBottom>
        {randomAyah ? `"${randomAyah}"` : "Loading Ayah..."}
      </Typography>

      

      {/* Times Of Prayers */}
      <Typography
        variant="caption"
        gutterBottom
        style={{ position: "absolute", top: 50, right: 45, padding: "10px" }}
      >
        Adhan Time for Fajr:{" "}
        {prayerTimes ? prayerTimes.Fajr + " AM" : "Loading..."}
      </Typography>
      <Typography
        variant="caption"
        gutterBottom
        style={{ position: "absolute", top: 65, right: 45, padding: "10px" }}
      >
        Adhan Time for Dhuhr:{" "}
        {prayerTimes ? prayerTimes.Dhuhr + " AM" : "Loading..."}
      </Typography>
      <Typography
        variant="caption"
        gutterBottom
        style={{ position: "absolute", top: 80, right: 45, padding: "10px" }}
      >
        Adhan Time for Asr:{" "}
        {prayerTimes ? prayerTimes.Asr + " PM" : "Loading..."}
      </Typography>
      <Typography
        variant="caption"
        gutterBottom
        style={{ position: "absolute", top: 95, right: 45, padding: "10px" }}
      >
        Adhan Time for Maghrib:{" "}
        {prayerTimes ? prayerTimes.Maghrib + " PM" : "Loading..."}
      </Typography>
      <Typography
        variant="caption"
        gutterBottom
        style={{ position: "absolute", top: 110, right: 45, padding: "10px" }}
      >
        Adhan Time for Isha:{" "}
        {prayerTimes ? prayerTimes.Isha + " PM" : "Loading..."}
      </Typography>

      <Button variant="contained" color="secondary" style={{ marginTop: "20px" }}>
       Check For the Holy Book of Allah 
      </Button>
    </Box>
  );
};

export default HeroSection;
