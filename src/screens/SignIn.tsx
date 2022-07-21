import { useState } from "react";
import { VStack, Heading, Icon, useTheme, Box } from "native-base";
import { Envelope, Key } from "phosphor-react-native";
import Logo from "../assets/logo_primary.svg";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();

  function handleSignIn() {
    console.log(user, password);
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        placeholder="E-mail cadastrado ou nome de usuário"
        mb={4}
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[100]} />} ml={4} />
        }
        onChangeText={setUser}
      />
      <Input
        placeholder="Digite sua senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[100]} />} ml={4} />}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Box
        mt={8}
        w="full"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Button title="Entrar" w="full" onPress={handleSignIn} />
        {/* <Button title="Sair" w="48%" /> */}
      </Box>
    </VStack>
  );
}
