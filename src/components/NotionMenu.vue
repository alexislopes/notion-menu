<template>
<div class="menu-container">
  <div :class="['menu', { active: value }]" ref="menu">
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
    <div class="last-edited">
      <span>Last edited by Alexis Lopes</span>
      <span>Apr 16, 2023, 10:00 PM</span>
    </div>
  </div>
  <Bento @click="toggle()" class="bento" />
</div>
</template>

<script setup>
import { onClickOutside, useToggle } from "@vueuse/core";
import { ref } from "vue";

const menu = ref(undefined)
const [value, toggle] = useToggle()

onClickOutside(menu, () => {
  value.value = false
})
</script>

<style scoped>
.menu-container {
  @apply absolute flex justify-center items-center relative font-sans
}
.last-edited {
  @apply flex flex-col gap-1 text-sm text-[#9a9a99] mt-1
}
.bento {
  @apply text-[#7e7e87] px-1 py-1.5 hover:bg-[#efefef] rounded cursor-grab
}

.menu {
 @apply p-2 shadow shadow-md min-w-[15vw] rounded-md border-1 border-[#e3e3e3] border-solid
  absolute right-0 mr-9 flex gap-0.5 opacity-0 flex-col hidden;
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
  @apply p-1 bg-[#f7f7f5] border-1 border-solid border-[#e0e0df] flex items-center rounded p-2 my-2;
}

.search input {
  @apply border-none w-[-webkit-fill-available] outline-none bg-transparent
}

.devider {
  @apply m-1 border-[0.3px] border-solid border-[#ededec];
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