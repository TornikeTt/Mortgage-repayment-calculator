import "./App.scss";
import Leftside from "./Components/Leftside/Leftside";
import Rightside from "./Components/Rightside/Rightside";
import { useState, useEffect } from "react";

function App() {
    const [containerHeight, setContainerHeight] = useState({
        height: "min(95%, 450px)",
    });

    const [isInvalid, setIsInvalid] = useState({
        MortgageAmount: true,
        MortgageTerm: true,
        InterestRate: true,
        MortgageType: true,
    });

    useEffect(() => {
        let false_value_counter = 0;

        for (let each in isInvalid) {
            if (isInvalid[each] === false) {
                false_value_counter++;
            }
        }

        setContainerHeight({
            height: `min(95%, ${450 + false_value_counter * 25}px)`,
        });
    }, [isInvalid]);

    return (
        <div className="container">
            <main style={containerHeight}>
                <Leftside
                    isInvalid={isInvalid}
                    setIsInvalid={setIsInvalid}
                    setContainerHeight={setContainerHeight}
                />
                <Rightside />
            </main>
        </div>
    );
}

export default App;
