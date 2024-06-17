<template>
    <div>
        <div class="mt-5"></div>
        <v-btn color="#ecebc3" to="/">回首頁</v-btn>
        <div class="mt-5"></div>
        <h3>你的音樂收藏清單</h3>
        <div class="mt-5"></div>
        <v-row justify="center">
            <v-col cols="12" sm="6">
                <v-card v-for="(item, index) in listData" :key="index" class="pa-4 mb-2" color="#17163c">
                    <v-card-title>
                        {{ item.name }}
                    </v-card-title>
                    <v-card-text>
                        {{ item.artist }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
  </template>

<script>
import { ref, onMounted } from 'vue';
import { createMusic, getAllMusics } from '../services/music';
export default {
    setup(){
        const name = ref('');
        const artist = ref('');
        const listData = ref([]);

        onMounted(() => {
            getAll();
        });

        const getAll = () => {
            getAllMusics().then(res => {
                console.log('data:', res);
                listData.value = res.data;
            }).catch(error => {
                alert('取得音樂清單失敗' + error);
            });
        };

        const storeMusic = () => {
            createMusic({
                name: name.value,
                artist: artist.value,
            }).then(res => {
                alert(res.message);
                getAll();
            }).catch(error => {
                alert('新增失敗' + error);
            });
        };

        return{
            name,
            artist,
            listData,
            getAll,
            storeMusic,
        }
    }
}
</script>

<style>

</style>