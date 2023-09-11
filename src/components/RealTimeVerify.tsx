import moment from "moment";
import { useState } from "react";

// prevents sharing a screenshot of the page
export default function RealTimeVerify(props: { className?: string | undefined; }) {
  const [timestamp, setTimestamp] = useState(
    moment().format("MMMM Do YYYY, h:mm:ss a")
  );
  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = moment().format("MMMM Do YYYY, h:mm:ss a");
    setTimestamp(now);
  }, 1000);

  return <div className={props.className}>{timestamp}</div>;
}
