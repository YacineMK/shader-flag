import * as THREE from "three";
import GUI from "lil-gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import frag from "./shaders/frag.glsl";
import vert from "./shaders/vert.glsl"; 

const gui = new GUI();
const params = {
  Wireframe: false,
};

const mycanvas = document.getElementById("canvas");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 2.5;

const renderer = new THREE.WebGLRenderer({ canvas: mycanvas , alpha: true , antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BoxGeometry(1.14, 0.6, 0.1, 15, 15, 15);

const material = new THREE.ShaderMaterial({
  vertexShader: vert,  
  fragmentShader: frag,
  uniforms: {
    Time: { value: 0 },
    Speed : { value: 3.0 },
  }
});

const flag = new THREE.Mesh(geometry, material);
flag.rotateY(0);
flag.rotateX(0);
flag.rotateZ(0);

scene.add(flag);

gui.add(params, "Wireframe").onChange((value) => {
  flag.material.wireframe = value;
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const Clock = new THREE.Clock();

function animate() {

  
  const t = Clock.getElapsedTime();
  flag.material.uniforms.Time.value = t;

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
