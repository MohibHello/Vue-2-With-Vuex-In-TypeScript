<template>
  <div>
      <h1>{{fullMessage}}</h1>
  </div>
</template>


<script lang='ts'>

import Vue from 'vue'
import { Prop, Component } from "vue-property-decorator";

@Component({})
export default class PropExample extends Vue {
    
     message="hello";
    // to type define and default
     @Prop({type:String ,default:'im default if not passed'}) msg: string;

     get fullMessage():string {
         return `${this.message} and ${this.msg}`
     }

}

</script>

<style>

</style>