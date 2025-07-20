import { FaPoundSign } from "react-icons/fa";
import "./MortgageAmount.scss";

function MortgageAmount({ MortgageAmount_input_status }) {
    return (
        <div className="mortgageAmount-container">
            <label htmlFor="mortgageAmount-input">Mortgage Amount</label>

            <div
                className={`mortgageAmount-input-wrapper ${
                    !MortgageAmount_input_status ? "error" : ""
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
            {!MortgageAmount_input_status && (
                <small>This field is required</small>
            )}
        </div>
    );
}

export default MortgageAmount;
