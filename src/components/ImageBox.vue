<template lang="html">
    <div v-on:click="handleClick" class="w-40">
        <Moveable
                style="width: 200px; height: 200px"
                class="moveable"
                v-bind="moveable"
                @drag="handleDrag"
                @resize="handleResize"
                @rotate="handleRotate"
        >
            <img :src="getImgUrl($attrs.img)" style="width: 100%; height: 100%"/>
        </Moveable>
    </div>
</template>

<script>

    import Moveable from 'vue-moveable'

    export default {
        name: 'ImageBox',
        components: {
            Moveable,
        },
        data: () => ({
            moveable: {
                draggable: true,
                throttleDrag: 0,
                resizable: true,
                throttleResize: 1,
                keepRatio: false,
                scalable: false,
                throttleScale: 0,
                rotatable: true,
                throttleRotate: 0,
                pinchable: true, // ["draggable", "resizable", "scalable", "rotatable"]
                origin: false,
            }
        }),
        methods: {
            handleClick(event) {
                event.target.focus();
            },
            handleDrag({ target, transform }) {
                target.style.transform = transform;
            },
            handleResize({
                             target, width, height, delta,
                         }) {
                delta[0] && (target.style.width = `${width}px`);
                delta[1] && (target.style.height = `${height}px`);
            },
            handleRotate({ target, dist, transform }) {
                dist;
                target.style.transform = transform;
            },
            getImgUrl(img) {
                var images = require.context('../assets/', false, /\.svg$/);
                return images('./' + img + ".svg")
            }
        }
    }
</script>

<style lang="css" scoped>
</style>
