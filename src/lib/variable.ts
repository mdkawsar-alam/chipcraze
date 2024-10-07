import { images } from ".";


export const navItems = [
  { label: "Home", href: "/" },
  { label: "Category", href: "/category" },
  { label: "Contract", href: "/contract" },
];

export type SubCategory = {
  name: string;
  img: any;
};

export type Category = {
  name: string;
  img: any;
  subCategories: SubCategory[];
};

export const categories: Category[] = [
  {
    name: "Computer Components",
    img: images.product18,
    subCategories: [
      { name: "Motherboards", img: images.product22 },
      { name: "Processors", img: images.product21 },
      { name: "RAM", img: images.product11 },
      { name: "Storage Devices", img: images.product9 },
    ],
  },
  {
    name: "Laptop and Desktop Parts",
    img: images.product12,
    subCategories: [
      { name: "Laptop Screens", img: images.product8 },
      { name: "Keyboards", img: images.product1 },
      { name: "Power Supplies", img: images.product13 },
    ],
  },
  {
    name: "Peripheral and Accessories",
    img: images.product15,
    subCategories: [
      { name: "Monitors", img: images.product14 },
      { name: "Mouse", img: images.product15 },
      { name: "Keyboards", img: images.product16 },
    ],
  },
  {
    name: "Repairing Tools and Kits",
    img: images.product6,
    subCategories: [
      { name: "Screwdrivers", img: images.product20 },
      { name: "Cleaning Tools", img: images.product19 },
      { name: "Thermal Paste", img: images.product12 },
    ],
  },
  {
    name: "Gaming Components",
    img: images.product22,
    subCategories: [
      { name: "Graphics Cards", img: images.product22 },
      { name: "Gaming Chairs", img: images.product22 },
      { name: "Gaming Keyboards", img: images.product22 },
    ],
  },
  {
    name: "Networking",
    img: images.product23,
    subCategories: [
      { name: "Routers", img: images.product9 },
      { name: "Network Cables", img: images.product14 },
      { name: "Modems", img: images.product16 },
    ],
  },
  {
    name: "Mobile and Computer Accessories",
    img: images.product21,
    subCategories: [
      { name: "Phone Cases", img: images.product17 },
      { name: "Chargers", img: images.product10 },
      { name: "USB Cables", img: images.product8 },
    ],
  },
];



interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: any; 
  rating: number;
  inStock: boolean;
  category: string;
  subCategory: string;
}

export const products: Product[] = [
  // Computer Components
  {
    id: "comp1",
    name: "ASUS ROG Motherboard",
    price: 199.99,
    image: images.product18,
    category: "Computer Components",
    subCategory: "Motherboards",
    description: "High-performance motherboard for gaming.",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "comp2",
    name: "Intel Core i9 Processor",
    price: 499.99,
    image: images.product18,
    category: "Computer Components",
    subCategory: "Processors",
    description: "Top-of-the-line processor for demanding applications.",
    rating: 4.9,
    inStock: true,
  },
  {
    id: "comp3",
    name: "Corsair Vengeance RAM",
    price: 89.99,
    image: images.product15,
    category: "Computer Components",
    subCategory: "RAM",
    description: "16GB RAM with high speed and performance.",
    rating: 4.8,
    inStock: true,
  },

  // Laptop and Desktop Parts
  {
    id: "laptop1",
    name: "Dell XPS 15 Screen",
    price: 349.99,
    image: images.product18,
    category: "Laptop and Desktop Parts",
    subCategory: "Laptop Screens",
    description: "High-resolution screen for Dell XPS 15.",
    rating: 4.5,
    inStock: false,
  },
  {
    id: "laptop2",
    name: "Logitech K120 Keyboard",
    price: 19.99,
    image: images.product18,
    category: "Laptop and Desktop Parts",
    subCategory: "Keyboards",
    description: "Affordable and durable keyboard for everyday use.",
    rating: 4.2,
    inStock: true,
  },
  {
    id: "laptop3",
    name: "Corsair RM750 Power Supply",
    price: 129.99,
    image: images.product18,
    category: "Laptop and Desktop Parts",
    subCategory: "Power Supplies",
    description: "750W power supply with high efficiency.",
    rating: 4.6,
    inStock: true,
  },

  // Peripheral and Accessories
  {
    id: "peripheral1",
    name: "Dell UltraSharp Monitor",
    price: 379.99,
    image: images.product18,
    category: "Peripheral and Accessories",
    subCategory: "Monitors",
    description: "27-inch monitor with ultra-thin bezels.",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "peripheral2",
    name: "Razer DeathAdder Mouse",
    price: 59.99,
    image: images.product18,
    category: "Peripheral and Accessories",
    subCategory: "Mouse",
    description: "High-precision gaming mouse with customizable buttons.",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "peripheral3",
    name: "Corsair K95 RGB Keyboard",
    price: 199.99,
    image: images.product18,
    category: "Peripheral and Accessories",
    subCategory: "Keyboards",
    description: "Mechanical keyboard with customizable RGB lighting.",
    rating: 4.9,
    inStock: false,
  },

  // Repairing Tools and Kits
  {
    id: "repair1",
    name: "iFixit Pro Tech Toolkit",
    price: 89.99,
    image: images.product18,
    category: "Repairing Tools and Kits",
    subCategory: "Screwdrivers",
    description: "Complete toolkit for electronics repair.",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "repair2",
    name: "Compressed Air Duster",
    price: 12.99,
    image: images.product18,
    category: "Repairing Tools and Kits",
    subCategory: "Cleaning Tools",
    description: "Canned air for cleaning electronic components.",
    rating: 4.3,
    inStock: true,
  },
  {
    id: "repair3",
    name: "Arctic Silver Thermal Paste",
    price: 14.99,
    image: images.product18,
    category: "Repairing Tools and Kits",
    subCategory: "Thermal Paste",
    description: "High-performance thermal paste for CPUs.",
    rating: 4.7,
    inStock: true,
  },

  // Gaming Components
  {
    id: "gaming1",
    name: "NVIDIA GeForce RTX 3080",
    price: 699.99,
    image: images.product18,
    category: "Gaming Components",
    subCategory: "Graphics Cards",
    description: "High-end graphics card for gaming and rendering.",
    rating: 4.9,
    inStock: true,
  },
  {
    id: "gaming2",
    name: "Secretlab Titan Gaming Chair",
    price: 399.99,
    image: images.product18,
    category: "Gaming Components",
    subCategory: "Gaming Chairs",
    description: "Ergonomic gaming chair with premium build quality.",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "gaming3",
    name: "Corsair K70 RGB Gaming Keyboard",
    price: 149.99,
    image: images.product18,
    category: "Gaming Components",
    subCategory: "Gaming Keyboards",
    description: "Mechanical keyboard with customizable RGB backlighting.",
    rating: 4.7,
    inStock: false,
  },

  // Networking
  {
    id: "network1",
    name: "Netgear Nighthawk Router",
    price: 129.99,
    image: images.product18,
    category: "Networking",
    subCategory: "Routers",
    description: "High-speed router with advanced features.",
    rating: 4.6,
    inStock: true,
  },
  {
    id: "network2",
    name: "AmazonBasics Ethernet Cable",
    price: 9.99,
    image: images.product18,
    category: "Networking",
    subCategory: "Network Cables",
    description: "High-speed Ethernet cable for reliable connections.",
    rating: 4.5,
    inStock: true,
  },
  {
    id: "network3",
    name: "ARRIS SURFboard Modem",
    price: 149.99,
    image: images.product18,
    category: "Networking",
    subCategory: "Modems",
    description: "Reliable modem with DOCSIS 3.0 technology.",
    rating: 4.7,
    inStock: true,
  },

  // Mobile and Computer Accessories
  {
    id: "mobile1",
    name: "Spigen Tough Armor Case",
    price: 14.99,
    image: images.product18,
    category: "Mobile and Computer Accessories",
    subCategory: "Phone Cases",
    description: "Durable phone case with dual-layer protection.",
    rating: 4.4,
    inStock: true,
  },
 
];

interface Offer {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  discount: number;
  link: string;
}

export const specialOffers: Offer[] = [
  {
    id: 1,
    title: "50% Off on Laptops",
    description: "Top brand laptops at half price!",
    imageUrl: "/images/laptop-offer.jpg", // Replace with actual image paths
    discount: 50,
    link: "/shop/laptops",
  },
  {
    id: 2,
    title: "25% Off on Mobile Phones",
    description: "Latest smartphones at incredible discounts!",
    imageUrl: "/images/mobile-offer.jpg",
    discount: 25,
    link: "/shop/mobiles",
  },
  {
    id: 3,
    title: "Buy 1 Get 1 Free - Headphones",
    description: "Best sound experience with our premium headphones.",
    imageUrl: "/images/headphones-offer.jpg",
    discount: 100,
    link: "/shop/headphones",
  },
];
interface Testimonial {
  name: string;
  review: string;
  image?: string; // Optional image of the customer
  rating?: number; // Optional rating from 1 to 5
}

  export const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    review:
      "ChipCraze has the best deals on tech products. I’ve saved so much and the customer service is fantastic!",
    image: "/images/john.jpg", // Replace with the actual image path
    rating: 5,
  },
  {
    name: "Jane Smith",
    review:
      "I love how fast and reliable ChipCraze is. Highly recommended for all tech lovers!",
    image: "/images/jane.jpg",
    rating: 4,
  },
  {
    name: "Michael Lee",
    review:
      "Great variety of products and excellent customer support. I’ll definitely shop here again!",
    image: "/images/michael.jpg",
    rating: 5,
  },
];