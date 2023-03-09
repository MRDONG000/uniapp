<template>
	<view class="news">
		<newsList :list="newsList"></newsList>
	</view>
</template>

<script>
	import newsList from '../../components/news-item/news-item.vue'
	export default {
		components:{
			newsList
		},
		data() {
			return {
				newsList:[]
			}
		},
		methods: {
			async getNews(){
				const res = await this.$myRequest({
					url:'/api/getnewslist'
				})
				this.newsList = res.data.messgae
			}
		},
		onLoad() {
			this.getNews()
		}
	}
</script>

<style lang="scss">

</style>
