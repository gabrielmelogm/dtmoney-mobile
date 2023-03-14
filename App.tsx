import { NativeBaseProvider  } from "native-base";
import { Summary } from "./src/components/Summary";

export default function App() {
  return (
    <NativeBaseProvider>
      <Summary />
    </NativeBaseProvider>
  );
}

