import Boilerplate from 'components/boilerplate/Boilerplate';
import 'styles/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Boilerplate>
      <Component {...pageProps} />
    </Boilerplate>
  )
}

export default MyApp
