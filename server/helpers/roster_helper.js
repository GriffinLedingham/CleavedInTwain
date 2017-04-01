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
    var wcl_rarity = calcRarity(player.wcl_avg)

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

    var dungeons = [
      {name:'Eye of Azshara',abbr:'EoA',abbr_uri:'eoa',count:player.eyeOfAzshara},
      {name:'Darkheart Thicket',abbr:'DHT',abbr_uri:'dht',count:player.darkheartThicket},
      {name:'Neltharion\'s Lair',abbr:'NL',abbr_uri:'nl',count:player['neltharion\'sLair']},
      {name:'Halls of Valor',abbr:'HoV',abbr_uri:'hov',count:player.hallsOfValor},
      {name:'Violet Hold',abbr:'VH',abbr_uri:'vh',count:player.violetHold},
      {name:'Vault of the Wardens',abbr:'VoW',abbr_uri:'vow',count:player.vaultOfTheWardens},
      {name:'Black Rook Hold',abbr:'BRH',abbr_uri:'brh',count:player.blackRookHold},
      {name:'Maw of Souls',abbr:'MoS',abbr_uri:'mos',count:player.mawOfSouls},
      {name:'Court of Stars',abbr:'CoS',abbr_uri:'cos',count:player.courtOfStars},
      {name:'Arcway',abbr:'AW',abbr_uri:'aw',count:player.arcway},
      {name:'Karazhan',abbr:'Kara',abbr_uri:'kara',count:player.karazhan},
      {name:'Cathedral Of Eternal Night',abbr:'CEN',abbr_uri:'cen',count:player.cathedralOfEternalNight}
    ]

    var wcl = [
      {name:'Skorpyron',score:player.wcl_skorp.toString().replace('-',0),abbr:'wcl_skorp',rarity:calcRarity(player.wcl_skorp)},
      {name:'Chronomatic Anomoly',score:player.wcl_chrono.toString().replace('-',0),abbr:'wcl_chrono',rarity:calcRarity(player.wcl_chrono)},
      {name:'Trilliax',score:player.wcl_trill.toString().replace('-',0),abbr:'wcl_trill',rarity:calcRarity(player.wcl_trill)},
      {name:'Spellblade Aluriel',score:player.wcl_spell.toString().replace('-',0),abbr:'wcl_spell',rarity:calcRarity(player.wcl_spell)},
      {name:'Tichondrius',score:player.wcl_tich.toString().replace('-',0),abbr:'wcl_tich',rarity:calcRarity(player.wcl_tich)},
      {name:'Star Augur',score:player.wcl_star.toString().replace('-',0),abbr:'wcl_star',rarity:calcRarity(player.wcl_star)},
      {name:'Krosus',score:player.wcl_krosus.toString().replace('-',0),abbr:'wcl_krosus',rarity:calcRarity(player.wcl_krosus)},
      {name:'High Botanist Tel\'arn',score:player.wcl_bot.toString().replace('-',0),abbr:'wcl_bot',rarity:calcRarity(player.wcl_bot)},
      {name:'Grand Magistrix Elisande',score:player.wcl_eli.toString().replace('-',0),abbr:'wcl_eli',rarity:calcRarity(player.wcl_eli)},
      {name:'Gul\'Dan',score:player.wcl_guldan.toString().replace('-',0),abbr:'wcl_guldan',rarity:calcRarity(player.wcl_guldan)},
    ]

    var playerOutput = {
      name: player.name,
      class: player.class,
      class_uri: player.class.toLowerCase().replace(/ /g, ''),
      wl_avg: player.wcl_avg,
      wl_rarity: wcl_rarity,
      wcl: wcl,
      spec: player.current_spec_name.toLowerCase().replace(/ /g, ''),
      ilvl: Math.round(player.ilvl),
      gear: gear,
      dungeon_count: player.dungeons_done_total,
      dungeon_week: player.dungeons_this_week,
      dungeons: dungeons
    }

    return playerOutput
  }

  return roster_Helper
}

function calcRarity(num) {
  var rarity = ''
  if(num >= 95) rarity = 'legendary'
  else if(num >= 80) rarity = 'epic'
  else if(num >= 50) rarity = 'rare'
  else if(num >= 25) rarity = 'uncommon'
  else rarity = 'common'
  return rarity
}