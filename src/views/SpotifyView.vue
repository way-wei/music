<template>
  <div>
    <div class="mt-5"></div>
    <v-btn color="#ecebc3" to="/">回首頁</v-btn>
    <div class="mt-5"></div>
    <v-row justify="center">
        <v-col cols="12" sm="6">
            <v-text-field label="搜尋藝人" variant="solo-filled" v-model="search"></v-text-field>
        </v-col>
    </v-row>
    <v-btn @click="getSpotifyData">查詢</v-btn>
    <div class="mt-5"></div>
    <v-row justify="center" cols="6">
        <div v-if="count > 0">
        <h2>Total Artists: {{ listData.artists.totalCount }}</h2>
        <v-card v-for="item in listData.artists.items" :key="item.data.uri" class="pa-4 mb-4">
            <h3>{{ item.data.profile.name }}</h3>
            <img :src="getAvatarUrl(item)" :alt="item.data.profile.name" width="200" height="200">
        </v-card>
        </div>
        <div v-else>
        <p>No artists found.</p>
        </div>
    </v-row>
  </div>
</template>

<script>
import { ref, } from 'vue';
import { spotifyData } from '../services/music';
export default {
    
    setup(){
        const search = ref('');
        const listData = ref({
                            artists: {
                                totalCount: 0,
                                items: [
                                {
                                    data: {
                                    uri:"",
                                    profile: {
                                        name:"",
                                    },
                                    visuals: {
                                        avatarImage: {
                                        sources: [
                                            {
                                            url:"",
                                            width:0,
                                            height:0,
                                            },
                                        ]
                                        }
                                    }
                                    }
                                },
        
                ]
            }
            });
        var count = ref(0);



        const getSpotifyData = () =>{
            spotifyData({
                artist: search.value,
            }).then(res => {
                console.log(res.data); 
                listData.value = res.data;
                if(listData.value != null){
                    if(listData.value.artists != null){
                        count.value = listData.value.artists.totalCount;
                        console.log(count.value);
                    }
                    
                }
            });
        }

        const getAvatarUrl = (item) => {
        return item.data.visuals.avatarImage.sources[0].url; // 這裡需要根據實際資料結構來取得正確的頭像 URL
        }

        return{
            search,
            listData,
            count,
            getSpotifyData,
            getAvatarUrl,
        }
    }
}
</script>

<style>

</style>