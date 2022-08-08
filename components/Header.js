import Image from "next/image";
import waving from "../images/waving.png";
import {  Highlight, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
      <Heading lineHeight="tall" mt={50} ml={30} mr={30} fontSize="30" textAlign={["left "]} fontWeight="thin">
        <Highlight
          query={["Carlo", "Bottaro"]}
          
          styles={{ px: "2", py: "2", fontFamily:"Monospace" ,p:"4px"}}
        >
          Hi there, I&apos;m Carlo Bottaro!
        </Highlight>

        <Image src={waving} width={30} height={30} />
      </Heading>
  );
}
