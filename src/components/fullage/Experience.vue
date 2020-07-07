<template>
  <div class="container">
    <h1 class="page-title">我的经历</h1>
    <img class="bg7" src="../../assets/static/images/bg7.png" alt="">
    <div class="my-experience">
      <div class="content">
        <div class="circle">
          <span>2020</span>
          <span>YEAR</span>
        </div>
        <div class="date">
          <div class="item">
            <span>2019</span>
            <span>7 月<i class="circle-dot"></i></span>
          </div>
          <div class="item">
            <span>2019</span>
            <span>6 月<i class="circle-dot"></i></span>
          </div>
        </div>
        <div class="experience">
          <div class="item">
            <div class="title">
              湖北圆通速递有限公司
            </div>
            <div class="summary">
              &lt;IT部/IT运维&gt;
            </div>
            <div class="info">
              毕业后在湖北圆通速递有限公司一直从事IT运维工作。
              相较于运维工作，我更喜欢敲代码，并根据主管提出的业务需求开发了操作快件信息的桌面软件以及监控快件信息的钉钉机器人。
            </div>
          </div>
          <div class="item">
            <div class="title">
              长江大学
            </div>
            <div class="summary">
              &lt;本科&gt;
            </div>
            <div class="info">
              英语四级
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Experience"
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/static/css/main";

  .container{
    position: relative;
    width: 100%;
    height: 100%;
    .page-title {
      position: absolute;
      right: px2rem(200);
      top: px2rem(75);
      font-size: px2rem(34);
      color: #FFE3B1;
      letter-spacing: px2rem(4);
      writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
      writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
      z-index: 999;
    }
    .bg7 {
      position: absolute;
      right: 0;
      bottom: 0;
    }
    .my-experience{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .content{
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        width: px2rem(820);
        min-height: px2rem(468);
        .circle{
          position: absolute;
          left: px2rem(107);
          top: 0;
          width: px2rem(93);
          height: px2rem(93);
          border-radius: 50%;
          font-size: px2rem(30);
          font-weight: bold;
          text-align: center;
          color: #FFD200;
          border: px2rem(5) solid #d7d8d8;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          -webkit-transition: all 0.3s ease;
          -moz-transition: all 0.3s ease;
          -ms-transition: all 0.3s ease;
          -o-transition: all 0.3s ease;
          transition: all 0.3s ease;
          span:nth-child(2){
            font-size: px2rem(15);
          }
          &:hover{
            -webkit-transform: rotateZ(360deg);
            -moz-transform: rotateZ(360deg);
            -ms-transform: rotateZ(360deg);
            -o-transform: rotateZ(360deg);
            transform: rotateZ(360deg);
            background: #FFD200;
            color: #fff;
          }
        }
        .date{
          width: px2rem(158);
          height: px2rem(365);
          position: absolute;
          top: px2rem(103);
          left: 0;
          border-right: px2rem(8) solid #d7d8d8;
          .item{
            margin-top: px2rem(50);
            width: 100%;
            height: px2rem(100);
            display: flex;
            justify-content: space-around;
            align-items: center;
            span{
              width: 50%;
              color: #FFD200;
            }
            span:nth-child(1){
              font-size: px2rem(12);
              text-align: center;
            }
            span:nth-child(2){
              position: relative;
              font-size: px2rem(18);
              text-align: left;
              .circle-dot{
                display: block;
                position: absolute;
                right: px2rem(-14);
                top: 0;
                width: px2rem(20);
                height: px2rem(20);
                border-radius: 50%;
                border: px2rem(2) solid #FFD200;
                background: #fff;
                -webkit-transition: all 0.1s ease;
                -moz-transition: all 0.1s ease;
                -ms-transition: all 0.1s ease;
                -o-transition: all 0.1s ease;
                transition: all 0.1s ease;
                &:hover{
                  right: px2rem(-17);
                  top: px2rem(-2);
                  width: px2rem(24);
                  height: px2rem(24);
                  border-width: px2rem(8);
                }
              }
              &::before{
                content: '';
                position: absolute;
                right: 0;
                top: 50%;
                -webkit-transform: translateY(-50%);
                -moz-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                -o-transform: translateY(-50%);
                transform: translateY(-50%);
                width: 30%;
                height: px2rem(1);
                background: #FFD200;
              }
            }
          }
        }
        .experience{
          position: absolute;
          right: 0;
          bottom: px2rem(40);
          width: px2rem(630);
          height: px2rem(320);
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          cursor: default;
          .item{
            .title{
              font-size: px2rem(24);
              color: #fff;
              -webkit-transition: all 0.3s ease;
              -moz-transition: all 0.3s ease;
              -ms-transition: all 0.3s ease;
              -o-transition: all 0.3s ease;
              transition: all 0.3s ease;
              &:hover{
                color: #FFD200;
              }
            }
            .summary{
              color: #FFD200;
              font-size: px2rem(14);
              margin: px2rem(8) 0;
            }
            .info{
              color: #fff;
              font-size: px2rem(14);
              line-height: px2rem(20);
            }
          }

        }
      }
    }
  }
</style>
