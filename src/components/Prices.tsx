import { Box, Card, CardContent, Grid, Typography, styled } from "@mui/material"
import { AppButton } from "./UI/AppButton"
import priceStatueImg from "../assets/images/price/price-statue.png"

const PricingCard = styled(Card)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.text.primary,
  height: "100%",
  border: `2px solid transparent`,
  transition: "all 0.3s ease",
  "&:hover": {
    border: `2px solid ${theme.palette.primary.main}`,
    transform: "translateY(-2px)",
  },
  [theme.breakpoints.up("sm")]: {
    "&:hover": {
      transform: "translateY(-3px)",
    },
  },
  [theme.breakpoints.up("md")]: {
    "&:hover": {
      transform: "translateY(-4px)",
    },
  },
}))

const PriceStatusImage = styled("img")(({ theme }) => ({
  position: "absolute",
  right: 0,
  bottom: -17.5,
  width: "200px",
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
    width: "250px",
  },
  [theme.breakpoints.up("md")]: {
    width: "300px",
  },
}))

const servicePackages = [
  {
    title: 'Пакет "Старт"',
    price: "15000 сом / мес",
    features: [
      "Разработка лендинга до 5 страниц",
      "Базовая SEO-оптимизация",
      "Подключение аналитики (Google, Яндекс)",
      "Техническая поддержка — 5 часов в месяц",
    ],
  },
  {
    title: 'Пакет "Бизнес"',
    price: "25000 сом / мес",
    features: [
      "Корпоративный сайт до 15 страниц",
      "Продвинутая SEO-оптимизация",
      "Интеграция с CRM",
      "Техническая поддержка — 15 часов в месяц",
    ],
  },
  {
    title: 'Пакет "Премиум"',
    price: "40000 сом / мес",
    features: [
      "Интернет-магазин до 500 товаров",
      "Настройка контекстной рекламы",
      "Поддержка и обновления — 30 часов",
      "Персональный менеджер проекта",
    ],
  },
  {
    title: 'Пакет "Корпорация"',
    price: "65000 сом / мес",
    features: [
      "Портал/ERP-система под ключ",
      "Разработка индивидуального дизайна",
      "Поддержка 24/7",
      "Разработка мобильного приложения (iOS/Android)",
      "Облачная инфраструктура и DevOps",
    ],
  },
]

export const Prices = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        pl: { xs: 2, sm: 3, md: 5, lg: "80px" },
        pr: { xs: 2, sm: 3, md: "100px", lg: "250px" },
        position: "relative",
        background: `linear-gradient(to right, #CA8300 0%, #EDCB67 100%)`,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: { xs: 1.5, sm: 2, md: 2 },
          color: "#fff",
          fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
          textAlign: { xs: "center", md: "left" },
          lineHeight: { xs: 1.2, md: 1.3 },
        }}
      >
        Пакеты услуг и цены
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: { xs: 4, sm: 5, md: 6 },
          color: "#fff",
          opacity: 0.9,
          maxWidth: { xs: "100%", md: "800px" },
          fontSize: { xs: "14px", sm: "15px", md: "16px" },
          lineHeight: { xs: 1.4, md: 1.6 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Мы предлагаем несколько пакетов услуг, чтобы удовлетворить потребности
        вашего бизнеса. Вы можете выбрать подходящий пакет или связаться с нами
        для разработки индивидуального предложения.
      </Typography>

      <Grid
        container
        sx={{
          justifyContent: { xs: "center", md: "flex-start" },
        }}
        spacing={{ xs: 2, sm: 3, md: 4 }}
      >
        {servicePackages.map((el, index) => (
          <Grid key={index}>
            <PricingCard>
              <CardContent
                sx={{
                  py: { xs: 3, sm: 3.5, md: 4 },
                  px: { xs: 2, sm: 2.5, md: 3 },
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: { xs: 1.5, sm: 2 },
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  }}
                >
                  {el.title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: { xs: 2, sm: 2.5, md: 3 },
                    fontSize: { xs: "18px", sm: "20px", md: "24px" },
                    fontWeight: 600,
                  }}
                >
                  {el.price}
                </Typography>
                <Box sx={{ flexGrow: 1, mb: { xs: 2, sm: 3, md: 4 } }}>
                  {el.features.map((feature, featureIndex) => (
                    <Typography
                      key={featureIndex}
                      variant="body2"
                      sx={{
                        mb: { xs: 1, sm: 1.5 },
                        fontSize: { xs: "12px", sm: "13px", md: "14px" },
                        lineHeight: { xs: 1.3, md: 1.4 },
                        textAlign: "left",
                      }}
                    >
                      • {feature}
                    </Typography>
                  ))}
                </Box>
                <AppButton
                  variant="contained"
                  fullWidth
                  color="primary"
                  sx={{
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    py: { xs: 1, sm: 1.2, md: 1.5 },
                    mt: "auto",
                  }}
                >
                  ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                </AppButton>
              </CardContent>
            </PricingCard>
          </Grid>
        ))}
      </Grid>
      <PriceStatusImage src={priceStatueImg} alt="" />
    </Box>
  )
}
