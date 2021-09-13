import { attach } from './redux/store.js'
import app from './redux/component/app.js'

attach(app, document.getElementById('root'))