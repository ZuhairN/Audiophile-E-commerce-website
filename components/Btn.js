import Link from "next/link";

export default function Btn({ cls }) {
    return (
        <Link href='/headphones'>
            <a className={`Btn--${cls}`}>SEE PRODUCT</a>
        </Link>
    )
}
