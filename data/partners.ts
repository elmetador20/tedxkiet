export interface Partner {
  id: string
  name: string
  category: string
  logo: string
}

export const partners: Partner[] = [
 
  {
    id: "partner-2",
    name: "Hindustan Unilever Limited",
    category: "Gold Sponsor",
    logo: "/hindustan.png",
  },
  {
    id: "partner-3",
    name: "Jain Sweets",
    category: "Food Sponsor",
    logo: "/jain_sweets.jpg",
  },
  {
    id: "partner-4",
    name: "Trends",
    category: "Silver Sponsor",
    logo: "/trends.png"
  },
   {
    id: "amar-ujala",
    name: "Amar Ujaala",
    category: "Media Sponsor",
    logo: "/amar_ujala.avif",
  },
  {
    id: "partner-5",
    name: "belgian waffles",
    category: "Food Sponsor",
    logo: "/blgWaffles.jpg",
  },
  {
    id: "partner-6",
    name: "Interview Buddy",
    category: "Community Partner",
    logo: "/InterviewBuddy.png",
  },
]
