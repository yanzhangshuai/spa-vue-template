import { DatePicker, Layout, Menu, ConfigProvider } from 'ant-design-vue';
// import 'moment-to-dayjs-for-antd-vue';
if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.css');
}

const antdComponents = [Layout, Menu, DatePicker, ConfigProvider];

export default antdComponents;

export { Layout, Menu, DatePicker, ConfigProvider };
