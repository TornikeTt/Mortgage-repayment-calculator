import "./App.scss";
import Leftside from "./Components/Leftside/Leftside";
import Rightside from "./Components/Rightside/Rightside";

function App() {
    return (
        <div className="container">
            <main>
                <Leftside />
                <Rightside />
            </main>
        </div>
    );
}

export default App;
