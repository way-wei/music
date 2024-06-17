<template>
    <div>
        <div class="mt-5"></div>
        <v-btn color="#ecebc3" to="/">回首頁</v-btn>
        <div class="mt-5"></div>
        <v-row justify="center">
            <v-col cols="12" sm="6">
                <v-container>
                    <v-row justify="space-around">
                    <v-date-picker show-adjacent-months v-model="selectedDate"></v-date-picker>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
        <div class="mt-5"></div>
        <v-btn @click="getDatas">查詢</v-btn>
        <div class="mt-5"></div>
        <v-row justify="center" cols="6">
            <div>
                <v-card v-for="(item, index) in listData.content" :key="index" class="pa-4 mb-4">
                    <v-card-title>
                    {{ item.title }}
                    </v-card-title>
                    <v-card-text>
                    <div>Rank: {{ item.rank }}</div>
                    <div>Artist: {{ item.artist }}</div>
                    <div>Weeks at No. 1: {{ item['weeks at no.1'] }}</div>
                    <div>Last Week: {{ item['last week'] }}</div>
                    <div>Peak Position: {{ item['peak position'] }}</div>
                    <div>Weeks on Chart: {{ item['weeks on chart'] }}</div>
                    <div>Detail: {{ item.detail }}</div>
                    </v-card-text>
                    <v-btn @click="storeMusic(item)">加入收藏</v-btn>
                </v-card>
            </div>
        </v-row>
      
    </div>
  </template>

<script>
import { ref, } from 'vue';
import { getData,createMusic } from '../services/music';

export default {
  setup() {
    const selectedDate = ref(new Date()); ;
    const listData = ref({
      info: {},
      content: {},
    });
    
   
    const getDatas = () => {
        getData({
            date: selectedDate.value.toLocaleDateString('en-CA'),
        }).then(res => {
            console.log(res); 
            listData.value = res.data;
        });
    };

    const storeMusic = (item) => {
            createMusic({
                name: item.rank,
                artist: item.title,
            }).then(res => {
                alert(res.message);
            }).catch(error => {
                alert('新增失敗' + error);
            });
        };

    return {
      selectedDate,
      listData,
      getDatas,
      storeMusic
    };
  }
};
</script>

<style>

</style>