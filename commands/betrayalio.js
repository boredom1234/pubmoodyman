const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "betrayalio",
  description: "Starts a Betrayal.io session",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["betrayal"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {require("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    if (!message.member.voice.channel)
      return client.sendTime(
        message.channel,
        "❌ | **Join a Voice Channel**"
      );
    if (
      !message.member.voice.channel
        .permissionsFor(message.guild.me)
        .has("CREATE_INSTANT_INVITE")
    )
      return client.sendTime(
        message.channel,
        "❌ | **Please give permission to invite**"
      );

    let Invite = await message.member.voice.channel.activityInvite(
      "773336526917861400"
    ); //Made using discordjs-activity package
    let embed = new MessageEmbed()
      .setAuthor(
        "Betrayal.io",
        "https://cdn.titotu.io/images/games/betrayal-io-1223x688.jpg"
      )
      .setColor("#ff9829").setDescription(`
Using **Betrayal.io** you can play with your friends in a Voice Channel. Click *JOIN* to join in!

__**[Join Betrayal.io](https://discord.com/invite/${Invite.code})**__

⚠ **Note:** This only works in Desktop version of the Discord App
`);
    message.channel.send(embed);
  },
  SlashCommand: {
    options: [],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
     run: async (client, message, args, { GuildDB }) => {
        if (!message.member.voice.channel)
          return client.sendTime(
            message.channel,
            "❌ | **Join a Voice Channel**"
          );
        if (
          !message.member.voice.channel
            .permissionsFor(message.guild.me)
            .has("CREATE_INSTANT_INVITE")
        )
          return client.sendTime(
            message.channel,
            "❌ | **Please give permission to invite**"
          );
    
        let Invite = await message.member.voice.channel.activityInvite(
          "773336526917861400"
        ); //Made using discordjs-activity package
        let embed = new MessageEmbed()
          .setAuthor(
            "Betrayal.io",
            "https://cdn.titotu.io/images/games/betrayal-io-1223x688.jpg"
          )
          .setColor("#ff9829").setDescription(`
    Using **Betrayal.io** you can play with your friends in a Voice Channel. Click *JOIN* to join in!
    
    __**[Join Betrayal.io](https://discord.com/invite/${Invite.code})**__
    
    ⚠ **Note:** This only works in Desktop version of the Discord App
    `);
      interaction.send(embed.toJSON());
    },
  },
};
