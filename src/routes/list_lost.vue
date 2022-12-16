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
        <div class="page_text">Список потерь</div><div>Категория</div>
        <div class="card_block">
            <div class="card" v-for="thing in mainStore.lostedThings">
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

<style >
    .main {
        width: 100%;
        height: 100%;
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


    .page_text {
        display: flex;
        justify-content: center;
        font-size: 25px;
        padding-top: 2%;
        padding-bottom: 2%;
        color: rgb(0, 0, 0);


    } 
</style>

<!-- 
camelCase
PascalCase
snack_case
kebab-case -->