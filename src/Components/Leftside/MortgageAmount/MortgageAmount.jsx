import { FaPoundSign } from "react-icons/fa";
import "./MortgageAmount.scss";

function MortgageAmount({ inputValidation, set_inputValidation }) {
    return (
        <div className="mortgageAmount-container">
            <label htmlFor="mortgageAmount-input">Mortgage Amount</label>

            <div
                className={`mortgageAmount-input-wrapper ${
                    !inputValidation.MortgageAmount.isValid ? "error" : ""
                }`}
            >
                <div className="input-icon-wrapper">
                    <FaPoundSign className="input-icon" />
                </div>
                <input
                    id="mortgageAmount-input"
                    type="number"
                    name="MortgageAmount"
                />
            </div>
            {!inputValidation.MortgageAmount.isValid && (
                <small>This field is required</small>
            )}
        </div>
    );
}

export default MortgageAmount;
