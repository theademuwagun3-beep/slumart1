import { galleryImages } from '@/data';

export default function Gallery() {
  return (
    <section id="gallery" className="bg-tertiary py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl text-left">
          <p className="mb-4 text-[13px] font-normal uppercase tracking-[0.25em] text-primary">
            Selected Works
          </p>
          <h2 className="text-[37px] font-bold leading-[1.1] text-black sm:text-[47px]">
            From Your Photo to a Hand-Painted Masterpiece
          </h2>
          <p className="mt-6 text-[20px] font-normal leading-[1.6] text-black/70">
            Each piece is individually composed and developed with you — painted for clients
            worldwide.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  img.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              <p className="absolute bottom-4 left-4 right-4 text-[13px] font-normal leading-[1.4] text-white opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                {img.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
