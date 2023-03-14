import { Box, NativeBaseProvider  } from "native-base";
import { Summary } from "./src/components/Summary";
import { color } from "./src/styles/colors";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        bg={color.background}
      >
        <Summary />
      </Box>
    </NativeBaseProvider>
  );
}

