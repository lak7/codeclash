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
    bio: "As the Technical Lead for CodeClash, Lakshay plays a pivotal role in driving the technical direction of the society's projects, utilizing his strong foundation in programming and development.His collaborative approach and deep technical expertise make him an integral part of the team.",
    imageUrl: "/lakshay.jpg",
    linkedinUrl: "https://www.linkedin.com/in/lak7/",
  },
  {
    id: 2,
    name: "Shivansh Das",
    role: "Lead",
    bio: "As the Lead of the CodeClash, Shivansh takes charge of driving the society's mission to foster a tech-driven community, leading a range of innovative projects and initiatives. His strong leadership, organizational, and problem-solving abilities enable him to effectively steer the team towards success and impactful outcomes.",
    imageUrl: "/shivansh.png",
    linkedinUrl: "https://www.linkedin.com/in/shivansh-das/",
  },
  // {
  //   id: 3,
  //   name: "Paanav Puri",
  //   role: "Event Management Lead",
  //   bio: "As the Event Management Lead for CodeClash, Paanav excels in planning and executing impactful events that foster learning and collaboration among tech enthusiasts. His dedication to teamwork and meticulous attention to detail ensure the success of every initiative he undertakes, driving the vision of the society forward.",
  //   imageUrl: "/paanav.png",
  //   linkedinUrl: "https://www.linkedin.com/in/paanav-puri-708003257",
    // },
  {
    id: 6,
    name: "Aditya Batra",
    role: "Operations-Lead",
    bio: "As the Operations Lead for CodeClash, Aditya Batra is actively overseeing the smooth execution of the event. From managing logistics and handling on-ground coordination to ensuring that every element is in place, his efforts are playing a key role in keeping everything on track. His dedication and leadership continue to drive the event forward successfully.",
    imageUrl: "/batra.png",
    linkedinUrl: "https://www.linkedin.com/in/adityabatra072",
  },
  // {
  //   id: 7,
  //   name: "Mayank Goel",
  //   role: "Sponsorship Lead",
  //   bio: "Mayank brings his strategic mindset and persuasive communication skills to his role as the Sponsorship Lead for CodeClash. With a passion for fostering partnerships and driving mutual growth, Mayank excels at building relationships with sponsors to support the society's initiatives.",
  //   imageUrl: "/mayank.png",
  //   linkedinUrl: "https://www.linkedin.com/in/mayank-goel/",
  // },
];
