import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  CheckCircle,
  XCircle,
  ArrowLeft,
  ExternalLink,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const products = {
  "pampers-disposable-hypoallergenic-fragrance-protection-diapers": {
    id: 1,
    slug: "pampers-disposable-hypoallergenic-fragrance-protection-diapers",
    name: "Pampers Disposable Hypoallergenic Fragrance Free Diapers",
    category: "Hygiene",
    price: "₽2,450",
    originalPrice: "₽2,890",
    rating: 4.9,
    reviews: 567,
    images: ["https://m.media-amazon.com/images/I/81bf0fqJVHL._AC_SX679_.jpg", "https://m.media-amazon.com/images/I/81bf0fqJVHL._AC_SX679_.jpg", "https://m.media-amazon.com/images/I/81bf0fqJVHL._AC_SX679_.jpg"],
    description: "Soft diapers with superior 12-hour protection and hypoallergenic materials for sensitive skin.",
    badge: "Editor's Choice",
    amazonLink: "https://www.amazon.com/Pampers-Disposable-Hypoallergenic-Fragrance-Protection/dp/",
    pros: [
      "Superior 12-hour absorbency",
      "Hypoallergenic and fragrance-free",
      "Soft materials for sensitive skin",
      "Wetness indicator for easy changes",
      "Flexible fit with stretchy sides",
    ],
    cons: ["Higher price point", "May feel bulky for smaller babies", "Limited availability in some sizes"],
    specifications: {
      Size: "Newborn (2-5 kg)",
      Quantity: "96 pcs",
      Material: "Non-woven fabric, absorbent gel",
      Manufacturer: "Procter & Gamble",
      Country: "USA",
      Warranty: "Satisfaction guarantee",
    },
    overallScore: 4.9,
    scores: {
      quality: 4.9,
      safety: 5.0,
      usability: 4.8,
      value: 4.7,
    },
    detailedReview: `
      Pampers Disposable Hypoallergenic Fragrance Free Diapers stand out as a top choice for parents prioritizing skin health and reliability.

      **Absorbency and Protection**
      The advanced core technology locks away wetness for up to 12 hours, keeping baby's skin dry and reducing rash risks.

      **Skin-Friendly Design**
      Completely fragrance-free and hypoallergenic, these diapers are dermatologist-tested and gentle on even the most sensitive skin.

      **Ease of Use**
      The wetness indicator changes color to signal change time, making nighttime checks effortless.

      **Drawbacks**
      While premium quality justifies the cost for many, budget-conscious families may find alternatives more affordable.
    `,
    userReviews: [
      {
        id: 1,
        author: "Sarah L.",
        rating: 5,
        date: "September 15, 2025",
        text: "No leaks overnight and my baby's skin has never been happier. Worth every penny!",
        helpful: 45,
        verified: true,
      },
      {
        id: 2,
        author: "James R.",
        rating: 4,
        date: "September 10, 2025",
        text: "Excellent quality, but the pack sizes are huge – great value but storage is an issue.",
        helpful: 22,
        verified: true,
      },
      {
        id: 3,
        author: "Emily T.",
        rating: 5,
        date: "September 5, 2025",
        text: "Switched from another brand and saw immediate improvement in diaper rash. Highly recommend!",
        helpful: 38,
        verified: true,
      },
    ],
  },
  "skip-hop-montessori-inspired-discoverosity-play-mat": {
    id: 2,
    slug: "skip-hop-montessori-inspired-discoverosity-play-mat",
    name: "Skip Hop Montessori Inspired Discoverosity Play Mat",
    category: "Development",
    price: "₽4,590",
    originalPrice: "₽5,290",
    rating: 4.9,
    reviews: 203,
    images: ["https://m.media-amazon.com/images/I/713FG+eNC4L._SX679_.jpg", "https://m.media-amazon.com/images/I/713FG+eNC4L._SX679_.jpg", "https://m.media-amazon.com/images/I/713FG+eNC4L._SX679_.jpg"],
    description: "Interactive play mat designed with Montessori principles, featuring sensory toys and educational elements.",
    badge: "Top Seller",
    amazonLink: "https://www.amazon.com/Skip-Hop-Montessori-Inspired-Discoverosity/dp/",
    pros: [
      "Montessori-inspired sensory activities",
      "Machine-washable and waterproof",
      "Removable arches for versatile play",
      "Develops fine motor skills",
      "Safe, non-toxic materials",
    ],
    cons: ["Assembly requires tools", "Limited color options", "May be too large for small spaces"],
    specifications: {
      Size: "Unfolded: 71 x 71 inches",
      Age: "0+ months",
      Material: "Waterproof fabric, plastic",
      Manufacturer: "Skip Hop",
      Country: "China",
      Warranty: "1 year",
    },
    overallScore: 4.9,
    scores: {
      quality: 4.8,
      safety: 4.9,
      usability: 5.0,
      value: 4.8,
    },
    detailedReview: `
      The Skip Hop Montessori Inspired Discoverosity Play Mat transforms tummy time into an engaging learning adventure.

      **Educational Design**
      Aligned with Montessori methods, it includes textured cards, mirrors, and toys that encourage exploration and sensory development.

      **Durability and Cleanliness**
      The waterproof base wipes clean easily, and the padded surface provides safe support for growing babies.

      **Versatility**
      Arches can be removed to convert into a flat play area, adapting to your child's stages.

      **Drawbacks**
      Initial setup can take 20-30 minutes, and the bold patterns might overwhelm some infants.
    `,
    userReviews: [
      {
        id: 1,
        author: "Lisa M.",
        rating: 5,
        date: "September 20, 2025",
        text: "My 4-month-old loves the textures! It's stimulated so much playtime development.",
        helpful: 19,
        verified: true,
      },
      {
        id: 2,
        author: "David W.",
        rating: 5,
        date: "September 18, 2025",
        text: "Easy to clean after spills, and the quality feels premium. A must-have!",
        helpful: 15,
        verified: true,
      },
      {
        id: 3,
        author: "Rachel B.",
        rating: 4,
        date: "September 12, 2025",
        text: "Great mat, but folding it away is tricky without instructions.",
        helpful: 10,
        verified: true,
      },
    ],
  },
  "philips-natural-response-scd838-02-bottle": {
    id: 3,
    slug: "philips-natural-response-scd838-02-bottle",
    name: "Philips Natural Response Bottle SCD838/02",
    category: "Feeding",
    price: "₽1,290",
    originalPrice: "₽1,590",
    rating: 4.8,
    reviews: 234,
    images: ["https://m.media-amazon.com/images/I/71Ef0nn6c+S._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Ef0nn6c+S._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Ef0nn6c+S._SL1500_.jpg"],
    description: "Natural bottle with wide neck for comfortable feeding and anti-colic valve system.",
    badge: "Bestseller",
    amazonLink: "https://www.amazon.com/Philips-Natural-Response-SCD838-02/dp/",
    pros: [
      "Responsive anti-colic valve",
      "Wide neck for easy cleaning",
      "BPA-free materials",
      "Mimics natural breastfeeding flow",
      "Compatible with breast pumps",
    ],
    cons: ["Nipple may wear out faster", "Slightly heavier than competitors", "Limited size options"],
    specifications: {
      Volume: "4 oz / 120 ml",
      Material: "Polypropylene, silicone",
      Age: "0+ months",
      Manufacturer: "Philips",
      Country: "Netherlands",
      Warranty: "2 years",
    },
    overallScore: 4.8,
    scores: {
      quality: 4.9,
      safety: 4.8,
      usability: 4.7,
      value: 4.6,
    },
    detailedReview: `
      The Philips Natural Response Bottle excels in mimicking breastfeeding, making it ideal for combo-fed babies.

      **Feeding Flow**
      The unique valve responds to baby's natural suck, swallow, and breathe rhythm, reducing air intake and colic.

      **Hygiene and Durability**
      Dishwasher-safe and sterilizer-compatible, the wide base simplifies thorough cleaning.

      **Compatibility**
      Seamlessly pairs with Philips breast pumps and storage systems for a complete feeding solution.

      **Drawbacks**
      Some users report faster nipple degradation with frequent use, requiring replacements every 1-2 months.
    `,
    userReviews: [
      {
        id: 1,
        author: "Anna K.",
        rating: 5,
        date: "September 25, 2025",
        text: "Seamless switch from breast to bottle – no fussing during feeds!",
        helpful: 28,
        verified: true,
      },
      {
        id: 2,
        author: "Tom H.",
        rating: 4,
        date: "September 22, 2025",
        text: "Great anti-colic feature, but check the seal to avoid leaks.",
        helpful: 16,
        verified: true,
      },
      {
        id: 3,
        author: "Sophia G.",
        rating: 5,
        date: "September 19, 2025",
        text: "Easy to clean and my baby loves the feel. Top quality!",
        helpful: 21,
        verified: true,
      },
    ],
  },
  "burts-bees-baby-beekeeper-transition-sleepwear": {
    id: 4,
    slug: "burts-bees-baby-beekeeper-transition-sleepwear",
    name: "Burt's Bees Baby Beekeeper Transition Sleepwear",
    category: "Sleep",
    price: "₽2,290",
    originalPrice: "₽2,790",
    rating: 4.8,
    reviews: 156,
    images: ["https://m.media-amazon.com/images/I/71rp3hdQwxL._AC_SX679_.jpg", "https://m.media-amazon.com/images/I/71rp3hdQwxL._AC_SX679_.jpg", "https://m.media-amazon.com/images/I/71rp3hdQwxL._AC_SX679_.jpg"],
    description: "Organic cotton sleep bag with convertible footed design for versatile sleep comfort.",
    badge: "Recommended",
    amazonLink: "https://www.amazon.com/Burts-Bees-Baby-Beekeeper-Transition/dp/",
    pros: [
      "100% organic cotton",
      "Convertible to footed pajamas",
      "Zip-front for easy changes",
      "Safe sleep-approved",
      "Breathable and soft",
    ],
    cons: ["Runs small in sizing", "Limited color choices", "Zipper can snag occasionally"],
    specifications: {
      Size: "0-6 months",
      Material: "Organic cotton",
      Age: "Newborn+",
      Manufacturer: "Burt's Bees Baby",
      Country: "USA",
      Warranty: "Return policy",
    },
    overallScore: 4.8,
    scores: {
      quality: 4.9,
      safety: 4.8,
      usability: 4.7,
      value: 4.7,
    },
    detailedReview: `
      Burt's Bees Baby Beekeeper Transition Sleepwear offers cozy, safe sleep in a sustainable package.

      **Material Excellence**
      GOTS-certified organic cotton ensures softness against skin without chemicals or irritants.

      **Versatile Design**
      Zipper unzips at the bottom to convert from sleep sack to footed sleeper, growing with your baby.

      **Sleep Safety**
      Envelope neckline and magnetic snaps prevent loose fabric, promoting safer sleep habits.

      **Drawbacks**
      Sizing tends to run snug, so size up for chubbier babies; the zipper may catch fabric if not careful.
    `,
    userReviews: [
      {
        id: 1,
        author: "Emma J.",
        rating: 5,
        date: "September 28, 2025",
        text: "So soft and perfect for cooler nights. My baby sleeps through!",
        helpful: 14,
        verified: true,
      },
      {
        id: 2,
        author: "Mark D.",
        rating: 5,
        date: "September 24, 2025",
        text: "Love the organic fabric – no rashes, and easy diaper access.",
        helpful: 12,
        verified: true,
      },
      {
        id: 3,
        author: "Grace P.",
        rating: 4,
        date: "September 21, 2025",
        text: "Adorable design, but order a size larger than expected.",
        helpful: 9,
        verified: true,
      },
    ],
  },
  "cybex-cloud-anti-rebound-protection-ergonomic-car-seat": {
    id: 5,
    slug: "cybex-cloud-anti-rebound-protection-ergonomic-car-seat",
    name: "Cybex Cloud Anti-Rebound Protection Ergonomic Car Seat",
    category: "Transport",
    price: "₽28,990",
    originalPrice: "₽32,990",
    rating: 4.8,
    reviews: 87,
    images: ["https://m.media-amazon.com/images/I/51AmLfN8wbL._SL1000_.jpg", "https://m.media-amazon.com/images/I/51AmLfN8wbL._SL1000_.jpg", "https://m.media-amazon.com/images/I/51AmLfN8wbL._SL1000_.jpg"],
    description: "Premium infant car seat with 180° rotation and advanced anti-rebound base for ultimate safety.",
    badge: "Premium",
    amazonLink: "https://www.amazon.com/Cybex-Cloud-Anti-Rebound-Protection-Ergonomic/dp/",
    pros: [
      "180° swiveling for easy access",
      "Linear Side-Impact Protection",
      "Breathable fabrics",
      "Compatible with strollers",
      "Energy-absorbing base",
    ],
    cons: ["High cost", "Heavy when installed", "Base setup complex"],
    specifications: {
      Group: "0+ (0-13 kg)",
      Weight: "4.5 kg (seat only)",
      Material: "Merino wool blend",
      Manufacturer: "Cybex",
      Country: "Germany",
      Warranty: "2 years",
    },
    overallScore: 4.8,
    scores: {
      quality: 4.9,
      safety: 5.0,
      usability: 4.6,
      value: 4.5,
    },
    detailedReview: `
      The Cybex Cloud car seat sets the standard for luxury safety in infant transport.

      **Safety Innovations**
      The integrated base with anti-rebound bar minimizes crash forces, while L.S.P. System absorbs side impacts.

      **Ergonomic Comfort**
      Lie-flat position reduces spinal pressure, and merino wool inserts regulate temperature for long trips.

      **Installation and Use**
      ISOFIX compatibility ensures secure, quick setup, with rotation easing in-out maneuvers.

      **Drawbacks**
      The premium pricing reflects its features, but may deter budget buyers; weight adds to carrying effort.
    `,
    userReviews: [
      {
        id: 1,
        author: "Olivia S.",
        rating: 5,
        date: "October 2, 2025",
        text: "Feels incredibly secure and the rotation is a game-changer for parents.",
        helpful: 25,
        verified: true,
      },
      {
        id: 2,
        author: "Ryan C.",
        rating: 5,
        date: "September 29, 2025",
        text: "Top-notch safety ratings – peace of mind every drive.",
        helpful: 18,
        verified: true,
      },
      {
        id: 3,
        author: "Ava N.",
        rating: 4,
        date: "September 26, 2025",
        text: "Luxurious, but installation took two tries with the manual.",
        helpful: 11,
        verified: true,
      },
    ],
  },
  "fisher-price-rainbow-showers-bassinet-tabletop": {
    id: 6,
    slug: "fisher-price-rainbow-showers-bassinet-tabletop",
    name: "Fisher-Price Rainbow Showers Bassinet Tabletop",
    category: "Development",
    price: "₽3,890",
    originalPrice: "₽4,590",
    rating: 4.7,
    reviews: 189,
    images: ["https://m.media-amazon.com/images/I/41Cy61tIfUL._SY300_SX300_QL70_FMwebp_.jpg", "https://m.media-amazon.com/images/I/41Cy61tIfUL._SY300_SX300_QL70_FMwebp_.jpg", "https://m.media-amazon.com/images/I/41Cy61tIfUL._SY300_SX300_QL70_FMwebp_.jpg"],
    description: "Soothing bassinet with canopy, lights, and sounds to create a calming sleep environment.",
    badge: "New",
    amazonLink: "https://www.amazon.com/Fisher-Price-Rainbow-Showers-Bassinet-Tabletop/dp/",
    pros: [
      "Vibrating and rocking motions",
      "20 soothing melodies",
      "Adjustable canopy height",
      "Portable tabletop design",
      "Washable fabrics",
    ],
    cons: ["Battery life could be longer", "Assembly instructions unclear", "Limited to younger infants"],
    specifications: {
      Weight Limit: "9 kg",
      Age: "Newborn to 5 months",
      Power: "Batteries or adapter",
      Size: "Tabletop: 20 x 20 inches",
      Manufacturer: "Fisher-Price",
      Country: "USA",
      Warranty: "1 year",
    },
    overallScore: 4.7,
    scores: {
      quality: 4.6,
      safety: 4.8,
      usability: 4.6,
      value: 4.7,
    },
    detailedReview: `
      Fisher-Price Rainbow Showers Bassinet provides a gentle, engaging space for newborn rest.

      **Soothing Features**
      Gentle vibrations and 360° rotation mimic womb-like comfort, with customizable light and sound options.

      **Convenience**
      Folds for storage and includes a storage pocket for essentials, ideal for bedside use.

      **Hygiene**
      Removable, machine-washable insert keeps it fresh; sturdy frame supports up to 9kg.

      **Drawbacks**
      Relies heavily on batteries for portability, draining quickly during extended use.
    `,
    userReviews: [
      {
        id: 1,
        author: "Mia F.",
        rating: 5,
        date: "October 4, 2025",
        text: "The lights and sounds put my baby right to sleep – magical!",
        helpful: 32,
        verified: true,
      },
      {
        id: 2,
        author: "Ethan B.",
        rating: 4,
        date: "October 1, 2025",
        text: "Helpful for naps, but needs frequent battery changes.",
        helpful: 17,
        verified: true,
      },
      {
        id: 3,
        author: "Isabella Y.",
        rating: 5,
        date: "September 27, 2025",
        text: "Compact and effective – our go-to for nighttime soothing.",
        helpful: 24,
        verified: true,
      },
    ],
  },
  "mam-perfect-pacifiers-thinner-nipple": {
    id: 7,
    slug: "mam-perfect-pacifiers-thinner-nipple",
    name: "MAM Perfect Pacifiers Thinner Nipple",
    category: "Feeding",
    price: "₽890",
    originalPrice: "₽1,090",
    rating: 4.7,
    reviews: 312,
    images: ["https://m.media-amazon.com/images/I/51xt3uS2ZHL._SX679_.jpg", "https://m.media-amazon.com/images/I/51xt3uS2ZHL._SX679_.jpg", "https://m.media-amazon.com/images/I/51xt3uS2ZHL._SX679_.jpg"],
    description: "Orthodontic pacifier with ultra-thin, symmetrical nipple for natural jaw development.",
    badge: "",
    amazonLink: "https://www.amazon.com/MAM-Perfect-Pacifiers-Thinner-Nipple/dp/",
    pros: [
      "Orthodontic nipple shape",
      "90% thinner collar",
      "BPA-free silicone",
      "High acceptance rate",
      "Sterilizing case included",
    ],
    cons: ["Nipple may detach easily", "Not ideal for very premature babies", "Replacement parts pricey"],
    specifications: {
      Size: "0-6 months",
      Material: "Silicone, polypropylene",
      Quantity: "2-pack",
      Manufacturer: "MAM",
      Country: "Germany",
      Warranty: "Satisfaction guarantee",
    },
    overallScore: 4.7,
    scores: {
      quality: 4.7,
      safety: 4.8,
      usability: 4.6,
      value: 4.6,
    },
    detailedReview: `
      MAM Perfect Pacifiers promote healthy oral development with thoughtful, baby-friendly engineering.

      **Nipple Design**
      The extra-thin, symmetrical silicone nipple allows natural tongue movement, supporting jaw and teeth alignment.

      **Comfort and Fit**
      Slim shield with large ventilation holes reduces skin irritation, accepted by over 94% of babies in studies.

      **Hygiene Features**
      Comes with a sterilizing box for quick, hygienic storage and travel.

      **Drawbacks**
      The lightweight nipple can sometimes pop out during vigorous sucking.
    `,
    userReviews: [
      {
        id: 1,
        author: "Noah Z.",
        rating: 5,
        date: "October 5, 2025",
        text: "My fussy baby calms instantly – the thin design is perfect.",
        helpful: 29,
        verified: true,
      },
      {
        id: 2,
        author: "Zoe Q.",
        rating: 4,
        date: "October 3, 2025",
        text: "Great for development, but we lost one already – durable but small.",
        helpful: 13,
        verified: true,
      },
      {
        id: 3,
        author: "Liam V.",
        rating: 5,
        date: "September 30, 2025",
        text: "Easy to clean and baby loves it. Best paci we've tried!",
        helpful: 20,
        verified: true,
      },
    ],
  },
  "chicco-corso-modular-travel-system-stroller": {
    id: 8,
    slug: "chicco-corso-modular-travel-system-stroller",
    name: "Chicco Corso Modular Travel System Stroller",
    category: "Transport",
    price: "₽15,990",
    originalPrice: "₽18,990",
    rating: 4.6,
    reviews: 98,
    images: ["https://m.media-amazon.com/images/I/71kyIawe2NL._SX679_.jpg", "https://m.media-amazon.com/images/I/71kyIawe2NL._SX679_.jpg", "https://m.media-amazon.com/images/I/71kyIawe2NL._SX679_.jpg"],
    description: "All-in-one modular stroller with car seat adapter, reversible seat, and all-terrain wheels.",
    badge: "",
    amazonLink: "https://www.amazon.com/Chicco-Corso-Modular-Travel-System/dp/",
    pros: [
      "Modular with car seat compatibility",
      "Reversible seat position",
      "All-wheel suspension",
      "Large storage basket",
      "One-hand fold",
    ],
    cons: ["Heavier than lightweight models", "Canopy coverage limited", "Higher price for full system"],
    specifications: {
      Weight: "11.3 kg",
      Age: "From birth to 22 kg",
      Size: "Folded: 60 x 85 x 35 cm",
      Manufacturer: "Chicco",
      Country: "Italy",
      Warranty: "2 years",
    },
    overallScore: 4.6,
    scores: {
      quality: 4.7,
      safety: 4.7,
      usability: 4.5,
      value: 4.4,
    },
    detailedReview: `
      The Chicco Corso Modular Travel System offers seamless transitions from car to stroll.

      **Modularity**
      Includes adapters for KeyFit car seats, with a reversible seat for parent or world-facing views.

      **Maneuverability**
      All-terrain wheels and suspension handle city streets and light off-road effortlessly.

      **Storage and Fold**
      Expansive under-basket holds essentials; compact fold fits most trunks with ease.

      **Drawbacks**
      At 11kg, it's not the lightest, and the canopy could extend further for better UV protection.
    `,
    userReviews: [
      {
        id: 1,
        author: "Harper E.",
        rating: 5,
        date: "October 6, 2025",
        text: "Versatile and smooth ride – perfect for urban adventures.",
        helpful: 16,
        verified: true,
      },
      {
        id: 2,
        author: "Lucas M.",
        rating: 4,
        date: "October 4, 2025",
        text: "Solid build, but wish it was a bit lighter for daily use.",
        helpful: 10,
        verified: true,
      },
      {
        id: 3,
        author: "Ella R.",
        rating: 5,
        date: "September 28, 2025",
        text: "The modular setup saved us from buying separate items!",
        helpful: 14,
        verified: true,
      },
    ],
  },
  "aveeno-baby-shampoo-natural-tear-free": {
    id: 9,
    slug: "aveeno-baby-shampoo-natural-tear-free",
    name: "Aveeno Baby Shampoo Natural Tear-Free",
    category: "Bath",
    price: "₽450",
    originalPrice: "₽590",
    rating: 4.5,
    reviews: 445,
    images: ["https://m.media-amazon.com/images/I/71mYCi+-LdL._SX679_.jpg", "https://m.media-amazon.com/images/I/71mYCi+-LdL._SX679_.jpg", "https://m.media-amazon.com/images/I/71mYCi+-LdL._SX679_.jpg"],
    description: "Gentle, oat-based shampoo that nourishes scalp and is free of tears or harsh chemicals.",
    badge: "",
    amazonLink: "https://www.amazon.com/Aveeno-Baby-Shampoo-Natural-Tear-Free/dp/",
    pros: [
      "Colloidal oatmeal for soothing",
      "Tear-free and paraben-free",
      "Hypoallergenic formula",
      "Light, fresh scent",
      "Dermatologist recommended",
    ],
    cons: ["Small bottle size", "Lathers less than others", "May not rinse as quickly"],
    specifications: {
      Volume: "18 oz",
      Ingredients: "Colloidal oatmeal, natural extracts",
      Age: "Newborn+",
      Manufacturer: "Aveeno",
      Country: "USA",
      Warranty: "Money-back guarantee",
    },
    overallScore: 4.5,
    scores: {
      quality: 4.6,
      safety: 4.7,
      usability: 4.4,
      value: 4.3,
    },
    detailedReview: `
      Aveeno Baby Shampoo delivers gentle cleansing with proven skin-soothing benefits.

      **Natural Ingredients**
      Infused with prebiotic colloidal oatmeal, it calms sensitive scalps and prevents dryness.

      **Gentle on Eyes**
      Ophthalmologist-tested tear-free formula ensures worry-free bath times.

      **Daily Use**
      Mild lather rinses cleanly without residue, suitable for frequent washes.

      **Drawbacks**
      The pump bottle is on the smaller side for the price, and it may require more product for thick hair.
    `,
    userReviews: [
      {
        id: 1,
        author: "Mason U.",
        rating: 5,
        date: "October 5, 2025",
        text: "No more eye stinging, and my baby's cradle cap improved noticeably.",
        helpful: 37,
        verified: true,
      },
      {
        id: 2,
        author: "Aria O.",
        rating: 4,
        date: "October 2, 2025",
        text: "Very gentle, but the scent is subtle – almost too mild.",
        helpful: 19,
        verified: true,
      },
      {
        id: 3,
        author: "Jack T.",
        rating: 5,
        date: "September 25, 2025",
        text: "Affordable and effective for daily baths. Skin stays soft!",
        helpful: 26,
        verified: true,
      },
    ],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = products[slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/reviews" className="hover:text-primary">
              Reviews
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{product.category}</Badge>
                  {product.badge && <Badge variant="secondary">{product.badge}</Badge>}
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-balance">{product.name}</h1>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">{product.originalPrice}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  Price may vary. Check current price on seller's website.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1" asChild>
                  <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Buy on Amazon
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="mr-2 h-5 w-5" />
                  Favorites
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Quick Scores */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Our Rating</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Quality</span>
                        <span>{product.scores.quality}</span>
                      </div>
                      <Progress value={product.scores.quality * 20} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Safety</span>
                        <span>{product.scores.safety}</span>
                      </div>
                      <Progress value={product.scores.safety * 20} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Usability</span>
                        <span>{product.scores.usability}</span>
                      </div>
                      <Progress value={product.scores.usability * 20} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Value</span>
                        <span>{product.scores.value}</span>
                      </div>
                      <Progress value={product.scores.value * 20} />
                    </div>
                  </div>
                  <Separator />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{product.overallScore}</div>
                    <div className="text-sm text-muted-foreground">Overall Score</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="review" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="review">Detailed Review</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="pros-cons">Pros & Cons</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>

            <TabsContent value="review" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Review</CardTitle>
                  <CardDescription>Our expert tested this product for several months</CardDescription>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <div className="whitespace-pre-line text-foreground leading-relaxed">{product.detailedReview}</div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specs" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border">
                        <span className="font-medium">{key}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pros-cons" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="h-5 w-5" />
                      Advantages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {product.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600">
                      <XCircle className="h-5 w-5" />
                      Disadvantages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {product.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <div className="space-y-6">
                {product.userReviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="font-medium">{review.author}</div>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Verified Purchase
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">{review.date}</div>
                        </div>

                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>

                        <p className="text-muted-foreground leading-relaxed">{review.text}</p>

                        <div className="flex items-center gap-4 pt-2">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Helpful ({review.helpful})
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ThumbsDown className="h-4 w-4 mr-1" />
                            Not Helpful
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="text-center">
                  <Button variant="outline">Load More Reviews</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Back to Reviews */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="outline" asChild>
            <Link href="/reviews">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Reviews
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
