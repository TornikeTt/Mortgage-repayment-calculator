function MortgageType({ label_text, name }) {
    return (
        <div className="mortgage-type__option" tabIndex="0">
            <input
                type="radio"
                id={label_text}
                name={name}
                value={label_text}
            />
            <label htmlFor={label_text}>{label_text}</label>
        </div>
    );
}

export default MortgageType;
