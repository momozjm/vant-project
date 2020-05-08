<template>
  <div class="home">
    <router-link to="/about">About</router-link>
    <router-link to="/scroll">Scroll</router-link>
    <HelloWorld msg="Welcome" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
