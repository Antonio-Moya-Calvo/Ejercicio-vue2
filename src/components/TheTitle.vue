
<template>
    <h2 class="titulo"><slot></slot></h2>
</template>

<style lang="scss" scoped>
.titulo{
    color: var(--c-primarycolor);
    font-size: var(--fs-big);
    font-weight: 900;
    text-align: center;
    margin: 2em 2em;
}

</style>