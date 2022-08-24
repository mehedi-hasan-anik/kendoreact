import { Window } from "@progress/kendo-react-dialogs";
import "./App.css";
// Set the variables here.
import "@progress/kendo-theme-bootstrap/dist/all.scss";
import "bootstrap/scss/bootstrap.scss";

function App() {
  return (
    <div className="App">
      <div class="row">
        <div class="col-md-4">
          <Window>hello1</Window>
        </div>
        <div class="col-md-4">
          <Window>hello2</Window>
        </div>
        <div class="col-md-4">
          <Window>hello3</Window>
        </div>
      </div>
    </div>
  );
}

export default App;
