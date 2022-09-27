import Link from "next/link";

export default function Btn({ cls, href, text, handleClick }) {
    return (
        <Link href={href}>
            <a className={`Btn--${cls}`} onClick={handleClick}>{text}</a>
        </Link>
    )
}
