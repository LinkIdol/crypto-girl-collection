<template>
  <div class="">
    <div v-if="loading"
         class="loader-wrapper">
      <pulse-loader></pulse-loader>
    </div>

    <ItemList :itemIds='itemIds' />
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader';
import ItemList from '@/components/ItemList';
import CryptoGirlContract from '@/contract/CryptoGirlContract';
// import { getTotal, getItemIds } from '@/api';
// import { toReadablePrice } from '@/util';

export default {
  name: 'item-list',
  components: {
    PulseLoader,
    ItemList,
  },

  data() {
    return {
      loading: true,
      itemIds: [],
    };
  },

  computed: {},

  async created() {
    const contract = new CryptoGirlContract();
    await contract.initialize();
    const total = await contract.getTotal();
    const itemIds = await contract.getItemIds(0, total);
    this.itemIds = itemIds;
    this.loading = false;
  },

  methods: {
    // toDisplayedPrice(priceInWei) {
    //   const readable = toReadablePrice(priceInWei);
    //   return `${readable.price} ${readable.unit}`;
    // },
  },
  watch: {},
};
</script>
<style scoped>
.loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>

