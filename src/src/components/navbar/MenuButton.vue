<template>
  <div v-click-outside="unfocus" class="menu-button">
    <input v-model="state" type="checkbox" id="checkbox3" class="checkbox3 visuallyHidden" >
        <label for="checkbox3">
            <div class="hamburger hamburger3">
                <span class="bar bar1"></span>
                <span class="bar bar2"></span>
                <span class="bar bar3"></span>
                <span class="bar bar4"></span>
            </div>
        </label>
  </div>

</template>
<script>
export default {
  name: 'MenuButton',
  data(){
    return{
      state  : false
    }
  },
  methods: {
    unfocus(){
      this.state = false
    }
  },
  watch: {
    state: function () {
      this.$emit("toggled", this.state)
    },
  }
}
</script>

<style scoped>
.visuallyHidden {
    position: absolute; 
    overflow: hidden; 
    clip: rect(0 0 0 0); 
    height: 1px; width: 1px; 
    margin: -1px; padding: 0; border: 0; 
}

.container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.hamburger {
    /* margin: 0 auto; */
    width: 30px;
    height: 20px;
    position: relative;
    width: min-content;
}

.hamburger .bar {
    padding: 0;
    width: 35px;
    height: 2px; 
    background-color: black;
    display: block;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    position: absolute; 
}

.bar1 {
    top: 0;
}
.bar2{
    top: 9px;
}
.bar3 {
    top: 9px;
    left:0px;
}
.bar3 {
    right: 0;
}
.bar4 {
    bottom: 0;
}
.hamburger3 .bar1 {
    transform-origin: 15%;
}

.hamburger3 .bar4 {
    transform-origin: 15%;
}



.checkbox3:checked + label > .hamburger3 > .bar1{
    transform: rotate(45deg);
    height: 2px;
    width: 35px;
}

.checkbox3:checked + label > .hamburger3 > .bar3{
    transform: rotate(45deg);
    height: 2px;
    background-color: transparent;
}

.checkbox3:checked + label > .hamburger3 > .bar2{
    transform: rotate(-45deg);
    height: 2px;
    background-color: transparent;
}

.checkbox3:checked + label > .hamburger3 > .bar4{
    transform: rotate(-45deg);
    height: 2px;
    width: 35px;
}
.hamburger{
  /* By default text is non selectable */
  -webkit-user-select: none;
  -ms-user-select    : none;
  user-select        : none;
  /* The rule below is not implemented in browsers yet */
  -o-user-select: none;
  /* The rule below is implemented in most browsers by now */
  user-select: none;
}
.menu-button
{
  display: block;
  width: 35px;
  height: 35px;
  /* background-color: blue; */
  z-index: 99;
  left: 25px;
  top: 25px;
}
.menu-button:hover{
  background-color: transparent;
  /* width: min-content; */
}

.menu-button:focus{
  background-color: transparent;
}

</style>
