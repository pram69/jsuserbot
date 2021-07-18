const { CommandHandler } = require("../dist/userbot");

exports.default = new CommandHandler(
  (client, event) => {
    event.message.reply({ message: "Hey!" });
  },
  { commands: "hello" }
);
