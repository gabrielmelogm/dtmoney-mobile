import { Button, Icon, Text } from "native-base";
import { useWindowDimensions } from "react-native"

import Income from "../assets/income.svg"
import Outcome from "../assets/outcome.svg"

import { color } from "../styles/colors";

interface RadioButtonProps {
  type: "deposit" | "withdraw"
}

export function RadioButton({ type }: RadioButtonProps) {
  const window = useWindowDimensions()

  return (
   <Button
      leftIcon={<Icon as={(type === "deposit") ? Income : Outcome} name="income" w={24} height={24} />}
      width={(window.width/2) - 25}
      borderRadius="md"
      borderWidth={1.5}
      borderColor="#D7D7D7"
      bg={color.shape}

      _pressed={{
        bg: (type === "deposit") ? "#33cc952e" : "#e52e4d59",
      }}
    >
      <Text
        fontSize="md"
        pl={3}
        color={color.textLight}
      >
        {type === "deposit" ? "Income" : "Outcome"}
      </Text>
    </Button>
  )
}