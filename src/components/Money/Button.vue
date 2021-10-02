<template>
    <button class="button" @click="$emit('click', $event)"><slot/></button>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .button{
        background: #767676;
        border: none;
        color: white;
        border-radius: 4px;
        height: 40px;
        padding: 0 16px;
        &-wrapper{
            text-align: center;
            padding: 16px;
            margin: 44-16px;
        } 
    }
</style>