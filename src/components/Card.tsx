import { Box, Text } from "native-base";

import { color } from "../styles/colors";

import Income from "../assets/income.svg"
import Outcome from "../assets/outcome.svg"
import Total from "../assets/total.svg"

interface CardProps {
  type: "deposit" | "withdraw" | "total"
  amount: number
}

export function Card({ type, amount }: CardProps) {
  let icon = <></>

  switch (type) {
    case 'deposit':
      icon = <Income width={32} height={32} />
      break
    case 'withdraw':
      icon = <Outcome width={32} height={32} />
      break
    case 'total':
      icon = <Total width={32} height={32} />
      break
  }

  return (
    <Box
      borderRadius="lg"
      pt="5"
      pb="10"
      pl="5"
      pr="32"
      bg={type === "total" ? color.green : '#FFF'}
      mr="5"
      position="relative"
    >
      <Box
        position="absolute"
        top={5}
        right={5}
      >
        {icon}
      </Box>


      <Text
        fontSize="sm"
        fontWeight="medium"
        color={type === "total"  ? '#FFF' : color.textLight}
      > 
        {
            <Text>{(type === "deposit") ? "Entradas" : (type === "withdraw") ? "Saídas" : "Total"}</Text> 
        }
      </Text>

      <Box
        mt="12"
      >
        <Text
          fontSize="3xl"
          fontWeight="medium"
          color={type === "total" ? '#FFF' : color.textLight}
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
          color={type === "total" ? '#FFF' : color.textBody}
        >
          Última entrada dia 13 de abril
        </Text>
      </Box>
    </Box>
  )
}