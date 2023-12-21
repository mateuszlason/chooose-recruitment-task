import { wait } from "./wait";
import { Trip } from "@/mock-data/trips";
import axios from "axios";

const nextApi = axios.create({
  baseURL: "/api",
});

export async function getTripById(id: number): Promise<Trip> {
  await wait(2);
  return await nextApi.get(`/trip/${id}`).then((res) => res.data);
}

export async function getPagedTrips(page: number): Promise<Trip[] | []> {
  await wait(1.5);
  return nextApi.get(`/trips?page=${page}`).then((res) => res.data);
}

export async function getAllTrips(): Promise<Trip[]> {
  await wait(2);
  return nextApi.get("/trips").then((res) => res.data);
}
