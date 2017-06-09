<template>
  <scroller style="background-color: #eeeeee;" bubble="true">
    <div  bubble="true">
      <div class="cell">
        <text class="title">收货人</text>
        <input class="input" type="text" style="padding-left: 50" />
      </div>
      <div class="cell">
        <text class="title">联系电话</text>
        <input class="input" type="text" style="padding-left: 20" />
      </div>
      <div class="cell">
        <text class="title">所在地区</text>
        <div style="flex:1"></div>
        <text class="select">请选择</text>
        <image src="../../img/arrow.png" class="arrow" ></image>
      </div>
      <div class="cell">
        <text class="title">街道</text>
        <div style="flex:1"></div>
        <text class="select">请选择</text>
        <image src="../../img/arrow.png" class="arrow" ></image>
      </div>
      <div class="cell" style="height: 200">
        <textarea  style="flex:1;height: 200;margin-left: 20;padding-top: 35" placeholder="请填写详细地址，不少于5个字"></textarea>

      </div>
      <div class="cell" style="margin-top: 30">
        <text class="title">设为默认</text>
        <div style="flex: 1"></div>
         <switch  style="margin-right: 35" ></switch>
      </div>
    </div>
  </scroller>

</template>

<style>
.cell
{
  height: 105;
  align-items: center;
  flex-direction: row;
  border-bottom-width: 1.5;
  border-bottom-color: #eeeeee;
  background-color: #ffffff;

}
.select
{
   color:#a5a5a5;
   margin-right: 10;
  font-size: 33;
}
.arrow
{
  width: 16;
  height:26;
  margin-right: 20;
}
.bottomLine
{
   height: 1;
  background-color: #f9f9f9;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
}
.input
{
  height: 105;
  flex: 1;
  padding-left: 10;

}
.title
 {
    margin-left: 28;
  font-size: 33;

 }

</style>

<script>
  export default {
    data: {
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: 'World'
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
      ,
      created:function(){

          var self=this;
          var globalEvent = weex.requireModule('globalEvent') ;
          globalEvent.addEventListener("onPageInit", function (e) {


              const nav = weex.requireModule('navbar');
              nav.setTitle('添加地址');
              nav.setBack(true,'black');
              nav.setBackgroundColor('#f9f9f9');
              nav.setTitleColor('#4c4c4c');
              nav.setStatusBarStyle('black');
              nav.setRightText('保存','#4c4c4c',function(res){


              });



          });
      }
  }
</script>