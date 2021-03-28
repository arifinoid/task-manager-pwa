interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Form({ children, onSubmit, className, id }: Props) {
  return (
    <form id={id} className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
