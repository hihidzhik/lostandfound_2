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
    if (currentThing.value.type === 'lost') {
        store.addNewLostedThing(currentThing);
    } else {
        store.addNewFoundThing(currentThing);
    }

}

</script>

<template>
    <div class="main">
        <div class="page_text">
            <div class="page_text">Заполните форму для создания объявления</div>
                <form class="form_style" @submit.prevent="validateAndCreate">
                    <select class="form_input" id="type" name="type" :value="currentThing.type" @input="currentThing.type = $event.target.value">
                        <option value="lost">Потеря</option>
                        <option value="found">Находка</option>
                    </select>
                    <input
                        class="form_input"
                        :value="currentThing.owner"
                        @input="currentThing.owner = $event.target.value"
                        type="text"
                        placeholder="ФИО"
                        required
                        maxlength="50"
                    >
                    <input class="form_input" :value="currentThing.description" @input="currentThing.description =$event.target.value"
                    type="text" placeholder="Описание" required maxlength="100">
                    <input
                        class="form_input"
                        type="tel"
                        placeholder="Номер телефона (формат: х ххх ххх-хх-хх)"
                        :value="currentThing.phone"
                        @input="currentThing.phone = $event.target.value"
                        required
                        pattern="[0-9]{1} [0-9]{3} [0-9]{3}-[0-9]{2}-[0-9]{2}"
                        name="tel"
                        size="20"
                        maxlength="50"
                    >
                    <select
                        required
                        class="form_input"
                        :value="currentThing.category"
                        @input="currentThing.category =$event.target.value"
                    >
                        <option disabled value="">Выберите категорию</option>
                        <option value="other">Прочее</option>
                        <option value="documents">Документы</option>
                        <option value="keys">Ключи</option>
                        <option value="tehnic">Техника</option>
                        <option value="pats">Животные</option>
                        <option value="clothes">Одежда и аксессуары</option>
                        <option value="jewelry">Драгоценности</option>
                        <option value="bags">Сумки</option>
                    </select>
                    <input
                        class="form_input"
                        type="date" :value="currentThing.date"
                        @input="currentThing.date =$event.target.value">
                    <input class="style_button" type="submit" value="Отправить">
                </form>
            </div >
        </div>

</template>

<style scoped>
    .main {
        width: 100%;
        height: 100%;
        background: rgb(238, 237, 237);
    }
    .page_text {
        display: grid;
        color: rgb(0, 0, 0);
        width: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 20px;
        justify-content: center;
    }
    .style_button {
        margin-top: 20px;
        background: rgb(238, 237, 237);
        color: rgb(0, 0, 0);
        padding: 10px 20px;
        border: none;
        width: 150px;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
        transition: 0.3s;
    }
    .form_style {
        font-size: 50px;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 16px #ccc;
        letter-spacing: 1px;
        width: 300px;
        padding: 32px;
        height: 320px;

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