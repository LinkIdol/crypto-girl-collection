<template lang="pug">
    #index
            section.hero.is-medium.is-fullheight
                .hero-body
                    .container
                        h1.title| {{$t('CryptoGirl')}} <strong class="tag is-danger">Beta</strong>
                        h2.subtitle| 虚拟货币娘化计划 ？！
                        router-link(:to="{name: 'GirlList'}"
                        class="button is-large is-primary is-rounded")| 查看在册币娘
</template>


<style scoped>
.title {
    font-size: 4rem;
}
.hero {
    background: #FFF;
}
</style>
