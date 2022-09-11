import Link from "next/link";

export default function Btn({ cls, href, text }) {
    return (
        <Link href={href}>
            <a className={`Btn--${cls}`}>{text}</a>
        </Link>
    )
}
