import { Box, NativeBaseProvider  } from "native-base";
import { Dashboard } from "./src/components/elements/Dashboard";
import { Transactions } from "./src/components/elements/Transactions";
import { color } from "./src/styles/colors";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        bg={color.background}
      >
        <Box
          h="full"
          flexDir="column"
          justifyContent="space-between"
        >
          <Dashboard />
          <Transactions />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}

