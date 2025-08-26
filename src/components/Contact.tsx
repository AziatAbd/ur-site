import { Box, Grid, Typography } from "@mui/material"
import { Instagram, MessageCircle, Phone, Send } from "lucide-react"
import { AppButton } from "./UI/AppButton"

export const Contact = () => {
  const contactMethods = [
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
    },
    {
      icon: <MessageCircle size={20} />,
      label: "WhatsApp",
    },
    {
      icon: <Send size={20} />,
      label: "Telegram",
    },
    {
      icon: <Phone size={20} />,
      label: "Позвонить нам",
    },
  ]

  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          mb: { xs: 1.5, sm: 2 },
          fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
          lineHeight: { xs: 1.2, md: 1.3 },
        }}
      >
        Остались вопросы?
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          mb: { xs: 4, sm: 5, md: 6 },
          fontSize: { xs: "14px", sm: "15px", md: "16px" },
          lineHeight: { xs: 1.4, md: 1.6 },
          maxWidth: "600px",
          mx: "auto",
        }}
      >
        Напишите нам! Всегда рады вам помочь.
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, sm: 2.5, md: 3 }}
        justifyContent="center"
        sx={{
          maxWidth: { xs: "100%", sm: "600px", md: "800px" },
          mx: "auto",
        }}
      >
        {contactMethods.map((method, index) => (
          <Grid
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <AppButton
              variant="contained"
              color="primary"
              startIcon={method.icon}
              fullWidth
              sx={{
                py: { xs: 1.5, sm: 2, md: 2.5 },
                px: { xs: 2, sm: 2.5, md: 3 },
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                fontWeight: 500,
                borderRadius: 2,
                minHeight: { xs: "48px", sm: "52px", md: "56px" },
                maxWidth: { xs: "300px", sm: "none" },
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(202, 131, 0, 0.4)",
                },
              }}
            >
              {method.label}
            </AppButton>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
