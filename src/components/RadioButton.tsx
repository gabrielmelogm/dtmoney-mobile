import { Button, Icon, Text } from "native-base";
import { useWindowDimensions } from "react-native"
import { SvgProps } from "react-native-svg";

import { color } from "../styles/colors";

interface RadioButtonProps {
  isActive?: boolean
  onPress: () => void
  icon: React.FC<SvgProps>
  activeColor: string
  children: any
}

export function RadioButton({ isActive, onPress, icon, activeColor, children }: RadioButtonProps) {
  const window = useWindowDimensions()

  return (
   <Button
      onPress={onPress}
      leftIcon={<Icon as={icon} name="income" w={24} height={24} />}
      width={(window.width/2) - 25}
      borderRadius="md"
      borderWidth={1.5}
      borderColor="#D7D7D7"
      bg={(isActive) && activeColor || color.shape}

      _pressed={{
        bg: activeColor,
      }}
    >
      <Text
        fontSize="md"
        pl={3}
        color={color.textLight}
      >
        {children}
      </Text>
    </Button>
  )
}