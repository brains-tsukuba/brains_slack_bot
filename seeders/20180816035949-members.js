'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Ryo Murakami',
        slackId: 'U2M9QF17E',
        enrolledYear: 2013,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Yohei Hasegawa',
        slackId: 'U48B4F493',
        enrolledYear: 2015,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Kakeru Murakami',
        slackId: 'U53FWCJP3',
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Naoki Kinugasa',
        slackId: 'U53FWFH1P',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Satoshi Endo',
        slackId: 'U54S5KHV5',
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Tomoya Yokono',
        slackId: 'U56KXFH18',
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Satoshi Yamaguchi',
        slackId: 'U56LZ2H3P',
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Yuji Harada',
        slackId: 'U56M1SFDK',
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Fumiya Yoshida',
        slackId: 'U56M5PMKP',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Yuto Habata',
        slackId: 'U56P3G337',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Aoi Sawada',
        slackId: 'U56ULQ2SW',
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Katsuya Akasaka',
        slackId: 'U57CTAEMV',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Yusuke Tanemura',
        slackId: 'U57EZ0SCX',
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Hirokatsu Souda',
        slackId: 'U5909QHUY',
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Teruhisa Hanzawa',
        slackId: 'U59LRPCN6',
        enrolledYear: 2017,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Katsuki Niwa',
        slackId: 'U5D2M4XJ6',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Aika Murakami',
        slackId: 'U5GG565SL',
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'kakeru kurosawa',
        slackId: 'U5M49477G',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Eiji Waseda',
        slackId: 'U5VNCM02E',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Ayame Shimizu',
        slackId: 'U65DJQXBQ',
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Kodai Takigawa',
        slackId: 'U6DK8JPHD',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Seiya Tajima',
        slackId: 'U6FPKB81F',
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Kyota Nagao',
        slackId: 'U7CA7THT4',
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Takuro Ochiai',
        slackId: 'U81FWJ10E',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Yuji Miki',
        slackId: 'U8DNPGQ8P',
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Haruki Kurosawa',
        slackId: 'U90RUNW6R',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Yuki Takase',
        slackId: 'U93KWQFSL',
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Noriyuki Tamaki',
        slackId: 'U9H1BS1T3',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Kazuhiko Narita',
        slackId: 'U9QV6J7A7',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Sohei Koyama',
        slackId: 'UABE67WSZ',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Yu Nakai',
        slackId: 'UAJH3JM3J',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Tomoyuki Hirose',
        slackId: 'UAJHBET6C',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Kai Takahashi',
        slackId: 'UAK5KF23V',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Tomoya Fujita',
        slackId: 'UAMF35PU1',
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Hikaru Egashira',
        slackId: 'UANUX2F52',
        enrolledYear: 2018,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Kyota Yoshinaga',
        slackId: 'UARD8BK61',
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Koki Shibata',
        slackId: 'UAT8CAEM8',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Tomoyuki Jitsukawa',
        slackId: 'UAV6P21K6',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Kosuke Yabuno',
        slackId: 'UAWPLSBGA',
        enrolledYear: 2018,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Syunsuke Kunii',
        slackId: 'UB52D6S5N',
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('users', null, {});
  }
};
