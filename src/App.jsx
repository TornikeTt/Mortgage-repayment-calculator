import "./App.scss";
import Leftside from "./Components/Leftside/Leftside";
import Rightside from "./Components/Rightside/Rightside";
import { useState, useEffect } from "react";
import "./Mobile.scss";

function App() {
    const [width, setWidth] = useState(window.innerWidth);
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
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        let false_value_counter = 0;

        for (let each in isInvalid) {
            if (!isInvalid[each]) {
                false_value_counter++;
            }
        }
        /*
            We adjust the height of the <main> tag based on how many input fields are invalid.
            For each invalid input, we add 25px to make room for error messages.

            If the screen width is greater than 600px:
                - Start height is 450px.
            If the screen width is 600px or less:
                - Start height is 520px to better accommodate the vertical layout on smaller screens.

            This helps ensure the layout displays correctly without elements overlapping or being cut off.
        */
        setContainerHeight({
            height:
                width > 600
                    ? `min(95%, ${450 + false_value_counter * 25}px)`
                    : `min(95%, ${520 + false_value_counter * 25}px)`,
        });
    }, [isInvalid, width]);

    return (
        <div className="container">
            <main style={containerHeight}>
                <Leftside
                    isInvalid={isInvalid}
                    setIsInvalid={setIsInvalid}
                    setContainerHeight={setContainerHeight}
                />
                <Rightside isInvalid={isInvalid} />
            </main>
        </div>
    );
}

export default App;
