import { createFileRoute, useRouter } from "@tanstack/react-router";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ArcadeModel from "~/models/Arcade";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div id="canvas-container">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <ArcadeModel scale={0.5} position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
