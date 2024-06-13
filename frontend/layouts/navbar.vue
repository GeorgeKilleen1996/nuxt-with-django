<script setup lang="ts">

const token = useCookie('is_logged_in_token');

const userMenuOpen = ref(false);
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
                <div class="relative">
                    <button type="button" name="UserMenuButton" @click="userMenuOpen = !userMenuOpen" class="w-9 h-9 rounded flex justify-center items-center hover:text-primary hover:bg-primary-10 text-secondary-light">
                        <Icon name="ion:person" />
                    </button>
                    <Transition name="fade-down" mode="out-in">
                        <UIPopover class="absolute -bottom-10 right-0 max-w-40" v-if="userMenuOpen"></UIPopover>
                    </Transition>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fade-down-enter-active, .fade-down-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}
.fade-down-enter-from, .fade-down-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
.fade-down-enter-to, .fade-down-leave-from {
    opacity: 1;
    transform: translateY(0);
}
</style>