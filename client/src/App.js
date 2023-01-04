import { useContext } from "react";

import "./assets/style/global.scss";
import "./assets/style/reset.css";
import Content from "./screen";
import Modal from "./screen/modal";

import { RootContext } from "./store/context/rootContext";

function App() {
  const { showModal } = useContext(RootContext);

  return (
    <div className="App">
      <div className="app-wrapper relative">
        <Content />
        {showModal && <Modal />}
      </div>
    </div>
  );
}

export default App;
