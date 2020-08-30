<template>
    <van-skeleton title :row="3" :loading="refreshing">
        <div class="the-ticket">
            <div class="ticket-main">
                <div class="ticket-name">
                    {{data.reqMemo}}
                </div>
                <div class="ticket-money">
                    <div class="ticket-denomination">
                        <span class="span-strong">{{data.reqAmount}}元</span> <span>红包</span>
                    </div>
                    <div class="ticket-state">
                        <!-- <template v-if="data.state">
                            <span class="span-strong">可使用</span>
                        </template>
                        <template v-else> -->
                            <van-button round type="primary" size="small" @click="onClick(data)" :disabled="loading" :loading="loading" loading-text="正在领取...."> 领取到卡包 </van-button>
                        <!-- </template> -->
                    </div>
                </div>
                <!-- <div class="ticket-time">
                    有效期：{{data.start}}-{{data.end}}
                </div> -->
            </div>
            <!-- <div class="ticket-detail" v-if="data.reqMemo">
                <van-collapse v-model="activeNames">
                    <van-collapse-item title="使用说明" name="2">
                        {{data.reqMemo}}
                    </van-collapse-item>
                </van-collapse>
            </div> -->
        </div>
    </van-skeleton>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default() {
                return {
                }
            }
        },
        refreshing: Boolean
    },
    data() {
        return {
            activeNames: [],
            loading: false
        }
    },
    methods: {
        onClick() {
            // window.open(`https://render.alipay.com/p/s/mygrace/ndetail.html?__webview_options__=sms%3DYES%26pd%3DNO&type=VOUCHER&id=${this.data.voucherId}`)
            window.open(`https://render.alipay.com/p/s/mygrace/ndetail.html?__webview_options__=sms%3DYES%26pd%3DNO&type=VOUCHER&id=${this.data.respVoucherId}`)
        }
    }
}
</script>

<style lang="less" scoped>
.the-ticket {
    margin: 20px 20px;
    background: #fff;
    >.ticket-main {
        padding: 20px;
        >.ticket-name {
            color: #999;
            margin-bottom: 10px;
            font-size: @font-size-mini;
        }
        >.ticket-money {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items:flex-end;
            .ticket-denomination {
                > span {
                    font-size: @font-size-xd;
                    color: #333;
                    font-weight: bold;
                    vertical-align: middle;
                }
                // 强调样式
                span.span-strong {
                    color: @color-money;
                }
            }
        }
        >.ticket-time {
            font-size: @font-size-mini;
            color: #999;
            margin-top: 10px;
        }
        // 强调样式
        span.span-strong {
            color: @color-money;
        }
    }
}
</style>