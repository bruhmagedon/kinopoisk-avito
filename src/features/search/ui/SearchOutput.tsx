interface SearchOutputpProps {
  children: React.ReactNode;
  className?: string;
}

export const SearchOutput = ({ children, className }: SearchOutputpProps) => {
  return (
    <div className={className}>
      {/* Здесь будет список */}
      {children}
    </div>
  );
};
