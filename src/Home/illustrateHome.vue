<script setup lang="ts">
import Header from '@/views/Header/index.vue'
</script>
<template>
  <div class="svg_ills_content">
    <div class="tit">插画资源</div>
    <div class="svg_illsutration">
      <template v-for="val in 4" :key="val">
        <div class="svg-items">
          <img src="@/assets/svg/404.svg" alt="" />
          <img src="@/assets/svg/信息正在入库.svg" alt="" />
          <img src="@/assets/svg/列表内容为空.svg" alt="" />
          <img src="@/assets/svg/搜索内容为空.svg" alt="" />
          <div class="title_content">
            <div class="title space-between">
              <span class="line">星空主题的空状态插画</span>
              <span class="ills_num">illstrates:16</span>
            </div>
            <div class="text_describe">星空主题的空状态插画</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="less">
.svg_ills_content {
  // border: 1px solid red;
  overflow: auto;
  .tit {
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    margin: 40px 0;
  }
  .svg_illsutration {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .svg-items {
      // border: 1px solid red;
      margin: 0 20px 20px 20px;
      width: 320px;
      border: 1px solid var(--border);
      border-radius: 6px;
      img {
        width: 160px;
      }
      &:hover {
        cursor: pointer;
        // box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        box-shadow: var(--boxShdow);
      }
      .title_content {
        padding: 10px;
        .title {
          font-size: 16px;
          margin-bottom: 10px;
          display: flex;
          .line {
            font-weight: 600;
          }
          .ills_num {
            color: #ccc;
          }
        }
        .title_content {
          color: #999;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
