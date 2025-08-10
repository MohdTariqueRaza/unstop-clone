import {
  BsBagCheck,
  BsChatLeftText,
  BsHandbag,
  BsStars,
  BsTelephone,
  BsTools,
} from "react-icons/bs";
import { FaBroadcastTower, FaBullhorn, FaPenNib } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FiBook } from "react-icons/fi";
import { GoTrophy } from "react-icons/go";
import {
  MdOutlineArrowOutward,
  MdOutlineHandshake,
  MdOutlinePrivacyTip,
} from "react-icons/md";
import { PiHandshake, PiUsersBold } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";
import { RiGraduationCapLine, RiShoppingBagLine } from "react-icons/ri";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { TiMicrophoneOutline } from "react-icons/ti";
import { LuTrophy, LuUserRoundPlus } from "react-icons/lu";
import { GrDocumentUser } from "react-icons/gr";
import { VscGraph } from "react-icons/vsc";
import { FaTools } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { MdArticle, MdLibraryBooks, MdMovieEdit } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { RiFolderUserLine } from "react-icons/ri";
import { TbTie } from "react-icons/tb";

export const aiPoweredMockTests = [
  {
    id: 1,
    category: "Tech",
    image: "/images/ai_test1.webp",
    logo: "/images/IIIT_Delhi_logo.webp",
    title: "Tech Got Latent – Tech Edition",
    description: "Indraprastha Institute of Information Technology",
    tags: ["Offline", "Free"],
    applied: 4,
    link: "/",
  },
  {
    id: 2,
    category: "Tech",
    image: "/images/ai_test2.webp",
    logo: "/images/IIIT_Delhi_logo.webp",
    title: "Code Surge – Hunt",
    description: "Indraprastha Institute of Information Technology",
    tags: ["Offline", "Free"],
    applied: 7,
    link: "/",
  },
  {
    id: 3,
    category: "Tech",
    image: "/images/ai_test3.webp",
    logo: "/images/IIIT_Delhi_logo.webp",
    title: "Line Follower – Autonomous Robotics Challenge",
    description: "Indraprastha Institute of Information Technology",
    tags: ["Offline", "Free"],
    applied: 24,
    link: "/",
  },
  {
    id: 4,
    category: "Tech",
    image: "/images/ai_test2.webp",
    logo: "/images/IIIT_Delhi_logo.webp",
    title: "AI Robotics Challenge",
    description: "Indian Institute of Technology",
    tags: ["Online", "Free"],
    applied: 15,
    link: "/",
  },

  {
    id: 5,
    category: "Management",
    image: "/images/ai_test1.webp",
    logo: "/images/IIIT_Delhi_logo.webp",
    title: "Call for HR Articles: Impressions - August 2025",
    description: "Indian Institute of Management (IIM), Rohtak",
    tags: ["Online", "Free"],
    applied: 32,
    link: "/",
  },
  {
    id: 6,
    category: "Management",
    image: "/images/ai_test3.webp",
    logo: "/images/IIM_Bangalore_logo.webp",
    title: "Strategic Leadership Challenge",
    description: "Indian Institute of Management Bangalore",
    tags: ["Online", "Paid"],
    applied: 12,
    link: "/",
  },
  {
    id: 7,
    category: "Management",
    image: "/images/ai_test2.webp",
    logo: "/images/IIM_Ahmedabad_logo.webp",
    title: "Business Analytics Competition",
    description: "Indian Institute of Management Ahmedabad",
    tags: ["Offline", "Free"],
    applied: 22,
    link: "/",
  },
  {
    id: 8,
    category: "Management",
    image: "/images/ai_test1.webp",
    logo: "/images/IIM_Kozhikode_logo.webp",
    title: "Marketing Mastery Contest",
    description: "Indian Institute of Management Kozhikode",
    tags: ["Online", "Free"],
    applied: 18,
    link: "/",
  },

  {
    id: 9,
    category: "General",
    image: "/images/ai_test3.webp",
    logo: "/images/ai_test3.webp",
    title: "General Competition Example",
    description: "Some Institute",
    tags: ["Online", "Free"],
    applied: 12,
    link: "/",
  },
  {
    id: 10,
    category: "General",
    image: "/images/ai_test1.webp",
    logo: "/images/General_Logo.webp",
    title: "Open Innovation Challenge",
    description: "Open University",
    tags: ["Online", "Free"],
    applied: 8,
    link: "/",
  },
  {
    id: 11,
    category: "General",
    image: "/images/ai_test3.webp",
    logo: "/images/General_Logo.webp",
    title: "Creative Problem Solving",
    description: "Creative Minds Association",
    tags: ["Offline", "Paid"],
    applied: 16,
    link: "/",
  },
  {
    id: 12,
    category: "General",
    image: "/images/ai_test2.webp",
    logo: "/images/General_Logo.webp",
    title: "Community Impact Contest",
    description: "Global Outreach",
    tags: ["Online", "Free"],
    applied: 9,
    link: "/",
  },
];

export const tabs = ["Tech", "Management", "General"];

export const competitionData = [
  {
    id: 1,
    image: "/images/competition-img1.webp",
    logo: "/images/iim.webp",
    title: " BrandAlchemy - The Strategic Marketing Challenge",
    description:
      " Indian Institute Of Management (IIM) Lucknow - Noida Campus ",
    tags: ["Offline", "Free"],
    applied: 4,
    link: "/",
  },
  {
    id: 2,
    image: "/images/competition-img4.webp",
    logo: "/images/agrovon.webp",
    title: " Sankalan - Article Writing Competition",
    description:
      "C.C.S National Institute of Agricultural Marketing (NIAM), Jaipur",
    tags: ["Offline", "Free"],
    applied: 7,
    link: "/",
  },
  {
    id: 3,
    image: "/images/competition-img3.webp",
    logo: "/images/agrovon.webp",
    title: "Line Follower – Autonomous Robotics Challenge",
    description: "Indraprastha Institute of Information Technology",
    tags: ["Offline", "Free"],
    applied: 24,
    link: "/",
  },
  {
    id: 4,
    image: "/images/competition-img2.webp",
    logo: "/images/agrovon.webp",
    title: "Call for HR Articles: Impressions - August 2025",
    description: "Indian Institute of Management (IIM), Rohtak",
    tags: ["Online", "Free"],
    applied: 32,
    link: "/",
  },
  {
    id: 5,
    image: "/images/competition-img4.webp",
    logo: "/images/agrovon.webp",
    title: "Call for HR Articles: Impressions - August 2025",
    description: "Indian Institute of Management (IIM), Rohtak",
    tags: ["Online", "Free"],
    applied: 32,
    link: "/",
  },
];

export const industryLogos = [
  "/images/industry1.webp",
  "/images/industry2.webp",
  "/images/industry3.webp",
  "/images/industry4.webp",
  "/images/industry5.webp",
  "/images/industry6.webp",
  "/images/industry7.webp",
  "/images/industry8.webp",
  "/images/industry9.webp",
];

export const internshipData = [
  {
    id: 1,
    image: "/images/competition-img1.webp",
    logo: "/images/internship_logo3.webp",
    title: "Tech Got Latent – Tech Edition",
    description: "Indraprastha Institute of Information Technology",
    tags: ["Offline", "Free"],
    applied: 4,
    link: "/",
  },
  {
    id: 2,
    image: "/images/competition-img4.webp",
    logo: "/images/internship_logo2.webp",
    title: "Code Surge – Hunt",
    description: "Indraprastha Institute of Information Technology",
    tags: ["Offline", "Free"],
    applied: 7,
    link: "/",
  },
  {
    id: 3,
    image: "/images/competition-img3.webp",
    logo: "/images/internship_logo1.webp",
    title: "Line Follower – Autonomous Robotics Challenge",
    description: "Indraprastha Institute of Information Technology",
    tags: ["Offline", "Free"],
    applied: 24,
    link: "/",
  },
  {
    id: 4,
    image: "/images/competition-img2.webp",
    logo: "/images/internship_logo1.webp",
    title: "Call for HR Articles: Impressions - August 2025",
    description: "Indian Institute of Management (IIM), Rohtak",
    tags: ["Online", "Free"],
    applied: 32,
    link: "/competitions/4",
  },
  {
    id: 5,
    image: "/images/competition-img1.webp",
    logo: "/images/IIIT_Delhi_logo.webp",
    title: "Call for HR Articles: Impressions - August 2025",
    description: "Indian Institute of Management (IIM), Rohtak",
    tags: ["Online", "Free"],
    applied: 32,
    link: "/",
  },
];

export const jobs = [
  {
    id: 1,
    image: "/images/competition-img1.webp",
    logo: "/images/IIIT_Delhi_logo.webp",
    title: "Tech Got Latent – Tech Edition",
    description: "Indraprastha Institute of Information Technology",
    tags: ["Offline", "Free"],
    applied: 4,
    link: "/",
  },
  {
    id: 2,
    image: "/images/competition-img4.webp",
    logo: "/images/IIIT_Delhi_logo.webp",
    title: "Code Surge – Hunt",
    description: "Indraprastha Institute of Information Technology",
    tags: ["Offline", "Free"],
    applied: 7,
    link: "/",
  },
  {
    id: 3,
    image: "/images/competition-img3.webp",
    logo: "/images/IIIT_Delhi_logo.webp",
    title: "Line Follower – Autonomous Robotics Challenge",
    description: "Indraprastha Institute of Information Technology",
    tags: ["Offline", "Free"],
    applied: 24,
    link: "/",
  },
  {
    id: 4,
    image: "/images/competition-img2.webp",
    logo: "/images/IIIT_Delhi_logo.webp",
    title: "Call for HR Articles: Impressions - August 2025",
    description: "Indian Institute of Management (IIM), Rohtak",
    tags: ["Online", "Free"],
    applied: 32,
    link: "/",
  },
  {
    id: 5,
    image: "/images/competition-img1.webp",
    logo: "/images/IIIT_Delhi_logo.webp",
    title: "Call for HR Articles: Impressions - August 2025",
    description: "Indian Institute of Management (IIM), Rohtak",
    tags: ["Online", "Free"],
    applied: 32,
    link: "/",
  },
];

export const items = ["50+ Courses", "Certificate", "Projects & Assignments"];

export const cards = [
  { heading: "25", paragraph: "Active Users", numberAbbreviation: "M+" },
  { heading: "22.3", paragraph: "Assessments", numberAbbreviation: "M+" },
  { heading: "130", paragraph: "Opportunities", numberAbbreviation: "K+" },
  { heading: "800", paragraph: "Brands trust us", numberAbbreviation: "+" },
  { heading: "42", paragraph: "Organizations", numberAbbreviation: "K+" },
  { heading: "78", paragraph: "Countries", numberAbbreviation: "+" },
];

export const opportunities = [
  {
    id: 1,
    image: "/images/opportunity_1.webp",
    title: "Quizzes",
    bgColor: "#5daeff",
    textColor: "#000",
  },
  {
    id: 2,
    image: "/images/opportunity_2.webp",
    title: "Hackathons",
    bgColor: "#50e87c",
    textColor: "#000",
  },
  {
    id: 3,
    image: "/images/opportunity_3.webp",
    title: "Scholarships",
    bgColor: "#5544a8",
    textColor: "#fff",
  },
  {
    id: 4,
    image: "/images/opportunity_6.webp",
    title: "Conferences",
    bgColor: "#ffe6d3",
    textColor: "#000",
  },
  {
    id: 5,
    image: "/images/opportunity_6.webp",
    title: "College Festivals",
    bgColor: "#FFC700",
    textColor: "#000",
  },
];

export const useUnstopCards = [
  {
    title: "Students and Professionals",
    description:
      "Unlock Your Potential: Compete, Build Resume, Grow and get Hired!",
    image: "./images/student.webp",
    items: [
      {
        text: "Access tailored jobs and internships",
        icon: <RiShoppingBagLine size={18} />,
      },
      {
        text: "Participate in exciting competitions",
        icon: <LuTrophy size={18} />,
      },
      {
        text: "Upskill with mentorships & workshops",
        icon: <MdOutlineArrowOutward size={18} />,
      },
      {
        text: "Showcase your profile to top recruiters",
        icon: <LuUserRoundPlus size={18} />,
      },
    ],
  },
  {
    title: "Companies and Recruiters",
    description:
      "Discover Right Talent: Hire, Engage, and Brand Like Never Before!",
    image: "./images/student.webp",
    items: [
      {
        text: "Build employer brand with engagements",
        icon: <LuUserRoundPlus size={18} />,
      },
      {
        text: "Host jobs & internships to hire top talent",
        icon: <FaBullhorn size={18} />,
      },
      {
        text: "Streamline hiring with AI-driven tools",
        icon: <BsStars size={18} />,
      },
      {
        text: "Connect with 24M GenZs based on skills",
        icon: <MdOutlineHandshake size={18} />,
      },
    ],
  },
  {
    title: "Colleges",
    description:
      "Bridge Academia and Industry: Empower Students with Real-World Opportunities!",
    image: "./images/student.webp",
    items: [
      {
        text: "Offer top competition & job opportunities",
        icon: <RiShoppingBagLine size={18} />,
      },
      {
        text: "Partner with companies for placements",
        icon: <GrDocumentUser size={18} />,
      },
      {
        text: "Gain insights into student performance",
        icon: <VscGraph size={18} />,
      },
      {
        text: "Foster industry-academic collaboration",
        icon: <MdOutlineHandshake size={18} />,
      },
    ],
  },
];

export const navItems = ["Internships", "Jobs", "Competitions", "Practice"];

export const moreDropdownItems = [
  { title: "Courses", icon: <FiBook size={16} /> },
  { title: "Scholarship", icon: <RiGraduationCapLine size={16} /> },
  { title: "Cultural Events", icon: <IoMusicalNotesOutline size={16} /> },
  { title: "Workshops", icon: <BsTools size={16} /> },
  { title: "Conferences", icon: <TiMicrophoneOutline size={16} /> },
  { title: "Blogs", icon: <FaPenNib size={16} /> },
];

export const sideNavItems = [
  {
    heading: "Our stories",
    subHeading: [
      { text: "Clientele", icon: <FaBroadcastTower /> },
      { text: "Client Case Studies", icon: <TbReportSearch /> },
      { text: "Partners", icon: <PiUsersBold /> },
      { text: "Testimonials", icon: <FaRegStar /> },
    ],
  },
  {
    heading: "Be a part of us",
    subHeading: [
      { text: "Contact Us", icon: <BsTelephone /> },
      { text: "Partner with us", icon: <PiHandshake /> },
    ],
  },
  {
    heading: "Business Events & Reports",
    subHeading: [
      { text: "Unstop Talent Report 2025", icon: <GoTrophy /> },
      { text: "Unstop Talent Awards 2025", icon: <GoTrophy /> },
      { text: "Unstop Talent Meet 2025", icon: <GoTrophy /> },
    ],
  },
  {
    heading: "About",
    subHeading: [
      { text: "FAQs", icon: <BsChatLeftText /> },
      { text: "Careers", icon: <BsBagCheck /> },
      { text: "Privacy Policy", icon: <MdOutlinePrivacyTip /> },
    ],
  },
];

export const searchData = [
  {
    searchText: "Internships",
    icon: <PiStudentBold />,
    iconBgColor: "#ffe6fa",
  },
  {
    searchText: "Jobs",
    icon: <BsBagCheck />,
    iconBgColor: "#eaebfb",
  },
  {
    searchText: "Opportunities",
    icon: <GoTrophy />,
    iconBgColor: "#fbebea",
  },
  {
    searchText: "Mentors",
    icon: <TbTie />,
    iconBgColor: "#ebe8fd",
  },
  {
    searchText: "Course",
    icon: <FiBook />,
    iconBgColor: "#ddedff",
  },
  {
    searchText: "Projects",
    icon: <MdLibraryBooks />,
    iconBgColor: "#e6fff5",
  },
  {
    searchText: "Company preparation",
    icon: <RiFolderUserLine />,
    iconBgColor: "#ffeee0",
  },
  {
    searchText: "Skills Based Assessments",
    icon: <MdMovieEdit />,
    iconBgColor: "#fce8ef",
  },
  {
    searchText: "Scholarships",
    icon: <RiGraduationCapLine />,
    iconBgColor: "#e3f8ff",
  },
  {
    searchText: "Conferences",
    icon: <FaBullhorn />,
    iconBgColor: "#fffdc8",
  },
  {
    searchText: "Workshops",
    icon: <FaTools />,
    iconBgColor: "#ffe4e4",
  },
  {
    searchText: "Articles",
    icon: <MdArticle />,
    iconBgColor: "#ddedff",
  },
];

export const footerData = [
  ["About Us", "Contact Us", "Career"],
  ["Life at Unstop", "Clientele", "Partner With Us"],
  ["Partners", "FAQs", "Branding Guidelines"],
  ["Testimonials", "Unstop Rewards Program"],
  ["Unstop on Shark Tank", "Case Studies"],
  ["Unstop on Shark Tank", "Case Studies", "Refer & Earn"],
  ["Unstop on Shark Tank", "Case Studies", "Refer & Earn"],
  ["Terms & Conditions", "Privacy Policy", "Sitemap"],
  ["Request a Feature"],
];
