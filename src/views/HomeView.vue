<template>
  <div>
    <div class="mt-5"></div>
    <v-row justify="center">
      <v-col cols="12" sm="6">
      <v-card class="pa-4 mb-4" color="#17163c">
        <v-img
          src="../assets/listenMusic.jpeg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Billboard Hot 100 排行榜</h3>
          </div>
        </v-card-title>
        <v-btn color="#ecebc3" to="/rank">前往</v-btn>
      </v-card>

      <v-card class="pa-4 mb-4" color="#17163c">
        <v-img
          src="../assets/spotify.png"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Spotify Album Search</h3>
          </div>
        </v-card-title>
        <v-btn class="ma-2" color="#ecebc3" to="/spotify">前往</v-btn>
      </v-card>

      <v-card class="pa-4 mb-4" color="#17163c">
        <v-img
          src="../assets/skzoo.jpeg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">收藏</h3>
          </div>
        </v-card-title>
        <v-btn class="ma-2" color="#ecebc3" to="/collect">前往</v-btn>
      </v-card>

    </v-col>
  </v-row>
  </div>
  
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
  },
});
</script>
