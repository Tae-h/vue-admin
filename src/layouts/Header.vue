<!--
    용도: Header
-->

<template>

  <v-app-bar
      :clipped-left="currentClipped"
      fixed
      dark
      app>

    <v-app-bar-nav-icon
        v-if="menuType === 'drawer'"
        v-model="currentDrawer"
        @click.stop="onClick(menuType, currentDrawer)"
    />

    <v-btn
        v-if="menuType === 'miniVariant'"
        icon
        v-model="currentMiniVariant"
        @click.stop="onClick(menuType, currentMiniVariant)"
    >
      <v-icon>mdi-{{ `chevron-${currentMiniVariant ? 'right' : 'left'}` }}</v-icon>
    </v-btn>

    <v-btn
        v-if="menuType === 'clipped'"
        icon
        v-model="currentClipped"
        @click.stop="onClick(menuType, currentClipped)"
    >
      <v-icon>mdi-application</v-icon>
    </v-btn>

    <v-btn
        v-if="menuType === 'fixed'"
        icon
        v-model="currentFixed"
        @click.stop="onClick(menuType, currentFixed)"
    >
    </v-btn>

    <v-toolbar-title v-text="title" />

    <v-spacer />

  </v-app-bar>


</template>

<script>

    export default {
        name: "Header",
        props: {
          title: {
            type: String,
            default: '',
          },
          menuType: {
            type: String,
            default: 'drawer',
          },
          drawer: {
            type: Boolean,
            default: false,
          },
          miniVariant: {
            type: Boolean,
            default: false,
          },
          clipped: {
            type: Boolean,
            default: false,
          },
          fixed: {
            type: Boolean,
            default: false,
          },

        },
        data() {
          return {
            currentDrawer: false,
            currentMiniVariant: false,
            currentClipped: false,
            currentFixed: false
          }
        },
        computed: {

        },

        methods: {
            onClick(type, val) {

              if ( type === 'drawer' ) {
                this.currentDrawer = !val;
              } else if ( type === 'miniVariant' ) {
                this.currentMiniVariant = !val;
              } else if ( type === 'clipped' ) {
                this.currentClipped = !val;
              } else if ( type === 'fixed') {
                this.currentFixed = !val;
              }

              this.$emit('click', type, !val);
            }
        },
        watch: {
            drawer(newVal) {
              this.currentDrawer = newVal;
            },
            miniVariant(newVal) {
              this.currentMiniVariant = newVal;
            },
            clipped(newVal) {
              this.currentClipped = newVal;
            },
            fixed(newVal) {
              this.currentFixed = newVal;
            }

        },
        mounted() {

        },
        created() {

        },
        updated() {

        }
    }
</script>

<style scoped lang="scss">

</style>


