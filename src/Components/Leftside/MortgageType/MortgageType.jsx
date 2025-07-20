import "./MortgageType.scss";

function MortgageType() {
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
        </div>
    );
}

export default MortgageType;
