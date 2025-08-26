import {
  Avatar,
  Box,
  Card,
  CardContent,
  styled,
  Typography,
} from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { motion } from "framer-motion"

import "swiper/css"

const TestimonialCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(to right, #CA8300 0%, #EDCB67 100%)`,
  position: "relative",
  height: "100%",
  "&::before": {
    content: '"❝"',
    position: "absolute",
    top: { xs: "-5px", sm: "-8px", md: "-10px" },
    left: { xs: "15px", sm: "18px", md: "20px" },
    fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
    color: theme.palette.primary.dark,
    opacity: 0.3,
  },
}))

const TestimonialContainer = styled(Box)(({ theme }) => ({
  padding: "0 16px",
  [theme.breakpoints.up("sm")]: {
    padding: "0 24px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "0 40px",
  },

  "& .swiper-slide": {
    height: "auto",
  },
}))

export const Testimonials = () => {
  return (
    <Box sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
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
            px: { xs: 2, sm: 3 },
          }}
        >
          Кейсы которые говорят за нас
        </Typography>
      </motion.div>

      <TestimonialContainer>
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={20}
          loop
          watchOverflow
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => (
            <SwiperSlide key={item}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + idx * 0.1,
                  ease: "easeOut",
                }}
                style={{ height: "100%" }}
              >
                <TestimonialCard>
                  <CardContent
                    sx={{
                      px: { xs: 3, sm: 3.5, md: 4 },
                      py: { xs: 3, sm: 3.5, md: 4 },
                      overflow: "visible",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Avatar
                      title="Aziat"
                      sx={{
                        mx: "auto",
                        width: { xs: "50px", sm: "55px", md: "60px" },
                        height: { xs: "50px", sm: "55px", md: "60px" },
                        mb: { xs: 1.5, sm: 2, md: 2 },
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        mb: { xs: 2, sm: 2.5, md: 3 },
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
                        flexGrow: 1,
                        textAlign: "center",
                      }}
                    >
                      «EBITDA выросла на 47% за 9 месяцев. Наша команда смогла
                      сосредоточиться на росте, а не на хаосе. Это был прорыв.»
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        textAlign: "center",
                        fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                        mt: "auto",
                      }}
                    >
                      — CEO, FMCG-компания
                    </Typography>
                  </CardContent>
                </TestimonialCard>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </TestimonialContainer>
    </Box>
  )
}
