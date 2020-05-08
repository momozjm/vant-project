<template>
  <div class="about">
    <Button type="primary" @click="getDetail" id="detail">点击调用接口获取详情</Button>
    <router-link to="/">Home</router-link>
    <router-link to="/scroll">Scroll</router-link>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { Button } from "vant";
export default {
  computed: {
    ...mapState("about", ["detail"])
  },
  created() {
    // this.getDetail();
  },
  methods: {
    ...mapActions("about", ["getDetail"])
  },
  components: {
    Button
  }
};
</script>
<style lang="less">
.about {
  height: 100vh;
  font-size: 14px;
}
#detail {
  font-size: 14px;
}
</style>

