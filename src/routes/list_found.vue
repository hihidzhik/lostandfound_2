<script setup>
</script>

<template>
    
    <div class="container1">
        <div class="page">
        <span>LOSTandFOUND</span>
        <p>Taganrog</p>
        <router-link class="page" to="/index">Вернуться на главную</router-link>
        </div>
    </div>
    <div class="container2">
         <div class="page">Список находок</div>
         
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
background: rgb(0, 0, 0);
width: 80%;
height: 50px;
float: right;
margin-left: 500px;
position: fixed;


}
.page{
    color: #000;
    text-align: center;
    padding: 10px;
}
.text_style{
    color: rgb(255, 255, 255);
    font-size: 17px;
    font-style:normal;
    padding: 8%;
   
}
.style_button{
    background: #8c959d;
    display: inline-block;
    color: #fff;
    padding: 1rem 1.5rem;
    text-decoration: none;
    border-radius: 3px;
    
}
</style>