import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { GalleryItem } from "@/constants/galleryData";
import Image from "next/image";
export default function GalleryModal({
  setSelected,
  selected,
}: {
    setSelected: (item: GalleryItem | null) => void;
  selected: GalleryItem | null;
}) {
  if (!selected) {
    return null;
  }
  console.log(selected);
  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-black/50 z-[1000] flex items-center justify-center cursor-pointer overflow-y-scroll"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[700px]  mx-auto my-8 px-8 cursor-default"
      >
        <motion.div className="relative rounded-t-lg overflow-hidden" layoutId={`image-card-${selected.id}`}>
          <Image width={800}   // Example default width
          height={600}  // Example default height
          className="w-full h-auto object-contain " src={selected.url} alt={selected.title}/>
        </motion.div>
        <motion.div
        
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="bg-white p-4 rounded-b-lg"
        >
          <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
          <div className="flex flex-wrap mt-2 gap-2">
            {selected.tags.map((tag) => (
              <Badge variant={"outline"} className="text-accent" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
          <p className="my-4">{selected.description}</p>
        </motion.div>
      </div>
    </div>
  );
}
