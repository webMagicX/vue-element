## 目录结构

│  index.html									//入口页面
│  
├─config											//外部配置
│      pattern.js							//通过不同的命令，返回不同的模式，用于在不同的调试环境执行不同的代码
│      
├─dist												//生产包
│          
├─lib													//一些外部模块
│         
└─src													//开发目录
    │  main.js								//入口
    │  
    ├─assets									//静态目录
    │      
    ├─components							//公用组件
		│
    ├─config									//配置目录
    │  ├─request							//请求地址配置
    │  │      
    │  └─router								//路由配置
    │          
    ├─mock										//模拟数据
    │  ├─A										//A类
    │  │  	A1.mock.js				//格式为 xx.mock.js，有 .mock 的文件在打生产包打包时会被移除，生产不需要模拟数据
    │  │      
    │  └─B										//B类
    │          
    ├─page										//页面目录
    │  │  
    │  ├─A										//A类目录
    │  │  └─A1								//A1页面
    │  │          index.vue		//A1页面入口
    │  │          
    │  └─B										//B类目录
		│
    └─store										//store 类
            global.js					//global 模块
            


