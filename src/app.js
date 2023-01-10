/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  //write your code here
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let i = Math.floor(Math.random() * who.length);
  let j = Math.floor(Math.random() * what.length);
  let k = Math.floor(Math.random() * when.length);
  document.querySelector("#excuse").innerHTML =
    who[i] + " " + what[j] + " " + when[k] + " ";
};
