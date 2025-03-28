"use client"
import { GalleryItem,galleryCategories  } from "@/constants/galleryData";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";


function GalleryCard({
  setSelected,
  item,
}: {
  item: GalleryItem;
  setSelected: (item: GalleryItem | null) => void;
}) {
  return (
    <div className="inline-block w-full mb-4">
      <motion.div
        whileHover={{
          scale: 1.025,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setSelected(item)}
        layoutId={`image-card-${item.id}`}
        className="relative rounded-lg overflow-hidden shadow-md "
      >
        {/* Provide default width/height so Next.js can optimize images. 
            Then override with className for fluid sizing. */}
        <Image
          src={item.url}
          alt={item.title}
          width={800}   // Example default width
          height={600}  // Example default height
          className="w-full h-auto object-cover rounded-lg cursor-pointer bg-gray-100 shadow-xl"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,[your-small-base64-blur-hash]"
        />
      </motion.div>
      <div className="flex flex-wrap gap-2 mt-2">
        {item.tags.map((tag) => (
          <Badge className="text-accent" variant={"outline"} key={tag}>
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default function GalleryList({
  setSelected,
  galleryData,
}: {
    setSelected: (item: GalleryItem | null) => void;
  galleryData: GalleryItem[];
}) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState(
      searchParams.get("category") || "all"
    );
  
    const filteredData = selectedCategory === "all"
      ? galleryData
      : galleryData.filter(item => item.categories.includes(selectedCategory));
  
    const handleCategoryChange = (categoryId: string) => {
      setSelectedCategory(categoryId);
      router.push(`?category=${categoryId}`, { scroll: false });
    };
    return (
        <div className="p-4">
          <h2 className="text-center font-bold text-4xl mb-8">Your images</h2>
          
          {/* Category Filter - Desktop */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-md font-medium bg-light-accent text-accent hover:text-white hover:bg-accent duration-500 cursor-pointer transition-colors `}
              >
                {category.name}
              </button>
            ))}
          </div>
    
    
    
          {/* Gallery Grid */}
          <div className="columns-1  md:columns-2 lg:columns-3 gap-4">
            <AnimatePresence>
              {filteredData.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <GalleryCard item={item} setSelected={setSelected} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
    
          {filteredData.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Ova kategorija trenutno nema slika
            </div>
          )}
        </div>
      );
}
