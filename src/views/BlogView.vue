<template>
    <div class="wrapper">
        <div class="content-wrapper">
            <div id="md-content">
            </div>
        </div>
    </div>
</template>

<script>
import { marked } from 'marked';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
export default {
    name: 'Blog',
    beforeMount() {
        if (this.blog.type === 'remote') {
            this.fetchRemoteBlog();
        }
    },
    props: {
        blog: Object
    },
    methods: {
        isLang(text) {
            const patterns = [
                /\b(function|const|let|if|else|class|return|def|import|while)\b/, // Common keywords
            ];
            return patterns.some((pattern) => pattern.test(text));
        },
        async fetchRemoteBlog() {
            const response = await fetch(this.blog.remoteURL);
            let markdownContent = await response.text();
            markdownContent = markdownContent.replace(/\/blob\//g, '/raw/');
            document.getElementById('md-content').innerHTML = marked.parse(markdownContent);
            hljs.registerLanguage('javascript', javascript);
            hljs.registerLanguage('python', python);
            document.querySelectorAll('pre code').forEach((block) => {
                if (this.isLang(block.innerHTML)) {
                    hljs.highlightElement(block);
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/stylesheets/all.scss';

    .content-wrapper {
        padding: $spacing-5;
    }

    @media (max-width: $mobile-size) {
        .content-wrapper {
            padding: $spacing-3;
        }
        #md-content {
            animation: fadeIn 2s;
            overflow: hidden;
        }
    }
</style>
