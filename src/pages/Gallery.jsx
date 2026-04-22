import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PawPrint } from 'lucide-react';
import GalleryItem from '@/components/ui/GalleryItem';
import { galleryItems, galleryCategories } from '@/data/gallery';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Gallery – Petwell Clinic</title>
        <meta
          name="description"
          content="Explore our photo gallery — see inside Petwell Clinic, our consultation rooms, happy pets, and grooming sessions. Experience our warm, modern facility."
        />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <PawPrint className="absolute top-[20%] right-[12%] w-10 h-10 text-white/[0.05] rotate-12" />
          <PawPrint className="absolute bottom-[25%] left-[6%] w-8 h-8 text-white/[0.04] -rotate-12" />
        </div>
        <div className="container-main relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Gallery
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
              A glimpse into Petwell Clinic — our space, our patients, and the moments that matter.
            </p>
            <div className="mt-5 h-1 w-16 rounded-full bg-white/30 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-bg-blush">
        <div className="container-main">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-text-muted border border-border-soft hover:border-primary hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <GalleryItem item={item} index={i} />
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <PawPrint className="w-12 h-12 text-primary/20 mx-auto mb-3" />
              <p className="text-text-muted">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
