import design1 from "@/assets/design-1.jpeg";
import design2 from "@/assets/design-2.jpeg";
import design3 from "@/assets/design-3.jpeg";
import design4 from "@/assets/design-4.jpeg";

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  details: string[];
}

export const products: Product[] = [
  {
    id: "essential-tee",
    name: "Essential Tee",
    description: "Premium pamuklu, yalın tasarım",
    longDescription:
      "Alpenzo Essential Tee, sadeliğin en zarif hâlini yansıtan ikonik bir parçadır. %100 premium pamuktan üretilen bu tişört, yumuşak dokusu ve kusursuz kalıbıyla günlük konforunuzu bir üst seviyeye taşır. Minimalist Alpenzo logosu, her detayda kaliteyi hissettiren ince işçiliğin bir yansımasıdır.",
    image: design1,
    details: ["100% Premium Pamuk", "Regular Fit", "Özel Logo Baskı", "Nefes Alan Kumaş"],
  },
  {
    id: "summit-hoodie",
    name: "Summit Hoodie",
    description: "Dağların gücünü taşıyan konfor",
    longDescription:
      "Summit Hoodie, dağların heybetinden ilham alarak tasarlanmış bir konfor şaheseridir. Ağır gramajlı premium kumaşı ve ergonomik kesimi ile soğuk günlerde sizi sarıp sarmalayan bu parça, Alpenzo'nun güç ve zarafet felsefesini mükemmel bir şekilde yansıtır.",
    image: design2,
    details: ["Ağır Gramajlı Kumaş", "Oversize Fit", "Kapüşonlu Tasarım", "Premium İşçilik"],
  },
  {
    id: "peak-sweatshirt",
    name: "Peak Sweatshirt",
    description: "Zamansız zarafet, üstün kalite",
    longDescription:
      "Peak Sweatshirt, Alpenzo koleksiyonunun en çok yönlü parçasıdır. İç yüzeyi fırçalanmış yumuşak kumaşı ve modern kesimi ile hem şıklığı hem de konforu bir arada sunar. Zamansız tasarımı sayesinde yıllar geçse de gardırobunuzun vazgeçilmezi olmaya devam eder.",
    image: design3,
    details: ["Fırçalanmış İç Yüzey", "Regular Fit", "Ribana Detaylar", "Dayanıklı Kumaş"],
  },
  {
    id: "alpine-tee",
    name: "Alpine Tee",
    description: "Sadeliğin gücünü yansıtan tasarım",
    longDescription:
      "Alpine Tee, Alpenzo'nun kuruluş ruhunu taşıyan özel bir tasarımdır. Dağ silüetinden esinlenen grafik detayları ve premium pamuk kalitesiyle dikkat çeken bu parça, sade ama güçlü bir stil ifadesi sunar. Her giydiğinizde markanın özünü hissedersiniz.",
    image: design4,
    details: ["100% Premium Pamuk", "Slim Fit", "Grafik Baskı", "Hafif & Nefes Alan"],
  },
];
