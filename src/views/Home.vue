<template>
  <div class="home">
    <router-link to="/some">点击跳转到About页面</router-link>
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
