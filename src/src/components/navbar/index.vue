<template>
    <!-- <div class="dropdown-container-top"> -->
        <MenuButton class="menu" v-on:toggled="showDropdown=!showDropdown"></MenuButton>
    <!-- </div> -->
    <Dropdown :show="showDropdown" :links="LinksRight"></Dropdown>
</template>

<script>
import Dropdown from "./Dropdown.vue"
import MenuButton from "./MenuButton.vue"

const LinksRight=[ "News" ]
export default {
    name: 'navbar',
    props : ['links'],
    components: { Dropdown, MenuButton},
    data() {
        return {
            window: {
                width: 0,
                height: 0
            },
        LinksRight: LinksRight,
        darkMode: false,
        showDropdown: false,
        colorScheme: "light"
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth
            this.window.height = window.innerHeight
        },
        toggleMode(toggleState){
            this.darkMode=toggleState;
            if (this.darkMode){
                this.$globalColorScheme.value = "dark"
            }else{
                this.$globalColorScheme.value = "light"
            }
        },
        toggleDropdown(state){
            this.showDropdown=state
        }
    },
    watch : {
        '$globalColorScheme':{
            handler: function () {
                this.colorScheme = this.$globalColorScheme.value
        }, deep: true } 
    }
}
</script>

<style scoped>
.menu{
    /* background-color: red; */
    position: absolute;
    top: 25px;
    left: 25px;
    margin: 0;
}
.dropdown-container-top{
    display: none;
    justify-content: left;
    padding: 25px;
    height: max-content;
}
.navbar{
    width: calc(100% - 20px);
    height: 60px;
    position: relative;
    border-bottom: 1px solid lightgrey;
    margin-left: 10px;
    margin-right: 10px;
    z-index: 999;
}

.logo2{
    display: inline-block;
    margin-left: 10px;
    height: 25px;
    width: 25px;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */ 
    align-self: center; /* vertical center in grid */
    justify-self: left;/* hrozontal center in grid */
}
.logo{
    height: 40px;
    width: 40px;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */ 
    align-self: center; /* vertical center in grid */
    justify-self: left;/* hrozontal center in grid */
}
.navigation-link {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 13px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    align-self: center;
    text-decoration: none;
    font-weight: 300;
    height: 100%;
    color: #626262;
    text-transform: UPPERCASE;
}
.selected{
    position: relative;
    color:rgba(0, 0, 0, 1);
}
.selected::after {
    content: '';
    position: absolute;
    left: 0;
    width: 0;
    margin-top: 24px;
    height: 1px;
    background-color: rgba(0, 0, 0, .8); /* Underline color */
    transition: width 0.3s ease; /* Animation effect */
}
.selected::after {
    width: 100%; /* Underline expands on hover */
    animation: underlineAnimation .5s ease forwards; /* Apply animation */
}
@keyframes underlineAnimation {
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
}
.navigation-link:hover{
    opacity: .6;
}

.navbar-full-layout{
    display: grid;
    grid-template-columns: 250px auto  min-content min-content min-content min-content min-content;
    grid-gap: 10px;
    height: 60px;
    overflow: hidden;
    align-content: center;
}
.navbar-condensed-layout{
    display: grid;
    grid-template-columns: 250px auto 40px;
    align-items: center;
    align-content: center;
}
.toggle-container{
    justify-self: center;
    align-self: center;
}

.foo{
    font-weight: 8000;
    width: min-content;
}
    .dropdown-container-top{
        display              : grid;
    }
/* } */
</style>
