<template>
  <div class="about">
    <router-link to="/">Home</router-link>
    <Button type="primary" @click="doSomeCallback">点击修改state里的值</Button>
    {{someData}}
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { Button } from "vant";
export default {
  computed: {
    ...mapState("some", ["someData"])
  },
  created() {
    const parameter = { id: 1 };
    this.getSomeData(parameter);
    this.doSomeCallback({
      parameter,
      callback: res => {
        console.log("这里是actions里callback回来的数据" + res);
      }
    });
  },
  methods: {
    ...mapActions("some", ["getSomeData", "doSomeCallback"])
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

