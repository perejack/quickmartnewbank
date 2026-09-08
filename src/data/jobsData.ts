import cleanersImg from '../assets/HERO4.jpg';
import cashiersImg from '../assets/downloaded/image_5.jpg';
import driversImg from '../assets/downloaded/image_9.jpg';
import marketerImg from '../assets/downloaded/image_8.jpeg';
import salesAttendantImg from '../assets/downloaded/image_7.jpg';
import warehouseSupervisorImg from '../assets/downloaded/image_6.jpg';
import guardsImg from '../assets/downloaded/image_11.jpg';

export interface Job {
  id: string;
  title: string;
  positions: number;
  salary: string;
  description: string;
  fullDescription: string;
  requirements: string[];
  responsibilities: string[];
  isPopular?: boolean;
  image: string;
  category: string;
}

export const jobs: Job[] = [
  {
    id: "cleaners",
    title: "Cleaners",
    positions: 43,
    salary: "Ksh 18,000/month",
    description: "Maintain store cleanliness and hygiene standards",
    fullDescription: "We are looking for dedicated Cleaners to ensure our stores maintain the highest standards of cleanliness and hygiene. This role is essential for providing a pleasant shopping experience for our customers.",
    requirements: [
      "Valid National ID or Passport",
      "Valid KRA PIN",
      "Ability to work in shifts",
      "Basic understanding of hygiene standards"
    ],
    responsibilities: [
      "Cleaning floors, shelves, and common areas",
      "Sanitizing high-touch surfaces",
      "Managing waste disposal",
      "Ensuring restrooms are clean and stocked"
    ],
    image: cleanersImg,
    category: "Maintenance"
  },
  {
    id: "cashiers",
    title: "Cashiers",
    positions: 22,
    salary: "Ksh 21,000/month",
    description: "Handle customer transactions and provide excellent service",
    fullDescription: "As a Cashier, you will be the face of Quickmart. You'll handle transactions, assist customers, and ensure a smooth checkout process.",
    requirements: [
      "KCSE Certificate (C- and above)",
      "Basic computer literacy",
      "Excellent communication skills",
      "Valid National ID and KRA PIN"
    ],
    responsibilities: [
      "Processing customer payments",
      "Handling cash and card transactions",
      "Providing product information to customers",
      "Maintaining a clean checkout area"
    ],
    isPopular: true,
    image: cashiersImg,
    category: "Customer Service"
  },
  {
    id: "store-keepers",
    title: "Store Keepers",
    positions: 68,
    salary: "Ksh 34,000/month",
    description: "Manage inventory and stock organization",
    fullDescription: "Store Keepers are responsible for managing our inventory, receiving goods, and ensuring stock is well-organized and accounted for.",
    requirements: [
      "Diploma in Supply Chain or related field",
      "Experience in inventory management",
      "Strong organizational skills",
      "Valid National ID and KRA PIN"
    ],
    responsibilities: [
      "Receiving and inspecting incoming goods",
      "Organizing stock in the warehouse",
      "Conducting regular inventory counts",
      "Coordinating with the procurement team"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    category: "Logistics"
  },
  {
    id: "drivers",
    title: "Drivers",
    positions: 20,
    salary: "Ksh 25,000/month",
    description: "Deliver products and maintain delivery schedules",
    fullDescription: "We need reliable Drivers to transport goods between our warehouses and stores safely and on time.",
    requirements: [
      "Valid Driving License (Class BCE)",
      "At least 2 years of driving experience",
      "Clean driving record",
      "Valid National ID and KRA PIN"
    ],
    responsibilities: [
      "Transporting goods safely",
      "Maintaining the delivery vehicle",
      "Loading and unloading products",
      "Keeping accurate delivery logs"
    ],
    image: driversImg,
    category: "Logistics"
  },
  {
    id: "loaders",
    title: "Loaders & Off-loaders",
    positions: 82,
    salary: "Ksh 18,000/month",
    description: "Handle product loading and unloading operations",
    fullDescription: "Loaders and Off-loaders are responsible for the physical handling of goods, ensuring they are moved safely and efficiently.",
    requirements: [
      "Physical fitness and strength",
      "Ability to work in a fast-paced environment",
      "Valid National ID and KRA PIN",
      "Team player"
    ],
    responsibilities: [
      "Loading goods onto trucks",
      "Unloading goods at stores",
      "Ensuring products are handled with care",
      "Assisting in warehouse organization"
    ],
    image: "https://images.unsplash.com/photo-1530124566582-aa61435b597d?auto=format&fit=crop&q=80&w=800",
    category: "Logistics"
  },
  {
    id: "marketer",
    title: "Marketer",
    positions: 50,
    salary: "Ksh 29,000/month",
    description: "Develop and implement marketing strategies",
    fullDescription: "Join our marketing team to help grow the Quickmart brand and engage with our customers across Kenya.",
    requirements: [
      "Degree or Diploma in Marketing",
      "Creative thinking and problem-solving",
      "Good communication skills",
      "Valid National ID and KRA PIN"
    ],
    responsibilities: [
      "Promoting store products and offers",
      "Engaging with customers on-site",
      "Assisting in marketing campaigns",
      "Reporting on market trends"
    ],
    image: marketerImg,
    category: "Marketing"
  },
  {
    id: "sales-attendant",
    title: "Sales Attendant",
    positions: 120,
    salary: "Ksh 25,000/month",
    description: "Assist customers and drive sales",
    fullDescription: "Sales Attendants help customers find what they need and ensure our shelves are always well-stocked and attractive.",
    requirements: [
      "KCSE Certificate",
      "Friendly and outgoing personality",
      "Basic sales skills",
      "Valid National ID and KRA PIN"
    ],
    responsibilities: [
      "Assisting customers on the shop floor",
      "Restocking shelves",
      "Ensuring products are correctly priced",
      "Maintaining store displays"
    ],
    isPopular: true,
    image: salesAttendantImg,
    category: "Sales"
  },
  {
    id: "chef",
    title: "Chef",
    positions: 35,
    salary: "Ksh 23,750/month",
    description: "Prepare high-quality meals for our deli",
    fullDescription: "Our Deli is a favorite for many. We need skilled Chefs to prepare delicious, high-quality meals for our customers.",
    requirements: [
      "Certificate in Food Production",
      "Valid Health Certificate",
      "Experience in a busy kitchen",
      "Valid National ID and KRA PIN"
    ],
    responsibilities: [
      "Preparing meals according to recipes",
      "Maintaining kitchen hygiene",
      "Managing food stock",
      "Ensuring food safety standards"
    ],
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800",
    category: "Hospitality"
  },
  {
    id: "warehouse-supervisor",
    title: "Warehouse Supervisor",
    positions: 15,
    salary: "Ksh 31,000/month",
    description: "Oversee and coordinate warehouse activities",
    fullDescription: "The Warehouse Supervisor ensures that all warehouse operations run smoothly, from receiving to dispatch.",
    requirements: [
      "Diploma in Logistics or Management",
      "At least 2 years of supervisory experience",
      "Strong leadership skills",
      "Valid National ID and KRA PIN"
    ],
    responsibilities: [
      "Supervising warehouse staff",
      "Ensuring safety protocols are followed",
      "Optimizing warehouse space",
      "Reporting on warehouse performance"
    ],
    image: warehouseSupervisorImg,
    category: "Management"
  },
  {
    id: "guards",
    title: "Guards",
    positions: 75,
    salary: "Ksh 27,000/month",
    description: "Ensure the safety and security of the premises",
    fullDescription: "Security is a top priority. Our Guards ensure the safety of our customers, staff, and property.",
    requirements: [
      "Certificate of Good Conduct",
      "Physical fitness",
      "Previous security experience is an advantage",
      "Valid National ID and KRA PIN"
    ],
    responsibilities: [
      "Monitoring store entrances and exits",
      "Conducting security checks",
      "Responding to security incidents",
      "Ensuring a safe environment"
    ],
    image: guardsImg,
    category: "Security"
  }
];
