import { queryFormat, snakeNameWithObject } from '@/util/helper';

it('test snakeNameWithObject', () => {
  expect(
    snakeNameWithObject({
      user_id: 1,
      user_name: '张三',
      age: 123,
      address: '河北省_邯郸市'
    })
  ).toEqual({
    userId: 1,
    userName: '张三',
    age: 123,
    address: '河北省_邯郸市'
  });

  expect(
    snakeNameWithObject({
      user_id: 1,
      user_name: '张三',
      age: 123,
      address: {
        user_province: '河北省',
        user_city: '邯郸市'
      },
      user_phone: ['17631369999']
    })
  ).toEqual({
    userId: 1,
    userName: '张三',
    age: 123,
    address: {
      userProvince: '河北省',
      userCity: '邯郸市'
    },
    userPhone: ['17631369999']
  });

  expect(
    snakeNameWithObject([
      {
        user_id: 1,
        user_name: '张三',
        age: 123,
        address: '河北省_邯郸市'
      },
      [
        {
          user_id: 2,
          user_name: '李四'
        }
      ],
      'user_test_array',
      'user-test-array'
    ])
  ).toEqual([
    {
      userId: 1,
      userName: '张三',
      age: 123,
      address: '河北省_邯郸市'
    },
    [
      {
        userId: 2,
        userName: '李四'
      }
    ],
    'user_test_array',
    'user-test-array'
  ]);

  expect(snakeNameWithObject([123, 'user_test_array', 'user-test-array', true])).toEqual([
    123,
    'user_test_array',
    'user-test-array',
    true
  ]);
});

it('test queryFormat', () => {
  expect(
    queryFormat('http://localhost:3000/app/hello', {
      id: 1,
      name: '张三',
      age: [1, 2]
    })
  ).toEqual('http://localhost:3000/app/hello?id=1&name=张三&age[0]=1&age[1]=2');

  expect(
    queryFormat('http://localhost:3000/app/hello?', {
      id: 1,
      name: '张三',
      age: [1, 2]
    })
  ).toEqual('http://localhost:3000/app/hello?id=1&name=张三&age[0]=1&age[1]=2');

  expect(
    queryFormat('http://localhost:3000/app/hello?b=2', {
      id: 1,
      name: '张三',
      age: [1, 2]
    })
  ).toEqual('http://localhost:3000/app/hello?b=2&id=1&name=张三&age[0]=1&age[1]=2');
});
