<template> 
  <navbar/>
  <router-view></router-view>
</template>

<script>
import navbar from "./components/navbar/index.vue"

export default{
  components:{ navbar },
  title : ""
}
</script>

<style>
/* Defaults & style */

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}
/* https://stackoverflow.com/questions/5102820/scrolling-of-whole-page-instead-of-inner-div-only */
/* html, body { height: 100%; }  */
html,body,#app{
  margin    : 0px;
  top       : 0px;
  background: var(--bg-color);
  min-width: 100%;
  overflow-x: hidden;
  min-height: 100%;
  width: 100%;
  overflow-y: scroll;
  font-family: canada-type-gibson, Helvetica, sans-serif; 
  font-weight: 200;
  font-size: 22px;
  line-height: 17px;
  font-style: normal;
  letter-spacing: .1em;
}
/* dark scroll bar */
:root {
  color-scheme: dark;
}
/* body{
  min-height: 100vh; 
  min-height: calc(var(--vh, 1vh) * 100); 
} */
html,body{
  background         : #FEFFFE;
  font-family        : "Inter", serif;
  font-optical-sizing: auto;
  font-weight        : 100;
  font-style         : normal;
  color              : black;
  font-size          : 25px;
}
@media (pointer: coarse) {
  a:hover {
    all: revert-layer;
  }
}
/* #app{
  height: 100%;
} */
a{
  color: black;
  text-decoration: none;
}
a:hover{
  cursor: crosshair;
  opacity: .6;
}
.link{
  color: purple;
}
.link:hover{
  cursor: crosshair;
  opacity: .6;
}
.icon-link:hover{
  cursor: crosshair;
  opacity: .6;
}
img {
  /* filter: sepia(20%) grayscale(20%) contrast(150%); */
  transition: filter 0.3s ease;
}
.space{
  display: block;
  width: 100%;
  height: max-content;
}
.horizontal-center{
  display      : grid;
  width        : 100%;
  justify-items: center;
}
.padding{
  display: block;
  width: 100%;
  height: 300px;
}

/* .fade-move,
.fade-enter-active{
  transition-delay: .5s;
  transition: opacity .5s ease-out;
}
.fade-leave-active {
  transition: opacity 0s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */

router-view{
  position: absolute;
  min-height: 100%;
  width: 100%;
}

</style>