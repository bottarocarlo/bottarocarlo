import { Box, Center, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import waving from "../images/waving.png";
import memoji from "../images/memoji.jpeg";
import Head from "next/head";
import { Divider, Stack } from "@chakra-ui/react";
import Header from "../components/Header";
import Description from "../components/Description";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carlo Bottaro</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Description />

    </div>
  );
}
