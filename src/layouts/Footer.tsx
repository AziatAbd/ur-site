import { Box, Stack, styled, Typography } from "@mui/material"
import { useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  padding: "8px 12px",
  borderRadius: "4px",
  color: "#fff",
  textDecoration: "none",
  fontSize: "14px",
  transition: "all 0.3s ease",
  display: "inline-block",
  whiteSpace: "nowrap",

  "&:hover": {
    textDecoration: "underline",
    transform: "translateY(-1px)",
  },

  "&.active": {
    textDecoration: "underline",
    fontWeight: 500,
  },

  [theme.breakpoints.up("sm")]: {
    padding: "10px 16px",
    fontSize: "15px",
  },

  [theme.breakpoints.up("md")]: {
    padding: "10px",
    fontSize: "16px",
  },
}))

const FooterLink = styled(Typography)(({ theme }) => ({
  textDecoration: "underline",
  cursor: "pointer",
  fontSize: "0.75rem",
  color: "#fff",
  transition: "all 0.3s ease",
  whiteSpace: "nowrap",

  "&:hover": {
    opacity: 0.8,
    transform: "translateY(-1px)",
  },

  [theme.breakpoints.up("sm")]: {
    fontSize: "0.8rem",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "0.85rem",
  },
}))

export const Footer = () => {
  const location = useLocation()

  const navItems = [
    { to: "/", label: "Главная" },
    { to: "/services", label: "Услуги" },
    { to: "/contacts", label: "Контакты" },
    { to: "/about-us", label: "О нас" },
  ]

  const footerLinks = [
    "Политика конфиденциальности",
    "Условия обслуживания",
    "Отказ от ответственности",
  ]

  useEffect(() => {
    window.scrollTo(0, 0) // Прокручиваем страницу в верхний левый угол
  }, [location]) // Зависимость от location, т.е. когда маршрут изменится

  return (
    <Box
      sx={{
        py: { xs: 3, sm: 4, md: 5 },
        px: { xs: 2, sm: 3, md: 4 },
        background: `linear-gradient(to right, #CA8300 0%, #EDCB67 100%)`,
      }}
    >
      <Stack spacing={{ xs: 3, sm: 4, md: 4 }}>
        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, sm: 2, md: 4 },
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <StyledNavLink key={item.to} to={item.to}>
              {item.label}
            </StyledNavLink>
          ))}
        </Box>

        {/* Footer Links and Copyright */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2, md: 3 }}
          alignItems={{ xs: "center", md: "center" }}
          justifyContent="center"
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            pt: { xs: 2, sm: 3, md: 3 },
          }}
        >
          {/* Footer Links */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 1, sm: 2, md: 3 },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {footerLinks.map((link, index) => (
              <FooterLink key={index}>{link}</FooterLink>
            ))}
          </Box>
        </Stack>

        {/* Additional Contact Info - Optional */}
        <Box
          sx={{
            textAlign: "center",
            pt: { xs: 1, sm: 2 },
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.8rem" },
              color: "#fff",
              opacity: 0.7,
            }}
          >
            Юридическая компания "Akmatova & Associates" | Бишкек, Кыргызстан
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}
