<template>
  <div>
    <transition
      appear
      v-on:before-appear="customBeforeAppearHook"
      v-on:appear="customAppearHook"
      v-on:after-appear="customAfterAppearHook"
      v-on:appear-cancelled="customAppearCancelledHook">
      <div ref="div" v-if="show">hello world</div>
    </transition>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                show: true
            }
        },
        methods: {
            customBeforeAppearHook(val){
                this.show = false

                console.log('customBeforeAppearHook')
            },
            customAppearHook(val){
                // this.show = false

                console.log('customAppearHook')
            },
            customAfterAppearHook(val){

                console.log('customAfterAppearHook')
            },
            customAppearCancelledHook(){
                console.log('取消customAppearCancelledHook')
            }
        },
        mounted(){
            console.log('mounted')
        }
    }
</script>
