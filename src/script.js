import * as THREE from "three";
import GUI from "lil-gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import frag from "./shaders/frag.glsl";
import vert from "./shaders/vert.glsl"; 

const gui = new GUI();
const params = {
  Wireframe: true,
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

const geometry = new THREE.BoxGeometry(0.1, 1.1, 0.6, 1, 15, 15);

const material = new THREE.ShaderMaterial({
  vertexShader: vert,  
  fragmentShader: frag,
  uniforms: {
    
  }
});

const flag = new THREE.Mesh(geometry, material);
flag.rotateY(30);
flag.rotateX(33);

scene.add(flag);

gui.add(params, "Wireframe").onChange((value) => {
  flag.material.wireframe = value;
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const Clock = new THREE.Clock();

function animate() {

  


  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
