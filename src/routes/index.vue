<script setup>
</script>

<template>
    
    <div class="container1">
        <div class="page">
        <span>LOSTandFOUND</span>
        <p>Taganrog</p>
        <a>Описание сайта</a>
        </div>
    </div>
    <div class="container2">
        <!-- <a class="style_button" href="lost.vue">Потерял</a> -->
        <router-link class="style_button" to="/lost">Потерял</router-link>
        <!--<a class="style_button2" href="found.vue">Нашел</a>-->
        <router-link class="style_button2" to="/found">Нашел</router-link>
    </div>
    <div class="container3">
        <!--<span class="text_style" href="list_found"> Список находок</span>-->
        <router-link class="text_style" to="/list_found">Список находок</router-link>
        <!--<span class="text_style"> Список потерь</span>-->
        <router-link class="text_style" to="/list_lost">Список потерь</router-link>
</div>

</template>

<style scoped>
.container1{
width: 500px;
height: 1000px;
background: rgb(238, 237, 237);
margin: 0%;
padding: 0%;
float: left;
position: absolute;
font-size: 25px;



}
.container2{
width: 80%;
height: 1000px;
background: rgb(255, 255, 255);
margin: 0%;
margin-left: 500px;
margin-top: 50px;
padding: 0%;
float:right;
position: fixed;



}
.container3{
background: rgb(34, 32, 32);
width: 80%;
height: 50px;
float: right;
margin-left: 500px;
position: fixed;
box-shadow: 0 4px 16px #ccc;



}
.page{
    color: rgb(255, 255, 255);
    text-align: center;
    padding: 10px;
    margin-top: 10px;
    font-size: 28px;
    

}
.text_style{
    color: rgb(255, 255, 255);
    font-size: 17px;
    font-style:normal;
    margin-left: 150px;
 
}
.style_button{
    background: rgb(238, 237, 237);
    display: inline-block;
    color: #000;
    padding: 70px;
    width: 200px;
    text-align: center;
    text-decoration: none;
    border-radius: 10px;
    margin: 10%;
    position: fixed;
    border-radius: 10px;
    box-shadow: 0 4px 16px #ccc;

    
}
.style_button2{
    background: rgb(238, 237, 237);
    display: inline-block;
    color: #000;
    padding: 70px;
    width: 200px;
    text-align: center;
    text-decoration: none;
    border-radius: 10px;
    margin: 10%;
    margin-top: 400px;
    position: fixed;
    border-radius: 10px;
    box-shadow: 0 4px 16px #ccc;

    
}
</style>
