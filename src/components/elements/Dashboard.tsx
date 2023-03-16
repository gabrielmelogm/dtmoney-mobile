import { Box, ScrollView } from "native-base";
import { Card } from "../Card";
import { Header } from "../Header";

interface DashboardProps {
  onOpen: () => void
}

export function Dashboard({ onOpen }: DashboardProps) {
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
            <Card type="deposit" amount={17500} />
            <Card type="withdraw" amount={3000} />
            <Card type="total" amount={14500} />
          </Box>
        </ScrollView>
      </Box>
    </>
  )
}