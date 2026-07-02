import { CoffeeBean, Testimonial, ProcessStep, Feature } from "@/types";

export const mockCoffeeBeans: CoffeeBean[] = [
  {
    id: "1",
    name: "Ethiopian Yirgacheffe",
    slug: "ethiopian-yirgacheffe",
    description: "A classic Ethiopian coffee with bright citrus notes and floral aroma. Grown at high altitudes in the Yirgacheffe region, this washed process coffee delivers exceptional clarity and complexity.",
    shortDescription: "Bright citrus, floral notes, clean finish",
    origin: "Ethiopia",
    region: "Yirgacheffe",
    farm: "Kochere Washing Station",
    altitude: "1,900-2,100m",
    variety: "Heirloom",
    process: "washed",
    roastLevel: "light",
    tastingNotes: ["Bergamot", "Jasmine", "Lemon", "Honey"],
    price: 24,
    currency: "USD",
    weight: "12oz",
    weightGrams: 340,
    image: "/images/beans/ethiopian-yirgacheffe.jpg",
    images: [
      "/images/beans/ethiopian-yirgacheffe.jpg",
      "/images/beans/ethiopian-yirgacheffe-2.jpg",
      "/images/beans/ethiopian-yirgacheffe-3.jpg"
    ],
    isNew: true,
    isFeatured: true,
    isBestseller: false,
    rating: 4.9,
    reviewCount: 127,
    inStock: true,
    harvestSeason: "October - January",
    certifications: ["Organic", "Fair Trade"]
  },
  {
    id: "2",
    name: "Colombian Supremo",
    slug: "colombian-supremo",
    description: "Our signature Colombian blend sourced from the finest Supremo beans. Medium roasted to bring out the natural sweetness and nutty character that makes Colombian coffee world-renowned.",
    shortDescription: "Rich caramel, toasted nuts, smooth body",
    origin: "Colombia",
    region: "Huila",
    farm: "Finca El Paraíso",
    altitude: "1,600-1,800m",
    variety: "Caturra, Castillo",
    process: "washed",
    roastLevel: "medium",
    tastingNotes: ["Caramel", "Almond", "Milk Chocolate", "Apple"],
    price: 20,
    currency: "USD",
    weight: "12oz",
    weightGrams: 340,
    image: "/images/beans/colombian-supremo.jpg",
    images: [
      "/images/beans/colombian-supremo.jpg",
      "/images/beans/colombian-supremo-2.jpg"
    ],
    isNew: false,
    isFeatured: true,
    isBestseller: true,
    rating: 4.8,
    reviewCount: 289,
    inStock: true,
    harvestSeason: "September - December",
    certifications: ["Rainforest Alliance"]
  },
  {
    id: "3",
    name: "Brazil Santos Natural",
    slug: "brazil-santos-natural",
    description: "A naturally processed Brazilian coffee with intense sweetness and full body. The natural process allows the coffee cherry to dry with the bean inside, creating unique fruit-forward flavors.",
    shortDescription: "Dried fruit, chocolate, heavy body, low acidity",
    origin: "Brazil",
    region: "Minas Gerais",
    farm: "Fazenda Santa Inês",
    altitude: "1,000-1,200m",
    variety: "Bourbon, Mundo Novo",
    process: "natural",
    roastLevel: "medium-dark",
    tastingNotes: ["Raisin", "Dark Chocolate", "Walnut", "Molasses"],
    price: 18,
    currency: "USD",
    weight: "12oz",
    weightGrams: 340,
    image: "/images/beans/brazil-santos.jpg",
    images: ["/images/beans/brazil-santos.jpg"],
    isNew: false,
    isFeatured: true,
    isBestseller: false,
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    harvestSeason: "May - September",
    certifications: ["UTZ Certified"]
  },
  {
    id: "4",
    name: "Guatemala Antigua",
    slug: "guatemala-antigua",
    description: "Grown in the volcanic soil of Antigua valley, this coffee offers complex spice notes with a silky body. The unique microclimate creates exceptional balance and depth.",
    shortDescription: "Cocoa, spice, silky body, wine-like acidity",
    origin: "Guatemala",
    region: "Antigua",
    farm: "Finca La Azotea",
    altitude: "1,500-1,700m",
    variety: "Bourbon, Catuai",
    process: "washed",
    roastLevel: "medium",
    tastingNotes: ["Dark Cocoa", "Cinnamon", "Orange", "Brown Sugar"],
    price: 22,
    currency: "USD",
    weight: "12oz",
    weightGrams: 340,
    image: "/images/beans/guatemala-antigua.jpg",
    images: ["/images/beans/guatemala-antigua.jpg"],
    isNew: true,
    isFeatured: false,
    isBestseller: false,
    rating: 4.8,
    reviewCount: 98,
    inStock: true,
    harvestSeason: "December - March",
    certifications: ["Bird Friendly"]
  },
  {
    id: "5",
    name: "Kenya AA",
    slug: "kenya-aa",
    description: "Kenya's finest AA grade beans deliver unparalleled brightness and complexity. Famous for its wine-like acidity and black currant notes, this is a connoisseur's favorite.",
    shortDescription: "Black currant, bright acidity, wine-like, complex",
    origin: "Kenya",
    region: "Nyeri",
    farm: "Kiamabara Factory",
    altitude: "1,700-1,900m",
    variety: "SL28, SL34",
    process: "washed",
    roastLevel: "light",
    tastingNotes: ["Black Currant", "Grapefruit", "Tomato", "Hibiscus"],
    price: 28,
    currency: "USD",
    weight: "12oz",
    weightGrams: 340,
    image: "/images/beans/kenya-aa.jpg",
    images: ["/images/beans/kenya-aa.jpg"],
    isNew: false,
    isFeatured: true,
    isBestseller: false,
    rating: 4.9,
    reviewCount: 76,
    inStock: true,
    harvestSeason: "October - February",
    certifications: ["Organic"]
  },
  {
    id: "6",
    name: "Costa Rica Tarrazú",
    slug: "costa-rica-tarrazu",
    description: "From the renowned Tarrazú region, this honey-processed coffee strikes the perfect balance between washed clarity and natural sweetness. Clean, bright, and elegantly structured.",
    shortDescription: "Honey sweetness, citrus, clean, balanced",
    origin: "Costa Rica",
    region: "Tarrazú",
    farm: "La Candelilla Estate",
    altitude: "1,600-1,850m",
    variety: "Caturra, Catuai",
    process: "honey",
    roastLevel: "medium-light",
    tastingNotes: ["Honey", "Apricot", "Green Apple", "Caramel"],
    price: 23,
    currency: "USD",
    weight: "12oz",
    weightGrams: 340,
    image: "/images/beans/costa-rica-tarrazu.jpg",
    images: ["/images/beans/costa-rica-tarrazu.jpg"],
    isNew: false,
    isFeatured: false,
    isBestseller: true,
    rating: 4.8,
    reviewCount: 143,
    inStock: true,
    harvestSeason: "November - March",
    certifications: ["Fair Trade", "Carbon Neutral"]
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Coffee Shop Owner",
    company: "Brew & Co., Portland",
    avatar: "/images/testimonials/sarah.jpg",
    content: "Bean & Brew has transformed our coffee program. The consistency and quality are unmatched—our customers notice the difference immediately. The Ethiopian Yirgacheffe is now our bestseller.",
    rating: 5,
    coffeeName: "Ethiopian Yirgacheffe"
  },
  {
    id: "2",
    name: "James Chen",
    role: "Software Engineer & Home Brewer",
    avatar: "/images/testimonials/james.jpg",
    content: "As someone who's particular about coffee, I appreciate the detailed tasting notes and roast dates. The subscription service means I never run out of fresh beans. The Colombia Supremo is my daily driver.",
    rating: 5,
    coffeeName: "Colombian Supremo"
  },
  {
    id: "3",
    name: "Maria Rodriguez",
    role: "Food Blogger",
    company: "The Coffee Chronicle",
    avatar: "/images/testimonials/maria.jpg",
    content: "The transparency about sourcing and processing methods is refreshing. You can taste the care in every cup. Their Kenya AA is one of the most vibrant, complex coffees I've ever brewed.",
    rating: 5,
    coffeeName: "Kenya AA"
  },
  {
    id: "4",
    name: "David Park",
    role: "Barista Champion",
    company: "2023 Regional Winner",
    avatar: "/images/testimonials/david.jpg",
    content: "Bean & Brew understands what specialty coffee should be. The roast profiles are dialed in perfectly—never burnt, always highlighting origin character. Their Brazil Santos makes an incredible espresso.",
    rating: 5,
    coffeeName: "Brazil Santos Natural"
  },
  {
    id: "5",
    name: "Emily Watson",
    role: "Sustainability Advocate",
    avatar: "/images/testimonials/emily.jpg",
    content: "Finally, a coffee company that walks the talk on ethics. Direct trade relationships, fair pricing for farmers, and eco-friendly packaging. Great coffee with a clear conscience.",
    rating: 5,
    coffeeName: "Costa Rica Tarrazú"
  },
  {
    id: "6",
    name: "Robert Kim",
    role: "Coffee Educator",
    company: "SCA Certified Trainer",
    avatar: "/images/testimonials/robert.jpg",
    content: "I recommend Bean & Brew to all my students. The variety lets you explore different origins and processes side by side. Their Guatemala Antigua is a textbook example of volcanic terroir.",
    rating: 5,
    coffeeName: "Guatemala Antigua"
  }
];

export const mockProcessSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Sourcing",
    description: "We travel to origin countries, building direct relationships with farmers who share our commitment to quality and sustainability. Every bean is hand-selected at peak ripeness.",
    icon: "🌱",
    image: "/images/process/sourcing.jpg",
    delay: 0
  },
  {
    id: 2,
    title: "Processing",
    description: "Whether washed, natural, honey, or anaerobic—each process method is chosen to highlight the bean's unique character. We work with farmers to perfect their craft.",
    icon: "☕",
    image: "/images/process/processing.jpg",
    delay: 0.1
  },
  {
    id: 3,
    title: "Roasting",
    description: "Our master roasters develop custom profiles for each origin, roasting in small batches to order. This ensures every bag arrives at peak flavor, never sitting on shelves.",
    icon: "🔥",
    image: "/images/process/roasting.jpg",
    delay: 0.2
  },
  {
    id: 4,
    title: "Delivery",
    description: "Roasted, rested, and shipped within 48 hours. Our nitrogen-flushed bags with one-way valves preserve freshness. Free shipping on subscriptions, always carbon-neutral.",
    icon: "📦",
    image: "/images/process/delivery.jpg",
    delay: 0.3
  }
];

export const mockFeatures: Feature[] = [
  {
    id: "1",
    title: "Direct Trade",
    description: "We pay 50-100% above commodity prices directly to farmers, ensuring sustainable livelihoods and exceptional quality.",
    icon: "handshake"
  },
  {
    id: "2",
    title: "Roasted to Order",
    description: "Every bag is roasted after you order. No warehouse storage—just peak freshness delivered to your door.",
    icon: "fire"
  },
  {
    id: "3",
    title: "Carbon Neutral",
    description: "From farm to cup, we offset 100% of our carbon footprint. Compostable bags, renewable energy, and reforestation partnerships.",
    icon: "leaf"
  },
  {
    id: "4",
    title: "Expert Curation",
    description: "Our Q-graders cup thousands of samples yearly, selecting only the top 1% for your cup. Quality you can taste.",
    icon: "award"
  },
  {
    id: "5",
    title: "Brew Guides Included",
    description: "Every bag includes detailed recipes for pour-over, espresso, French press, and cold brew. Brew like a pro.",
    icon: "book-open"
  },
  {
    id: "6",
    title: "Satisfaction Guaranteed",
    description: "Not thrilled with your coffee? We'll replace it or refund you. No questions asked—we're confident you'll love it.",
    icon: "shield-check"
  }
];