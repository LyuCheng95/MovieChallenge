<template>
    <header>
        <input type="text" placeholder="Search..." />
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom, black, transparent);
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

input {
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>