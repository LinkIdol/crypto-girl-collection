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
                    h1.title| 分享到社交媒体
                    .buttons
                      button.button.is-large.is-circle(@click="scanQRCode")
                        span.icon.is-medium
                          i.iconfont.icon-wechat
                      button.button.is-large.is-circle(@click="scanQRCode")
                        span.icon.is-medium
                          i.iconfont.icon-qq
                      a.button.is-large.is-circle(:href="getFB" target="_blank")
                        span.icon.is-medium
                          i.iconfont.icon-Facebook
                      a.button.is-large.is-circle(:href="getTwitter" target="_blank")
                        span.icon.is-medium
                          i.iconfont.icon-twitter
                      a.button.is-large.is-circle(:href="getWeibo" target="_blank")
                        span.icon.is-medium
                          i.iconfont.icon-weibo
                      a.button.is-large.is-circle(:href="getLine" target="_blank")
                        span.icon.is-medium
                          i.iconfont.icon-line
                      button.button.is-large.is-circle(:data-clipboard-text="referLink"
                       @click="clipURL")
                        span.icon.is-medium
                          i.iconfont.icon-link
                      //- img(:src="generateQrCode")

                    //- article.message.is-dark
                    //-   .message-header| 你的分享邀请码
                    //-   .message-body
                    b-notification(:active.sync="isActive" type="is-info")
                      h1.title| 操作指示
                      h2.subtitle| 请扫描下方的二维码，选择分享 或 在对话分享链接
                      img(:src="generateQrCode")

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
  },
  data: () => ({ isActive: false }),
  computed: {
    ...mapState({
      myAddress: ({ me }) => (me ? me.address : ''),
    }),
    getReferPercent() {
      return 3;
    },
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
    getSafeLink() {
      return encodeURIComponent(this.referLink);
    },
    getFB() {
      const { getSafeLink } = this;
      return `https://www.facebook.com/sharer/sharer.php?u=${getSafeLink}`;
    },
    getLine() {
      const { getSafeLink } = this;
      return `https://social-plugins.line.me/lineit/share?url=${getSafeLink}`;
    },
    getTwitter() {
      const { getSafeLink } = this;
      const shareStr = `我在玩 LinkIdol, 要来一发吗？ ${getSafeLink}`;
      return `https://twitter.com/intent/tweet?text=${shareStr}`;
    },
    getWeibo() {
      const { getSafeLink } = this;
      const shareStr = `我在玩 LinkIdol, 要来一发吗？ ${getSafeLink}`;
      return `http://service.weibo.com/share/share.php?title=${shareStr}`;
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
    scanQRCode() {
      this.isActive = true;
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
