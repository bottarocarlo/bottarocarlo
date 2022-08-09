import Head from "next/head";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction="column">
      <Head>
        <title>Carlo Bottaro</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <IconButton
        mt={4}
        aria-label="Toggle Mode"
        onClick={toggleColorMode}
        pos="fixed"
        right="30px"
      >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </IconButton>
      <Content />
      <Spacer />
      <Footer />
    </Flex>
  );
}
