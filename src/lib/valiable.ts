export const navItems = [
  { label: "Home", href: "/" },
  { label: "Category", href: "/category" },
  { label: "Contract", href: "/contract" },
];

export type SubCategory = {
  name: string;
  img: string;
};

export type Category = {
  name: string;
  img: string;
  subCategories: SubCategory[];
};

export const categories: Category[] = [
  {
    name: "Computer Components",
    img: "computer-components.jpg",
    subCategories: [
      { name: "Motherboards", img: "motherboards.jpg" },
      { name: "Processors", img: "processors.jpg" },
      { name: "RAM", img: "ram.jpg" },
      { name: "Storage Devices", img: "storage-devices.jpg" },
    ],
  },
  {
    name: "Laptop and Desktop Parts",
    img: "laptop-desktop-parts.jpg",
    subCategories: [
      { name: "Laptop Screens", img: "laptop-screens.jpg" },
      { name: "Keyboards", img: "keyboards.jpg" },
      { name: "Power Supplies", img: "power-supplies.jpg" },
    ],
  },
  {
    name: "Peripheral and Accessories",
    img: "peripheral-accessories.jpg",
    subCategories: [
      { name: "Monitors", img: "monitors.jpg" },
      { name: "Mouse", img: "mouse.jpg" },
      { name: "Keyboards", img: "keyboards.jpg" },
    ],
  },
  {
    name: "Repairing Tools and Kits",
    img: "repairing-tools-kits.jpg",
    subCategories: [
      { name: "Screwdrivers", img: "screwdrivers.jpg" },
      { name: "Cleaning Tools", img: "cleaning-tools.jpg" },
      { name: "Thermal Paste", img: "thermal-paste.jpg" },
    ],
  },
  {
    name: "Gaming Components",
    img: "gaming-components.jpg",
    subCategories: [
      { name: "Graphics Cards", img: "graphics-cards.jpg" },
      { name: "Gaming Chairs", img: "gaming-chairs.jpg" },
      { name: "Gaming Keyboards", img: "gaming-keyboards.jpg" },
    ],
  },
  {
    name: "Networking",
    img: "networking.jpg",
    subCategories: [
      { name: "Routers", img: "routers.jpg" },
      { name: "Network Cables", img: "network-cables.jpg" },
      { name: "Modems", img: "modems.jpg" },
    ],
  },
  {
    name: "Mobile and Computer Accessories",
    img: "mobile-computer-accessories.jpg",
    subCategories: [
      { name: "Phone Cases", img: "phone-cases.jpg" },
      { name: "Chargers", img: "chargers.jpg" },
      { name: "USB Cables", img: "usb-cables.jpg" },
    ],
  },
];
