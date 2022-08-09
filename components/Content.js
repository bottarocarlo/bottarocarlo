import Image from "next/image";
import { Highlight, Heading, Text, Container, Stack } from "@chakra-ui/react";

const wavingemoji = ({ src, width, quality }) => {
  return `https://i.imgur.com/Pk7uuyH.png`;
};

const carlomemoji = ({ src, width, quality }) => {
  return `https://i.imgur.com/DExzkID.png`;
};

export default function Content() {
  return (
    <Stack ml={30} mr={30} alignItems="center">
      <Heading lineHeight="tall" mt="90px" fontSize="30" fontWeight="thin">
        <Highlight
          query={["Carlo", "Bottaro"]}
          styles={{
            px: "2",
            py: "2",
            fontFamily: "Monospace",
            p: "4px",
            bg: "white",
          }}
        >
          Hi there, I&apos;m Carlo Bottaro!
        </Highlight>
        <Image
          loader={wavingemoji}
          width={30}
          height={30}
          src="image-src"
          alt="carlo"
        />
      </Heading>
      <Text fontSize={20} ml={30} mt={50} mr={30}>
        I&apos;m a computer science engineer student at UniTn.
        <Image
          loader={carlomemoji}
          width={25}
          height={25}
          src="image-src"
          alt="carlo"
        />
      </Text>
    </Stack>
  );
}
