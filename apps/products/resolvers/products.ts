interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  sku: string;
}

export default async function resolver() {
  const products: Product[] = [
    {
      id: "1",
      title: "Nike Running Shoe",
      description: "Really fast",
      price: 100,
    },
    {
      id: "2",
      title: "Adidas Running Shoe",
      description: "Extremely fast",
      price: 120,
    },
    {
      id: "3",
      title: "Hoka Running Shoe",
      description: "Insanely fast",
      price: 140,
    },
  ];

  return products;
}
