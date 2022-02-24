import {DirectiveOptions} from 'vue'


const directive: DirectiveOptions = {
    inserted(el,vNode) {
    //   if (vNode.modifiers.background) {
    //     el.style.backgroundColor = vNode.value
    //   }
    //   el.style.color = vNode.value
    el.style.backgroundColor = vNode.value.background
    el.style.color = vNode.value.color
    }
}


export default directive