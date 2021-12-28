import React from "react";
import { Input } from "reactstrap";
export const defaultSelectOption = [10, 20, 25];
export default function SetLimitEntries(
  onChange,
  value,
  selectOption,
  defaultSelectOption
) {
  return (
    <div className="select-limit">
      <Input
        type="select"
        onChange={(e) => onChange(e.target.value)}
        defaultValue={value}
        style={{ padding: "0px,0px,0px,7px" }}
      >
        {selectOption.map((el) => (
          <option key={el} value={el}>
            {el}rows
          </option>
        ))}
      </Input>
    </div>
  );
}
