import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import PostList from "./components/PostList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function App() {
  return (
    <div className="App">
     <Container>
        <PostList/>
      </Container>
    </div>
  );
}

export default App;
