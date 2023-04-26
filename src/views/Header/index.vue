<template>
  <div class="header-contain align-item">
    <div class="left_content space-between">
      <div style="height: 100%; font-size: 16px; font-weight: 600">
        <img src="@/assets/img/logo.png" alt="" class="logo_" @click="router.push('/')" />
      </div>
      <div class="sort-content align-item">
        <template v-for="(val, index) in tabs" :key="index">
          <span
            class="menu_item_css"
            @click="changeIcons(val, index)"
            :class="{ active: activeMenuIndex === index ? true : false }"
          >
            {{ val.name }}
            <img src="@/assets/img/star.png" alt="" class="star" />
          </span>
        </template>
        <span class="menu_item_css use_help" @mousemove="mouseHelpVis = true"
          >使用说明
          <div class="help-text_css" v-if="mouseHelpVis" @click.stop="null" @mouseleave="mouseHelpVis = false">
            <div class="install_">
              <img src="@/assets/img/begin.png" alt="" />
              <div class="install_code">
                <div class="tit_css">安装</div>
                <div class="context" v-html="compiledMarkdown"></div>
              </div>
            </div></div
        ></span>
      </div>
    </div>
    <span class="right_content align-item" @click="changeTheme" v-bind="theme.status">
      <!-- {{ themeConfig}} -->
      <template v-if="theme.status == 1">
        <img src="@/assets/img/night.png" alt="" />
        <span>暗夜模式</span>
      </template>
      <template v-else>
        <img src="@/assets/img/sunshine.png" alt="" />
        <span>亮色模式</span>
      </template>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import mdStr from './demo.md?raw'
import { useTheme } from '@/store/theme'
import { marked } from 'marked'
import hljs from 'highlight.js'
import { tabs, type TabItem } from './utils/tabMenu'
// const hljs={}

import { useRouter, useRoute } from 'vue-router'
const theme = useTheme()

const router = useRouter()
const route = useRoute()

const activeMenuIndex = ref<number>(0)

// 移入变量
const mouseHelpVis = ref<boolean>(false)
const changeTheme = () => {
  theme.editTheme()
}

var rendererMD = new marked.Renderer()
marked.setOptions({
  renderer: rendererMD,
  highlight: function (code: any, lang: any) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, { language }).value
  },
  langPrefix: 'hljs language-',
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})
const compiledMarkdown = ref(marked.parse(mdStr))

const changeIcons = (params: TabItem, index: number) => {
  activeMenuIndex.value = index
  if (params.path) router.push(params.path)
}
watch(
  () => route.path,
  (newVal) => {
    console.log(newVal)
    // 回流url上的菜单
    // tabs.findIndex((res) => {
    //   return res.path == newVal

    // })
  },
  {
    immediate: true
  }
)
</script>
<style lang="less">
.context {
  table {
    width: 100%;
    border-collapse: collapse;

    tr {
      border: 1px solid #ededed;
      text-align: left;

      td {
        width: 120px !important;
        border-left: none;
        border-right: none;
      }

      td,
      th {
        padding: 6px 0 6px 8px;
      }
    }
  }
}
</style>
<style lang="less" scoped>
.header-contain {
  position: relative;
  height: 60px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid var(--border);

  .left_content {
    max-width: 1300px;
    width: 70%;
    margin: 0 auto;
    // border: 1px solid red;
    height: 50%;

    .logo_ {
      height: 100%;
    }

    .sort-content {
      .menu_item_css {
        margin-right: 20px;
        position: relative;
        font-weight: 800;
        &.use_help {
          color: rgb(158, 160, 161);
          &:hover {
            cursor: pointer;
          }
        }
        .star {
          display: none;
          position: absolute;
          right: -14px;
          top: -6px;
        }

        &:hover {
          cursor: pointer;
        }

        &.active::after {
          content: '';
          position: absolute;
          display: block;
          bottom: -20px;
          width: 100%;
          height: 3px;
          background: var(--background-linear);
        }

        &.active {
          .star {
            display: block;
            width: 16px;
            height: 16px;
          }
        }

        // &.active::before {
        //   content: '';
        //   position: absolute;
        //   display: block;
        //   bottom: 16px;
        //   right: 0;
        //   width: 5px;
        //   height: 5px;
        //   background: linear-gradient(90deg, #FFE872 0%, #FFCC3F 100%);
        // }
      }

      .help-text_css {
        user-select: text;
        position: absolute;
        right: 0;
        top: 40px;
        font-weight: 400;
        width: 600px;
        height: 600px;
        background: #fff;
        padding: 16px;
        color: var(--fontColor);
        overflow-y: auto;
        z-index: 1000;
        border-radius: 0px 0px 8px 8px;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
        transition: all 1s ease;

        & > div {
          display: flex;
          margin-bottom: 20px;

          img {
            width: 26px;
            height: 26px;
            margin-right: 10px;
            // justify-content: flex-start;
          }
        }

        .install_ {
          width: 100%;
          overflow: hidden;

          .install_code {
            flex: 1;
            overflow: hidden;
          }
        }

        .tit_css {
          font-size: 20px;
          font-weight: 600;
        }
      }
    }
  }

  .right_content {
    position: absolute;
    padding: 4px;
    width: 86px;
    height: 24px;
    border-radius: 24px;
    right: 20px;
    background: v-bind("theme.status == 1 ? '#E9E9E9' : '#000'");
    display: flex;
    justify-content: center;

    & > img {
      width: 20px;
      margin-right: 2px;
    }

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
}
</style>
