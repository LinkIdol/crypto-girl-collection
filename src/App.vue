<template>
  <div id="app">
    <Header />

    <div>
      <router-view :key="key"></router-view>
    </div>

    <Footer />
  </div>
</template>

<script>
import Cookie from 'js-cookie';
import web3 from '@/web3';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  async created() {
    const firstReferrer = Cookie.get('referrer');
    const referrer = this.$route.query.ref;
    // Cookie referrer 里保存的是第一位分享给当前用户的地址
    if (!firstReferrer && web3.utils.isAddress(referrer)) {
      Cookie.set('referrer', referrer, { expires: 356 });
    }
  },
  methods: {},
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + +new Date()
        : this.$route + +new Date();
    },
  },
};
</script>

<style>
.main-container {
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
}
</style>
