import "./MortgageType.scss";

function MortgageType({ inputValidation, set_inputValidation }) {
    return (
        <div className="MortgageType-container">
            <p>Mortgage Type</p>
            <label>
                <input type="radio" name="MortgageType" value="Repayment" />
                <span>Repayment</span>
            </label>

            <label>
                <input type="radio" name="MortgageType" value="Interestonly" />
                <span>Interest Only</span>
            </label>

            {!inputValidation.MortgageType.isValid && (
                <small>This field is required</small>
            )}
        </div>
    );
}

export default MortgageType;
