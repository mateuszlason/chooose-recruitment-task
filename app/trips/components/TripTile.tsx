import { Trip } from "@/mock-data/trips";
import { formatWeightInKg } from "@/utils/formatWeight";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Text,
  Flex,
  Heading,
  SimpleGrid,
  forwardRef,
  CardProps,
} from "@chakra-ui/react";
import { StarIcon } from "./StarIcon";
import Link from "next/link";

type TripTileType = { trip: Trip } & CardProps;

export const TripTile = forwardRef<TripTileType, "div">(
  ({ trip, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        rounded="3xl"
        color="white"
        textAlign="center"
        boxShadow="lg"
        bgImg={trip.photoUrl}
        bgPosition="center"
        bgSize="cover"
        border="14px solid"
        borderColor="white"
        {...props}
        maxW="500px"
        w="100%"
        mx="auto"
      >
        <SimpleGrid
          bgGradient="radial(blackAlpha.300,blackAlpha.900)"
          rounded="xl"
          height="100%"
        >
          <CardHeader pb="0">
            <Heading as="h2" mt="6" fontSize="26px" fontWeight="medium">
              {trip.title}
            </Heading>
            <Text
              fontSize="14px"
              mt="5px"
              color="whiteAlpha.900"
              fontWeight="500"
            >
              {trip.countries.length.toString()}{" "}
              {trip.countries.length > 1 ? "Countries" : "Country"}, {trip.days}{" "}
              Day{trip.days > 1 && "s"}
            </Text>
          </CardHeader>
          <CardBody py="0" alignSelf="end">
            <Button
              as={Link}
              href={`/trips/${trip.id}`}
              my="7"
              size="lg"
              fontWeight="normal"
              colorScheme="blue"
            >
              Learn more
            </Button>
            <Flex
              justify="space-between"
              bgColor="navy-blue"
              rounded="xl"
              p="4"
              maxW="330px"
              m="0 auto"
            >
              <Text>Emissions offset:</Text>
              <Text fontWeight="medium">
                {formatWeightInKg(trip.co2kilograms)}
              </Text>
            </Flex>
            <Flex
              alignSelf="flex-end"
              fontWeight="semibold"
              color="default-dark"
              bgColor="white"
              roundedTop="xl"
              maxW="350px"
              m="0 auto"
              justify="space-between"
              p="4"
              mt="10px"
            >
              <Text>Trip rating:</Text>
              <Flex gap="2" mt="auto">
                <Flex align="center" gap="1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <StarIcon
                      style={{
                        color:
                          idx + 1 <= Math.round(trip.rating)
                            ? "#f7d039"
                            : "#cccccc",
                      }}
                      key={`star-${idx}`}
                    />
                  ))}
                </Flex>
                {trip.rating}
              </Flex>
            </Flex>
          </CardBody>
        </SimpleGrid>
      </Card>
    );
  }
);
