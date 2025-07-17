import "./App.scss";
import Leftside from "./Components/Leftside/Leftside";
import Rightside from "./Components/Rightside/Rightside";

function App() {
    const [containerHeight, setContainerHeight] = useState({
        height: "min(95%, 450px)",
    });

    return (
        <div className="container">
            <main style={containerHeight}>
                <Leftside />
                <Rightside />
            </main>
        </div>
    );
}

export default App;
