import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Container,
} from "@mui/material";
import Quran from "../Images/Quran.png";
import Azkar from "../Images/Azkar.png";
import Hadith from "../Images/Hadith.png";
import { NavLink, useHistory, useNavigate } from "react-router-dom";

const GridPage = () => {
  const navigate = useNavigate(); // Use useNavigate() instead of useHistory()

  const handleQuranButtonClick = () => {
    navigate("/quran");
  };

  return (
    <Container>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="stretch"
        sx={{ marginTop: "20px" }}
      >
        {/* Quran Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <img
              src={Quran}
              alt="Quran"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
                Quran
              </Typography>
              <Typography variant="body2">
                Explore the holy Quran and its verses.
              </Typography>
            </CardContent>
            <Button color="primary" fullWidth onClick={handleQuranButtonClick}>
              Go to Quran
            </Button>
          </Card>
        </Grid>

        {/* Hadith Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <img
              src={Hadith}
              alt="Hadith"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
                Hadith
              </Typography>
              <Typography variant="body2">
                Discover the teachings of Prophet Muhammad (PBUH).
              </Typography>
            </CardContent>
            <Button color="primary" fullWidth>
              Go to Hadith
            </Button>
          </Card>
        </Grid>

        {/* Azkar Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <img
              src={Azkar}
              alt="Azkar"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
                Azkar
              </Typography>
              <Typography variant="body2">
                Find comfort in supplications and expressions of gratitude.
              </Typography>
            </CardContent>
            <Button color="primary" fullWidth>
              Go to Azkar
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GridPage;
