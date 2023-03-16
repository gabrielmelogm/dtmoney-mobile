import { Input as NativeInput } from "native-base"
import { TextInputProps } from "react-native"
import { color } from "../styles/colors"

interface InputProps {
  onChangeText?: () => void
}

export function Input({...props}: TextInputProps) {
  return <NativeInput
      {...props}
      py={3}
      mb={2}
      variant="filled"
      fontSize="sm"
      color={color.textBody}
      borderColor="#D7D7D7"
      bg="#E7E9EE"
    />
}