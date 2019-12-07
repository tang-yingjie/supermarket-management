import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        num:10,
        type:'',
        user:''
    },
    mutations:{
        changeType(state,token){
            state.type=token
        },
        changeUser(state,token){
            // console.log(state,'state')
            // console.log(token,'token')
            state.user=token
        }
    }
})
 export default store