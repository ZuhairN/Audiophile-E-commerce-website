import Head from "next/head";
import Footer from "./Footer";

export default function Boilerplate(props) {
    return (
        <>
            <Head>
                <title>Audiophile E-commerce</title>
                <meta name="description" content="Frontend Mentor Project" />
            </Head>
            <header>
                <h1>header</h1>
            </header>
            {props.children}
            <Footer />
        </>
    )
}
