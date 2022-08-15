import Head from "next/head";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction="column">
      <Head>
        <title>Carlo Bottaro</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Button
        mt={5}
        onClick={toggleColorMode}
        w={20}
        right="5"
        pos="absolute"
      >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
      <Content />
      <Spacer />
      <Footer />
    </Flex>
  );
}
