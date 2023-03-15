import { Box, Text } from "native-base";
import { color } from "../styles/colors";

export interface TransactionProps {
  title: string
  amount: number
  category: string
  createAt: string
}

export function Transaction({ title, amount, category, createAt }: TransactionProps) {
  return (
    <Box
      w="full"
      borderRadius="lg"
      bg="#FFF"
      p={5}
      mb={2}
    >

      <Text
        fontSize="md"
      >
        {title}
      </Text>
      <Text
        fontSize="2xl"
        color={amount > 0 ? color.darkGreen : color.red}
      >
        {
          new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
          }).format(amount)
        }
      </Text>

      <Box
        mt={5}
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text color={color.textBody}>{category}</Text>
        <Text color={color.textBody}>{createAt}</Text>
      </Box>

    </Box>
  )
}