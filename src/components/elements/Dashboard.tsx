import { Box, ScrollView } from "native-base";
import { useTransactions } from "../../hooks/useTransactions";
import { Card } from "../Card";
import { Header } from "../Header";

interface DashboardProps {
  onOpen: () => void
}

export function Dashboard({ onOpen }: DashboardProps) {
  const { transactions } = useTransactions()
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === "deposit") {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <>
      <Header onOpen={onOpen} />
      <Box pl="5">
        <ScrollView
          marginTop="-24"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Box
            flexDir="row"
          >
            <Card type="deposit" amount={summary.deposits} />
            <Card type="withdraw" amount={summary.withdraws} />
            <Card type="total" amount={summary.total} />
          </Box>
        </ScrollView>
      </Box>
    </>
  )
}