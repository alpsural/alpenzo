import tshirtCoverNew from "@/assets/tshirt-cover-new.jpeg";
import hoodieCover from "@/assets/hoodie-cover.jpg";
import sweatshirtCover from "@/assets/sweatshirt-cover.jpg";
import sweatshirtBlack from "@/assets/sweatshirt-black.png";
import sweatshirtWhite from "@/assets/sweatshirt-white.jpg";
import signatureLogo from "@/assets/alpenzo-signature.png";

export interface Category {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  route?: string;
}

export const categories: Category[] = [
  {
    id: "tshirt",
    name: "T-Shirt",
    description: "Sadeliğin gücünü yansıtan tasarımlar",
    coverImage: tshirtCoverNew,
  },
  {
    id: "sweatshirt",
    name: "Sweatshirt",
    description: "Zamansız zarafet, üstün kalite",
    coverImage: sweatshirtCover,
  },
  {
    id: "hoodie",
    name: "Hoodie",
    description: "Dağların gücünü taşıyan konfor",
    coverImage: hoodieCover,
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
import alpineWhite from "@/assets/tshirt/alpine-white.png";
import alpineBlack from "@/assets/tshirt/alpine-black.png";
import atypeBlackBack from "@/assets/tshirt/atype-black-back.jpg";
import atypeBlackFront from "@/assets/tshirt/atype-black-front.jpg";
import atypeWhiteBack from "@/assets/tshirt/atype-white-back.jpg";
import atypeWhiteFront from "@/assets/tshirt/atype-white-front.jpg";

// --- Hoodie products ---
import siyahHoodieV2 from "@/assets/signature/siyah-hoodie-v2.png";
import beyazHoodieV2 from "@/assets/signature/beyaz-hoodie-v2.png";
import siyahHoodie from "@/assets/signature/siyah-hoodie.png";
import beyazHoodie from "@/assets/signature/beyaz-hoodie.png";
import hoodieDesign2Black from "@/assets/signature/hoodie-design2-black.png";

export const categoryProducts: Record<string, CategoryProduct[]> = {
  tshirt: [
    {
      id: "alpine-tee-white",
      name: "Alpine Tee — Beyaz",
      image: alpineWhite,
      images: [alpineWhite],
    },
    {
      id: "alpine-tee-black",
      name: "Alpine Tee — Siyah",
      image: alpineBlack,
      images: [alpineBlack],
    },
    {
      id: "atype-tee-black",
      name: "A-Type Tee — Siyah",
      image: atypeBlackFront,
      images: [atypeBlackFront, atypeBlackBack],
    },
    {
      id: "atype-tee-white",
      name: "A-Type Tee — Beyaz",
      image: atypeWhiteFront,
      images: [atypeWhiteFront, atypeWhiteBack],
    },
  ],
  sweatshirt: [
    {
      id: "sweatshirt-black",
      name: "Sweatshirt — Siyah",
      image: sweatshirtBlack,
      images: [sweatshirtBlack],
    },
    {
      id: "sweatshirt-white",
      name: "Sweatshirt — Beyaz",
      image: sweatshirtWhite,
      images: [sweatshirtWhite],
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
