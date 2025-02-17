import Boilerplate from 'components/boilerplate/Boilerplate';
import 'styles/style.scss';
import { DefaultSeo } from 'next-seo';
import nextSEO from 'next-seo.config';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    const { asPath } = useRouter();
    const canonicalUrl = ('https://zuhairn.github.io' + (asPath === '/' ? '' : asPath)).split('?')[0];

    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0, viewport-fit=cover' />
                <meta name='theme-color' content='#ffffff' />
            </Head>
            <DefaultSeo {...nextSEO} canonical={canonicalUrl} />
            <Boilerplate>
                <Component {...pageProps} />
            </Boilerplate>
        </>
    );
}

export default MyApp;
