const { Plugin } = require('powercord/entities');

module.exports = class GoogleIt extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'ugoogleit',
      description: 'Link the main google page with text in the search bar...',
      usage: '{c} [text to search]',
      executor: (args) => ({
        send: true,
        result: 'https://google.com/?q=' + args.join('%20')
      })
    });
    powercord.api.commands.registerCommand({
      command: 'megoogleit',
      description: 'Link a google search...',
      usage: '{c} [text to search]',
      executor: (args) => ({
        send: true,
        result: 'https://google.com/search?q=' + args.join('%20')
      })
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('ugoogleit');
    powercord.api.commands.unregisterCommand('megoogleit');
  }
};
