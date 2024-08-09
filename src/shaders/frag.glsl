varying vec3 pos;

void main() {
    float white = 0.03;
    float green = -0.03;
    float z = pos.z/3.0;


    if(z > white){
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }else if(z < green){
        gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
    }else{
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }

}