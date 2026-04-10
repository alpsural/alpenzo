import coverLabel from "@/assets/essential/cover-label.jpg";
import whiteEmbroidery1 from "@/assets/essential/white-embroidery-1.jpg";
import whiteEmbroidery2 from "@/assets/essential/white-embroidery-2.jpg";
import blackEmbroidery1 from "@/assets/essential/black-embroidery-1.jpg";
import blackEmbroidery2 from "@/assets/essential/black-embroidery-2.jpg";
import whiteCollection from "@/assets/essential/white-collection.png";
import blackCollection from "@/assets/essential/black-collection.png";
import atypeBlackDetail from "@/assets/essential/atype-black-detail.jpg";
import atypeWhiteDetail from "@/assets/essential/atype-white-detail.jpg";

import siyahHoodie from "@/assets/signature/siyah-hoodie.png";
import beyazHoodie from "@/assets/signature/beyaz-hoodie.png";
import siyahPolo from "@/assets/signature/siyah-polo.jpeg";
import beyazPolo from "@/assets/signature/beyaz-polo.png";

export interface SignatureProduct {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  coverImage: string;
  images: string[];
  details: string[];
  category: string;
}

export const signatureProducts: SignatureProduct[] = [
  {
    id: "essential-tee",
    name: "Essential Tee",
    description: "Sadeliğin en zarif hâli",
    longDescription:
      "Alpenzo Essential Tee, markanın en öz tasarım felsefesini yansıtır. %100 premium pamuktan üretilen bu tişört, yumuşak dokusu ve kusursuz kalıbıyla koleksiyonun temel taşıdır. Nakış işleme detayları ve özel etiket tasarımıyla her ayrıntısında markanın DNA'sını taşır.",
    coverImage: coverLabel,
    images: [
      whiteEmbroidery1,
      whiteEmbroidery2,
      blackEmbroidery1,
      blackEmbroidery2,
      whiteCollection,
      blackCollection,
      atypeBlackDetail,
      atypeWhiteDetail,
    ],
    details: ["100% Premium Pamuk", "Nakış İşleme", "Özel Etiket", "Sınırlı Üretim"],
    category: "Tişört",
  },
  {
    id: "sig-summit-hoodie-black",
    name: "Summit Hoodie — Black",
    description: "Dağların karanlık zarafeti",
    longDescription:
      "Signature Summit Hoodie, Alpenzo'nun dağlardan ilham alan ruhunu en saf hâliyle yansıtır. Ağır gramajlı premium kumaşı, özel kapüşon kesimi ve Signature işlemesiyle bu hoodie, sıradan olandan uzak, seçkin bir parça olarak tasarlanmıştır.",
    coverImage: siyahHoodie,
    images: [siyahHoodie],
    details: ["Ağır Gramajlı Kumaş", "Oversize Fit", "Signature İşleme", "Sınırlı Üretim"],
    category: "Hoodie",
  },
  {
    id: "sig-summit-hoodie-white",
    name: "Summit Hoodie — White",
    description: "Zirvede beyaz sessizlik",
    longDescription:
      "Beyaz Summit Hoodie, dağların karla kaplı dorukalarından esinlenmiştir. Saf beyaz tonu ve premium dokusuyla hem konfor hem zarafet sunan bu parça, Signature Collection'ın en çok yönlü üyesidir.",
    coverImage: beyazHoodie,
    images: [beyazHoodie],
    details: ["Ağır Gramajlı Kumaş", "Oversize Fit", "Signature İşleme", "Sınırlı Üretim"],
    category: "Hoodie",
  },
  {
    id: "sig-polo-black",
    name: "Polo Yaka — Black",
    description: "Klasik form, modern ruh",
    longDescription:
      "Signature Polo, klasik polo yaka formunu Alpenzo'nun modern tasarım diliyle yeniden yorumlar. Siyah tonuyla güçlü ve kendinden emin bir ifade sunan bu parça, premium pamuk piké kumaşıyla üstün konfor sağlar.",
    coverImage: siyahPolo,
    images: [siyahPolo],
    details: ["Premium Piké Kumaş", "Slim Fit", "Signature Yaka Detay", "Sınırlı Üretim"],
    category: "Polo",
  },
  {
    id: "sig-polo-white",
    name: "Polo Yaka — White",
    description: "Zarafetin sessiz ifadesi",
    longDescription:
      "Beyaz Signature Polo, sadeliğin en zarif hâlidir. Premium piké kumaşı ve özel yaka detaylarıyla hem resmi hem günlük kullanıma uygun olan bu parça, Alpenzo'nun 'az çoktur' felsefesinin mükemmel bir yansımasıdır.",
    coverImage: beyazPolo,
    images: [beyazPolo],
    details: ["Premium Piké Kumaş", "Slim Fit", "Signature Yaka Detay", "Sınırlı Üretim"],
    category: "Polo",
  },
];
