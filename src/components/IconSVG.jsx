const IconSVG = ({ graphic, color = '#f9f9f9', width = 20, height = 20 }) => {
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={`${graphic}`} fill={`${color}`} />
    </svg>
  );
};

export default IconSVG;
