<template lang="pug">
  .container
    #login(v-if="!account")
      h1| 请使用 MetaMask 登录
      h3| 无法访问你的 Web3 接口，请登录后抽卡
    #draw(v-if="account")
        //- h1.title| 幸运回旋
    .columns
        .column.is-one-quarters
            AccountView
              .field.is-grouped
                p.control
                    button.button.is-primary.is-medium(@click="draw")| 搏一搏!
                p.control
                    router-link.button.is-success.is-medium(to="/my")| 我的奖品
                p.control
                    button.button.is-info.is-medium(@click="draw" disabled)| 奖池明细
        .column.is-three-quarters
            section.hero
            .hero-body
                .container
                    h1.title| 幸运抽卡
                    h2.subtitle| 欧洲人与非洲人，只在一瞬间
            //- Spin(v-if="pricesRow.length === 0" size="large" fix)
            Row
              Col(:xs="12" :sm="8" :md="8" :lg="6" style="min-height: 100px"
              v-for="element in pricesRow" :key="element.name" :class="isSelect(element)")
                  img(:src="element.img" style="width: 128px")
                  p| {{element.name}}

</template>

<script>
export default {
  data: () => ({
    pricesRow: [],
  }),
};
</script>
