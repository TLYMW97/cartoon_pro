<template>
  <div class="pagination">
    <a-pagination
      :pageSizeOptions="pageSizeOptions"
      :total="total"
      :defaultCurrent="1"
      showSizeChanger
      :pageSize="pageSize"
      size="small"
      v-model="currentPage"
      @showSizeChange="onShowSizeChange"
    >
      <template slot="buildOptionText" slot-scope="props">
        <span>{{props.value}} 条 / 页</span>
      </template>
    </a-pagination>
  </div>
</template>

<script>
import { Pagination } from 'ant-design-vue';
export default {
  name: 'pagination',
  props: {
    total: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 10
    },
    page: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      defaultPageSize: this.size,
      pageSizeOptions: ['5', '10', '20', '30'],
      pageSize: this.size,
      currentPage: this.page
    };
  },
  watch: {
    currentPage(val) {
      this.$emit('pageChange', { page: val, size: this.pageSize });
    }
  },
  methods: {
    onShowSizeChange(page, size) {
      this.pageSize = size;
      this.$emit('pageChange', { page, size });
    }
  },
  components: {
    APagination: Pagination
  }
};
</script>

<style scoped>
.pagination {
  width: 100%;
  padding: 20px 0;
  text-align: right;
}
</style>
