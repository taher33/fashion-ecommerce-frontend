import Layout from "../components/Layout";
import "../styles/globals.scss";
import { useStore } from "../store/init_store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
