import { Button, ButtonProps, styled } from "@mui/material"
import { FC } from "react"

const StyledButton = styled(Button)(() => ({
  color: "#fff",
  padding: "10px",
  lineHeight: "normal",
  position: "relative",
  zIndex: 10000,

  "&.MuiButton-text": {
    ":hover": {
      background: `linear-gradient(to right, #CA8300 0%, #EDCB67 100%)`,
    },
  },

  "&.MuiButton-contained": {
    background: "#131017",
  },

  "&.MuiButton-containedPrimary": {
    background: `linear-gradient(to right, #CA8300 0%, #EDCB67 100%)`,
  },
}))

export const AppButton: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}
