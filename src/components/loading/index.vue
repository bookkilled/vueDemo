<template>
    <div class="loading" v-show="show">
		<span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <!-- {{ msg }} -->
    </div>
</template>
<script>
export default {
	name: 'loading',
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
    data () {
        return {
            // msg: '加载中'
        }
	},
	created () {
	}
}
</script>
<style lang="less" scoped>
@-webkit-keyframes load{
	0%{
		-webkit-transform: scale(1.2);
		opacity: 1;
	}
	100%{
		-webkit-transform: scale(.3);
		opacity: 0.5;
	}
}
.loading {
	color: #FFF;
    height: 100px;
    line-height: 100px;
    width: 100px;
    background: rgba(0,0,0,0.6);
	border-radius: 6px;
	position: fixed;
	top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
	span{
		display: inline-block;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: #FFF;
		position: absolute;
		-webkit-animation: load 1.04s ease infinite;
		&:nth-child(1){
            left: 10px;
            top: 50%;
            margin-top: -10px;
            -webkit-animation-delay: 0.13s;
		}
		&:nth-child(2){
            left: 20px;
            top: 20px;
            -webkit-animation-delay: 0.26s;
        }
        &:nth-child(3){
            left: 50%;
            top: 10px;
            margin-left: -10px;
            -webkit-animation-delay: 0.39s;
        }
        &:nth-child(4){
            top: 20px;
            right:20px;
            -webkit-animation-delay: 0.52s;
        }
        &:nth-child(5){
            right: 10px;
            top: 50%;
            margin-top: -10px;
            -webkit-animation-delay: 0.65s;
        }
        &:nth-child(6){
            right: 20px;
            bottom:20px;
            -webkit-animation-delay: 0.78s;
        }
        &:nth-child(7){
            bottom: 10px;
            left: 50%;
            margin-left: -10px;
            -webkit-animation-delay: 0.91s;
        }
        &:nth-child(8){
            bottom: 20px;
            left: 20px;
            -webkit-animation-delay: 1.04s;
        }
	}
}
</style>
