"use client";

import { QUERY_KEY_TRIPS } from "@/constants";
import { getPagedTrips } from "@/utils/apiRequests";
import { useInfiniteQuery } from "@tanstack/react-query";
import { tripsPerPage } from "../api/trips/route";
import { SimpleGrid, Spinner, Flex } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { TripTile } from "./components/TripTile";
import { TripsLayout } from "./components/TripsLayout";

export default function Home() {
  const { ref, inView: tripTileInView } = useInView();
  const { hasNextPage, data, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: QUERY_KEY_TRIPS,
    queryFn: ({ pageParam }) => getPagedTrips(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length < tripsPerPage ? null : allPages.length + 1;
    },
  });
  const tripsExist = Array.isArray(data?.pages) && data.pages.length > 0;
  const trips = data?.pages.map((page, pageIdx) =>
    page.map((trip, tripIdx) => {
      if (pageIdx + 1 === data.pages.length && tripIdx + 1 === page.length) {
        return <TripTile ref={ref} trip={trip} key={`trip-${trip.id}`} />;
      }
      return <TripTile trip={trip} key={`trip-${trip.id}`} />;
    })
  );

  useEffect(() => {
    if (tripTileInView && hasNextPage) fetchNextPage();
  }, [tripTileInView, fetchNextPage, hasNextPage]);

  return (
    <TripsLayout>
      {tripsExist && (
        <SimpleGrid
          gap={6}
          gridTemplateColumns={{
            sm: "repeat(auto-fill, minmax(400px, 1fr))",
          }}
          justifyContent="center"
        >
          {trips}
        </SimpleGrid>
      )}
      {isFetching && (
        <Flex
          color="default-dark"
          fontWeight="medium"
          align="center"
          justify="center"
          my="14"
          gap="3"
        >
          <Spinner thickness="6px" speed="0.65s" emptyColor="white" size="xl" />
          Loading trips...
        </Flex>
      )}
    </TripsLayout>
  );
}
