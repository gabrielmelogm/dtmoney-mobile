import { Box, Text } from "native-base";
import { color } from "../styles/colors";

interface CardProps {
  type: "deposit" | "withdraw" | "total"
  amount: number
  total?: boolean
}

export function Card({ type, amount, total }: CardProps) {
  return (
    <Box
      borderRadius="lg"
      pt="5"
      pb="10"
      pl="5"
      pr="32"
      bg={total ? color.green : '#FFF'}
      mr="5"
    >
      <Text
        fontSize="sm"
        fontWeight="medium"
        color={total ? '#FFF' : color.textLight}
      > 
        {
          (!total)
            ? <Text>{(type === "deposit") ? "Entradas" : "Saídas"}</Text> 
            : <Text>Total</Text> 
        }
      </Text>

      <Box
        mt="12"
      >
        <Text
          fontSize="3xl"
          fontWeight="medium"
          color={total ? '#FFF' : color.textLight}
        >
          {
            new Intl.NumberFormat('pt-BR', {
              style: "currency",
              currency: "BRL"
            }).format(amount)
          }
        </Text>

        <Text
          fontSize="xs"
          color={total ? '#FFF' : color.textBody}
        >
          Última entrada dia 13 de abril
        </Text>
      </Box>
    </Box>
  )
}