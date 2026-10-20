export const BUSINESS = {
  name: "Rocking Rays Auto Detailing & Dent Removal LLC",
  shortName: "Rocking Rays",
  tagline: "Auto Detailing & Dent Removal",
  owner: "Willie P",
  location: "Northern Indiana — South Bend / Elkhart area",
  phone: "+1 574-318-5094",
  phoneTel: "tel:+15743185094",
  phoneDisplay: "(574) 318-5094",
  rating: "5.0",
  linkedIn: "https://www.linkedin.com/in/willie-p-473255160/",
} as const;

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const;

/** Full service catalog — used by Services section + contact form */
export const SERVICES = [
  {
    id: "car-wash",
    value: "car-wash",
    name: "Exterior Car Wash",
    headline: "A thorough hand wash that respects your paint.",
    description:
      "Road film, salt, and seasonal grime come off the right way — by hand, with quality wash products and careful rinsing. Ideal for weekly upkeep or as the first step before a full detail. Wheels, glass, and trim get attention so the whole car looks freshly cleaned, not just sprayed down.",
    includes: [
      "Hand wash & rinse",
      "Wheels & tire clean",
      "Glass exterior wipe",
      "Quick dry & spot check",
    ],
    image: "/images/service-car-wash.jpg",
    imageAlt:
      "Black sports car receiving a high-pressure exterior wash with water spray in a clean detailing bay",
  },
  {
    id: "exterior-detailing",
    value: "exterior-detailing",
    name: "Exterior Auto Detailing",
    headline: "Polish, refine, and bring the paint back to life.",
    description:
      "Beyond a wash: clay decontamination when needed, careful polishing, and a finish that looks deep and reflective. Built for drivers who want their car to look showroom-ready again after months of Midwestern weather — without rushing the panels that matter most.",
    includes: [
      "Decon & clay when needed",
      "Machine polish & refine",
      "Trim & plastic dressing",
      "Final wipe-down finish",
    ],
    image: "/images/service-exterior-detail.jpg",
    imageAlt:
      "Technician using a dual-action polisher on a black car door panel in a professional garage",
  },
  {
    id: "interior-detailing",
    value: "interior-detailing",
    name: "Interior Detailing",
    headline: "Cabin deep-clean so every surface feels intentional.",
    description:
      "Vacuum, steam or wipe-down of high-touch areas, leather or fabric care, and glass that stays clear. Perfect after kids, pets, winter salt boots, or a long stretch between cleanings — so the inside matches the outside you just invested in.",
    includes: [
      "Full vacuum & crevice work",
      "Steam / wipe sanitizing",
      "Leather or fabric care",
      "Interior glass & vents",
    ],
    image: "/images/service-interior.jpg",
    imageAlt:
      "Detailer steam-cleaning a luxury car steering wheel and dashboard with protective microfiber cloth",
  },
  {
    id: "dent-removal",
    value: "dent-removal",
    name: "Dent Removal / PDR",
    headline: "Paintless dent repair for dings that don’t need paint.",
    description:
      "Door dings, hail marks, and parking-lot surprises — carefully massaged out when the factory finish is intact. We assess honestly first: if paintless work is the right fit, we restore the panel without unnecessary repaint. If it isn’t, you’ll hear that upfront.",
    includes: [
      "Door dings & minor creases",
      "Hail & pressure-point dents",
      "Preserve factory paint when possible",
      "Clear assessment before work starts",
    ],
    image: "/images/service-dent-pdr.jpg",
    imageAlt:
      "Technician performing paintless dent repair with specialized tap-down tools on a glossy black body panel",
  },
  {
    id: "paint-protection",
    value: "paint-protection",
    name: "Paint Correction & Protection",
    headline: "Correct swirl marks, then lock in a lasting shine.",
    description:
      "Machine polish to reduce swirls and haze, then a quality wax or sealant for weeks of protection and water beading. A strong choice after a full exterior detail — or when your paint looks dull under Northern Indiana sun and road grit. No fake ceramic certifications; just careful correction and real protection.",
    includes: [
      "Swirl & haze reduction",
      "Machine polish stages",
      "Wax or sealant finish",
      "Gloss & beading protection",
    ],
    image: "/images/service-paint-correction.jpg",
    imageAlt:
      "Close-up of orbital polisher with yellow pad correcting paint on a glossy black car hood",
  },
] as const;

export const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => ({ value: s.value, label: s.name })),
  { value: "combo", label: "Detailing + Dent Removal" },
  { value: "other", label: "Other / Not sure" },
] as const;
