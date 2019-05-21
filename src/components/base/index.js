//公用组件全局注册

import baseDemo from './demo'

let components = [
	{
		name: 'base-demo',
		component: baseDemo
	}
]

let plugin = (vue) => {
	if(plugin.installed){
		return
	}
	components.forEach((item) =>{
		vue.component(item.name,item.component)
	})
}
export default plugin
