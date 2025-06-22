import Link from "next/link";

interface ButtonProps {
  label: string;
  loading?: boolean;
  icon?: React.ReactNode;
  url?: string;
  externalUrl?: string;
  isSecondary?: boolean;
  isSubmit?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  loading = false,
  icon,
  url,
  externalUrl,
  isSecondary = false,
  isSubmit = false,
  onClick,
}) => {
  const base = "px-7 py-2.5 border-transparent rounded-md flex items-center duration-200 w-fit cursor-pointer";
  const primary =
    `${loading ? '' : 'bg-darkerRed hover:bg-primaryRed active:bg-lightestRed'} text-white`;
  const secondary =
    `${loading ? '' : 'bg-stone-950 hover:bg-stone-900 active:bg-stone-800'} text-white`;
  
  const classes = `${base} ${isSecondary ? secondary : primary} ${loading ? 'cursor-auto bg-stone-500' : ''}`;

  const content = (
    <>
      <span>
        {label}
      </span>
      {icon && <div className="ml-2 text-sm">{icon}</div>}
    </>
  );

  if (url) {
    return (
      <Link href={url} passHref>
        <div className={classes}>{content}</div>
      </Link>
    );
  }

  if (externalUrl) {
    return (
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <div className={classes} onClick={onClick}>
        {content}
      </div>
    );
  }

  return (
    <button type={isSubmit ? 'submit' : 'button'} className={classes} disabled={loading}>
      {content}
    </button>
  );
};
