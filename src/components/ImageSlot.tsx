interface ImageSlotProps {
  /** What photo belongs here — shown until a real image is provided. */
  label: string;
  /** Optional real photo. Drop your image files into src/assets and pass them here. */
  src?: string;
  alt?: string;
  /**
   * CSS object-position value — controls which part of the image is visible
   * when object-fit:cover crops it. Defaults to "50% 50%" (centre).
   * e.g. "50% 20%" to anchor near the top, "50% 80%" to anchor near the bottom.
   */
  objectPosition?: string;
  /**
   * CSS object-fit value. Defaults to "cover" (fills container, may crop).
   * Use "contain" to show the full image without any cropping (letterboxes instead).
   */
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
}

/**
 * Photo frame. The original design ships with user-fillable image
 * placeholders; swap in real photography by passing `src`.
 */
export function ImageSlot({ label, src, alt, objectPosition, objectFit }: ImageSlotProps) {
  const style: React.CSSProperties = {};
  if (objectPosition) style.objectPosition = objectPosition;
  if (objectFit)     style.objectFit     = objectFit;

  return (
    <div className="image-slot" role={src ? undefined : 'img'} aria-label={alt ?? label}>
      {src ? (
        <img
          className="image-slot__img"
          src={src}
          alt={alt ?? label}
          style={Object.keys(style).length ? style : undefined}
        />
      ) : (
        <span className="image-slot__label">{label}</span>
      )}
    </div>
  );
}
