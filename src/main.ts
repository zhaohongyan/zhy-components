import './var.css'
import Button from "./components/Button.vue";
import Card from './components/Card.vue'

// const ZhyComponents = {
//     Button,
// }

// export default ZhyComponents;
export default {
    install: (app) => {
        app.component('ZhyButton', Button);
        app.component('ZhyCard', Card);
    }
}
