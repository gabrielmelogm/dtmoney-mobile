import { Box, ScrollView, Text } from "native-base";
import { color } from "../../styles/colors";
import { Container } from "../Container";
import { Transaction, TransactionProps } from "../Transaction";

export function Transactions() {
  const transactions: TransactionProps[] = [
    {
      title: "Desenvolvimento de site",
      amount: 12000,
      category: "Vendas",
      createAt: new Date().toISOString(),
    },
    {
      title: "Hamburgueria Pizzy",
      amount: -59,
      category: "Alimentação",
      createAt: new Date().toISOString(),
    },
    {
      title: "Aluguel do apartamento",
      amount: -1200,
      category: "Casa",
      createAt: new Date().toISOString(),
    },
  ]

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
                createAt={transaction.createAt}
              />
            ))
          }
        </ScrollView>
      </Container>
    </Box>
  )
}