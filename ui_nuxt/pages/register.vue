<template>
    <v-container>
        <h1>Login</h1>

        <v-form v-model="valid">
            <v-text-field
                v-if="hasName"
                v-model="userInfo.username"
                label="Name"
                :rules="[required('name')]"
            />
            <v-text-field
                v-model="userInfo.email"
                label="email"
                :rules="[required('email')]"
            />
            <v-text-field
                v-model="userInfo.password"
                label="Password"
                counter
                :type="showPAssword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[required('password'), minLength('password', 8)]"
                @click:append="showPassword = !showPassword"
            />
            <v-btn
                :disabled="!valid"
                @click="submitForm(userInfo)"
                v-text="buttonText"
            />
        </v-form>
    </v-container>
</template>
<script>
// import validations from "@/utils/validations";
export default {
    data() {
        return {
            valid: false,
            showPassword: false,
            userInfo: {
                email: '',
                username: '',
                password: ''
            }
        }
    }
    // props: ['submitForm', 'buttonText', 'hasName']
}
</script>
<style lang="scss" scoped></style>
