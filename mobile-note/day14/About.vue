<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import store from '@/assets/store'
console.log("about.vue:")
console.log(store);


// 
export default {
  data(){

  },
  created(){
    // if(res.data == 1){
    //   store.set('username','xiaophonmg')
    // }
  },
  methods:{
    handleClick(){
      // 500行代码，就是专门设置这个username的； 
      // store.set('username','xiaophonmg')
    }
  }
}
</script>

