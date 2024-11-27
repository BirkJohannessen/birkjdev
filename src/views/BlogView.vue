<template>
    <div class="wrapper">
        <div id="md-content">
        </div>
    </div>
</template>

<script>
import { marked } from 'marked';
export default {
    name: 'Blog',
    beforeMount() {
        console.log(this.blog);
        if (this.blog.type === 'remote') {
            this.fetchRemoteBlog();
        }
    },
    props: {
        blog: Object
    },
    methods: {
        async fetchRemoteBlog() {
            const response = await fetch(this.blog.remoteURL);
            let markdownContent = await response.text();
            markdownContent = markdownContent.replace(/\/blob\//g, '/raw/');
            document.getElementById('md-content').innerHTML = marked.parse(markdownContent);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/stylesheets/all.scss';

    .wrapper {
        padding: $spacing-5;
    }

    @media (max-width: $mobile-size) {
        .wrapper {
            padding: $spacing-1;
        }
        #md-content {
            animation: fadeIn 2s;
        }
    }
</style>
