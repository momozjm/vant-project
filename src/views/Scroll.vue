<template>
  <div class="about">
    <PullRefresh v-model="isLoading" @refresh="onRefresh">
      <p>刷新次数: {{ count }}</p>
      <h1>{{ title }}</h1>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <List v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <Cell v-for="item in list" :key="item" :title="item" />
      </List>
    </PullRefresh>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { PullRefresh, Toast, List, Cell } from "vant";
export default {
  data() {
    return {
      count: 0,
      isLoading: false,
      loading: false,
      finished: false
    };
  },
  computed: {
    ...mapState(["title"]),
    ...mapState(["list"])
  },
  created() {},
  methods: {
    ...mapActions(["getList", "refreshList"]),
    onRefresh() {
      this.refreshList();
      this.finished = false
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        this.getList();

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }
  },
  components: {
    PullRefresh,
    List,
    Cell
  }
};
</script>
<style lang="less">
.about {
  height: 100vh;
}
</style>
