import "./App.css";
import Content from "./component/Content";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Menu from "./component/Menu";
import Preloader from "./component/Preloader";

function App() {
  return (
    <div className="wrapper">
      <Preloader />
      <Header />
      <Menu />
      <Content />
      <Footer />
      {/* Control sidebar content goes here */}
      <aside className="control-sidebar control-sidebar-dark"></aside>
    </div>
  );
}

export default App;
