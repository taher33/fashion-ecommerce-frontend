import Layout from "../components/Layout";
import "../styles/globals.scss";
import { useStore } from "../store/init_store";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp;
