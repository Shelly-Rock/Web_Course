import "./Search.css";

export default function Search({
  value = "",
  onChange,
  placeholder = "Tìm kiếm...",
  onSubmit,
}) {
  return (
    <div className="container-search">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <button
        type="button"
        onClick={() => onSubmit?.(value)}
      >
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
}
