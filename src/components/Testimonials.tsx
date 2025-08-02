import {
  Avatar,
  Box,
  Card,
  CardContent,
  styled,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const TestimonialCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(to right, #CA8300 0%, #EDCB67 100%)`,
  position: "relative",
  "&::before": {
    content: '"❝"',
    position: "absolute",
    top: "-10px",
    left: "20px",
    fontSize: "4rem",
    color: theme.palette.primary.dark,
    opacity: 0.3,
  },
}));

export const Testimonials = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          mb: 6,
        }}
      >
        Кейсы которые говорят за нас
      </Typography>

      <Swiper
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={30}
        loop
        watchOverflow
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <SwiperSlide key={item}>
            <TestimonialCard>
              <CardContent sx={{ px: 4, overflow: "visible" }}>
                <Avatar
                  title="Aziat"
                  sx={{
                    mx: "auto",
                    width: "60px",
                    height: "60px",
                    mb: 2,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.6 }}
                >
                  «EBITDA выросла на 47% за 9 месяцев. Наша команда смогла
                  сосредоточиться на росте, а не на хаосе. Это был прорыв.»
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  — CEO, FMCG-компания
                </Typography>
              </CardContent>
            </TestimonialCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
