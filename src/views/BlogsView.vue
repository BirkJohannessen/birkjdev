<script setup lang="ts">
    import { blogs } from '@/config/BlogConfig';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const pushBlog = (id: number) => {
        router.push({ path: `/blog/${id}` });
    };
</script>

<template>
    <div class="wrapper">
        <div class="content-wrapper">
            <p class="introduction">blogs <span class="write">$ ls -l</span></p>
            <section>
                <div class="articles">
                    <div v-for="(blog, idx) in blogs">
                        <div :class="['card', `blog-${idx}`]" @click="pushBlog(blog.id)">
                            <h2>{{ blog.title }}</h2>
                            <p>{{ blog.description }}</p>
                            <time>{{ blog.parseDate() }}</time>
                            <div class="imgholder">
                                <img v-if="blog.contentImg" :src="blog.contentImg" :alt="blog.title">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/assets/stylesheets/all.scss' as *;
    @use '@/assets/stylesheets/vars.scss' as vars;

    .content-wrapper {
        padding: vars.$spacing-5 vars.$spacing-2 vars.$spacing-1 vars.$spacing-2 ;
    }

    .articles {
        display: flex; flex-wrap: wrap; gap: vars.$spacing-3; justify-content: center;
        padding: vars.$spacing-1 0;
    }

    .card {
        text-align: center;
        max-width: 500px;
        height: 400px;
        background-color: vars.$primary-offset;
        display: flex; flex-direction: column;
        padding: vars.$spacing-4;
        cursor: pointer;
        position: relative;
        transition: transform 0.4s;
        animation: fadeIn 1s forwards; opacity: 0;
        &:hover {
            transform: translateY(- vars.$spacing-1);
        }

        &.blog-0 { animation-delay: .7s }
        &.blog-1 { animation-delay: .85s }
        &.blog-2 { animation-delay: 1s }
        &.blog-3 { animation-delay: 1.15s }
        &.blog-4 { animation-delay: 1.3s }
        &.blog-5 { animation-delay: 1.45s }
    }

    time {
        font-size: var(--step--1);
        color: vars.$tetriary;
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
        margin-bottom: vars.$spacing-3;
        .write {
            color: vars.$tetriary;
            clip-path: inset(0 0 0 0);
            animation: write 0.6s ease-in-out forwards;
        }
    }

    @media (max-width: vars.$mobile-size) {
    }
</style>
