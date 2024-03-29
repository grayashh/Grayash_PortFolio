import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { MutableRefObject } from "react";

export default function Scene({
  children,
  eventSource,
  eventPrefix,
}: {
  children: React.ReactNode;
  eventSource: MutableRefObject<HTMLElement>;
  eventPrefix: "offset" | "client" | "page" | "layer" | "screen" | undefined;
}) {
  return (
    <Canvas
      eventSource={eventSource}
      eventPrefix={eventPrefix}
      style={{
        position: "fixed",
        top: 0,
        zIndex: 0,
      }}
    >
      {children}
      <Preload all />
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
