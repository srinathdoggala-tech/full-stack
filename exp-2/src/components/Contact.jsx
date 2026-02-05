import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  InputAdornment,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        background: "linear-gradient(135deg, #e3f2fd, #f5f7fa)",
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            p: 4,
            borderRadius: 4,
            boxShadow: 6,
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Contact Us
          </Typography>

          <Typography
            align="center"
            color="text.secondary"
            sx={{ mb: 3 }}
          >
            We’d love to hear from you. Fill out the form below 👇
          </Typography>

          {/* Name */}
          <TextField
            fullWidth
            placeholder="Your Name"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Email */}
          <TextField
            fullWidth
            placeholder="Your Email"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Message */}
          <TextField
            fullWidth
            placeholder="Your Message"
            margin="normal"
            multiline
            rows={4}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MessageIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Button */}
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              borderRadius: 3,
              textTransform: "none",
              fontSize: "1rem",
            }}
          >
            Send Message 🚀
          </Button>
        </Card>
      </Container>
    </Box>
  );
}
 