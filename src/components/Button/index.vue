<template>
    <Container :inline="inline" >
        <slot></slot>
        <i v-if="showIcon" class="iconfont" :class="iconClass"/>
        <Title v-if="showTitle" :inline="inline"  :style="titleStyle">
            {{title}}
        </Title>
    </Container>
</template>

<script>
    import {Container,Title} from './style'
    export default {
        props: {
            iconClass: {
               type: String,
               required: false
            },
            title: {
                type: String,
                required: false
            },
            titleStyle: {
                type: Object,
                default: () => ({})
            },
            inline: {
                type: Boolean,
                default: false
            },
            outline: {
                type: Boolean,
                default: false
            }
        },
        data: () =>　({
        }),
        computed: {
            buttonTheme() {
                return this.theme + "-button" + (this.outline ? '-outline' : '')
            },
            showIcon() {
                return this.showTitle && this.iconClass && this.iconClass.trim() !== ""
            },
            showTitle() {
                return !this.$slots.default || this.$slots.default.length === 0
            },
        },
        components: {
            Container,
            Title
        }
    }
</script>

<style scoped>

</style>