import { TopoObject, TopoProvider, demoProvider } from "@topostitch/react";

export default function App() {
  return (
    <main
      style={{
        width: "100vw",
        minHeight: "100vh",
        padding: 32,
        background: "#181818",
      }}
    >
      <TopoProvider provider={demoProvider}>
        <TopoObject
          id="nasm_A19700102000"
          view="card"
          style={{
            maxWidth: 500,
            margin: "0 auto",
            background: "#fff",
            color: "#111",
            borderRadius: 12,
            padding: 24,
          }}
        />
      </TopoProvider>
    </main>
  );
}
