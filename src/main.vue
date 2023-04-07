<script setup lang="ts">
import { ref } from "vue";
import Header from "@/views/Header/index.vue"
import Icons from "@/views/ICONS/Icons.vue"
import Search from "@/views/Search/index.vue"
import LeftMenu from "@/views/LeftMenu/index.vue"

const activeMenuIndex = ref<Number>(0)

</script>
<template>
  <div class="icon-contain">
    <!-- <span class="tests" ref="test">test33</span> -->
    <div class="icon_header">
      <Header />
    </div>
    <div class="icon_content">
      <Search />
      <div class="icon-items_contain">
        <left-menu />
        <Icons class="icons_contains clear_scroll" />
      </div>
    </div>
  </div>
</template>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.icon-contain {
  color: var(--color);
  background-color: var(--backgroundTheme);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  // transition: all 0.3s;
  .tests {
    width: 100%;
    height: 100%;
    position: absolute;
    // border-radius: 50%;
    top: 0;
    background: var(--fontColor);
    // opacity: .2;
    transform: translate(100%, 0);
    transition: all 0.5s;
  }

  .icon_header {
    position: relative;
    z-index: 10;
  }

  /* Safari */
  .icon_content {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .icon-items_contain {
      display: flex;
      border-top: 1px solid var(--border);
      margin-top: 20px;
      overflow: hidden;
      flex: 1;

      .left-menu_icon {
        width: 168px;
        border-right: 1px solid var(--border);
        height: 100%;
        overflow-y: auto;

        &:hover {
          cursor: pointer;
        }

        &>div {
          &.active_css {
            background: linear-gradient(59deg, #edf2f2 0%, #cef7f3 100%);
            font-size: 14px;
            position: relative;
            color: var(--primary);
          }

          .text_item {
            display: inline-block;
            font-size: 15px;
            font-weight: 600;
            padding: 14px 0 14px 14px;
          }
        }
      }

      .icons_contains {
        height: calc(100% - 30px);
        overflow-y: auto;
        position: relative;
      }
    }
  }


}
</style>
