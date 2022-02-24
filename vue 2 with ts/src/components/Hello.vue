<template>
  <div class="hello">
    <h1 v-colorDirective="{color:'white',background:'green'}">{{ message }}</h1>
    <!-- <button @click="clicked">Click</button> -->
    <!-- <router-link to="/hello-ts">Hello TS</router-link> -->
    <PropExample :msg="'my props'" />
    <PropExample  />
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'
import colorDirective from '../directives/color-directive'
import PropExample from './props/NewWayProp.vue'

@Component({
  name:'Hello',
  directives:{
    colorDirective
  },
  components:{
    PropExample
  }
})
export default class Hello extends Vue {

  message = 'Hello Vue';

  get fullMessage():string{
    return `${this.message} from TypeScript`
  }

  //lifecycle hooks are written as methods
  created():void {
    console.log('created');
  }

  clicked():void {
    console.log('clicked');
    
  }

}





// export default {
//   name: 'hello',
//   data () {
//     return {
//       message: 'Welcome to Your Vue.js App'
//     }
//   },

//   computed: {
//     fullMessage(){
//       return `${this.message} from Typescript`;
//     }
//   },

//   created() {
//     console.log('created');
//   },

//   methods: {
//     clicked(){
//       console.log('clicked');
//     }
//   }
// }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
