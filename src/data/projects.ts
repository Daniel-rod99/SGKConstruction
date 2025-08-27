import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    image: "/project1/p1Image1.webp",
    position: "Glendale, CA",
    description: "Complete Construction and New Roof",
    gallery: [
      "/project1/p1Image1.webp",
      "/project1/p1Image2.webp",
      "/project1/p1Image3.webp",
      "/project1/p1Image4.webp",
      "/project1/p1Image5.webp",
    ],
  },
  {
    id: 2,
    title: "Project 2",
    image: "/project2/p2Image1.webp",
    position: "Los Angeles, CA",
    description: "Complete Remodeling Exterior",
    gallery: [
      "/project2/p2Image1.webp",
      "/project2/p2Image2.webp",
      "/project2/p2Image3.webp",
      "/project2/p2Image4.webp",
    ],
  },
  {
    id: 3,
    title: "Project 3",
    image: "/project3/p3Image1.webp",
    position: "Mission Hills, CA",
    description: "New Construction",
    gallery: [
      "/project3/p3Image1.webp",
      "/project3/p3Image2.webp",
      "/project3/p3Image3.webp",
      "/project3/p3Image4.webp",
      "/project3/p3Image5.webp",
    ],
  },
  {
    id: 4,
    title: "Project 4",
    image: "/project4/p4Image1.webp",
    position: "Sherman Oaks, CA",
    description: "Fish Tank",
    gallery: ["/project4/p4Image1.webp", "/project4/p4Image2.webp"],
  },
  {
    id: 5,
    title: "Project 5",
    image: "/project5/p5Image1.webp",
    position: "Northdrige, CA",
    description: "New Construction",
    gallery: [
      "/project5/p5Image1.webp",
      "/project5/p5Image2.webp",
      "/project5/p5Image3.webp",
    ],
  },
  {
    id: 6,
    title: "Project 6",
    image: "/project6/p6Image1.webp",
    position: "Beverly Hills, CA",
    description: "Complete Remodeling and Landscaping",
    gallery: ["/project6/p6Image1.webp", "/project6/p6Image2.webp"],
  },
];
