<template>
  <div class="container">
    <h2 class="text-center mt-5">Random Words</h2>
    <div class="m-4">
      <Words />
    </div>
    <Footer />
  </div>
</template>

<script>
import Words from "./components/Words.vue";
import Footer from "./components/Footer.vue"
export default {
  components:{ Words, Footer },
  setup(){
  
  }
}
</script>
