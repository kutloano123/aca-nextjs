"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const categoryNames: Record<number, string> = {
  1: "Haircuts",
  2: "Braids & Styles",
  3: "Coloring",
};

export default function HairstylesPage() {
  const [hairstylesData, setHairstylesData] = useState<Record<number, { id: number; name: string; img: string }[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/hairstyles")
      .then((res) => res.json())
      .then((data) => {
        setHairstylesData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch hairstyles:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading categories...</p>;

  const categories = Object.keys(hairstylesData).map(Number);

  return (
    <div className="hairstyles-container">
      <h1>Hairstyle Categories</h1>
      <p>Click a category to view the styles:</p>
      <div className="categories-grid">
        {categories.map((id) => (
          <Link key={id} href={`/Hairstyles/category/${id}`}>
            <button className="category-button">{categoryNames[id] || `Category ${id}`}</button>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .categories-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1rem;
        }
        .category-button {
          background-color: #d6336c;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.2s;
        }
        .category-button:hover {
          background-color: #b12a55;
        }
      `}</style>
    </div>
  );
}
