import { Box, styled, Typography } from "@mui/material"
import { AppButton } from "./UI/AppButton"
import heroImg from "../assets/images/hero/hero.png"
import heroItemImg from "../assets/images/hero/bg-hero-item.png"
import heroStatueImg from "../assets/images/hero/hero-statue.png"
import { motion } from "framer-motion"

const HeroSection = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  padding: "0 16px",
  gap: 20,
  [theme.breakpoints.up("sm")]: {
    padding: "0 24px",
    gap: 15,
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "3fr 1fr",
    padding: "0 40px",
    gap: 10,
  },
  [theme.breakpoints.up("lg")]: {
    padding: "0 80px",
  },
}))

const Container = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to right, #CA8300 0%, #EDCB67 100%)`,
  padding: "30px 20px",
  borderRadius: "15px",
  position: "relative",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "400px",
  [theme.breakpoints.up("sm")]: {
    padding: "40px 35px",
    minHeight: "450px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "45px 45px",
    maxWidth: "800px",
    minHeight: "500px",
  },
}))

const StyledImg = styled("img")(({ theme }) => ({
  objectFit: "cover",
  width: "100%",
  maxWidth: "400px",
  borderRadius: "15px",
  margin: "0 auto",
  display: "block",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "500px",
  },
}))

const BackgroundImage = styled("img")(({ theme }) => ({
  position: "absolute",
  left: 0,
  bottom: 0,
  width: "100%",
  opacity: 0.7,
  [theme.breakpoints.up("md")]: {
    opacity: 1,
  },
}))

const StatueImage = styled("img")(({ theme }) => ({
  position: "absolute",
  right: 0,
  bottom: 0,
  width: "200px",
  opacity: 0.8,
  [theme.breakpoints.up("sm")]: {
    width: "250px",
    opacity: 0.9,
  },
  [theme.breakpoints.up("md")]: {
    width: "320px",
    opacity: 1,
  },
}))

const ImageContainer = styled(Box)(({ theme }) => ({
  order: -1,
  marginBottom: "20px",
  [theme.breakpoints.up("md")]: {
    order: 0,
    marginBottom: 0,
  },
}))

export const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#fff",
              mb: { xs: 2, sm: 2.5, md: 3 },
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              fontSize: { xs: "24px", sm: "32px", md: "38px", lg: "46px" },
              lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
              zIndex: 10000,
              position: "relative",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            ПРОФЕССИОНАЛЬНЫЕ ЮРИДИЧЕСКИЕ УСЛУГИ В БИШКЕКЕ
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              mb: { xs: 3, sm: 3.5, md: 4 },
              opacity: 0.95,
              maxWidth: { xs: "100%", md: "520px" },
              zIndex: 10000,
              position: "relative",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Мы являемся ведущей юридической фирмой в Бишкеке, предоставляющей
            широкий спектр юридических услуг для бизнеса и частных лиц. Наша
            команда опытных юристов и бухгалтеров готова помочь вам в решении
            любых правовых вопросов.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <AppButton
              variant="contained"
              size="large"
              sx={{
                background: "#131017 !important",
                p: { xs: "12px 24px", sm: "14px 28px", md: "16px 32px" },
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                minWidth: { xs: "200px", sm: "220px", md: "auto" },
              }}
            >
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
            </AppButton>
          </Box>
        </motion.div>
        <BackgroundImage src={heroItemImg} />
        <StatueImage src={heroStatueImg} />
      </Container>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      >
        <ImageContainer>
          <StyledImg src={heroImg} alt="Hero image" />
        </ImageContainer>
      </motion.div>
    </HeroSection>
  )
}
