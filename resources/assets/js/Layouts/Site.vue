<template>
    <div class="template-container">
        <header class="site-header">
            <a href="#" class="brand-main">
                <el-button icon="edit">Button</el-button>
            </a>

            <ul class="action-list">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
            </ul>
        </header>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<style>
.brand-main img {
    height: 50px;
    margin-top: -10px;

}
</style>