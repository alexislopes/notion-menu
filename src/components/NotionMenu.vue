<template>
<div>
  <div class="absolute flex justify-center items-center relative font-sans">
    <div class="menu" v-show="toggle">
      <input type="text">
      <div class="menu-item">
        <TrashBin />
        <div>Delete</div>
      </div>
      <div class="menu-item">
        <Duplicate />
        <div>Duplicate</div>
      </div>
      <hr>
      <div class="menu-item">
        <UpAngledArrow />
        <div>Open in new tab</div>
      </div>
      <div class="menu-item">
        <Copy />
        <div>Copy link</div>
      </div>
      <hr>
      <div class="menu-item">
        <Edit />
        <div>Edit property</div>
      </div>
      <div class="menu-item">
        <Move />
        <div>Move to</div>
      </div>
      <div class="menu-item">
        <Favorite />
        <div>Add to favorites</div>
      </div>
      <hr>
      <div class="flex flex-col gap-1 text-sm">
        <span>Last edited by Alexis Lopes</span>
        <span>Apr 16, 2023, 10:00 PM</span>
      </div>
    </div>
    <Bento @click="toggle = !toggle" class="text-[#7e7e87] px-1 py-1.5 hover:bg-[#efefef] rounded cursor-grab" />
  </div>
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
import TrashBin from "./icons/TrashBin.vue";
import UpAngledArrow from "./icons/UpAngledArrow.vue";

const toggle = ref(false)
</script>

<style scoped>
.menu {
  @apply shadow shadow-md p-2 min-w-[15vw] rounded-md border-1 border-[#4d4d4d] absolute right-0 mr-9;
  animation: fadeIn 0.3s
}

.menu-item {
  @apply flex gap-3 cursor-pointer p-1.5 rounded items-center;

}

.menu-item:hover {
  @apply bg-[#efefef]
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }

  50% {}

  100% {
    opacity: 1;
  }
}
</style>