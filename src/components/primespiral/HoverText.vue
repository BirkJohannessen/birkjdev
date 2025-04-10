<template>
        <div class="body" :class="this.type ? 'textBody'+this.type : ''">
            <h2>
                {{ this.header}}
            </h2>
            <p>
                {{ this.subText }}
            </p>
        </div>
  
</template>

<script>
export default {
    name: 'HoverText',
    props: {
        header: String,
        subText: String,
        type: String
    },
}
</script>

<style lang="scss" scoped>
    @use '@/assets/stylesheets/vars.scss' as vars;
    @use '@/assets/stylesheets/all.scss' as *;

    p { color: vars.$color-secondary; }

    .body {
        position: absolute;
        padding: vars.$spacing-0;
        background-color: transparent;
        color: vars.$color-secondary;
        z-index: 999;
        text-align: center;
        width: 300px;
        max-width: 30vw;
    }

    .textBody1 {
        left: 20vw;
        top: 40vh;
    }

    .textBody2 {
        left: 75vw;
        top: 55vh;
    }

    .textBody3 {
        left: 50vw;
        top: 30vh;
    }

    .textBody4 {
        left: 50vw;
        top: 30vh;
    }

    .textBody5 {
        left: 50vw;
        top: 50vh;
        transform: translate(-50%, -50%)
    }

    @media only screen and (max-width: vars.$mobile-size) {
        .textBody1 {
            left: 50vw;
            top: 20vh;
            transform: translate(-50%, -50%)
        }

        .textBody2 {
            left: 50vw;
            top: 20vh;
            transform: translate(-50%, -50%)
        }

        .textBody3 {
            left: 50vw;
            top: 20vh;
            transform: translate(-50%, -50%)
        }

        .textBody4 {
            left: 50vw;
            top: 20vh;
            transform: translate(-50%, -50%)
        }

        .textBody5 {
            left: 50vw;
            top: 20vh;
            transform: translate(-50%, -50%)
        }
    }
</style>
