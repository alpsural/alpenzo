import tshirtCover from "@/assets/tshirt-cover.jpg";
import design3 from "@/assets/design-3.jpeg";
import productSweatshirt from "@/assets/product-sweatshirt.jpg";
import signatureLogo from "@/assets/alpenzo-signature.png";

export interface Category {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  route?: string; // custom route override
}

export const categories: Category[] = [
  {
    id: "tshirt",
    name: "T-Shirt",
    description: "Sadeliğin gücünü yansıtan tasarımlar",
    coverImage: tshirtCover,
  },
  {
    id: "sweatshirt",
    name: "Sweatshirt",
    description: "Zamansız zarafet, üstün kalite",
    coverImage: productSweatshirt,
  },
  {
    id: "hoodie",
    name: "Hoodie",
    description: "Dağların gücünü taşıyan konfor",
    coverImage: design3,
  },
  {
    id: "signature",
    name: "Signature Collection",
    description: "Sınırlı üretim, seçkin tasarımlar",
    coverImage: signatureLogo,
    route: "/signature",
  },
];

export interface CategoryProduct {
  id: string;
  name: string;
  image: string;
  images: string[];
}

// --- T-Shirt products ---
import beyazTisort from "@/assets/signature/beyaz-tisort.png";
import beyazTisortDetay from "@/assets/signature/beyaz-tisort-detay.jpg";
import beyazTisortFlat from "@/assets/signature/beyaz-tisort-flat.jpg";
import siyahTisort from "@/assets/signature/siyah-tisort.png";
import siyahTisortDetay from "@/assets/signature/siyah-tisort-detay.jpg";
import siyahTisortFlat from "@/assets/signature/siyah-tisort-flat.jpg";
import atypeBlack from "@/assets/atype-black.jpg";
import atypeWhite from "@/assets/atype-white.jpg";
import coverLabel from "@/assets/essential/cover-label-v2.jpg";
import whiteEmbroidery1 from "@/assets/essential/white-embroidery-1.jpg";
import whiteEmbroidery2 from "@/assets/essential/white-embroidery-2.jpg";
import blackEmbroidery1 from "@/assets/essential/black-embroidery-1.jpg";
import blackEmbroidery2 from "@/assets/essential/black-embroidery-2.jpg";
import whiteCollection from "@/assets/essential/white-collection.png";
import blackCollection from "@/assets/essential/black-collection.png";
import atypeBlack from "@/assets/atype-black.jpg";
import atypeWhiteDetail from "@/assets/essential/atype-white-detail.jpg";

// --- Hoodie products ---
import siyahHoodieV2 from "@/assets/signature/siyah-hoodie-v2.png";
import beyazHoodieV2 from "@/assets/signature/beyaz-hoodie-v2.png";
import siyahHoodie from "@/assets/signature/siyah-hoodie.png";
import beyazHoodie from "@/assets/signature/beyaz-hoodie.png";
import hoodieDesign2Black from "@/assets/signature/hoodie-design2-black.png";

export const categoryProducts: Record<string, CategoryProduct[]> = {
  tshirt: [
    {
      id: "essential-tee-white",
      name: "Essential Tee — Beyaz",
      image: beyazTisort,
      images: [beyazTisort, beyazTisortDetay, beyazTisortFlat],
    },
    {
      id: "essential-tee-black",
      name: "Essential Tee — Siyah",
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
      name: "Alpine Tee — Beyaz",
      image: atypeWhite,
      images: [atypeWhite],
    },
    {
      id: "alpine-tee-black",
      name: "Alpine Tee — Siyah",
      image: atypeBlack,
      images: [atypeBlack],
    },
  ],
  sweatshirt: [
    {
      id: "peak-sweatshirt",
      name: "Peak Sweatshirt",
      image: productSweatshirt,
      images: [productSweatshirt],
    },
  ],
  hoodie: [
    {
      id: "summit-hoodie-black",
      name: "Summit Hoodie — Siyah",
      image: siyahHoodieV2,
      images: [siyahHoodieV2, siyahHoodie, hoodieDesign2Black],
    },
    {
      id: "summit-hoodie-white",
      name: "Summit Hoodie — Beyaz",
      image: beyazHoodieV2,
      images: [beyazHoodieV2, beyazHoodie],
    },
  ],
};
