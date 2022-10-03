<template>
  <v-app dark>
    <!-- menu -->
    <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        app
    >
      <v-list>
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- header  -->
    <Header
        :title="title"
        :menu-type="menuType"
        :drawer="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        :fixed="fixed"
        @click="clickType"
    />

    <!-- contents   -->
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>

    <!-- footer   -->
    <Footer />

  </v-app>
</template>

<script>


import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";


export default {
  name: 'App',
  components: {
    Header,
    Footer,

  },
  data () {
    return {
      title: 'title 제목 입니다.',
      menuType: 'clipped',
      drawer: true,
      miniVariant: false,
      clipped: false,
      fixed: false,

      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
    }
  },
  methods: {
    clickType(type, val) {

      if ( type === 'drawer' ) {
        this.drawer = val;
      } else if ( type === 'miniVariant' ) {
        this.miniVariant = val;
      } else if ( type === 'clipped' ) {
        this.clipped = val;
      } else if ( type === 'fixed' ) {
        this.fixed = val;
      }

      console.log(type, val);
    }
  },
  computed: {

  }
};
</script>
