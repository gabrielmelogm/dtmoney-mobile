import { Box, Button, Heading, Text } from "native-base";
import { color } from "../styles/colors";
import { Container } from "./Container";

import Logo from "../assets/logo.svg"

interface HeaderProps {
  onOpen: () => void
}

export function Header({ onOpen }: HeaderProps) {
  return (
    <Box
      width="100%"
      height="2/6"
      bg={color.blue}
    >
      <Container>
        <Box
          marginTop="16"
          width="100%"
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading
            color="#FFF"
          >
            <Logo width={173} height={40} />
          </Heading>

          <Button
            onPress={onOpen}
            fontSize="md"
            px="5"
            bg={color.blueLight}
            _pressed={{
              bg: "#4819CC"
            }}
          >
            <Text
              fontWeight="bold"
              color="#FFF"
            >Nova transação</Text>
          </Button>
        </Box>
      </Container>
    </Box>
  )
}