<template>
    <div class="wrapper">
        <div class="miss-content">
            <h2>
                418 - I'm a teapot 🫖
            </h2>
            <h3>
                The HTTP 418 I'm a teapot client error response code indicates that the server refuses to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee should instead return 503.
            </h3>
        </div>
        <div class="padding"></div>
    </div>
</template>

<script>
export default {
    name: 'FallbackView',
}
</script>

<style scoped>
    .wrapper {
        width: 100%; height: 100vh;
        display: flex; justify-content: right; overflow-y: scroll;
        background-color: #292736; color: white;
    }

    .miss-content{
        width: 400px;
        padding: 50px; margin: auto 0;
        background-color: #000212; border-radius: 12px; border: 2px solid #52495d; text-align: center;
    }

    .padding {
        width: calc(50vw - calc(400px / 2) - 102px);
    }
</style>

