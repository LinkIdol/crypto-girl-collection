<template lang="pug">
    // Please learn the pug(jade) syntax before you edit this file!
    #referral(v-if="!getReferrer")
        section.hero.is-medium
            .hero-body
                .container
                    h1.title| 邀请好友 Referral
                    h2.subtitle| 推荐好友玩 Link Idol 可获得 {{getReferPercent}} % 消费额的奖励!
                    .field.has-addons
                        label.label|你的邀请链接:
                        .control.is-expanded
                            input.input(type="text" :value="referLink" disabled)
                        .control
                            button.button.is-success(:data-clipboard-text="referLink")| 复制链接
                    h1.title| Share to your friends
                    .buttons
                      button.button.is-large.is-circle
                        span.icon.is-medium
                          i.iconfont.icon-wechat
                      button.button.is-large.is-circle
                        span.icon.is-medium
                          i.iconfont.icon-Facebook
                      button.button.is-large.is-circle
                        span.icon.is-medium
                          i.iconfont.icon-twitter
                      button.button.is-large.is-circle
                        span.icon.is-medium
                          i.iconfont.icon-weibo
                      button.button.is-large.is-circle
                        span.icon.is-medium
                          i.iconfont.icon-qq
                      button.button.is-large.is-circle
                        span.icon.is-medium
                          i.iconfont.icon-line
                      button.button.is-large.is-circle(:data-clipboard-text="referLink"
                       @click="clipURL")
                        span.icon.is-medium
                          i.iconfont.icon-link
                      img(:src="generateQrCode")
                    //- article.message.is-dark
                    //-   .message-header| 你的分享邀请码
                    //-   .message-body
    #referral(v-else)
        section.hero.is-medium
            .hero-body
                .container
                    h1.title| 欢迎来到 Link Idol <strong class="tag is-black is-medium">以太坊服</strong>
                    h2.subtitle| 你的好友 {{getReferrer}} 推荐你来玩 Link Idol
                    router-link(:to="toHomePageParam"
                    class="button is-large is-primary")| 立马游玩


</template>

<script>
import { mapState } from 'vuex';
import Clipboard from 'clipboard';
import QRCode from 'qrcode';

export default {
  created() {
    const clipboard = new Clipboard('.button');
    clipboard.on('success', (e) => {
      e.clearSelection();
    });
  },
  asyncComputed: {
    async generateQrCode() {
      const { referLink } = this;
      const uri = await QRCode.toDataURL(referLink);
      return uri;
    },
    async getReferPercent() {
      /**
             * Replace with your logic here.
             * I think you should interact with contract to get percentage
             * @author: Frank Wei
             */
      const fake = () =>
        new Promise((res) => {
          setTimeout(() => res('10'), 1000);
        });
      const result = await fake();
      return result;
    },
  },

  computed: {
    ...mapState({
      myAddress: ({ me }) => (me ? me.address : ''),
    }),
    getReferrer() {
      return this.$route.params.address;
    },
    toHomePageParam() {
      const referrer = this.getReferrer;
      return { name: 'HomePage', params: { referrer } };
    },
    referLink() {
      const website = 'http://game.linkidol.pro/#';
      if (this.myAddress) {
        return `${website}/draw/${this.myAddress}`;
      }
      return '请解锁 MetaMask 钱包再刷新访问';
    },
  },
  methods: {
    clipURL() {
      this.$dialog.alert({
        title: '复制成功',
        message: '快去分享给你的好朋友获得返现吧',
        type: 'is-success',
      });
    },
  },
};
</script>

<style scoped>
@import url("https://at.alicdn.com/t/font_691860_lc6g5xabd7mygb9.css");

.is-circle {
    border-radius: 100% !important;
}

.iconfont {
    font-size: 2.5rem;
}
</style>
