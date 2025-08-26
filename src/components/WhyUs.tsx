import { Box, Container, Grid, Typography } from "@mui/material"
import cardSend from "../assets/icons/card-send.svg"
import { motion } from "framer-motion"

const advantages = [
  {
    title: 'Оказание услуг "под ключ"',
    description:
      "Мы предоставляем полный комплекс юридических услуг, избавляя вас от лишних забот.",
  },
  {
    title: "Индивидуальный подход",
    description:
      "Каждый клиент получает персональное решение своих правовых вопросов.",
  },
  {
    title: "Опытная команда",
    description: "Наши специалисты - одни из лучших юристов Кыргызстана.",
  },
  {
    title: "Быстрые сроки",
    description: "Оперативное решение любых юридических вопросов.",
  },
  {
    title: "Прозрачная отчетность",
    description: "Полная прозрачность всех процессов и операций.",
  },
  {
    title: "Доступные цены",
    description: "Конкурентные цены на все виды юридических услуг.",
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
                    <img
                      src={cardSend}
                      width={`${60 * (60 / 80)}px`}
                      style={{
                        width: "60%",
                        maxWidth: "60px",
                      }}
                      alt="Service icon"
                    />
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
