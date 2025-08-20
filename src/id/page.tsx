interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <h1 className="text-2xl font-semibold">Product ID: {params.id}</h1>
  );
}
