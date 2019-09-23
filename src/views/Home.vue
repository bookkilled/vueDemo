<template>
	<div class="home">
		<van-row class="maxW">
			<van-col span="8">复制v-copy</van-col>
			<van-col span="8"><van-field v-model="textinp" placeholder="请输入用户名" /></van-col>
			<van-col span="8"><van-button type="primary" class="btn" v-copy="textinp">copy</van-button></van-col>
		</van-row>
		<van-row class="maxW">
			<van-col span="8">全局组件Loading</van-col>
			<van-col span="8"><loading></loading></van-col>
			<van-col span="8">--</van-col>
		</van-row>
		<van-row class="maxW">
			<van-col span="8">全局组件Message</van-col>
			<van-col span="8">--</van-col>
			<van-col span="8"><van-button type="primary" class="btn" @click="openMessage">点击</van-button></van-col>
		</van-row>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'home',
	data () {
		return {
			textinp: '',
			messageNum: 0
		}
	},
	components: {
		// HelloWorld
	},
	methods: {
		copyInp () {
			console.log(this.textinp)
		},
		openMessage() {
			this.messageNum ++
			this.messageNum == 1 && this.$message.info('普通消息')
			this.messageNum == 2 && this.$message.success('成功消息')
			this.messageNum == 3 && this.$message.warning('警告消息')
			this.messageNum == 4 && this.$message.error('错误消息')
			this.messageNum == 4 && (this.messageNum = 0)
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
