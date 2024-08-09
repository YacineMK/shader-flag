import { root } from 'postcss'
import glsl from 'vite-plugin-glsl'

export default {
    root: 'src',
    base: './',
    
    server:
    {
        host: true, 
    },
    plugins: [glsl()],
}
