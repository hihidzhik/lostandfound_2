<script setup>
</script>

<template>
    <div class="main">
        <div class="page_padding">
            <div class="page_text">
                LOSTandFOUND<br><br>
            Если вы что-либо
            потеряли или обнуружили
            потерянную вещь, расскажите
            об этом у нас!
            Потерявший, увидит ваше 
            объявление в <router-link  class="" to="/list_found">cпиcкe находок</router-link>
            и свяжется с вами, используя оставленные вами контакты!
            <br><br>
            Если же вещь потеряли вы,
            то нашедший поступит точно также.
            Вам останется только ожидать
            потерю в <router-link  class="" to="/list_lost"> списке потерь.</router-link> 
            </div>
            <div>
                <router-link class="style_button" to="/lost">Создать объявление</router-link>
            </div>
        </div>
        
    </div>
</template>

<style scoped>

    .main {
        display: inline-flex;
        width: 100%;
        height: 100%;
        background: rgb(238, 237, 237);
        justify-content: center;
    }
    
    .page_text {
        display: block;
        color: rgb(0, 0, 0);
        width: 30%;
        font-size: 20px;
    }
    .style_button {
        background: rgb(255, 255, 255);
        display: flex;
        justify-content: center;
        align-items:center ;
        color: #000;
        padding: 70px;
        width: 300px;
        height: 200px;
        text-align: center;
        text-decoration: none;
        border-radius: 10px;
        box-shadow: 0 4px 16px #ccc;
    }
    .page_padding {
        padding-top: 8%;
        display: flex;
        font-size: 20px;
        justify-content:space-around;
    }

</style>
