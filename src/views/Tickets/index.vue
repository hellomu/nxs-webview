<template>
    <div id="tickets">
        <div class="layout">
            <div class="logo">
                <img class="common-position-h-v-mid" src="../../assets/images/logo-square.png" alt="">
            </div>
            <div class="list" v-if="userInfo">
                <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                    >
                        <TheTicket v-for="(item, i) in records" :key="i" :data="item" @onSuccess="onSuccess" :refreshing="isLoading"></TheTicket>
                    </van-list>
                </van-pull-refresh>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import TheTicket from './TheTicket';
import {getList} from '@/plugins/api.js';

export default {
    components: {
        TheTicket
    },
    data() {
        return {
            refreshing: false,
            loading: false,
            finished: false,
            isLoading: true, // 骨架屏
            records: [],
            pager: {
                page: 1,
                size: 10
            }
        }
    },
    computed: {
        ...mapState(['userInfo'])
    },
    watch:{
        userInfo: {
            handler(val, oldVal) {
                if(val) {
                    this.onLoad()
                }
            },
            deep: true
        }
    },
    methods: {
        async getList(params) {
            let res = await getList(params)
            return res;
        },
        async onRefresh() {
            // 清空列表数据
            this.finished = false;
            this.records = []
            // 重新加载数据
            this.pager = {
                page: 1,
                size: 10
            }
            await this.onLoad();
            this.refreshing = false;
        },
        async onLoad() {
            // 将 loading 设置为 true，表示处于加载状态
            if(this.finished) {
                return;
            }
            this.loading = true;
            let res = await this.getList({userId: this.userInfo.userId, ...this.pager})
            if(res.data.code == 0) {
                let {page, size, records} = res.data.data;
                let pager = {
                    page: page + 1,size
                }
                this.pager = pager;
                if(records.length) {
                    this.records = this.records.concat(records);
                } else {
                    this.finished = true;
                }
                this.loading = false;
                this.isLoading = false;
            }
        },
        onSuccess(data) {
            let {id} = data;
            this.records.map(item => {
                if(item.id === id) {
                    item.state = 1;
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
#tickets {
    padding-top: 30px;
    flex: 1;
    // padding: 0 10px;
    .layout {
        position: relative;
        width: 100%;
        height: 100%;
        background: @color-background;
        border-radius: 30px 30px 0 0;
        padding-top: 30px;
        .logo {
            width: 60px;
            height: 60px;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -40%);
            background: #fff;
            border-radius: 50%;
            overflow: hidden;
            > img {
                width: 70%;
                height: 70%;
            }
        }
    }
}
</style>