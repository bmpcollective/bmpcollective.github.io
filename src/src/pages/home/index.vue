<template>
    <div class="home">
        <img src="/logo2.png" class="hero-logo" />
        <div class="navbar">
            <div class="dropdown-option">
                <span class="dropdown-option-text">Models</span>
                <div class="submenu">
                    <span class="submenu-item">Men</span>
                    <span class="submenu-item">Women</span>
                </div>
            </div>
            <div class="dropdown-option">
                <span class="dropdown-option-text">Photographers</span>
            </div>
            <div class="dropdown-option">
                <span class="dropdown-option-text">Events</span>
            </div>
            <div class="dropdown-option">
                <span class="dropdown-option-text">Channels</span>
            </div>
            <div class="dropdown-option">
                <span class="dropdown-option-text">Admins</span>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    "title": "THE BMP COLLECTIVE" 
}
</script>
<style scoped>
.home{
    margin         : 0;
    width          : 100vw;
    height         : 100vh;
    display        : grid;
    align-items    : center;
    align-content  : center;
    justify-content: center;
    justify-items  : center;
}
.hero-logo{
    width      : 100%;
    max-width  : 400px;
    padding    : 50px 50px 40px 50px;
    /* z-index    : 1;  */
    /* background-color: red; */
}
.navbar{
    padding              : 0;
    display              : grid;
    grid-template-columns:  min-content min-content min-content min-content min-content;
    max-width            : 550px;
    font-size            : 15px;
    font-family          : canada-type-gibson, Helvetica, sans-serif;
    font-weight          : 200;
    color                : #131416;
    grid-gap             : 15px;
    letter-spacing       : 1.5px;
    /* animation            : fadeIn 1s; */
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.dropdown-option{
    padding        : 5px;
    text-transform : uppercase;
    transition     : color .1s;
    position       : relative;
}
.dropdown-option-text{
    text-transform : uppercase;
    transition     : color .1s;
}
.dropdown-option:hover{
    cursor    : pointer;
}
.dropdown-option-text:hover{
   color      : #9a9ea4;
   cursor     : pointer;
}
.submenu{
    display               : grid;
    min-width             : 160px;
    padding               : 10px 0px 5px 0px;
    width                 : 100px;
    height                : min-content;
    position              : absolute;
    left                  : -50%;
    z-index               : 200;
    grid-template-columns : auto;
    box-shadow            : 0px 1px 1px rgba(0,0,0,.1);
    transition            : opacity .1s;
    opacity               : 0;
}
.dropdown-option:hover .submenu{
    opacity               : 1;
}
.submenu-item{
    width      : 100%;
    padding    : 10px;
}
.submenu-item:hover{
    color           : #9a9ea4;
    cursor          : pointer;
}

@media (max-width:550px) { 
    .navbar{
        display              : none;
    }
    .dropdown-container-top{
        display              : grid;
    }
    .home{
        height: calc(100vh - 120px);
        overflow: hidden;
    }
    .hero-logo{
        z-index    : 1; 
    }
}
</style>