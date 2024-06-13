<script setup lang="ts">
const token = useCookie('is_logged_in_token');
</script>

<template>
    <div class="flex-1 h-14 border-b border-tertiary z-40">
        <div class="flex items-center justify-between h-full px-4" :class="{'container mx-auto md:px-0' : !token}">
            <div class="flex items-center gap-4">
                <NuxtLink to="/" class="text-xl font-bold">NuxtJS</NuxtLink>
            </div>
            <div class="flex items-center gap-4" v-if="!token">
                <NuxtLink to="/auth/login" class="text-sm">Login</NuxtLink>
                <NuxtLink to="/auth/register" class="text-sm">Register</NuxtLink>
            </div>
            <div class="flex items-center gap-4" v-else>
                <button type="button" name="UserMenuButton" class="w-9 h-9 rounded flex justify-center items-center hover:text-primary hover:bg-primary-10 text-secondary-light">
                    <Icon name="ion:person" />
                </button>
            </div>
        </div>
    </div>
</template>