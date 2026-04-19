export function Button({ children, variant = "primary", size = "md", className = "", ...props }) {
  const base = variant === "primary" ? "btn-primary" : "btn-ghost";
  const sz = size === "sm" ? "py-2 px-4 text-sm" : size === "lg" ? "py-4 px-8 text-base" : "";
  return (
    <button className={`${base} ${sz} ${className}`} {...props}>
      {children}
    </button>
  );
}
