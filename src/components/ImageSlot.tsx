interface ImageSlotProps {
  /** What photo belongs here — shown until a real image is provided. */
  label: string;
  /** Optional real photo. Drop your image files into src/assets and pass them here. */
  src?: string;
  alt?: string;
}

/**
 * Photo frame. The original design ships with user-fillable image
 * placeholders; swap in real photography by passing `src`.
 */
export function ImageSlot({ label, src, alt }: ImageSlotProps) {
  return (
    <div className="image-slot" role={src ? undefined : 'img'} aria-label={alt ?? label}>
      {src ? (
        <img className="image-slot__img" src={src} alt={alt ?? label} />
      ) : (
        <span className="image-slot__label">{label}</span>
      )}
    </div>
  );
}
