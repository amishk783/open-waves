export type ContentType = {
  id: number;
  heading: string;
  image: string;
};

export const contents: ContentType[] = [
  {
    id: 1,
    heading: "Ecommerce platform Development",
    image: "/projects/project-1.png",
  },
  {
    id: 2,
    heading: "Mobile Platform Development",
    image: "/projects/project-3.png",
  },
  {
    id: 3,
    heading: "Enter into a Virtual Reality World",
    image: "/projects/project-4.png",
  },
  {
    id: 5,
    heading: "Custom CRM system for a sales team",
    image: "/projects/project-5.png",
  },
  {
    id: 4,
    heading: "Wrist App For Your Productivity",
    image: "/projects/project-6.png",
  },
  {
    id: 6,
    heading: "Software as a Service Integration",
    image: "/projects/project-2.png",
  },
];

const imageByIndex = (index: number): ContentType=>
  contents.find((content) => (content.id === index))!;

export default imageByIndex;
