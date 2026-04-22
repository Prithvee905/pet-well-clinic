import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionHeading from '@/components/ui/SectionHeading';
import GalleryItem from '@/components/ui/GalleryItem';
import Button from '@/components/ui/Button';
import { galleryItems } from '@/data/gallery';
import { ArrowRight } from 'lucide-react';

export default function GalleryPreview() {
  return (
    <section className="section-padding bg-bg-blush">
      <div className="container-main">
        <SectionHeading
          title="Inside Petwell Clinic"
          subtitle="Take a peek at our clean, modern facility and the happy pets we care for every day."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1.2}
          centeredSlides={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 16 },
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 3.2, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="pb-12"
        >
          {galleryItems.map((item, i) => (
            <SwiperSlide key={item.id}>
              <GalleryItem item={item} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-4">
          <Button to="/gallery" variant="outline" icon={ArrowRight}>
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
