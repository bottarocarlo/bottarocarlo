import Image from "next/image";
import { Highlight, Heading } from "@chakra-ui/react";

const sanityIoImageLoader = ({ src, width, quality }) => {
  return `https://i.imgur.com/Pk7uuyH.png`;
};

export default function Header() {
  return (
    <Heading
      lineHeight="tall"
      mt={50}
      ml={30}
      mr={30}
      fontSize="30"
      textAlign={["left "]}
      fontWeight="thin"
    >
      <Highlight
        query={["Carlo", "Bottaro"]}
        styles={{ px: "2", py: "2", fontFamily: "Monospace", p: "4px" }}
      >
        Hi there, I&apos;m Carlo Bottaro!
      </Highlight>

      <Image
        loader={sanityIoImageLoader}
        width={30}
        height={30}
        src="image-src"
        alt="carlo"
      />
    </Heading>
  );
}
