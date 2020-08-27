<template>
    <header>
       <van-nav-bar
            left-text="返回"
            left-arrow
            @click-left="$router.back()"
        />
    </header>
</template>

<style lang="less" scoped>
header {
    .van-nav-bar {
        background: transparent;
        /deep/  .van-icon {
            color: #fff;
        }
        /deep/ .van-nav-bar__text {
            color:  #fff;
        }
    }
    /deep/ [class*=van-hairline]::after {
        border: none;
    }
}
</style>