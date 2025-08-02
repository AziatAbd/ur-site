import { Box, Grid, Typography } from "@mui/material"
import { Instagram, MessageCircle, Phone, Send } from "lucide-react"
import { AppButton } from "./UI/AppButton"

export const Contact = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          mb: 2,
        }}
      >
        Остались вопросы?
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          mb: 6,
        }}
      >
        Напишите нам! Всегда рады вам помочь.
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid>
          <AppButton
            variant="contained"
            color="primary"
            startIcon={<Instagram size={20} />}
          >
            Instagram
          </AppButton>
        </Grid>
        <Grid>
          <AppButton
            variant="contained"
            color="primary"
            startIcon={<MessageCircle size={20} />}
          >
            WhatsApp
          </AppButton>
        </Grid>
        <Grid>
          <AppButton
            variant="contained"
            color="primary"
            startIcon={<Send size={20} />}
          >
            Telegram
          </AppButton>
        </Grid>
        <Grid>
          <AppButton
            variant="contained"
            color="primary"
            startIcon={<Phone size={20} />}
          >
            Позвонить нам
          </AppButton>
        </Grid>
      </Grid>
    </Box>
  )
}
