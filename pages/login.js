import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Link,
    Stack,
    Text,
  } from '@chakra-ui/react';
  
  export default function SplitScreen() {
    return (
      <Stack bgColor='#191919' minH={'100vh'} direction={{ base: 'column', md: 'row-reverse' }}>
        <Flex userSelect={'none'} p={8} flex={1} align={'center'} justify={'center'}>
          <Stack fontFamily='Droid Sans Mono' fontStyle={'italic'} color={'white'} spacing={4} w={'md'} maxW={'md'}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input variant='flushed' borderColor={'#ffffff'} focusBorderColor='#00ff00' type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input variant='flushed' borderColor={'#ffffff'} focusBorderColor='#00ff00' type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'center'}>
                <Text>
                    Não tem uma conta? <Link href={'/register'} color='#00ff00' >Registre-se</Link>
                </Text>
              </Stack>
              <Button variant={'solid'} color='#000000' bgColor='#00ff00' fontStyle={'italic'}>
                Entrar
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} fontSize={'75px'} fontFamily='Droi Sans Mono' fontStyle={'italic'} textAlign={'center'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} userSelect={'none'} >
            <Text color='#00ff00'>
                __edublog__
            </Text>
            <Text color='white'>
                Faça login na plataforma
            </Text>
          
        </Flex>
      </Stack>
    );
  }