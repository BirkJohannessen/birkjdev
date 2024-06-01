<template>
    <div class="wrapper">
        <div class="center">
            <div class ="top">
                <div class="sidebar">
                    <div class="image-wrapper"><img draggable="false" src="../assets/bjcom/birk_lgo.webp" /></div>
                    <div class="about-box">
                        <h2>Birk Johannessen</h2>
                        <h3>💻 Fullstack utvikler</h3>
                        <p>🏢 Machina AS</p>
                        <p>📍 Bergen</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate lorum.</p>
                    </div>
                </div>
                <div class="mainbar">
                    <div class="about-box">
                        <h1>Birk Johannessen</h1>
                        <h2>Fullstack utvikler</h2>
                        <p>Machina AS</p>
                        <p>Bergen</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
                    </div>
                </div>
            </div>
            <div class ="bottom">
                <h2>Highlights</h2>
                <Timeline/>
            </div>
        </div>
        <div class="padding"></div>
    </div>
</template>

<script>
import Timeline from '../components/Timeline'
export default {
    name: 'MainView',
    components: {
        Timeline
    },
    methods: {
        bar() {
        }
    },
    computed: {
        foo(){
        }
    },
    data() {
        return {
            baz: 0,
        }
    },
}
</script>

<style scoped>
    .bottom {
        margin: 400px 0;
        h2 { text-align: center; }
    }
    img {
        width: 100%; height: 100%;
    }
    .wrapper {
        width: 100%; height: 100vh;
        background-color: #292736; color: white;
        display: flex; justify-content: right;
        overflow-y: scroll;
    }
    .center {
        width: 1400px; height: auto;
    }
    .top {
        padding: 100px;
        display: flex; flex-direction: row;
    }
    .padding {
        width: calc(50vw - calc(1400px / 2) - 48px);
    }
    .mainbar {
        padding: 16px 0 15px 8px;
        height: auto; min-width: 450px;
        flex: 1; flex-grow: 1;
        .about-box {
            padding: 12px;
            border-radius: 12px; border: 2px solid #52495d;
            background-color: #000212;
        }
    }
    .sidebar {
        padding: 16px 8px 15px 0;
        width: 450px; height: auto;
        display: flex; flex-direction: column; row-gap: 20px; justify-content: start; 
        .image-wrapper {
            min-height: 450px;
            border-radius: 25vw; border: 2px solid #52495d;
            overflow: hidden;
        }
        .about-box {
            padding: 16px;
            border-radius: 12px; border: 2px solid #52495d;
            background-color: #000212;
        }
    }
</style>
