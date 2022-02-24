<template>
  <div>
      <h1>{{fullMessage}}</h1>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from "vue-class-component";

// define a class for to take the props and making this component extend it
class HelloProps extends Vue {
    msg:string = ''
}

// delcare props here 
@Component({
    props:{
        msg: String
    }
})
export default class PropExample extends HelloProps {
    
     message="hello";

    // access using this keyword
     get fullMessage():string {
         return `${this.message} and ${this.msg}`
     }

}

</script>