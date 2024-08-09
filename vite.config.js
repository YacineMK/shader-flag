import { root } from 'postcss'
import glsl from 'vite-plugin-glsl'

export default {
    root: 'src',
    base: './',
    
    server:
    {
        host: true, 
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
    },
    plugins: [glsl()],
}
