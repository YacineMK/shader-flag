uniform float Time;
uniform float Speed;
varying vec3 pos;

void main() {    
    vec3 newPosition = position;

    float moja = sin(position.x * 5.0+Time*Speed);
    newPosition.z += 0.1*moja;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    pos = position;
}
