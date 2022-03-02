// import { createApp } from 'vue'
import { createStore } from 'vuex'
import counterStore from './counterStore';

export default createStore({
    
    
    modules: {
        counter: counterStore
    }
})