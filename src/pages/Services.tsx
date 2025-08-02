import { Box, Stack, styled, Typography } from "@mui/material"
import { Prices } from "../components/Prices"
import serviceImage from "../assets/images/services/service-image.png"
import { AppButton } from "../components/UI/AppButton"
import { NavLink } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ContactForm } from "../components/UI/ContactForm"

const StyledServices = styled(Box)({
  background: "#282828",
  margin: "0 80px 60px",
  padding: "44px 32px",
  borderRadius: "4px",
  display: "flex",
  gap: "33px",
  marginTop: "80px",
})

const ServiceImage = styled("img")({
  width: "700px",
})

const ListContainer = styled(Box)({
  background: "#282828",
  borderRadius: "4px",
  padding: "16px 19px",
})

const ListTitle = styled(Typography)({
  fontWeight: "bold",
})

const LinkStyle = styled(NavLink)({
  display: "flex",
  alignItems: "center",

  color: `#CA8300`,
  textDecoration: "none",
  fontSize: "20px",
})

const Services = () => {
  return (
    <Stack>
      <Prices />
      <StyledServices>
        <ServiceImage src={serviceImage} alt="service image" />
        <Box>
          <Typography variant="h2" mb={2}>
            Бухгалтерские услуги
          </Typography>
          <Typography variant="h3" mb={4}>
            Стоимость от 3000 (три тысячи) сомов в месяц.
          </Typography>
          <Typography variant="body2" mb={5}>
            Мы предлагаем несколько пакетов услуг, чтобы удовлетворить
            потребности вашего бизнеса. Вы можете выбрать подходящий пакет или
            связаться с нами для разработки индивидуального предложения.Мы
            предлагаем несколько пакетов услуг
          </Typography>

          <AppButton variant="contained" fullWidth>
            Получить консультацию
          </AppButton>
        </Box>
      </StyledServices>

      <Stack direction="row" px="150px" gap="64px" mb="90px">
        {[1, 2, 3, 4].map(() => (
          <ListContainer>
            <ListTitle>Аутсорсинг бухгалтерского учета</ListTitle>

            <ul>
              <li>Постановка и ведение бухгалтерского учета</li>
              <li>Функция главного бухгалтера</li>
              <li>Систематический контроль бухгалтерского учета</li>
            </ul>

            <LinkStyle to="/services">
              Подробнее <ArrowRight />
            </LinkStyle>
          </ListContainer>
        ))}
      </Stack>

      <ContactForm />
    </Stack>
  )
}

export default Services
