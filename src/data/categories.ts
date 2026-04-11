import atypeBlack from "@/assets/atype-black.jpg";
import design3 from "@/assets/design-3.jpeg";
import siyahPolo from "@/assets/signature/siyah-polo.jpeg";

// Category cover images
export interface Category {
  id: string;
  name: string;
  description: string;
  coverImage: string;
}

export const categories: Category[] = [
  {
    id: "alpine-tee",
    name: "Alpine Tee",
    description: "Sadeliğin gücünü yansıtan tasarımlar",
    coverImage: atypeBlack,
  },
  {
    id: "hoodie",
    name: "Hoodie",
    description: "Dağların gücünü taşıyan konfor",
    coverImage: design3,
  },
  {
    id: "polo-tee",
    name: "Polo Tee",
    description: "Klasik form, modern ruh",
    coverImage: siyahPolo,
  },
];

// All products grouped by category
export interface CategoryProduct {
  id: string;
  name: string;
  image: string;
  images: string[]; // for carousel
}

// --- Alpine Tee products ---
import beyazTisort from "@/assets/signature/beyaz-tisort.png";
import beyazTisortDetay from "@/assets/signature/beyaz-tisort-detay.jpg";
import beyazTisortFlat from "@/assets/signature/beyaz-tisort-flat.jpg";
import siyahTisort from "@/assets/signature/siyah-tisort.png";
import siyahTisortDetay from "@/assets/signature/siyah-tisort-detay.jpg";
import siyahTisortFlat from "@/assets/signature/siyah-tisort-flat.jpg";
import atypeWhite from "@/assets/atype-white.jpg";
import coverLabel from "@/assets/essential/cover-label-v2.jpg";
import whiteEmbroidery1 from "@/assets/essential/white-embroidery-1.jpg";
import whiteEmbroidery2 from "@/assets/essential/white-embroidery-2.jpg";
import blackEmbroidery1 from "@/assets/essential/black-embroidery-1.jpg";
import blackEmbroidery2 from "@/assets/essential/black-embroidery-2.jpg";
import whiteCollection from "@/assets/essential/white-collection.png";
import blackCollection from "@/assets/essential/black-collection.png";
import atypeBlackDetail from "@/assets/essential/atype-black-detail.jpg";
import atypeWhiteDetail from "@/assets/essential/atype-white-detail.jpg";

// --- Hoodie products ---
import siyahHoodieV2 from "@/assets/signature/siyah-hoodie-v2.png";
import beyazHoodieV2 from "@/assets/signature/beyaz-hoodie-v2.png";
import siyahHoodie from "@/assets/signature/siyah-hoodie.png";
import beyazHoodie from "@/assets/signature/beyaz-hoodie.png";
import hoodieDesign2Black from "@/assets/signature/hoodie-design2-black.png";

// --- Polo products ---
import beyazPolo from "@/assets/signature/beyaz-polo.png";

export const categoryProducts: Record<string, CategoryProduct[]> = {
  "alpine-tee": [
    {
      id: "essential-tee-white",
      name: "Essential Tee — White",
      image: beyazTisort,
      images: [beyazTisort, beyazTisortDetay, beyazTisortFlat],
    },
    {
      id: "essential-tee-black",
      name: "Essential Tee — Black",
      image: siyahTisort,
      images: [siyahTisort, siyahTisortDetay, siyahTisortFlat],
    },
    {
      id: "essential-tee-label",
      name: "Essential Tee — Label Edition",
      image: coverLabel,
      images: [coverLabel, whiteEmbroidery1, whiteEmbroidery2, blackEmbroidery1, blackEmbroidery2, whiteCollection, blackCollection, atypeBlackDetail, atypeWhiteDetail],
    },
    {
      id: "alpine-tee-white",
      name: "Alpine Tee — White",
      image: atypeWhite,
      images: [atypeWhite],
    },
    {
      id: "alpine-tee-black",
      name: "Alpine Tee — Black",
      image: atypeBlack,
      images: [atypeBlack],
    },
  ],
  hoodie: [
    {
      id: "summit-hoodie-black",
      name: "Summit Hoodie — Black",
      image: siyahHoodieV2,
      images: [siyahHoodieV2, siyahHoodie, hoodieDesign2Black],
    },
    {
      id: "summit-hoodie-white",
      name: "Summit Hoodie — White",
      image: beyazHoodieV2,
      images: [beyazHoodieV2, beyazHoodie],
    },
  ],
  "polo-tee": [
    {
      id: "polo-black",
      name: "Polo Tee — Black",
      image: siyahPolo,
      images: [siyahPolo],
    },
    {
      id: "polo-white",
      name: "Polo Tee — White",
      image: beyazPolo,
      images: [beyazPolo],
    },
  ],
};
