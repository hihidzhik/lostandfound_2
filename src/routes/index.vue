<script setup>
</script>

<template>
    
    <div class="container1">
        <div >
        <span class="page">LOSTandFOUND</span><br><br>
        <p>Taganrog</p><br><br>
        <span class="page2">Если вы что-либо<br>
            потеряли или обнуружили<br>
            потерянную вещь, <br>расскажите
            об этом у нас!
            <br><br>
            Потерявший, увидит ваше <br>
            объявление в-<router-link  class="page2" to="/list_found">cписке находок</router-link><br>
            и свяжется с вами, используя
            <br>оставленные вами контакты!
            <br><br>
            Если же вещь потеряли вы,<br>
            то нашедший поступит точно также.
            <br>Вам останется только ожидать
            <br>потерю в-<router-link  class="page2" to="/list_lost"> списке потерь.</router-link>
            <br><br>  <br><br><br><br>
            Таганрог 2022
        </span>
       
        </div >
        <!-- <a class="style_button" href="lost.vue">Потерял</a> -->
        <router-link class="style_button" to="/lost">Создать объявление</router-link>
    </div>
</template>

<style scoped>
    .container1 {
        width: 100%;
        height: 100%;
        background: rgb(238, 237, 237);
        margin: 0%;
        padding: 10%;
        float: left;
        position: absolute;
        font-size: 25px;
    }
    .page {
        color: rgb(0, 0, 0);
        text-align: left;
        font-size: 40px;
        position: absolute;
    }
    .page2 {
        color: rgb(0, 0, 0);
        text-align: left;
        font-size: 20px;
        position: absolute;
    }
    .style_button {
        background: rgb(255, 255, 255);
        display: inline-block;
        color: #000;
        padding: 70px;
        width: 300px;
        text-align: center;
        text-decoration: none;
        border-radius: 10px;
        margin-left: 25%;
        position: absolute;
        border-radius: 10px;
        box-shadow: 0 4px 16px #ccc;
    }
</style>
