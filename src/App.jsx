// react imports
import { useState } from "react";

import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

// custom components
import CustomForm from "./components/CustomForm";
import OneThing from "./components/OneThing";

function getSuccessMessage() {
  const messages = [
    "Congrats!",
    "Great job!",
    "Don’t ya feel great?!",
    "Up, up, and up!",
    "Um…okay",
    "Did you though?",
    "Don’t feel like you tried your best…",
    "FAget about it!",
  ];

  return messages[Math.floor(Math.random() * messages.length)];
}

function App() {
  const [thing, setThing] = useState("");
  const [isCompleated, setIsCompleated] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setIsCompleated(false);
  }

  function handleInput(e) {
    console.log(e.target.value);
    setThing(e.target.value);
  }

  async function handleCompletedThing(e) {
    // console.log(e);
    e.target.setAttribute("disabled", true);
    setThing(getSuccessMessage());
    await jsConfetti.addConfetti({
      emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"],
      emojiSize: 50,
      confettiNumber: 35,
    });
    e.target.removeAttribute("disabled");
    setThing("");
    setIsCompleated(true);
  }

  return (
    <>
      <main
        className="grid place-content-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200
        "
      >
        <div className="grid place-items-center gap-8 m-8">
          {isCompleated && (
            <CustomForm
              thing={thing}
              handleInput={handleInput}
              handleSubmit={handleSubmit}
            />
          )}
          {!isCompleated && (
            <OneThing
              thing={thing}
              handleCompletedThing={handleCompletedThing}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
