export const galleryData = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
      categories: ["nature"]
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
      categories: ["architecture"]
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
      categories: ["abstract"]
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1614597396930-cd6760b99f7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
      categories: ["architecture"]
    },
    {
      id: 5,
      url: "https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
      categories: ["abstract"]
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1507629221898-576a56b530bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
      categories: ["architecture"]
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1662541109467-a80473ab73e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
      categories: ["nature"]
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1662544954782-4c137c9b34a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
      categories: ["nature"]
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1659536009108-ebe9053222d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
      categories: ["abstract"]
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1662532577856-e8ee8b138a8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
      categories: ["architecture"]
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1662436267874-4ab1145ade4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
      categories: ["nature"]
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1662514282655-438b87b04995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
      categories: ["architecture"]
    },
  ] ;

  export type GalleryItem = {
    id: number;
    url: string;
    title: string;
    description: string;
    tags: string[];
    categories: string[]; // Add categories
  }

  export const galleryCategories = [
    { id: "all", name: "All Images" },
    { id: "nature", name: "Nature" },
    { id: "architecture", name: "Architecture" },
    { id: "abstract", name: "Abstract" }
  ];