import { PlaceIcon } from "@/icons/Icons";
import React from "react";

type Props = {
  placehold?: string;
  value?: string;
  target?: (city: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputComponent = (props: Props) => {
  const placehold = "digite a cidade" ?? props.placehold;

  return (
    <label className="input input-bordered flex items-center gap-2 flex-1">
      <input
        type="text"
        className="grow"
        placeholder={placehold}
        value={props.value}
        onChange={props.target}
      />
      <span className="text-2xl">
        <PlaceIcon />
      </span>
    </label>
  );
};

export default InputComponent;
