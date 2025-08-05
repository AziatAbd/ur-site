import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material"
import aboutImg from "../assets/images/about/about-img.png"
import aboutStatue from "../assets/images/about/about-statue.png"

const services = [
  {
    title:
      "Регистрация оптимальной для клиента формы бизнеса (ИП, ОсОО, ОАО, ЗАО), предусмотрены сроки регистрации бизнеса в КР от 6 часов до 10 раб.дней;",
  },
  {
    title: "Услуги в сфере IT",
  },
  {
    title: "Все виды бухгалтерских услуг",
  },
]

const StatsCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(to right, #CA8300 0%, #EDCB67 100%)`,
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.primary.main}`,
  transition: "all 0.3s ease",
  height: "100%",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `0 20px 40px rgba(212, 168, 83, 0.3)`,
  },
}))

const ServiceCard = styled(Card)(({ theme }) => ({
  background: "#282828",
  color: theme.palette.text.primary,
  transition: "all 0.3s ease",
  width: "100%",
  padding: "16px",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: `0 12px 24px rgba(0, 0, 0, 0.3)`,
  },
}))

const AboutImage = styled("img")({
  width: "310px",
  position: "relative",
})

const AboutImageStatue = styled("img")({
  width: "310px",
  position: "relative",
  bottom: -26,
  left: -120,
})

export const About = () => {
  return (
    <Box sx={{ py: 8, px: "80px" }}>
      <Stack
        alignItems="center"
        direction="row"
        gap="47px"
        width="100%"
        mb="70px"
      >
        <Box width="80%">
          <Typography variant="h2" sx={{ mb: 4 }}>
            Юридическая компания "Akmatova & Associates"
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Мы являемся ведущей юридической фирмой в Бишкеке, предоставляющей
            широкий спектр юридических услуг для бизнеса и частных лиц. Наша
            команда опытных юристов и бухгалтеров готова помочь вам в решении
            любых правовых вопросов.
          </Typography>
        </Box>
        <StatsCard>
          <CardContent
            sx={{
              p: 4,
              textAlign: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <AboutImage src={aboutImg} alt="" />
            <Typography sx={{ mb: 2, fontSize: "32px" }}>
              Наши специалисты являются одними из лучших юристов Кыргызстана
            </Typography>
          </CardContent>
        </StatsCard>
      </Stack>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Мы специализируемся в следующих областях корпоративного права:
      </Typography>

      <Stack direction="row" alignItems="center" gap="27px">
        <StatsCard>
          <CardContent
            sx={{
              justifyContent: "flex-start",
              display: "flex",
              p: 2,
              width: "720px",
              mt: "40px",
            }}
          >
            <Typography
              sx={{
                mb: 2,
                fontSize: "32px",
                lineHeight: "normal",
                width: "340px",
              }}
            >
              В нашей команде работают лучшие юристы страны
            </Typography>
            <AboutImageStatue src={aboutStatue} alt="" />
          </CardContent>
        </StatsCard>

        <Grid container spacing={4} sx={{ width: "70%" }}>
          {services.map((service) => (
            <ServiceCard key={service.title}>
              <Typography variant="h6">{service.title}</Typography>
            </ServiceCard>
          ))}
        </Grid>
      </Stack>
    </Box>
  )
}
