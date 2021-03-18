import Head from 'next/head';
import Link from 'next/link';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  createIcon,
  Icon
} from '@chakra-ui/react';
import { GoLocation } from "react-icons/go";
import { ImSad } from "react-icons/im";
import { BsBell } from "react-icons/bs";

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'180%'}>
            <Text as={'span'} color={'green.400'}>
              Door Notification
            </Text> <br />
            ¿Llegaste?
          </Heading>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Box pt={6}>
              <Icon as={GoLocation} />
            </Box>
            <Text color={'gray.500'} marginTop={0}>
              Enrique Martinez 525
            </Text>      
            <Link href="/home-inside">
              <Button
                colorScheme={'green'}
                variant="outline"
                marginBottom={6}
                px={6}
                _hover={{
                  bg: 'green.500',
                }}>
                Estoy en la puerta <Icon as={BsBell} ml={2} />
              </Button>
            </Link>            
          </Stack>
        </Stack>
      </Container>
    </>
  );
}