<template>
  <transition name="fade">
    <div class="loading" ref="loading" v-if="showFlag">
      <p class="loading-text" data-text="LOADING...">LOADING...</p>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "Loading",
    data () {
      return {
        showFlag: true
      }
    },
    mounted () {
      const imgs = document.querySelectorAll("img") // 获取所有图片

      let num = 0
      const sum = imgs.length
      imgs.forEach((item) => { // 遍历图片
        const img = new Image()

        // 监听图片加载完成事件
        img.onload = () => {
          num++
          // 将percent控制进度条的加载
          const percent = (num / sum).toFixed(2) * 100
          this.$refs.loading.style.setProperty("--width", `${percent}%`)
          // 当进度加载完毕，loading页面离场
          if (num >= sum) {
            setTimeout(() => {
              this.showFlag = false
            }, 500)
          }
        }
        img.src = item.getAttribute("src")
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/static/css/main";

  .loading {
    --width: 0; // css变量，用js操作伪元素的宽度控制进度条加载的动画效果
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    @include flex-center;
    z-index: 999;
    .loading-text {
      position: relative;
      font-size: px2rem(100);
      letter-spacing: px2rem(10);
      padding: px2rem(10) 0;
      font-weight: bold;
      border-bottom: px2rem(8) solid #fff;
      color: #fff;
      &::before {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: var(--width);
        color: #03a9f4;
        font-size: px2rem(100);
        letter-spacing: px2rem(10);
        padding: px2rem(10) 0;
        font-weight: bold;
        overflow: hidden;
        border-bottom: px2rem(8) solid #03a9f4;
        @include transition;
      }
    }
  }
</style>
