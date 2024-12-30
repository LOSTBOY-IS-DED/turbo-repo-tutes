"use client";

import { InputComponent } from "@repo/ui/TextInput";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <div>
        {/* <input
          style={{
            padding: "20px",
            backgroundColor: "white",
            fontSize: "16px",
            color: "black",
            borderRadius: "30px",
          }}
          type="text"
          placeholder="room id"
        /> */}
        <InputComponent placeholder="join room" size="small" />
      </div>
      <div>
        <button
          style={{
            padding: "10px",
            backgroundColor: "skyblue",
            color: "black",
            cursor: "pointer",
            borderRadius: "30px",
            border: "black",
            borderWidth: "2",
            marginTop: "10px",
          }}
          onClick={() => {
            alert("hi there from naina sweetheart");
          }}
        >
          join now
        </button>
      </div>
    </div>
  );
}
