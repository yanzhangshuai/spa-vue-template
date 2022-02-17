import { DatePicker, Layout, Menu, ConfigProvider } from 'ant-design-vue';

if (DEV) {
  // dev环境加载全部antd样式
  require('ant-design-vue/dist/antd.css');
}

const uiComponents = [Layout, Menu, DatePicker, ConfigProvider];

export default uiComponents;
