import MovieCard from './MovieCard';
import './CarouselRow.scss';

export default function CarouselRow({ title, items }) {
  return (
    <div className="carouselrow">
      <h2>{title}</h2>
      <div className="carouselrow-items">
        {items.map((item) => (
          <MovieCard key={item.id} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
}