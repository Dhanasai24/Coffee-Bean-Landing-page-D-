export interface CoffeeBean {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  origin: string;
  region: string;
  farm: string;
  altitude: string;
  variety: string;
  process: "washed" | "natural" | "honey" | "anaerobic";
  roastLevel: "light" | "medium-light" | "medium" | "medium-dark" | "dark";
  tastingNotes: string[];
  price: number;
  currency: string;
  weight: string;
  weightGrams: number;
  image: string;
  images: string[];
  modelUrl?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  isBestseller?: boolean;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  harvestSeason: string;
  certifications: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  content: string;
  rating: number;
  coffeeName?: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  delay: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NewsletterSubscription {
  email: string;
  name?: string;
  source: string;
  subscribedAt: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export type RoastLevel = CoffeeBean["roastLevel"];
export type ProcessType = CoffeeBean["process"];

export const ROAST_LEVELS: { value: RoastLevel; label: string; description: string }[] = [
  { value: "light", label: "Light", description: "Bright, acidic, floral notes" },
  { value: "medium-light", label: "Medium Light", description: "Balanced, sweet, fruity" },
  { value: "medium", label: "Medium", description: "Well-rounded, caramel, nutty" },
  { value: "medium-dark", label: "Medium Dark", description: "Rich, chocolate, spice" },
  { value: "dark", label: "Dark", description: "Bold, smoky, intense" },
];

export const PROCESS_TYPES: { value: ProcessType; label: string; description: string }[] = [
  { value: "washed", label: "Washed", description: "Clean, bright, consistent" },
  { value: "natural", label: "Natural", description: "Fruity, wine-like, complex" },
  { value: "honey", label: "Honey", description: "Sweet, syrupy, balanced" },
  { value: "anaerobic", label: "Anaerobic", description: "Experimental, unique, funky" },
];