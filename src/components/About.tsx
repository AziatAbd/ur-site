import {
  Box,
  Card,
  CardContent,
  Stack,
  styled,
  Typography,
} from "@mui/material"
import aboutImg from "../assets/images/about/about-img.png"
import aboutStatue from "../assets/images/about/about-statue.png"
import { motion } from "framer-motion"

const services = [
  {
    title:
      "Регистрация оптимальной для клиента формы бизнеса (ИП, ОсОО, ОАО, ЗАО), предусмотрены сроки регистрации бизнеса в КР от 6 часов до 10 раб.дней;",
  },
  {
    title: "Получение резидентства Парка Высоких Технологий;",
  },
  {
    title:
      "Все виды услуг в сфере оборота криптовалюты (регистрация компании, получение лицензии оператора обмена криптовалюты, критообменка, криптобиржи).",
  },
  {
    title:
      "Правовое сопровождение бизнеса на всех этапах с момента регистрации.",
  },
]

const StatsCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(to right, #CA8300 0%, #EDCB67 100%)`,
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.primary.main}`,
  transition: "all 0.3s ease",
  height: "100%",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: `0 12px 24px rgba(212, 168, 83, 0.3)`,
  },
  [theme.breakpoints.up("md")]: {
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: `0 20px 40px rgba(212, 168, 83, 0.3)`,
    },
  },
}))

const ServiceCard = styled(Card)(({ theme }) => ({
  background: "#282828",
  color: theme.palette.text.primary,
  transition: "all 0.3s ease",
  width: "100%",
  padding: "12px",
  display: "flex",
  alignItems: "center",
  marginBottom: "16px",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: `0 8px 16px rgba(0, 0, 0, 0.3)`,
  },
  [theme.breakpoints.up("sm")]: {
    padding: "14px",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: `0 10px 20px rgba(0, 0, 0, 0.3)`,
    },
  },
  [theme.breakpoints.up("md")]: {
    padding: "16px",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: `0 12px 24px rgba(0, 0, 0, 0.3)`,
    },
  },
}))

const AboutImage = styled("img")(({ theme }) => ({
  width: "200px",
  maxWidth: "100%",
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    width: "250px",
  },
  [theme.breakpoints.up("md")]: {
    width: "310px",
  },
}))

const AboutImageStatue = styled("img")(({ theme }) => ({
  width: "200px",
  maxWidth: "100%",
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    width: "250px",
  },
  [theme.breakpoints.up("md")]: {
    width: "310px",
  },
}))

export const About = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 5, lg: "80px" },
      }}
    >
      {/* Первый блок */}
      <Stack
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: 3, sm: 4, md: "47px" }}
        width="100%"
        mb={{ xs: 4, sm: 5, md: "70px" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ width: "70%" }}
        >
          <Box width={{ xs: "100%", md: "80%" }}>
            <Typography
              variant="h2"
              sx={{
                mb: { xs: 2, sm: 3, md: 4 },
                fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
                textAlign: { xs: "center", md: "left" },
                lineHeight: { xs: 1.2, md: 1.3 },
              }}
            >
              Юридическая компания "Akmatova & Associates"
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, sm: 3, md: 4 },
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                lineHeight: { xs: 1.4, md: 1.6 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Опытная команда лицензированных адвокатов и юристов оказывает
              профессиональное сопровождение и консультации по правовым вопросам
              бизнеса, обеспечивая при этом полную конфиденциальность информации
              клиента.
            </Typography>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <StatsCard>
            <CardContent
              sx={{
                p: { xs: 2, sm: 3, md: 4 },
                textAlign: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <AboutImage src={aboutImg} alt="" />
              <Typography
                sx={{
                  mb: 2,
                  fontSize: { xs: "18px", sm: "24px", md: "28px", lg: "32px" },
                  lineHeight: { xs: 1.2, md: 1.3 },
                  mt: { xs: 2, sm: 0 },
                }}
              >
                Наши специалисты являются одними из лучших юристов Кыргызстана
              </Typography>
            </CardContent>
          </StatsCard>
        </motion.div>
      </Stack>

      {/* Заголовок второго блока */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: { xs: 2, sm: 2.5, md: 3 },
            fontSize: { xs: "20px", sm: "24px", md: "28px" },
            textAlign: { xs: "center", md: "left" },
            lineHeight: { xs: 1.2, md: 1.3 },
          }}
        >
          Мы специализируемся в следующих областях корпоративного права:
        </Typography>
      </motion.div>

      {/* Второй блок */}
      <Stack
        direction={{ xs: "column", lg: "row" }}
        alignItems={{ xs: "center", lg: "flex-start" }}
        gap={{ xs: 3, sm: 4, lg: "27px" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <StatsCard sx={{ order: { xs: 2, lg: 1 } }}>
            <CardContent
              sx={{
                justifyContent: { xs: "center", md: "flex-start" },
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                p: { xs: 2, sm: 2.5, md: 3 },
                width: { xs: "100%", lg: "720px" },
                mt: { xs: 2, md: "40px" },
              }}
            >
              <Typography
                sx={{
                  mb: 2,
                  fontSize: { xs: "18px", sm: "24px", md: "28px", lg: "32px" },
                  lineHeight: "normal",
                  width: { xs: "100%", md: "340px" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                В нашей команде работают лучшие юристы страны
              </Typography>

              <AboutImageStatue
                src={aboutStatue}
                alt=""
                sx={{
                  bottom: { xs: -26, sm: -20, md: -26 },
                  left: 0,
                  position: "relative",
                }}
              />
            </CardContent>
          </StatsCard>
        </motion.div>

        <Box
          sx={{
            width: { xs: "100%", lg: "70%" },
            order: { xs: 1, lg: 2 },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.15,
                ease: "easeOut",
              }}
            >
              <ServiceCard>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "14px", sm: "15px", md: "16px" },
                    lineHeight: { xs: 1.3, md: 1.4 },
                  }}
                >
                  {service.title}
                </Typography>
              </ServiceCard>
            </motion.div>
          ))}
        </Box>
      </Stack>
    </Box>
  )
}
