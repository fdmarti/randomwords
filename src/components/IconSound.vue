<template>
    <i class='bx bxs-volume-full icon bx-xs' :class="animation" :style="color" @mouseover="changeStyleIcon" @mouseleave="restoreStyleIcon" @click="sayWord"></i>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    props:['word'],
    setup(props){
        
        const color = ref('color:#b1b1b1')
        const animation = ref('')
        const synth = ref(window.speechSynthesis)
        
        const changeStyleIcon = () => {
            color.value = 'color:#729EF9'
            animation.value = 'bx-tada'
        }

        const restoreStyleIcon = () => {
            color.value = 'color:#b1b1b1'
            animation.value = ''
        }

        const sayWord = () => {
            const utterThis = new SpeechSynthesisUtterance(props.word);
            const selectedOption = synth.value.getVoices();
            utterThis.voice = selectedOption[8]
            synth.value.speak(utterThis);
        }

        return{color,animation,changeStyleIcon,restoreStyleIcon,sayWord}

    }
}
</script>
<style>
    .icon{
        cursor: pointer;
    }
</style>