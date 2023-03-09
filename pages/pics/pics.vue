<template>
<view class="pics">
		<scroll-view class="left" scroll-y>
			<view :class="active ===index?'active':''" v-for="(item,index) in cates" :key="item.id" @click="leftClickHandle(index,item.id)">
					{{item.title}}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="(item,index) in secondData">
				<image :src="item.img_url" @click="previewImage(item.img_url)"></image>
				<text>{{item.msg}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[],
				active:0,
				secondData:[]
			}
		},
		methods: {
			async getPics(){
				const res = await this.$myRequest({
					url:'/api/getimgcategory'
				})
				console.log(res);
				this.cates=res.data.message
				this.leftClickHandle(0,this.cates[0].id)
			},
			async leftClickHandle(index,id){
				this.active = index
				// 获取右侧的数据
				const res = await this.$myRequest({
					url:'/api/getimg/'+id
				})
					// console.log(res);
					this.secondData = res.data.message
			},
			previewImage(current){
				const urls = this.secondData.map(item=>{
					return item.img_url
				})
				uni.previewImage({
					current,
					urls:urls,
					loop:true
				})
			}
		},
		onLoad(){
			this.getPics()
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view{
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active{
			background-color: $shop-color;
			color:#fff;
			}
		}
	}
	.pics{
		height: 100%;
		display: flex;
		.right{
			height: 100%;
			width: 520rpx;
			margin: 10rpx auto;
			.item{
				image{
					width: 530rpx;
				  height: 520rpx;
				  border-radius: 5px;
				}
				text{
					font-style: 30rpx;
					line-height: 60rpx;
				}

			}
		}
	}
</style>
