export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedinUrl?: string;
  featured?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: 5,
    name: "Lakshay Gupta",
    role: "Technical Lead",
    bio: "As the Technical Lead for DSC, Lakshay plays a pivotal role in driving the technical direction of the society's projects, utilizing his strong foundation in programming and development.His collaborative approach and deep technical expertise make him an integral part of the team.",
    imageUrl: "/lakshay.jpg",
    linkedinUrl: "https://www.linkedin.com/in/lak7/",
  },
  {
    id: 2,
    name: "Shivansh Das",
    role: "Lead",
    bio: "As the Lead of the DSC, Shivansh takes charge of driving the society's mission to foster a tech-driven community, leading a range of innovative projects and initiatives. His strong leadership, organizational, and problem-solving abilities enable him to effectively steer the team towards success and impactful outcomes.",
    imageUrl: "/shivansh.png",
    linkedinUrl: "https://www.linkedin.com/in/shivansh-das/",
  },
  {
    id: 3,
    name: "Kashish Tyagi",
    role: "Vice-Lead",
    bio: "Kashish is a true visionary, and she blends creativity with technical acumen, bringing fresh perspectives to innovative projects. As the Vice Lead of DSC, Kashish is eager to collaborate and drive technological advancement.",
    imageUrl: "/kashish.png",
    linkedinUrl: "https://www.linkedin.com/in/kashish-tyagi-618354295/",
  },
  {
    id: 4,
    name: "Aayush Raj",
    role: "Creative Lead",
    bio: "Aayush, as the Creative Lead for DSC, combines his technical skills with a strong creative vision.With a deep passion for design and innovation, Aayush leads the creative direction of the society's projects, ensuring that every initiative is visually captivating and impactful.",
    imageUrl: "/aayush.png",
    linkedinUrl: "https://www.linkedin.com/in/aayushraj1404/",
  },

  {
    id: 6,
    name: "Paanav Puri",
    role: "Event Management Lead",
    bio: "As the Event Management Lead for DSC, Paanav excels in planning and executing impactful events that foster learning and collaboration among tech enthusiasts. His dedication to teamwork and meticulous attention to detail ensure the success of every initiative he undertakes, driving the vision of the society forward.",
    imageUrl: "/paanav.png",
    linkedinUrl: "https://www.linkedin.com/in/paanav-puri-708003257",
  },
  {
    id: 7,
    name: "Mayank Goel",
    role: "Sponsorship Lead",
    bio: "Mayank brings his strategic mindset and persuasive communication skills to his role as the Sponsorship Lead for DSC. With a passion for fostering partnerships and driving mutual growth, Mayank excels at building relationships with sponsors to support the society's initiatives.",
    imageUrl: "/mayank.png",
    linkedinUrl: "https://www.linkedin.com/in/mayank-goel/",
  },
];
