<script setup lang="ts">
</script>

<template>
    <div class="wrapper">
        <div class="miss-content">
            <h2>
                418 - I'm a teapot 🫖
            </h2>
            <p>
                The HTTP 418 I'm a teapot client error response code indicates that the server refuses to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee should instead return 503.
            </p>
        </div>
        <div class="padding"></div>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/assets/stylesheets/all.scss' as *;
    @use '@/assets/stylesheets/vars.scss' as vars;

    .wrapper {
        width: 100%; height: 100dvh;
        display: flex; justify-content: right; overflow-y: scroll;
        background-color: vars.$primary; color: vars.$color-secondary;
    }

    .miss-content {
        width: 400px;
        padding: vars.$spacing-6; margin: auto 0;
        background-color: vars.$secondary; border-radius: vars.$spacing-2; text-align: center;
    }

    .padding {
        width: calc(50vw - calc(400px / 2) - 102px);
    }
</style>

