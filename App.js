// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { useState, useRef, Suspense, useLayoutEffect } from "react";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
// import { TextureLoader } from "expo-three";
// import { useAnimatedSensor, SensorType } from "react-native-reanimated";
// import { MeshBasicMaterial } from "three";
// import { Button } from "react-native";

// function Box(props) {
//   const mesh = useRef();

//   const [active, setActive] = useState(false);
//   useFrame((state, delta) => {
//     if (active) {
//       mesh.current.rotation.y += delta;
//     }
//   });

//   return (
//     <mesh
//       {...props}
//       onClick={(event) => setActive(!active)}
//       scale={active ? 1.5 : 1}
//       ref={mesh}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={"orange"} />
//     </mesh>
//   );
// }

// function Shoe(props) {
//   const mesh = useRef();
//   const [base, normal, rough] = useLoader(TextureLoader, [
//     require("./assets/Airmax/textures/BaseColor.jpg"),
//     require("./assets/Airmax/textures/Normal.jpg"),
//     require("./assets/Airmax/textures/Roughness.png"),
//   ]);

//   const groupRef = useRef();

//   useLayoutEffect(() => {
//     obj.traverse((child) => {
//       if (child instanceof THREE.Mesh) {
//         child.material.map = base;
//         child.material.normalMap = normal;
//         child.material.roughnessMap = rough;
//       }
//     });
//   }, [obj]);
//   const material = useLoader(MTLLoader, require("./assets/Airmax/shoe.mtl"));

//   const obj1 = useLoader(GLTFLoader, require("./assets/cat.glb"));
//   const obj = useLoader(OBJLoader, require("./assets/Airmax/shoe.obj"));

//   useFrame((state, delta) => {
//     let { x, y, z } = props.animatedSensor.sensor.value;
//     x = ~~(x * 100) / 5000;
//     y = ~~(y * 100) / 5000;
//     mesh.current.rotation.x += x;
//     mesh.current.rotation.y += y;
//   });

//   if (props.change) {
//     return (
//       <mesh ref={mesh} position={[1, 1, -800]} rotation={[0, 0, 0]}>
//         {/* {console.log()} */}
//         {/* <meshStandardMaterial color={"orange"} /> */}

//         <primitive object={obj1.scene} scale={10} />
//         {/* <primitive object={obj} scale={10} /> */}
//       </mesh>
//     );
//   } else {
//     return (
//       <mesh ref={mesh}>
//         {/* {console.log()} */}
//         {/* <meshStandardMaterial color={"orange"} /> */}

//         {/* <primitive object={obj.scene} scale={10} /> */}
//         <primitive object={obj} scale={10} />
//       </mesh>
//     );
//   }

//   // return (
//   //   <group>
//   //     {gltf.scene.children.map((child) => {
//   //       if (child.isMesh) {
//   //         // Apply materials and textures
//   //         child.material = child.material.clone();
//   //         child.material.needsUpdate = true;
//   //         if (child.material.map) child.material.map.needsUpdate = true;
//   //         if (child.material.normalMap)
//   //           child.material.normalMap.needsUpdate = true;
//   //         if (child.material.roughnessMap)
//   //           child.material.roughnessMap.needsUpdate = true;
//   //       }
//   //       return child;
//   //     })}
//   //   </group>
//   // );
// }
// export default function App() {
//   const animatedSensor = useAnimatedSensor(SensorType.GYROSCOPE, {
//     interval: 100,
//   });
//   const [change, setChange] = useState(true);
//   // const convert = () => {
//   //   const { GLTFLoader } = require("three/examples/jsm/loaders/GLTFLoader");
//   //   const {
//   //     GLTFExporter,
//   //   } = require("three/examples/jsm/exporters/GLTFExporter");

//   //   function convertGLBtoGLTF(glbPath, outputGLTFPath) {
//   //     const loader = new GLTFLoader();

//   //     // Load the GLB model
//   //     loader.load(glbPath, (gltf) => {
//   //       const exporter = new GLTFExporter();

//   //       // Export the GLTF model
//   //       exporter.parse(
//   //         gltf.scene,
//   //         (result) => {
//   //           const outputData = JSON.stringify(result, null, 2);

//   //           // Write the GLTF model to file
//   //           fs.writeFileSync(outputGLTFPath, outputData, "utf8");

//   //           console.log(
//   //             `Conversion completed. GLTF model saved to: ${outputGLTFPath}`
//   //           );
//   //         },
//   //         { binary: false, includeCustomExtensions: true }
//   //       );
//   //     });
//   //   }

//   //   // Usage:

//   //   convertGLBtoGLTF(glbPath, outputGLTFPath);
//   // };

//   return (
//     <>
//       <Canvas>
//         {/* <mesh> */}
//         <ambientLight />
//         <pointLight position={[10, 10, 10]} />
//         {/* <sphereGeometry />
//         <meshStandardMaterial color="orange" />
//       </mesh> */}
//         {/* <meshStandardMaterial color="orange" />
//       <Box position={[0, -1.2, 0]} />
//       <Box position={[0, 1.2, 0]} /> */}
//         <Suspense fallback={null}>
//           <Shoe animatedSensor={animatedSensor} change={change} />
//         </Suspense>
//         {/* <ModelViewer /> */}
//       </Canvas>
//       <Button title="Change" onPress={() => setChange(!change)} />
//     </>
//   );
// }

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const App = () => {
  return (
    <SafeAreaView>
      <Text>App</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
