import { Box, Text } from "native-base";
import { TransactionProps } from "../hooks/useTransactions";
import { color } from "../styles/colors";

export function Transaction({ title, amount, category, type, createdAt }: TransactionProps) {
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
        color={type === "deposit" ? color.darkGreen : color.red}
      >
        {
          (type === "deposit")
          ? new Intl.NumberFormat('pt-BR', {
              style: "currency",
              currency: "BRL"
            }).format(amount)
          : `- ${new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
          }).format(amount)}`
        }
      </Text>

      <Box
        mt={5}
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text color={color.textBody}>{category}</Text>
        <Text color={color.textBody}>{createdAt}</Text>
      </Box>

    </Box>
  )
}