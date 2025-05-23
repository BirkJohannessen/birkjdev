<script setup lang="ts">
    import { onBeforeMount } from 'vue'; 
    import { marked } from 'marked';
    import hljs from 'highlight.js/lib/core';
    import javascript from 'highlight.js/lib/languages/javascript';
    import python from 'highlight.js/lib/languages/python';

    const props = defineProps(['blog']);

    const isLang = (text: string) => {
        const patterns = [
            /\b(function|const|let|if|else|class|return|def|import|while)\b/, // Common keywords
        ];
        return patterns.some((pattern) => pattern.test(text));
    };

    const fetchRemoteBlog = async() => {
        const response = await fetch(props.blog.remoteURL);

        let markdownContent: string = await response.text();
        markdownContent = markdownContent.replace(/\/blob\//g, '/raw/');
        markdownContent = await Promise.resolve(marked.parse(markdownContent));

        const mdcEl: HTMLElement | null = document.getElementById('md-content');
        if (mdcEl != null) {
            mdcEl.innerHTML = markdownContent;
        }

        hljs.registerLanguage('javascript', javascript);
        hljs.registerLanguage('python', python);
        document.querySelectorAll('pre code').forEach((block: Element) => {
            if (!(block instanceof HTMLElement)) return;
            if (isLang(block.innerHTML)) {
                hljs.highlightElement(block);
            }
        });
    };

    onBeforeMount(() => {
        if (props.blog.type === 'remote') {
            fetchRemoteBlog();
        }
    });
</script>

<template>
    <div class="wrapper">
        <div class="content-wrapper">
            <div id="md-content">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '@/assets/stylesheets/vars.scss' as vars;
    @use '@/assets/stylesheets/all.scss' as *;
    @use '@/assets/stylesheets/markdown.scss' as md;

    .content-wrapper {
        padding: vars.$spacing-5;
    }

    @media (max-width: vars.$mobile-size) {
        .content-wrapper {
            padding: vars.$spacing-3;
        }
        #md-content {
            animation: fadeIn 2s;
            overflow: hidden;
        }
    }
</style>
