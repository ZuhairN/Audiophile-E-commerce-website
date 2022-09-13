import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Boilerplate(props) {
    return (
        <>
            <Head>
                <meta name="description" content="Frontend Mentor Project" />
            </Head>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}