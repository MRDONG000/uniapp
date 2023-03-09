const BASE_URL = 'http://localhost'
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			// 传递地址
			url:BASE_URL+options.url,
			// 传递方法
			method:options.method || 'GET',
			// 传递请求体里的数据
			data:options.data || {},
			success:(res)=>{
				if(res.data.status !== 0){
					return uni.showToast({
						title:'获取数据失败'
					})
				}
				resolve(res)
			},
			fail:(err)=>{
				uni.showToast({
					title:'请求接口失败'
				})
				reject(err)
			}
		})
	})
}