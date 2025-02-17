import Link from 'next/link';

export default function Btn({ cls, href, text, label = '', handleClick }) {
    return (
        <Link href={href} legacyBehavior>
            <a className={`Btn--${cls}`} onClick={handleClick} aria-label={`${text} (${label})`}>
                {text}
            </a>
        </Link>
    );
}
