import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

export default ModelViewer = () => {
  const html = `
<script src="
https://cdn.jsdelivr.net/npm/three-gltf-loader@1.111.0/index.min.js
"></script>
</head>
<body style="margin: 0; overflow: hidden;">
<script>
var renderer, scene, camera;
var loader = new THREE.GLTFLoader();

function init() {
var container = document.createElement('div');
document.body.appendChild(container);

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

loader.load(
'./assets/cat.glb',
function (gltf) {
scene.add(gltf.scene);
},
undefined,
function (error) {
console.error(error);
}
);

animate();
}

function animate() {
requestAnimationFrame(animate);
renderer.render(scene, camera);
}

window.addEventListener('resize', function () {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
});

document.addEventListener('DOMContentLoaded', init);
</script>
</body>
</html>
`;

  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <WebView source={{ html }} style={{ flex: 1 }} />
    </View>
  );
};
