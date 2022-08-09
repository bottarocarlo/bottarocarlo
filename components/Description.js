import Image from "next/image";

import { Text } from "@chakra-ui/react";

const sanityIoImageLoader = ({ src, width, quality }) => {
  return `https://i.imgur.com/DExzkID.png`;
};

export default function Description() {
  return (
    <Text fontSize={20} ml={30} mt={50} mr={30}>
      I&apos;m a computer science engineer student at UniTn.
      <Image
        loader={sanityIoImageLoader}
        width={25}
        height={25}
        src="image-src"
        alt="waving"
      />
    </Text>
  );
}
