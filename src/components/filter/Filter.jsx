import React, { useContext } from "react";
import classes from "./Filter.module.css";
import Container from "../container/Container";
import { Context } from "../../context/Provider";
import { SEARCH } from "../../context/actions";

function Filter() {
  const [state, dispatch] = useContext(Context);
  const styles = {
    // FIX: write styles for the container to fix the design problems
  };
  return (
    <Container style={styles}>
      <div>
        <span>Search: </span>
        <input
          onChange={(e) => dispatch({ type: SEARCH, payload: e.target.value })}
          className={classes.roundedInput}
          type="text"
          placeholder="Search..."
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <span>Total: {state.total}</span>
      </div>
    </Container>
  );
}

export default Filter;
