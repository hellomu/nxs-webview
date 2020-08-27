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
                    <template v-if="data.state">
                        <span class="span-strong">可使用</span>
                    </template>
                    <template v-else>
                        <van-button round type="primary" size="small">现 在 就 抢</van-button>
                    </template>
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
            align-items: center;
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