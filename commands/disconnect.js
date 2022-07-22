const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "disconnect",
  description: "Stop the music and leave the voice channel",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["dc"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    if(message.author.id === "485028232047886358" || message.author.id === "946341431298117652" || message.author.id === "810354674938806283"   || message.author.id === "965702927291392031" || message.author.id === "499628891397160963" || message.author.id === "476242549858631693" || message.author.id === "424502386132779028") {
    let player = await client.Manager.get(message.guild.id);
    if (!message.member.voice.channel)
      return client.sendTime(
        message.channel,
        "❌ | **Join a voice channel first!**"
      );
    if (!player)
      return client.sendTime(
        message.channel,
        "❌ | **Err_404**"
      );
    await client.sendTime(message.channel, ":wave: | **BYE!**");
    await message.react("👋");
    player.destroy();
      }
  },

  
  SlashCommand: {
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, interaction, args, { GuildDB }) => {
      const guild = client.guilds.cache.get(interaction.guild_id);
      const member = guild.members.cache.get(interaction.member.user.id);

      if (!member.voice.channel)
        return client.sendTime(
          interaction,
          "❌ | **Join a voice channel first!**"
        );
      if (
        guild.me.voice.channel &&
        !guild.me.voice.channel.equals(member.voice.channel)
      )
        return client.sendTime(
          interaction,
          `❌ | **You must be in ${guild.me.voice.channel} to use this command.**`
        );

      let player = await client.Manager.get(interaction.guild_id);
      if (!player)
        return client.sendTime(
          interaction,
          "❌ | **Err 404**"
        );
      player.destroy();
      client.sendTime(interaction, ":notes: | **Disconnected!**");
    },
  },
};
