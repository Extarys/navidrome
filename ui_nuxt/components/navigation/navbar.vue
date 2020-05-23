<template>
    <div>
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
        <v-app-bar :clipped-left="clipped" fixed app>
            <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->

            <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon>
                    mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}
                </v-icon>
            </v-btn>

            <!-- <v-btn icon @click.stop="fixed = !fixed">
                <v-icon>mdi-minus</v-icon>
            </v-btn> -->
            <v-toolbar-title v-text="title" />
            <v-spacer />
            <v-btn icon @click.stop="rightDrawer = !rightDrawer">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
            <v-menu
                bottom
                transition="slide-y-transition"
                close-on-click
                :offset-y="true"
            >
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-avatar>
                            <img
                                src="https://cdn.vuetifyjs.com/images/john.jpg"
                                alt="John"
                            />
                        </v-avatar>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img
                                src="https://cdn.vuetifyjs.com/images/john.png"
                            />
                        </v-list-item-avatar>
                        <v-list-item-title>Jeremy</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="logout">
                        <v-list-item-icon>
                            <v-icon color="indigo">mdi-logout</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Version 0.1</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            clipped: true,
            drawer: true,
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
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Navidrome'
        }
    },
    methods: {
        async logout() {
            await this.$auth.logout()
        }
    }
}
</script>
