<template>
	<div class="index">
		首页
        <div class="container">
            {{testData}}
        </div>
        <input type="text" v-model="num">
        <button @click="test">点我</button>
	</div>
</template>
<script>
export default {
    data () {
        return {
            num: 0
        }
    },
    computed: {
        testData () {
            return this.model.test.textData
        }
    },
    methods: {
        test () {
            let n = this.num + 1
            this.$command('TEST', n)
        }
    }
}
</script>
<style lang="less">
    .index{
        background: red;
        .container{
            color: yellow;
        }
    }
</style>
