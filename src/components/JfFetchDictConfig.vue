<template>
  <div class="_fd-field-input">
    <el-select v-model="dictType" placeholder="请选择字典" filterable style="width: 100%;" @change="save">
      <el-option v-for="item in dictList" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { deepCopy } from "@form-create/utils/lib/deepextend";
import { empty } from "../utils";

export default defineComponent({
  name: "JeeFastFetchDict",
  inject: ["designer"],
  emits: ["input"],
  props: {
    value: [Object, String, Array],
    to: String,
  },
  computed: {
    dictList() {
      return this.designer.fetchDictConfig.dictList;
    },
    fetchAction() {
      return this.designer.fetchDictConfig.fetchAction;
    },
    authToken(){
      return this.designer.fetchDictConfig.token;
    },
    t() {
      return this.designer.t;
    },
    configured() {
      return !empty(this.value);
    },
  },
  data() {
    return {
      visible: false,
      formValue: deepCopy(this.value || {}),
      dictType: "",
    };
  },
  watch: {

  },
  methods: {
    open() {
      this.visible = true;
    },
    getDictType() {
      if (!this.value) return;
      const formData = this.value;
      if (formData.action) {
        let action = formData.action;
        let dictType = action.substring(action.lastIndexOf("/") + 1);
        this.dictType = dictType;
      }
    },
    save() {
      let fetchOption = {
        action: `${this.fetchAction}/${this.dictType}`,
        method: "GET",
        Headers: {
          Authorization: this.authToken
        },
        data: {},
        to: this.to || "options",
        onError: "",
      };
      this.$emit("input", fetchOption);
    }, 
  },
  created() {
    this.getDictType();
  },
});
</script>

<style>
._fd-field-input {
  width: 100%;
}
</style>
