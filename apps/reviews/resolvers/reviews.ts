interface Review {
  id: string;
  content: string;
  rating: number;
}

export default async function resolver() {
  const reviews: Review[] = [
    {
      id: "1",
      content: "Really fast",
      rating: 5,
    },
    {
      id: "2",
      content: "Best ever!",
      rating: 4,
    },
    {
      id: "3",
      content: "Great fit",
      rating: 3,
    },
  ];

  return reviews;
}
