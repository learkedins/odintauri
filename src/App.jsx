import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-gray-800 flex flex-col">
        <div className="h-[20%] w-[100%] p-2">
          <h1 className="text-2xl text-left font-semibold">Odin4Linux</h1>
        </div>
      </div>
    </>
  );
}

export default App;
