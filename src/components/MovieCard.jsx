export default function Card({ image, title }) {
  return (
    <div className="min-w-[150px]">
      <img src={image} alt={title} className="rounded-lg" />
      <p className="mt-2 text-sm">{title}</p>
    </div>
  );
}