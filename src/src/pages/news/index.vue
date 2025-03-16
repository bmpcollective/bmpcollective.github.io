<template>
    <div class="news">
        <div class="title">
            Follow our <a class="link" href="https://www.instagram.com/bmpcollective">instagram</a>!
        </div>
        <br>
        <div class="description">
            We are a community of motivated creatives working to connect talent across greater boston
            <br><br>
            Reach out to get your own portfolio on our site, and let us know if you'd like to 
            volunteer for one or more of the following roles
        </div>
        <div class="cards">
            <div class="card">
                <div class="role-title">
                    Event Planner
                </div>
                <div class="role-description">
                    Coordinates social events, templates flyers and posts updates on social platforms
                </div>
                <div class="role-status">
                    1 Filled, 2 Open
                </div>
            </div>
            <!-- <div class="card">
                <div class="role-title">
                    Graphic Designer
                </div>
                <div class="role-description">
                    Open
                </div>
                <div class="role-status">
                    Open
                </div>
            </div>
            <div class="card">
                <div class="role-title">
                    Chief of Communications
                </div>
                <div class="role-description">
                    Filled
                </div>
                <div class="role-status">
                    Filled
                </div>
            </div> -->
            <div class="card">
                <div class="role-title">
                    Website Developer
                </div>
                <div class="role-description">
                    Designs and updates website content on github using conventional tools
                </div>
                <div class="role-status">
                    1 Filled, 2 Open
                </div>
            </div>
        </div>
        <div style="height: 140px;display:block;"></div>
</div>
</template>

<style scoped>
.news{
    font-family: canada-type-gibson, Helvetica, sans-serif; 
    color: black;
    font-weight: 200;
    font-size: 16px;
    font-style: normal;
    letter-spacing: .1em;
    line-height: 24px;
    padding: 10px;
    text-align: center;
    padding-top: 70px;
}
.title{
    text-align:center;
}
.description{
    text-align: center;
    letter-spacing: .05em;

}
.cards{
    display      : grid;
    width        : 100%;
    height       : min-content;
    align-items  : center;
    align-content: center;
    justify-items: center;
    justify-items: center;
    grid-gap     : 20px;
    padding-top  : 25px;
}
.card{
    display: grid;
    width: 280px;
    height: min-content;
    box-shadow: 0px 1px 4px rgba(0,0,0,.2);
    border-radius: 5px;
}
.role-title{
    font-weight: 400;
    padding: 5px 5px 5px 5px;
}
.role-description{
    color: #9a9ea4;
    text-align: left;
    line-height: 14px;
    font-size: 14px;
    padding: 0px 0px 10px 10px;
}
.role-status{
    padding: 0px 0px 10px 10px;
    font-size: 15px;
}
</style>