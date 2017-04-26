// Redux Store for each KK's store status

{
  store_id: '740174014',
  store_name : 'Store A',
  time: '8 mins', // how long since posted
  ship: '3 km', // 0 km => no ship
  top_status: 'abcxyz', // seller viết vài dòng tâm đắc trên đầu mỗi status
  tables: [
    {
      table_id: '3523',
      table_name: 'Sản phẩm giảm giá',
      columns: [
        {
          id: '12343'
          title: 'Tên sản phẩm',
          type: 'text'
        },
        {
          id: '4242'
          title: 'Giá',
          type: 'number'
        },
        {
          id: '5346',
          title: 'Đơn vị bán'
          type: 'text'
        }
        {
          id: '324552'
          title: 'Thời gian còn lại',
          type: 'CountdownComponent' // our designed components
        }
      ],
      rows: [
        {
          id: '424',
          values: [
            'Xà phòng Lifebuoy',
            '133.500',
            '10 cái',
            props: jsonObject, // props for CountdownComponent render
          ], // các giá trị ứng với columns
          image: 'http://img89424.png',
          description: 'Xà phòng Việt Nam chất lượng TQ nhé các bạn'
        },
        {
          id: '777',
          values: [
            'Monster',
            '77000',
            '1 lon',
            props: jsonObject
          ],
          image: 'http://img4256.jpg',
          discription: 'Hãy bất tử như monster nào !!!'
        }
      ],
      description: 'xyzabc', // mô tả bên dưới mỗi bảng
    },
    ...
  ],
  likes: [
    {
      user_id: '42445',
      user_name: 'Mark Zuckerberg'
    },
    {
      user_id: '545',
      user_name: 'Bill Gates'
    }
  ],
  comments: {
    seller_comments: [
      {
        comment_id: '92557',
        content: 'Các bạn đã nhận được giày thấy thế nào?',
        replies: [
          {
            reply_id: '572',
            content: 'Giày đẹp lắm bạn'
          },
          {
            reply_id: '57662',
            content: 'Giày không vừa chân lắm, mình muốn đổi size được không bạn?'
          }
        ]
      }
    ],
    buyer_comments: [
      {
        id: '616',
        order_detail: [
          {
            product_id: '56363',
            product_name: 'Trứng gà nông nghiệp xxx',
            quantity: '3' // tương ứng 3 x đơn vị bán. ví du: 3 x 10 quả
          },
          {
            product_id: '537',
            product_name: 'Giày Nike v0.1',
            quantity: '2'
          }
        ]
        content: 'Xà phòng khá thơm không nên',
        replies: [
          {
            reply_id: '7277',
            content: 'Sao mình vẫn chưa nhận được order bạn ơi ?!...'
          },
          {
            reply_id: '92685',
            content: 'Order của bạn đang bị kẹt giữa ngã 7 Cầu Giấy, bạn vui lòng chờ 2 tiếng nhé.'
          }
        ]
      }
    ],
    shares: [
      {
        user_id: '42445',
        user_name: 'Mark Zuckerberg'
      },
      {
        user_id: '545',
        user_name: 'Bill Gates'
      }
    ]
  }
}
