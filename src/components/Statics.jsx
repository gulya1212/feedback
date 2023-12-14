import React from "react";

const Statics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div className="statistics">
      <h2>Statistics</h2>
      {total ? (
        <>
          <p className="good btns">Good: {good}</p>
          <p className="neutral btns">Neutral:{neutral}</p>
          <p className="bad btns">Bad:{bad}</p>
          <b>Total:{total}</b>
          {positive ? <p>Positive Feedback:{Math.round(positive)}%</p> : ""}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Statics;
