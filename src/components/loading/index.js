import LoadingComponents from './index.vue'

const Loading = {
	install: (Vue) => {
		Vue.component('loading', LoadingComponents)
	}
}

export default Loading
