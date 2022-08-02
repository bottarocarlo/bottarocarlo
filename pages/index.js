import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Text } from "@chakra-ui/react"

const sanityIoImageLoader = ({ src, width, quality }) => {
  return `https://pressappoco.it/mappa.svg`;
};

export default function Home() {
  return (
    <Box>
      <Image
        loader={sanityIoImageLoader}
        src="image-src"
        alt="bg"
        width={600}
        height={600}
        layout="fill"
        objectFit="cover"
      />
      <Text fontSize="28" textAlign={[ 'center' ]} fontWeight="bold">
      Hi there, I'm Carlo
      </Text>
      <Text>
       
      </Text>
    </Box>
  );
}
