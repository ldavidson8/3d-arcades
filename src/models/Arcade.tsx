import { useGLTF } from "@react-three/drei";

export default function MyModel(props: any) {
  const gltf = useGLTF("/models/tron-arcade/scene.gltf");
  return <primitive object={gltf.scene} {...props} />;
}
