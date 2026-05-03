import tshirtCoverNew from "@/assets/tshirt-cover-new.jpeg";
import hoodieCover from "@/assets/hoodie-cover.jpg";
import sweatshirtCover from "@/assets/sweatshirt-cover.jpg";
import sweatshirtBlack from "@/assets/sweatshirt-black.png";
import sweatshirtWhite from "@/assets/sweatshirt-white.jpg";
import signatureCoverNew from "@/assets/signature-cover-new.jpg";

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
    coverImage: signatureCoverNew,
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
import alpineWhiteAlt from "@/assets/tshirt/alpine-white-2.jpg";
import alpineBlack from "@/assets/tshirt/alpine-black.png";
import alpineBlackAlt from "@/assets/tshirt/alpine-black-2.jpg";
import atypeBlackBack from "@/assets/tshirt/atype-black-back.jpg";
import atypeBlackFrontPlain from "@/assets/tshirt/atype-black-front-plain.jpg";
import atypeWhiteBack from "@/assets/tshirt/atype-white-back.jpg";
import atypeWhiteFrontPlain from "@/assets/tshirt/atype-white-front-plain.jpg";

// --- Hoodie products ---
import siyahHoodieV2 from "@/assets/signature/siyah-hoodie-v2.png";
import siyahHoodieV2Alt from "@/assets/signature/siyah-hoodie-v2-alt.png";
import beyazHoodieV2 from "@/assets/signature/beyaz-hoodie-v2.png";
import beyazHoodieV2Alt from "@/assets/signature/beyaz-hoodie-v2-alt.png";
import siyahHoodie from "@/assets/signature/siyah-hoodie.png";
import beyazHoodie from "@/assets/signature/beyaz-hoodie.png";
import sweatshirtBlackAlt from "@/assets/sweatshirt-black-2.jpg";
import sweatshirtWhiteAlt from "@/assets/sweatshirt-white-2.jpg";

export const categoryProducts: Record<string, CategoryProduct[]> = {
  tshirt: [
    {
      id: "alpine-tee-white",
      name: "Alpine Tee — Beyaz",
      image: alpineWhite,
      images: [alpineWhite, alpineWhiteAlt],
    },
    {
      id: "alpine-tee-black",
      name: "Alpine Tee — Siyah",
      image: alpineBlack,
      images: [alpineBlack, alpineBlackAlt],
    },
    {
      id: "atype-tee-black",
      name: "A-Type Tee — Siyah",
      image: atypeBlackBack,
      images: [atypeBlackBack, atypeBlackFrontPlain],
    },
    {
      id: "atype-tee-white",
      name: "A-Type Tee — Beyaz",
      image: atypeWhiteBack,
      images: [atypeWhiteBack, atypeWhiteFrontPlain],
    },
  ],
  sweatshirt: [
    {
      id: "sweatshirt-black",
      name: "Sweatshirt — Siyah",
      image: sweatshirtBlack,
      images: [sweatshirtBlack, sweatshirtBlackAlt],
    },
    {
      id: "sweatshirt-white",
      name: "Sweatshirt — Beyaz",
      image: sweatshirtWhite,
      images: [sweatshirtWhite, sweatshirtWhiteAlt],
    },
  ],
  hoodie: [
    {
      id: "summit-hoodie-black",
      name: "Summit Hoodie — Siyah",
      image: siyahHoodieV2,
      images: [siyahHoodieV2, siyahHoodieV2Alt, siyahHoodie],
    },
    {
      id: "summit-hoodie-white",
      name: "Summit Hoodie — Beyaz",
      image: beyazHoodieV2,
      images: [beyazHoodieV2, beyazHoodieV2Alt, beyazHoodie],
    },
  ],
};
