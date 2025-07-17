function MortgageType({ label_text, name }) {
    return (
        <label className="mortgage-type__option">
            <input type="radio" name={name} value={label_text} />
            <span>{label_text}</span>
        </label>
    );
}

export default MortgageType;
