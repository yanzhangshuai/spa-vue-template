import { DatePicker, Layout, Menu, ConfigProvider } from 'ant-design-vue';
if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.css');
}

const uiComponents = [Layout, Menu, DatePicker, ConfigProvider];

export default uiComponents;

export { Layout, Menu, DatePicker, ConfigProvider };
