function StackedCircles() {
  return (
    <div className="relative flex justify-center mt-[-120px] mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 280"
        width="100%" // Ensures the SVG takes the full width of its container
        height="250"
      >
        {/* Bottom Circle */}
        <ellipse
          cx="250"
          cy="220"
          rx="220"
          ry="50"
          fill="url(#gradient)"
          opacity="0.5"
        />
        {/* Middle Circle */}
        <ellipse
          cx="250"
          cy="180"
          rx="220"
          ry="60"
          fill="url(#gradient)"
          opacity="0.7"
        />
        {/* Top Circle */}
        <ellipse cx="250" cy="140" rx="220" ry="70" fill="url(#gradient)" />
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E5EDFB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default StackedCircles;
