<template>
  <div id="app">
    <!-- <TheHeader></TheHeader> -->
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';

export default {
  name: 'app',
  components: {
    TheHeader
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  background: #4fc08d;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  display: flex;
  flex-flow: column nowrap;
}
</style>
