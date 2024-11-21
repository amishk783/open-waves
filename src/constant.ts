import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { IconType } from "react-icons";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";
import { DiNginx } from "react-icons/di";
import { FaWordpress } from "react-icons/fa6";
import { SiWoocommerce } from "react-icons/si";

type FooterLink = {
  name: string;
  url: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};
export const footerLinks: FooterSection[] = [
  {
    title: "Services",
    links: [
      { name: "IT Support", url: "/it-support" },
      { name: "Web Design", url: "/web-design" },
      { name: "Development", url: "/development" },
      { name: "Cloud Things", url: "/cloud-things" },
      { name: "E-Commerce", url: "/ecommerce" },
      { name: "CRM Solutions", url: "/crm-solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Blog", url: "/blog" },
      { name: "About Us", url: "/about" },
      { name: "Partners", url: "/partners" },
      { name: "Careers", url: "/careers" },
      { name: "Events", url: "/events" },
      { name: "Team", url: "/team" },
    ],
  },
  {
    title: "Product",
    links: [
      { name: "Case Studies", url: "/case-studies" },
      { name: "Our Pricing", url: "/pricing" },
      { name: "Features", url: "/features" },
      { name: "Overview", url: "/overview" },
      { name: "New Releases", url: "/new-releases" },
      { name: "Solutions", url: "/solutions" },
    ],
  },
  {
    title: "Our Fields",
    links: [
      { name: "Healthcare", url: "/healthcare" },
      { name: "Banks", url: "/banks" },
      { name: "Logistics", url: "/logistics" },
      { name: "Supermarkets", url: "/supermarkets" },
      { name: "Industries", url: "/industries" },
      { name: "Hotels", url: "/hotels" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Licenses", url: "/licenses" },
      { name: "Settings", url: "/settings" },
      { name: "Cookies", url: "/cookies" },
      { name: "Document", url: "/document" },
      { name: "Terms", url: "/terms" },
      { name: "Privacy", url: "/privacy" },
    ],
  },
];

export const faqContent = [
  {
    question: "How do I get started with building a WordPress website?",
    answer:
      "Contact us to discuss your website needs, and we'll guide you through our streamlined process to design and develop a WordPress site that meets your goals.",
  },
  {
    question:
      "Is WordPress suitable for both small businesses and large enterprises?",
    answer:
      "Absolutely! WordPress is highly flexible and scalable, making it ideal for businesses of all sizes, from small startups to large enterprises.",
  },
  {
    question: "What kind of WordPress services do you offer?",
    answer:
      "We offer a full range of WordPress services including custom theme development, plugin integration, SEO optimization, and ongoing maintenance and support.",
  },
  {
    question: "Can I customize my WordPress website to fit my brand?",
    answer:
      "Yes, we provide fully customizable solutions, ensuring that your WordPress website perfectly reflects your brand's identity and meets your specific business needs.",
  },
  {
    question: "How do you ensure the security of my WordPress website?",
    answer:
      "We implement industry-leading security measures, including regular updates, security monitoring, and backups, to protect your WordPress website from threats.",
  },
];

export const tools: {
  title: string;

  imgUrl: string;
}[] = [
  {
    title: "JavaScript",

    imgUrl: "/tools/javascript.svg",
  },
  {
    title: "JavaScript",

    imgUrl: "/tools/elementor.svg",
  },

  {
    title: "HTML",
    imgUrl: "/tools/html.svg",
  },

  {
    title: "ReactJs",
    imgUrl: "/tools/react.svg",
  },
  {
    title: "NextJs",

    imgUrl: "/tools/nextjs.svg",
  },
  {
    title: "Woocommerce",

    imgUrl: "/tools/woocommerce.svg",
  },

  {
    title: "Tailwindcss",

    imgUrl: "/tools/tailwind.svg",
  },

  {
    title: "NodeJs",

    imgUrl: "/tools/nodejs.svg",
  },
  {
    title: "ExpressJs,",

    imgUrl: "/tools/express.svg",
  },
  {
    title: "Web",
    imgUrl: "/tools/web.svg",
  },

  // {
  //   title: "GitHub",
  //   imgUrl: "/tools/",
  // },

  {
    title: "wordpress",

    imgUrl: "/tools/wordpress.svg",
  },
];


export const faqContentDev = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeframe for website development can vary depending on factors such as the complexity of the project, the number of features required, and the availability of content. Generally, a simple website can be completed in a few weeks, while more complex projects may take several months.",
  },
  {
    question: "What is SEO and why is it important for my website?",
    answer:
      "SEO, or Search Engine Optimization, is the process of optimizing your website to improve its visibility and ranking in search engine results. It is important because higher rankings lead to increased organic traffic, which can translate into more leads and sales for your business.",
  },
  {
    question: " Do I need a mobile-friendly website?",
    answer:
      "Yes, having a mobile-friendly website is essential in today's digital landscape. With the increasing use of smartphones and tablets, many users access the internet on mobile devices. A mobile-friendly website ensures that your site is accessible and functional across all devices, improving user experience and search engine rankings.",
  },
  {
    question: "How much does SEO cost?",
    answer:
      "The cost of SEO services can vary depending on factors such as the size of your website, the level of competition in your industry, and the scope of the project. Generally, SEO services can range from a few hundred to several thousand dollars per month.",
  },
  {
    question: "What is website maintenance and why do I need it?",
    answer:
      "Website maintenance involves regular updates, backups, security checks, and performance optimization to ensure that your website remains secure, up-to-date, and running smoothly. It is important for preserving the integrity and functionality of your website and protecting it from security threats and technical issues.",
  },
];