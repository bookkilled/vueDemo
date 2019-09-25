import LoadingComponents from './index.vue'

const Loading = {
	duration: 2000, // 显示的时间 ms
	install: (Vue) => {
		if (typeof window !== 'undefined' && window.Vue) {
			Vue = window.Vue
		}
		Vue.component('loading', LoadingComponents)
		function todo (type, callBack) {
			let VueLoading = Vue.extend({
				render (h) {
					let props = {
						show: this.show
					}
					return h('loading', { props })
				},
				data () {
					return {
						show: false
					}
				}
			})
			let newLoading = new VueLoading()
			let vm = newLoading.$mount()
			let el = vm.$el
			document.body.appendChild(el) // 把生成的提示的dom插入body中
			if (type === 'open') {
				vm.show = true
				let t1 = setTimeout(() => {
					clearTimeout(t1)
					vm.show = false
					el && document.body.removeChild(el) // 从body中移除dom
					newLoading.$destroy()
					vm = null // 设置为null，好让js垃圾回收算法回收，释放内存
					callBack && (typeof callBack === 'function') && callBack()
				}, 1e4)
			} else {
				vm.show = false
				document.body.removeChild(document.querySelector('.loading')) // 从body中移除dom
				newLoading.$destroy()
				vm = null
				callBack && (typeof callBack === 'function') && callBack()
			}
		}
		Vue.prototype.$loading = {
			open (callBack) {
				todo('open', callBack)
			},
			close (callBack) {
				todo('close', callBack)
			}
		}
	}
}

export default Loading
