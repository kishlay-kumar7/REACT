import { useState } from "react";

function lottery() {
  let [ticket, setTicket] = useState(0);
  let [won, setWon] = useState(false);
  let [showmessage, setShowmessage] = useState(false);
  function generateLottery() {
    setTicket(Math.floor(Math.random() * (999 - 100) + 100));
    setWon(false);
    setShowmessage(false);
  }

  function validating() {
    let q = ticket;
    let sum = 0;
    while (q != 0) {
      let r = q % 10;
      sum += r;
      q = Math.floor(q / 10);
    }
    setWon(15 == sum);
    setShowmessage(true);
  }

  return (
    <>
      <h2>Lottery</h2>
      <h4>Lottery Ticket= {ticket} </h4>
      <button onClick={validating}>Validate</button>
      {showmessage &&
        (won ? (
          <h4>Congrats!! You won the lottery</h4>
        ) : (
          <h5>
            <strong>Sorry!! Better luck next time</strong>try to regenerate the
            lottery
          </h5>
        ))}
      <button onClick={generateLottery}>Get new ticket</button>
    </>
  );
}
export default lottery;
