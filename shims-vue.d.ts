declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module '*.png' {
    const path: string;
    export default path;
}

declare module '*.jpg' {
    const path: string;
    export default path;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.webp' {
    const content: string;
    export default content;
}


declare module 'hammerjs' {
    const hammertime: any;
    export default hammertime;
}
