import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "linear-gradient(90deg, #1976d2, #1565c0)",
        px: 2,
      }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <img
            src={Logo}
            alt="Startup Logo"
            style={{ height: 40, marginRight: 10 }}
          />
          <Typography variant="h6" fontWeight="bold">
            TechNova
          </Typography>
        </Box>

        <Button color="inherit" onClick={() => scrollToSection("home")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("features")}>
          Features
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("pricing")}>
          Pricing
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("contact")}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}
