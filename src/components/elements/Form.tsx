import { Actionsheet, Box, Button, Text, KeyboardAvoidingView } from "native-base";
import { useState } from "react";
import { useWindowDimensions } from "react-native"

import { useTransactions } from "../../hooks/useTransactions";
import { color } from "../../styles/colors";
import { Container } from "../Container";
import { Input } from "../Input";
import { RadioButton } from "../RadioButton";

import Close from "../../assets/close.svg"
import Income from  "../../assets/income.svg"
import Outcome from "../../assets/outcome.svg"

interface FormProps {
  isOpen: boolean
  onClose: () => void
}

export function Form({ isOpen, onClose }: FormProps) {
  const [ title, setTitle ] = useState('')
  const [ amount, setAmount ] = useState(0)
  const [ type, setType ] = useState<"deposit" | "withdraw">("deposit")
  const [ category, setCategory ] = useState("")

  const window = useWindowDimensions()
  const { createTransaction } = useTransactions()

  function handleSubmit() {
    createTransaction({
      amount,
      category,
      title,
      type,
      userEmail: "melogoncalvesbiel@gmail.com"
    })
    onClose()
  }

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
                <Input
                  onChangeText={(title) => setTitle(title)}
                  placeholder="Nome"
                />
                <Input
                  onChangeText={(amount) => setAmount(+amount)}
                  placeholder="Preço"
                />

                <Box
                  mb={2}
                  width="100%"
                  maxW={window.width}
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <RadioButton
                    onPress={() => setType('deposit')}
                    icon={Income}
                    isActive={type === "deposit"}
                    activeColor={color.lightGreen}
                  >
                    <Text
                      fontSize="md"
                      pl={3}
                      color={color.textLight}
                    >
                      Income
                    </Text>
                  </RadioButton>
                  <RadioButton
                    onPress={() => setType('withdraw')}
                    icon={Outcome}
                    isActive={type === "withdraw"}
                    activeColor={color.lightRed}
                  >
                    <Text
                        fontSize="md"
                        pl={3}
                        color={color.textLight}
                      >
                        Outcome
                    </Text>
                  </RadioButton>
                </Box>

                <Input
                  onChangeText={(category) => setCategory(category)}
                  placeholder="Categoria"
                />

                <Button
                  onPress={handleSubmit}
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