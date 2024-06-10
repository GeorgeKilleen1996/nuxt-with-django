<script setup lang="ts">
const token = useCookie('is_logged_in_token');
</script>

<template>
    <div class="flex-1 h-14 border-b">
        <div class="flex items-center justify-between h-full container mx-auto px-4 md:px-0">
            <div class="flex items-center gap-4">
                <NuxtLink to="/" class="text-xl font-bold">NuxtJS</NuxtLink>
            </div>
            <div class="flex items-center gap-4" v-if="!token">
                <NuxtLink to="/auth/login" class="text-sm">Login</NuxtLink>
                <NuxtLink to="/auth/register" class="text-sm">Register</NuxtLink>
            </div>
            <div class="flex items-center gap-4" v-else>
                <div class="w-9 h-9 rounded"></div>
            </div>
        </div>
    </div>
</template>