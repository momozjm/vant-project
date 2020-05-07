<template>
  <div class="about">
    <button @click="change">change</button>
    <h1>{{ title }}</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/scroll">Scroll</router-link>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  computed:{
    ...mapState(['title'])
  },
  created() {
    this.getAxios()
  },
  methods: {
    ...mapMutations(['changeTitle']),
    ...mapActions(['getAxios']),
    change() {
      this.changeTitle('hhhhh')
    }
  }
}
</script>
