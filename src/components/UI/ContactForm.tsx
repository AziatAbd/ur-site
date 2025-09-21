import { Box, Button, TextField, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import bgItem from "../../assets/icons/bg-item.svg"

const Root = styled('form')(({ theme }) => ({
  backgroundColor: "#1E1E1E",
  color: "white",
  padding: "64px 32px",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  position: "relative",
  overflow: "hidden",
  margin: "0 80px 90px",
  [theme.breakpoints.down("sm")]: {
    padding: "24px",
    margin: "0 20px 30px",
  },
}))

const LeftBlock = styled(Box)(() => ({
  flex: 1,
  maxWidth: "500px",
  zIndex: 1,
}))

const Title = styled(Typography)(() => ({
  fontSize: "36px",
  fontWeight: 700,
  marginBottom: "24px",
}))

const Description = styled(Typography)(() => ({
  fontSize: "14px",
  color: "#CCCCCC",
  marginBottom: "32px",
  lineHeight: 1.6,
}))

const InputGroup = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
  marginBottom: "16px",
}))

const StyledTextField = styled(TextField)(() => ({
  backgroundColor: "#55595f",
  borderRadius: "4px",
  input: {
    color: "white",
  },
  "& label": {
    color: "#CCCCCC",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}))

const TextareaField = styled(StyledTextField)(() => ({
  width: "100%",
  "& textarea": {
    color: "white",
    padding: "12px",
  },
}))

const SubmitButton = styled(Button)(() => ({
  background: "linear-gradient(90deg, #F59E0B 0%, #FDE68A 100%)",
  color: "black",
  fontWeight: 700,
  marginTop: "24px",
  borderRadius: "6px",
  padding: "12px 24px",
  "&:hover": {
    background: "linear-gradient(90deg, #FBBF24 0%, #FCD34D 100%)",
  },
}))

const BgLines = styled(Box)(({ theme }) => ({
  width: "60%",
  backgroundImage:
    "radial-gradient(circle at center, transparent 0%, transparent 40%, #3d3d3d 41%, transparent 42%)",
  backgroundSize: "40px 40px",
  opacity: 0.3,
  zIndex: 0,

  img: {
    position: "absolute",
    right: 0,
    top: 0,
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}))

export const ContactForm = () => {
  return (
    <Root>
      <LeftBlock>
        <Title>Получить бесплатную консультацию</Title>
        <Description>
          Мы предлагаем несколько пакетов услуг, чтобы удовлетворить потребности
          вашего бизнеса. Вы можете выбрать подходящий пакет или связаться с
          нами для разработки индивидуального предложения.
        </Description>

        <InputGroup>
          <StyledTextField fullWidth label="Ваше имя" />
          <StyledTextField fullWidth label="Ваш номер телефона" />
        </InputGroup>

        <TextareaField fullWidth label="Ваш вопрос" multiline rows={4} />

        <SubmitButton sx={{ color: "white" }} fullWidth type="submit">
          ОТПРАВИТЬ ЗАЯВКУ
        </SubmitButton>
      </LeftBlock>

      <BgLines>
        <img src={bgItem} alt="bgItem" />
      </BgLines>
    </Root>
  )
}
