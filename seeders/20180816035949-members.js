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
        enrolledYear: 2015,
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Naoki Kinugasa',
        slackId: 'U53FWFH1P',
        enrolledYear: 2014,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Satoshi Endo',
        slackId: 'U54S5KHV5',
        enrolledYear: 2016,
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Tomoya Yokono',
        slackId: 'U56KXFH18',
        enrolledYear: 2015,
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Satoshi Yamaguchi',
        slackId: 'U56LZ2H3P',
        enrolledYear: 2015,
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Yuji Harada',
        slackId: 'U56M1SFDK',
        enrolledYear: 2016,
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Fumiya Yoshida',
        slackId: 'U56M5PMKP',
        enrolledYear: 2014,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Yuto Habata',
        slackId: 'U56P3G337',
        enrolledYear: 2015,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Aoi Sawada',
        slackId: 'U56ULQ2SW',
        enrolledYear: 2016,
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Katsuya Akasaka',
        slackId: 'U57CTAEMV',
        enrolledYear: 2015,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Yusuke Tanemura',
        slackId: 'U57EZ0SCX',
        enrolledYear: 2017,
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Hirokatsu Souda',
        slackId: 'U5909QHUY',
        enrolledYear: 2016,
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
        enrolledYear: 2017,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Aika Murakami',
        slackId: 'U5GG565SL',
        enrolledYear: 2017,
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'kakeru kurosawa',
        slackId: 'U5M49477G',
        enrolledYear: 0,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Eiji Waseda',
        slackId: 'U5VNCM02E',
        enrolledYear: 2015,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Ayame Shimizu',
        slackId: 'U65DJQXBQ',
        enrolledYear: 2017,
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Kodai Takigawa',
        slackId: 'U6DK8JPHD',
        enrolledYear: 2016,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Seiya Tajima',
        slackId: 'U6FPKB81F',
        enrolledYear: 0,
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Kyota Nagao',
        slackId: 'U7CA7THT4',
        enrolledYear: 2015,
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Takuro Ochiai',
        slackId: 'U81FWJ10E',
        enrolledYear: 2014,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Yuji Miki',
        slackId: 'U8DNPGQ8P',
        enrolledYear: 2017,
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Haruki Kurosawa',
        slackId: 'U90RUNW6R',
        enrolledYear: 2015,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Yuki Takase',
        slackId: 'U93KWQFSL',
        enrolledYear: 2015,
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Noriyuki Tamaki',
        slackId: 'U9H1BS1T3',
        enrolledYear: 2015,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Kazuhiko Narita',
        slackId: 'U9QV6J7A7',
        enrolledYear: 0,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Sohei Koyama',
        slackId: 'UABE67WSZ',
        enrolledYear: 2018,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Yu Nakai',
        slackId: 'UAJH3JM3J',
        enrolledYear: 2018,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Tomoyuki Hirose',
        slackId: 'UAJHBET6C',
        enrolledYear: 2018,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Kai Takahashi',
        slackId: 'UAK5KF23V',
        enrolledYear: 2018,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Tomoya Fujita',
        slackId: 'UAMF35PU1',
        enrolledYear: 2016,
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
        enrolledYear: 2018,
        latestMessageDate: null,
        disable: true,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Koki Shibata',
        slackId: 'UAT8CAEM8',
        enrolledYear: 2018,
        latestMessageDate: null,
        disable: false,
        created_at: '2018-08-16 00:00:00',
        updated_at: '2018-08-16 00:00:00'
      },
      {
        name: 'Tomoyuki Jitsukawa',
        slackId: 'UAV6P21K6',
        enrolledYear: 2018,
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
        enrolledYear: 2018,
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
