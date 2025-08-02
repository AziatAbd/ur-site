import { Box, styled, Typography } from "@mui/material";
import { AppButton } from "./UI/AppButton";
import heroImg from "../assets/images/hero/hero.png";
import heroItemImg from "../assets/images/hero/bg-hero-item.png";
import heroStatueImg from "../assets/images/hero/hero-statue.png";

const HeroSection = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "3fr 1fr",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  padding: "0 80px",
  height: "100%",
  maxHeight: "990px",
}));

const Container = styled(Box)(() => ({
  background: `linear-gradient(to right, #CA8300 0%, #EDCB67 100%)`,
  height: "100%",
  minHeight: "700px",
  maxHeight: "1230px",
  padding: "85px 85px",
  borderRadius: "15px",
  position: "relative",
  maxWidth: "800px",
  width: "100%",
}));

const StyledImg = styled("img")({
  maxHeight: "830px",
  object: "cover",
  width: "100%",
  minWidth: "500px",
  borderRadius: "15px",
});

const BackgroundImage = styled("img")({
  position: "absolute",
  left: 0,
  bottom: 0,
  width: "100%",
  //   zIndex: -,
});

const StatueImage = styled("img")({
  position: "absolute",
  right: 0,
  bottom: 0,
  width: "420px",
});

export const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Typography
          variant="h1"
          sx={{
            color: "#fff",
            mb: 3,
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            fontSize: "32px",
          }}
        >
          ПРОФЕССИОНАЛЬНЫЕ ЮРИДИЧЕСКИЕ УСЛУГИ В БИШКЕКЕ
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#fff",
            mb: 4,
            opacity: 0.95,
            maxWidth: "520px",
            zIndex: 10000,
            position: "relative",
          }}
        >
          Мы являемся ведущей юридической фирмой в Бишкеке, предоставляющей
          широкий спектр юридических услуг для бизнеса и частных лиц. Наша
          команда опытных юристов и бухгалтеров готова помочь вам в решении
          любых правовых вопросов.
        </Typography>
        <AppButton variant="contained" size="large">
          ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
        </AppButton>
        <BackgroundImage src={heroItemImg} />
        <StatueImage src={heroStatueImg} />
      </Container>
      <Box>
        <StyledImg src={heroImg} alt="Hero image" />
      </Box>
    </HeroSection>
  );
};
