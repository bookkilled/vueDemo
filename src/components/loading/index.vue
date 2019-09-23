<template>
    <div class="loading">
        {{ msg }}
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg: 'loading......'
        }
    }
}
</script>
<style lang="less" scoped>
.loading {
	padding: 2px 20px;
	border: solid 1px #e5e5e5;
	color: #f04;
}
</style>
