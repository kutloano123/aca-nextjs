import { NextResponse } from "next/server";

// In-memory “database” of hairstyles by category
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

// GET: fetch all hairstyles
export async function GET() {
  return NextResponse.json(hairstylesData);
}

// POST: add a new hairstyle
export async function POST(req: Request) {
  try {
    const { categoryId, name, img } = await req.json();

    if (!categoryId || !name || !img) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Make a new hairstyle object
    const category = hairstylesData[categoryId] || [];
    const newId = category.length > 0 ? category[category.length - 1].id + 1 : 1;
    const newHairstyle = { id: newId, name, img };

    // Add it to the category array
    if (!hairstylesData[categoryId]) {
      hairstylesData[categoryId] = [];
    }
    hairstylesData[categoryId].push(newHairstyle);

    return NextResponse.json({ message: "Hairstyle added", hairstyle: newHairstyle });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
