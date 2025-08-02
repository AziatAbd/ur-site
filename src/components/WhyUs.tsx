import { Box, Container, Grid, Typography } from "@mui/material";
import cardSend from "../assets/icons/card-send.svg";

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
];

export const WhyUs = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 6,
          }}
        >
          Почему мы?
        </Typography>
        <Grid container spacing={4}>
          {advantages.map((advantage, index) => (
            <Box key={index} sx={{ p: 3 }} width={430}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `linear-gradient(to right, #CA8300 0%, #EDCB67 100%)`,
                  mb: 3,
                }}
              >
                <img src={cardSend} width="60px" />
              </Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {advantage.title}
              </Typography>
              <Typography variant="body2">{advantage.description}</Typography>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
