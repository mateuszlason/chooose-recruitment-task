import { trips } from "@/mock-data/trips";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const requestedTripId = Number(params.id);
  if (!isNaN(requestedTripId)) {
    const trip = trips.find((trip) => trip.id === requestedTripId);
    if (!trip) {
      return Response.json(
        {
          error: "Resource not found",
          message: `A tour with an id of ${params.id} does not exist!`,
        },
        {
          status: 404,
        }
      );
    }
    return Response.json(trip, { status: 200 });
  }
  return Response.json(
    {
      error: "Bad request",
      message: `Provided trip id (${params.id}) is not a number.`,
    },
    { status: 400 }
  );
}
