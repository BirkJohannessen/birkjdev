<template>
        <div :class="'textBody'+this.type">
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

<style scoped>
.textBody1{
    position: absolute;
    padding: 1em;
    background-color: transparent;
    color: white;
    left: 20vw;
    top: 40vh;
    border-radius: 10px;
    z-index: 999;
    min-width: 30vw;
    max-width: 30vw;
}
.textBody2{
    position: absolute;
    padding: 1em;
    background-color: transparent;
    color: white;
    left: 75vw;
    top: 55vh;
    border-radius: 10px;
    z-index: 999;
    min-width: 15vw;
    max-width: 20vw;
}
.textBody3{
    position: absolute;
    padding: 1em;
    background-color: transparent;
    color: white;
    left: 50vw;
    top: 30vh;
    border-radius: 10px;
    z-index: 999;
    max-width: 20vw;
    transform: translate(-50%, -50%);
    text-align: center;
}
.textBody4{
    position: absolute;
    padding: 1em;
    background-color: transparent;
    color: white;
    left: 50vw;
    top: 30vh;
    border-radius: 10px;
    z-index: 999;
    max-width: 20vw;
    min-width: 30vw;
}
.textBody5{
    position: absolute;
    padding: 1em;
    background-color: transparent;
    color: white;
    left: 50vw;
    top: 40vh;
    border-radius: 10px;
    z-index: 999;
    max-width: 20vw;
    transform: translate(-50%, -50%);
    text-align: center;
}

@media only screen and (max-width: 768px) {
    .textBody1{
        position: absolute;
        padding: 1em;
        background-color: transparent;
        color: white;
        left: 10vw;
        top: 20vh;
        border-radius: 10px;
        z-index: 999;
        max-width: 70vw;
        min-width: 50vw;
    }
    .textBody2{
        position: absolute;
        padding: 1em;
        background-color: transparent;
        color: white;
        left: 10vw;
        top: 60vh;
        border-radius: 10px;
        z-index: 999;
        max-width: 70vw;
        min-width: 30vw;
    }
    .textBody3{
        position: absolute;
        padding: 1em;
        background-color: transparent;
        color: white;
        left: center;
        top: center;
        border-radius: 10px;
        z-index: 999;
        left: 50vw;
        top: 20vh;
        transform: translateX(-50%);
        max-width: 70vw;
        text-align: center;
    }
    .textBody4{
        position: absolute;
        padding: 1em;
        background-color: transparent;
        color: white;
        left: center;
        top: center;
        border-radius: 10px;
        z-index: 999;
        left: 10vw;
        top: 10vh;
        min-width: 30vw;
        max-width: 70vw;
    }
    .textBody5 {
        position: absolute;
        padding: 1em;
        background-color: transparent;
        color: white;
        left: center;
        top: center;
        border-radius: 10px;
        z-index: 999;
        left: 50vw;
        top: 43vh;
        transform: translateX(-50%);
        max-width: 70vw;
        text-align: center;
    }
}
</style>