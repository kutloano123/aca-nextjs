"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Hairstyle = { id: number; name: string; img: string };

export default function CategoryPage() {
  const params = useParams();
  const categoryId = Number(params.id);

  const [hairstyles, setHairstyles] = useState<Hairstyle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/hairstyles")
      .then((res) => res.json())
      .then((data) => {
        setHairstyles(data[categoryId] || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch hairstyles:", err);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) return <p>Loading hairstyles...</p>;

  return (
    <div className="hairstyles-container">
      <h1>Hairstyles</h1>
      <p>Explore the styles in this category.</p>

      {hairstyles.length === 0 && <p>No hairstyles found.</p>}

      <div className="hairstyles-grid">
        {hairstyles.map((style) => (
          <div key={style.id} className="hairstyle-card">
            <Image
              src={style.img}
              alt={style.name}
              width={400}
              height={300}
              style={{ borderBottom: "1px solid #ddd", borderRadius: "0.75rem 0.75rem 0 0" }}
            />
            <h3>{style.name}</h3>
          </div>
        ))}
      </div>

      <Link
        href="/Hairstyles"
        style={{ marginTop: "2rem", display: "inline-block", color: "#d6336c" }}
      >
        ← Back to Categories
      </Link>
    </div>
  );
}
