import { media } from "@/lib/moodhaus-content"

/** Full-bleed twilight footage that scales in as it enters, with a parallax statement over it. */
export function VideoBand() {
  return (
    <section data-video-band className="relative overflow-hidden bg-primary py-6">
      <div data-video-frame className="relative mx-auto h-[85svh] overflow-hidden rounded-[6px]" style={{ width: "86%" }}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={media.twilightVideo}
          poster={media.twilightPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-label="Aerial footage of a modern luxury home at twilight"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
        <div data-video-copy className="absolute inset-x-0 bottom-0 p-8 text-primary-foreground sm:p-14">
          <p className="mh-eyebrow text-accent">Visualize</p>
          <p className="mt-4 max-w-3xl font-serif text-4xl font-light leading-[1.05] sm:text-6xl">
            Walk through your home at golden hour, <em className="text-accent">before a single stone is laid.</em>
          </p>
        </div>
      </div>
    </section>
  )
}
