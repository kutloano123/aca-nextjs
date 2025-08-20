import Link from "next/link";

export default function Hairstyles() {
  const categories = [
    { id: 1, name: "Haircuts" },
    { id: 2, name: "Braids & Styles" },
    { id: 3, name: "Coloring" },
  ];

  return (
    <div className="hairstyles-container">
      <h1>Our Salon Styles</h1>
      <p>Choose a category to explore different hairstyles.</p>

      <div className="categories-grid">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/Hairstyles/category/${cat.id}`}
            className="category-card"
          >
            <h2>{cat.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
