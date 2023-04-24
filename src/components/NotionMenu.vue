<template>
<div class="absolute flex justify-center items-center relative font-sans">
  <div :class="['menu', {active: toggle}]">
    <div class="search">
      <input placeholder="Search actions" type="text">
    </div>
    <div class="menu-item">
      <TrashBin />
      <div>
        <div>Delete</div>
        <span>Del</span>
      </div>
    </div>
    <div class="menu-item">
      <Duplicate />
      <div>
        <div>Duplicate</div>
        <span>Ctrl+D</span>
      </div>
    </div>
    <hr class="devider">
    <div class="menu-item">
      <UpAngledArrow />
      <div>
        <div>Open in new tab</div>
        <span>Ctrl+Shift+↵</span>
      </div>
    </div>
    <div class="menu-item">
      <SidePeek />
      <div>
        <div>Open in side peek</div>
        <span>Ctrl+Click</span>
      </div>
    </div>
    <div class="menu-item">
      <Copy />
      <div>Copy link</div>
    </div>
    <hr class="devider">
    <div class="menu-item">
      <Edit />
      <div>
        <div>Edit property</div>
      </div>
    </div>
    <div class="menu-item">
      <Move />
      <div>
        <div>Move to</div>
        <span>Ctrl+Shift+P</span>
      </div>
    </div>
    <div class="menu-item">
      <Favorite />
      <div>Add to favorites</div>
    </div>
    <hr class="devider">
    <div class="flex flex-col gap-1 text-sm text-[#9a9a99] mt-1">
      <span>Last edited by Alexis Lopes</span>
      <span>Apr 16, 2023, 10:00 PM</span>
    </div>
  </div>
  <Bento @click="toggle = !toggle" class="text-[#7e7e87] px-1 py-1.5 hover:bg-[#efefef] rounded cursor-grab" />
</div>
</template>

<script setup>
import { ref } from "vue";
import Bento from "./icons/Bento.vue";
import Copy from "./icons/Copy.vue";
import Duplicate from "./icons/Duplicate.vue";
import Edit from "./icons/Edit.vue";
import Favorite from "./icons/Favorite.vue";
import Move from "./icons/Move.vue";
import SidePeek from "./icons/SidePeek.vue";
import TrashBin from "./icons/TrashBin.vue";
import UpAngledArrow from "./icons/UpAngledArrow.vue";

const toggle = ref(false)
</script>

<style scoped>

.menu {
 @apply p-2 shadow shadow-md min-w-[15vw] rounded-md border-1 border-[#4d4d4d] absolute right-0 mr-9 flex gap-0.5 opacity-0 flex-col;
 border: 1px solid #e3e3e3;
 animation: fadeOut 0.3s;
}

.menu.active {
  @apply !opacity-100;
  animation: fadeIn 0.3s;
  
}

.menu-item {
  @apply flex gap-3 cursor-pointer p-1.5 rounded items-center text-[#353532];

}

.menu-item div {
  @apply flex justify-between w-full
}

.menu-item div span { 
  @apply text-end flex w-fit text-[#9a9a99] text-sm
}

.menu-item:hover {
  @apply bg-[#efefef]
}

.search {
  @apply p-1 bg-[#f7f7f5] border flex items-center rounded p-2 my-2;
  border: 1px solid #e0e0df
}

.search input {
  @apply border-none w-[-webkit-fill-available] outline-none bg-transparent
}

.devider {
  @apply m-1;
  border: 0.3px solid #ededec
}


@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    
  }

  100% {
    transform: scale(0.7);
    opacity: 0;
  }
}
</style>