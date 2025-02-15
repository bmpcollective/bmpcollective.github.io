<template>
    <div class="home">
        <img src="/logo2.png" class="hero-logo" />
        <div class="navbar">
            <span class="dropdown-option">Models</span>
            <span class="dropdown-option">Photographers</span>
            <span class="dropdown-option">Events</span>
            <span class="dropdown-option">Channels</span>
            <span class="dropdown-option">Admins</span>
        </div>
    </div>
</template>

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
    overflow       : hidden;
}
.hero-logo{
    width    : 100%;
    max-width: 600px;
    padding  : 0px 50px 40px 50px;
}
.navbar{
    display              : grid;
    grid-template-columns:  min-content min-content min-content min-content min-content;
    max-width            : 550px;
    font-size            : 18px;
    font-family          : canada-type-gibson, Helvetica, sans-serif;
    font-weight          : 200;
    color                : #131416;
    grid-gap             : 10px;
    overflow             : hidden;
}
.dropdown-option{
    padding        : 5px;
    text-transform : uppercase;
}
</style>