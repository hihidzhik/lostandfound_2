<script setup>
  import { useStore } from '../store/main';

const mainStore = useStore();

const map = {
    'lost': 'Потеря',
    'found': 'Находка',
}
const category = {
    'other': 'Прочее',
    'documents': 'Документы',
    'keys': 'Ключи',
    'tehnic': 'Техника',
    'pats': 'Животные',
    'clothes': 'Одежда и аксессуары',
    'jewelry': 'Драгоценности',
    'bags': 'Сумки',
}
</script>

<template>
    <div class="main">
        <div class="page_text">Список находок</div>
        <div class="card_block">
            <div class="card" v-for="thing in mainStore.foundThings">
                <p>{{ 'Тип: '+ map[thing.type]}}</p>
                <p>{{'ФИО: '+ thing.owner}}</p>
                <p>{{' Описание: ' + thing.description }}</p>
                <p>{{' Номер телефона: ' + thing.phone }}</p>
                <p>{{'  Категория: ' + category[thing.category] }}</p>
                <p>{{' Дата: ' + thing.date }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    
    .main {
        width: 100%;
        height: 100%;
        background: rgb(238, 237, 237);
    }
    .page_text {
        display:flex;
        color: rgb(0, 0, 0);
        justify-content:center;
        font-size: 25px;
    }
    .card_block {
        display: grid;
        margin: 0 30px;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        padding-bottom: 10px;
    }

    .card {
        display: block;
        flex-wrap: wrap;
        overflow-wrap:break-word;
        color: rgb(0, 0, 0);
        font-size: 20px;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 16px #ccc;
        letter-spacing: 1px;
        padding: 10px;
        max-width: 400px;
    }
</style>