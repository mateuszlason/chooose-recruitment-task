import { trips } from "@/mock-data/trips";

export const tripsPerPage = 6;
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");

  if (!page) {
    return Response.json(trips, { status: 200 });
  }

  const validPageNumber = !isNaN(Number(page));
  if (validPageNumber) {
    const parsedPageNumber = Number(page);
    const pagedTripsResponse = await trips.slice(
      parsedPageNumber === 1 ? 0 : (parsedPageNumber - 1) * tripsPerPage,
      tripsPerPage * parsedPageNumber
    );
    return Response.json(pagedTripsResponse, { status: 200 });
  }

  return Response.json(
    {
      error: "Invalid page number parameter.",
      message: "Provided 'page' parameter is not a valid number.",
    },
    {
      status: 400,
    }
  );
}
