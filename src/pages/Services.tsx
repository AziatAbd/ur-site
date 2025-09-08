import { Box, Stack, styled, Typography } from "@mui/material"
import { Prices } from "../components/Prices"
import serviceImage from "../assets/images/services/service-image.png"
import { AppButton } from "../components/UI/AppButton"
import { NavLink } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ContactForm } from "../components/UI/ContactForm"

const itServices = [
  {
    id: 1,
    title: "Веб-разработка",
    description: "Создание современных сайтов и веб-приложений",
    services: [
      "Корпоративные сайты и лендинги",
      "Интернет-магазины и e-commerce",
      "Веб-приложения и SPA",
    ],
    link: "/services/web-development",
  },
  {
    id: 2,
    title: "Мобильная разработка",
    description: "Приложения для iOS и Android",
    services: [
      "Нативные iOS приложения",
      "Android приложения",
      "Кроссплатформенные решения",
    ],
    link: "/services/mobile-development",
  },
  {
    id: 3,
    title: "Графический дизайн",
    description: "Визуальное оформление и брендинг",
    services: [
      "Логотип и фирменный стиль",
      "UI/UX дизайн интерфейсов",
      "Печатная и рекламная продукция",
    ],
    link: "/services/graphic-design",
  },
  {
    id: 4,
    title: "IT-консалтинг",
    description: "Экспертные консультации и аудит",
    services: [
      "Техническое консультирование",
      "Аудит IT-инфраструктуры",
      "Цифровая трансформация бизнеса",
    ],
    link: "/services/it-consulting",
  },
  {
    id: 5,
    title: "Автоматизация бизнеса",
    description: "CRM, ERP и интеграционные решения",
    services: [
      "Внедрение CRM систем",
      "ERP системы учета",
      "API интеграции и автоматизация",
    ],
    link: "/services/business-automation",
  },
  {
    id: 6,
    title: "Digital-маркетинг",
    description: "Продвижение в цифровой среде",
    services: [
      "SEO оптимизация сайтов",
      "Контекстная реклама",
      "Настройка аналитики",
    ],
    link: "/services/digital-marketing",
  },
]

const StyledServices = styled(Box)(({ theme }) => ({
  background: "#282828",
  margin: "0 80px 60px",
  padding: "44px 32px",
  borderRadius: "4px",
  display: "flex",
  gap: "33px",
  marginTop: "80px",

  [theme.breakpoints.down("sm")]: {
    padding: "24px",
    gap: 15,
    margin: "20px",
    flexDirection: "column",
  },
}))

const ServiceImage = styled("img")({
  width: "100%",
  maxWidth: "700px",
  height: "100%",
})

const ListContainer = styled(Box)(({ theme }) => ({
  background: "#282828",
  borderRadius: "4px",
  padding: "16px 19px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%", // Добавлено для одинаковой высоты
  minHeight: "280px", // Увеличена минимальная высота

  [theme.breakpoints.down("sm")]: {
    minHeight: "250px", // Минимальная высота для мобильных устройств
  },
}))

const ListTitle = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "12px",
  color: "#fff",
})

const ServiceDescription = styled(Typography)({
  color: "#ccc",
  fontSize: "14px",
  marginBottom: "16px",
})

const ServicesList = styled("ul")({
  color: "#fff",
  paddingLeft: "16px",
  margin: "0 0 20px 0",
  flex: 1, // Добавлено для растяжения списка

  "& li": {
    marginBottom: "8px",
    fontSize: "16px",
    lineHeight: "1.4",
  },
})

const LinkStyle = styled(NavLink)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: "#CA8300",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "500",
  marginTop: "auto",

  "&:hover": {
    color: "#E6940D",
  },
})

const Services = () => {
  // Берем первые 6 услуг для отображения
  const displayServices = itServices.slice(0, 6)

  return (
    <Stack>
      <Prices />
      <StyledServices>
        <ServiceImage src={serviceImage} alt="IT services" />
        <Box>
          <Typography variant="h2" mb={2}>
            Бухгалтерские услуги
          </Typography>
          <Typography variant="h3" mb={4}>
            Стоимость от 3000 (три тысячи) сомов в месяц.
          </Typography>
          <ul>
            <li>Ведение полного бухгалтерского учета</li>
            <li>Составление и сдача ежемесячной и ежеквартальной отчетности</li>
            <li>Подготовка и сдача налоговых деклараций</li>
            <li>Ведение учета заработной платы и кадровых документов</li>
            <li>Консультации по налоговым вопросам</li>
            <li>Консультации по налоговым вопросам</li>
            <li>Помощь в подготовке к налоговым проверкам</li>
          </ul>

          <AppButton variant="contained" fullWidth>
            Получить консультацию
          </AppButton>
        </Box>
      </StyledServices>

      <Stack
        direction={{ xs: "column", md: "row" }}
        px={{ xs: "20px", md: "140px" }}
        gap={{ xs: "20px", md: "32px" }}
        mb={{ xs: "30px", md: "90px" }}
        flexWrap="wrap"
        alignItems="stretch" // Добавлено для растягивания дочерних элементов
      >
        {displayServices.map((service) => (
          <Box
            key={service.id}
            flex={{
              xs: "1 1 100%",
              md: "1 1 calc(50% - 16px)",
              lg: "1 1 calc(33.333% - 22px)",
            }}
            display="flex" // Добавлено для flex-контейнера
          >
            <ListContainer>
              <div>
                <ListTitle variant="h6">{service.title}</ListTitle>
                <ServiceDescription>{service.description}</ServiceDescription>

                <ServicesList>
                  {service.services.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ServicesList>
              </div>

              <LinkStyle to={service.link}>
                Подробнее <ArrowRight size={18} />
              </LinkStyle>
            </ListContainer>
          </Box>
        ))}
      </Stack>

      <ContactForm />
    </Stack>
  )
}

export default Services
