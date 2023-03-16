import { Box, ScrollView, Text } from "native-base";
import { useTransactions } from "../../hooks/useTransactions";
import { color } from "../../styles/colors";
import { Container } from "../Container";
import { Transaction } from "../Transaction";

export function Transactions() {
  const { transactions } = useTransactions()

  return (
    <Box
      w="100%"
      h="1/2"
    >
      <Container>
        <Box
          py={4}
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            fontSize="2xl"
          >
            Listagem
          </Text>

          <Text
            fontSize="sm"
            color={color.textBody}
          >
            {transactions.length} itens
          </Text>
        </Box>

        <ScrollView
          mb="20"
        >
          {
            transactions.map(transaction => (
              <Transaction
                key={transaction.title}
                title={transaction.title}
                amount={transaction.amount}
                category={transaction.category}
                createdAt={transaction.createdAt}
                type={transaction.type}
              />
            ))
          }
        </ScrollView>
      </Container>
    </Box>
  )
}