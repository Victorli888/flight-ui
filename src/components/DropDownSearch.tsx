import {h} from "preact";

function DropDownSearch({ label, listId, options }) {
    return (
        <div className="dropdown-input">
            <label>
                {label}:
                <input list={listId} />
                <datalist id={listId}>
                    {options.map((option) => (
                        <option value={option} key={option} />
                    ))}
                </datalist>
            </label>
        </div>
    );
}

export default DropDownSearch;