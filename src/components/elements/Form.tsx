import { Actionsheet, Box, Button, Text, KeyboardAvoidingView } from "native-base";
import { useWindowDimensions } from "react-native"

import Close from "../../assets/close.svg"
import { color } from "../../styles/colors";
import { Container } from "../Container";
import { Input } from "../Input";
import { RadioButton } from "../RadioButton";

interface FormProps {
  isOpen: boolean
  onClose: () => void
}

export function Form({ isOpen, onClose }: FormProps) {
  const window = useWindowDimensions()

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <KeyboardAvoidingView behavior="padding" enabled>
        <Actionsheet.Content bg={color.background}>
          <Container>
            <Box
              width={window.width}
              paddingX={5}
              flexDir="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color={color.textLight}
              >
                Cadastrar transação
              </Text>

              <Button
                onPress={onClose}
                borderRadius="sm"
                bg="transparent"

                _pressed={{
                  bg: 'gray.200'
                }}
              >
                <Close width={14} height={14} />
              </Button>
            </Box>

            <Box
              mt={7}
              mb={2}
              width={window.width}
              paddingX={5}
            >
                <Input mb={2} placeholder="Nome" />
                <Input mb={2} placeholder="Preço" />

                <Box
                  mb={2}
                  width="100%"
                  maxW={window.width}
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <RadioButton type="deposit" />
                  <RadioButton type="withdraw" />
                </Box>

                <Input mb={2} placeholder="Categoria" />

                <Button
                  mt={5}
                  py={4}
                  bg={color.green}

                  _pressed={{
                    bg: color.darkGreen
                  }}
                >
                  <Text fontSize="md" color={color.shape}>Cadastrar</Text>
                </Button>
            </Box>
          </Container>
        </Actionsheet.Content>
      </KeyboardAvoidingView>
    </Actionsheet>
  )
}