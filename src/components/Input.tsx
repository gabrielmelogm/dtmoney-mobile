import { Input as NativeInput } from "native-base"
import { color } from "../styles/colors"

export function Input({...props}) {
  return <NativeInput
      {...props}
      py={3}
      variant="filled"
      fontSize="sm"
      color={color.textBody}
      borderColor="#D7D7D7"
      bg="#E7E9EE"
    />
}