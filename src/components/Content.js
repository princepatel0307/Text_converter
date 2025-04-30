import React, { useState } from "react";

export default function Content() {
  const [text, setText] = useState("");
  const [val, setVal] = useState("");

  const handleOnChange = (evt) => {
    console.log("button was clicked");
    setText(evt.target.value);
  };

  const changeToUppercase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    document.querySelector("#showbtn").classList.remove("hidden");
    setVal("Changed into Uppercase");
    setTimeout(() => {
      document.querySelector("#showbtn").classList.add("hidden");
    }, 1500);
  };

  const changeToLowercase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    document.querySelector("#showbtn").classList.remove("hidden");
    setVal("Changed into lowercase");
    setTimeout(() => {
      document.querySelector("#showbtn").classList.add("hidden");
    }, 1500);
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    document.querySelector("#showbtn").classList.remove("hidden");
    setVal("Text copied to clipboard");
    setTimeout(() => {
      document.querySelector("#showbtn").classList.add("hidden");
    }, 1500);
  };
  

  
  const clearText = () => {
    let newtext = "";
    setText(newtext);
    document.querySelector("#showbtn").classList.remove("hidden");
    setVal("Text Cleared");
    setTimeout(() => {
      document.querySelector("#showbtn").classList.add("hidden");
    }, 1500);
    };

  return (
    <div className="flex flex-col justify-center items-center my-4">
      <h1 className="text-5xl">Text Converter</h1>
      <textarea
        rows="10"
        className="w-[70%] border-2 border-solid border-black my-4 p-2 text-lg"
        placeholder="Type or paste something here..."
        onChange={handleOnChange}
        value={text}
        spellCheck="false"
      ></textarea>
      <div className="btn">
        <button
          className="px-4 py-1 cursor-pointer border-2 rounded-md ml-4 border-solid border-black bg-gray-300"
          onClick={changeToUppercase}
        >
          UPERCASE
        </button>
        <button
          className="px-4 py-1 cursor-pointer border-2 rounded-md ml-4 border-solid border-black bg-gray-300"
          onClick={changeToLowercase}
        >
          lowercase
        </button>
        <button
          className="px-4 py-1 cursor-pointer border-2 rounded-md ml-4 border-solid border-black bg-gray-300"
          onClick={copyText}
        >
          Copy Text
        </button>
        <button
          className="px-4 py-1 cursor-pointer border-2 rounded-md ml-4 border-solid border-black bg-gray-300"
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          className="px-4 py-1 cursor-pointer border-2 rounded-md ml-4 border-solid border-black bg-gray-300"
        >
          {text.length} : Characters || {(text.length)>0?text.split(" ").length : 0} : Words
        </button>
      </div>

      <div className="msg-container absolute bottom-4 right-8">
        <h2 id="showbtn" className="text-xl font-bold bg-gray-400 px-4 py-2 rounded-md hidden">{val}</h2>  
      </div>
    </div>
  );
}
