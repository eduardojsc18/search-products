<template>
    <button @click="useSidebar().minifyToggle()" :data-tooltip="!useSidebar().minify ? 'Ocultar' : 'Mostrar'" data-tooltip-position="right" type="button" class="btn-header-style max-md:after:!hidden max-md:before:!hidden">
        <svg v-if="useSidebar().minify" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/>
        </svg>
    </button>
</template>
<script setup>
import {useSidebar} from "~/stores/useSidebar.js";
</script>
