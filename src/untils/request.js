/* 
axios 封装请求模块
 */
import axios from 'axios'

//创建一个axios 实例 说白了就是复制一个axios  
//我们通过这个实例去发请求 把需要的配置给这个实例来处理
const request = axios.create({
    baseURL:'http://ttapi.research.itcast.cn/' //请求基本路径
})