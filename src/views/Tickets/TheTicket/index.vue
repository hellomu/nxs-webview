<template>
    <div class="the-ticket">
        <div class="ticket-main">
            <div class="ticket-name">
                {{data.name}}
            </div>
            <div class="ticket-money">
                <div class="ticket-denomination">
                    <span class="span-strong">{{data.denomination}}元</span> <span>红包</span>
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
            <div class="ticket-time">
                有效期：{{data.start}}-{{data.end}}
            </div>
        </div>
        <div class="ticket-detail" v-if="data.detail">
            <van-collapse v-model="activeNames">
                <van-collapse-item title="使用说明" name="2">
                    {{data.detail}}
                </van-collapse-item>
            </van-collapse>
        </div>
    </div>
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
        }
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
            window.open(`https://render.alipay.com/p/s/i/?scheme=alipays%3A%2F%2Fplatformapi%2Fstartapp%3FappId%3D20000067%26url%3Dhttps%253A%252F%252Frender.alipay.com%252Fp%252Fs%252Fmygrace%252Fndetail.html%253F__webview_options__%253Dsms%25253DYES%252526pd%25253DNO%2526type%253DVOUCHER%2526id%253D${this.data.voucherId}`)
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