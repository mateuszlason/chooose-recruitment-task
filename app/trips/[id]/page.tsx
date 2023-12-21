"use client";

import { useQuery as useReactQuery } from "@tanstack/react-query";
import { TripsLayout } from "../components/TripsLayout";
import { getTripById } from "@/utils/apiRequests";
import { QUERY_KEY_TRIP } from "@/constants";
import {
  AspectRatio,
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  ListItem,
  SimpleGrid,
  Spinner,
  Stack,
  StackDivider,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { formatWeightInKg } from "@/utils/formatWeight";
import { FlagIcon } from "./components/FlagIcon";
import { GlobeIcon } from "./components/GlobeIcon";
import { PeopleIcon } from "./components/PeopleIcon";
import { WorkIcon } from "./components/WorkIcon";

export default function TripDetails({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const {
    data: trip,
    isFetching,
    error,
  } = useReactQuery({
    queryKey: [QUERY_KEY_TRIP, id],
    queryFn: () => getTripById(id),
  });
  if (error) notFound();
  const iconsArray = [
    <FlagIcon key="flag-iccon" />,
    <GlobeIcon key="globe-icon" />,
    <PeopleIcon key="people-icon" />,
    <WorkIcon key="work-icon" />,
  ];
  return (
    <TripsLayout>
      {isFetching && !trip && (
        <Center>
          <Spinner
            m="10 auto"
            thickness="6px"
            speed="0.65s"
            emptyColor="white"
            size="xl"
          />
        </Center>
      )}
      {!!trip && (
        <Box maxW={{ base: "container.lg", xl: "unset" }} mx="auto">
          <Stack>
            <ChakraLink as={Link} href="/trips" textDecor="underline">
              Go Back
            </ChakraLink>
            <Heading mt={{ base: "10", md: "16" }} as="h1">
              {trip.title}
            </Heading>
            <Text fontWeight="medium" mb={{ base: "6", md: "10" }}>
              {trip.subtitle}
            </Text>
          </Stack>
          <Flex
            flexDir={{ base: "column", xl: "row" }}
            color="default-dark"
            gap={{ base: "10", xl: "20" }}
          >
            <Box order={{ base: 1, xl: 0 }}>
              {/* Aspect Ratio prevents layout shift, couldn't make it work with Image 'fallback' prop */}
              <AspectRatio
                bgGradient="radial(blackAlpha.100,blackAlpha.200)"
                ratio={39 / 19}
                rounded="2xl"
                overflow="hidden"
              >
                <Image
                  w="100%"
                  mb="10"
                  src={trip.photoUrl}
                  alt={`'${trip.title}' trip featured image`}
                />
              </AspectRatio>
              <Heading mb="6" mt="10" as="h2" size="md" fontWeight="semibold">
                Overview
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
                {trip.advantages.map((adv, idx) => (
                  <Flex gap="5" key={`adventage-no-${idx + 1}`}>
                    <Box w="16">{iconsArray[idx]}</Box>
                    <Stack spacing={1}>
                      <Heading mt={1} as="h3" size="md" fontWeight="semibold">
                        {adv.title}
                      </Heading>
                      <Text>{adv.description}</Text>
                    </Stack>
                  </Flex>
                ))}
              </SimpleGrid>
              <Divider my="8" borderColor="blackAlpha.400" />
              <Text fontWeight="medium">{trip.description}</Text>
            </Box>
            <Stack
              border="1px"
              borderColor="gray.200"
              alignSelf="flex-start"
              minW={{ md: "410px" }}
              w="100%"
              maxW="410px"
              bgColor="white"
              rounded="xl"
              p={{ base: "6", md: "8" }}
              boxShadow="base"
              divider={<StackDivider borderColor="gray.200" />}
              fontWeight="medium"
              gap="4"
              order={{ base: 0, xl: 1 }}
            >
              <Box>
                <Text fontSize="2xl" fontWeight="bold" mb="1">
                  {trip.days} Day{trip.days > 1 && "s"}
                </Text>
                <Text>Emissions: {formatWeightInKg(trip.co2kilograms)}</Text>
              </Box>
              <Box>
                <Text mb="2">Countries included:</Text>
                <UnorderedList
                  display="grid"
                  gap="2"
                  gridTemplateColumns="1fr 1fr"
                  fontWeight="normal"
                >
                  {trip.countries.map((country) => (
                    <ListItem key={country}>{country}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </Stack>
          </Flex>
        </Box>
      )}
    </TripsLayout>
  );
}
