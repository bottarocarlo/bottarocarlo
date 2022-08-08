import Image from "next/image";
import memoji from "../images/memoji.jpeg";

import {
  Text
} from "@chakra-ui/react";

export default function Description() {
  return (
    <Text fontSize={20} ml={30} mt={50} mr={30}>
      
        I&apos;m a computer science engineer student at UniTn.
        <Image src={memoji} width={25} height={25} />
      
    </Text>
  );
}
