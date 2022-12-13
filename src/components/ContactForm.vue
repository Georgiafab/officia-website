<template>
  <el-form :inline="true" :model="formInline" ref="formRef" :rules="rules">
    <div class="flex-item">
      <el-form-item prop="name">
        <el-input v-model="formInline.name" placeholder="您的称呼：（必填）" />
      </el-form-item>
      <el-form-item prop="tel">
        <el-input v-model="formInline.tel" placeholder="联系方式：（必填） " />
      </el-form-item>
      <el-form-item>
        <el-input v-model="formInline.email" placeholder="电子邮件：" />
      </el-form-item>
    </div>
    <div class="flex-item">
      <el-form-item>
        <el-input v-model="formInline.company" placeholder="所在单位：  " />
      </el-form-item>
      <el-form-item>
        <el-input v-model="formInline.wantprodct" placeholder="意向产品：" />
      </el-form-item>
    </div>
    <div class="flex-item">
      <el-form-item>
        <el-input
          ype="textarea"
          v-model="formInline.desc"
          placeholder="您的需求："
        />
      </el-form-item>
    </div>
    <p class="sumbit-txt">{{txt}}</p>

    <div class="sumbit-button" @click="handleSumbit">提交信息</div>

    <el-dialog custom-class="center-dialog" v-model="centerDialogVisible" title="Warning" width="500px" center>
    <h4>提交成功</h4>
    <p>感谢您的耐心填写，我们将尽快与您取得联系。</p>
    <span class="button" @click="centerDialogVisible = false">完成</span>

  </el-dialog>
  </el-form>
</template>

<script setup>
import {ref,defineProps} from 'vue'
import { ElMessage } from 'element-plus'
import axios from 'axios'
const props= defineProps({
    txt: String,
    sumbit: Function
})
const centerDialogVisible = ref(false)
const rules = {
    name: [{ required: true, message: '请输入您的姓名', trigger: 'blur' }],
    tel: [{ required: true, message: '请输入您的联系方式', trigger: 'blur' }]
}
const formRef = ref()
const formInline = ref({})
const handleSumbit = () => {
  
  formRef.value.validate(valid => {
    if (valid) {
      props.sumbit?.() 
      axios.post('/users/api/post_email', {
        ...formInline.value
      })
      .then(function (res) {
        console.log(res)
        if (res.data.code === 200) {
          centerDialogVisible.value = true
          formInline.value={}
        } else {
          ElMessage.error(res.message)
        }
        
      }).catch((error) => {
        ElMessage.error(error.toString())
      })
    }
  })

   
}
</script>

<style lang="scss" scoped>
    .el-form{
        margin-top: 36px;
        width: 100%;
        background: #fff;
        padding: 60px 94px;
        .flex-item{
            display: flex;
            margin-bottom: 22px;
        }
        .el-input{
            --el-input-border-color: none;
            --el-input-bg-color:#F8FAFD;
            --el-input-border-radius: 0;
            --el-input-focus-border: none;
            --el-input-focus-border-color: none;
            --el-component-size: 60px;
            font-size: 18px;
            --el-input-placeholder-color:#999;
            --el-input-hover-border:none;
            --el-input-hover-border-color:none;
            :deep(.el-input__wrapper) {
                padding-left: 24px;
                box-shadow: none !important;
                --el-color-danger: #ff0000;
            }
            
        }
        
        .el-form-item{
            flex: 1;
            margin-left: 26px;
            margin-bottom: 0;
            margin-right: 0;
            :deep(.el-form-item__error){
                left: 24px;
                font-size: 14px;
            }
        }
        .el-form-item:first-child{
            margin-left: 0;
        }
        .sumbit-txt{
            text-align: center;
            color: #000;
            margin: 30px 0;
            font-size:18px;
        }
        .sumbit-button{
            width: 180px;
            height: 60px;
            background: #000;
            color: #fff;
            margin: 0 auto;
            font-size: 18px;
            line-height: 60px;
            text-align: center;
            cursor: pointer;
        }
    }

    :deep(.center-dialog){
      text-align: center;
      .el-dialog__header{
        display: none;
      }
      .el-dialog__body{
      padding: 50px 20px 40px;
      text-align: center;
      color: #000;
        
      }
      h4{
        font-size: 24px;
        line-height: 48px;
      }
      p{
        font-size: 16px;
        padding: 30px 0 50px;
      }

      .button{
        display: inline-block;
        border: none;
        color: #fff;
        background: #333;
        width: 180px;
        height: 60px;
        font-size: 18px;
        cursor: pointer;
        line-height: 60px;
      }
    }

    @media screen and (max-width: 1200px) {
      .el-form{
        padding: 60px;
      }
    }

    @media screen and (max-width: 900px) {
      .el-form{
        padding: 30px;
      }
      .el-form .flex-item{
        flex-direction: column;
        margin-bottom: 0;
      }
      .el-form .el-form-item{
        margin-left: 0;
        margin-top: 20px;
      }
      
    }
</style>