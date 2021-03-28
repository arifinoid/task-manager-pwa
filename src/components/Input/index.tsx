interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value: string;
  type?: string;
  name?: string;
  id?: string;
}

export default function Input({ id, onChange, value, type, className }: Props) {
  return (
    <input
      id={id}
      onChange={onChange}
      value={value}
      type={type}
      className={className}
    />
  );
}
