<template>
    <div id="tickets">
        <div class="layout">
            <div class="logo">
                <img class="common-position-h-v-mid" src="../../assets/images/logo-square.png" alt="">
            </div>
            <div class="list">
                <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                    >
                        <TheTicket v-for="item in records" :key="item.id" :data="item" @onSuccess="onSuccess"></TheTicket>
                    </van-list>
                </van-pull-refresh>
            </div>
        </div>
    </div>
</template>

<script>
import TheTicket from './TheTicket';

const records = [
                {
                    id: 0,
                    name: '通用红包',
                    denomination: '200',
                    state: 1,
                    start: '2018.06.10 00:00',
                    end: '2020.08.12 23:00',
                    detail: '1.少时诵诗书所所所所所所所所所所所所所所所；2.哒哒哒哒哒哒多多多多'
                },
                {
                    id: 1,
                    name: '通用红包',
                    denomination: '400',
                    state: 0,
                    start: '2018.06.10 00:00',
                    end: '2020.08.12 23:00',
                    detail: ''
                }
            ]

export default {
    components: {
        TheTicket
    },
    data() {
        return {
            refreshing: false,
            loading: false,
            finished: true,
            records,
        }
    },
    methods: {
        onRefresh() {
            // 清空列表数据
            this.finished = false;
            this.records = []
            // 重新加载数据
            this.onLoad();
        },
        onLoad() {
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.finished = false;
            setTimeout(() => {
                this.records = records;
                this.refreshing = false;
                this.loading = false;
                this.finished = true;
            }, 500)
            
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
    flex: 1;
    // padding: 0 10px;
    .layout {
        position: relative;
        width: 100%;
        height: 100%;
        background: @color-background;
        border-radius: 30px 30px 0 0;
        padding-top: 40px;
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