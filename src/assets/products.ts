export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Apple iPhone 15 Pro",
    category: "Smartphones",
    price: 99999,
    description: "The latest iPhone 15 Pro with A17 Pro chip, 6.1-inch display, and titanium design.",
    image: "https://picsum.photos/seed/phone1/600/400"
  },
  {
    id: "2",
    name: "Samsung Galaxy S23 Ultra",
    category: "Smartphones",
    price: 11999,
    description: "6.8-inch AMOLED display, Snapdragon 8 Gen 2, 200MP camera system.",
    image: "https://picsum.photos/seed/phone2/600/400"
  },
  {
    id: "3",
    name: "Sony Headphones",
    category: "Electronics",
    price: 3999,
    description: "Industry-leading noise-canceling wireless headphones with 30-hour battery life.",
    image: "https://picsum.photos/seed/headphones/600/400"
  },
  {
    id: "4",
    name: "Nike Air Max 270",
    category: "Footwear",
    price: 1600,
    description: "Stylish and comfortable sneakers designed for all-day wear.",
    image: "https://picsum.photos/seed/sneaker1/600/400"
  },
  {
    id: "5",
    name: "Adidas Ultraboost 22",
    category: "Footwear",
    price: 1800,
    description: "High-performance running shoes with responsive cushioning.",
    image: "https://picsum.photos/seed/running/600/400"
  },
  {
    id: "6",
    name: "Dell XPS 15 Laptop",
    category: "Laptops",
    price: 18999,
    description: "15-inch 4K OLED display, Intel i7, 16GB RAM, 512GB SSD.",
    image: "https://picsum.photos/seed/laptop1/600/400"
  },
  {
    id: "7",
    name: "MacBook Air M2",
    category: "Laptops",
    price: 119999,
    description: "Apple M2 chip, 13.6-inch Liquid Retina display, fanless design.",
    image: "https://picsum.photos/seed/macbook/600/400"
  },
  {
    id: "8",
    name: "Logitech MX Master 3S",
    category: "Accessories",
    price: 999,
    description: "Ergonomic wireless mouse with ultra-fast scrolling and long battery life.",
    image: "https://picsum.photos/seed/mouse/600/400"
  },
  {
    id: "9",
    name: "Sony PlayStation 5",
    category: "Gaming",
    price: 4999,
    description: "Next-gen gaming console with ultra-fast SSD and ray tracing support.",
    image: "https://picsum.photos/seed/console1/600/400"
  },
  {
    id: "10",
    name: "Xbox Series X",
    category: "Gaming",
    price: 4999,
    description: "Powerful gaming console with 4K resolution and Game Pass support.",
    image: "https://picsum.photos/seed/gaming/600/400"
  },
  {
    id: "11",
    name: "Canon EOS R6 Camera",
    category: "Cameras",
    price: 24999,
    description: "Full-frame mirrorless camera with 20MP sensor and 4K video recording.",
    image: "https://picsum.photos/seed/camera1/600/400"
  },
  {
    id: "12",
    name: "Apple Watch Series 9",
    category: "Wearables",
    price: 3999,
    description: "Smartwatch with advanced health tracking, always-on display, and fitness features.",
    image: "https://picsum.photos/seed/watch/600/400"
  },
  {
    id: "13",
    name: "Kindle Paperwhite",
    category: "Electronics",
    price: 1399,
    description: "Waterproof e-reader with adjustable warm light and 300ppi display.",
    image: "https://picsum.photos/seed/book/600/400"
  },
  {
    id: "14",
    name: "JBL Flip 6 Bluetooth Speaker",
    category: "Electronics",
    price: 1299,
    description: "Portable waterproof speaker with powerful bass and 12 hours of playtime.",
    image: "https://picsum.photos/seed/speaker/600/400"
  },
  {
    id: "15",
    name: "Instant Pot Duo 7-in-1",
    category: "Home Appliances",
    price: 999,
    description: "Multifunctional electric pressure cooker for quick and easy meals.",
    image: "https://picsum.photos/seed/pot/600/400"
  },
  {
    id: "16",
    name: "Dyson V15 Detect Vacuum Cleaner",
    category: "Home Appliances",
    price: 6999,
    description: "Cordless stick vacuum with laser dust detection and powerful suction.",
    image: "https://picsum.photos/seed/vacuum/600/400"
  },
  {
    id: "17",
    name: "Apple iPad Pro 12.9",
    category: "Tablets",
    price: 1099,
    description: "M2 chip, Liquid Retina XDR display, and Apple Pencil support.",
    image: "https://picsum.photos/seed/tablet1/600/400"
  },
  {
    id: "18",
    name: "Samsung Galaxy Tab S9",
    category: "Tablets",
    price: 999,
    description: "12.4-inch AMOLED display, Snapdragon 8 Gen 2, S Pen included.",
    image: "https://picsum.photos/seed/tablet2/600/400"
  },
  {
    id: "19",
    name: "Fitbit Charge 6",
    category: "Wearables",
    price: 159,
    description: "Fitness tracker with heart rate monitoring, GPS, and sleep tracking.",
    image: "https://picsum.photos/seed/fitness/600/400"
  },
  {
    id: "20",
    name: "GoPro Hero 12 Black",
    category: "Cameras",
    price: 499,
    description: "Action camera with 5.3K video recording, waterproof design, and HyperSmooth stabilization.",
    image: "https://picsum.photos/seed/actioncam/600/400"
  }
];