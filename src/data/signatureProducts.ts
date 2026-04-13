import whiteTeeDetail from "@/assets/signature/white-tee-detail.jpg";
import whiteTeeFlat from "@/assets/signature/white-tee-flat.jpg";
import blackTeeFlat from "@/assets/signature/black-tee-flat.jpg";
import blackTeeDetail from "@/assets/signature/black-tee-detail.jpg";
import poloBlackGreek from "@/assets/signature/polo-black-greek.jpg";
import poloBlackMinimal from "@/assets/signature/polo-black-minimal.jpg";
import poloWhite from "@/assets/signature/polo-white.png";
import sigLabelDetail from "@/assets/signature/sig-label-detail.jpg";
import sigLabelAlpenzo from "@/assets/signature/sig-label-alpenzo.jpg";
import sigTeeDetail from "@/assets/signature/sig-tee-detail.jpg";
import sigTeeFlat from "@/assets/signature/sig-tee-flat.jpg";

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
    id: "sig-tee-white",
    name: "Signature Tee — White",
    description: "Sadeliğin en zarif hâli",
    longDescription:
      "Alpenzo Signature Tee, markanın en öz tasarım felsefesini yansıtır. %100 premium pamuktan üretilen bu tişört, yumuşak dokusu ve kusursuz kalıbıyla koleksiyonun temel taşıdır.",
    coverImage: whiteTeeDetail,
    images: [whiteTeeDetail, whiteTeeFlat],
    details: ["100% Premium Pamuk", "Nakış İşleme", "Özel Etiket", "Sınırlı Üretim"],
    category: "Tee",
  },
  {
    id: "sig-tee-black",
    name: "Signature Tee — Black",
    description: "Karanlığın zarif gücü",
    longDescription:
      "Siyah Signature Tee, güçlü ve kendinden emin bir ifade sunar. Premium pamuk kumaşı ve nakış işleme detaylarıyla Alpenzo'nun DNA'sını taşır.",
    coverImage: blackTeeDetail,
    images: [blackTeeDetail, blackTeeFlat],
    details: ["100% Premium Pamuk", "Nakış İşleme", "Özel Etiket", "Sınırlı Üretim"],
    category: "Tee",
  },
  {
    id: "sig-polo-black-greek",
    name: "Polo Yaka — Black Greek",
    description: "Klasik form, modern ruh",
    longDescription:
      "Greek desenli yaka ve kol detaylarıyla klasik polo formunu Alpenzo'nun cesur tasarım diliyle yeniden yorumlar. Premium piké kumaşıyla üstün konfor sağlar.",
    coverImage: poloBlackGreek,
    images: [poloBlackGreek],
    details: ["Premium Piké Kumaş", "Greek Desen Detay", "Signature İşleme", "Sınırlı Üretim"],
    category: "Polo",
  },
  {
    id: "sig-polo-black-minimal",
    name: "Polo Yaka — Black Minimal",
    description: "Sadeliğin gücü",
    longDescription:
      "Minimal siyah polo, Alpenzo'nun 'az çoktur' felsefesinin mükemmel bir yansımasıdır. İnce şerit detayları ve premium piké kumaşıyla zamansız bir elegans sunar.",
    coverImage: poloBlackMinimal,
    images: [poloBlackMinimal],
    details: ["Premium Piké Kumaş", "Slim Fit", "Minimal Şerit Detay", "Sınırlı Üretim"],
    category: "Polo",
  },
  {
    id: "sig-polo-white",
    name: "Polo Yaka — White",
    description: "Zarafetin sessiz ifadesi",
    longDescription:
      "Beyaz Signature Polo, sadeliğin en zarif hâlidir. Gold detaylı premium piké kumaşıyla hem resmi hem günlük kullanıma uygun olan bu parça, koleksiyonun en çok yönlü üyesidir.",
    coverImage: poloWhite,
    images: [poloWhite],
    details: ["Premium Piké Kumaş", "Slim Fit", "Gold Şerit Detay", "Sınırlı Üretim"],
    category: "Polo",
  },
  {
    id: "sig-label-black",
    name: "Signature Label — Black",
    description: "Detaylarda saklı mükemmellik",
    longDescription:
      "Alpenzo'nun imza etiketi, her parçanın özünde taşıdığı kalite ve özenin somut ifadesidir. Premium kumaş üzerine işlenmiş logo ve el yazısı signature detayı, markanın DNA'sını her dikişte hissettirir.",
    coverImage: sigLabelDetail,
    images: [sigLabelDetail, sigLabelAlpenzo],
    details: ["Özel Dokuma Etiket", "Signature İşleme", "Premium Detay", "Sınırlı Üretim"],
    category: "Tee",
  },
  {
    id: "sig-tee-elevation",
    name: "Signature Tee — Created for Elevation",
    description: "Yükseliş için yaratıldı",
    longDescription:
      "Alpenzo'nun ikonik 'Created for Elevation' yazısı ve el yazısı logosuyla bezenen bu özel tişört, markanın ruhunu en güçlü şekilde yansıtır. Premium pamuk kumaş ve nakış işleme detaylarıyla koleksiyonun en dikkat çekici parçasıdır.",
    coverImage: sigTeeDetail,
    images: [sigTeeDetail, sigTeeFlat],
    details: ["100% Premium Pamuk", "Nakış İşleme", "Özel Etiket", "Sınırlı Üretim"],
    category: "Tee",
  },
];
