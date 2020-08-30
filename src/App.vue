<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
import TheHeader from '@/components/TheHeader';
import {getUserInfo} from '@/plugins/api.js';
import {getQueryVariable, getAuthCode} from '@/common/utils.js';

export default {
  name: 'app',
  components: {
    TheHeader
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations({
      setUserInfoFun: 'setUserInfo'
    }),
    async getUserInfo() {
      let auth_code = getQueryVariable('auth_code');
      if(!auth_code) {
        getAuthCode()
      }
      try {
        let res = await getUserInfo({auth_code})
        if(res.data.code == 0) {
          this.setUserInfoFun(res.data.data)
        } else {
          getAuthCode()
        }
      } catch (error) {
          getAuthCode()
      }
    }
  },
  created() {
    this.getUserInfo()
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
