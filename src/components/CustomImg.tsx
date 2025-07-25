interface CustomImgProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function CustomImg({ src, alt, className }: CustomImgProps) {
  const DefaultImgClass =
    "object-cover w-full max-h-[600px] rounded-br-[100px] lg:rounded-br-[200px]";
  return (
    <img
      className={className ? className : DefaultImgClass}
      src={src}
      alt={alt}
    />
  );
}
