import React, { useState } from "react";
import "../styles/checkbox.css";

const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="form-group mb-0 d-inline-block mt-3">
      <label className="custom-checkbox">
        <input
          type="checkbox"
          id="checkBox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className="checkmark"></span>
        Keep me signed in
      </label>
    </div>
  );
};

export default CustomCheckbox;
