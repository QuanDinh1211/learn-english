import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./assets/style/global.scss";
import "./assets/style/reset.css";
import Content from "./screen";
import Modal from "./screen/modal";
import ModalShowFeedBack from "./screen/modal/FeedbackModal";

import { RootContext } from "./store/context/rootContext";

function App() {
  const { showModal, showFeedback } = useContext(RootContext);

  const { show } = showFeedback;

  return (
    <div className="App">
      <div className="app-wrapper relative">
        <Content />
        {showModal && <Modal />}
        {show && <ModalShowFeedBack />}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
