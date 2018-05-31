<template>
  <div :style="navItemFontSize" @mouseover="overShow" @mouseout="outHide">
  <!-- <div @mouseover="onMouseOver()"> -->
  	<img class="cardItemImg" alt="" :src="item.img"/>
	<div :style="{ backgroundColor: item.color, height: '50px' }">
		<span>
	        <a :style="{ lineHeight: '50px', color: item.textcolor, paddingLeft: '20px' }">{{ item.name }}{{ item.code }}</a>
	    </span>
	    <span class="priceSpan">
	        <a :style="{ lineHeight: '50px', color: item.textcolor }">= =USD</a>
	    </span>
	</div>
  </div>
</template>

<script>
export default {
  name: 'card-item',
  props: ['item'],
  data() {
    return {
      isMouseOver: false
    };
  },
  computed: {
    navItemFontSize() {
    	if(this.isMouseOver) {
    		var boderstr = this.item.color+' 3px solid'
    		return {
    			'border':boderstr, 'borderRadius':'5px'
    		}
    	}
    }
  },
  methods: {
  	overShow() {
  		this.isMouseOver = !this.isMouseOver;
  	},
  	outHide() {
  		this.isMouseOver = !this.isMouseOver;
  	}
  }
};
</script>
<style scoped>
.cardItemImg{
	vertical-align:bottom;
	cursor: pointer;
}

@media (max-width: 800px) {
	.cardItemImg{
		width: 100%;
	}
}
</style>
