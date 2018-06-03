<template>
<div class="coingirl" >

<div class="card" >
    <img src="../assets/aaaaa.png">
    <div class="card-name">
        <div class="card-name1">
        <b>比特不(BCT)</b><b style="margin-left: 10%">实时币价{{price}}</b>
        </div>
    </div>
</div>
<div class="card-profile">
    <div>
        <img src="../assets/zzzzz.png">
    </div>

<div class="aaa">
     <div class="profile">{{create}}</div>
        <div class="profile1">{{name}}</div>
</div>
<div class="aaa">
     <div class="profile">{{Birthday}}</div>
        <div class="profile1">{{day}}</div>
</div>
<div class="aaa">
     <div class="profile">{{algorithm}}</div>
        <div class="profile1">{{algorithm1}}</div>
</div>
<div class="aaa">
     <div class="profile">{{Price1}}</div>
        <div class="profile1">{{Price2}}</div>
</div>
<div class="aaa  profile3">
     <div class="profile">{{experience}}</div>
        <div class="profile1">{{experience1}}</div>
</div>
</div>
</div>
</template>



<script>
export default {
    name: 'CoinGirl', 
   data(){
       return{
    price:"0.01",
    create:'创造者',
    name:'中本聪',
    Birthday:'诞生日',
    day:'2009年01月03日',
    algorithm:'共识算法',
    algorithm1:'工作量证明 | Proof-of-Work（POW）',
    Price1:'最高价格',
    Price2:'1.96万美元',
    experience:'诞生经历',
    experience1:'一位神秘人（ID：中本聪）在“加密朋克论坛”发布了自己的加密货币设想。这种加密货币需要在区块链上一种叫做“挖矿”的行为，每次新的区块被挖出来，都会奖励矿工加密货2009年1月3日，中本聪挖掘出了第一个区块的同时，最初的50枚比特币就这样诞生了！一个新的时代开启了'

       }
   }

}
</script>
<style scoped>
*{
    list-style: none;
   
}
.coingirl{
   width: 1500px; 
    margin: 0px auto;
}
.card{
    width: 44%;
   float: left;
   background-repeat: no-repeat;
   background-position: center;
   border: 2px solid #cb8e20;
   border-radius: 8px
}
.card-name{
    height: 60px;
    background-color:#ebd4b0; 
    color: #d48e18;
    font-size: 25px;
}
.card-name1{
    height: 30px;
    padding-top: 17px;
}
.card-profile{
    width: 55%;
    height: 80%;
    float: left;
}
.aaa{
    width: 100%;
    margin: 10px 10px 0px 10px;
    height: 50px;
    font-size: 25px;
    margin-bottom: 15px;
    display:flex;
    justify-content: center;
        }
.profile{
    width: 30%;
    border: 2px solid #91cbe9;
    border-radius: 8px;
    background: #91cbe9;
    float: left;
}
.profile1{
    width: 68%;
    margin-left: 10px;
    text-align: start;
}
img{
    width: 100%;
}
@media screen and (max-width: 1000px) {
    .coingirl{
    width: 100%;
    }
    .card-name{ 
     font-size: 20px;
}
    .aaa{
    height: 45px;
    line-height: 45px;
    font-size: 20px;
    }
  
}
@media screen and (max-width: 770px) {
   
    .card-name{ 
    font-size: 16px;
}
    .aaa{
    font-size: 16px;
    }
.profile3{
    display: none;
}
 } 
 @media screen and (max-width: 420px) {
   .card-profile{
    width: 100%;
    float: none
}
.card{
    width: 100%;
   float: none;
}
 } 
</style>

