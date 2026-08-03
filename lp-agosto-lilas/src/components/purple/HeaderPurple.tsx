interface HeaderPurpleProps {
  onEscolher: (n: number) => void;
}

export const HeaderPurple = ({ onEscolher }: HeaderPurpleProps) => {
  return (
    <header className="header">
      <nav className="nav">
        <button
          className="btn-header gradient-text nav-purple-title"
          onClick={() => onEscolher(0)}
        >
          AGOSTO LILAS
        </button>
        <button
          className="btn-header gradient-text nav-golden-title"
          onClick={() => onEscolher(1)}
        >
          AGOSTO DOURADO
        </button>
      </nav>
    </header>
  );
};
