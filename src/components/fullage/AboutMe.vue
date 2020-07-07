<template>
  <div class="about-me" ref="aboutMe">
    <div class="title">基本资料</div>
    <img class="planetIMG" src="../../assets/static/images/planet.png" alt="">
    <div class="container">
      <div class="tv-wrapper">
        <div class="screen">
          <div class="top-screen" :class="{'closed': TV_status}"></div>
          <div class="bottom-screen" :class="{'closed': TV_status}"></div>
          <div class="person-info" :id="currentScreen !== 1 ? 'move': ''">
            <div class="headIMG-wrapper">
              <div class="headIMG-mask"></div>
              <img class="headIMG" src="../../assets/static/images/headIMG.png" alt="">
            </div>
            <span class="name">王越/朽木自雕</span>
            <div class="icon-wrapper">
              <img class="icon" src="../../assets/static/images/xuexiao.png" alt="">
              <img class="icon" src="../../assets/static/images/dangao.png" alt="">
              <img class="icon" src="../../assets/static/images/quyushuoshi.png" alt="">
              <img class="icon" src="../../assets/static/images/HTML.png" alt="">
            </div>
            <p class="text">长江大学</p>
            <p class="text">25岁</p>
            <p class="text">湖北/武汉</p>
            <p class="text">前端攻城狮</p>
          </div>
          <!--自我介绍-->
          <transition name="upIn">
            <div class="introduce" v-show="currentScreen === 2">
              <div class="about-me-title">自我介绍</div>
              <div class="desc">您好，我叫王越，2019年毕业于长江大学计算机系物联网工程专业，并在毕业后加入湖北圆通速递有限公司，任职IT运维。</div>
              <div class="desc">任职期间兢兢业业，利用所学知识开发了多个业务工具，解决了之前人工操作效率低下的问题。并将部分工作交由程序执行，接入钉钉机器人监控公司生产情况。</div>
              <div class="desc">由于对敲代码的渴望以及更高的技术追求，于是开始自学前端技术。</div>
            </div>
          </transition>
          <!--发送邮件-->
          <div class="send-email-wrapper" v-show="currentScreen === 3" ref="sendEmail" :class="{'show': currentScreen === 3}">
            <p class="send-email-wrapper-title">给我发送邮件</p>
            <div class="content-box">
              <div class="input-box"><input class="input" type="text" :class="{'info': showInfoFlag.flag1}" placeholder="您的姓名" v-model="name" @focus="clearText(1)"/></div>
            </div>
            <div class="content-box">
              <div class="input-box"><input class="input" type="email" :class="{'info': showInfoFlag.flag2}" placeholder="您的邮箱" v-model="email" @focus="clearText(2)"/></div>
            </div>
            <div class="content-box">
              <div class="input-box"><textarea class="textarea" :class="{'info': showInfoFlag.flag3}" rows="4" placeholder="请输入邮件内容" v-model="emailText" @focus="clearText(3)"></textarea></div>
            </div>
            <div class="content-box">
              <button class="send-btn" @click="send" ref="btnSend">发送</button>
            </div>
          </div>
        </div>
        <!--电视喇叭-->
        <ul class="tv-sound">
          <li class="dot-wrapper">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </li>
          <li class="dot-wrapper">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </li>
          <li class="dot-wrapper">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </li>
          <li class="dot-wrapper">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </li>
        </ul>
        <!--电视按钮上面的提示-->
        <transition name="tipShow">
          <div class="tips" v-show="tipsShowFlag">点击下方电视开关，再按遥控噢！</div>
        </transition>
        <button class="switch-btn" @click="switchTV" :class="{'closed': !TV_status}">
          <i class="iconfont icon-guanji"></i>
        </button>
      </div>
      <div class="remote-control">
        <button class="switch-btn" @click="switchTV"></button>
        <div class="remote-control-btn-wrapper first">
          <button class="remote-control-btn" :class="{'actived': currentScreen === 1}" @click="changePage(1)">个人资料</button>
          <button class="remote-control-btn" :class="{'actived': currentScreen === 2}" @click="changePage(2)">自我介绍</button>
        </div>
        <div class="remote-control-btn-wrapper">
          <button class="remote-control-btn" :class="{'actived': currentScreen === 3}" @click="changePage(3)">发送邮件</button>
        </div>
        <div class="remote-control-btn-wrapper">
          <p class="text">★快来关注我★</p>
        </div>
        <div class="remote-control-btn-wrapper">
          <img class="wechat-qrcode" src="../../assets/static/images/wechat_qrcode.png" alt="">
        </div>
        <div class="remote-control-btn-wrapper">
          <p class="text">★快来关注我★</p>
        </div>
      </div>
    </div>
    <tips :text="infoText" v-show="infoShowFlag"></tips>
  </div>
</template>

<script>
  import tips from "../common/tips"
  import { mapGetters, mapActions } from 'vuex'

  // 背景的五颜六色的方块 类
  class Star {
    constructor () {
      this.side_length = this.getRandomInt()
      this.color = this.getRandomColor()
      this.position = this.getRandomPosition()
    }

    // 返回一个在 3到8 之间的整数，包含自身
    getRandomInt () {
      const result = Math.floor(Math.random() * 10)
      if (result <= 8 && result >= 3) {
        return result
      } else {
        return this.getRandomInt()
      }
    }

    // 返回一个随机颜色
    getRandomColor () {
      const r = Math.floor(Math.random() * 255)
      const g = Math.floor(Math.random() * 255)
      const b = Math.floor(Math.random() * 255)
      return `rgb(${r}, ${g}, ${b})`
    }

    // 返回一个随机的位置
    getRandomPosition () {
      const height = window.innerHeight
      const width = window.innerWidth
      const x = Math.floor(Math.random() * width)
      const y = Math.floor(Math.random() * height)
      return { x, y }
    }

    // 将星星绘制在屏幕上
    draw (screen) {
      const div = document.createElement('div')
      div.style.backgroundColor = this.color
      div.style.width = div.style.height = this.side_length + 'px'
      div.style.position = 'absolute'
      div.style.top = this.position.y + 'px'
      div.style.left = this.position.x + 'px'
      screen.appendChild(div)
    }
  }

  export default {
    name: "AboutMe",
    data () {
      return {
        starList: [], // 装星星的列表
        tipsShowFlag: false, // 电视机按钮上的提示框
        name: "",
        email: "",
        emailText: "",
        sendFlag: false, // 判断是否可以发送邮件
        showInfoFlag: {
          flag1: false,
          flag2: false,
          flag3: false
        },
        infoShowFlag: false, // tips组件是否显示
        infoText: ""
      }
    },
    computed: {
      ...mapGetters(["TV_status", "currentScreen"])
    },
    methods: {
      ...mapActions(["setTvStatus", "setCurrentScreen"]),
      clearText (number) {
        switch (number) {
          case 1:
            if (this.showInfoFlag.flag1) {
              this.showInfoFlag.flag1 = false
              this.name = ""
            }
            break
          case 2:
            if (this.showInfoFlag.flag2) {
              this.showInfoFlag.flag2 = false
              this.email = ""
            }
            break
          case 3:
            if (this.showInfoFlag.flag3) {
              this.showInfoFlag.flag3 = false
              this.emailText = ""
            }
            break
        }
      },
      send () {
        this.$refs.btnSend.setAttribute("disabled", "disabled")
        // 校验表单
        this.validateFrom()
        // 发送邮件
        if (!this.showInfoFlag.flag1 && !this.showInfoFlag.flag2 && !this.showInfoFlag.flag3) {
          const data = {
            name: this.name,
            email: this.email,
            emailText: this.emailText
          }
          this.$axios.post(
            `${process.env.VUE_APP_API}/resume/send`,
            data,
            {
              headers:
                {
                  'X-CSRFToken': this.getCookie('csrftoken')
                }
            }
          ).then((res) => {
            if (res.data === "ok") {
              this.name = this.email = this.emailText = ""
              this.infoShowFlag = true
              this.infoText = "发送邮件成功"
              setTimeout(() => {
                this.infoShowFlag = false
              }, 1500)
            }
          }).catch(() => {
            this.infoShowFlag = true
            this.infoText = "发送邮件失败"
            setTimeout(() => {
              this.infoShowFlag = false
            }, 1500)
          })
        }
        setTimeout(() => {
          this.$refs.btnSend.removeAttribute("disabled")
        }, 1500)
      },
      getCookie (cookie_name) {
        let value
        const allcookies = document.cookie
        // 索引长度，开始索引的位置
        let cookie_pos = allcookies.indexOf(cookie_name)

        // 如果找到了索引，就代表cookie存在,否则不存在
        if (cookie_pos !== -1) {
          // 把cookie_pos放在值的开始，只要给值加1即可
          // 计算取cookie值得开始索引，加的1为“=”
          cookie_pos = cookie_pos + cookie_name.length + 1
          // 计算取cookie值得结束索引
          let cookie_end = allcookies.indexOf(';', cookie_pos)

          if (cookie_end === -1) {
            cookie_end = allcookies.length
          }
          // 得到想要的cookie的值
          value = unescape(allcookies.substring(cookie_pos, cookie_end))
        }
        return value
      },
      validateFrom () {
        if (!this.name.trim()) {
          this.showInfoFlag.flag1 = true
          this.name = "姓名输入错误"
        }
        const reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
        if (!reg.test(this.email.trim())) {
          this.showInfoFlag.flag2 = true
          this.email = "邮箱输入错误"
        }
        if (!this.emailText.trim()) {
          this.showInfoFlag.flag3 = true
          this.emailText = "请输入邮件内容"
        }
      },
      changePage (number) {
        // 如果电视处于关闭状态，则提示用户打开电视，在切换频道
        if (this.TV_status) {
          this.tipsShowFlag = true
          return
        }
        // 切换screen的展示内容,如果当前页面是1，点击1按钮则不进入该循环
        if (this.currentScreen !== number) {
          this.setCurrentScreen(number)
          switch (number) {
            case 1:
              break
            case 2:
              break
            case 3:
              break
          }
        }
      },
      switchTV () {
        // 开关电视
        this.setTvStatus(!this.TV_status)
      },
      createStar (number) {
        for (let i = 0; i < number; i++) {
          this.starList.push(new Star())
        }
      },
      drawStar () {
        this.starList.forEach((item) => {
          item.draw(this.$refs.aboutMe)
        })
      }
    },
    watch: {
      TV_status (newVal) {
        if (newVal) {
        } else {
          this.tipsShowFlag = false
        }
      }
    },
    mounted () {
      this.createStar(120)
      this.drawStar()
    },
    components: {
      tips
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/static/css/main";

  /*自我介绍动画*/
  .upIn-enter-active {
    @include animation(upIn, 1.5s, 1);
  }
  @keyframes upIn {
    0% {
      opacity: 0;
      @include translate(0, px2rem(20), 0)
    }
    50% {
      opacity: 0;
      @include translate(0, px2rem(20), 0)
    }
    100% {
      opacity: 1;
      @include translate(0, 0, 0)
    }
  }

  .about-me {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    @include flex-center;
    .title {
      position: absolute;
      top: px2rem(70);
      color: $title-color;
      font-size: $font-size-title;
      letter-spacing: $letter-spacing;
      z-index: 99;
    }
    .planetIMG {
      position: absolute;
      top: px2rem(-0);
      left: px2rem(-0);
      width: px2rem(457.5);
      height: px2rem(346.5);
    }
    .container {
      position: absolute;
      width: px2rem(1200);
      height: px2rem(550);
      z-index: 99;
      .tv-wrapper {
        position: relative;
        width: px2rem(920);
        height: px2rem(550);
        background: $tv-color;
        border: px2rem(14) solid #040000;
        border-radius: px2rem(30);
        .screen {
          position: relative;
          height: px2rem(452);
          width: px2rem(732);
          background: #fff;
          border: px2rem(14) solid #040000;
          border-radius: px2rem(20);
          margin: px2rem(20) px2rem(10) 0 px2rem(20);
          .top-screen {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 0;
            background: #333;
            @include transition;
            z-index: 99;
          }
          .bottom-screen {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0;
            background: #333;
            @include transition;
            z-index: 99;
          }
          .closed {
            height: 51%;
          }
          .person-info {
            @include transition(0.8s);
            .headIMG-wrapper {
              position: absolute;
              top: px2rem(10);
              left: 50%;
              @include translate(-50%, 0, 0);
              width: px2rem(150);
              height: px2rem(150);
              @include transition(0.8s);
              .headIMG-mask{
                width: px2rem(127);
                height: px2rem(127);
                overflow: hidden;
                background: $tv-color;
                border-radius: 50%;
                border: px2rem(4) solid black;
                @include position-center;
                @include transition(0.8s);
              }
              .headIMG {
                width: px2rem(127);
                height: px2rem(127);
                @include position-center;
                @include transition(0.8s);
              }
            }
            .name {
              position: absolute;
              top: px2rem(160);
              left: 50%;
              @include translate(-50%, 0, 0);
              border: px2rem(2) solid black;
              background: #EC6B46;
              font-size: px2rem(18);
              padding: px2rem(2) px2rem(6);
              @include transition(0.8s);
              border-radius: px2rem(8);
            }
            .icon-wrapper {
              position: absolute;
              top: px2rem(220);
              left: 0;
              width: 100%;
              @include flex-row;
              @include transition(0.3s);
              .icon {
                width: px2rem(85);
                height: px2rem(85);
              }
            }
            .text {
              font-size: px2rem(16);
              width: px2rem(120);
              text-align: center;
              border: px2rem(2) solid black;
              @include transition(0.8s);
              border-radius: px2rem(8);
              padding: px2rem(4) 0;
            }
            p:nth-of-type(1){
              position: absolute;
              left: px2rem(25);
              bottom: px2rem(80);
            }
            p:nth-of-type(2){
              position: absolute;
              left: px2rem(200);
              bottom: px2rem(80);
            }
            p:nth-of-type(3){
              position: absolute;
              left: px2rem(380);
              bottom: px2rem(80);
            }
            p:nth-of-type(4){
              position: absolute;
              left: px2rem(555);
              bottom: px2rem(80);
            }
          }
          .introduce {
            position: absolute;
            top: px2rem(35);
            right: px2rem(30);
            width: px2rem(470);
            .about-me-title {
              text-align: center;
              font-size: px2rem(20);
              margin-bottom: px2rem(45);
              font-weight: bold;
            }
            .desc {
              font-size: px2rem(16);
              text-indent: 2em;
              margin-bottom: px2rem(10);
            }
          }
          .send-email-wrapper {
            position: absolute;
            top: px2rem(15);
            right: px2rem(50);
            width: px2rem(430);
            height: px2rem(400);
            &.show {
              @include animation(show, 1s, 1);
              @keyframes show {
                0% {
                  @include translate(0, px2rem(-25), 0);
                  opacity: 0;
                }
                50% {
                  @include translate(0, px2rem(-25), 0);
                  opacity: 0;
                }
                100% {
                  @include translate(0, 0, 0);
                  opacity: 1;
                }
              }
            }
            .send-email-wrapper-title {
              font-size: px2rem(20);
              font-weight: bold;
              text-align: center;
              margin: px2rem(20) auto;
            }
            .content-box {
              width: 100%;
              margin: px2rem(5) 0;
              @include flex-center-h;
              .input-box {
                font-size: px2rem(16);
                width: px2rem(340);
                padding: px2rem(6) px2rem(12);
                border: 1px solid black;
                border-radius: px2rem(10);
                .input {
                  width: 100%;
                  outline: none;
                  border: none;
                  background: transparent;
                }
                .info {
                    color: red;
                }
                .textarea {
                  width: 100%;
                  outline: none;
                  border: none;
                  background: transparent;
                  resize: none;
                }
              }
              .send-btn {
                width: px2rem(100);
                font-size: px2rem(16);
                padding: px2rem(6);
                outline: none;
                background: #EC6B46;
                color: #fff;
                border-radius: px2rem(8);
              }
            }
          }
        }
        .tv-sound {
          position: absolute;
          top: px2rem(100);
          right: px2rem(20);
          width: px2rem(100);
          height: px2rem(160);
          @extend %flex;
          flex-direction: column;
          justify-content: space-between;
          .dot-wrapper {
            @include flex-row;
            align-items: center;
            .dot {
              width: px2rem(20);
              height: px2rem(20);
              background: #040000;
              border-radius: 50%;
            }
          }
        }
        .tips {
          position: absolute;
          bottom: px2rem(144);
          right: px2rem(-10);
          width: px2rem(160);
          font-size: px2rem(16);
          text-align: center;
          border: px2rem(2) solid black;
          border-radius: 10px;
          padding: px2rem(8);
          background: #FAE2ED;
          z-index: 99;
        }
        .switch-btn {
          position: absolute;
          bottom: px2rem(54);
          right: px2rem(28);
          width: px2rem(82);
          height: px2rem(82);
          border: px2rem(14) solid #040000;
          border-radius: 50%;
          background: $tv-btn-color;
          outline: none;
          @include transition;
          &:hover {
            background: $tv-btn-hover-color;
          }
          &.closed {
            -webkit-box-shadow: 4px 0 10px 0 rgba(0,254,230,0.5), -4px 0 10px 0 rgba(0,254,230,0.5), 0 4px 10px 0 rgba(0,254,230,0.5), 0 -4px 10px 0 rgba(0,254,230,0.5);
            -moz-box-shadow: 4px 0 10px 0 rgba(0,254,230,0.5), -4px 0 10px 0 rgba(0,254,230,0.5), 0 4px 10px 0 rgba(0,254,230,0.5), 0 -4px 10px 0 rgba(0,254,230,0.5);
            box-shadow: 4px 0 10px 0 rgba(0,254,230,0.5), -4px 0 10px 0 rgba(0,254,230,0.5), 0 4px 10px 0 rgba(0,254,230,0.5), 0 -4px 10px 0 rgba(0,254,230,0.5);
            color: rgba(0,254,230,0.5);
          }
          .icon-guanji {
            width: px2rem(34);
            height: px2rem(34);
          }
        }
      }
      .remote-control {
        position: absolute;
        top: 0;
        right: 0;
        width: px2rem(240);
        height: px2rem(550);
        background: $tv-color;
        border: px2rem(14) solid #040000;
        border-radius: px2rem(30);
        .switch-btn {
          position: absolute;
          top: px2rem(10);
          left: px2rem(10);
          width: px2rem(50);
          height: px2rem(50);
          border: px2rem(14) solid #040000;
          border-radius: 50%;
          background: $tv-btn-color;
          outline: none;
          &:hover {
            background: $tv-btn-hover-color;
          }
        }
        .remote-control-btn-wrapper {
          width: px2rem(180);
          height: px2rem(70);
          @extend %flex;
          justify-content: space-around;
          align-items: center;
          margin: 0 px2rem(14);
          &.first {
            margin-top: px2rem(90);
          }
          .remote-control-btn {
            background: #fff;
            flex: 1;
            font-size: px2rem(14);
            border: px2rem(2) solid black;
            line-height: px2rem(34);
            margin: 0 px2rem(6);
            border-radius: px2rem(6);
            outline: none;
            &:hover {
              background: #EDC6D8;
            }
          }
          .text {
            flex: 1;
            margin: 0 px2rem(6) px2rem(60);
            line-height: px2rem(34);
            border-radius: px2rem(6);
            font-size: px2rem(16);
            text-align: center;
            border: px2rem(2) solid black;
            background: transparent;
            color: #000;
          }
          .wechat-qrcode {
            width: px2rem(120);
            height: px2rem(120);
            @include transition;
            &:hover {
              @include box-shadow(0,0,10px,0,black);
              @include scale(1.5);
            }
          }
        }
      }
    }
  }
  /*当前展示页面对应的按钮，设置激活背景颜色样式*/
  .actived {
    background: $tv-btn-hover-color!important;
  }

  /*设置screen页面切换时的动画效果*/
  #move {
    .headIMG-wrapper {
      @include translate(px2rem(-314), px2rem(20), 0);
      width: px2rem(120);
      height: px2rem(120);
      .headIMG-mask{
        width: px2rem(102);
        height: px2rem(102);
      }
      .headIMG {
        width: px2rem(102);
        height: px2rem(102);
      }
    }
    .name {
      @include translate(px2rem(-320), 0, 0);
    }
    .icon-wrapper {
      opacity: 0;
    }
    p:nth-of-type(1){
      position: absolute;
      left: px2rem(40);
      bottom: px2rem(180);
    }
    p:nth-of-type(2){
      position: absolute;
      left: px2rem(40);
      bottom: px2rem(140);
    }
    p:nth-of-type(3){
      position: absolute;
      left: px2rem(40);
      bottom: px2rem(100);
    }
    p:nth-of-type(4){
      position: absolute;
      left: px2rem(40);
      bottom: px2rem(60);
    }
  }
</style>
