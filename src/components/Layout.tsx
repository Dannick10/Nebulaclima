import React from "react";
import Image from "next/image";
import Input from './InputComponent'
import InputComponent from "./InputComponent";


type Props = {
  title?: string;
  weather?: any;
  children?: any;
};

const Layout = (props: Props) => {

  return (
    <main>
      <div>{props.children}</div>
    </main>
  );
};

export default Layout;
