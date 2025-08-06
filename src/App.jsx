import "./App.scss";
import Leftside from "./Components/Leftside/Leftside";
import Rightside from "./Components/Rightside/Rightside";
import { useState, useEffect } from "react";
import "./Mobile.scss";

function App() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState({
        height: "min(95%, 450px)",
    });

    const [showResult, setShowResult] = useState(false);
    const [calculatedValues, setCalculatedValues] = useState([0, 0]);

    const [inputValidation, set_inputValidation] = useState({
        MortgageAmount: { isValid: true, value: "" },
        MortgageTerm: { isValid: true, value: "" },
        InterestRate: { isValid: true, value: "" },
        MortgageType: { isValid: true, value: "" },
    });

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        let invalidInputCount = 0;

        for (let field in inputValidation) {
            if (!inputValidation[field].isValid) {
                invalidInputCount++;
            }
        }

        /*
            We adjust the height of the <main> tag based on how many input fields are invalid.
            For each invalid input, we add 25px to make room for error messages.

            If the screen width is greater than 600px:
                - Base height is 450px.
            If the screen width is less than 400px:
                - Base height is 950px to accommodate mobile layout.
            Otherwise (between 400px and 600px):
                - Base height is 520px.

            This ensures proper layout and prevents elements from being cut off.
        */
        let calculatedHeight = null;

        if (width > 600) {
            calculatedHeight = `min(95%, ${450 + invalidInputCount * 25}px)`;
        } else if (width < 400) {
            calculatedHeight = `min(95%, ${950 + invalidInputCount * 25}px)`;
        } else {
            calculatedHeight = `min(95%, ${520 + invalidInputCount * 25}px)`;
        }

        setHeight({
            height: calculatedHeight,
        });
    }, [inputValidation, width]);

    return (
        <div className="container">
            <main style={height}>
                <Leftside
                    inputValidation={inputValidation}
                    set_inputValidation={set_inputValidation}
                    setShowResult={setShowResult}
                    setCalculatedValues={setCalculatedValues}
                />

                <Rightside
                    showResult={showResult}
                    calculatedValues={calculatedValues}
                />
            </main>
        </div>
    );
}

export default App;
