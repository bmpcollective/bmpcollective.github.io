<template>
    <div>
        <img v-for="link in loo" :src="link" />
    </div>
</template>

<script>
export default{
    data(){
        return{
            loo: loo
        }
    }
}
</script>