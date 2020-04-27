<template>
  <a-modal
    title="新建菜单"
    :width="840"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleSubmit"
    @cancel="handleCancel"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-form-item
          label="父级菜单"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
        >
          <a-select v-decorator="['parentId']" placeholder="请选择父级菜单，不选则为一级菜单">
            <a-select-option value="1">系统管理</a-select-option>
            <a-select-option value="2">菜单管理</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label="菜单名称"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
        >
          <a-input v-decorator="['title', {rules: [{required: true, min: 1, message: '请输入菜单名称'}]}]" placeholder="请输入菜单名称" />
        </a-form-item>
        <a-form-item
          label="菜单图标"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
        >
          <a-popconfirm
            @confirm="handleIconConfirm"
            okText="确认"
            cancelText="关闭"
          >
            <template slot="title">
              <icon-selector style="width: 500px;height: 324px;overflow: hidden" v-model="currentSelectedIcon" @change="handleIconChange"/>
            </template>
            <a-icon :type="icon" style="font-size: 16px;"/>
          </a-popconfirm>
        </a-form-item>

        <a-form-item
          label="所属类型"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
        >
          <a-select v-decorator="['type', {initialValue: '1',rules: [{required: true},]}]" @change="handleTypeChange">
            <a-select-option value="1">菜单</a-select-option>
            <a-select-option value="2">按钮</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label="菜单类型"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          v-if="type == 1"
        >
          <a-select v-decorator="['menuType', {initialValue: '1',rules: [{required: true},]}]">
            <a-select-option value="1">内部路由</a-select-option>
            <a-select-option value="2">内嵌iframe</a-select-option>
            <a-select-option value="3">外部路由</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label="按钮类型"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          v-else
        >
          <a-select v-decorator="['btnType', {initialValue: '1',rules: [{required: true},]}]">
            <a-select-option value="1">行按钮</a-select-option>
            <a-select-option value="2">操作栏按钮</a-select-option>
            <a-select-option value="3">行按钮和操作栏</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label="菜单路由"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
        >
          <a-input v-decorator="['url', {rules: [{required: true, min: 1, message: '请输入菜单路由'}]}]" placeholder="请输入菜单路由" />
        </a-form-item>

        <a-form-item
          label="描述"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
        >
          <a-textarea
            placeholder="请输入描述信息"
            :autoSize="{ minRows: 3, maxRows: 5 }"
            v-decorator="['description']"
          />
        </a-form-item>
        <a-form-item
          label="排序"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
        >
          <a-input v-decorator="['sort', {initialValue: 1}]" placeholder="请输入排序" />
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import IconSelector from '@/components/IconSelector'
export default {
  components:{
    IconSelector
  },
  data () {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      },
      visible: false,
      confirmLoading: false,

      form: this.$form.createForm(this),
      currentSelectedIcon:'',
      icon: 'home',
      type: 1,
    }
  },
  methods: {
    add () {
      this.visible = true
    },
    //选择图标
    handleIconChange(icon) {
      this.currentSelectedIcon = icon
    },
    handleIconConfirm() {
      this.icon = this.currentSelectedIcon
    },
    //监听菜单类型改变
    handleTypeChange(value) {
      this.type = value
    },
    //提交
    handleSubmit () {
      const { form: { validateFields } } = this
      this.confirmLoading = true
      validateFields((errors, values) => {
        if (!errors) {
          values.icon = this.icon
          if(values.parentId == undefined) {
            values.parentId = 0
          }
          console.log('添加菜单提交数据', values)
          setTimeout(() => {
            this.visible = false
            this.confirmLoading = false
            this.$emit('ok', values)
          }, 1500)
        } else {
          this.confirmLoading = false
        }
      })
    },
    handleCancel () {
      this.visible = false
    }
  }
}
</script>
