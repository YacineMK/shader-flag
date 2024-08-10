varying vec3 pos;

void main() {
    float black = 0.03;
    float green = -0.03;
    float y = pos.y/3.0;
    float x = pos.x/3.0;

    if(y<0.01 && x < -0.12 && x > -0.3 &&  y/x < 0.55){
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    } else if(-y<0.01 && x < -0.12 && x > -0.3 &&  y/x > -0.55){
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }else if(y > black){
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);

    }else if(y < green){
        gl_FragColor = vec4(0.0, 1.0, 0.0,1.0);
    }else{
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);

    }

}