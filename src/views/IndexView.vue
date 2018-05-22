<template lang="pug">
    #index
        section.hero.is-medium
            .hero-body
                .container
                    h1.title| {{$t('CryptoGirl')}} <strong class="tag is-danger">Beta</strong>
                    h2.subtitle| 虚拟货币娘化？！
                    router-link(:to="{name: 'GirlList'}"
                    class="button is-large is-black is-rounded")| 查看在册币娘
</template>
