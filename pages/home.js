import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { 
  UserIcon, 
  HamburgerIcon, 
  CloseIcon } from '@chakra-ui/icons';

const Links = ['Tutores',];

const NavLink = ({ children }, { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('#00ff00', '#ffffff'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('#191919')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} textColor={'white'} fontFamily={'Droid Sans Mono'} fontStyle={'italic'}>
          <IconButton
            size={'md'}
            color={'blackAlpha.900'}
            bgColor={'#00ff00'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'} userSelect={'none'} >
            <Box color={'#00ff00'} fontFamily={'Droid Sans Mono'}  fontStyle={'italic'}>__edublog__</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    <UserIcon/>
                  }
                />
              </MenuButton>
              <MenuList borderColor={'#00ff00'} color={'#00ff00'} bgColor={'black'}>
                <MenuItem>Deletar conta</MenuItem>
                <MenuItem>Sair</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>
        Main Content Here 
      </Box>
    </>
  );
}