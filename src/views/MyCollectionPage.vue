<template>
<div>

	<section>
		<div class="userContainer">
			<div class="usericon">
				<img class="iconimg" alt="" width="100" :src="getAvatar"/>
			</div>
			<div class="usercontent">
				<p class="useraddress">{{ myaddress }}</p>
			</div>
		</div>
    </section>

	<section>
      <div class="columns is-multiline is-mobile section2div">
        <div class="column is-4-desktop is-4-tablet is-12-mobile cardItem" v-for="item in itemIds" :key="item.id"
        @click="gotoCoinProfile(item.id)">
        	<CardItem :item='item' :hasMouseOver='true'></CardItem>
        </div>
      </div>
    </section>

</div>
</template>

<script>
import Dravatar from 'dravatar';
import CardItem from '@/components/CardItem';
import web3 from '@/web3';
import {
  getMe,
  getMyCards
} from '@/api';

export default {
  name: 'MyCollectionPage',
  data: () => ({
    itemIds: [],
    myaddress: "",
    types: []
  }),
  components: {
    CardItem
  },
  asyncComputed: {
    async getAvatar() {
      const uri = await Dravatar(this.myaddress);
      return uri;
    }
  },
  async created() {
    const my = await getMe();
    this.myaddress = my.address;

    const tokens = await getMyCards();
    this.types = Array.from(new Set(tokens));
    // console.log(this.types);

    this.$http.get('static/girl_cards.json').then((response) => {
    	console.log(this.types)
		const allCards = response.body;
	    for (var index in this.types) {
		  this.itemIds.push(allCards[this.types[index]]);
		}
		// console.log(this.itemIds)
    });
  },
  methods: {
    gotoCoinProfile(code) {
      this.$router.push({ path: `/coin/${code}` })
    }
  }
};
</script>

<style scoped>
/*
  section 1
*/
.userContainer {
	background-image: url("../assets/collection_bk.png");
	background-size: 100%;
	background-repeat: no-repeat;
	background-color: #fff;
	width: 100%;
	/*padding-top: 43.5%;*/
	padding-top: 28%;
	position: relative;
	text-align: center;
}
.usericon {
  position: absolute;
  top: 0;
  left: 0;
	width: 100%;
	padding-top: 60px;
}
.iconimg{
	border-radius: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.usercontent {
	position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
	padding-top: 180px;
}
.useraddress {
	color: #08567e;
}

/*
  section 2
*/
.section2div {
	padding-right: 50px;
	padding-left: 50px;
	padding-top: 30px;
	padding-bottom: 50px;
}
/*.cardItemImg{
	vertical-align:bottom;
	cursor: pointer;
}
.priceSpan {
	float:right;
	padding-right: 20px;
}*/

@media (max-width: 800px) {
	.userContainer {
		background-size: cover;
		padding-top: 60%;
	}
	.section2div {
		padding-top: 100px;
	}
	/*.cardItemImg{
		width: 100%;
	}*/
}
</style>

