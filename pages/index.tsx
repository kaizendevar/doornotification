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
} from '@chakra-ui/react';

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
            lineHeight={'110%'}>
            Door <br />
            <Text as={'span'} color={'green.400'}>
              Notification
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            ¡Avisá cuando estés en la puerta!
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Link href="/home">
              <Button
                colorScheme={'blue'}
                bg={'blue.400'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'blue.500',
                }}>
                Login with Google
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}