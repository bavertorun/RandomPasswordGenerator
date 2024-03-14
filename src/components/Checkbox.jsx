export default function Checkbox({onChange, label,value}) {
    return (
        <div className="col-auto">
            <div className="form-check fw-bold fs-5">
                <input onChange={onChange} className="form-check-input" type="checkbox" checked={value}/>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    {label}
                </label>
            </div>
        </div>
    )
}