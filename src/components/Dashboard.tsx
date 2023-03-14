import { Box, ScrollView } from "native-base";
import { Card } from "./Card";

export function Dashboard() {
  return (
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
          <Card type="withdraw" amount={14500} total />
        </Box>
      </ScrollView>
    </Box>
  )
}