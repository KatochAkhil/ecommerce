import "@/styles/globals.css";
// import "@/styles/fontawesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
