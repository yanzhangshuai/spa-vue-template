import { XOR } from '@/@types/global';

export interface Menu {
  id: XOR<string, number>;
  title: string;
  icon?: string;
  children?: Array<Menu>;
}

const menus: Array<Menu> = [
  {
    id: '1',
    title: 'option 1'
  },
  {
    id: '2',
    title: 'option 2'
  },
  {
    id: '3',
    title: 'option 3'
  },
  {
    id: '4',
    title: 'Navigation One',
    children: [
      {
        id: '4-1',
        title: 'option 5'
      },
      {
        id: '4-2',
        title: 'option 6'
      },
      {
        id: '4-3',
        title: 'option 7'
      },
      {
        id: '4-4',
        title: 'option 8'
      }
    ]
  },
  {
    id: '5',
    title: 'Navigation Two',
    children: [
      {
        id: '5-1',
        title: 'option 9'
      },
      {
        id: '5-2',
        title: 'option 10'
      },
      {
        id: '5-3',
        title: 'Submenu',
        children: [
          {
            id: '5-3-1',
            title: 'option 11'
          },
          {
            id: '5-3-2',
            title: 'option 12'
          },
          {
            id: '5-3-3',
            title: 'option 13'
          }
        ]
      }
    ]
  }
];

export default menus;
