import Data from './components/Datas';
import './App.css';

function App() {
  return (

    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
          <div className="container">
            <a className="navbar-brand">ORCHIDS</a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <a className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="p-5 text-center bg-light mt-5">
        <div className="container main-sec">
          <Data />
        </div>
      </div>
      <footer className="bg-primary text-center text-lg-start">
        <div className="text-center text-white p-3">© 2020 Copyright:<a className="text-light">react.org</a>
        </div>
      </footer>
    </div>
  )
}

export default App;
