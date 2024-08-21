import { ValueOptions } from "postcss/lib/container";
import React, { ChangeEvent } from "react";

type ChosseTHemeProps = {
    themes: string[]
    theme: string
    onChange: (e: ChangeEvent<any>) => void
};

const ChooseTheme = (props: ChosseTHemeProps) => {



  return (
    <select
      className="select select-bordered bg-base-200 max-w-2"
      onChange={props.onChange}
      defaultValue={props.theme}
    >
      <option disabled selected>
      Themes
      </option>

      {props.themes.map((theme,index) => <option key={index} value={theme}>{theme}</option>)}

    </select>
  );
};

export default ChooseTheme;
