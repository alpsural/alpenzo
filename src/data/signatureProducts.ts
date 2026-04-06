import beyazTisort from "@/assets/signature/beyaz-tisort.png";
import beyazTisortDetay from "@/assets/signature/beyaz-tisort-detay.jpg";
import beyazTisortFlat from "@/assets/signature/beyaz-tisort-flat.jpg";

import siyahTisort from "@/assets/signature/siyah-tisort.png";
import siyahTisortDetay from "@/assets/signature/siyah-tisort-detay.jpg";
import siyahTisortFlat from "@/assets/signature/siyah-tisort-flat.jpg";

import siyahHoodie from "@/assets/signature/siyah-hoodie.png";
import beyazHoodie from "@/assets/signature/beyaz-hoodie.png";
import siyahPolo from "@/assets/signature/siyah-polo.jpeg";
import beyazPolo from "@/assets/signature/beyaz-polo.png";

export interface SignatureProduct {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  images: string[];
  details: string[];
  category: string;
}

export const signatureProducts: SignatureProduct[] = [
  {
    id: "sig-essential-tee-white",
    name: "Essential Tee — White",
    description: "Saf beyaz, saf zarafet",
    longDescription:
      "Alpenzo Signature Essential Tee, markanın en öz tasarım felsefesini beyaz tonlarıyla yansıtır. %100 premium pamuktan üretilen bu tişört, yumuşak dokusu ve kusursuz kalıbıyla Signature Collection'ın temel taşlarından biridir. Sınırlı sayıda üretilmiştir.",
    images: [beyazTisort, beyazTisortDetay, beyazTisortFlat],
    details: ["100% Premium Pamuk", "Signature Fit", "Özel Etiket", "Sınırlı Üretim"],
    category: "Tişört",
  },
  {
    id: "sig-essential-tee-black",
    name: "Essential Tee — Black",
    description: "Karanlığın zarif gücü",
    longDescription:
      "Siyah Essential Tee, Alpenzo Signature serisinin en ikonik parçasıdır. Derin siyah tonuyla güçlü bir duruş sergileyen bu tişört, premium pamuk kalitesi ve özel kesim detaylarıyla fark yaratır. Her ayrıntısında markanın DNA'sını taşır.",
    images: [siyahTisort, siyahTisortDetay, siyahTisortFlat],
    details: ["100% Premium Pamuk", "Signature Fit", "Özel Logo Detay", "Sınırlı Üretim"],
    category: "Tişört",
  },
  {
    id: "sig-summit-hoodie-black",
    name: "Summit Hoodie — Black",
    description: "Dağların karanlık zarafeti",
    longDescription:
      "Signature Summit Hoodie, Alpenzo'nun dağlardan ilham alan ruhunu en saf hâliyle yansıtır. Ağır gramajlı premium kumaşı, özel kapüşon kesimi ve Signature işlemesiyle bu hoodie, sıradan olandan uzak, seçkin bir parça olarak tasarlanmıştır.",
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
    images: [beyazPolo],
    details: ["Premium Piké Kumaş", "Slim Fit", "Signature Yaka Detay", "Sınırlı Üretim"],
    category: "Polo",
  },
];
