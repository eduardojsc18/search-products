<template>
    <Transition
        enter-active-class="transition ease-in-out duration-500" enter-from-class="max-md:-translate-x-full" enter-to-class="max-md:translate-x-0"
        leave-active-class="transition ease-in-out duration-500" leave-from-class="max-md:translate-x-0" leave-to-class="max-md:-translate-x-full"
    >
        <aside v-show="!useSidebar().minify" class="md:!block max-w-screen h-screen flex-shrink-0 self-stretch group/aside max-md:fixed md:sticky top-0 left-0 md:top-0 z-[9999999] md:pl-2 md:py-2 will-change-transform">
            <nav class="w-[60vw] sm:w-[280px] flex flex-col min-h-full overflow-visible max-md:overflow-y-auto bg-orange-100 dark:bg-neutral-900 shadow-md md:rounded-2xl transition-[width] will-change-[width] duration-500 z-10" :class="{'md:!w-[55px]': useSidebar().minify}">
                <div class="flex justify-between p-3 px-[13px]">
                    <SidebarButtonShow />
                    <ButtonDarkModeToggle class="md:hidden" />
                </div>
                <header class="h-24 flex flex-col p-2 justify-center">
                    <slot name="header" />
                </header>
                <main class="py-4 px-2 space-y-px">
                    <slot />
                </main>
                <footer  class="py-4 space-y-5">
                    <slot name="footer" />
                </footer>
            </nav>
        </aside>
    </Transition>
    <Transition
        enter-active-class="transition ease-out duration-500" enter-from-class="opacity-0" enter-to-class="opacity-100"
        leave-active-class="transition ease-out duration-500" leave-from-class="opacity-100" leave-to-class="opacity-0"
    >
        <div @click.exact="useSidebar().minifyToggle()" v-show="!useSidebar().minify" class="md:hidden bg-neutral-900/90 fixed top-0 left-0 z-[99999] size-full"/>
    </Transition>
</template>
<script setup>
import { useSidebar } from "~/stores/useSidebar.js";
import SidebarButtonShow from "~/components/UI/Layout/Admin/Sidebar/Button/SidebarButtonShow.vue";
import ButtonDarkModeToggle from "~/components/UI/Button/ButtonDarkModeToggle.vue";
</script>
