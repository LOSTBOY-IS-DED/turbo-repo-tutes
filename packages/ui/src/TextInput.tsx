interface InputProps {
  placeholder: string;
  size: "big" | "small";
}

export function InputComponent({ placeholder, size }: InputProps) {
  return (
    <input
      style={{
        padding: size === "big" ? "20px" : "10px",
        backgroundColor: "white",
        fontSize: "16px",
        color: "black",
        borderRadius: "30px",
      }}
      type="text"
      placeholder={placeholder}
    />
  );
}
