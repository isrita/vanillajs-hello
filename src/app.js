import "bootstrap";
import "./style.css";

function generateexcuse() {
  let excuses = {
    guilt: ["My sister", "My cat", "My dad", "My cousin"],
    action: ["eat", "destroy", "burn", "throw away"],
    item: ["my homework", "my project", "my tesis", "my report"],
    time: [
      "yesterday",
      "an hour ago",
      "this morning",
      "the past week",
      "during my breakfast"
    ]
  };
  let Guilt = excuses.guilt[Math.round(Math.random() * 3)];
  let Action = excuses.action[Math.round(Math.random() * 3)];
  let Item = excuses.item[Math.round(Math.random() * 3)];
  let Time = excuses.time[Math.round(Math.random() * 4)];

  return Guilt + " " + Action + " " + Item + " " + Time + " ";
}

window.onload = function() {
  document.getElementById("excuse").innerHTML = generateexcuse();
};
