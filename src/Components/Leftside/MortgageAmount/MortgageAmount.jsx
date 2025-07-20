import { FaPoundSign } from "react-icons/fa";
import "./MortgageAmount.scss";

function MortgageAmount() {
    return (
        <div className="mortgageAmount-container">
            <label htmlFor="mortgageAmount-input">Mortgage Amount</label>

            <div className="mortgageAmount-input-wrapper">
                <div className="input-icon-wrapper">
                    <FaPoundSign className="input-icon" />
                </div>
                <input
                    id="mortgageAmount-input"
                    type="number"
                    name="MortgageAmount"
                />
            </div>
            {/* {!isInvalid.MortgageAmount && <small>This field is required</small>} */}
        </div>
    );
}

export default MortgageAmount;
