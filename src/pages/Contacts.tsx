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
              {item.title === "Часы работы:" ? (
                <>
                  <Typography mb={1}>Пн - Пт: 09:00 - 18:00</Typography>
                  <Typography>Сб-Вс: выходной</Typography>
                </>
              ) : item.title === "Адрес:" ? (
                <>
                  <Typography>ул. Лермонтова, 1 Б стр 1</Typography>
                </>
              ) : item.title === "Телефон:" ? (
                <>
                  <Typography>+996 701 506 084</Typography>
                </>
              ) : item.title === "Почта:" ? (
                <>
                  <Typography>info@example.com</Typography>
                </>
              ) : null}
            </Box>
          ))}
        </Box>
      </Stack>
      <Box mb="120px">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab0d311a23089a34d31a95013ca84e794c8f891832620d0d2b75144ccf5dcfb3e&amp;source=constructor"
          width="100%"
          height="550"
        ></iframe>
      </Box>

      <ContactForm />
    </div>
  )
}

export default Contacts
