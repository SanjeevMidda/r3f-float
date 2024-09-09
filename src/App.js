import "./index.css";
import { OrbitControls, Environment, Float } from "@react-three/drei";

function App() {
  return (
    <>
      <OrbitControls />
      <Environment preset="city" />

      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
}

export default App;
