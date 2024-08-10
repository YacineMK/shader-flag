varying vec3 pos;

void main() {
    float black = 0.03;
    float green = -0.03;
    float y = pos.y/3.0;
    float x = pos.x/3.0;

    if( x < -0.08 && x > -0.3 &&  y/x < 0.7){
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    } else if( -y<0.009 &&  x < -0.08 && x > -0.3 &&  -y/x > 0.65){
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }else if(y > black){
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);

    }else if(y < green){
        gl_FragColor = vec4(0.0, 1.0, 0.0,1.0);
    }else{
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);

    }

}