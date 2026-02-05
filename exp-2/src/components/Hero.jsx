import { Box, Container, Typography, Button } from "@mui/material";
import BgHero from "../assets/bg-hero.png";

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${BgHero})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "rgba(255,255,255,0.85)",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container>
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ maxWidth: 700 }}
          >
            Powering the Next Generation of Startups
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600 }}
          >
            Build fast, secure, and scalable web applications with TechNova.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{ mt: 4, borderRadius: 2 }}
          >
            Get Started
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
