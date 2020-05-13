<template>
    <div class="coingirl" >
        
      <div class="cardcontainer">
          <CardItem v-bind:item='item'></CardItem>
      </div>

      <div class="card-profile">
        <div>
            <img alt="" v-bind:src="item.detailimg">
        </div>

        <div class="text-pro">
          <div class="tabname">
             <div class="profile">创造者</div>
             <div class="profile1">{{ item.creater }}</div>
          </div>
          <div class="tabname">
              <div class="profile">诞生日</div>
              <div class="profile1">{{ item.birthday }}</div>
          </div>
          <div class="tabname">
             <div class="profile">共识算法</div>
             <div class="profile1">{{ item.consensus }}</div>
          </div>
          <div class="tabname"> 
             <div class="profile">最高价格</div>
             <div class="profile1">{{ item.maxprice }}</div>
          </div>
          <div class="tabname  profile3">
             <div class="profile">诞生经历</div>
             <div class="profile1">{{ item.story }}</div>
          </div>
        </div>
      </div>

      <div style="clear:both;"></div> 
    </div>
</template>

<script>
import CardItem from '@/components/CardItem';

export default {
  name: 'CoinGirl',
  data: () => ({
    item: {}
  }),
  components: {
    CardItem
  },
  mounted() {
    this.$http.get('static/girl_cards.json').then((response) => {
      this.item = response.body[this.$route.params.name];
    });
  }
};
</script>

<style scoped>
/**{
    list-style: none;
}*/
.coingirl {
    margin: 20px;
    display: flex;
}
.cardcontainer {
    padding: 20px;
    flex: 0.8;
}
.card {
    background-repeat: no-repeat;
    background-position: center;
    border: 2px solid #cb8e20;
    border-radius: 8px;
}
.card-name {
    height: 90px;
    background-color:#ebd4b0; 
    color: #d48e18;
    font-size: 20px;
}
.card-name1 {
    height: 30px;
    padding-top: 17px;
    text-align: center;
}
.card-profile {
    padding: 20px;
    flex: 1.2;
}
.tabname {
    width: 100%;
    margin: 10px 10px 0px 10px;
    height: 50px;
    font-size: 20px;
    margin-bottom: 15px;
    display:flex;
    justify-content: center;
}
.profile {
    width: 30%;
    border: 2px solid #91cbe9;
    border-radius: 8px;
    background: #91cbe9;
    float: left;
    text-align: center;
    height: 50px;
    line-height: 50px;
}
.profile1 {
    width: 68%;
    margin-left: 10px;
    margin-top: 10px;
    text-align: start;
    height: auto;
}
.profile3 {
    height: auto;
}
img {
    width: 100%;
}

@media screen and (max-width: 800px) {
    .coingirl{
        width: 100%;
        margin: 0;
        display: inline;
    }
    .cardcontainer {
        padding: 20px;
        width: 100%;
    }
    .card-profile{
        padding: 20px;
        height: 80%;
    }
} 

</style>

