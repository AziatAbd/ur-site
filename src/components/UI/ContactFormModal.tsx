import {
  Box,
  Button,
  TextField,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import CloseIcon from "@mui/icons-material/Close"
import bgItem from "../../assets/icons/bg-item.svg"
import FormIcon from "../../assets/icons/form-icon.svg"
import { useState } from "react"

const Root = styled("form")(({ theme }) => ({
  backgroundColor: "#1E1E1E",
  color: "white",
  padding: "64px 32px",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    padding: "24px",
  },
}))

const LeftBlock = styled(Box)(() => ({
  flex: 1,
  maxWidth: "700px",
  zIndex: 1,
  width: "100%",
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
  width: "50%",
  backgroundSize: "40px 40px",
  opacity: 0.3,
  display: "flex",

  "& .bgItem": {
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 0,
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}))

const SuccessBox = styled(Box)(() => ({
  backgroundColor: "#16A34A",
  color: "white",
  padding: "40px",
  borderRadius: "12px",
  textAlign: "center",
  fontSize: "20px",
  fontWeight: 600,
  height: "fit-content",
  margin: "auto 0",
}))

type ContactFormModalProps = {
  open: boolean
  onClose: () => void
}

export const ContactFormModal = ({ open, onClose }: ContactFormModalProps) => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь логика отправки данных (API вызов)
    setSubmitted(true)
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "12px",
          background: "transparent",
          boxShadow: "none",
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        <Root onSubmit={handleSubmit}>
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "white",
              zIndex: 2,
            }}
          >
            <CloseIcon />
          </IconButton>

          {!submitted ? (
            <LeftBlock>
              <Title>Получить бесплатную консультацию</Title>
              <Description>
                Мы предлагаем несколько пакетов услуг, чтобы удовлетворить
                потребности вашего бизнеса. Вы можете выбрать подходящий пакет
                или связаться с нами для разработки индивидуального предложения.
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
          ) : (
            <SuccessBox>✅ Ваша заявка успешно отправлена!</SuccessBox>
          )}

          <BgLines>
            <img src={FormIcon} alt="vesy" width="100%" className="vesy" />
            <img src={bgItem} alt="bgItem" className="bgItem" />
          </BgLines>
        </Root>
      </DialogContent>
    </Dialog>
  )
}
