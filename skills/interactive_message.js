module.exports = controller => {
  controller.on('interactive_message_callback', (bot, message) => {
    const BrainsManagerService = new (require('../worker_service/BrainsManagerService.js'))();

    switch(message.callback_id) {
      case 'brains_mind_any':
        const brainsMind = BrainsManagerService.getBrainsMind(message.actions[0].value);
        bot.replyInteractive(message, {
          text: `Brains Mind #${message.actions[0].value} \n${brainsMind}`
        });
        break;
      default:
        break;
    }
  });
}