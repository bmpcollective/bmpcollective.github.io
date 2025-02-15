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
    width          : 100%;
    height         : 100%;
    min-height     : 100%;
    display        : grid;
    align-items    : center;
    align-content  : center;
    justify-content: center;
    justify-items  : center;
}
.hero-logo{
    width      : 100%;
    max-width  : 600px;
    padding    : 0px 50px 40px 50px;
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
    transition     : color .3s;
    position       : relative;
}
.dropdown-option-text{
    text-transform : uppercase;
    transition     : color .3s;
}
.dropdown-option:hover{
    cursor    : pointer;
}
.dropdown-option-text:hover{
   color      : #9a9ea4;
   cursor     : pointer;
}
.submenu{
    display               : none;
    min-width             : 160px;
    padding               : 10px 0px 5px 0px;
    width                 : 100px;
    height                : min-content;
    position              : absolute;
    left                  : -50%;
    z-index               : 200;
    grid-template-columns : auto;
    box-shadow            : 0px 1px 1px rgba(0,0,0,.1);
}
.dropdown-option:hover .submenu{
    display         : grid;
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
}
</style>