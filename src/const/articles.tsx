import { User, Calendar, Clock } from "lucide-react";
import type { detailType,Article } from "@/types/article";
export const detail: detailType[] = [
    {
        icon: <User className="size-4 text-neutral-500" />,
        label: "Admin",
    },
    {
        icon: <Calendar className="size-4 text-neutral-500" />,
        label: "Januari 20, 2025",
    },
    {
        icon: <Clock className="size-4 text-neutral-500" />,
        label: "5 mins",
    }
]
export const articles: Article[] = [
    {
        id: 1,
        title: "The Rise of QR Code Payments: Simplicity Meets Security",
        type: "Technology",
        image: "/images/working.jpg",
        description: "QR code payments have transformed how people transact — fast, contactless, and convenient. This article explores how businesses can leverage QR technology to enhance customer experience, improve transaction efficiency, and ensure payment security in the digital age.",
        detail: detail

    },
    { 
        id: 2,
        title: "Designing for Accessibility: Creating Inclusive Digital Experiences",
        type: "Design",
        image: "/images/working.jpg",
        description: "Accessibility is a crucial aspect of modern digital design. This article delves into best practices for creating websites and applications that are usable by people of all abilities, ensuring inclusivity and compliance with accessibility standards.",
        detail: detail
    },
    {
        id: 3,
        title: "AI in Everyday Life: Transforming How We Live and Work",
        type: "AI & Data",
        image: "/images/working.jpg",
        description: "Artificial Intelligence (AI) is increasingly integrated into our daily lives, from virtual assistants to personalized recommendations. This article examines the various applications of AI and its impact on productivity, convenience, and decision-making.",
        detail: detail
    },
    {
        id: 4,
        title: "Building Strong Brands: The Power of Consistent Branding",
        type: "Branding",
        image: "/images/working.jpg",
        description: "A strong brand identity is essential for business success. This article explores strategies for developing and maintaining a consistent brand image across all touchpoints, helping businesses connect with their audience and build lasting relationships.",
        detail: detail
    },
    {
        id: 5,
        title: "The Future of Web Development: Trends to Watch in 2025",
        type: "Development",
        image: "/images/working.jpg",
        description: "Web development is constantly evolving with new technologies and frameworks. This article highlights the key trends and innovations that developers should watch for in 2025 to stay ahead in the industry.",
        detail: detail
    },
    {
        id: 6,
        title: "Cybersecurity Best Practices: Protecting Your Digital Assets",
        type: "Technology",
        image: "/images/working.jpg",
        description: "Cybersecurity is critical in protecting sensitive information and maintaining trust. This article covers essential best practices for individuals and organizations to safeguard their digital assets against cyber threats.",
        detail: detail
    },
    {
        id: 7,
        title: "The Role of UX Research in Product Development",
        type: "Design",
        image: "/images/working.jpg",
        description: "UX research is a vital component of product development, providing insights into user needs and behaviors. This article discusses how incorporating UX research can lead to more user-centered products and successful outcomes.",
        detail: detail
    },
    {
        id: 8,
        title: "Leveraging Big Data for Business Growth",
        type: "AI & Data",
        image: "/images/working.jpg",
        description: "Big data analytics offers valuable insights that can drive business growth and innovation. This article explores how organizations can harness big data to make informed decisions, optimize operations, and gain a competitive edge.",
        detail: detail
    },
    {
        id: 9,
        title: "Effective Digital Marketing Strategies for 2025",
        type: "Branding",
        image: "/images/working.jpg",
        description: "Digital marketing is constantly evolving with new tools and techniques. This article outlines effective strategies for businesses to reach their target audience, increase engagement, and drive conversions in 2025.",
        detail: detail
    },
    {
        id: 10,
        title: "Progressive Web Apps: The Future of Mobile Experience",
        type: "Development",
        image: "/images/working.jpg",
        description: "Progressive Web Apps (PWAs) offer a seamless mobile experience by combining the best of web and native apps. This article discusses the benefits of PWAs and how they are shaping the future of mobile technology.",
        detail: detail
    }
];