import { useContext } from "react";
import SubChild1_1 from "./SubChild1_1";
import { AppContext } from "./ContextApp";
import SubChild1_2 from "./SubChild1_2";

const Child1 = () => {
  return (
    <>
      <SubChild1_2 />
      <SubChild1_1 />
    </>
  );
};

export default Child1;
