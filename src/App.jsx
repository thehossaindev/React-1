import "./App.css";
import Button from "./components/Button";
function App() {

  return (
    <>
      <h1 className="text-5xl font-bold underline text-emerald-400 text-center">Welcome to React</h1>
      <p className="text-lg text-red-700 py-4 text-center">React is a free and open-source JavaScript library used for building interactive and dynamic user interfaces (UIs), primarily for single-page applications. Developed and maintained by Meta (Facebook) and a community of individual developers, it focuses specifically on the view layer of web and mobile applications.</p>
      <Button btntext="Click me" />
    </>
  )
}

export default App
