<script setup lang="ts">
import type { LoginDetails } from '../../types/auth/LoginDetails';

const loading = ref(false);

const login = async (loginDetails: LoginDetails) => {
  loading.value = true;
    await useFetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginDetails),
      onResponse: (data) => {
        const token = data.response._data;
        console.log(token)
        loading.value = false;
      },
      onRequestError: (error) => {
        console.error(error);
      },
      onResponseError: (error) => {
        console.error(error);
      },
    });
}
</script>

<template>
    <div class="w-full h-[calc(100vh-3.5rem)] flex justify-center items-center">
        <div class="w-full max-w-sm border shadow-xs rounded p-4 flex flex-col gap-4 items-center">
            <div class="w-full flex flex-col items-center">
              <div class="w-20 h-20 rounded-full border"></div>
              <h1 class="text-2xl font-bold text-center mt-2">Welcome back!</h1>
              <span class="text-sm font-light text-center">Enter your email and password to login.</span>
            </div>
            <AuthLoginForm @login="login" />
            <div class="flex flex-col text-xs text-center">
              <span>Don't have an account? <NuxtLink to="/auth/register">Register here</NuxtLink>.</span>
              <span>Can't login? <NuxtLink to="/auth/reset-password">Reset your password</NuxtLink>.</span>
            </div>
        </div>
    </div>
</template>