import { useContext } from "react";

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
      </div>
    </div>
  );
}

export default App;
