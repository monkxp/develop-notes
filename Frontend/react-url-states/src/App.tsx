import "./App.css";
import SwitchWithUrlState from "./SwitchWithUrlState";
const colors = ["white", "black", "blue", "green", "gray"];

const sizes = ["sp", "s", "m", "l", "xl", "xxl", "xxxl"];

function App() {
  return (
    <div className="flex flex-col gap-4 items-start justify-start">
      <SwitchWithUrlState colors={colors} sizes={sizes} />
    </div>
  );
}

export default App;
