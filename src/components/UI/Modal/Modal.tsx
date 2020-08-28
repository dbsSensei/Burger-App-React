import React from "react";

import "./Modal.css";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props: any) => {
  // shouldComponentUpdate ( nextProps: any, nextState: any ) {
  //     return nextProps.show !== this.props.show;
  // }

  // componentWillUpdate () {
  //     console.log('[Modal] WillUpdate');
  // }

  // render () {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={"Modal"}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;
