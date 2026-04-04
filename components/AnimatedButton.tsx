type AnimatedButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "solid" | "ghost";
};

export default function AnimatedButton({
  text,
  href,
  onClick,
  className = "",
  variant = "solid",
}: AnimatedButtonProps) {
  const chars = text.split("");

  const content = (
    <>
      {chars.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="char"
          data-char={char === " " ? "\u00A0" : char}
          style={{ ["--i" as string]: index }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );

  const classes = `animated-btn animated-btn--${variant} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}