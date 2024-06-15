<script setup lang="ts">

const token = useCookie('is_logged_in_token');
const router = useRouter();

const userMenuOpen = ref(false);

const logout = () => {
    token.value = null;
    userMenuOpen.value = false;
    router.push('/auth/login');
}
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
                    <button 
                        type="button" 
                        name="UserMenuButton" 
                        @click="userMenuOpen = !userMenuOpen" 
                        class="w-9 h-9 rounded flex justify-center items-center"
                        :class="{'bg-primary-10 text-primary hover:text-primary-light' : userMenuOpen, 'hover:text-primary hover:bg-primary-10 text-secondary-light': !userMenuOpen}">
                        <Icon name="ion:person" />
                    </button>
                    <Transition name="fade-down" mode="out-in">
                        <UIPopover class="w-40 flex flex-col gap-2 h-fit absolute top-[calc(100%+0.25rem)] right-0" v-if="userMenuOpen">
                            <div class="w-full flex gap-2 items-center">
                                <div class="w-8 h-8 rounded-full border border-tertiary overflow-hidden"></div>
                                <div class="flex flex-col">
                                    <span class="text-xs text-primary">John Doe</span>
                                    <span class="text-xs text-secondary-light">Role</span>
                                </div>
                            </div>
                            <div class="w-full h-0 border-b border-tertiary"></div>
                            <div class="w-full h-0 border-b border-tertiary"></div>
                            <button type="button" @click="logout" name="LogoutButton" class="flex gap-2 rounded hover:bg-primary-10 p-2.5 items-center hover:text-primary text-secondary-light w-full">
                                <Icon name="ion:log-out" />
                                <span class="text-xs">Sign Out</span>
                            </button>
                        </UIPopover>
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