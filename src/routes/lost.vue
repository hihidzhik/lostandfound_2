<script setup>
import { ref } from 'vue';
import { useStore } from '../store/main';
const store = useStore();

const currentThing = ref({
    type: 'lost',
    owner: '',
    description: '',
    phone: '',
    category: '',
    createdAt: '',
});

const validateAndCreate = () => {
    console.log(currentThing)
    store.addNewLostedThing(currentThing);
}

</script>

<template>
    <div class="main">
        <div >
            <span class="page_text">LOSTandFOUND</span>
        </div >
            <form class="form_style">
                <select class="form_input" id="type" name="type" :value="currentThing.type" @input="currentThing.type = $event.target.value">
                    <option value="lost">Потеря</option>
                    <option value="found">Находка</option>
                </select><br>
                <input class="form_input" :value="currentThing.owner" @input="currentThing.owner = $event.target.value"
                type="text" placeholder="ФИО" required><br>
                <input class="form_input" :value="currentThing.description" @input="currentThing.description =$event.target.value"
                type="text" placeholder="Описание" required><br>
                <input class="form_input" type="number" placeholder="Номер телефона" :value="currentThing.phone" @input="currentThing.phone = $event.target.value" required><br>
                <select class="form_input" :value="currentThing.category" @input="currentThing.category =$event.target.value">
                    <option disabled value="">Выберите категорию</option>
                    <option value="other">Прочее</option>
                    <option value="documents">Документы</option>
                    <option value="keys">Ключи</option>
                    <option value="tehnic">Техника</option>
                    <option value="pats">Животные</option>
                    <option value="clothes">Одежда и аксессуары</option>
                    <option value="jewelry">Драгоценности</option>
                    <option value="bags">Сумки</option>

                </select><br>
                <input class="form_input" type="date" :value="currentThing.date" @input="currentThing.date =$event.target.value"><br><br>
                <input class="style_button" type="button" value="Отправить" @click="validateAndCreate">
            </form>
        </div>

</template>

<style scoped>
    .main {
        padding: 35px;
        width: 100%;
        height: 100%;
        background: rgb(238, 237, 237);
    }
    .page_text {
        display:grid;
        color: rgb(0, 0, 0);
        width: 100%;
        justify-content:center;
        text-decoration: column;
    }
    .style_button {
        background: rgb(238, 237, 237);
        display: inline-block;
        color: rgb(0, 0, 0);
        padding: 10px 20px;
        border: none;
        width: 150px;
        text-decoration: none;
        border-radius: 5px;
        text-align: center;
        position:absolute;
        outline: none;
        cursor: pointer;
        transition: 0.3s;


    }
    .form_style {
        margin-left: 500px;
        font-size: 50px;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 16px #ccc;
        letter-spacing: 1px;
        width: 300px;
        padding: 32px;
        height: 320px;
        position: absolute;

    }
    .form_input {
        width: 100%;
        padding: 0 0 10px 0;
        border: none;
        border-bottom: 1px solid #e0e0e0;
        background-color: transparent;
        outline: none;
        transition: 0.3s;
    }
</style>