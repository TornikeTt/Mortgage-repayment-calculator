import { FaPoundSign } from "react-icons/fa";
import calculator from "../../assets/images/icon-calculator.svg";
import "./Leftside.scss";
import MortgageDetailsBlock from "./MortgageDetailsBlock";

function Leftside() {
    return (
        <div className="leftSide">
            <div className="calculator-wrapper">
                <div className="calculator-header">
                    <h1 className="calculator-title">Mortgage Calculator</h1>
                    <button className="clear-button">
                        <span>Clear All</span>
                    </button>
                </div>

                <form>
                    <div className="mortgageAmount-container">
                        <label htmlFor="mortgageAmount-input">
                            Mortgage Amount
                        </label>

                        <div className="mortgageAmount-input-wrapper">
                            <div className="input-icon-wrapper">
                                <FaPoundSign className="input-icon" />
                            </div>
                            <input id="mortgageAmount-input" type="number" />
                        </div>
                    </div>

                    <div className="mortgage-details">
                        <MortgageDetailsBlock
                            class_name="MortgageTerm"
                            label_text="Mortgage Term"
                            input_description="years"
                        />

                        <MortgageDetailsBlock
                            class_name="interestRate"
                            label_text="Interest Rate"
                            input_description="%"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Leftside;
