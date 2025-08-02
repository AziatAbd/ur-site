import { Box, Grid, Stack, styled, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

const StyledNavLink = styled(NavLink)({
  padding: "10px",
  borderRadius: "4px",
  color: "#fff",
  textDecoration: "none",

  "&:hover": {
    textDecoration: "underline",
  },

  "&.active": {
    textDecoration: "underline",
  },
})

export const Footer = () => {
  return (
    <Box
      sx={{
        py: 4,
        background: `linear-gradient(to right, #CA8300 0%, #EDCB67 100%)`,
      }}
    >
      <Stack>
        <Grid>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              justifyContent: "center",
            }}
          >
            <StyledNavLink to="/">Главная</StyledNavLink>
            <StyledNavLink to="/services">Услуги</StyledNavLink>
            <StyledNavLink to="/contacts">Контакты</StyledNavLink>
            <StyledNavLink to="/about-us">О нас</StyledNavLink>
          </Box>
        </Grid>
        <Grid>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: { xs: "flex-start", md: "center" },
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
              }}
            >
              © 2000 - 2025 Юридическая фирма. Все права защищены.
            </Typography>
            <Typography
              sx={{
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: "0.8rem",
              }}
            >
              Политика конфиденциальности
            </Typography>
            <Typography
              sx={{
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: "0.8rem",
              }}
            >
              Условия обслуживания
            </Typography>
            <Typography
              sx={{
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: "0.8rem",
              }}
            >
              Отказ от ответственности
            </Typography>
          </Box>
        </Grid>
      </Stack>
    </Box>
  )
}
