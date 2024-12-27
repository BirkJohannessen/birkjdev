<template>
    <div class="wrapper">
        <div class="content-wrapper">
            <p class="introduction">blogs <span class="write">$ ls -l</span></p>
            <section>
                <div class="articles">
                    <div v-for="blog in blogs">
                        <div class="card" @click="push({ path: `/blog/${blog.id}` })">
                            <h2>{{ blog.title }}</h2>
                            <p>{{ blog.description }}</p>
                            <time>{{ blog.date }}</time>
                            <div class="imgholder">
                                <img v-if="blog.contentImg" :src="blog.contentImg">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { marked } from 'marked';
import blogConfig from '@/assets/blogs/BlogConfig.js'
export default {
    name: 'Blogs',
    computed: {
        blogs() {
            return blogConfig;
        }
    },
    methods: {
        push(path) {
            this.$router.push({ path: path.path }).then(() => this.$forceUpdate());
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/stylesheets/vars.scss';

    .content-wrapper {
        padding: $spacing-5 $spacing-2 $spacing-1 $spacing-2 ;
    }

    .articles {
        clip-path: inset(0 0 0 0);
        animation: writeDelay 2.5s;
        display: flex; flex-wrap: wrap; gap: $spacing-3; justify-content: center;
        padding: $spacing-1 0;
    }

    .card {
        text-align: center;
        max-width: 500px;
        height: 400px;
        background-color: $primary-offset;
        display: flex; flex-direction: column;
        padding: $spacing-4;
        cursor: pointer;
        position: relative;
        transition: transform 0.4s;
        &:hover {
            transform: translateY(-$spacing-1);
        }
    }

    time {
        font-size: var(--step--1);
        color: $tetriary;
        text-align: right;
    }

    .imgholder {
        width: 100%;
        position: relative;
        overflow: hidden; 
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        img {
            object-fit: cover;
            position: absolute;
            max-width: 100%;
            min-height: 100%;
        }
    }

    .introduction {
        max-width: 250px;
        margin-left: 17%;
        margin-bottom: $spacing-3;
        .write {
            color: $tetriary;
            clip-path: inset(0 0 0 0);
            animation: write 0.6s ease-in-out forwards;
        }
    }

    @media (max-width: $mobile-size) {
    }
</style>
