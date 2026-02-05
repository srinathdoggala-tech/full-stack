import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 4,
        background: "linear-gradient(90deg, #1565c0, #0d47a1)",
        color: "white",
      }}
    >
      <Container>
        <Typography align="center">
          © 2026 TechNova. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
