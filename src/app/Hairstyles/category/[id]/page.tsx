"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

const hairstylesData: Record<number, { id: number; name: string; img: string }[]> = {
  1: [
     { id: 1, name: "Low Taper Fade", img: "/images/low_taper_fade.jpg" },
    { id: 2, name: "Buzz Cut", img: "/images/buzz_cut.jpg" },
  ],
  2: [
    { id: 3, name: "Box Braids", img: "/images/box_braids.jpg" },
    { id: 4, name: "Cornrows", img: "/images/cornrows.jpg" },
  ],
  3: [
    { id: 5, name: "Balayage", img: "/images/coloring/balayage.jpg" },
    { id: 6, name: "Highlights", img: "/images/coloring/highlights.jpg" },
  ],
};

export default function CategoryPage() {
  const params = useParams();
  const categoryId = Number(params.id);
  const hairstyles = hairstylesData[categoryId] || [];

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
