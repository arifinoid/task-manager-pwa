import React from "react";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value: string;
  type?: string;
  name?: string;
  id?: string;
  placeholder?: string;
}

export default function Input({
  id,
  onChange,
  value,
  type,
  className,
  placeholder,
}: Props) {
  return (
    <input
      id={id}
      onChange={onChange}
      value={value}
      type={type}
      className={className}
      placeholder={placeholder}
    />
  );
}
