'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('channels', [
      {
        name: 'bot_test',
        slackId: 'C9QMTFJ77',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'brains_bot',
        slackId: 'C63T11MT7',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'ci_notification',
        slackId: 'C9MR4U1RB',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'create_commercial',
        slackId: 'C9HEA340H',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'diary',
        slackId: 'CCKBL8CRM',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'documentation',
        slackId: 'C6LQV7X6J',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'eji',
        slackId: 'C9V0WTQ4V',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'general',
        slackId: 'C2M9U7Q9E',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'guest_or_resting',
        slackId: 'C6HCRMC87',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'important_info',
        slackId: 'C59PGKKS9',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'managers',
        slackId: 'C64JR9T46',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'meyasubako',
        slackId: 'C7Y1WRXNC',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'mokumoku_lt',
        slackId: 'C5ZASDF2R',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'niwa_bot_test',
        slackId: 'CB98L4EUX',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'n\u4e88\u5099\u6821',
        slackId: 'C9RB9P4AV',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'pj_brainslp_renewal',
        slackId: 'C82T63N83',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'pj_kaitoriou',
        slackId: 'C5MPTKG2F',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'pj_meikei',
        slackId: 'C486B8RQT',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'pj_practice',
        slackId: 'C83JTABBR',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'polly_test',
        slackId: 'CC3421Q2Z',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'pr_sns_website_blog',
        slackId: 'C6JF73ZCK',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'q_and_a',
        slackId: 'C61K327BN',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'random',
        slackId: 'C2MA5JY4R',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'self_introduction',
        slackId: 'C56LBM1HB',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'tweet_eiji',
        slackId: 'C84D1N76V',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'tweet_gassan',
        slackId: 'C84D1N76V',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'tweet_habatas',
        slackId: 'C83M2PR2L',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'tweet_hanteru',
        slackId: 'CA30A0SJZ',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'tweet_kodai',
        slackId: 'C85CR4G8L',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'tweet_koyama',
        slackId: 'CB651P1KP',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'tweet_kuro',
        slackId: 'C84D64XQR',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'tweet_nakai',
        slackId: 'CC0540GLD',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'tweet_niwa',
        slackId: 'CAA5K5V4G',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'tweet_ryo',
        slackId: 'CA39L2G14',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'tweet_sakas',
        slackId: 'CA2QPDESF',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      },
      {
        name: 'tweet_yohey',
        slackId: 'C7729M3PA',
        created_at: '2018-09-04 00:00:00',
        updated_at: '2018-09-04 00:00:00'
      }
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('channels', null, {});
  }
};
