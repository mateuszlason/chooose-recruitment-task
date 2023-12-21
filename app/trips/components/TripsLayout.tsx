import { ChakraComponent, Container, chakra } from "@chakra-ui/react";

export const TripsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <chakra.main
      minHeight="100vh"
      bgGradient="linear(to-b, gray.100, gray.200)"
      py={{ base: "10", md: "20" }}
    >
      <Container maxW="1440px">{children}</Container>
    </chakra.main>
  );
};
