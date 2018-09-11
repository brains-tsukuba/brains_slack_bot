const BaseManager = require('./BaseManager');
const model = require('../models');
const { promisify } = require('util');

module.exports = class ConfigManager extends BaseManager {
  constructor(inputData, hearContext) {
    super(inputData, hearContext, []);
    this.helpArguments.info = ['me'];
    this.helpArguments.add = ['me'];
    this.helpArguments.active = ['true or false'];
    this.options.push('info', 'add', 'disable');
  }

  info() {
    (async() => {
      const userSlackId = this.message.user;
      const user = await model.user.findOne({
        where: {
          slackId: userSlackId
        }
      });

      this.reply(this.message, JSON.stringify(user, null, '\n'));
    })();
  }

  add() {
    (async () => {
      const userSlackId = this.message.user;
      const result = await promisify(this.bot.api.users.info)({
        token: process.env.AUTH_TOKEN,
        user: userSlackId
      }).catch(err => {
        console.error(err);
        return {};
      });
      const user = await model.user.findOrCreate({
        where: {
          slackId: userSlackId
        },
        defaults: {
          name: result.user.profile.real_name,
          disable: false
        }
      });
      const reply = JSON.stringify(user[0], null, '\n');
      this.reply(this.message, reply);
    })();
  }

  disable() {
    (async() => {
      const userSlackId = this.message.user;
      const status = (this.inputData.argument === 'true');
      await model.user.update(
        {
          disable: status
        },
        {
          where: {
            slackId: userSlackId
          }
        }
      );
      this.reply(this.message, `disable: ${status} に更新しました.`);
    })();
  }

};
