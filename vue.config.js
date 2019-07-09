module.exports = {
	devServer: {
		proxy: {
			"/api":{
				target: "http://f.apiplus.cn/api",
				changeOrigin: true
			}
		}
	}
}
