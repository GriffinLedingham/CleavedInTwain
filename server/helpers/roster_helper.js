module.exports = function () {
  var roster_Helper = {}

  roster_Helper.getRosterPlayerList = function() {
    return roster_Helper.formatPlayerList()
  }

  roster_Helper.getRosterPlayerIndiv = function(name) {
    var roster = GuildData[0]
    var outputPlayer = {}

    for(var key in roster) {
      var player = roster[key]
      if(player.name.toLowerCase() != name.toLowerCase()) continue
      else {
        outputPlayer = roster_Helper.formatPlayer(player)
        break
      }
    }

    return outputPlayer
  }

  roster_Helper.formatPlayerList = function() {
    var roster = GuildData[0]
    var outputRoster = []

    for(var key in roster) {
      var player = roster[key]

      var playerOutput = roster_Helper.formatPlayer(player)

      outputRoster.push(playerOutput)
    }

    return outputRoster
  }

  roster_Helper.formatPlayer = function(player) {
    var wcl_rarity = ''
    if(player.wcl_avg >= 95) wcl_rarity = 'legendary'
    else if(player.wcl_avg >= 80) wcl_rarity = 'epic'
    else if(player.wcl_avg >= 50) wcl_rarity = 'rare'
    else if(player.wcl_avg >= 25) wcl_rarity = 'uncommon'
    else wcl_rarity = 'common'

    var qualityLookup = {
      1: 'common',
      2: 'uncommon',
      3: 'rare',
      4: 'epic',
      5: 'legendary'
    }

    var gear = [
      {slot: 'head',lvl: player.head_ilvl,id: player.head_id,name: player.head_name,rarity: qualityLookup[player.head_quality]},
      {slot: 'neck',lvl: player.neck_ilvl,id: player.neck_id,name: player.neck_name,rarity: qualityLookup[player.neck_quality]},
      {slot: 'shoulder',lvl: player.shoulder_ilvl,id: player.shoulder_id,name: player.shoulder_name,rarity: qualityLookup[player.shoulder_quality]},
      {slot: 'back',lvl: player.back_ilvl,id: player.back_id,name: player.back_name,rarity: qualityLookup[player.back_quality]},
      {slot: 'chest',lvl: player.chest_ilvl,id: player.chest_id,name: player.chest_name,rarity: qualityLookup[player.chest_quality]},
      {slot: 'wrist',lvl: player.wrist_ilvl,id: player.wrist_id,name: player.wrist_name,rarity: qualityLookup[player.wrist_quality]},
      {slot: 'hands',lvl: player.hands_ilvl,id: player.hands_id,name: player.hands_name,rarity: qualityLookup[player.hands_quality]},
      {slot: 'waist',lvl: player.waist_ilvl,id: player.waist_id,name: player.waist_name,rarity: qualityLookup[player.waist_quality]},
      {slot: 'legs',lvl: player.legs_ilvl,id: player.legs_id,name: player.legs_name,rarity: qualityLookup[player.legs_quality]},
      {slot: 'feet',lvl: player.feet_ilvl,id: player.feet_id,name: player.feet_name,rarity: qualityLookup[player.feet_quality]},
      {slot: 'ring',lvl: player.finger1_ilvl,id: player.finger1_id,name: player.finger1_name,rarity: qualityLookup[player.finger1_quality]},
      {slot: 'ring',lvl: player.finger2_ilvl,id: player.finger2_id,name: player.finger2_name,rarity: qualityLookup[player.finger2_quality]},
      {slot: 'trinket',lvl: player.trinket1_ilvl,id: player.trinket1_id,name: player.trinket1_name,rarity: qualityLookup[player.trinket1_quality]},
      {slot: 'trinket',lvl: player.trinket2_ilvl,id: player.trinket2_id,name: player.trinket2_name,rarity: qualityLookup[player.trinket2_quality]},
    ]

    var playerOutput = {
      name: player.name,
      class: player.class,
      class_uri: player.class.toLowerCase().replace(/ /g, ''),
      wl_avg: player.wcl_avg,
      wl_rarity: wcl_rarity,
      spec: player.current_spec_name.toLowerCase().replace(/ /g, ''),
      ilvl: Math.round(player.ilvl),
      gear: gear
    }

    return playerOutput
  }

  return roster_Helper
}