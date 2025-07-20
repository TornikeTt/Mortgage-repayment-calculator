import "./MortgageType.scss";

function MortgageType({ MortgageType_input_status }) {
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

            {!MortgageType_input_status && (
                <small>This field is required</small>
            )}
        </div>
    );
}

export default MortgageType;
