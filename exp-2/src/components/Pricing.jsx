import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

export default function Pricing() {
  const plans = ["Basic", "Pro", "Enterprise"];

  return (
    <Box id="pricing" sx={{ py: 8, backgroundColor: "#fafafa" }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Pricing Plans
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                elevation={index === 1 ? 8 : 3}
                sx={{
                  borderRadius: 3,
                  transform: index === 1 ? "scale(1.05)" : "none",
                }}
              >
                <CardContent align="center">
                  <Typography variant="h6" fontWeight={600}>
                    {plan}
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="primary"
                    sx={{ my: 2 }}
                  >
                    ₹{(index + 1) * 999}
                  </Typography>

                  <Button variant="contained">Choose Plan</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
