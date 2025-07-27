export default function HeroBanner({ title, image, description }) {
  return (
    <div
      className="h-[80vh] bg-cover bg-center text-white flex flex-col justify-end p-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="w-1/2 mt-2">{description}</p>
    </div>
  );
}