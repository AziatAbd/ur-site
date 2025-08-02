import { Stack, Box, styled, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

const PhoneNumber = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}))

const StyledNavLink = styled(NavLink)({
  padding: "10px",
  borderRadius: "4px",
  color: "#fff",
  textDecoration: "none",
  transition: "background 250ms, color 0.3s",

  "&:hover": {
    background: "#CA8300",
  },

  "&.active": {
    background: "#CA8300",
  },
})

const Header = () => {
  return (
    <Stack
      sx={{
        background: "#131017",
        mb: "20px",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
          }}
        >
          <StyledNavLink to="/">Главная</StyledNavLink>
          <StyledNavLink to="services">Услуги</StyledNavLink>
          <StyledNavLink to="contacts">Контакты</StyledNavLink>
          <StyledNavLink to="about-us">О нас</StyledNavLink>
        </Box>
        <Box sx={{ ml: 2 }}>
          <PhoneNumber variant="body2">+996 550 500 600</PhoneNumber>
          <PhoneNumber variant="body2">+996 550 500 600</PhoneNumber>
        </Box>
      </Toolbar>
    </Stack>
  )
}

export default Header
