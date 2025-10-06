"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Star, ShoppingCart, Share2, CheckCircle, XCircle, ArrowLeft, ThumbsUp, ThumbsDown } from "lucide-react"
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
    amazonLink:
      "https://www.amazon.com/Pampers-Protection-Leakproof-Plant-Based-Hypoallergenic/dp/B0F55QRPNH/ref=sr_1_8?crid=3MDJHPCNM48MP&dib=eyJ2IjoiMSJ9.1tn3Zt3KS8gDIgnxYUWLhl-2QKpHsLqYoeTo2gQo_4NKkp9-bqKkIXVnbLFj8ZmPx6j5ZD-ljj84WpbRllFCJ_IkCFgvX1TebPqdiamkQGz1twMak34OWqiDedOB-M7iPHZyM-ewjl2Km0NNhlbD01jaev293K7ZrE9fDgRhLWAw2rFAJGu-6nVV7KpeXcOrbFc0ddWdmg1WmugUIREoMyFcmX_p8b_-i1SOTwCGR3rNttCI0WTMT0nG-UsGAi1mTcNGPUjXKRIBVBsXa0HF5jBiLjAibWm3uQvt9mzUQcc.xuzbnk6yVSepJzS-_npAYwS61KgVPooWSJGr5IfZ60I&dib_tag=se&keywords=Pampers+Disposable+Hypoallergenic+Fragrance+Free+Diapers&qid=1759761644&sprefix=pampers+disposable+hypoallergenic+fragrance+free+diapers%2Caps%2C769&sr=8-8",
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
    description: "Interactive Montessori-inspired play mat for sensory development with textured toys and mirrors.",
    badge: "Top Seller",
    amazonLink:
      "https://www.amazon.com/Skip-Hop-Montessori-Inspired-Discoverosity/dp/B0C85L3Y3P/ref=sr_1_1?crid=2VN5PKL0HZ50B&dib=eyJ2IjoiMSJ9.Px6JRcK_b-UqZfVupL1uxgAqyp261V73xu9LGmyRuu_fxDiw3YN3AlCYCo5dHpiP2u0LwHaM10YPtjkMnyWvkHvx0ajCCAvvX1eMG0RzlaQaZsHc3pek1rLf2VPW7beBc0f6KfdABwzzoIe3qXgAuTrDHrDKG8SYa-bUfc-RWHMxxlvjWHdz5boxjqdApFRbFYWyoKcY8FXGZU_7k7zeJw87kxNTBf-Xls-10601h_AfGYCXYxocq0C50jYIq79Acg7waeh2llfzrdlUQSreebMwnLR903NqbCNPa74mC1g.s5FyUrRy1ODQtiFj-PcjuVUNZ4egDaotBO62msLgrog&dib_tag=se&keywords=Skip%2BHop%2BMontessori%2BInspired%2BDiscoverosity%2BPlay%2BMat&qid=1759761764&sprefix=skip%2Bhop%2Bmontessori%2Binspired%2Bdiscoverosity%2Bplay%2Bmat%2Caps%2C834&sr=8-1&th=1",
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
    description: "Natural response bottle mimicking breastfeeding flow with anti-colic valve for smooth feeding.",
    badge: "Bestseller",
    amazonLink:
      "https://www.amazon.com/Philips-Natural-Response-SCD838-02/dp/B098YHK4CN/ref=sr_1_5?crid=2DCWN6703SNCU&dib=eyJ2IjoiMSJ9.nTYS1tvmS3oymRMvBAOYDls_81omxWeDraxQIP8kbXS8OF2GV4BBJ_u03dLHrHS0XWp7z9E5RBzqQeH15PBYwzgdu0EKVD0DvmNI6Qyl7OlWq9El4ezfOfb4YepzQarX7DSTdXe-0nahnYxnBeHb7hQbkXLwh6vIyLIhp17XiUx33i6MHCoqfFRruhRfj0leGuBadFYIJHITWjDH2IpDV5R5ecIN6UE2cinqmluDvQzYYx0ze0XkTiXGVUr-G4B51Q3B1M3PI4w_H1ZVhZRq40FE23eMGY8AINzpvgmrFb8.JMNoOxkdD_lsbVprUXbbU0MO7hLNqMR32M0zJ2TCzjc&dib_tag=se&keywords=Philips%2BNatural%2BResponse%2BBottle%2BSCD838%2F02&qid=1759761803&sprefix=philips%2Bnatural%2Bresponse%2Bbottle%2Bscd838%2F02%2Caps%2C219&sr=8-5&th=1",
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
    description: "Organic bamboo sleeping bag for safe and comfortable sleep with adjustable fit for growing toddlers.",
    badge: "Recommended",
    amazonLink:
      "https://www.amazon.com/KYTE-BABY-Unisex-Sleeping-Toddlers/dp/B07PF1D4WD/ref=sr_1_1_sspa?crid=2E9D51SJ1SX5I&dib=eyJ2IjoiMSJ9.hd9T4p9pE8y19KQIMmgt3Pwh4K1XEofYvoUvJMZ6tZoID1jlRACjvn0A0-5qt-FkvgVIZLNyWsv6H2_G3cuAL7giqQDS_89Aad8OnRcrsIx1ryLAGBj8jLuBmF6r_2iJ3awD9DIcdDLq_h0H6jvRvKWQHskn2GFwGljyoQkfCppbxXBnXLKzZ2NnQDEXGodcicmbW0OIiBJvENEnSBt9XYEXtja0YX-N4V9Eotg7yvZIyVydDMeLQgxCqMkWd4LwgpMDmtmCT9bCZ8g5pOfij5TIor_HpqsEFtfitb5clnc.hDDBdzq66z-NAiN6fjbshjWOUsdlBiMfOKhCf6QqhHE&dib_tag=se&keywords=Kyte+Baby+Unisex+Sleeping+Bag+for+Toddlers&qid=1759761880&sprefix=kyte+baby+unisex+sleeping+bag+for+toddlers%2Caps%2C728&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
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
    amazonLink:
      "https://www.amazon.com/Cybex-Travel-System-Stroller-Lightweight/dp/B0F495CN11/ref=sr_1_1?crid=2R4VD21JC5E9T&dib=eyJ2IjoiMSJ9.uTBE9kRCKJV8Ob6HOlmxGQg97PYyO3SQ_3410A-rcnWBgL9PAT7vR4Ee6sLsEenfXD4EjfjIk5atvLL-paR-zGy-W_GlTeDgQsNZeATshuN2TOlY5TXPSj-24Qn8Keh1lhz6s1vxSzLZ9Hx9ryFuyVn4lnEDGelVYwCAhat3WQEQbpXYDwVWPC7GvLBxfzKDUSB9mtUbm9sN-4FkXE6uY_c6pYII5lgqH4aeyhApmR0.NnV1nmLrK0UHh2Edy1CGhF5utMwP-2XdOKqGVZWN2Qg&dib_tag=se&keywords=Cybex+Travel+System+Stroller+Lightweight&qid=1759761951&sprefix=cybex+travel+system+stroller+lightweight%2Caps%2C811&sr=8-1",
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
      Weight impacts portability; canopy could extend further.
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
    description: "Portable musical mobile for crib and stroller entertainment with soothing tunes and spinning toys.",
    badge: "New",
    amazonLink:
      "https://www.amazon.com/Tiny-Love-Along-Mobile-Treasure/dp/B09S6VNVC4/ref=sr_1_2?crid=3FTDPSHN4V41H&dib=eyJ2IjoiMSJ9.VVo93q_froRU0XAzTj2aHxoE8YRpzjsjlEEzw30sxD9i_juGXGjb-jUZOj5l2Rn6cZZDymH4TvZpkhOgKf2Bk02OPaelORHeFVcHCvMOKhhBh1BCtafL1-r6Pek_UU6MF2THKvaXlrrlb4ZiUvzvnduyWKWhALqv2jnLj9YL6cWWzC5EQKvFHwp0Gyc1k8HVqdeNBFUSKFOnlKjHucbq_zGVY459cp4418mX_gjLnoZAJ_Klx7rz4j8vP-rqCtx8glQ2gzi5hZd3Fw1KHZoNsqjyG70_grKaOXhw3AcQKtA.3wuIFfJZme9G-_6opexf8zWk6Y52ISAiOj5oNiYlVD8&dib_tag=se&keywords=Musical%2BMobile%2BLinkable%2BStroller%2BTake-Along&qid=1759762113&sprefix=musical%2Bmobile%2Blinkable%2Bstroller%2Btake-along%2Caps%2C221&sr=8-2&th=1",
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
    description: "Orthodontic pacifiers designed for breastfed newborns with nipple shape that supports natural latch.",
    badge: "",
    amazonLink:
      "https://www.amazon.com/BIBS-Pacifiers-Collection-BPA-Free-Woodchuck/dp/B09N9S69L1/ref=sr_1_22?crid=1I4UC4U1RUOMK&dib=eyJ2IjoiMSJ9.mrPzk2TtittBlulBuGoAaFK_rvQuproN_-3FaTtNLqZcWZ8vhEmC_MSP-GJv74WB5EWHgtDPoMyWv0gxz7uatGKA1RIPhEiQpJ_apwqjmv7J75jTe2sUfEDlj770-BJVZncv4pS-Cyv0TXsUCIlLZAfZuMwtKgQVC8qbsS9hjctQ8ymDb5xqfo3hdYqa8f3X9xYKMFO1Sc7DsclbSJOinHncl9AebKsg1RfSbvCNcWbdC06vK8hFyAfw5V1bJVqzdUfeNDKa2nwtrqepfj5OXevSSCmTk4cgJ4iKAqzcArc.5oowkN5T3tr0HKqfb1DOGGDgnbBRvez1NxV3oNldRoI&dib_tag=se&keywords=Pacifiers%2Bfor%2BBreastfed%2BBabies%2BPremium%2BCollection&qid=1759762198&sprefix=pacifiers%2Bfor%2Bbreastfed%2Bbabies%2Bpremium%2Bcollection%2Caps%2C226&sr=8-22&th=1",
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
    description: "Quick-fold travel system stroller for easy portability with integrated car seat adapters.",
    badge: "",
    amazonLink:
      "https://www.amazon.com/Chicco-Bravo-Travel-System-Driftwood/dp/B0BV4XRMSH/ref=sr_1_1?crid=2MJBNG6N2GEVA&dib=eyJ2IjoiMSJ9.yp07-MOCLhnV7WxK6rAQZbPhCLJlpgUb9Egw8dHBseA75No0uRRDt519ECeuRr0KuWernnfMYqE8MxJzcmeni_Qk8y0pyQ583hPrfGHxa6CrG6bWUNriHK765_sJ5XU4X9C71TFA11-Yd9-ESkHyfBAUHZDIpYj1xnMtzUULCqIoc_JEiTRiNztOvH9XJsQ7cuk_X52Yy1PJNAHPiUAov5vvm45j5rJADrsFJ3h4QpI.W0GjjyF0SlcjJEflgHre9PUM_NVFvgLf4-zwdRDST48&dib_tag=se&keywords=Chicco%2BTravel%2BSystem%2BQuick-Fold%2BStroller&qid=1759762249&sprefix=chicco%2Btravel%2Bsystem%2Bquick-fold%2Bstroller%2Caps%2C230&sr=8-1&th=1",
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
    description: "Gentle lavender bath for soothing and calming baby with natural oat extract for sensitive skin.",
    badge: "",
    amazonLink:
      "https://www.amazon.com/Aveeno-Baby-Calming-Comfort-Lavender/dp/B01C8BR0CO/ref=sr_1_6?crid=TUBXNXVCXGUP&dib=eyJ2IjoiMSJ9.BbuWA2IYA9jKkvTn5sx7-AjW7jedUwBs90nK_oNbX-51mmcD_TR-lfO4Mals4oTLnKiacX3v-BDQzC_v0oWLhhfhMYC_7uDPWGYeirf7epJVaE6-hagxNm3gRwHeFSupVoFchQI2KD4hmFCVxOHG8MG7pFvanuY_T_IKjQ7nejoQe-ChFLbnIuhFn6Pva9SXjeBbQeV4fajacsV3ySb8mK5QeCEI7fC492DufUX9qOzT5qNrPhQK_J_cryL1KW7pzh5eE4squ5SHiVfvUHhrOjN2TQIbFSPsX0gvinwy-yU.loYBuDzihdNbC6ekneaT3n9NcMn9IpVxiLaGD1VFwU8&dib_tag=se&keywords=Aveeno+Baby+Calming+Comfort+Lavender+Bath&qid=1759762385&sprefix=aveeno+baby+calming+comfort+lavender+bath%2Caps%2C909&sr=8-6",
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

              <div className="flex justify-center">
                <button
                  onClick={() => {
                    window.open(product.amazonLink, "_blank", "noopener,noreferrer")
                  }}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-8 py-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Buy
                </button>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" size="lg" className="flex-1 bg-transparent">
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
