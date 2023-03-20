import { Box, Button, Heading, Icon, Text } from "native-base";
import { Container } from "../Container";

import GoogleIcon from "../../assets/logo-google.svg"
import GithubIcon from "../../assets/logo-github.svg"
import Logo from "../../assets/logo-only.svg"
import { color } from "../../styles/colors";
import { useAuthentication } from "../../hooks/useAuthentication";

export function Login() {
  const { LogInWithGoogle, LogInWithGitHub } = useAuthentication()

  return (
    <Box
      flex={1}
      w="100%"
      justifyContent="center"
      alignItems="center"
      bg={color.background}
    >
      <Container>
        <Box
          safeArea
        >
          <Box
            flexDir="row"
            alignItems="center"
            pb={5}
          >
            <Logo width={28} height={28} />
            <Text
              fontSize="lg"
              fontWeight="bold"
              pl={2}
              color={color.textLight}
            >
                dtmoney
            </Text>
          </Box>
          <Heading
            size="lg"
            fontWeight="600"
            color={color.textLight}
          >
            Login
          </Heading>
          <Heading
            mt="1"
            mb={7}
            color={color.textLight}
            fontWeight="medium"
            size="xs"
          >
            Escolha como fazer login
          </Heading>

          <SocialButton onPress={LogInWithGoogle} icon={GoogleIcon}>
            <Text fontWeight="medium" pl={3}>Entrar com Google</Text>
          </SocialButton>

          <SocialButton onPress={LogInWithGitHub} icon={GithubIcon}>
            <Text fontWeight="medium" pl={3}>Entrar com GitHub</Text>
          </SocialButton>

        </Box>
      </Container>
    </Box>
  )
}

function SocialButton({onPress, icon, children}: any) {
  return (
    <Button
      onPress={onPress}
      mt={3}
      w="100%"
      leftIcon={<Icon as={icon} name="income" w={24} height={24} />}
      py={3}
      borderRadius="lg"
      borderWidth="2"
      borderColor="rgb(214, 214, 214)"
      bg={color.background}

      _pressed={{
        bg: "gray.200"
      }}
    >
      {children}
    </Button>
  )
}