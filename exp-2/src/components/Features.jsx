import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import FeaturesImg from "../assets/hero.png";

export default function Features() {
  const features = [
    {
      title: "Fast Performance",
      desc: "Optimized for speed and scalability.",
    },
    {
      title: "Responsive Design",
      desc: "Works seamlessly on all devices.",
    },
    {
      title: "Secure Platform",
      desc: "Enterprise-grade security built-in.",
    },
  ];

  return (
    <Container id="features" sx={{ py: 10 }}>
      {/* Section Title */}
      <Typography variant="h4" align="center" gutterBottom>
        Features
      </Typography>

      {/* Feature Illustration */}
      <Box sx={{ textAlign: "center", my: 4 }}>
        <img
          src={FeaturesImg}
          alt="Startup Features Illustration"
          style={{
            width: "100%",
            maxWidth: "600px",
          }}
        />
      </Box>

      {/* Feature Cards */}
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {features.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
