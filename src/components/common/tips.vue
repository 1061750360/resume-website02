<template>
  <transition name="tipShow">
    <div class="tips">
      <div class="title">{{title}}</div>
      <div class="text" ref="text"><p>{{text}}</p></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "tips",
    props: {
      title: {
        type: String,
        default: "提示"
      },
      text: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#8CD3C8"
      }
    },
    mounted () {
      this.$refs.text.style.color = this.color
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/static/css/main";

  .tips {
    position: absolute;
    top: 50%;
    left: 50%;
    width: px2rem(360);
    height: px2rem(150);
    background: #fff;
    @include translate(-50%, -50%, 0);
    border: px2rem(1) solid black;
    border-radius: px2rem(10);
    padding: px2rem(6) px2rem(15);
    @include box-shadow(0, 0, px2rem(10), 0, black);
    z-index: 999;
    @extend %flex;
    flex-direction: column;
    .title {
      flex: 1;
      text-align: center;
      font-size: px2rem(20);
    }
    .text {
      flex: 4;
      text-align: center;
      font-size: px2rem(16);
      @include flex-center;
    }
  }
</style>
