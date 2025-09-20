import { Box, Stack, Typography } from "@mui/material"
import { ContactForm } from "../components/UI/ContactForm"

const contacts = [
  {
    title: "Часы работы:",
  },
  {
    title: "Адрес:",
  },
  {
    title: "Телефон:",
  },
  {
    title: "Почта:",
  },
]

const Contacts = () => {
  return (
    <div>
      <Stack px={{ xs: "20px", md: "80px" }}>
        <Typography variant="h2" fontSize={{ xs: "24px", md: "40px" }} mb={4}>
          Контакты
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          mb="40px"
          flexWrap="wrap"
        >
          {contacts.map((item) => (
            <Box>
              <Typography color="#EDCB67" mb={2}>
                {item.title}
              </Typography>
              <Typography mb={1}>Пн - Пт: 09:00 - 18:00</Typography>
              <Typography>Сб-Вс: выходной</Typography>
            </Box>
          ))}
        </Box>
      </Stack>
      <Box mb="120px">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae1a2dfd8a05365b6a67a0f1d6bc9455a69a1643914c04d27ed61063e723a687c&amp;source=constructor"
          width="100%"
          height="550"
        ></iframe>
      </Box>

      <ContactForm />
    </div>
  )
}

export default Contacts
