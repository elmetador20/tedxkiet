import { StaticImageData } from "next/image"
export interface Speakers {
  id: string
  name: string
  title: string
  topic: string
  image: string|StaticImageData
}

export const speakers: Speakers[] = [
  {
    id: "1",
    name: "Speaker Name",
    title: "Entrepreneur & Innovator",
    topic: "The Future of Technology",
    image: "/professional-speaker-portrait-1.jpg",
  },
  {
    id: "2",
    name: "Speaker Name",
    title: "Author & Thought Leader",
    topic: "Redefining Success",
    image: "/professional-speaker-portrait-2.jpg",
  },
  {
    id: "3",
    name: "Speaker Name",
    title: "Scientist & Researcher",
    topic: "Innovation in Healthcare",
    image: "/professional-speaker-portrait-3.jpg",
  },
  {
    id: "4",
    name: "Speaker Name",
    title: "Social Activist",
    topic: "Creating Social Change",
    image: "/professional-speaker-portrait-4.jpg",
  },
  {
    id: "5",
    name: "Speaker Name",
    title: "Tech Visionary",
    topic: "AI and Humanity",
    image: "/professional-speaker-portrait-5.jpg",
  },
  {
    id: "6",
    name: "Speaker Name",
    title: "Creative Director",
    topic: "Design for Impact",
    image: "/professional-speaker-portrait-6.jpg",
  },
]