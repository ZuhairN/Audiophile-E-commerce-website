import Link from "next/link";

export default function Btn({ cls, href }) {
    return (
        <Link href={href}>
            <a className={`Btn--${cls}`}>SEE PRODUCT</a>
        </Link>
    )
}
