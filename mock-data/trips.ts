export interface Trip {
  id: number;
  photoUrl: string;
  title: string;
  subtitle: string;
  countries: string[];
  days: number;
  co2kilograms: number;
  rating: number;
  description: string;
  advantages: { title: string; description: string }[];
}
export const trips: Trip[] = [
  {
    id: 1,
    photoUrl: "https://picsum.photos/780/380?random=1",
    title: "European Quest",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: [
      "Norway",
      "Poland",
      "Germany",
      "Austria",
      "Italy",
      "Switzerland",
      "France",
      "Spain",
    ],
    days: 21,
    co2kilograms: 4010.56,
    rating: 4.7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 2,
    photoUrl: "https://picsum.photos/780/380?random=2",
    title: "Autumn Roadtrip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Norway", "Finland", "Sweden"],
    days: 7,
    co2kilograms: 1560.5,
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 3,
    photoUrl: "https://picsum.photos/780/380?random=3",
    title: "Diving adventure in Egypt",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Egypt"],
    days: 7,
    co2kilograms: 810,
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 4,
    photoUrl: "https://picsum.photos/780/380?random=4",
    title: "Backpacking through Europe",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Poland", "Czechia", "Austria", "Slovenia", "Croatia"],
    days: 30,
    co2kilograms: 710.6843,
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 5,
    photoUrl: "https://picsum.photos/780/380?random=5",
    title: "American Dream",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["United States"],
    days: 60,
    co2kilograms: 3510.6843,
    rating: 2.7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 6,
    photoUrl: "https://picsum.photos/780/380?random=6",
    title: "Spontaneous Rome visit",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Italy"],
    days: 1,
    co2kilograms: 330,
    rating: 4.4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 7,
    photoUrl: "https://picsum.photos/780/380?random=7",
    title: "Adventurous Asia trip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["South Korea", "Thailand", "Malysia", "Japan", "China"],
    days: 28,
    co2kilograms: 5782.56737,
    rating: 4.6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 8,
    photoUrl: "https://picsum.photos/780/380?random=8",
    title: "Australia in December",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Australia"],
    days: 9,
    co2kilograms: 1463,
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 9,
    photoUrl: "https://picsum.photos/780/380?random=9",
    title: "South America trip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Brazil", "Colombia", "Peru", "Argentina"],
    days: 16,
    co2kilograms: 2584.5737,
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 10,
    photoUrl: "https://picsum.photos/780/380?random=10",
    title: "Safari tour",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Kenya"],
    days: 3,
    co2kilograms: 904,
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 11,
    photoUrl: "https://picsum.photos/780/380?random=11",
    title: "Chillout in Africa",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Egypt", "Libya", "Tunisia"],
    days: 3,
    co2kilograms: 1064.436,
    rating: 4.1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 12,
    photoUrl: "https://picsum.photos/780/380?random=12",
    title: "Beautiful Iceland roadtrip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Iceland"],
    days: 14,
    co2kilograms: 2465.168,
    rating: 4.9,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 13,
    photoUrl: "https://picsum.photos/780/380?random=13",
    title: "Weekend in Paris",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["France"],
    days: 2,
    co2kilograms: 665,
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 14,
    photoUrl: "https://picsum.photos/780/380?random=14",
    title: "South Asia trip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["India", "Nepal", "Sri Lanka"],
    days: 9,
    co2kilograms: 2265,
    rating: 3.6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 15,
    photoUrl: "https://picsum.photos/780/380?random=15",
    title: "Islands visit",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["United Kingdom", "Ireland"],
    days: 7,
    co2kilograms: 1737,
    rating: 2.3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 16,
    photoUrl: "https://picsum.photos/780/380?random=16",
    title: "European Quest",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: [
      "Norway",
      "Poland",
      "Germany",
      "Austria",
      "Italy",
      "Switzerland",
      "France",
      "Spain",
    ],
    days: 21,
    co2kilograms: 4010.56,
    rating: 4.7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 17,
    photoUrl: "https://picsum.photos/780/380?random=17",
    title: "Autumn Roadtrip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Norway", "Finland", "Sweden"],
    days: 7,
    co2kilograms: 1560.5,
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 18,
    photoUrl: "https://picsum.photos/780/380?random=18",
    title: "Diving adventure in Egypt",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Egypt"],
    days: 7,
    co2kilograms: 810,
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 19,
    photoUrl: "https://picsum.photos/780/380?random=19",
    title: "Backpacking through Europe",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Poland", "Czechia", "Austria", "Slovenia", "Croatia"],
    days: 30,
    co2kilograms: 710.6843,
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 20,
    photoUrl: "https://picsum.photos/780/380?random=20",
    title: "American Dream",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["United States"],
    days: 60,
    co2kilograms: 3510.6843,
    rating: 2.7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 21,
    photoUrl: "https://picsum.photos/780/380?random=21",
    title: "Spontaneous Rome visit",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Italy"],
    days: 1,
    co2kilograms: 330,
    rating: 4.4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 22,
    photoUrl: "https://picsum.photos/780/380?random=22",
    title: "Adventurous Asia trip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["South Korea", "Thailand", "Malysia", "Japan", "China"],
    days: 28,
    co2kilograms: 5782.56737,
    rating: 4.6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 23,
    photoUrl: "https://picsum.photos/780/380?random=23",
    title: "Australia in December",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Australia"],
    days: 9,
    co2kilograms: 1463,
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 24,
    photoUrl: "https://picsum.photos/780/380?random=24",
    title: "South America trip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Brazil", "Colombia", "Peru", "Argentina"],
    days: 16,
    co2kilograms: 2584.5737,
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 25,
    photoUrl: "https://picsum.photos/780/380?random=25",
    title: "Safari tour",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Kenya"],
    days: 3,
    co2kilograms: 904,
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 26,
    photoUrl: "https://picsum.photos/780/380?random=26",
    title: "Chillout in Africa",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Egypt", "Libya", "Tunisia"],
    days: 3,
    co2kilograms: 1064.436,
    rating: 4.1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 27,
    photoUrl: "https://picsum.photos/780/380?random=27",
    title: "Beautiful Iceland roadtrip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Iceland"],
    days: 14,
    co2kilograms: 2465.168,
    rating: 4.9,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 28,
    photoUrl: "https://picsum.photos/780/380?random=28",
    title: "Weekend in Paris",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["France"],
    days: 2,
    co2kilograms: 665,
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 29,
    photoUrl: "https://picsum.photos/780/380?random=29",
    title: "Islands visit",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["United Kingdom", "Ireland"],
    days: 7,
    co2kilograms: 1737,
    rating: 3.6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 30,
    photoUrl: "https://picsum.photos/780/380?random=30",
    title: "South Asia trip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["India", "Nepal", "Sri Lanka"],
    days: 9,
    co2kilograms: 2265,
    rating: 3.6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 31,
    photoUrl: "https://picsum.photos/780/380?random=31",
    title: "European Quest",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: [
      "Norway",
      "Poland",
      "Germany",
      "Austria",
      "Italy",
      "Switzerland",
      "France",
      "Spain",
    ],
    days: 21,
    co2kilograms: 4010.56,
    rating: 4.7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 32,
    photoUrl: "https://picsum.photos/780/380?random=32",
    title: "Autumn Roadtrip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Norway", "Finland", "Sweden"],
    days: 7,
    co2kilograms: 1560.5,
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 33,
    photoUrl: "https://picsum.photos/780/380?random=33",
    title: "Diving adventure in Egypt",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Egypt"],
    days: 7,
    co2kilograms: 810,
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 34,
    photoUrl: "https://picsum.photos/780/380?random=34",
    title: "Backpacking through Europe",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Poland", "Czechia", "Austria", "Slovenia", "Croatia"],
    days: 30,
    co2kilograms: 710.6843,
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 35,
    photoUrl: "https://picsum.photos/780/380?random=35",
    title: "American Dream",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["United States"],
    days: 60,
    co2kilograms: 3510.6843,
    rating: 2.7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 36,
    photoUrl: "https://picsum.photos/780/380?random=36",
    title: "Spontaneous Rome visit",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Italy"],
    days: 1,
    co2kilograms: 330,
    rating: 4.4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 37,
    photoUrl: "https://picsum.photos/780/380?random=37",
    title: "Adventurous Asia trip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["South Korea", "Thailand", "Malysia", "Japan", "China"],
    days: 28,
    co2kilograms: 5782.56737,
    rating: 4.6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 38,
    photoUrl: "https://picsum.photos/780/380?random=38",
    title: "Australia in December",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Australia"],
    days: 9,
    co2kilograms: 1463,
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 39,
    photoUrl: "https://picsum.photos/780/380?random=39",
    title: "South America trip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Brazil", "Colombia", "Peru", "Argentina"],
    days: 16,
    co2kilograms: 2584.5737,
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 40,
    photoUrl: "https://picsum.photos/780/380?random=40",
    title: "Safari tour",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Kenya"],
    days: 3,
    co2kilograms: 904,
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 41,
    photoUrl: "https://picsum.photos/780/380?random=41",
    title: "Chillout in Africa",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Egypt", "Libya", "Tunisia"],
    days: 3,
    co2kilograms: 1064.436,
    rating: 4.1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 42,
    photoUrl: "https://picsum.photos/780/380?random=42",
    title: "Beautiful Iceland roadtrip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Iceland"],
    days: 14,
    co2kilograms: 2465.168,
    rating: 4.9,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 43,
    photoUrl: "https://picsum.photos/780/380?random=43",
    title: "Weekend in Paris",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["France"],
    days: 2,
    co2kilograms: 665,
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 44,
    photoUrl: "https://picsum.photos/780/380?random=44",
    title: "South Asia trip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["India", "Nepal", "Sri Lanka"],
    days: 9,
    co2kilograms: 2265,
    rating: 3.6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 45,
    photoUrl: "https://picsum.photos/780/380?random=45",
    title: "Islands visit",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["United Kingdom", "Ireland"],
    days: 7,
    co2kilograms: 1737,
    rating: 2.3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 46,
    photoUrl: "https://picsum.photos/780/380?random=46",
    title: "European Quest",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: [
      "Norway",
      "Poland",
      "Germany",
      "Austria",
      "Italy",
      "Switzerland",
      "France",
      "Spain",
    ],
    days: 21,
    co2kilograms: 4010.56,
    rating: 4.7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 47,
    photoUrl: "https://picsum.photos/780/380?random=47",
    title: "Autumn Roadtrip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Norway", "Finland", "Sweden"],
    days: 7,
    co2kilograms: 1560.5,
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 48,
    photoUrl: "https://picsum.photos/780/380?random=48",
    title: "Diving adventure in Egypt",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Egypt"],
    days: 7,
    co2kilograms: 810,
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 49,
    photoUrl: "https://picsum.photos/780/380?random=49",
    title: "Backpacking through Europe",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Poland", "Czechia", "Austria", "Slovenia", "Croatia"],
    days: 30,
    co2kilograms: 710.6843,
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 50,
    photoUrl: "https://picsum.photos/780/380?random=50",
    title: "American Dream",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["United States"],
    days: 60,
    co2kilograms: 3510.6843,
    rating: 2.7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 51,
    photoUrl: "https://picsum.photos/780/380?random=51",
    title: "Spontaneous Rome visit",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Italy"],
    days: 1,
    co2kilograms: 330,
    rating: 4.4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 52,
    photoUrl: "https://picsum.photos/780/380?random=52",
    title: "Adventurous Asia trip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["South Korea", "Thailand", "Malysia", "Japan", "China"],
    days: 28,
    co2kilograms: 5782.56737,
    rating: 4.6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 53,
    photoUrl: "https://picsum.photos/780/380?random=53",
    title: "Australia in December",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Australia"],
    days: 9,
    co2kilograms: 1463,
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 54,
    photoUrl: "https://picsum.photos/780/380?random=54",
    title: "South America trip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Brazil", "Colombia", "Peru", "Argentina"],
    days: 16,
    co2kilograms: 2584.5737,
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 55,
    photoUrl: "https://picsum.photos/780/380?random=55",
    title: "Safari tour",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Kenya"],
    days: 3,
    co2kilograms: 904,
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 56,
    photoUrl: "https://picsum.photos/780/380?random=56",
    title: "Chillout in Africa",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Egypt", "Libya", "Tunisia"],
    days: 3,
    co2kilograms: 1064.436,
    rating: 4.1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 57,
    photoUrl: "https://picsum.photos/780/380?random=57",
    title: "Beautiful Iceland roadtrip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Iceland"],
    days: 14,
    co2kilograms: 2465.168,
    rating: 4.9,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 58,
    photoUrl: "https://picsum.photos/780/380?random=58",
    title: "Weekend in Paris",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["France"],
    days: 2,
    co2kilograms: 665,
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 59,
    photoUrl: "https://picsum.photos/780/380?random=59",
    title: "Islands visit",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["United Kingdom", "Ireland"],
    days: 7,
    co2kilograms: 1737,
    rating: 3.6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 60,
    photoUrl: "https://picsum.photos/780/380?random=60",
    title: "South Asia trip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["India", "Nepal", "Sri Lanka"],
    days: 9,
    co2kilograms: 2265,
    rating: 3.6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 61,
    photoUrl: "https://picsum.photos/780/380?random=61",
    title: "European Quest",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: [
      "Norway",
      "Poland",
      "Germany",
      "Austria",
      "Italy",
      "Switzerland",
      "France",
      "Spain",
    ],
    days: 21,
    co2kilograms: 4010.56,
    rating: 4.7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 62,
    photoUrl: "https://picsum.photos/780/380?random=62",
    title: "Autumn Roadtrip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Norway", "Finland", "Sweden"],
    days: 7,
    co2kilograms: 1560.5,
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 63,
    photoUrl: "https://picsum.photos/780/380?random=63",
    title: "Diving adventure in Egypt",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Egypt"],
    days: 7,
    co2kilograms: 810,
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 64,
    photoUrl: "https://picsum.photos/780/380?random=64",
    title: "Backpacking through Europe",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Poland", "Czechia", "Austria", "Slovenia", "Croatia"],
    days: 30,
    co2kilograms: 710.6843,
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 65,
    photoUrl: "https://picsum.photos/780/380?random=65",
    title: "American Dream",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["United States"],
    days: 60,
    co2kilograms: 3510.6843,
    rating: 2.7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 66,
    photoUrl: "https://picsum.photos/780/380?random=66",
    title: "Spontaneous Rome visit",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Italy"],
    days: 1,
    co2kilograms: 330,
    rating: 4.4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 67,
    photoUrl: "https://picsum.photos/780/380?random=67",
    title: "Adventurous Asia trip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["South Korea", "Thailand", "Malysia", "Japan", "China"],
    days: 28,
    co2kilograms: 5782.56737,
    rating: 4.6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 68,
    photoUrl: "https://picsum.photos/780/380?random=68",
    title: "Australia in December",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Australia"],
    days: 9,
    co2kilograms: 1463,
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 69,
    photoUrl: "https://picsum.photos/780/380?random=69",
    title: "South America trip",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Brazil", "Colombia", "Peru", "Argentina"],
    days: 16,
    co2kilograms: 2584.5737,
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
  {
    id: 70,
    photoUrl: "https://picsum.photos/780/380?random=70",
    title: "Safari tour",
    subtitle: "Lorem ipsum dolor sit amet",
    countries: ["Kenya"],
    days: 3,
    co2kilograms: 904,
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
    advantages: [
      {
        title: "1st advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "2nd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "3rd advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
      {
        title: "4th advantage",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
      },
    ],
  },
];
