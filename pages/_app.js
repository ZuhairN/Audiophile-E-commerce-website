import Boilerplate from 'components/shared/Boilerplate';
import 'styles/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Boilerplate>
      <Component {...pageProps} />
    </Boilerplate>
  )
}

export default MyApp
