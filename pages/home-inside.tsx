import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon 
} from '@chakra-ui/react';
import { GoLocation } from "react-icons/go";
import { ImSad } from "react-icons/im";
import { GiHand } from "react-icons/gi";
import Image from 'next/image';

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
          alignItems="center"
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 2 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '4xl' }}
            lineHeight={'180%'}>
            <Text as={'span'} color={'green.400'}>
              Door Notification
            </Text> <br />
            ¡Hay alguien en la puerta! <br />
            <Box boxSize="sm" borderRadius="md" alignItems="center" marginLeft={6} marginTop={10} height={300}>
              <Image 
                src="/openmeplease.jpg"
                alt="Picture of the author"
                width={300}
                height={300}
              />
            </Box>
          </Heading>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Box>
              <Icon as={GoLocation} />
            </Box>
            <Text color={'gray.500'} marginTop={0}>
              Enrique Martinez 525
            </Text>                  
            <Button
              colorScheme={'green'}
              variant="outline"
              marginBottom={6}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Voy a abrir <Icon as={GiHand} ml={2} />
            </Button>
            <Button
              colorScheme={'gray'}
              variant="outline"
              px={6}
              _hover={{
                bg: 'gray.500',
              }}>
              Estoy en una reunión <Icon as={ImSad} ml={2} />
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}