import { municipio, state } from "@/types/State";
import React from "react";

type Props = {
  state: state[]|municipio[];
  text?: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  type: 'municipio' | 'estado'
};

const SelectComponent = (props: Props) => {
  const text = props.text ?? "digite";

  return (
    <select
      className="select select-bordered w-full flex-1 bg-base-200"
      onChange={props.onChange}
      defaultValue="" 
    >
      <option disabled selected>
        {props.text}
      </option>

      {props.state && 
        props.state?.map((state, index) => (
          <option
          key={index}
          value={props.type == 'municipio' ? (state as municipio).nome : (state as state).sigla}>{state.nome}</option>
        ))}


        
    </select>
  );
};

export default SelectComponent;
