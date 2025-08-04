import illustrantionEmpty from "../../assets/images/illustration-empty.svg";
import "./Rightside.scss";

function Rightside({ showResult, calculatedValues }) {
    return (
        <div className="rightSide">
            {showResult ? (
                <section className="calculated_result">
                    <h1 className="results-title">Your results</h1>
                    <p className="results-description">
                        Your results are shown below based on the information
                        Mortgage Amount you provided. To adjust the results,
                        edit the form and click "calculate repayments" again.
                    </p>

                    <div className="repayment-box">
                        <div className="monthly-payments">
                            <p className="monthly-label">
                                Your monthly repayments
                            </p>
                            <p className="monthly-amount">
                                {calculatedValues[0]}
                            </p>
                        </div>

                        <hr />

                        <div className="total-payments">
                            <p className="total-label">
                                Total you'll repay over the term
                            </p>
                            <p className="total-amount">
                                {calculatedValues[1]}
                            </p>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="default_results">
                    <img
                        src={illustrantionEmpty}
                        alt="calculator icon"
                        className="results-icon"
                    />
                    <h1 className="results-title">Results shown here</h1>
                    <p className="results-description">
                        Complete the form and click “calculate repayments” to
                        see what your monthly repayments would be.
                    </p>
                </section>
            )}
        </div>
    );
}

export default Rightside;
