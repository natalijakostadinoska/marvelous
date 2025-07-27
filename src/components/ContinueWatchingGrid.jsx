import poster4 from '../assets/poster4.jpg';
import poster5 from '../assets/poster5.jpg';
import poster6 from '../assets/poster6.jpg';

export default function ContinueWatchingGrid() {
  const movies = [
    poster4,  
    poster5,
    poster6,
    poster6,
    poster4,
    poster5,
    
    
  ];

  const containerStyle = {
    padding: "2rem",
    backgroundColor: "#111",
    color: "white",
  };

  const titleStyle = {
    fontSize: "2rem",
    marginBottom: "1rem",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
    gridGap: "1rem",
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
    height: "200px",
    objectFit: "cover",
    display: "block",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Continue Watching</h1>
      <div style={gridStyle}>
        {movies.slice(0, 9).map((src, index) => (
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
    </div>
  );
}
