<script setup lang="ts">
import type { LoginDetails } from '../../types/auth/LoginDetails';

const props = defineProps<{
    loading: Ref<boolean>;
}>();

const loginDetails = reactive<LoginDetails>({
    email: '',
    password: '',
});

const emit = defineEmits(['login']);

const login = () => {
    emit('login', loginDetails);
};
</script>

<template>
    <form @submit.prevent="login" class="w-full flex flex-col">
        <input v-model="loginDetails.email" type="email" placeholder="Email" class="w-full border rounded p-2" />
        <input v-model="loginDetails.password" type="password" placeholder="Password" class="w-full border rounded p-2 mt-2" />
        <button type="submit" :disabled="loading" class="w-full bg-blue-500 text-white rounded p-2 mt-2">Login</button>
    </form>
</template>