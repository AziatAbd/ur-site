import { Box, Card, CardContent, Grid, Typography } from "@mui/material"
import { AppButton } from "./UI/AppButton"
import { styled } from "@mui/system"
import priceStatueImg from "../assets/images/price/price-statue.png"

const PricingCard = styled(Card)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.text.primary,
  height: "100%",
  border: `2px solid transparent`,
  transition: "all 0.3s ease",
  "&:hover": {
    border: `2px solid ${theme.palette.primary.main}`,
    transform: "translateY(-4px)",
  },
}))

const PriceStatusImage = styled("img")({
  position: "absolute",
  right: 0,
  bottom: -17.5,
  width: "300px",
})

export const Prices = () => {
  return (
    <Box
      sx={{
        py: 8,
        pl: "80px",
        pr: "250px",
        position: "relative",
        background: `linear-gradient(to right, #CA8300 0%, #EDCB67 100%)`,
      }}
    >
      <Typography variant="h2" sx={{ mb: 2, color: "#fff" }}>
        Пакеты услуг и цены
      </Typography>
      <Typography
        variant="body1"
        sx={{ mb: 6, color: "#fff", opacity: 0.9, maxWidth: "800px" }}
      >
        Мы предлагаем несколько пакетов услуг, чтобы удовлетворить потребности
        вашего бизнеса. Вы можете выбрать подходящий пакет или связаться с нами
        для разработки индивидуального предложения.
      </Typography>

      <Box display="flex" gap="38px">
        {[1, 2, 3, 4].map(() => (
          <Grid>
            <PricingCard>
              <CardContent sx={{ py: 4, pr: 2, textAlign: "center" }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Пакет "Старт"
                </Typography>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  25000 сом в мес
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 4,
                  }}
                >
                  Мы предлагаем несколько пакетов услуг, чтобы удовлетворить
                  потребности вашего бизнеса. Вы можете выбрать подходящий пакет
                  или связаться с нами для разработки индивидуального
                  предложения.
                </Typography>
                <AppButton variant="contained" fullWidth color="primary">
                  ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                </AppButton>
              </CardContent>
            </PricingCard>
          </Grid>
        ))}
      </Box>
      <PriceStatusImage src={priceStatueImg} alt="" />
    </Box>
  )
}
