import MortgageCalculator from "./Components/MortgageCalculator/MortgageCalculator";
import Result from "./Components/Result/Result";

import "./App.scss";

function App() {
    return (
        <div className="container">
            <main>
                <MortgageCalculator />
                <Result />
            </main>
        </div>
    );
}

export default App;
