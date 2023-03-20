import { Box, NativeBaseProvider, useDisclose  } from "native-base";
import { Dashboard } from "./src/components/elements/Dashboard";
import { Form } from "./src/components/elements/Form";
import { Login } from "./src/components/elements/Login";
import { Transactions } from "./src/components/elements/Transactions";
import { AuthenticationProvider } from "./src/hooks/useAuthentication";
import { TransactionsProvider } from "./src/hooks/useTransactions";
import { color } from "./src/styles/colors";

export default function App() {
  const { onOpen, isOpen, onClose } = useDisclose()

  return (
    <NativeBaseProvider>
      <AuthenticationProvider>
        <TransactionsProvider>
          {/* <Login /> */}
          <Box
            flex={1}
            bg={color.background}
          >
            <Box
              h="full"
              flexDir="column"
              justifyContent="space-between"
            >
              <Dashboard onOpen={onOpen} />
              <Transactions />
            </Box>
            <Form isOpen={isOpen} onClose={onClose} />
          </Box>
        </TransactionsProvider>
      </AuthenticationProvider>
    </NativeBaseProvider>
  );
}

