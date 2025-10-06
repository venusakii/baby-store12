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
    images: [
      "https://m.media-amazon.com/images/I/81bf0fqJVHL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81bf0fqJVHL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81bf0fqJVHL._AC_SX679_.jpg",
    ],
    description:
      "Soft diapers with superior 12-hour protection and hypoallergenic materials designed for sensitive baby skin.",
    badge: "Editor's Choice",
    amazonLink: "https://www.amazon.com/Pampers-Disposable-Hypoallergenic-Fragrance-Protection/dp/",
    pros: [
      "Exceptional 12-hour leak protection",
      "Ultra-soft, hypoallergenic materials",
      "Wetness indicator for easy monitoring",
      "Flexible fit with stretchy waistband",
      "Dermatologist-tested for safety",
    ],
    cons: ["Premium pricing", "Sizes may run slightly large", "Bulkier feel for some"],
    specifications: {
      Size: "Newborn (2-5 kg)",
      Quantity: "96 pcs per pack",
      Material: "Non-woven fabric, super-absorbent gel",
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
      Pampers Hypoallergenic Diapers set a high standard for baby hygiene products, combining comfort with reliable performance.

      **Absorption Technology**
      The core features 3x absorbency zones that lock in wetness instantly, keeping baby's skin dry for up to 12 hours even during active nights.

      **Skin Protection**
      Fragrance-free and hypoallergenic, these diapers minimize irritation risks, with breathable materials that promote airflow.

      **User-Friendly Features**
      The color-changing wetness indicator simplifies changes, while the soft, flexible design ensures a snug, comfortable fit.

      **Drawbacks**
      While effective, the cost is higher than basic options, and some parents find the sizing generous for smaller newborns.
    `,
    userReviews: [
      {
        id: 1,
        author: "Sarah L.",
        rating: 5,
        date: "October 1, 2025",
        text: "No more overnight leaks and my baby's skin stays perfectly dry. A total game-changer!",
        helpful: 45,
        verified: true,
      },
      {
        id: 2,
        author: "James R.",
        rating: 4,
        date: "September 28, 2025",
        text: "Great quality, but the pack is huge - excellent value though.",
        helpful: 22,
        verified: true,
      },
      {
        id: 3,
        author: "Emily T.",
        rating: 5,
        date: "September 25, 2025",
        text: "Switched brands and saw no more rashes. Highly recommend for sensitive skin!",
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
    images: [
      "https://m.media-amazon.com/images/I/713FG+eNC4L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/713FG+eNC4L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/713FG+eNC4L._SX679_.jpg",
    ],
    description:
      "Interactive Montessori-inspired play mat for sensory development with textured toys and mirrors.",
    badge: "Top Seller",
    amazonLink: "https://www.amazon.com/Skip-Hop-Montessori-Inspired-Discoverosity/dp/",
    pros: [
      "Encourages sensory exploration",
      "Waterproof and easy to wipe clean",
      "Removable arches for flexibility",
      "Develops motor skills effectively",
      "Safe, non-toxic construction",
    ],
    cons: ["Assembly takes time", "Large footprint", "Limited colors"],
    specifications: {
      Size: "71 x 71 inches unfolded",
      Age: "0+ months",
      Material: "Waterproof fabric, BPA-free plastic",
      Manufacturer: "Skip Hop",
      Country: "China",
      Warranty: "1 year limited",
    },
    overallScore: 4.9,
    scores: {
      quality: 4.8,
      safety: 4.9,
      usability: 5.0,
      value: 4.8,
    },
    detailedReview: `
      The Skip Hop Discoverosity Play Mat transforms tummy time into educational play with Montessori principles at heart.

      **Sensory Engagement**
      Textured cards, crinkly fabrics, and a mirror stimulate sight, touch, and sound for holistic development.

      **Durability**
      The padded, waterproof base withstands spills and daily use, folding neatly for storage.

      **Versatility**
      Detachable arches allow conversion from overhead activity gym to flat mat as baby grows.

      **Drawbacks**
      Setup involves multiple parts, and its size may overwhelm small living spaces.
    `,
    userReviews: [
      {
        id: 1,
        author: "Lisa M.",
        rating: 5,
        date: "October 3, 2025",
        text: "My baby is obsessed with the textures - tummy time is now fun!",
        helpful: 19,
        verified: true,
      },
      {
        id: 2,
        author: "David W.",
        rating: 5,
        date: "September 30, 2025",
        text: "Wipes clean easily and holds up to rough play. Love it!",
        helpful: 15,
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
    images: [
      "https://m.media-amazon.com/images/I/71Ef0nn6c+S._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71Ef0nn6c+S._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71Ef0nn6c+S._SX679_.jpg",
    ],
    description:
      "Natural response bottle mimicking breastfeeding flow with anti-colic valve for smooth feeding.",
    badge: "Bestseller",
    amazonLink: "https://www.amazon.com/Philips-Natural-Response-SCD838-02/dp/",
    pros: [
      "Responsive flow prevents gulping",
      "Wide neck for simple cleaning",
      "BPA-free and dishwasher-safe",
      "Supports combo feeding",
      "Ergonomic grip design",
    ],
    cons: ["Nipple wears with heavy use", "Heavier than glass options", "Fewer size variants"],
    specifications: {
      Volume: "120 ml (4 oz)",
      Material: "Polypropylene body, silicone nipple",
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
      Philips Natural Response Bottle excels in natural feeding simulation for breastfed babies.

      **Flow Mechanism**
      The valve releases milk only on demand, reducing colic and spit-up by minimizing air intake.

      **Hygiene**
      Wide mouth allows thorough cleaning; compatible with sterilizers and top-rack dishwasher safe.

      **Compatibility**
      Integrates seamlessly with Philips pumps, ideal for working parents.

      **Drawbacks**
      Nipples may need frequent replacement with avid feeders.
    `,
    userReviews: [
      {
        id: 1,
        author: "Anna K.",
        rating: 5,
        date: "October 4, 2025",
        text: "Baby accepts it like the breast - no more feeding fights!",
        helpful: 28,
        verified: true,
      },
      {
        id: 2,
        author: "Tom H.",
        rating: 4,
        date: "October 1, 2025",
        text: "Anti-colic works well, but seal tightly to avoid drips.",
        helpful: 16,
        verified: true,
      },
      {
        id: 3,
        author: "Sophia G.",
        rating: 5,
        date: "September 28, 2025",
        text: "Easy clean and baby loves it. Worth the investment.",
        helpful: 21,
        verified: true,
      },
    ],
  },
  "kyte-baby-unisex-sleeping-bag-toddlers": {
    id: 4,
    slug: "kyte-baby-unisex-sleeping-bag-toddlers",
    name: "Kyte Baby Unisex Sleeping Bag for Toddlers",
    category: "Sleep",
    price: "₽2,290",
    originalPrice: "₽2,790",
    rating: 4.8,
    reviews: 156,
    images: [
      "https://m.media-amazon.com/images/I/31OuY4OJ3hL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/31OuY4OJ3hL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/31OuY4OJ3hL._AC_SX679_.jpg",
    ],
    description:
      "Organic bamboo sleeping bag for safe and comfortable sleep with adjustable fit for growing toddlers.",
    badge: "Recommended",
    amazonLink: "https://www.amazon.com/KYTE-BABY-Unisex-Sleeping-Toddlers/dp/",
    pros: [
      "Breathable bamboo fabric",
      "Easy zipper entry",
      "Adjustable shoulder snaps",
      "Safe sleep approved",
      "Machine washable",
    ],
    cons: ["Runs small, size up", "Zipper can snag", "Limited patterns"],
    specifications: {
      Size: "6-12 months",
      Material: "95% bamboo viscose, 5% spandex",
      Age: "Newborn to 24 months",
      Manufacturer: "Kyte Baby",
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
      Kyte Baby Sleeping Bag prioritizes safe, cozy sleep with sustainable materials.

      **Fabric Benefits**
      Bamboo viscose wicks moisture and regulates temperature for comfortable all-night wear.

      **Design Features**
      Envelope neck prevents loose strings; bottom zipper allows easy diaper changes.

      **Fit and Growth**
      Expandable sizing accommodates growth phases without bunching.

      **Drawbacks**
      Fabric's softness may pill with frequent washes; initial sizing is snug.
    `,
    userReviews: [
      {
        id: 1,
        author: "Emma J.",
        rating: 5,
        date: "October 2, 2025",
        text: "So soft and my toddler sleeps soundly through the night.",
        helpful: 14,
        verified: true,
      },
      {
        id: 2,
        author: "Mark D.",
        rating: 5,
        date: "September 29, 2025",
        text: "Breathable and easy access - no more middle-of-night struggles.",
        helpful: 12,
        verified: true,
      },
      {
        id: 3,
        author: "Grace P.",
        rating: 4,
        date: "September 26, 2025",
        text: "Adorable, but size up for chubby legs.",
        helpful: 9,
        verified: true,
      },
    ],
  },
  "cybex-travel-system-stroller-lightweight": {
    id: 5,
    slug: "cybex-travel-system-stroller-lightweight",
    name: "Cybex Travel System Stroller Lightweight",
    category: "Transport",
    price: "₽28,990",
    originalPrice: "₽32,990",
    rating: 4.8,
    reviews: 87,
    images: [
      "https://m.media-amazon.com/images/I/51zlTnkiKEL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/51zlTnkiKEL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/51zlTnkiKEL._SX679_.jpg",
    ],
    description:
      "Lightweight travel system stroller with car seat compatibility and all-wheel suspension for smooth rides.",
    badge: "Premium",
    amazonLink: "https://www.amazon.com/Cybex-Travel-System-Stroller-Lightweight/dp/",
    pros: [
      "One-hand fold mechanism",
      "Integrated car seat adapters",
      "All-terrain wheels",
      "Large storage basket",
      "Reversible seat unit",
    ],
    cons: ["Hefty price tag", "Assembly required", "Canopy limited UV"],
    specifications: {
      Weight: "10.5 kg",
      Age: "From birth to 22 kg",
      Material: "Aluminum frame, polyester fabric",
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
      Cybex Lightweight Travel System blends luxury with practicality for urban parents.

      **Maneuverability**
      Suspension and swivel wheels glide over sidewalks and light terrain effortlessly.

      **Versatility**
      Compatible with Cybex infant seats; reversible seat faces parent or world.

      **Compactness**
      Folds flat one-handed, fitting small trunks without hassle.

      **Drawbacks**
      Initial setup needs tools; premium cost reflects engineering.
    `,
    userReviews: [
      {
        id: 1,
        author: "Olivia S.",
        rating: 5,
        date: "October 5, 2025",
        text: "Smooth ride and easy switch from car to stroll - luxury on wheels!",
        helpful: 25,
        verified: true,
      },
      {
        id: 2,
        author: "Ryan C.",
        rating: 5,
        date: "October 2, 2025",
        text: "Safety features give total peace of mind.",
        helpful: 18,
        verified: true,
      },
    ],
  },
  "musical-mobile-linkable-stroller-take-along": {
    id: 6,
    slug: "musical-mobile-linkable-stroller-take-along",
    name: "Musical Mobile Linkable Stroller Take-Along",
    category: "Development",
    price: "₽3,890",
    originalPrice: "₽4,590",
    rating: 4.7,
    reviews: 189,
    images: [
      "https://m.media-amazon.com/images/I/71WX431cYkL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71WX431cYkL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71WX431cYkL._SX679_.jpg",
    ],
    description:
      "Portable musical mobile for crib and stroller entertainment with soothing tunes and spinning toys.",
    badge: "New",
    amazonLink: "https://www.amazon.com/Musical-Mobile-linkable-Stroller-take-Along/dp/",
    pros: [
      "Clips to multiple surfaces",
      "10 calming melodies",
      "Battery-operated portability",
      "Soft, detachable toys",
      "Volume control",
    ],
    cons: ["Batteries drain fast", "Clip may slip", "Limited projection"],
    specifications: {
      Age: "0-6 months",
      Material: "Fabric, plastic",
      Power: "3 AA batteries",
      Size: "12 x 8 inches",
      Manufacturer: "Bright Starts",
      Country: "China",
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
      This take-along mobile keeps baby entertained anywhere with gentle motion and music.

      **Portability**
      Universal clip attaches to cribs, strollers, and play yards for on-the-go soothing.

      **Audio Features**
      Ten minutes of continuous play per activation with varied lullabies to settle baby.

      **Visual Stimulation**
      Spinning plush toys capture attention, promoting visual tracking.

      **Drawbacks**
      Frequent battery changes needed; clip stability varies by surface.
    `,
    userReviews: [
      {
        id: 1,
        author: "Mia F.",
        rating: 5,
        date: "October 4, 2025",
        text: "Perfect for outings - baby stares mesmerized!",
        helpful: 32,
        verified: true,
      },
      {
        id: 2,
        author: "Ethan B.",
        rating: 4,
        date: "October 1, 2025",
        text: "Tunes are soothing, but replace batteries often.",
        helpful: 17,
        verified: true,
      },
      {
        id: 3,
        author: "Isabella Y.",
        rating: 5,
        date: "September 27, 2025",
        text: "Compact and effective for naps anywhere.",
        helpful: 24,
        verified: true,
      },
    ],
  },
  "pacifiers-pacifier-breastfed-premium-collection": {
    id: 7,
    slug: "pacifiers-pacifier-breastfed-premium-collection",
    name: "Pacifiers for Breastfed Babies Premium Collection",
    category: "Feeding",
    price: "₽890",
    originalPrice: "₽1,090",
    rating: 4.7,
    reviews: 312,
    images: [
      "https://m.media-amazon.com/images/I/71MwLtASoWL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71MwLtASoWL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71MwLtASoWL._SX679_.jpg",
    ],
    description:
      "Orthodontic pacifiers designed for breastfed newborns with nipple shape that supports natural latch.",
    badge: "",
    amazonLink: "https://www.amazon.com/Pacifiers-Pacifier-Breastfed-Premium-Collection/dp/",
    pros: [
      "Breast-like nipple shape",
      "Thin collar for comfort",
      "BPA-free silicone",
      "Sterilizer case included",
      "Multiple pack options",
    ],
    cons: ["May fall out easily", "Not for preemies", "Replacements costly"],
    specifications: {
      Size: "0-6 months",
      Material: "Medical-grade silicone",
      Quantity: "2-pack",
      Manufacturer: "Chicco",
      Country: "Italy",
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
      These premium pacifiers prioritize oral health for breastfed babies.

      **Design**
      Symmetrical, thin nipple promotes natural jaw development without over-correction.

      **Comfort**
      Ventilated shield reduces skin irritation; high acceptance rate in trials.

      **Hygiene**
      Includes travel sterilizer; dishwasher-safe components.

      **Drawbacks**
      Lightweight design may dislodge during sleep.
    `,
    userReviews: [
      {
        id: 1,
        author: "Noah Z.",
        rating: 5,
        date: "October 5, 2025",
        text: "Calms my fussy breastfed baby instantly.",
        helpful: 29,
        verified: true,
      },
      {
        id: 2,
        author: "Zoe Q.",
        rating: 4,
        date: "October 3, 2025",
        text: "Great shape, but we've lost a few already.",
        helpful: 13,
        verified: true,
      },
      {
        id: 3,
        author: "Liam V.",
        rating: 5,
        date: "September 30, 2025",
        text: "Easy to clean and baby accepts right away.",
        helpful: 20,
        verified: true,
      },
    ],
  },
  "chicco-travel-system-quick-fold-stroller": {
    id: 8,
    slug: "chicco-travel-system-quick-fold-stroller",
    name: "Chicco Travel System Quick-Fold Stroller",
    category: "Transport",
    price: "₽15,990",
    originalPrice: "₽18,990",
    rating: 4.6,
    reviews: 98,
    images: [
      "https://m.media-amazon.com/images/I/712eCBP5jSL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/712eCBP5jSL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/712eCBP5jSL._SX679_.jpg",
    ],
    description:
      "Quick-fold travel system stroller for easy portability with integrated car seat adapters.",
    badge: "",
    amazonLink: "https://www.amazon.com/Chicco-Travel-System-Quick-Fold-Stroller/dp/",
    pros: [
      "Compact one-hand fold",
      "Compatible with Chicco seats",
      "Suspension for smooth push",
      "Generous storage",
      "Reclining seat positions",
    ],
    cons: ["Heavier than ultra-lights", "Canopy extension needed", "Pricey full kit"],
    specifications: {
      Weight: "11 kg",
      Age: "Birth to 22 kg",
      Material: "Steel frame, fabric upholstery",
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
      Chicco Quick-Fold Stroller streamlines travel with seamless car-to-stroll transitions.

      **Folding System**
      Self-standing fold locks securely, ideal for small spaces or trunks.

      **Ride Comfort**
      All-wheel suspension absorbs bumps; multi-recline seat suits naps.

      **Accessories**
      Includes adapters for KeyFit seats; expandable basket holds essentials.

      **Drawbacks**
      Weight impacts portability; canopy could extend further.
    `,
    userReviews: [
      {
        id: 1,
        author: "Harper E.",
        rating: 5,
        date: "October 6, 2025",
        text: "Folds in seconds - perfect for city life.",
        helpful: 16,
        verified: true,
      },
      {
        id: 2,
        author: "Lucas M.",
        rating: 4,
        date: "October 4, 2025",
        text: "Reliable, but a bit heavy for stairs.",
        helpful: 10,
        verified: true,
      },
    ],
  },
  "aveeno-baby-calming-comfort-lavender-bath": {
    id: 9,
    slug: "aveeno-baby-calming-comfort-lavender-bath",
    name: "Aveeno Baby Calming Comfort Lavender Bath",
    category: "Bath",
    price: "₽450",
    originalPrice: "₽590",
    rating: 4.5,
    reviews: 445,
    images: [
      "https://m.media-amazon.com/images/I/71qVHu-1UUL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71qVHu-1UUL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71qVHu-1UUL._AC_SX679_.jpg",
    ],
    description:
      "Gentle lavender bath for soothing and calming baby with natural oat extract for sensitive skin.",
    badge: "",
    amazonLink: "https://www.amazon.com/Aveeno-Baby-Calming-Comfort-Lavender/dp/",
    pros: [
      "Calms fussy babies quickly",
      "Tear-free and hypoallergenic",
      "Oat-based soothing formula",
      "Light, pleasant lavender scent",
      "Pediatrician recommended",
    ],
    cons: ["Foam dissipates fast", "Small bottle", "Scent too mild for some"],
    specifications: {
      Volume: "18 fl oz",
      Ingredients: "Colloidal oatmeal, lavender extract",
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
      Aveeno Calming Bath creates peaceful bath times with gentle, effective ingredients.

      **Soothing Properties**
      Colloidal oatmeal relieves dry skin; lavender promotes relaxation.

      **Gentleness**
      pH-balanced, tear-free formula cleanses without eye sting or dryness.

      **Ease of Use**
      Rich lather rinses cleanly, leaving soft, fragrant skin.

      **Drawbacks**
      Bubbles fade quicker than foaming alternatives; bottle size limits value.
    `,
    userReviews: [
      {
        id: 1,
        author: "Mason U.",
        rating: 5,
        date: "October 5, 2025",
        text: "Bedtime routine savior - baby relaxes instantly.",
        helpful: 37,
        verified: true,
      },
      {
        id: 2,
        author: "Aria O.",
        rating: 4,
        date: "October 2, 2025",
        text: "Gentle and calming, scent is subtle though.",
        helpful: 19,
        verified: true,
      },
      {
        id: 3,
        author: "Jack T.",
        rating: 5,
        date: "September 25, 2025",
        text: "No irritation, skin stays moisturized. Great buy!",
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
