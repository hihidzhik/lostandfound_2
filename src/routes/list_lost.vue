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
        <div>
            <p>Taganrog</p>
            <router-link class="page2" to="/index">Вернуться на главную</router-link>
        </div>
        <div class="losts">
            <div class="card" v-for="thing in mainStore.things">
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
    .main{
        width: 100%;
        height: 100%;
        background: rgb(238, 237, 237);
        margin: 0%;
        font-size: 25px;
    }
    .main p
    .card{
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 16px #ccc;
        letter-spacing: 1px;
        width: 300px;
        padding: 32px;
        height: 300px;
        position: absolute;
    }
    .losts{
        margin: 0%;
        margin-left: 400px;
        position: absolute;
        color: rgb(0, 0, 0);
        text-align: left;
        font-size: 20px;
    }
    .page2{
        color: rgb(0, 0, 0);
        text-align: left;
        font-size: 20px;
        position: absolute;
    }
</style>

<!-- 
camelCase
PascalCase
snack_case
kebab-case -->