import { Container, Grid, Avatar, Typography } from "@mui/material";
import RitikImg from "../assets/ritik.jpg";

export default function Team() {
  const team = ["CEO", "CTO", "Designer"];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Team
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {team.map((role, index) => (
          <Grid item xs={12} md={3} align="center" key={index}>
            <Avatar
              src={RitikImg}
              alt="srinath"
              sx={{
                width: 120,
                height: 120,
                mb: 2,
                boxShadow: 4,
                "& img": {
                  objectFit: "cover",   // ✅ KEY FIX
                },
              }}
            />

            <Typography variant="h6" fontWeight={600}>
              Srinath
            </Typography>
            <Typography color="text.secondary">{role}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
