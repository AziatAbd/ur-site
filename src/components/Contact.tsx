import { Box, Grid, Typography } from "@mui/material"
import { Instagram, Phone, Send } from "lucide-react"
import { AppButton } from "./UI/AppButton"
import { motion } from "framer-motion"

export const Contact = () => {
  const contactMethods = [
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 77 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 77.3675L5.43829 57.5002C2.08247 51.6847 0.319141 45.0924 0.322365 38.3324C0.332036 17.1981 17.5302 0 38.6612 0C48.9156 0.00322365 58.5414 3.99732 65.7817 11.2441C73.0188 18.4908 77.0032 28.1231 77 38.3678C76.9903 59.5053 59.7922 76.7034 38.6612 76.7034C32.2461 76.7002 25.9246 75.0916 20.3251 72.0356L0 77.3675ZM21.2664 65.0951C26.6692 68.3026 31.827 70.2239 38.6483 70.2271C56.2107 70.2271 70.5172 55.9335 70.5269 38.3614C70.5334 20.7538 56.2945 6.47953 38.6741 6.47308C21.0988 6.47308 6.80189 20.7667 6.79544 38.3356C6.79222 45.5082 8.89404 50.8788 12.4239 56.4976L9.20351 68.2575L21.2664 65.0951ZM57.974 47.4811C57.7355 47.0813 57.0972 46.8428 56.1366 46.3625C55.1791 45.8821 50.4694 43.5643 49.5893 43.2452C48.7125 42.9261 48.0742 42.7649 47.4327 43.7255C46.7944 44.6829 44.957 46.8428 44.3993 47.4811C43.8416 48.1194 43.2807 48.1999 42.3232 47.7196C41.3658 47.2393 38.2776 46.2303 34.6187 42.9647C31.7722 40.4245 29.8477 37.2879 29.29 36.3273C28.7323 35.3698 29.232 34.8508 29.7091 34.3737C30.1411 33.945 30.6665 33.2551 31.1469 32.6942C31.6336 32.1397 31.7916 31.74 32.114 31.0985C32.4331 30.4602 32.2751 29.8993 32.0334 29.419C31.7916 28.9419 29.8767 24.2257 29.0805 22.3076C28.3004 20.4411 27.5106 20.6926 26.9239 20.6636L25.0864 20.6313C24.4481 20.6313 23.4101 20.8699 22.5333 21.8305C21.6565 22.7912 19.1807 25.1058 19.1807 29.8219C19.1807 34.5381 22.6139 39.0931 23.091 39.7314C23.5713 40.3697 29.8445 50.0471 39.4542 54.1959C41.7398 55.1824 43.5257 55.7723 44.9151 56.2139C47.2103 56.9425 49.2992 56.8393 50.9497 56.5943C52.7904 56.3203 56.6169 54.2765 57.4164 52.0393C58.2158 49.7989 58.2158 47.8808 57.974 47.4811Z"
            fill="#FFF"
          />
        </svg>
      ),
      label: "WhatsApp",
    },
    {
      icon: <Send size={20} />,
      label: "Telegram",
    },
    {
      icon: <Phone size={20} />,
      label: "Позвонить нам",
    },
  ]

  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: { xs: 1.5, sm: 2 },
            fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
            lineHeight: { xs: 1.2, md: 1.3 },
          }}
        >
          Остались вопросы?
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: { xs: 4, sm: 5, md: 6 },
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
            lineHeight: { xs: 1.4, md: 1.6 },
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          Напишите нам! Всегда рады вам помочь.
        </Typography>
      </motion.div>

      <Grid
        container
        spacing={{ xs: 2, sm: 2.5, md: 3 }}
        justifyContent="center"
        sx={{
          maxWidth: { xs: "100%", sm: "600px", md: "800px" },
          mx: "auto",
        }}
      >
        {contactMethods.map((method, index) => (
          <Grid
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.15,
                ease: "easeOut",
              }}
              style={{ width: "100%" }}
            >
              <AppButton
                variant="contained"
                color="primary"
                startIcon={method.icon}
                fullWidth
                sx={{
                  py: { xs: 1.5, sm: 2, md: 2.5 },
                  px: { xs: 2, sm: 2.5, md: 3 },
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  fontWeight: 500,
                  borderRadius: 2,
                  minHeight: { xs: "48px", sm: "52px", md: "56px" },
                  maxWidth: { xs: "300px", sm: "none" },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px rgba(202, 131, 0, 0.4)",
                  },
                }}
              >
                {method.label}
              </AppButton>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
