import Image from "next/image";
import {
  Highlight,
  Heading,
  Text,
  Container,
  Stack,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const wavingemoji = ({ src, width, quality }) => {
  return `https://i.imgur.com/Pk7uuyH.png`;
};

const carlomemoji = ({ src, width, quality }) => {
  return `https://i.imgur.com/DExzkID.png`;
};

export default function Content() {
  return (
    <Stack ml={30} mr={30}>
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
        I&apos;m a MSc Student in Computer Engineering | Cybersecurity at PoliTo.
        <Image
          loader={carlomemoji}
          width={25}
          height={25}
          src="image-src"
          alt="carlo"
        />
        <br /> I&apos;m passionate in Software Engineer and Cybersecurity enthusiast.
      </Text>
      <Spacer />

      <Button
        as="a"
        width="150px"
        leftIcon={<EmailIcon />}
        href="mailto:carlo.bottaro@studenti.unitn.it"
      >
        contact me
      </Button>
    </Stack>
  );
}
