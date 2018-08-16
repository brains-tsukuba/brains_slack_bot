module.exports = controller => {
  controller.hears(['^[a-z]'], 'direct_message,direct_mention', (bot, message) => {
    const hearContext = {
      bot,
      message
    };
    const managerController = new (require('../worker_service/ManagerController.js'))(message.text, hearContext);
    const manager = managerController.getManager();
    manager.run();
  });
}