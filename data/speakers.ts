import { StaticImageData } from "next/image"
export interface Speakers {
  id: string
  name: string
  title: string
  topic: string
  image: string | StaticImageData
  description: string
}

export const speakers: Speakers[] = [
  {
    id: "1",
    name: "Pankaj Jha",
    title: "Actor, Painter,Writer",
    topic: "TedxKIET 2024 Edition",
    image: "/pankaj_jha.jpg",
    description: "Pankaj Jha, an actor by profession, painter by passion, poet by default, and photographer by choice. Jha holds a Bachelor’s degree in fine arts (Paintings) from the College of Arts & Crafts, Patna University. While you might recognize him as the enigmatic MLA Chandra Kishore Singh from the popular web series “Panchayat”. He is also a seasoned performer with roles in renowned web sequences like “Mirzapur”, “U Turn” and “SSC”, while also showcasing himself in critically acclaimed films like “BlackFriday”, “Gulaal” and “Mathrubhumi” and newly released “30 Hours Survival : Gauraiya Live” catching eyes in the theatres."
  },
  {
    id: "2",
    name: "Saqib Ayub",
    title: "Actor",
    topic: "TedxKIET 2024 Edition",
    image: "/saqib-ayub.jpg",
    description: "Saqib Ayub, the 28-year-old acting sensation from Mumbai! From starring in Dharma’s “Brahmastra” to Raj & DK’s “Farzi” alongside Shahid Kapoor, his talent shines bright in every project. Trained in Hindustani theater, Saqib’s versatility extends to over 70 short plays and 50 commercials, including Spotify’s debut campaign in India."
  },
   {
    id: "5",
    name: "Ella D verma",
    title: "Indian Model, Influencer,",
    topic: "TedxKIET 2023 Edition",
    image: "/ella.jpg",
    description: "She is a trailblazing model, content creator, influencer, and national-level debate champion.Her willpower, talent, and compassion have captured millions of hearts. Many people failed to comprehend the type of passion and intensity she endures. Her story of perseverance not only touches our hearts but also motivates us to move forward."
  },
  {
    id: "3",
    name: "Nitin Pandey",
    title: "Cyber Security Expert, Security Researcher",
    topic: "TedxKIET 2025 Edition",
    image: "/nitin.jpg",
    description: "Nitin Pandey, a leading cybersecurity expert and Cyber Crime Consultant for the Uttar Pradesh Police, takes us into the digital battlefield where every click holds risk and every breach demands resilience. From digital forensics and threat intelligence to ethical hacking, his work bridges technology with public safety."
  },
  {
    id: "4",
    name: "Sunil Gupta",
    title: "Author & Tihar Jailer",
    topic: "TedxKIET 2025 Edition",
    image: "/sunil.jpg",
    description: "Sunil Gupta, former jailor of Tihar Jail and acclaimed author of Black Warrant, challenges the way prison life is often portrayed to the public. With decades of experience inside one of India’s most complex correctional environments, he brings to light stories of resilience, hope, and humanity that rarely make headlines."
  },
 
  {
    id: "6",
    name: "Prateek Rathee",
    title: "Entrepreneur ",
    topic: "TedxKIET 2025 Edition",
    image: "/prateek.jpg",
    description: "With a civil engineering degree and just limited experience, Prateek earned his government contractor license and turned a broken house into a dream home in only six months, sharing the entire journey on YouTube. What began as a solo project has now grown into a team that has rebuilt more than fifty homes."
  },
   {
    id: "7",
    name: "Col. Rajeev Bagga",
    title: " Ex-NSG Black Cat Commando and an Indian Army Veteran",
    topic: "TedxKIET 2025 Edition",
    image: "/col.jpg",
    description: "Col. Rajeev Bagga (Retd.) is a decorated veteran of the Indian Army, having completed 32.5 years of distinguished service. A Jungle and Mountain Survival Expert, he has operated extensively in hostile terrains—especially in Jammu & Kashmir, where he spent over two decades combating terrorism."
  },
   {
    id: "8",
    name: "Wily Frenzy",
    title: "Producer, Indian DJ ",
    topic: "TedxKIET 2023 Edition",
    image: "/prateek.jpg",
    description: "Wily Frenzy Aka Yash Nagar is a Record Producer, Indian DJ and an extraordinary individual who has defied the odds and inspired many with his remarkable journey.Wily faced a childhood filled with challenges and uncertainty but he refused to let his condition define him and instead, used his creativity and determination to push the boundaries of what was possible."
  },
   {
    id: "9",
    name: "Shen B",
    title: "Singer & Rapper ",
    topic: "TedxKIET 2024 Edition",
    image: "/shen.jpg",
    description: " Shayaan Bhat, aka Shen B - a dynamic hip-hop force hailing from the ornate city of temples,Jammu. Since dropping his explosive breakout single, Chal Beta, in 2019, he has been trailblazing through the hip-hop scene. Masterfully melding fluid production with sharp, trilingual lyricism in Hindi, Urdu, and English, Shen B's experiential music is a riveting reflection of our times, embodying a fresh and authoritative voice in Indian hip-hop."
  },
]