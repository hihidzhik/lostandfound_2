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
        <div class="text_style2">Нашел</div><br>
         <form class="form_style">
            <select class="form_input" id="type" name="type">
                <option value="found">Находка</option>
                <option value="lost">Потеря</option>
            </select><br>
            <input class="form_input"
            :value="text" @input="event => text =event.terget.value" type="text" placeholder="ФИО" required><br>
            <input class="form_input" type="text" placeholder="Описание" required><br>
            <input class="form_input" type="number" placeholder="Номер телефона" required><br>
            <select class="form_input">
                <option value="other">Прочее</option>
                <option disabled value="">Выберите категорию</option>
                <option value="documents">Документы</option>
                <option value="keys">Ключи</option>
                <option value="tehnic">Техника</option>
                <option value="pats">Животные</option>
                <option value="clothes">Одежда и аксессуары</option>
                <option value="jewelry">Драгоценности</option>
                <option value="bags">Сумки</option>
                
            </select><br>
            <input class="form_input" type="date"><br><br>
            <input class="style_button" type="button" value="Отправить" @click.prevent="store.addNewLostedThing(123)">
         </form>
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
    background: rgb(238, 237, 237);
    display: inline-block;
    color: rgb(0, 0, 0);
    padding: 10px 20px;
    border: none;
    width: 150px;
    text-decoration: none;
    border-radius: 5px;
    text-align: center;
    position: fixed;
    outline: none;
    cursor: pointer;
    transition: 0.3s;


}
.text_style2{
    color: rgb(0, 0, 0);
    font-size: 20px;
    font-style:normal;
   margin-left: 300px;

}
.form_style{
    margin-left: 150px;
    font-size: 50px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 16px #ccc;
    letter-spacing: 1px;
    width: 300px;
    padding: 32px;
    height: 320px;


}
.form_grup{
position: relative;
margin-bottom: 32px;
}
.form_input{
    width: 100%;
    padding: 0 0 10px 0;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    background-color: transparent;
    outline: none;
    transition: 0.3s;
}
</style>