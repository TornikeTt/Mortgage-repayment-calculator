import illustrantionEmpty from "../../assets/images/illustration-empty.svg";
import "./Rightside.scss";

function Rightside() {
    return (
        <div className="rightSide">
            <div className="results-container">
                <img
                    src={illustrantionEmpty}
                    alt="calculator icon"
                    className="results-icon"
                />
                <h1 className="results-title">Results shown here</h1>
                <p className="results-description">
                    Complete the form and click “calculate repayments” to see
                    what your monthly repayments would be.
                </p>
            </div>
        </div>
    );
}

export default Rightside;
