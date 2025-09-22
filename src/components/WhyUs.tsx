import { Box, Container, Grid, Typography } from "@mui/material"
import { motion } from "framer-motion"
import {
  Briefcase,
  FileText,
  Layers,
  Shield,
  UserCheck,
  Wallet,
} from "lucide-react"

const advantages = [
  {
    title: "Опыт и профессионализм",
    description:
      "Наши юристы обладают многолетним опытом работы в различных областях права, что позволяет нам предоставлять услуги на высшем уровне.",
    icon: <Briefcase width="60%" height="70%" />,
  },
  {
    title: "Индивидуальный подход",
    description:
      "Мы понимаем, что каждый клиент уникален, поэтому предлагаем персонализированные решения, соответствующие вашим потребностям.",
    icon: <UserCheck width="60%" height="70%" />,
  },
  {
    title: "Обеспечиваем конфиденциальность",
    description:
      "Мы гарантируем полную конфиденциальность и защиту ваших данных на всех этапах сотрудничества.",
    icon: <Shield width="60%" height="70%" />,
  },
  {
    title: "Широкий спектр услуг:",
    description: "Мы предлагаем комплексное юридическое сопровождение.",
    icon: <Layers width="60%" height="70%" />,
  },
  {
    title: "Прозрачная отчетность",
    description: "Полная прозрачность всех процессов и операций.",
    icon: <FileText width="60%" height="70%" />,
  },
  {
    title: "Доступные цены",
    description: "Конкурентные цены на все виды юридических услуг.",
    icon: <Wallet width="60%" height="70%" />,
  },
]

export const WhyUs = () => {
  return (
    <Box sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: { xs: 4, sm: 5, md: 6 },
              fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
              lineHeight: { xs: 1.2, md: 1.3 },
              px: { xs: 2, sm: 0 },
            }}
          >
            Почему мы?
          </Typography>
        </motion.div>

        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr 1fr" }}
        >
          {advantages.map((advantage, index) => (
            <Grid key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + index * 0.12,
                  ease: "easeOut",
                }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    p: { xs: 2, sm: 2.5, md: 3 },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 60, sm: 70, md: 80 },
                      height: { xs: 60, sm: 70, md: 80 },
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `linear-gradient(to right, #CA8300 0%, #EDCB67 100%)`,
                      mb: { xs: 2, sm: 2.5, md: 3 },
                      flexShrink: 0,
                    }}
                  >
                    {advantage.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: { xs: 1.5, sm: 2 },
                      fontSize: { xs: "16px", sm: "18px", md: "20px" },
                      lineHeight: { xs: 1.2, md: 1.3 },
                      fontWeight: 600,
                    }}
                  >
                    {advantage.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "14px", sm: "15px", md: "16px" },
                      lineHeight: { xs: 1.4, md: 1.5 },
                      color: "text.secondary",
                      flexGrow: 1,
                    }}
                  >
                    {advantage.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
