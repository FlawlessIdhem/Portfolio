type AnimatedButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "solid" | "ghost";
  type?: "button" | "submit" | "reset";
};

export default function AnimatedButton({
  text,
  href,
  onClick,
  className = "",
  variant = "solid",
  type = "button",
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
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={classes}
    >
      {content}
    </a>
  );
}

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}