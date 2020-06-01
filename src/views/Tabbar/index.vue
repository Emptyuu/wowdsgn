<template>
  <div id="tabbar">
    <ul>
      <router-link v-for="(item,index) in list" :key="index" :to="item.path" tag="li">
          <img :src="item.imageurl | pathAdd" :alt="item.urlname">
          <span>{{item.urlname}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                    path:'/',
                    urlname:'首页',
                    imageurl:"/bottom-tap-icon/home.png"
                },
                {
                    path:'/classify',
                    urlname:'分类',
                    imageurl:"/bottom-tap-icon/category.png"
                },
                {
                    path:'/car',
                    urlname:'购物车',
                    imageurl:"/bottom-tap-icon/buy.png"
                },
                {
                    path:'/msg',
                    urlname:'消息',
                    imageurl:"/message.png"
                },
                {
                    path:'/my',
                    urlname:'我',
                    imageurl:"/bottom-tap-icon/me.png"
                },
            ]
        }
    },
    filters:{
        pathAdd(v){
            return "https://m.wowdsgn.com/static/img" + v
        }
    }
};
</script>

<style lang="scss" scoped>
#tabbar {
  position: fixed;
  width: 7.5rem;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #f5f5f5;
  z-index: 999;
  height: .88rem;
  ul {
    display: flex;
    justify-content: space-around;
    li{
        height: 100%;
        width: 100%;
        img {
          display: block;
          width: 0.46rem;
          margin: 0 auto;
        }
        span{
            font-size: .2rem;
            text-align: center;
            display: block;
            color: #808080;
        }
    }
  }
  .router-link-active{
      span{
          color: #000;
      }
  }
}
</style>