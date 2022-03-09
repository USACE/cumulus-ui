export default function ButtonGroup({ children, className }) {
  return (
    <span
      className={`relative z-0 inline-flex shadow-sm rounded-md ${className}`}
    >
      {children}
    </span>
  );
}
