import { Box, NativeBaseProvider  } from "native-base";
import { Dashboard } from "./src/components/Elements/Dashboard";
import { color } from "./src/styles/colors";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        bg={color.background}
      >
        <Dashboard />
      </Box>
    </NativeBaseProvider>
  );
}

