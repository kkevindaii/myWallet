import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import NextLink from "next/link";
import React from 'react';

// import Web3 from 'web3';

// const web3 = new Web3("https://cloudflare-eth.com")
// web3.eth.getBlockNumber(function (error, result) {
//   console.log(result)
// })

const Index = () => (
  <Flex zIndex={1} position="sticky" top={0} bg="gray" p={4} align="center">
    <Flex flex={1} m="auto" align="center" maxW={2400}>
      <NextLink href="/">
        <Link>
          <Heading>myWallet</Heading>
        </Link>
      </NextLink>
      <Box ml={"auto"}>
        <Flex align="center">
          <Link>Login/Network?</Link>
        </Flex>
      </Box>
    </Flex>
  </Flex>

);

export default Index
