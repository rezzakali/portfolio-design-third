/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { NavHashLink } from 'react-router-hash-link';
import './styles/navbar.css';

const Links = [
  {
    className: 'nav-link',
    to: '#home',
    name: 'Home',
  },
  {
    className: 'nav-link',
    to: '#projects',
    name: 'Projects',
  },
  {
    className: 'nav-link',
    to: '#technologies',
    name: 'Technologies',
  },
  {
    className: 'nav-link',
    to: '#about',
    name: 'About',
  },
];

export default function withAction() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          align="center"
          justify="center"
          height="60px"
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Portfolio</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link, id) => (
                <NavHashLink
                  key={id}
                  className={link.className}
                  smooth={true}
                  to={link.to}
                  style={{ padding: '10px 18px' }}
                  id="navItem"
                >
                  {link.name}
                </NavHashLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button onClick={toggleColorMode} mr={4}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <a
              href="https://github.com/rezzakali/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub
                size="2rem"
                style={{ paddingRight: '10px', marginRight: '10px' }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rezzak-ali-18149a1ab/"
              target="_blank"
              rel="noreferret"
            >
              <AiFillLinkedin
                size="2rem"
                style={{ paddingRight: '10px', marginRight: '10px' }}
              />
            </a>
            <a
              href="https://www.instagram.com/rezzak134/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram
                size="2rem"
                style={{ paddingRight: '10px', marginRight: '10px' }}
              />
            </a>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, id) => (
                <NavHashLink
                  key={id}
                  className={link.className}
                  smooth={true}
                  to={link.to}
                  style={{ padding: '10px 18px' }}
                  id="navItem"
                >
                  {link.name}
                </NavHashLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
