<template>
	<div class="home">
		<van-row class="maxW">
			<van-col span="8">复制v-copy</van-col>
			<van-col span="8"><van-field v-model="textinp" placeholder="请输入用户名" /></van-col>
			<van-col span="8"><van-button type="primary" class="btn" v-copy="textinp">copy</van-button></van-col>
		</van-row>
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'home',
	data () {
		return {
			textinp: ''
		}
	},
	components: {
		// HelloWorld
	},
	methods: {
		copyInp () {
			console.log(this.textinp)
		}
	}
}
</script>
<style lang="less" scoped>
.maxW {
	width: 50%;
	margin: 0 auto;
	line-height: 44px;
}
</style>
