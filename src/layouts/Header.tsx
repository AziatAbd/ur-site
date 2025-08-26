import {
  Stack,
  Box,
  styled,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material"

const PhoneNumber = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "0.75rem",
  lineHeight: 1.2,
  [theme.breakpoints.up("sm")]: {
    fontSize: "0.875rem",
  },
}))

const StyledNavLink = styled(NavLink, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme }) => ({
  padding: "10px 16px",
  borderRadius: "4px",
  color: "#fff",
  textDecoration: "none",
  transition: "background 250ms, color 0.3s",
  display: "block",
  fontSize: theme.breakpoints.up("sm") ? "1rem" : "0.9rem",

  "&:hover": {
    background: "#CA8300",
  },

  "&.active": {
    background: "#CA8300",
  },

  [theme.breakpoints.down("md")]: {
    padding: "12px 16px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 0,
  },
}))

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    background: "#131017",
    color: "#fff",
    width: 280,
    padding: theme.spacing(2),
  },
}))

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navItems = [
    { to: "/", label: "Главная" },
    { to: "services", label: "Услуги" },
    { to: "contacts", label: "Контакты" },
    { to: "about-us", label: "О нас" },
  ]

  return (
    <Stack
      sx={{
        background: "#131017",
        mb: { xs: "10px", sm: "15px", md: "20px" },
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 1, sm: 1.5 },
        }}
      >
        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
          }}
        >
          {navItems.map((item) => (
            <StyledNavLink key={item.to} to={item.to}>
              {item.label}
            </StyledNavLink>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: "block", md: "none" },
            color: "#fff",
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Phone Numbers */}
        <Box
          sx={{
            ml: { xs: 0, md: 2 },
            textAlign: { xs: "right", md: "left" },
          }}
        >
          <PhoneNumber variant="body2">+996 550 500 600</PhoneNumber>
          <PhoneNumber variant="body2">+996 550 500 600</PhoneNumber>
        </Box>

        {/* Mobile Navigation Drawer */}
        <MobileDrawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            <Typography variant="h6" sx={{ color: "#CA8300" }}>
              Меню
            </Typography>
            <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.to} sx={{ p: 0 }}>
                <StyledNavLink
                  to={item.to}
                  onClick={handleDrawerToggle}
                  style={{ width: "100%" }}
                >
                  {item.label}
                </StyledNavLink>
              </ListItem>
            ))}
          </List>
        </MobileDrawer>
      </Toolbar>
    </Stack>
  )
}

export default Header
