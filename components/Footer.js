import {
  ButtonGroup,
  Container,
  Flex,
  IconButton,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";



export default function Footer() {
  return (
   
      <Flex align="center" color="gray" w="100%" pos="fixed"  bottom={3} >
        <Text ml={10} fontSize='lg'>&copy; {new Date().getFullYear()} Bottaro Carlo</Text>
        <Spacer />
        <Stack align="right" 
        mr={30} >
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://linkedin.com/in/bottarocarlo<"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize= '1.5rem' />}
            />
            <IconButton
              as="a"
              href="https://github.com/bottarocarlo"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.5rem" />}
            />
            <IconButton
              as="a"
              href="https://twitter.com/bottarlo"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.5rem" />}
            />
            <IconButton
              as="a"
              href="https://www.instagram.com/carlo_bottaro/"
              aria-label="Instagram"
              icon={<FaInstagram fontSize="1.5rem" />}
            />
          </ButtonGroup>
        </Stack>
      </Flex>
    
  );
}
