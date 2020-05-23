<template>
    <v-container>
        <h1>Login</h1>

        <v-form v-model="valid">
            <v-text-field
                v-model="loginInfo.username"
                label="Name"
                :rules="[required('name')]"
                v-if="hasName"
            />
            <v-text-field
                v-model="loginInfo.password"
                label="Password"
                counter
                :type="showPAssword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                :rules="[required('password'), minLength('password', 8)]"
            />
            <v-btn
                v-text="buttonText"
                @click="submitForm(userInfo)"
                :disabled="!valid"
            />
        </v-form>
    </v-container>
</template>
<script>
import validations from '@/utils/validations'
export default {
    data() {
        return {
            valid: false,
            showPassword: false,
            loading: false,
            loginInfo: {
                username: '',
                password: ''
            },
            ...validations
        }
    },
    methods: {
        async submitForm() {
            this.loading = true
            try {
                await this.$auth.loginWith('local', {
                    data: loginInfo
                })
                this.$store.dispatch('snackbar/setSnackbar', {
                    text: `Thanks for signing in, ${this.$auth.user.name}`
                })
                this.postLoginAction()
            } catch {
                this.$store.dispatch('snackbar/setSnackbar', {
                    color: 'red',
                    text: 'There was an issue signing in. Please try again.'
                })
            }

            this.loading = false
        }
    },
    props: {
        postRegisterAction: {
            type: Function,
            default: () => {}
        }
    }
    // props: ['submitForm', 'buttonText', 'hasName']
}
</script>
<style lang="scss" scoped></style>
