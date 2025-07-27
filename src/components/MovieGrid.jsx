import poster1 from '../assets/poster1.jpg';
import poster2 from '../assets/poster2.jpg';
import poster3 from '../assets/poster3.jpg';

export default function MovieGrid() {
  const movies = [
    poster2,
    poster1,
    poster3,
    poster1,
    poster2,
    poster3,
    poster1,
    poster2,
    poster3,
    poster1,
    poster2,
    poster3,
    poster2,
    poster3,
    poster1,
    poster2,
    poster3,
    poster1, 
  ];

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)", // 6 columns
    gridGap: "1rem",
    padding: "2rem",
    backgroundColor: "#111",
  };

  const cardStyle = {
    borderRadius: "6px",
    overflow: "hidden",
    backgroundColor: "#222",
    transition: "transform 0.2s ease",
    cursor: "pointer",
  };

  const imgStyle = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    display: "block",
  };

  return (
    <div style={gridStyle}>
      {movies.slice(0, 18).map((src, index) => (
        <div
          key={index}
          style={cardStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src={src} alt={`Movie ${index + 1}`} style={imgStyle} />
        </div>
      ))}
    </div>
  );
}

