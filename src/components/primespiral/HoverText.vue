<template>
        <div class="body" :class="this.type ? 'textBody'+this.type : ''">
            <h1>
                {{ this.header}}
            </h1>
            {{ this.subText }}
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
@import '@/assets/stylesheets/all.scss';
.body {
    position: absolute;
    padding: $spacing-0;
    background-color: transparent;
    color: $color-secondary;
    z-index: 999;
    text-align: center;
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
    top: 40vh;
}

@media only screen and (max-width: $mobile-size) {
    .textBody1 {
        left: center;
        top: center;
    }

    .textBody2 {
        left: center;
        top: center;
    }

    .textBody3 {
        left: center;
        top: center;
    }

    .textBody4 {
        left: center;
        top: center;
    }

    .textBody5 {
        left: center;
        top: center;
    }
}
</style>
