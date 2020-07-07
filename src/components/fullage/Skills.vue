<template>
  <div class="skills">
    <div class="title-wrapper">
      <div class="title">技能掌握</div>
      <img src="../../assets/static/images/bg2.png" class="bg2">
    </div>
    <div class="skills-container">
      <div class="skills-list">
        <div class="item-wrapper">
          <div class="skills-item">
            <img class="skills-svg" src="../../assets/static/images/web.svg" alt="">
            <ul>
              <li class="skills-desc">熟练使用HTML和CSS开发兼容主流浏览器的页面，并能实现各种动画及交互效果</li>
              <li class="skills-desc">熟悉响应式布局、弹性盒布局，熟悉基于HTML5的WebApp开发以及移动端适配</li>
              <li class="skills-desc">能够使用Scss、Less书写样式表，并抽离出可复用代码</li>
            </ul>
          </div>
          <div class="skills-item">
            <img class="skills-svg" src="../../assets/static/images/JS.svg" alt="">
            <ul>
              <li class="skills-desc">熟悉JavaScript，对原型、原型链、面向对象、闭包有一定的了解</li>
              <li class="skills-desc">熟悉Vue框架及相关技术栈，并具有良好的组件封装能力</li>
              <li class="skills-desc">掌握JQuery、Bootstrap等框架，了解Typescript(学习中)</li>
            </ul>
          </div>
        </div>
        <div class="item-wrapper">
          <div class="skills-item">
            <img class="skills-svg" src="../../assets/static/images/others.svg" alt="">
            <ul>
              <li class="skills-desc">熟悉常见的前端工具，如Webpack、Babel、ESLint等</li>
              <li class="skills-desc">具备PC端、移动端适配和调优经验</li>
            </ul>
          </div>
          <div class="skills-item">
            <img class="skills-svg" src="../../assets/static/images/python.svg" alt="">
            <ul>
              <li class="skills-desc">掌握Python语言，能使用Django、Flask框架进行后端开发</li>
              <li class="skills-desc">了解RESTful风格开发</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Skills"
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/static/css/main";

  .skills {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .title-wrapper {
      position: absolute;
      bottom: px2rem(-2);
      left: 0;
      width: px2rem(958);
      height: px2rem(914);
      .title {
        position: absolute;
        top: px2rem(85);
        left: px2rem(300);
        writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
        writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
        letter-spacing: $letter-spacing;
        font-size: $font-size-title;
        color: $title-color;
      }
      .bg2 {
        width: px2rem(958);
        height: px2rem(914);
      }
    }
    .skills-container {
      font-size: px2rem(16);
      .skills-list {
        position: absolute;
        top: 50%;
        right: px2rem(150);
        @include translate(0, -50%, 0);
        .item-wrapper {
          display: flex;
          .skills-item {
            flex: 1;
            height: px2rem(352);
            width: px2rem(400);
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: px2rem(20);
            padding: px2rem(20) px2rem(20) px2rem(20) px2rem(40);
            border-radius: px2rem(20);
            background: #fff;
            overflow: hidden;
            .skills-svg {
              width: px2rem(130);
              height: px2rem(130);
              margin-bottom: px2rem(20);
            }
            ul {
              list-style: square;
              .skills-desc {
                font-size: px2rem(16);
                margin-bottom: px2rem(10);
              }
            }
          }
        }
      }
    }
  }
</style>
