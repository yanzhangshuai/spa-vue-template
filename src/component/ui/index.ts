import { ConfigProvider, DatePicker, Layout, Menu } from 'ant-design-vue';

if (GLOBAL_DEV) {
  // dev环境加载全部antd样式
  require('ant-design-vue/dist/antd.css');
}

const uiComponents = [Layout, Menu, DatePicker, ConfigProvider];

export default uiComponents;

// export { Layout, Menu, DatePicker, ConfigProvider };
