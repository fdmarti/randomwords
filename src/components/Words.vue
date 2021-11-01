<template>

<div class="text-center" v-if="stateSpinner">
    <Spinner />
</div>

<div class="card" v-for="(word,index) in word" :key="index" v-else>
    <div class="card-body text-center">
        <h2><a :href="urlGoogle" target="_blank">{{word.word}}</a> <IconSound :word="word.word"/> </h2>
        <p class="lead">
            <em>{{word.definition}}</em><IconSound :word="word.definition"/>
        </p>
    </div>
</div>

    <div class="text-center mt-4">
        <button class="btn btn-primary" @click="rechargeWord">Get me a new word</button>
    </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import {Words} from '../hooks/Words'
import { onMounted } from '@vue/runtime-core'
import Spinner from './Spinner.vue'
import IconSound from './IconSound.vue'

export default {
    components:{Spinner,IconSound},
    setup(){
        const word = ref([])
        const urlGoogle = ref('')
        const { getWord } = Words()
        const stateSpinner = ref(true)


        const rechargeWord = async () => {
            stateSpinner.value = true
            word.value = await getWord()
            urlGoogle.value = 'https://www.dictionary.com/browse/'+word.value[0].word
            stateSpinner.value = false
        }

        onMounted(rechargeWord)

        return {word,urlGoogle,rechargeWord,stateSpinner}
    }
}
</script>

<style>
    a{
        text-decoration: none;
    }

</style>