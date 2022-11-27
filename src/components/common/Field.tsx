import React from "react";
import * as types from "../../constants/types";
interface FieldProps<T> {
  label: string;
  value: T;
}
const Field = <T extends types.Field>(props: FieldProps<T>) => {
  const { label, value } = props;
  return (
    <div className="py-1">
      <label className="text-lg font-medium">{label}: </label>
      <span className="text-lg">{value}</span>
    </div>
  );
};

export default Field;
