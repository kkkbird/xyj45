var mapdata = 
{
  "total": 7852,
  "count": 3605,
  "domains": {
    "33tian": 3,
    "4world": 38,
    "changan": 58,
    "city": 84,
    "death": 63,
    "eastway": 42,
    "erlang": 2,
    "gao": 34,
    "huanggong": 32,
    "jjf": 37,
    "kaifeng": 77,
    "lingtai": 39,
    "meishan": 19,
    "moon": 50,
    "nanhai": 46,
    "obj": 5,
    "ourhome": 33,
    "pantao": 45,
    "penglai": 27,
    "qujing": 1286,
    "sea": 66,
    "sky": 30,
    "suburb": 1413,
    "westway": 19,
    "wiz": 10,
    "xueshan": 47
  },
  "rooms": {
    "/d/33tian/33tian": {
      "type": "ROOM",
      "short": "离恨天",
      "exits": {
        "west": "/d/33tian/west1"
      }
    },
    "/d/33tian/doushuai-gate": {
      "type": "ROOM",
      "short": "殿门",
      "exits": {
        "east": "/d/33tian/west1"
      }
    },
    "/d/33tian/west1": {
      "type": "ROOM",
      "short": "离恨天",
      "exits": {
        "west": "/d/33tian/doushuai-gate",
        "east": "/d/33tian/33tian"
      }
    },
    "/d/4world/aolai": {
      "type": "ROOM",
      "short": "傲来国",
      "exits": {
        "south": "/d/4world/northgate.c",
        "west": "d/changan/aolaiws",
        "east": "/d/4world/flowerfruit"
      }
    },
    "/d/4world/bank": {
      "type": "BANK",
      "short": "张家钱庄",
      "exits": {
        "east": "/d/4world/north2"
      }
    },
    "/d/4world/cave": {
      "type": "ROOM",
      "short": "水帘洞",
      "exits": {
        "out": "/d/4world/ironbridge"
      }
    },
    "/d/4world/center": {
      "type": "ROOM",
      "short": "傲来台",
      "objects": {
        "/d/4world/npc/yiren": 1
      },
      "exits": {
        "north": "/d/4world/north1",
        "west": "/d/4world/west1",
        "east": "/d/4world/east1"
      }
    },
    "/d/4world/cuixiang": {
      "type": "ROOM",
      "short": "翠香楼",
      "exits": {
        "west": "/d/4world/north1"
      },
      "objects": {
        "/d/4world/npc/xiaoer": 1
      }
    },
    "/d/4world/east1": {
      "type": "ROOM",
      "short": "东苑街",
      "exits": {
        "north": "/d/4world/school1.c",
        "west": "/d/4world/center",
        "south": "/d/4world/shuyuan.c",
        "east": "/d/4world/east2.c"
      }
    },
    "/d/4world/east2": {
      "type": "ROOM",
      "short": "东苑街",
      "objects": {
        "/d/4world/npc/kid1": 1,
        "/d/4world/npc/kid": 1
      },
      "exits": {
        "south": "/d/4world/room2.c",
        "north": "/d/4world/room1.c",
        "west": "/d/4world/east1",
        "east": "/d/4world/guchang.c"
      }
    },
    "/d/4world/entrance": {
      "type": "ROOM",
      "short": "仙石",
      "objects": {
        "/d/ourhome/npc/longear": 1
      },
      "exits": {
        "eastup": "/d/4world/houshan1",
        "southdown": "/d/4world/up2"
      }
    },
    "/d/4world/flowerfruit": {
      "type": "ROOM",
      "short": "花果山",
      "exits": {
        "west": "/d/4world/aolai",
        "northup": "/d/4world/up1"
      }
    },
    "/d/4world/guchang": {
      "type": "ROOM",
      "short": "谷场",
      "objects": {
        "/d/4world/npc/muji": 2
      },
      "exits": {
        "west": "/d/4world/east2"
      }
    },
    "/d/4world/houshan1": {
      "type": "ROOM",
      "short": "后山小路",
      "objects": {
        "/d/4world/npc/monkey1": 2
      },
      "exits": {
        "westdown": "/d/4world/entrance",
        "northup": "/d/4world/houshan2"
      }
    },
    "/d/4world/houshan2": {
      "type": "ROOM",
      "short": "后山树丛",
      "objects": {
        "/d/4world/npc/monkey2": 1,
        "/d/4world/npc/monkey1": 1
      },
      "exits": {
        "north": "/d/4world/houshan3",
        "southdown": "/d/4world/houshan1"
      }
    },
    "/d/4world/houshan3": {
      "type": "ROOM",
      "short": "后山",
      "objects": {
        "/d/4world/npc/ma-yuanshuai": 1,
        "/d/4world/npc/liu-yuanshuai": 1
      },
      "exits": {
        "south": "/d/4world/houshan2",
        "east": "/d/4world/houshan4"
      }
    },
    "/d/4world/houshan4": {
      "type": "ROOM",
      "short": "桃树林",
      "objects": {
        "/d/obj/drug/mihoutao": 2
      },
      "exits": {
        "west": "/d/4world/houshan3"
      }
    },
    "/d/4world/huofang": {
      "type": "ROOM",
      "short": "仓库",
      "objects": {
        "/d/4world/npc/man": 3
      },
      "exits": {
        "south": "/d/4world/west1"
      }
    },
    "/d/4world/inner_shuiliandong": {
      "type": "ROOM",
      "short": "水帘洞内部"
    },
    "/d/4world/ironbridge": {
      "type": "ROOM",
      "short": "铁板桥",
      "exits": {
        "down": "/d/4world/dragonpalace",
        "out": "/d/4world/fall",
        "cave": "/d/4world/cave"
      }
    },
    "/d/4world/north1": {
      "type": "ROOM",
      "short": "北菀街",
      "exits": {
        "north": "/d/4world/north2",
        "south": "/d/4world/center.c",
        "east": "/d/4world/cuixiang.c"
      }
    },
    "/d/4world/north2": {
      "type": "ROOM",
      "short": "北菀街",
      "exits": {
        "north": "/d/4world/northgate",
        "south": "/d/4world/north1.c",
        "west": "/d/4world/bank.c",
        "east": "/d/4world/pownshop.c"
      },
      "objects": {
        "/d/4world/npc/monk": 1
      }
    },
    "/d/4world/northgate": {
      "type": "ROOM",
      "short": "傲来国北城门",
      "objects": {
        "/d/4world/npc/wushi": 2
      },
      "exits": {
        "south": "/d/4world/north2.c",
        "north": "/d/4world/aolai"
      }
    },
    "/d/4world/pownshop": {
      "type": "HOCKSHOP",
      "short": "吴家当铺",
      "objects": {
        "/d/4world/npc/wu": 1
      },
      "exits": {
        "west": "/d/4world/north2.c"
      }
    },
    "/d/4world/room1": {
      "type": "ROOM",
      "short": "民宅",
      "exits": {
        "south": "/d/4world/east2"
      },
      "objects": {
        "/d/4world/npc/woman": 1,
        "/d/4world/npc/kid": 1
      }
    },
    "/d/4world/room2": {
      "type": "ROOM",
      "short": "民宅",
      "exits": {
        "north": "/d/4world/east2"
      },
      "objects": {
        "/d/4world/npc/zhu2": 1,
        "/d/4world/npc/zhu1": 1
      }
    },
    "/d/4world/school1": {
      "type": "ROOM",
      "short": "东方武馆大门",
      "objects": {
        "/d/4world/npc/guard": 1
      },
      "exits": {
        "north": "/d/4world/school2.c",
        "south": "/d/4world/east1"
      }
    },
    "/d/4world/school2": {
      "type": "ROOM",
      "short": "武馆教练场",
      "exits": {
        "north": "/d/4world/schoolhall.c",
        "south": "/d/4world/school1",
        "east": "/d/4world/storage.c"
      },
      "objects": {
        "/d/4world/npc/dizi": 4,
        "/d/4world/npc/dongfangcong": 1
      }
    },
    "/d/4world/schoolbook": {
      "type": "ROOM",
      "short": "书房",
      "exits": {
        "south": "/d/4world/schoolin"
      },
      "objects": {
        "/d/4world/npc/dongfangying": 1,
        "/d/4world/npc/dongfanger": 1
      }
    },
    "/d/4world/schoolhall": {
      "type": "ROOM",
      "short": "武馆大厅",
      "exits": {
        "south": "/d/4world/school2",
        "east": "/d/4world/schoolin.c"
      },
      "objects": {
        "/d/4world/npc/dongfang": 1
      }
    },
    "/d/4world/schoolin": {
      "type": "ROOM",
      "short": "天井",
      "exits": {
        "north": "/d/4world/schoolbook",
        "south": "/d/4world/schoolrest",
        "west": "/d/4world/schoolhall"
      },
      "objects": {
        "/d/4world/npc/gardener": 1
      }
    },
    "/d/4world/schoolrest": {
      "type": "ROOM",
      "short": "客房",
      "exits": {
        "north": "/d/4world/schoolin"
      }
    },
    "/d/4world/shiwu": {
      "type": "ROOM",
      "short": "石屋",
      "objects": {
        "/d/4world/npc/aqi": 1
      },
      "exits": {
        "north": "/d/4world/west2"
      }
    },
    "/d/4world/shuyuan": {
      "type": "ROOM",
      "short": "西城书院",
      "exits": {
        "north": "/d/4world/east1"
      },
      "objects": {
        "/d/4world/npc/xiucai": 1
      }
    },
    "/d/4world/storage": {
      "type": "ROOM",
      "short": "储藏室",
      "objects": {
        "/d/obj/weapon/hammer/stonehammer": 1
      },
      "exits": {
        "west": "/d/4world/school2"
      }
    },
    "/d/4world/tudi": {
      "type": "ROOM",
      "short": "土地庙",
      "exits": {
        "south": "/d/4world/west2"
      }
    },
    "/d/4world/up1": {
      "type": "ROOM",
      "short": "林间小路",
      "objects": {
        "/d/4world/npc/monkey2": 1,
        "/d/4world/npc/monkey1": 1
      },
      "exits": {
        "eastup": "/d/4world/up2",
        "southdown": "/d/4world/flowerfruit"
      }
    },
    "/d/4world/up2": {
      "type": "ROOM",
      "short": "林间小路",
      "exits": {
        "westdown": "/d/4world/up1",
        "northup": "/d/4world/entrance"
      }
    },
    "/d/4world/west1": {
      "type": "ROOM",
      "short": "西芫街",
      "exits": {
        "north": "/d/4world/huofang.c",
        "south": "/d/4world/zhaiyuan.c",
        "west": "/d/4world/west2.c",
        "east": "/d/4world/center"
      },
      "objects": {
        "/d/4world/npc/kid": 1,
        "/d/city/npc/dog": 1
      }
    },
    "/d/4world/west2": {
      "type": "ROOM",
      "short": "西芫街",
      "exits": {
        "south": "/d/4world/shiwu.c",
        "north": "/d/4world/tudi.c",
        "east": "/d/4world/west1"
      }
    },
    "/d/4world/zhaiyuan": {
      "type": "ROOM",
      "short": "斋院",
      "exits": {
        "north": "/d/4world/west1"
      },
      "objects": {
        "/d/4world/npc/laotou": 1,
        "/d/obj/food/baozi": 2,
        "/d/obj/food/chahu": 1
      }
    },
    "/d/changan/aolaiws": {
      "type": "ROOM",
      "short": "傲来国西海岸",
      "exits": {
        "east": "/d/4world/aolai"
      }
    },
    "/d/changan/bridge": {
      "type": "ROOM",
      "short": "泾水桥",
      "exits": {
        "south": "/d/changan/sbridge",
        "north": "/d/changan/nbridge"
      }
    },
    "/d/changan/broadway1": {
      "type": "ROOM",
      "short": "大官道",
      "exits": {
        "east": "/d/changan/fendui.c",
        "south": "/d/changan/zhongnan",
        "north": "/d/changan/sbridge"
      }
    },
    "/d/changan/broadway2": {
      "type": "ROOM",
      "short": "大官道",
      "exits": {
        "south": "/d/changan/nanyue",
        "north": "/d/changan/zhongnan"
      }
    },
    "/d/changan/broadway3": {
      "type": "ROOM",
      "short": "大官道",
      "exits": {
        "west": "/d/changan/wroad1",
        "south": "/d/changan/broadway4",
        "north": "/d/changan/nanyue"
      }
    },
    "/d/changan/broadway4": {
      "type": "ROOM",
      "short": "大官道",
      "exits": {
        "south": "/d/changan/broadway5",
        "north": "/d/changan/broadway3"
      }
    },
    "/d/changan/broadway5": {
      "type": "ROOM",
      "short": "大官道",
      "exits": {
        "south": "/d/changan/southseashore",
        "north": "/d/changan/broadway4"
      }
    },
    "/d/changan/eastseashore": {
      "type": "ROOM",
      "short": "东海之滨",
      "exits": {
        "west": "/d/changan/seashore2"
      }
    },
    "/d/changan/eside1": {
      "type": "ROOM",
      "short": "泾水之滨",
      "exits": {
        "west": "/d/changan/nbridge",
        "east": "/d/changan/eside2"
      }
    },
    "/d/changan/eside2": {
      "type": "ROOM",
      "short": "泾水之滨",
      "objects": {
        "/d/changan/npc/qiaofu": 1,
        "/d/changan/npc/fisher": 1
      },
      "exits": {
        "west": "/d/changan/eside1",
        "east": "/d/changan/eside3",
        "northup": "/d/changan/xiaoqiu"
      }
    },
    "/d/changan/eside3": {
      "type": "ROOM",
      "short": "泾水之滨",
      "exits": {
        "west": "/d/changan/eside2",
        "east": "/d/changan/eside4"
      }
    },
    "/d/changan/eside4": {
      "type": "ROOM",
      "short": "泾水之滨",
      "exits": {
        "west": "/d/changan/eside3",
        "east": "/d/changan/eside5"
      }
    },
    "/d/changan/eside5": {
      "type": "ROOM",
      "short": "泾水之滨",
      "exits": {
        "west": "/d/changan/eside4"
      }
    },
    "/d/changan/fendui": {
      "type": "ROOM",
      "short": "荒坟堆",
      "exits": {
        "west": "/d/changan/broadway1"
      }
    },
    "/d/changan/inwater": {
      "type": "ROOM",
      "short": "泾水",
      "exits": {
        "north": "/d/changan/eside1"
      },
      "objects": {
        "/d/sea/npc/long7.c": 1
      }
    },
    "/d/changan/mufa": {
      "type": "ROOM",
      "short": "海中孤筏",
      "exits": {
        "out": "/d/changan/aolaiws.c"
      }
    },
    "/d/changan/nanchengkou": {
      "type": "ROOM",
      "short": "南城口",
      "exits": {
        "south": "/d/changan/nbridge",
        "north": "/d/city/zhuque-s4"
      },
      "objects": {
        "/d/city/npc/wujiang": 1,
        "/d/city/npc/bing": 3
      }
    },
    "/d/changan/nanyue": {
      "type": "ROOM",
      "short": "南岳",
      "exits": {
        "north": "/d/changan/broadway2",
        "south": "/d/changan/broadway3",
        "southeast": "/d/meishan/guanjiang1"
      }
    },
    "/d/changan/nbridge": {
      "type": "ROOM",
      "short": "泾水桥北",
      "exits": {
        "west": "/d/changan/wside1",
        "south": "/d/changan/bridge",
        "north": "/d/changan/nanchengkou",
        "east": "/d/changan/eside1"
      }
    },
    "/d/changan/office": {
      "type": "ROOM",
      "short": "房管所",
      "objects": {
        "/d/changan/officer": 1
      },
      "exits": {
        "east": "/d/changan/ph"
      }
    },
    "/d/changan/ph": {
      "type": "ROOM",
      "short": "住宅区",
      "exits": {
        "west": "/d/changan/office",
        "east": "/d/changan/wside5"
      }
    },
    "/d/changan/phomes": {
      "type": "ROOM",
      "short": "住宅区",
      "exits": {
        "south": "/d/changan/wside5"
      }
    },
    "/d/changan/pinqiting": {
      "type": "ROOM",
      "short": "品棋亭",
      "objects": {
        "/d/obj/misc/table": 1,
        "/d/obj/misc/xiaqi-zhinan": 1,
        "/d/obj/misc/seat": 2,
        "/d/xueshan/npc/wuya-guai": 1
      },
      "exits": {
        "out": "/d/changan/xiaoqiu"
      }
    },
    "/d/changan/playerhomes/bed_croc": {
      "type": "ROOM",
      "short": "床上",
      "exits": {
        "out": "/d/changan/playerhomes/h_croc"
      }
    },
    "/d/changan/playerhomes/bed_mes": {
      "type": "ROOM",
      "short": "床上",
      "exits": {
        "out": "/d/changan/playerhomes/h_mes"
      }
    },
    "/d/changan/playerhomes/bed_none": {
      "type": "ROOM",
      "short": "床上",
      "exits": {
        "out": "/d/changan/playerhomes/h_none"
      }
    },
    "/d/changan/playerhomes/bed_nonn": {
      "type": "ROOM",
      "short": "床上",
      "exits": {
        "out": "/d/changan/playerhomes/h_nonn"
      }
    },
    "/d/changan/playerhomes/bed_pickle": {
      "type": "ROOM",
      "short": "床上",
      "exits": {
        "out": "/d/changan/playerhomes/h_pickle"
      }
    },
    "/d/changan/playerhomes/bed_test": {
      "type": "ROOM",
      "short": "床上",
      "exits": {
        "out": "/d/changan/playerhomes/h_test"
      }
    },
    "/d/changan/playerhomes/bed_tingting": {
      "type": "ROOM",
      "short": "床上",
      "exits": {
        "out": "/d/changan/playerhomes/h_tingting"
      }
    },
    "/d/changan/playerhomes/h_croc": {
      "type": "ROOM",
      "short": "鳄鱼和黑瘦妹的家",
      "exits": {
        "out": "/d/changan/phomes"
      },
      "objects": {
        "/d/changan/playerhomes/npc/babyslimia": 1,
        "/d/changan/playerhomes/npc/babycroc": 1
      }
    },
    "/d/changan/playerhomes/h_mes": {
      "type": "ROOM",
      "short": "小草屋",
      "exits": {
        "out": "/d/changan/phomes"
      }
    },
    "/d/changan/playerhomes/h_mon_bed": {
      "type": "ROOM",
      "short": "床上",
      "exits": {
        "out": "/d/changan/playerhomes/h_mon"
      }
    },
    "/d/changan/playerhomes/h_none": {
      "type": "ROOM",
      "short": "呆头呆脑和魂断兰桥的家",
      "exits": {
        "out": "/d/changan/phomes"
      }
    },
    "/d/changan/playerhomes/h_nonn": {
      "type": "ROOM",
      "short": "标准新房",
      "exits": {
        "out": "/d/changan/phomes"
      }
    },
    "/d/changan/playerhomes/h_pickle": {
      "type": "ROOM",
      "short": "酱菜坛子",
      "exits": {
        "out": "/d/changan/phomes"
      }
    },
    "/d/changan/playerhomes/h_test": {
      "type": "ROOM",
      "short": "标准新房",
      "exits": {
        "out": "/d/changan/phomes"
      }
    },
    "/d/changan/playerhomes/h_tingting": {
      "type": "ROOM",
      "short": "标准新房",
      "exits": {
        "out": "/d/changan/phomes"
      }
    },
    "/d/changan/playerhomes/home": {
      "type": [
        "ROOM",
        "F_SAVE"
      ],
      "short": "标准新房",
      "exits": {
        "out": "/d/changan/phomes"
      }
    },
    "/d/changan/playerhomes/stdbed": {
      "type": "ROOM",
      "short": "床上",
      "exits": {
        "out": "/d/changan/playerhomes/stdhome"
      }
    },
    "/d/changan/playerhomes/stdhome": {
      "type": "ROOM",
      "short": "标准新房",
      "exits": {
        "out": "/d/changan/phomes"
      }
    },
    "/d/changan/sbridge": {
      "type": "ROOM",
      "short": "泾水桥南",
      "objects": {},
      "exits": {
        "south": "/d/changan/broadway1",
        "north": "/d/changan/bridge"
      }
    },
    "/d/changan/seashore1": {
      "type": "ROOM",
      "short": "海滨",
      "exits": {
        "west": "/d/changan/southseashore",
        "east": "/d/changan/seashore2"
      }
    },
    "/d/changan/seashore2": {
      "type": "ROOM",
      "short": "海滨",
      "objects": {
        "/d/sea/npc/long1.c": 1
      },
      "exits": {
        "west": "/d/changan/seashore1",
        "east": "/d/changan/eastseashore"
      }
    },
    "/d/changan/southgate": {
      "type": "ROOM",
      "short": "南城门",
      "exits": {
        "south": "/d/changan/nbridge"
      }
    },
    "/d/changan/southseashore": {
      "type": "ROOM",
      "short": "南海之滨",
      "exits": {
        "north": "/d/changan/broadway5",
        "east": "/d/changan/seashore1"
      }
    },
    "/d/changan/tmpbank": {
      "type": "BANK",
      "short": "相氏钱庄临时办事处",
      "exits": {
        "south": "/d/changan/eside1"
      },
      "objects": {
        "/d/changan/npc/tiesp": 1
      }
    },
    "/d/changan/tmppawn": {
      "type": "HOCKSHOP",
      "short": "三喜当铺临时办事处",
      "exits": {
        "south": "/d/changan/eside2"
      }
    },
    "/d/changan/wroad1": {
      "type": "ROOM",
      "short": "青石路",
      "exits": {
        "west": "/d/changan/wroad2",
        "east": "/d/changan/broadway3"
      }
    },
    "/d/changan/wroad2": {
      "type": "ROOM",
      "short": "青石路",
      "exits": {
        "west": "/d/changan/wroad3",
        "east": "/d/changan/wroad1"
      }
    },
    "/d/changan/wroad3": {
      "type": "ROOM",
      "short": "青石路",
      "exits": {
        "west": "d/gao/lu1",
        "east": "/d/changan/wroad2"
      }
    },
    "/d/changan/wside1": {
      "type": "ROOM",
      "short": "泾水之滨",
      "exits": {
        "west": "/d/changan/wside2",
        "east": "/d/changan/nbridge"
      }
    },
    "/d/changan/wside2": {
      "type": "ROOM",
      "short": "泾水之滨",
      "exits": {
        "west": "/d/changan/wside3",
        "east": "/d/changan/wside1"
      }
    },
    "/d/changan/wside3": {
      "type": "ROOM",
      "short": "泾水之滨",
      "exits": {
        "west": "/d/changan/wside4",
        "east": "/d/changan/wside2"
      }
    },
    "/d/changan/wside4": {
      "type": "ROOM",
      "short": "泾水之滨",
      "exits": {
        "west": "/d/changan/wside5",
        "east": "/d/changan/wside3"
      }
    },
    "/d/changan/wside5": {
      "type": "ROOM",
      "short": "泾水之滨",
      "exits": {
        "west": "/d/changan/ph",
        "east": "/d/changan/wside4"
      }
    },
    "/d/changan/xiaoqiu": {
      "type": "ROOM",
      "short": "小土丘",
      "exits": {
        "southdown": "/d/changan/eside2",
        "enter": "/d/changan/pinqiting"
      }
    },
    "/d/changan/zhongnan": {
      "type": "ROOM",
      "short": "终南山口",
      "exits": {
        "south": "/d/changan/broadway2",
        "north": "/d/changan/broadway1"
      }
    },
    "/d/city/baihu-w1": {
      "type": "ROOM",
      "short": "白虎大街",
      "exits": {
        "south": "/d/city/bank",
        "north": "/d/city/bookstore",
        "west": "/d/city/baihu-w2",
        "east": "/d/city/center"
      },
      "objects": {}
    },
    "/d/city/baihu-w2": {
      "type": "ROOM",
      "short": "白虎大街",
      "exits": {
        "south": "/d/city/zhongguan",
        "north": "/d/city/zhongdu",
        "west": "/d/city/baihu-w3",
        "east": "/d/city/baihu-w1"
      },
      "objects": {}
    },
    "/d/city/baihu-w3": {
      "type": "ROOM",
      "short": "白虎大街",
      "exits": {
        "south": "/d/city/huashengsi",
        "north": "/d/city/ziyanglou",
        "west": "/d/city/baihu-w4",
        "east": "/d/city/baihu-w2"
      },
      "objects": {}
    },
    "/d/city/baihu-w4": {
      "type": "ROOM",
      "short": "白虎大街",
      "exits": {
        "south": "/d/city/beiyin1",
        "north": "/d/city/wailiu1",
        "west": "/d/city/ximen",
        "east": "/d/city/baihu-w3"
      },
      "objects": {}
    },
    "/d/city/bank": {
      "type": "BANK",
      "short": "相记钱庄",
      "exits": {
        "north": "/d/city/baihu-w1"
      },
      "objects": {
        "/d/city/npc/tiesuanpan": 1
      }
    },
    "/d/city/baodian": {
      "type": "ROOM",
      "short": "大雄宝殿",
      "exits": {
        "north": "/d/city/huashengsi",
        "east": "/d/city/fangzhang"
      },
      "objects": {}
    },
    "/d/city/baozipu": {
      "type": "ROOM",
      "short": "包子铺",
      "exits": {
        "east": "/d/city/wailiu1"
      },
      "objects": {
        "/d/city/npc/jia": 1
      }
    },
    "/d/city/beiyin1": {
      "type": "ROOM",
      "short": "背阴巷",
      "exits": {
        "east": "/d/city/minju1",
        "southeast": "/d/city/beiyin2",
        "north": "/d/city/baihu-w4"
      },
      "objects": {}
    },
    "/d/city/beiyin2": {
      "type": "ROOM",
      "short": "背阴巷",
      "exits": {
        "west": "/d/city/sanhua",
        "east": "/d/city/jiuguan",
        "northwest": "/d/city/beiyin1",
        "south": "/d/city/beiyin3"
      },
      "objects": {
        "/d/city/npc/thief": 1
      }
    },
    "/d/city/beiyin3": {
      "type": "ROOM",
      "short": "背阴巷",
      "exits": {
        "north": "/d/city/beiyin2",
        "east": "/d/city/beiyin4",
        "west": "/d/city/minju2",
        "south": "/d/city/minju3"
      },
      "objects": {}
    },
    "/d/city/beiyin4": {
      "type": "ROOM",
      "short": "背阴巷",
      "exits": {
        "north": "/d/city/jiuguan",
        "west": "/d/city/beiyin3",
        "southeast": "/d/city/beiyin5",
        "east": "/d/city/liangdian"
      },
      "objects": {
        "/d/city/npc/liumang": 1
      }
    },
    "/d/city/beiyin5": {
      "type": "ROOM",
      "short": "背阴巷",
      "exits": {
        "east": "/d/city/zhuque-s4",
        "northwest": "/d/city/beiyin4",
        "west": "/d/city/zahuopu",
        "south": "/d/city/minju4"
      },
      "objects": {}
    },
    "/d/city/biaoju": {
      "type": "ROOM",
      "short": "镖局大院",
      "exits": {
        "south": "/d/city/qinglong-e2"
      },
      "objects": {
        "/d/city/npc/xiaoshen": 1,
        "/d/city/npc/biaotou": 2,
        "/d/obj/misc/tables": 1,
        "/d/obj/misc/chairs": 2
      }
    },
    "/d/city/bingqipu": {
      "type": "ROOM",
      "short": "兵器铺",
      "exits": {
        "north": "/d/city/qinglong-e1"
      },
      "objects": {
        "/d/city/npc/xiaoxiao": 1
      }
    },
    "/d/city/bookstore": {
      "type": "ROOM",
      "short": "三联书局",
      "exits": {
        "south": "/d/city/baihu-w1"
      },
      "objects": {
        "/d/city/npc/bookseller": 1,
        "/d/obj/misc/tables": 1,
        "/d/obj/misc/chairs": 2
      }
    },
    "/d/city/buzhuang": {
      "type": "ROOM",
      "short": "柳记布庄",
      "exits": {
        "east": "/d/city/xuanwu-n1"
      },
      "objects": {
        "/d/city/npc/liu": 1,
        "/d/obj/misc/tables": 1,
        "/d/obj/misc/chairs": 2
      }
    },
    "/d/city/caotang": {
      "type": "ROOM",
      "short": "袁氏草堂",
      "exits": {
        "east": "/d/city/wailiu2"
      },
      "objects": {
        "/d/city/npc/shouchen": 1,
        "/d/city/npc/xiushi": 1,
        "/d/obj/misc/tables": 1,
        "/d/obj/misc/chairs": 2
      }
    },
    "/d/city/center": {
      "type": "ROOM",
      "short": "十字街头",
      "exits": {
        "south": "/d/city/zhuque-s1",
        "north": "/d/city/xuanwu-n1",
        "west": "/d/city/baihu-w1",
        "east": "/d/city/qinglong-e1",
        "northwest": "/d/jjf/qilin",
        "southeast": "/d/jjf/zuixing"
      },
      "objects": {
        "/d/city/npc/libai": 1,
        "/d/qujing/wuzhuang/npc/zhangguolao": 1
      }
    },
    "/d/city/chenghuang": {
      "type": "ROOM",
      "short": "城隍庙",
      "exits": {
        "south": "/d/city/wailiu2"
      },
      "objects": {
        "/d/city/npc/keeper": 1
      }
    },
    "/d/city/club": {
      "type": "ROOM",
      "short": "长安乐坊",
      "exits": {
        "up": "/d/city/clubup",
        "east": "/d/city/xuanwu-n2"
      },
      "objects": {
        "/d/obj/misc/tables": 1,
        "/d/obj/misc/chairs": 2
      }
    },
    "/d/city/club3": {
      "type": "ROOM",
      "short": "聚义厅",
      "exits": {
        "down": "/d/city/clubpoem",
        "north": "/d/city/piggy"
      }
    },
    "/d/city/clubpoem": {
      "type": "ROOM",
      "short": "乐府诗社",
      "exits": {
        "down": "/d/city/clubup",
        "west": "/d/city/shaizi-room",
        "up": "/d/city/club3"
      },
      "objects": {
        "/d/city/npc/teawaiter": 1,
        "/d/city/npc/suanxiucai": 1,
        "/d/obj/misc/tables": 1
      }
    },
    "/d/city/clubup": {
      "type": "ROOM",
      "short": "长安二楼",
      "exits": {
        "up": "/d/city/clubpoem",
        "west": "/d/city/duchang1",
        "east": "/d/city/duchang2",
        "north": "/d/city/duchang3",
        "south": "/d/city/duchang4",
        "down": "/d/city/club"
      },
      "objects": {
        "/d/obj/misc/tables": 3
      }
    },
    "/d/city/dangpu": {
      "type": "HOCKSHOP",
      "short": "董记当铺",
      "exits": {
        "east": "/d/city/zhuque-s1"
      },
      "objects": {
        "/d/city/npc/pablo": 1
      }
    },
    "/d/city/datang": {
      "type": "ROOM",
      "short": "长安府大堂",
      "exits": {
        "south": "/d/city/zhongdu"
      }
    },
    "/d/city/dongmen": {
      "type": "ROOM",
      "short": "长安城东门",
      "exits": {
        "west": "/d/city/qinglong-e4",
        "east": "/d/kaifeng/east1"
      },
      "objects": {
        "/d/city/npc/wujiang": 1,
        "/d/city/npc/bing": 3
      }
    },
    "/d/city/duchang1": {
      "type": "ROOM",
      "short": "押签房",
      "exits": {
        "east": "/d/city/clubup"
      },
      "objects": {
        "/d/city/npc/qianke": 1
      }
    },
    "/d/city/duchang2": {
      "type": "ROOM",
      "short": "骨骰房",
      "objects": {
        "/d/city/npc/zhuangd": 1
      },
      "exits": {
        "west": "/d/city/clubup"
      }
    },
    "/d/city/duchang3": {
      "type": "ROOM",
      "short": "斗鸡房",
      "objects": {
        "/d/city/npc/jixian": 1
      },
      "exits": {
        "south": "/d/city/clubup"
      }
    },
    "/d/city/duchang4": {
      "type": "ROOM",
      "short": "赛龟房",
      "objects": {
        "/d/city/npc/guitong": 1
      },
      "exits": {
        "north": "/d/city/clubup"
      }
    },
    "/d/city/fangzhang": {
      "type": "ROOM",
      "short": "方丈室",
      "exits": {
        "west": "/d/city/baodian"
      },
      "objects": {
        "/d/city/npc/faming": 1
      }
    },
    "/d/city/gudongdian": {
      "type": "ROOM",
      "short": "古董店",
      "exits": {
        "west": "/d/city/wailiu2"
      },
      "objects": {
        "/d/city/npc/lin": 1,
        "/d/obj/misc/tables": 3,
        "/d/obj/misc/chairs": 6
      }
    },
    "/d/city/gulou": {
      "type": "ROOM",
      "short": "鼓楼",
      "exits": {
        "west": "/d/city/wailiu1"
      },
      "objects": {}
    },
    "/d/city/guozi": {
      "type": "ROOM",
      "short": "国子监",
      "exits": {
        "west": "/d/city/guozijian"
      },
      "objects": {
        "/d/city/npc/xiucai4": 1,
        "/d/obj/misc/tables": 1,
        "/d/obj/misc/chairs": 2
      }
    },
    "/d/city/guozijian": {
      "type": "ROOM",
      "short": "国子监大院",
      "exits": {
        "west": "/d/city/xuanwu-n3",
        "east": "/d/city/guozi"
      },
      "objects": {
        "/d/city/npc/xiucai1": 1,
        "/d/city/npc/xiucai2": 1
      }
    },
    "/d/city/huashengsi": {
      "type": "ROOM",
      "short": "化生寺",
      "exits": {
        "south": "/d/city/baodian",
        "north": "/d/city/baihu-w3"
      },
      "objects": {
        "/d/city/npc/sengren1": 1,
        "/d/city/npc/sengren": 2
      }
    },
    "/d/city/jiuguan": {
      "type": "ROOM",
      "short": "小酒馆",
      "exits": {
        "west": "/d/city/beiyin2",
        "south": "/d/city/beiyin4"
      },
      "objects": {
        "/d/city/npc/xiaowang": 1,
        "/d/city/npc/kuli": 2
      }
    },
    "/d/city/junying": {
      "type": "ROOM",
      "short": "御林军营",
      "exits": {
        "east": "/d/city/xuanwu-n4"
      },
      "objects": {
        "/d/city/npc/yulinjun": 3
      }
    },
    "/d/city/kezhan": {
      "type": "ROOM",
      "short": "南城客栈",
      "exits": {
        "east": "/d/city/sleep",
        "west": "/d/city/zhuque-s1",
        "up": "/d/city/kezhanup"
      },
      "objects": {
        "/d/city/npc/xiaoer": 1,
        "/d/ourhome/npc/bigeye": 1
      }
    },
    "/d/city/kezhanup": {
      "type": "ROOM",
      "short": "南城客栈二楼",
      "objects": {
        "/d/city/npc/haoke1": 1,
        "/d/city/npc/haoke2": 1
      },
      "exits": {
        "down": "/d/city/kezhan"
      }
    },
    "/d/city/liangdian": {
      "type": "ROOM",
      "short": "粮仓",
      "exits": {
        "west": "/d/city/beiyin4"
      },
      "objects": {
        "/d/city/npc/feng": 1
      }
    },
    "/d/city/maohuo": {
      "type": "ROOM",
      "short": "老孙皮货店",
      "exits": {
        "east": "/d/city/zhuque-s3"
      },
      "objects": {
        "/d/city/npc/laosun": 1,
        "/d/obj/misc/tables": 1,
        "/d/obj/misc/chairs": 2
      }
    },
    "/d/city/minju1": {
      "type": "ROOM",
      "short": "民居",
      "exits": {
        "west": "/d/city/beiyin1"
      },
      "objects": {
        "/d/city/npc/dog": 1,
        "/d/city/npc/girl": 1,
        "/d/city/npc/liyu": 1
      }
    },
    "/d/city/minju2": {
      "type": "ROOM",
      "short": "民居",
      "exits": {
        "east": "/d/city/beiyin3"
      },
      "objects": {
        "/d/city/npc/xiaopizi": 2
      }
    },
    "/d/city/minju3": {
      "type": "ROOM",
      "short": "民居",
      "exits": {
        "north": "/d/city/beiyin3"
      },
      "objects": {
        "/d/city/npc/rat": 3,
        "/d/qujing/wudidong/npc/bianfu": 1
      }
    },
    "/d/city/minju4": {
      "type": "ROOM",
      "short": "民居",
      "exits": {
        "north": "/d/city/beiyin5"
      },
      "objects": {
        "/d/city/npc/woman": 1,
        "/d/city/npc/boy": 1,
        "/d/obj/weapon/blade/caidao": 1
      }
    },
    "/d/city/muqi": {
      "type": "ROOM",
      "short": "木器铺",
      "exits": {
        "west": "/d/city/xuanwu-n1"
      },
      "objects": {
        "/d/city/npc/lu": 1
      }
    },
    "/d/city/piggy": {
      "type": "ROOM",
      "short": "拱猪房",
      "exits": {
        "south": "/d/city/club3"
      }
    },
    "/d/city/puke-room": {
      "type": "ROOM",
      "short": "拱猪房",
      "exits": {
        "west": "/d/city/clubpoem"
      },
      "objects": {}
    },
    "/d/city/qinglong-e1": {
      "type": "ROOM",
      "short": "青龙大街",
      "exits": {
        "south": "/d/city/bingqipu",
        "north": "/d/city/zahuohang",
        "west": "/d/city/center",
        "east": "/d/city/qinglong-e2"
      },
      "objects": {}
    },
    "/d/city/qinglong-e2": {
      "type": "ROOM",
      "short": "青龙大街",
      "exits": {
        "south": "/d/jjf/gate",
        "north": "/d/city/biaoju",
        "west": "/d/city/qinglong-e1",
        "east": "/d/city/qinglong-e3"
      },
      "objects": {}
    },
    "/d/city/qinglong-e3": {
      "type": "ROOM",
      "short": "青龙大街",
      "exits": {
        "south": "/d/city/qingxuguan",
        "north": "/d/city/tiejiangpu",
        "west": "/d/city/qinglong-e2",
        "east": "/d/city/qinglong-e4"
      },
      "objects": {
        "/d/city/npc/youxia": 1
      }
    },
    "/d/city/qinglong-e4": {
      "type": "ROOM",
      "short": "青龙大街",
      "exits": {
        "south": "/d/eastway/wangnan1",
        "north": "/d/jjf/yingfang",
        "west": "/d/city/qinglong-e3",
        "east": "/d/city/dongmen"
      },
      "objects": {}
    },
    "/d/city/qingxuguan": {
      "type": "ROOM",
      "short": "清虚观",
      "exits": {
        "north": "/d/city/qinglong-e3"
      },
      "objects": {
        "/d/city/npc/daozhang": 1,
        "/d/lingtai/npc/xiao": 2
      }
    },
    "/d/city/sanhua": {
      "type": "ROOM",
      "short": "三花堂",
      "exits": {
        "east": "/d/city/beiyin2"
      },
      "objects": {
        "/d/city/npc/tangzhu1": 1,
        "/d/city/npc/fei1": 2,
        "/d/city/npc/fei2": 2
      }
    },
    "/d/city/shaizi-room": {
      "type": "ROOM",
      "short": "骰子房",
      "exits": {
        "east": "/d/city/clubpoem"
      },
      "objects": {
        "/d/city/npc/gongsun": 1
      }
    },
    "/d/city/sleep": {
      "type": "ROOM",
      "short": "客店睡房",
      "exits": {
        "west": "/d/city/kezhan"
      }
    },
    "/d/city/sm-room": {
      "type": "ROOM",
      "short": "法宝炼制场",
      "exits": {
        "south": "/d/city/kezhan"
      }
    },
    "/d/city/tianjiantai": {
      "type": "ROOM",
      "short": "天监台",
      "exits": {
        "west": "/d/city/xuanwu-n4"
      },
      "objects": {
        "/d/city/npc/yuantiangang": 1
      }
    },
    "/d/city/tiejiangpu": {
      "type": "ROOM",
      "short": "铁匠铺",
      "exits": {
        "south": "/d/city/qinglong-e3"
      },
      "objects": {
        "/d/city/npc/tiejiang": 1
      }
    },
    "/d/city/wailiu1": {
      "type": "ROOM",
      "short": "歪柳巷",
      "exits": {
        "south": "/d/city/baihu-w4",
        "north": "/d/city/wailiu2",
        "west": "/d/city/baozipu",
        "east": "/d/city/gulou"
      },
      "objects": {
        "/d/city/npc/yiren2": 1,
        "/d/4world/npc/kid": 1,
        "/d/4world/npc/kid1": 1
      }
    },
    "/d/city/wailiu2": {
      "type": "ROOM",
      "short": "歪柳巷",
      "exits": {
        "south": "/d/city/wailiu1",
        "north": "/d/city/chenghuang",
        "west": "/d/city/caotang",
        "northeast": "/d/city/wailiu3",
        "east": "/d/city/gudongdian"
      },
      "objects": {
        "/d/city/npc/yiren1": 1
      }
    },
    "/d/city/wailiu3": {
      "type": "ROOM",
      "short": "歪柳巷",
      "exits": {
        "southwest": "/d/city/wailiu2"
      },
      "objects": {}
    },
    "/d/city/wuguan": {
      "type": "ROOM",
      "short": "长安武馆",
      "exits": {
        "west": "/d/city/xuanwu-n2",
        "east": "/d/city/wuguanzhong"
      },
      "objects": {
        "/d/city/npc/dizi": 4,
        "/d/city/npc/jiaotou": 1
      }
    },
    "/d/city/wuguanzhong": {
      "type": "ROOM",
      "short": "长安武馆",
      "objects": {
        "/d/city/npc/fan": 1,
        "/d/obj/misc/chairs": 2
      },
      "exits": {
        "west": "/d/city/wuguan"
      }
    },
    "/d/city/xiemao": {
      "type": "ROOM",
      "short": "鞋帽店",
      "exits": {
        "west": "/d/city/zhuque-s3"
      },
      "objects": {
        "/d/city/npc/xiaoliu": 1,
        "/d/city/npc/eryi": 1,
        "/d/obj/misc/chairs": 3
      }
    },
    "/d/city/xifuhui": {
      "type": "ROOM",
      "short": "喜福会",
      "exits": {
        "down": "/d/city/ziyanglou"
      },
      "objects": {
        "/d/city/npc/boss": 1,
        "/d/obj/misc/tables": 1,
        "/d/obj/misc/chairs": 4
      }
    },
    "/d/city/ximen": {
      "type": "ROOM",
      "short": "长安城西门",
      "exits": {
        "west": "/d/westway/west1",
        "east": "/d/city/baihu-w4"
      },
      "objects": {
        "/d/city/npc/wujiang": 1,
        "/d/city/npc/bing": 3
      }
    },
    "/d/city/xuanwu-n1": {
      "type": "ROOM",
      "short": "玄武大街",
      "exits": {
        "south": "/d/city/center",
        "north": "/d/city/xuanwu-n2",
        "west": "/d/city/buzhuang",
        "east": "/d/city/muqi"
      },
      "objects": {}
    },
    "/d/city/xuanwu-n2": {
      "type": "ROOM",
      "short": "玄武大街",
      "exits": {
        "south": "/d/city/xuanwu-n1",
        "north": "/d/city/xuanwu-n3",
        "west": "/d/city/club",
        "east": "/d/city/wuguan"
      },
      "objects": {}
    },
    "/d/city/xuanwu-n3": {
      "type": "ROOM",
      "short": "玄武大街",
      "exits": {
        "south": "/d/city/xuanwu-n2",
        "north": "/d/city/xuanwu-n4",
        "west": "/d/wiz/entrance",
        "east": "/d/city/guozijian"
      },
      "objects": {}
    },
    "/d/city/xuanwu-n4": {
      "type": "ROOM",
      "short": "玄武大街",
      "exits": {
        "south": "/d/city/xuanwu-n3",
        "north": "/d/huanggong/chaoyangmen",
        "west": "/d/city/junying",
        "east": "/d/city/tianjiantai"
      },
      "objects": {}
    },
    "/d/city/yaopu": {
      "type": "ROOM",
      "short": "回春药铺",
      "exits": {
        "west": "/d/city/zhuque-s2"
      },
      "objects": {
        "/d/city/npc/yang": 1,
        "/d/obj/misc/tables": 1,
        "/d/obj/misc/chairs": 2
      }
    },
    "/d/city/zahuohang": {
      "type": "ROOM",
      "short": "杂货行",
      "exits": {
        "south": "/d/city/qinglong-e1"
      },
      "objects": {
        "/d/city/npc/huoji": 3
      }
    },
    "/d/city/zahuopu": {
      "type": "ROOM",
      "short": "吉祥杂货铺",
      "exits": {
        "east": "/d/city/beiyin5"
      },
      "objects": {
        "/d/city/npc/laotou": 1,
        "/d/city/npc/laowei": 1,
        "/d/xueshan/npc/xunshi-out": 1
      }
    },
    "/d/city/zhongdu": {
      "type": "ROOM",
      "short": "长安府",
      "exits": {
        "south": "/d/city/baihu-w2",
        "north": "/d/city/datang"
      },
      "objects": {
        "/d/city/npc/yayi": 6
      }
    },
    "/d/city/zhongguan": {
      "type": "ROOM",
      "short": "总管府第",
      "exits": {
        "north": "/d/city/baihu-w2",
        "south": "/d/city/zhongguan2"
      },
      "objects": {
        "/d/city/npc/guanjia": 1,
        "/d/obj/misc/tables": 1,
        "/d/obj/misc/chairs": 3
      }
    },
    "/d/city/zhongguan2": {
      "type": "ROOM",
      "short": "总管府大堂",
      "exits": {
        "north": "/d/city/zhongguan"
      },
      "objects": {
        "/d/city/npc/kaishan": 1,
        "/d/obj/misc/tables": 1,
        "/d/obj/misc/chairs": 2
      }
    },
    "/d/city/zhubao": {
      "type": "ROOM",
      "short": "珠宝行",
      "exits": {
        "east": "/d/city/zhuque-s2"
      },
      "objects": {
        "/d/city/npc/jin": 1,
        "/d/obj/misc/tables": 1,
        "/d/obj/misc/chairs": 2
      }
    },
    "/d/city/zhuque-s1": {
      "type": "ROOM",
      "short": "朱雀大街",
      "exits": {
        "north": "/d/city/center",
        "south": "/d/city/zhuque-s2",
        "west": "/d/city/dangpu",
        "east": "/d/city/kezhan"
      },
      "objects": {
        "/d/city/npc/jieding": 1
      }
    },
    "/d/city/zhuque-s2": {
      "type": "ROOM",
      "short": "朱雀大街",
      "exits": {
        "south": "/d/city/zhuque-s3",
        "north": "/d/city/zhuque-s1",
        "west": "/d/city/zhubao",
        "east": "/d/city/yaopu"
      },
      "objects": {
        "/d/nanhai/npc/bonze": 1
      }
    },
    "/d/city/zhuque-s3": {
      "type": "ROOM",
      "short": "朱雀大街",
      "exits": {
        "south": "/d/city/zhuque-s4",
        "north": "/d/city/zhuque-s2",
        "west": "/d/city/maohuo",
        "east": "/d/city/xiemao"
      },
      "objects": {}
    },
    "/d/city/zhuque-s4": {
      "type": "ROOM",
      "short": "朱雀大街",
      "exits": {
        "south": "/d/changan/nanchengkou",
        "north": "/d/city/zhuque-s3",
        "west": "/d/city/beiyin5",
        "east": "/d/eastway/wangnan5"
      },
      "objects": {
        "/d/penglai/npc/laitou": 1
      }
    },
    "/d/city/ziyanglou": {
      "type": "ROOM",
      "short": "喜福会",
      "exits": {
        "south": "/d/city/baihu-w3",
        "up": "/d/city/xifuhui"
      },
      "objects": {
        "/d/city/npc/xiaoer1": 1,
        "/d/obj/misc/tables": 1,
        "/d/obj/misc/chairs": 2
      }
    },
    "/d/death/bidouya": {
      "type": "ROOM",
      "short": "壁斗崖",
      "exits": {
        "south": "/d/death/pingyang",
        "north": "/d/death/naiheqiao"
      },
      "objects": {
        "/d/death/npc/duanzhu": 1
      }
    },
    "/d/death/block": {
      "type": "ROOM",
      "short": "死囚室"
    },
    "/d/death/cuiyun": {
      "type": "ROOM",
      "short": "翠云宫",
      "exits": {
        "southdown": "/d/death/walk6"
      },
      "objects": {
        "/d/death/npc/dizhang": 1
      }
    },
    "/d/death/emptyroom": {
      "type": "ROOM",
      "short": "背阴山后"
    },
    "/d/death/gate": {
      "type": "ROOM",
      "exits": {
        "south": "/d/death/new-out2",
        "north": "/d/death/new-out6",
        "west": "/d/death/new-out8",
        "east": "/d/death/new-out4"
      },
      "objects": {
        "/d/death/npc/pang": 1
      }
    },
    "/d/death/gateway": {
      "type": "ROOM",
      "short": "酆都城门",
      "exits": {
        "south": "/d/death/gate",
        "north": "/d/death/walk1"
      },
      "objects": {
        "/d/death/npc/bgargoyle": 1
      }
    },
    "/d/death/guidaomen": {
      "type": "ROOM",
      "short": "超生贵道门",
      "exits": {
        "northwest": "/d/death/pingyang"
      }
    },
    "/d/death/huang": {
      "type": "ROOM",
      "short": "荒郊草野",
      "exits": {
        "southeast": "/d/death/huangwai",
        "west": "/d/death/roomout"
      },
      "objects": {
        "/d/death/npc/niutou": 1,
        "/d/death/npc/mamian": 1
      }
    },
    "/d/death/huangwai": {
      "type": "ROOM",
      "short": "背阴小道",
      "exits": {
        "south": "/d/death/naiheqiao",
        "west": "/d/death/new-wayout"
      },
      "objects": {}
    },
    "/d/death/inn1": {
      "type": "ROOM",
      "short": "小店",
      "exits": {
        "east": "/d/death/walk"
      }
    },
    "/d/death/inn2": {
      "type": "ROOM",
      "short": "黑店",
      "exits": {
        "west": "/d/death/walk"
      }
    },
    "/d/death/naiheqiao": {
      "type": "ROOM",
      "short": "奈何桥",
      "exits": {
        "south": "/d/death/bidouya",
        "north": "/d/death/huangwai"
      },
      "objects": {
        "/d/death/npc/shizhe": 2
      }
    },
    "/d/death/new-jimie": {
      "type": "ROOM",
      "short": "寂灭司",
      "exits": {
        "south": "/d/death/new-walk3"
      },
      "objects": {
        "/d/death/npc/yinchangsheng": 1
      }
    },
    "/d/death/new-lunhui": {
      "type": "ROOM",
      "short": "轮回司",
      "exits": {
        "south": "/d/death/new-walk4"
      },
      "objects": {
        "/d/death/npc/wangfangping": 1
      }
    },
    "/d/death/new-out1": {
      "type": "ROOM",
      "short": "荒郊草野",
      "exits": {
        "east": "/d/death/new-out2",
        "west": "/d/death/new-out3",
        "north": "/d/death/new-out8",
        "south": "/d/death/new-out7"
      }
    },
    "/d/death/new-out2": {
      "type": "ROOM",
      "short": "荒郊草野",
      "exits": {
        "east": "/d/death/new-out3",
        "west": "/d/death/new-out1",
        "north": "/d/death/gate"
      }
    },
    "/d/death/new-out3": {
      "type": "ROOM",
      "short": "荒郊草野",
      "exits": {
        "east": "/d/death/new-out1",
        "west": "/d/death/new-out2",
        "north": "/d/death/new-out4",
        "south": "/d/death/new-out5"
      }
    },
    "/d/death/new-out4": {
      "type": "ROOM",
      "short": "荒郊草野",
      "exits": {
        "west": "/d/death/gate",
        "north": "/d/death/new-out5",
        "south": "/d/death/new-out3"
      }
    },
    "/d/death/new-out5": {
      "type": "ROOM",
      "short": "荒郊草野",
      "exits": {
        "east": "/d/death/new-out7",
        "west": "/d/death/new-out6",
        "north": "/d/death/new-out3",
        "south": "/d/death/new-out4"
      }
    },
    "/d/death/new-out6": {
      "type": "ROOM",
      "short": "酆都城外",
      "exits": {
        "east": "/d/death/new-out5",
        "west": "/d/death/new-out7",
        "south": "/d/death/gate"
      }
    },
    "/d/death/new-out7": {
      "type": "ROOM",
      "short": "荒郊草野",
      "exits": {
        "east": "/d/death/new-out6",
        "west": "/d/death/new-out5",
        "north": "/d/death/new-out1",
        "south": "/d/death/new-out8"
      }
    },
    "/d/death/new-out8": {
      "type": "ROOM",
      "short": "荒郊草野",
      "exits": {
        "east": "/d/death/gate",
        "north": "/d/death/new-out7",
        "south": "/d/death/new-out1"
      }
    },
    "/d/death/new-sifang1": {
      "type": "ROOM",
      "short": "司房",
      "exits": {
        "east": "/d/death/new-yinsi1"
      }
    },
    "/d/death/new-sifang2": {
      "type": "ROOM",
      "short": "司房",
      "exits": {
        "west": "/d/death/new-yinsi1"
      }
    },
    "/d/death/new-sifang3": {
      "type": "ROOM",
      "short": "司房",
      "exits": {
        "east": "/d/death/new-yinsi2"
      }
    },
    "/d/death/new-sifang4": {
      "type": "ROOM",
      "short": "司房",
      "exits": {
        "west": "/d/death/new-yinsi2"
      }
    },
    "/d/death/new-walk1": {
      "type": "ROOM",
      "short": "幽司",
      "exits": {
        "east": "/d/death/new-yinhun",
        "west": "/d/death/new-zhaopo",
        "north": "/d/death/new-walk2"
      },
      "objects": {
        "/d/death/npc/genggui": 1
      }
    },
    "/d/death/new-walk2": {
      "type": "ROOM",
      "short": "奉祭场",
      "exits": {
        "east": "/d/death/new-walk3",
        "west": "/d/death/new-walk4",
        "north": "/d/death/new-walk5",
        "south": "/d/death/new-walk1"
      },
      "objects": {
        "/d/death/npc/zhangmen": 1
      }
    },
    "/d/death/new-walk3": {
      "type": "ROOM",
      "short": "幽司",
      "exits": {
        "east": "/d/death/new-wayout",
        "west": "/d/death/new-walk2",
        "north": "/d/death/new-jimie",
        "south": "/d/death/new-yinsi1"
      }
    },
    "/d/death/new-walk4": {
      "type": "ROOM",
      "short": "幽司",
      "exits": {
        "east": "/d/death/new-walk2",
        "west": "/d/death/new-yinyangta",
        "north": "/d/death/new-lunhui",
        "south": "/d/death/new-yinsi2"
      }
    },
    "/d/death/new-walk5": {
      "type": "ROOM",
      "short": "幽司",
      "exits": {
        "south": "/d/death/new-walk2",
        "north": "/d/death/zhengtang"
      },
      "objects": {
        "/d/death/npc/mamian": 1,
        "/d/death/npc/niutou": 1
      }
    },
    "/d/death/new-wayout": {
      "type": "ROOM",
      "short": "泗鬼门",
      "exits": {
        "east": "/d/death/huangwai",
        "west": "/d/death/new-walk3"
      },
      "objects": {
        "/d/death/npc/shentu": 1,
        "/d/death/npc/yulei": 1
      }
    },
    "/d/death/new-yinhun": {
      "type": "ROOM",
      "short": "引魂司",
      "exits": {
        "west": "/d/death/new-walk1"
      },
      "objects": {
        "/d/death/npc/heiwuchang": 1
      }
    },
    "/d/death/new-yinsi1": {
      "type": "ROOM",
      "short": "阴司",
      "exits": {
        "west": "/d/death/new-sifang1",
        "east": "/d/death/new-sifang2",
        "north": "/d/death/new-walk3"
      }
    },
    "/d/death/new-yinsi2": {
      "type": "ROOM",
      "short": "阴司",
      "exits": {
        "west": "/d/death/new-sifang3",
        "east": "/d/death/new-sifang4",
        "north": "/d/death/new-walk4"
      }
    },
    "/d/death/new-yinyangta": {
      "type": "ROOM",
      "short": "阴阳塔",
      "exits": {
        "east": "/d/death/new-walk4"
      }
    },
    "/d/death/new-zhaopo": {
      "type": "ROOM",
      "short": "招魂司",
      "exits": {
        "east": "/d/death/new-walk1"
      },
      "objects": {
        "/d/death/npc/baiwuchang": 1
      }
    },
    "/d/death/out": {
      "type": "ROOM",
      "short": "黑暗之中",
      "exits": {}
    },
    "/d/death/pingyang": {
      "type": "ROOM",
      "short": "平阳大路",
      "exits": {
        "southeast": "/d/death/guidaomen",
        "north": "/d/death/bidouya"
      }
    },
    "/d/death/road1": {
      "type": "ROOM",
      "short": "鬼门大道",
      "exits": {
        "north": "/d/death/road2",
        "south": "/d/death/gateway"
      }
    },
    "/d/death/road2": {
      "type": "ROOM",
      "short": "鬼门大道",
      "exits": {
        "north": "/d/death/road3",
        "south": "/d/death/road1"
      }
    },
    "/d/death/road3": {
      "type": "ROOM",
      "short": "黑暗之中",
      "exits": {}
    },
    "/d/death/room1": {
      "type": "ROOM",
      "short": "轮转殿",
      "exits": {
        "east": "/d/death/walk1"
      },
      "objects": {
        "/d/death/npc/lunzhuanwang": 1,
        "/d/death/npc/tong": 1
      }
    },
    "/d/death/room2": {
      "type": "ROOM",
      "short": "卞城殿",
      "exits": {
        "west": "/d/death/walk1"
      },
      "objects": {
        "/d/death/npc/tong": 1,
        "/d/death/npc/bianchengwang": 1
      }
    },
    "/d/death/room3": {
      "type": "ROOM",
      "short": "都市殿",
      "exits": {
        "east": "/d/death/walk2"
      },
      "objects": {
        "/d/death/npc/dushiwang": 1,
        "/d/death/npc/tong": 1
      }
    },
    "/d/death/room4": {
      "type": "ROOM",
      "short": "泰山殿",
      "exits": {
        "west": "/d/death/walk2"
      },
      "objects": {
        "/d/death/npc/taishanwang": 1,
        "/d/death/npc/tong": 1
      }
    },
    "/d/death/room5": {
      "type": "ROOM",
      "short": "平等殿",
      "exits": {
        "west": "/d/death/walk3"
      },
      "objects": {
        "/d/death/npc/pingdengwang": 1,
        "/d/death/npc/tong": 1
      }
    },
    "/d/death/room6": {
      "type": "ROOM",
      "short": "仵官殿",
      "exits": {
        "east": "/d/death/walk3"
      },
      "objects": {
        "/d/death/npc/chuguanwang": 1,
        "/d/death/npc/tong": 1
      }
    },
    "/d/death/room7": {
      "type": "ROOM",
      "short": "宋帝殿",
      "exits": {
        "east": "/d/death/walk4"
      },
      "objects": {
        "/d/death/npc/songdiwang": 1,
        "/d/death/npc/tong": 1
      }
    },
    "/d/death/room8": {
      "type": "ROOM",
      "short": "初江殿",
      "exits": {
        "west": "/d/death/walk4"
      },
      "objects": {
        "/d/death/npc/chujiangwang": 1,
        "/d/death/npc/tong": 1
      }
    },
    "/d/death/room9": {
      "type": "ROOM",
      "short": "秦广殿",
      "exits": {
        "east": "/d/death/walk5"
      },
      "objects": {
        "/d/death/npc/qinguangwang": 1,
        "/d/death/npc/tong": 1
      }
    },
    "/d/death/roomout": {
      "type": "ROOM",
      "short": "幽司",
      "exits": {
        "south": "/d/death/sifang",
        "east": "/d/death/huang",
        "west": "/d/death/walk7"
      }
    },
    "/d/death/sifang": {
      "type": "ROOM",
      "short": "司房",
      "exits": {
        "north": "/d/death/roomout"
      },
      "objects": {
        "/d/death/npc/zhutawei": 1
      }
    },
    "/d/death/test": {
      "type": "ROOM",
      "short": "超生贵道门",
      "exits": {
        "northwest": "/d/death/pingyang"
      }
    },
    "/d/death/walk": {
      "type": "ROOM",
      "short": "荒郊草野",
      "exits": {
        "east": "/d/death/inn2.c",
        "west": "/d/death/inn1",
        "north": "/d/death/gate"
      }
    },
    "/d/death/walk1": {
      "type": "ROOM",
      "short": "幽司",
      "exits": {
        "east": "/d/death/room2",
        "west": "/d/death/room1",
        "north": "/d/death/walk2",
        "south": "/d/death/zhengtang"
      },
      "objects": {}
    },
    "/d/death/walk2": {
      "type": "ROOM",
      "short": "幽司",
      "exits": {
        "south": "/d/death/walk1",
        "east": "/d/death/room4",
        "west": "/d/death/room3",
        "north": "/d/death/walk3"
      }
    },
    "/d/death/walk3": {
      "type": "ROOM",
      "short": "幽司",
      "exits": {
        "south": "/d/death/walk2",
        "east": "/d/death/room5",
        "west": "/d/death/room6",
        "north": "/d/death/walk4"
      }
    },
    "/d/death/walk4": {
      "type": "ROOM",
      "short": "幽司",
      "exits": {
        "south": "/d/death/walk3",
        "east": "/d/death/room8",
        "west": "/d/death/room7",
        "north": "/d/death/walk5"
      },
      "objects": {
        "/d/death/npc/gousiren": 1
      }
    },
    "/d/death/walk5": {
      "type": "ROOM",
      "short": "幽司",
      "exits": {
        "south": "/d/death/walk4",
        "west": "/d/death/room9",
        "north": "/d/death/walk6"
      }
    },
    "/d/death/walk6": {
      "type": "ROOM",
      "short": "幽司",
      "exits": {
        "south": "/d/death/walk5",
        "northup": "/d/death/cuiyun"
      },
      "objects": {
        "/d/death/npc/tong2": 1,
        "/d/death/npc/tong1": 1
      }
    },
    "/d/death/walk7": {
      "type": "ROOM",
      "short": "阎罗大堂",
      "exits": {
        "south": "/d/death/walk2",
        "east": "/d/death/roomout",
        "west": "/d/death/walk3",
        "north": "/d/death/zhengtang"
      },
      "objects": {
        "/d/death/npc/qinggui": 2,
        "/d/death/npc/liaogui": 2
      }
    },
    "/d/death/zhengtang": {
      "type": "ROOM",
      "short": "阎罗宝殿",
      "exits": {
        "south": "/d/death/new-walk5",
        "north": "/d/death/walk1"
      },
      "objects": {
        "/d/death/npc/yanluowang": 1
      }
    },
    "/d/eastway/beilin1": {
      "type": "ROOM",
      "short": "碑林",
      "exits": {
        "north": "/d/eastway/beilin2",
        "south": "/d/eastway/jinshi"
      },
      "objects": {
        "/d/eastway/obj/shibei": 4
      }
    },
    "/d/eastway/beilin2": {
      "type": "ROOM",
      "short": "碑林",
      "exits": {
        "south": "/d/eastway/beilin1"
      },
      "objects": {
        "/d/eastway/obj/shigui": 3
      }
    },
    "/d/eastway/bingma": {
      "type": "ROOM",
      "short": "兵马俑阵",
      "exits": {
        "west": "/d/eastway/shihuang"
      },
      "objects": {
        "/d/eastway/obj/bingma": 9
      }
    },
    "/d/eastway/ciensi": {
      "type": "ROOM",
      "short": "慈恩寺",
      "exits": {
        "out": "/d/eastway/ciensiw",
        "east": "/d/eastway/dyt"
      },
      "objects": {
        "/d/eastway/npc/sengren": 3
      }
    },
    "/d/eastway/ciensiw": {
      "type": "ROOM",
      "short": "慈恩寺外",
      "exits": {
        "enter": "/d/eastway/ciensi",
        "north": "/d/eastway/guandao1"
      }
    },
    "/d/eastway/dyt": {
      "type": "ROOM",
      "short": "大雁塔",
      "exits": {
        "enter": "/d/eastway/dyt1",
        "west": "/d/eastway/ciensi"
      }
    },
    "/d/eastway/dyt1": {
      "type": "ROOM",
      "short": "大雁塔内",
      "exits": {
        "out": "/d/eastway/dyt",
        "up": "/d/eastway/dyt2"
      }
    },
    "/d/eastway/dyt2": {
      "type": "ROOM",
      "short": "大雁塔内",
      "exits": {
        "down": "/d/eastway/dyt1",
        "up": "/d/eastway/dyt3"
      }
    },
    "/d/eastway/dyt3": {
      "type": "ROOM",
      "short": "大雁塔内",
      "exits": {
        "down": "/d/eastway/dyt2",
        "up": "/d/eastway/dyt4"
      }
    },
    "/d/eastway/dyt4": {
      "type": "ROOM",
      "short": "大雁塔内",
      "exits": {
        "down": "/d/eastway/dyt3",
        "up": "/d/eastway/dyt5"
      }
    },
    "/d/eastway/dyt5": {
      "type": "ROOM",
      "short": "大雁塔内",
      "exits": {
        "down": "/d/eastway/dyt4",
        "up": "/d/eastway/dyt6"
      }
    },
    "/d/eastway/dyt6": {
      "type": "ROOM",
      "short": "大雁塔内",
      "exits": {
        "down": "/d/eastway/dyt5",
        "up": "/d/eastway/dyt7"
      }
    },
    "/d/eastway/dyt7": {
      "type": "ROOM",
      "short": "大雁塔内",
      "exits": {
        "down": "/d/eastway/dyt6"
      }
    },
    "/d/eastway/guandao1": {
      "type": "ROOM",
      "short": "官道",
      "exits": {
        "northwest": "/d/eastway/wangnan5",
        "south": "/d/eastway/ciensiw"
      },
      "objects": {
        "/d/eastway/npc/luren": 2
      }
    },
    "/d/eastway/guandao2": {
      "type": "ROOM",
      "short": "官道",
      "exits": {
        "northwest": "/d/eastway/wangnan3",
        "northeast": "/d/eastway/guandao3"
      }
    },
    "/d/eastway/guandao3": {
      "type": "ROOM",
      "short": "官道",
      "exits": {
        "southwest": "/d/eastway/guandao2",
        "southeast": "/d/eastway/huaqing",
        "east": "/d/eastway/shihuang"
      }
    },
    "/d/eastway/huaqing": {
      "type": "ROOM",
      "short": "曲江池",
      "exits": {
        "enter": "/d/eastway/xianquan",
        "northwest": "/d/eastway/guandao3"
      },
      "objects": {
        "/d/eastway/npc/luren": 2
      }
    },
    "/d/eastway/huohang": {
      "type": "ROOM",
      "short": "货行仓库",
      "exits": {
        "west": "/d/eastway/wangnan1"
      },
      "objects": {
        "/d/eastway/npc/dai": 1
      }
    },
    "/d/eastway/jinshi": {
      "type": "ROOM",
      "short": "进士场",
      "exits": {
        "north": "/d/eastway/beilin1",
        "east": "/d/eastway/wangnan2",
        "south": "/d/eastway/wangnan4",
        "west": "/d/eastway/xyt"
      },
      "objects": {
        "/d/eastway/npc/xiucai": 2
      }
    },
    "/d/eastway/shihuang": {
      "type": "ROOM",
      "short": "始皇陵",
      "exits": {
        "east": "/d/eastway/bingma",
        "west": "/d/eastway/guandao3"
      },
      "objects": {
        "/d/eastway/npc/wujiang": 2,
        "/d/eastway/npc/bing": 3
      }
    },
    "/d/eastway/wangnan1": {
      "type": "ROOM",
      "short": "望南街",
      "exits": {
        "southwest": "/d/eastway/wangnan2",
        "north": "/d/city/qinglong-e4",
        "east": "/d/eastway/huohang"
      },
      "objects": {}
    },
    "/d/eastway/wangnan2": {
      "type": "ROOM",
      "short": "望南街",
      "exits": {
        "northeast": "/d/eastway/wangnan1",
        "south": "/d/eastway/wangnan3",
        "west": "/d/eastway/jinshi"
      },
      "objects": {}
    },
    "/d/eastway/wangnan3": {
      "type": "ROOM",
      "short": "望南街",
      "exits": {
        "north": "/d/eastway/wangnan2",
        "west": "/d/eastway/wangnan4",
        "southeast": "/d/eastway/guandao2"
      },
      "objects": {
        "/d/obj/book/misc": 1
      }
    },
    "/d/eastway/wangnan4": {
      "type": "ROOM",
      "short": "望南街",
      "exits": {
        "east": "/d/eastway/wangnan3",
        "southwest": "/d/eastway/wangnan5",
        "north": "/d/eastway/jinshi"
      },
      "objects": {}
    },
    "/d/eastway/wangnan5": {
      "type": "ROOM",
      "short": "望南街",
      "exits": {
        "west": "/d/city/zhuque-s4",
        "northeast": "/d/eastway/wangnan4",
        "southeast": "/d/eastway/guandao1"
      },
      "objects": {
        "/d/eastway/npc/youke": 2
      }
    },
    "/d/eastway/xianquan": {
      "type": "ROOM",
      "short": "仙泉",
      "exits": {
        "out": "/d/eastway/huaqing"
      },
      "objects": {
        "/d/eastway/npc/girl": 2
      }
    },
    "/d/eastway/xyt": {
      "type": "ROOM",
      "short": "小雁塔",
      "exits": {
        "enter": "/d/eastway/xyt1",
        "east": "/d/eastway/jinshi"
      }
    },
    "/d/eastway/xyt1": {
      "type": "ROOM",
      "short": "小雁塔内",
      "exits": {
        "out": "/d/eastway/xyt",
        "up": "/d/eastway/xyt2"
      }
    },
    "/d/eastway/xyt10": {
      "type": "ROOM",
      "short": "小雁塔内",
      "exits": {
        "up": "/d/eastway/xyt11",
        "down": "/d/eastway/xyt9"
      }
    },
    "/d/eastway/xyt11": {
      "type": "ROOM",
      "short": "小雁塔内",
      "exits": {
        "up": "/d/eastway/xyt12",
        "down": "/d/eastway/xyt10"
      }
    },
    "/d/eastway/xyt12": {
      "type": "ROOM",
      "short": "小雁塔内",
      "exits": {
        "up": "/d/eastway/xyt13",
        "down": "/d/eastway/xyt11"
      }
    },
    "/d/eastway/xyt13": {
      "type": "ROOM",
      "short": "小雁塔内",
      "exits": {
        "up": "/d/eastway/xyt14",
        "down": "/d/eastway/xyt12"
      }
    },
    "/d/eastway/xyt14": {
      "type": "ROOM",
      "short": "小雁塔内",
      "exits": {
        "up": "/d/eastway/xyt15",
        "down": "/d/eastway/xyt13"
      }
    },
    "/d/eastway/xyt15": {
      "type": "ROOM",
      "short": "小雁塔内",
      "exits": {
        "down": "/d/eastway/xyt14"
      }
    },
    "/d/eastway/xyt2": {
      "type": "ROOM",
      "short": "小雁塔内",
      "exits": {
        "up": "/d/eastway/xyt3",
        "down": "/d/eastway/xyt1"
      }
    },
    "/d/eastway/xyt3": {
      "type": "ROOM",
      "short": "小雁塔内",
      "exits": {
        "up": "/d/eastway/xyt4",
        "down": "/d/eastway/xyt2"
      }
    },
    "/d/eastway/xyt4": {
      "type": "ROOM",
      "short": "小雁塔内",
      "exits": {
        "up": "/d/eastway/xyt5",
        "down": "/d/eastway/xyt3"
      }
    },
    "/d/eastway/xyt5": {
      "type": "ROOM",
      "short": "小雁塔内",
      "exits": {
        "up": "/d/eastway/xyt6",
        "down": "/d/eastway/xyt4"
      }
    },
    "/d/eastway/xyt6": {
      "type": "ROOM",
      "short": "小雁塔内",
      "exits": {
        "up": "/d/eastway/xyt7",
        "down": "/d/eastway/xyt5"
      }
    },
    "/d/eastway/xyt7": {
      "type": "ROOM",
      "short": "小雁塔内",
      "exits": {
        "up": "/d/eastway/xyt8",
        "down": "/d/eastway/xyt6"
      }
    },
    "/d/eastway/xyt8": {
      "type": "ROOM",
      "short": "小雁塔内",
      "exits": {
        "up": "/d/eastway/xyt9",
        "down": "/d/eastway/xyt7"
      }
    },
    "/d/eastway/xyt9": {
      "type": "ROOM",
      "short": "小雁塔内",
      "exits": {
        "up": "/d/eastway/xyt10",
        "down": "/d/eastway/xyt8"
      }
    },
    "/d/erlang/guanjiang": {
      "type": "ROOM",
      "short": "灌江口",
      "objects": {
        "/d/erlang/npc/guipan": 1
      },
      "exits": {
        "north": "/d/changan/eside4",
        "enter": "/d/erlang/temple"
      }
    },
    "/d/erlang/temple": {
      "type": "ROOM",
      "short": "二郎庙",
      "exits": {
        "out": "/d/erlang/guanjiang"
      },
      "objects": {
        "/d/erlang/npc/erlang": 1
      }
    },
    "/d/gao/bed_yashi": {
      "type": "ROOM",
      "short": "床上",
      "exits": {
        "out": "/d/gao/yashi"
      }
    },
    "/d/gao/budian": {
      "type": "ROOM",
      "short": "刘家布店",
      "exits": {
        "south": "/d/gao/road2"
      },
      "objects": {
        "/d/gao/npc/pangsao": 1
      }
    },
    "/d/gao/cunkou": {
      "type": "ROOM",
      "short": "村口",
      "exits": {
        "north": "/d/gao/tulu",
        "east": "/d/gao/house",
        "southwest": "/d/gao/xuetang"
      },
      "objects": {
        "/d/gao/npc/cunzhang": 1
      }
    },
    "/d/gao/daotian1": {
      "type": "ROOM",
      "short": "稻田",
      "exits": {
        "south": "/d/gao/road4"
      },
      "objects": {
        "/d/gao/npc/farmer": 1,
        "/d/gao/npc/bull": 1
      }
    },
    "/d/gao/daotian2": {
      "type": "ROOM",
      "short": "稻田",
      "exits": {
        "north": "/d/gao/road4",
        "south": "/d/gao/tulu"
      },
      "objects": {
        "/d/gao/npc/farmer": 1
      }
    },
    "/d/gao/fanting": {
      "type": "ROOM",
      "short": "饭厅",
      "exits": {
        "west": "/d/gao/zhting"
      },
      "objects": {
        "/d/gao/npc/yahuan": 1
      }
    },
    "/d/gao/gate": {
      "type": "ROOM",
      "short": "高家大门",
      "exits": {
        "north": "/d/gao/zhyuan",
        "east": "/d/gao/lu2",
        "west": "/d/gao/road1"
      },
      "objects": {
        "/d/gao/npc/laoyu": 1
      }
    },
    "/d/gao/guige": {
      "type": "ROOM",
      "short": "闺阁",
      "exits": {
        "east": "/d/gao/houyuan",
        "up": "/d/gao/yashi"
      }
    },
    "/d/gao/house": {
      "type": "ROOM",
      "short": "农舍",
      "exits": {
        "west": "/d/gao/cunkou"
      },
      "objects": {
        "/d/ourhome/obj/xbc": 1,
        "/d/ourhome/obj/beans": 1,
        "/d/ourhome/obj/carrot": 1
      }
    },
    "/d/gao/houyuan": {
      "type": "ROOM",
      "short": "后院",
      "exits": {
        "north": "/d/gao/huayuan",
        "south": "/d/gao/zhting",
        "east": "/d/gao/washing",
        "west": "/d/gao/guige"
      }
    },
    "/d/gao/huayuan": {
      "type": "ROOM",
      "short": "后花园",
      "exits": {
        "south": "/d/gao/houyuan"
      }
    },
    "/d/gao/inn": {
      "type": "ROOM",
      "short": "小酒馆",
      "exits": {
        "north": "/d/gao/road1"
      },
      "objects": {
        "/d/gao/npc/wang": 1,
        "/d/gao/npc/jiuke": 1
      }
    },
    "/d/gao/lu1": {
      "type": "ROOM",
      "short": "土路",
      "exits": {
        "west": "/d/gao/lu2",
        "east": "/d/changan/wroad3"
      }
    },
    "/d/gao/lu2": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "east": "/d/gao/lu1",
        "west": "/d/gao/gate"
      }
    },
    "/d/gao/neishi": {
      "type": "ROOM",
      "short": "内室",
      "exits": {
        "west": "/d/gao/room"
      },
      "objects": {
        "/d/gao/obj/xiaojie": 1
      }
    },
    "/d/gao/pianfang": {
      "type": "ROOM",
      "short": "偏房",
      "exits": {
        "west": "/d/gao/zhyuan"
      },
      "objects": {
        "/d/gao/npc/jiading": 2
      }
    },
    "/d/gao/pianting": {
      "type": "ROOM",
      "short": "偏厅",
      "exits": {
        "east": "/d/gao/zhting"
      },
      "objects": {
        "/d/gao/npc/gaopo": 1,
        "/d/gao/npc/yahuan1": 1
      }
    },
    "/d/gao/road1": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "south": "/d/gao/inn",
        "east": "/d/gao/gate",
        "west": "/d/gao/road2"
      },
      "objects": {
        "/d/gao/npc/xiaofan": 1
      }
    },
    "/d/gao/road2": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/gao/budian",
        "south": "/d/gao/tiepu",
        "east": "/d/gao/road1",
        "west": "/d/gao/road3"
      }
    },
    "/d/gao/road3": {
      "type": "ROOM",
      "short": "土路",
      "exits": {
        "east": "/d/gao/road2",
        "west": "/d/gao/road4"
      }
    },
    "/d/gao/road4": {
      "type": "ROOM",
      "short": "土路",
      "exits": {
        "north": "/d/gao/daotian1",
        "south": "/d/gao/daotian2",
        "east": "/d/gao/road3",
        "northwest": "/d/lingtai/hill"
      }
    },
    "/d/gao/room": {
      "type": "ROOM",
      "short": "聚义厅",
      "exits": {
        "southdown": "/d/gao/shanlu",
        "east": "/d/gao/neishi"
      },
      "objects": {
        "/d/gao/npc/head": 1
      }
    },
    "/d/gao/shanlu": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "west": "/d/gao/xiaolin1",
        "northup": "/d/gao/room"
      }
    },
    "/d/gao/tiepu": {
      "type": "ROOM",
      "short": "铁铺",
      "exits": {
        "north": "/d/gao/road2"
      },
      "objects": {
        "/d/gao/npc/laoli": 1,
        "/d/gao/npc/xuetu": 2
      }
    },
    "/d/gao/tulu": {
      "type": "ROOM",
      "short": "土路",
      "exits": {
        "north": "/d/gao/daotian2",
        "south": "/d/gao/cunkou"
      }
    },
    "/d/gao/washing": {
      "type": "ROOM",
      "short": "洗衣房",
      "exits": {
        "west": "/d/gao/houyuan"
      },
      "objects": {
        "/d/gao/npc/washer": 1
      }
    },
    "/d/gao/xiaolin": {
      "type": "ROOM",
      "short": "小树林",
      "exits": {
        "south": "/d/gao/xiaolu",
        "north": "/d/gao/xiaolin1"
      }
    },
    "/d/gao/xiaolin1": {
      "type": "ROOM",
      "short": "小树林",
      "exits": {
        "east": "/d/gao/shanlu",
        "south": "/d/gao/xiaolin"
      },
      "objects": {
        "/d/gao/npc/tufei": 4,
        "/d/gao/npc/guard": 1
      }
    },
    "/d/gao/xiaolu": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "north": "/d/gao/xiaolin"
      }
    },
    "/d/gao/xuetang": {
      "type": "ROOM",
      "short": "书堂",
      "exits": {
        "northeast": "/d/gao/cunkou"
      },
      "objects": {
        "/d/gao/npc/teacher": 1,
        "/d/gao/npc/kid": 2
      }
    },
    "/d/gao/yashi": {
      "type": "ROOM",
      "short": "雅室",
      "exits": {
        "down": "/d/gao/guige"
      }
    },
    "/d/gao/zhangfang": {
      "type": "ROOM",
      "short": "帐房",
      "exits": {
        "east": "/d/gao/zhyuan"
      },
      "objects": {
        "/d/gao/npc/guanjia": 1,
        "/d/gao/npc/huoji": 1
      }
    },
    "/d/gao/zhting": {
      "type": "ROOM",
      "short": "正厅",
      "exits": {
        "north": "/d/gao/houyuan",
        "south": "/d/gao/zhyuan",
        "west": "/d/gao/pianting",
        "east": "/d/gao/fanting"
      },
      "objects": {
        "/d/gao/npc/gao": 1,
        "/d/gao/npc/yahuan2": 2
      }
    },
    "/d/gao/zhyuan": {
      "type": "ROOM",
      "short": "正院",
      "exits": {
        "north": "/d/gao/zhting",
        "south": "/d/gao/gate",
        "east": "/d/gao/pianfang",
        "west": "/d/gao/zhangfang"
      }
    },
    "/d/huanggong/baihu": {
      "type": "ROOM",
      "short": "白虎堂",
      "objects": {
        "/d/huanggong/npc/shinu": 1
      },
      "exits": {
        "east": "/d/huanggong/guangchang"
      }
    },
    "/d/huanggong/baiyujie": {
      "type": "ROOM",
      "short": "白玉阶",
      "objects": {
        "/d/huanggong/npc/weishi": 2
      },
      "exits": {
        "north": "/d/huanggong/dadian",
        "southdown": "/d/huanggong/guangchang.c"
      }
    },
    "/d/huanggong/chaoyangmen": {
      "type": "ROOM",
      "short": "朝阳门",
      "objects": {
        "/d/huanggong/npc/weishi": 2
      },
      "exits": {
        "south": "/d/city/xuanwu-n4",
        "north": "/d/huanggong/damen"
      }
    },
    "/d/huanggong/dadian": {
      "type": "ROOM",
      "short": "大殿",
      "exits": {
        "south": "/d/huanggong/baiyujie",
        "north": "/d/huanggong/houdian",
        "east": "/d/huanggong/dongdian",
        "west": "/d/huanggong/xidian"
      },
      "objects": {
        "/d/huanggong/npc/dachen1": 1,
        "/d/huanggong/npc/dachen2": 1,
        "/d/huanggong/npc/dachen3": 1,
        "/d/huanggong/npc/dachen4": 1,
        "/d/huanggong/npc/dachen5": 1,
        "/d/huanggong/npc/emperor": 1
      }
    },
    "/d/huanggong/damen": {
      "type": "ROOM",
      "short": "皇宫大门",
      "objects": {
        "/d/huanggong/npc/weishi": 3,
        "/d/huanggong/npc/xuerengui": 1
      },
      "exits": {
        "south": "/d/huanggong/chaoyangmen",
        "north": "/d/huanggong/guangchang",
        "northeast": "/d/huanggong/yhy3b.c",
        "northwest": "/d/huanggong/yhy3a.c"
      }
    },
    "/d/huanggong/dongdian": {
      "type": "ROOM",
      "short": "东殿",
      "exits": {
        "south": "/d/huanggong/dadian"
      },
      "objects": {
        "/d/huanggong/npc/girl": 2
      }
    },
    "/d/huanggong/fst": {
      "type": "ROOM",
      "short": "封榜堂",
      "exits": {
        "north": "/d/huanggong/ywc5b",
        "southwest": "/d/huanggong/yhy1a",
        "southeast": "/d/huanggong/yhy1b"
      },
      "objects": {
        "/d/huanggong/npc/pang": 1
      }
    },
    "/d/huanggong/guangchang": {
      "type": "ROOM",
      "short": "朝天场",
      "exits": {
        "west": "/d/huanggong/baihu.c",
        "south": "/d/huanggong/damen",
        "east": "/d/huanggong/qinglong.c",
        "northup": "/d/huanggong/baiyujie.c"
      }
    },
    "/d/huanggong/houdian": {
      "type": "ROOM",
      "short": "后殿",
      "exits": {
        "south": "/d/huanggong/dadian"
      },
      "objects": {
        "/d/huanggong/npc/girl": 2
      }
    },
    "/d/huanggong/qinglong": {
      "type": "ROOM",
      "short": "青龙堂",
      "objects": {
        "/d/huanggong/npc/shiguan": 1
      },
      "exits": {
        "west": "/d/huanggong/guangchang"
      }
    },
    "/d/huanggong/xidian": {
      "type": "ROOM",
      "short": "西殿",
      "exits": {
        "south": "/d/huanggong/dadian"
      },
      "objects": {
        "/d/huanggong/npc/girl": 2
      }
    },
    "/d/huanggong/yhy1a": {
      "type": "ROOM",
      "short": "御花园",
      "exits": {
        "northeast": "/d/huanggong/fst.c",
        "south": "/d/huanggong/yhy2a"
      }
    },
    "/d/huanggong/yhy1b": {
      "type": "ROOM",
      "short": "御花园",
      "exits": {
        "northwest": "/d/huanggong/fst.c",
        "south": "/d/huanggong/yhy2b"
      }
    },
    "/d/huanggong/yhy2a": {
      "type": "ROOM",
      "short": "御花园",
      "exits": {
        "north": "/d/huanggong/yhy1a.c",
        "south": "/d/huanggong/yhy3a"
      }
    },
    "/d/huanggong/yhy2b": {
      "type": "ROOM",
      "short": "御花园",
      "exits": {
        "north": "/d/huanggong/yhy1b.c",
        "south": "/d/huanggong/yhy3b"
      }
    },
    "/d/huanggong/yhy3a": {
      "type": "ROOM",
      "short": "御花园",
      "exits": {
        "north": "/d/huanggong/yhy2a.c",
        "southeast": "/d/huanggong/damen"
      }
    },
    "/d/huanggong/yhy3b": {
      "type": "ROOM",
      "short": "御花园",
      "exits": {
        "north": "/d/huanggong/yhy2b.c",
        "southwest": "/d/huanggong/damen"
      }
    },
    "/d/huanggong/ywc1a": {
      "type": "ROOM",
      "short": "演武场",
      "exits": {
        "east": "/d/huanggong/ywc1b.c"
      },
      "objects": {
        "/d/huanggong/npc/wu12": 1
      }
    },
    "/d/huanggong/ywc1b": {
      "type": "ROOM",
      "short": "演武场",
      "exits": {
        "west": "/d/huanggong/ywc1a.c",
        "east": "/d/huanggong/ywc1c.c",
        "south": "/d/huanggong/ywc2b"
      },
      "objects": {
        "/d/huanggong/npc/wu11": 1
      }
    },
    "/d/huanggong/ywc1c": {
      "type": "ROOM",
      "short": "演武场",
      "exits": {
        "west": "/d/huanggong/ywc1b.c"
      },
      "objects": {
        "/d/huanggong/npc/wu13": 1
      }
    },
    "/d/huanggong/ywc2a": {
      "type": "ROOM",
      "short": "演武场",
      "exits": {
        "east": "/d/huanggong/ywc2b.c"
      },
      "objects": {
        "/d/huanggong/npc/wu22": 1
      }
    },
    "/d/huanggong/ywc2b": {
      "type": "ROOM",
      "short": "演武场",
      "exits": {
        "west": "/d/huanggong/ywc2a.c",
        "east": "/d/huanggong/ywc2c.c",
        "north": "/d/huanggong/ywc1b",
        "south": "/d/huanggong/ywc3b"
      },
      "objects": {
        "/d/huanggong/npc/wu21": 1
      }
    },
    "/d/huanggong/ywc2c": {
      "type": "ROOM",
      "short": "演武场",
      "exits": {
        "west": "/d/huanggong/ywc2b.c"
      },
      "objects": {
        "/d/huanggong/npc/wu23": 1
      }
    },
    "/d/huanggong/ywc3a": {
      "type": "ROOM",
      "short": "演武场",
      "exits": {
        "east": "/d/huanggong/ywc3b.c"
      },
      "objects": {
        "/d/huanggong/npc/wu32": 1
      }
    },
    "/d/huanggong/ywc3b": {
      "type": "ROOM",
      "short": "演武场",
      "exits": {
        "west": "/d/huanggong/ywc3a.c",
        "east": "/d/huanggong/ywc3c.c",
        "north": "/d/huanggong/ywc2b",
        "south": "/d/huanggong/ywc4b"
      },
      "objects": {
        "/d/huanggong/npc/wu31": 1
      }
    },
    "/d/huanggong/ywc3c": {
      "type": "ROOM",
      "short": "演武场",
      "exits": {
        "west": "/d/huanggong/ywc3b.c"
      },
      "objects": {
        "/d/huanggong/npc/wu33": 1
      }
    },
    "/d/huanggong/ywc4a": {
      "type": "ROOM",
      "short": "演武场",
      "exits": {
        "east": "/d/huanggong/ywc4b.c"
      },
      "objects": {
        "/d/huanggong/npc/wu42": 1
      }
    },
    "/d/huanggong/ywc4b": {
      "type": "ROOM",
      "short": "演武场",
      "exits": {
        "west": "/d/huanggong/ywc4a.c",
        "east": "/d/huanggong/ywc4c.c",
        "north": "/d/huanggong/ywc3b",
        "south": "/d/huanggong/ywc5b"
      },
      "objects": {
        "/d/huanggong/npc/wu41": 1
      }
    },
    "/d/huanggong/ywc4c": {
      "type": "ROOM",
      "short": "演武场",
      "exits": {
        "west": "/d/huanggong/ywc4b.c"
      },
      "objects": {
        "/d/huanggong/npc/wu43": 1
      }
    },
    "/d/huanggong/ywc5a": {
      "type": "ROOM",
      "short": "演武场",
      "exits": {
        "east": "/d/huanggong/ywc5b.c"
      },
      "objects": {
        "/d/huanggong/npc/wu52": 1
      }
    },
    "/d/huanggong/ywc5b": {
      "type": "ROOM",
      "short": "演武场",
      "exits": {
        "west": "/d/huanggong/ywc5a.c",
        "east": "/d/huanggong/ywc5c.c",
        "north": "/d/huanggong/ywc4b",
        "south": "/d/huanggong/fst"
      },
      "objects": {
        "/d/huanggong/npc/wu51": 1
      }
    },
    "/d/huanggong/ywc5c": {
      "type": "ROOM",
      "short": "演武场",
      "exits": {
        "west": "/d/huanggong/ywc5b.c"
      },
      "objects": {
        "/d/huanggong/npc/wu53": 1
      }
    },
    "/d/jjf/bingqi_room": {
      "type": "ROOM",
      "short": "干戈隅",
      "exits": {
        "east": "/d/jjf/main_cabinet"
      }
    },
    "/d/jjf/dining_room": {
      "type": "ROOM",
      "short": "宴厅",
      "exits": {
        "southeast": "/d/jjf/kitchen_road1",
        "west": "/d/jjf/keting"
      }
    },
    "/d/jjf/front_yard": {
      "type": "ROOM",
      "short": "练武场",
      "exits": {
        "north": "/d/jjf/gate",
        "south": "/d/jjf/front_yard2",
        "east": "/d/jjf/majuan",
        "southwest": "/d/jjf/guest_bedroom"
      },
      "objects": {
        "/d/jjf/npc/qinfu": 1,
        "/d/jjf/npc/xiaotong": 2
      }
    },
    "/d/jjf/front_yard2": {
      "type": "ROOM",
      "short": "练武场",
      "exits": {
        "south": "/d/jjf/keting.c",
        "west": "/d/jjf/guest_bedroom",
        "north": "/d/jjf/front_yard",
        "east": "/d/jjf/jjf_bingqi"
      },
      "objects": {
        "/d/jjf/npc/guard": 1,
        "/d/jjf/npc/zhangmen": 1
      }
    },
    "/d/jjf/front_yard3": {
      "type": "ROOM",
      "short": "练武场",
      "exits": {
        "south": "/d/jjf/keting.c",
        "west": "/d/jjf/guest_bedroom",
        "north": "/d/jjf/front_yard",
        "east": "/d/jjf/jjf_bingqi"
      },
      "objects": {
        "/d/jjf/npc/guard": 1
      }
    },
    "/d/jjf/gate": {
      "type": "ROOM",
      "short": "将军府",
      "exits": {
        "south": "/d/jjf/front_yard.c",
        "north": "/d/city/qinglong-e2"
      },
      "objects": {
        "/d/jjf/npc/qinan": 1
      }
    },
    "/d/jjf/guest_bedroom": {
      "type": "ROOM",
      "short": "客房",
      "objects": {
        "/d/jjf/npc/xiaotong": 2
      },
      "exits": {
        "northeast": "/d/jjf/front_yard.c",
        "east": "/d/jjf/front_yard2.c"
      }
    },
    "/d/jjf/guest_cabinet": {
      "type": "ROOM",
      "short": "西厢阁楼",
      "objects": {
        "/d/jjf/npc/luochun": 1
      },
      "exits": {
        "east": "/d/jjf/pavillion",
        "up": "/d/jjf/guest_cabinet2"
      }
    },
    "/d/jjf/guest_cabinet2": {
      "type": "ROOM",
      "short": "西厢二楼",
      "objects": {
        "/d/jjf/npc/luocheng.c": 1
      },
      "exits": {
        "north": "/d/jjf/guest_shufang",
        "down": "/d/jjf/guest_cabinet"
      }
    },
    "/d/jjf/guest_shufang": {
      "type": "ROOM",
      "short": "书房",
      "exits": {
        "south": "/d/jjf/guest_cabinet2"
      }
    },
    "/d/jjf/jjf_bingqi": {
      "type": "ROOM",
      "short": "兵器架",
      "objects": {
        "/d/jjf/npc/qinping": 1
      },
      "exits": {
        "west": "/d/jjf/front_yard2"
      }
    },
    "/d/jjf/keting": {
      "type": "ROOM",
      "short": "正厅",
      "exits": {
        "south": "/d/jjf/stone_road",
        "north": "/d/jjf/front_yard2",
        "west": "/d/jjf/side_keting",
        "east": "/d/jjf/dining_room"
      },
      "objects": {
        "/d/jjf/npc/jiajiang": 2,
        "/d/jjf/npc/qinqiong": 1
      }
    },
    "/d/jjf/kitchen": {
      "type": "ROOM",
      "short": "厨房",
      "exits": {
        "north": "/d/jjf/kitchen_road2",
        "southwest": "/d/jjf/ne_garden"
      }
    },
    "/d/jjf/kitchen_road1": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "southeast": "/d/jjf/kitchen_road2",
        "northwest": "/d/jjf/dining_room"
      }
    },
    "/d/jjf/kitchen_road2": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "south": "/d/jjf/kitchen",
        "northwest": "/d/jjf/kitchen_road1"
      }
    },
    "/d/jjf/main_bedroom": {
      "type": "ROOM",
      "short": "卧房",
      "exits": {
        "west": "/d/jjf/main_cabinet2"
      }
    },
    "/d/jjf/main_cabinet": {
      "type": "ROOM",
      "short": "无私轩",
      "exits": {
        "north": "/d/jjf/stone_road2",
        "west": "/d/jjf/bingqi_room",
        "east": "/d/jjf/main_shufang"
      }
    },
    "/d/jjf/main_shufang": {
      "type": "ROOM",
      "short": "叹兵斋",
      "exits": {
        "west": "/d/jjf/main_cabinet"
      }
    },
    "/d/jjf/majuan": {
      "type": "ROOM",
      "short": "马厩",
      "objects": {
        "/d/jjf/npc/xiaotong": 1,
        "/d/jjf/npc/huangbiao": 1,
        "/d/jjf/npc/hulei": 1
      },
      "exits": {
        "west": "/d/jjf/front_yard"
      }
    },
    "/d/jjf/mishi": {
      "type": "ROOM",
      "short": "小屋",
      "exits": {
        "southeast": "/d/jjf/front_yard2"
      },
      "objects": {
        "/d/obj/book/spearbook": 1
      }
    },
    "/d/jjf/ne_garden": {
      "type": "ROOM",
      "short": "花园",
      "exits": {
        "northeast": "/d/jjf/kitchen",
        "west": "/d/jjf/nw_garden",
        "south": "/d/jjf/se_garden"
      }
    },
    "/d/jjf/nw_garden": {
      "type": "ROOM",
      "short": "花园",
      "exits": {
        "southeast": "/d/jjf/se_garden",
        "south": "/d/jjf/sw_garden.c",
        "east": "/d/jjf/ne_garden",
        "northwest": "/d/jjf/pavillion"
      }
    },
    "/d/jjf/pavillion": {
      "type": "ROOM",
      "short": "凉亭",
      "exits": {
        "northeast": "/d/jjf/stone_road",
        "southeast": "/d/jjf/nw_garden",
        "west": "/d/jjf/guest_cabinet"
      }
    },
    "/d/jjf/qilin": {
      "type": "ROOM",
      "short": "麒麟阁",
      "objects": {
        "/d/jjf/npc/qinbing": 2
      },
      "exits": {
        "up": "/d/jjf/qilin2",
        "southeast": "/d/city/center"
      }
    },
    "/d/jjf/qilin2": {
      "type": "ROOM",
      "short": "麒麟阁二楼",
      "objects": {
        "/d/jjf/npc/yuchigong": 1
      },
      "exits": {
        "down": "/d/jjf/qilin"
      }
    },
    "/d/jjf/se_garden": {
      "type": "ROOM",
      "short": "花园",
      "exits": {
        "southeast": "/d/jjf/son_cabinet",
        "north": "/d/jjf/ne_garden",
        "west": "/d/jjf/sw_garden",
        "northwest": "/d/jjf/nw_garden"
      }
    },
    "/d/jjf/side_keting": {
      "type": "ROOM",
      "short": "偏厅",
      "exits": {
        "east": "/d/jjf/keting"
      }
    },
    "/d/jjf/sleep-2": {
      "type": "ROOM",
      "short": "茅屋",
      "exits": {
        "south": "/d/jjf/sleep"
      },
      "objects": {
        "/d/jjf/npc/baifalaoren.c": 1
      }
    },
    "/d/jjf/sleep": {
      "type": "ROOM",
      "short": "模糊中",
      "exits": {
        "north": "/d/jjf/sleep-2"
      }
    },
    "/d/jjf/son_cabinet": {
      "type": "ROOM",
      "short": "东厢房",
      "exits": {
        "north": "/d/jjf/son_shufang",
        "northwest": "/d/jjf/se_garden"
      }
    },
    "/d/jjf/son_shufang": {
      "type": "ROOM",
      "short": "书房",
      "exits": {
        "south": "/d/jjf/son_cabinet"
      }
    },
    "/d/jjf/stone_road": {
      "type": "ROOM",
      "short": "石子路",
      "exits": {
        "north": "/d/jjf/keting",
        "southwest": "/d/jjf/pavillion"
      }
    },
    "/d/jjf/stone_road2": {
      "type": "ROOM",
      "short": "石子路",
      "exits": {
        "northeast": "/d/jjf/sw_garden",
        "south": "/d/jjf/main_cabinet"
      }
    },
    "/d/jjf/sw_garden": {
      "type": "ROOM",
      "short": "花园",
      "exits": {
        "north": "/d/jjf/nw_garden",
        "east": "/d/jjf/se_garden",
        "southwest": "/d/jjf/stone_road2"
      }
    },
    "/d/jjf/yingfang": {
      "type": "ROOM",
      "short": "东营房",
      "exits": {
        "south": "/d/city/qinglong-e4"
      },
      "objects": {
        "/d/jjf/npc/fujiang": 2,
        "/d/jjf/npc/chengyaojin": 1
      }
    },
    "/d/jjf/zuixing": {
      "type": "ROOM",
      "short": "醉星楼",
      "objects": {
        "/d/jjf/npc/qinbing-jian": 1,
        "/d/jjf/npc/qinbing-qi": 1
      },
      "exits": {
        "northwest": "/d/city/center"
      }
    },
    "/d/jjf/zuixing2": {
      "type": "ROOM",
      "short": "醉星楼二楼",
      "objects": {
        "/d/jjf/npc/liyuanji.c": 1,
        "/d/jjf/npc/lijiancheng.c": 1
      },
      "exits": {
        "down": "/d/jjf/zuixing"
      }
    },
    "/d/kaifeng/armor": {
      "type": "ROOM",
      "short": "盔甲库",
      "exits": {
        "west": "/d/kaifeng/east"
      }
    },
    "/d/kaifeng/autumn": {
      "type": "ROOM",
      "short": "秋廊",
      "exits": {
        "west": "/d/kaifeng/south",
        "north": "/d/kaifeng/east"
      }
    },
    "/d/kaifeng/bingqi": {
      "type": "ROOM",
      "short": "兵器场",
      "exits": {
        "south": "/d/kaifeng/zhong"
      },
      "objects": {
        "/d/kaifeng/npc/xiaotong": 1,
        "/d/kaifeng/npc/xgong": 1
      }
    },
    "/d/kaifeng/chen1": {
      "type": "ROOM",
      "short": "辰龙道",
      "exits": {
        "west": "/d/kaifeng/chengmen",
        "east": "/d/kaifeng/chen2"
      }
    },
    "/d/kaifeng/chen2": {
      "type": "ROOM",
      "short": "辰龙道",
      "exits": {
        "west": "/d/kaifeng/chen1",
        "east": "/d/kaifeng/tieta",
        "south": "/d/kaifeng/machang"
      }
    },
    "/d/kaifeng/chengmen": {
      "type": "ROOM",
      "short": "开封城门",
      "exits": {
        "west": "/d/kaifeng/east5",
        "east": "/d/kaifeng/chen1"
      },
      "objects": {
        "/d/kaifeng/npc/wujiang": 1,
        "/d/kaifeng/npc/bing": 3
      }
    },
    "/d/kaifeng/chunchun": {
      "type": "ROOM",
      "short": "春醇茶栈",
      "exits": {
        "east": "/d/kaifeng/shun5"
      },
      "objects": {
        "/d/kaifeng/npc/chaniang": 1
      }
    },
    "/d/kaifeng/cuilan": {
      "type": "ROOM",
      "short": "翠兰亭",
      "exits": {
        "south": "/d/kaifeng/yulan"
      },
      "objects": {
        "/d/kaifeng/npc/yahuan": 1,
        "/d/kaifeng/npc/cuilan": 1
      }
    },
    "/d/kaifeng/dangpu": {
      "type": "HOCKSHOP",
      "short": "当铺",
      "exits": {
        "west": "/d/kaifeng/yao3"
      },
      "objects": {
        "/d/kaifeng/npc/xu": 1
      }
    },
    "/d/kaifeng/donghu1": {
      "type": "ROOM",
      "short": "东湖路",
      "exits": {
        "east": "/d/kaifeng/donghu2",
        "south": "/d/kaifeng/donghu3"
      }
    },
    "/d/kaifeng/donghu2": {
      "type": "ROOM",
      "short": "东湖路",
      "exits": {
        "west": "/d/kaifeng/donghu1",
        "southeast": "/d/kaifeng/donghu5"
      }
    },
    "/d/kaifeng/donghu3": {
      "type": "ROOM",
      "short": "东湖路",
      "exits": {
        "west": "/d/kaifeng/guting1",
        "east": "/d/kaifeng/donghu4"
      }
    },
    "/d/kaifeng/donghu4": {
      "type": "ROOM",
      "short": "东湖路",
      "exits": {
        "west": "/d/kaifeng/donghu3",
        "north": "/d/kaifeng/donghu1",
        "southeast": "/d/kaifeng/donghu6"
      }
    },
    "/d/kaifeng/donghu5": {
      "type": "ROOM",
      "short": "东湖路",
      "exits": {
        "northwest": "/d/kaifeng/donghu2",
        "southeast": "/d/kaifeng/donghu7"
      }
    },
    "/d/kaifeng/donghu6": {
      "type": "ROOM",
      "short": "东湖路",
      "exits": {
        "northwest": "/d/kaifeng/donghu4",
        "southeast": "/d/kaifeng/donghu8"
      }
    },
    "/d/kaifeng/donghu7": {
      "type": "ROOM",
      "short": "东湖路",
      "exits": {
        "northwest": "/d/kaifeng/donghu5",
        "southwest": "/d/kaifeng/donghu8"
      }
    },
    "/d/kaifeng/donghu8": {
      "type": "ROOM",
      "short": "东湖路",
      "exits": {
        "northwest": "/d/kaifeng/donghu6",
        "northeast": "/d/kaifeng/donghu7"
      }
    },
    "/d/kaifeng/drug": {
      "type": "ROOM",
      "short": "御药库",
      "exits": {
        "north": "/d/kaifeng/south"
      }
    },
    "/d/kaifeng/east": {
      "type": "ROOM",
      "short": "东观礼台",
      "exits": {
        "east": "/d/kaifeng/armor",
        "north": "/d/kaifeng/summer",
        "south": "/d/kaifeng/autumn",
        "westdown": "/d/kaifeng/ground"
      },
      "objects": {
        "/d/kaifeng/npc/siguan": 2
      }
    },
    "/d/kaifeng/east1": {
      "type": "ROOM",
      "short": "大官道",
      "exits": {
        "west": "/d/city/dongmen",
        "east": "/d/kaifeng/east2"
      }
    },
    "/d/kaifeng/east2": {
      "type": "ROOM",
      "short": "大官道",
      "exits": {
        "west": "/d/kaifeng/east1",
        "east": "/d/kaifeng/east3"
      }
    },
    "/d/kaifeng/east3": {
      "type": "ROOM",
      "short": "大官道",
      "exits": {
        "west": "/d/kaifeng/east2",
        "east": "/d/kaifeng/east4"
      }
    },
    "/d/kaifeng/east4": {
      "type": "ROOM",
      "short": "大官道",
      "exits": {
        "west": "/d/kaifeng/east3",
        "east": "/d/kaifeng/east5"
      }
    },
    "/d/kaifeng/east5": {
      "type": "ROOM",
      "short": "大官道",
      "exits": {
        "west": "/d/kaifeng/east4",
        "east": "/d/kaifeng/chengmen"
      }
    },
    "/d/kaifeng/ee": {
      "type": "ROOM",
      "short": "遏恶场",
      "exits": {
        "northwest": "/d/kaifeng/shuilu",
        "west": "/d/kaifeng/jixian"
      },
      "objects": {
        "/d/kaifeng/npc/people": 3,
        "/d/kaifeng/npc/hu": 1
      }
    },
    "/d/kaifeng/gate": {
      "type": "ROOM",
      "short": "五彩门",
      "exits": {
        "northdown": "/d/kaifeng/shuilu",
        "south": "/d/kaifeng/north"
      }
    },
    "/d/kaifeng/ground": {
      "type": "ROOM",
      "short": "赛场",
      "exits": {
        "westup": "/d/kaifeng/west",
        "eastup": "/d/kaifeng/east",
        "northup": "/d/kaifeng/north",
        "southup": "/d/kaifeng/south"
      },
      "objects": {
        "/d/kaifeng/npc/wei": 1,
        "/d/kaifeng/npc/siguan": 2
      }
    },
    "/d/kaifeng/guting1": {
      "type": "ROOM",
      "short": "古亭道",
      "exits": {
        "northup": "/d/kaifeng/wanshou",
        "west": "/d/kaifeng/xihu4",
        "east": "/d/kaifeng/donghu3",
        "south": "/d/kaifeng/guting2"
      }
    },
    "/d/kaifeng/guting2": {
      "type": "ROOM",
      "short": "古亭道",
      "exits": {
        "south": "/d/kaifeng/guting3",
        "west": "/d/kaifeng/xihu6",
        "north": "/d/kaifeng/guting1"
      }
    },
    "/d/kaifeng/guting3": {
      "type": "ROOM",
      "short": "古亭道",
      "exits": {
        "southeast": "/d/kaifeng/yao1",
        "southwest": "/d/kaifeng/shun1",
        "north": "/d/kaifeng/guting2"
      }
    },
    "/d/kaifeng/jingxin": {
      "type": "ROOM",
      "short": "静心宫",
      "exits": {
        "west": "/d/kaifeng/ningxin"
      }
    },
    "/d/kaifeng/jixian": {
      "type": "ROOM",
      "short": "祭贤场",
      "exits": {
        "north": "/d/kaifeng/shuilu",
        "west": "/d/kaifeng/pudu",
        "east": "/d/kaifeng/ee"
      },
      "objects": {
        "/d/kaifeng/npc/people": 3,
        "/d/kaifeng/npc/chen": 1
      }
    },
    "/d/kaifeng/kuijia": {
      "type": "ROOM",
      "short": "盔甲场",
      "exits": {
        "north": "/d/kaifeng/zhong"
      },
      "objects": {
        "/d/kaifeng/npc/xiaotong": 1,
        "/d/kaifeng/npc/xpo": 1
      }
    },
    "/d/kaifeng/lanting": {
      "type": "ROOM",
      "short": "兰亭府",
      "exits": {
        "west": "/d/kaifeng/yao4",
        "east": "/d/kaifeng/xianglan"
      },
      "objects": {
        "/d/kaifeng/npc/yahuan": 2
      }
    },
    "/d/kaifeng/machang": {
      "type": "ROOM",
      "short": "马场",
      "exits": {
        "north": "/d/kaifeng/chen2"
      },
      "objects": {
        "/d/kaifeng/npc/maguan": 1,
        "/d/kaifeng/npc/horse": 6
      }
    },
    "/d/kaifeng/ningxin": {
      "type": "ROOM",
      "short": "宁心宫",
      "exits": {
        "south": "/d/kaifeng/sanxin",
        "west": "/d/kaifeng/qingxin",
        "east": "/d/kaifeng/jingxin"
      }
    },
    "/d/kaifeng/north": {
      "type": "ROOM",
      "short": "北观礼台",
      "exits": {
        "north": "/d/kaifeng/gate",
        "west": "/d/kaifeng/spring",
        "east": "/d/kaifeng/summer",
        "southdown": "/d/kaifeng/ground"
      },
      "objects": {
        "/d/kaifeng/npc/siguan": 2
      }
    },
    "/d/kaifeng/pudu": {
      "type": "ROOM",
      "short": "普渡场",
      "exits": {
        "northeast": "/d/kaifeng/shuilu",
        "east": "/d/kaifeng/jixian"
      },
      "objects": {
        "/d/kaifeng/npc/people": 3,
        "/d/kaifeng/npc/yin": 1
      }
    },
    "/d/kaifeng/qili": {
      "type": "ROOM",
      "short": "七里酒楼",
      "exits": {
        "west": "/d/kaifeng/yao5"
      },
      "objects": {
        "/d/kaifeng/npc/hai": 1
      }
    },
    "/d/kaifeng/qingxin": {
      "type": "ROOM",
      "short": "清心宫",
      "exits": {
        "east": "/d/kaifeng/ningxin"
      }
    },
    "/d/kaifeng/sanxin": {
      "type": "ROOM",
      "short": "三心宫",
      "exits": {
        "south": "/d/kaifeng/wanshou",
        "north": "/d/kaifeng/ningxin"
      }
    },
    "/d/kaifeng/shuaifu": {
      "type": "ROOM",
      "short": "帅府",
      "exits": {
        "west": "/d/kaifeng/tianpeng"
      },
      "objects": {
        "/d/kaifeng/npc/zhubajie": 1
      }
    },
    "/d/kaifeng/shuilu": {
      "type": "ROOM",
      "short": "水陆大会",
      "exits": {
        "north": "/d/kaifeng/yuwang3",
        "southwest": "/d/kaifeng/pudu",
        "south": "/d/kaifeng/jixian",
        "southeast": "/d/kaifeng/ee",
        "southup": "/d/kaifeng/gate"
      },
      "objects": {
        "/d/kaifeng/npc/zu": 4
      }
    },
    "/d/kaifeng/shun1": {
      "type": "ROOM",
      "short": "舜王街",
      "exits": {
        "northeast": "/d/kaifeng/guting3",
        "south": "/d/kaifeng/shun2"
      }
    },
    "/d/kaifeng/shun2": {
      "type": "ROOM",
      "short": "舜王街",
      "exits": {
        "north": "/d/kaifeng/shun1",
        "south": "/d/kaifeng/shun3",
        "west": "/d/kaifeng/yuxiang"
      }
    },
    "/d/kaifeng/shun3": {
      "type": "ROOM",
      "short": "舜王街",
      "exits": {
        "north": "/d/kaifeng/shun2",
        "south": "/d/kaifeng/shun4"
      }
    },
    "/d/kaifeng/shun4": {
      "type": "ROOM",
      "short": "舜王街",
      "exits": {
        "north": "/d/kaifeng/shun3",
        "south": "/d/kaifeng/shun5",
        "west": "/d/kaifeng/yangji"
      }
    },
    "/d/kaifeng/shun5": {
      "type": "ROOM",
      "short": "舜王街",
      "exits": {
        "southeast": "/d/kaifeng/tieta",
        "north": "/d/kaifeng/shun4",
        "west": "/d/kaifeng/chunchun"
      }
    },
    "/d/kaifeng/south": {
      "type": "ROOM",
      "short": "南观礼台",
      "exits": {
        "south": "/d/kaifeng/drug",
        "west": "/d/kaifeng/winter",
        "east": "/d/kaifeng/autumn",
        "northdown": "/d/kaifeng/ground"
      },
      "objects": {
        "/d/kaifeng/npc/siguan": 2
      }
    },
    "/d/kaifeng/spring": {
      "type": "ROOM",
      "short": "春廊",
      "exits": {
        "east": "/d/kaifeng/north",
        "south": "/d/kaifeng/west"
      }
    },
    "/d/kaifeng/summer": {
      "type": "ROOM",
      "short": "夏廊",
      "exits": {
        "west": "/d/kaifeng/north",
        "south": "/d/kaifeng/east"
      }
    },
    "/d/kaifeng/tianpeng": {
      "type": "ROOM",
      "short": "天蓬府门",
      "exits": {
        "east": "/d/kaifeng/shuaifu",
        "west": "/d/kaifeng/yao1"
      },
      "objects": {
        "/d/kaifeng/npc/zhubing": 2
      }
    },
    "/d/kaifeng/tieta": {
      "type": "ROOM",
      "short": "汴京铁塔",
      "exits": {
        "west": "/d/kaifeng/chen2",
        "southeast": "/d/kaifeng/yuwang1",
        "northeast": "/d/kaifeng/yao5",
        "northwest": "/d/kaifeng/shun5"
      }
    },
    "/d/kaifeng/wanshou": {
      "type": "ROOM",
      "short": "万寿宫门",
      "exits": {
        "southdown": "/d/kaifeng/guting1",
        "north": "/d/kaifeng/sanxin"
      },
      "objects": {
        "/d/kaifeng/npc/gongwei": 2,
        "/d/kaifeng/obj/diaoyu": 1
      }
    },
    "/d/kaifeng/weapon": {
      "type": "ROOM",
      "short": "兵器库",
      "exits": {
        "east": "/d/kaifeng/west"
      }
    },
    "/d/kaifeng/west": {
      "type": "ROOM",
      "short": "西观礼台",
      "exits": {
        "west": "/d/kaifeng/weapon",
        "north": "/d/kaifeng/spring",
        "south": "/d/kaifeng/winter",
        "eastdown": "/d/kaifeng/ground"
      },
      "objects": {
        "/d/kaifeng/npc/siguan": 2
      }
    },
    "/d/kaifeng/winter": {
      "type": "ROOM",
      "short": "冬廊",
      "exits": {
        "east": "/d/kaifeng/south",
        "north": "/d/kaifeng/west"
      }
    },
    "/d/kaifeng/xianglan": {
      "type": "ROOM",
      "short": "香兰亭",
      "exits": {
        "west": "/d/kaifeng/lanting",
        "north": "/d/kaifeng/yulan"
      },
      "objects": {
        "/d/kaifeng/npc/yahuan": 1,
        "/d/kaifeng/npc/xianglan": 1
      }
    },
    "/d/kaifeng/xihu1": {
      "type": "ROOM",
      "short": "西湖路",
      "exits": {
        "east": "/d/kaifeng/xihu2",
        "southwest": "/d/kaifeng/xihu3"
      }
    },
    "/d/kaifeng/xihu2": {
      "type": "ROOM",
      "short": "西湖路",
      "exits": {
        "west": "/d/kaifeng/xihu1",
        "southeast": "/d/kaifeng/xihu4"
      }
    },
    "/d/kaifeng/xihu3": {
      "type": "ROOM",
      "short": "西湖路",
      "exits": {
        "northeast": "/d/kaifeng/xihu1",
        "south": "/d/kaifeng/xihu5"
      }
    },
    "/d/kaifeng/xihu4": {
      "type": "ROOM",
      "short": "西湖路",
      "exits": {
        "northwest": "/d/kaifeng/xihu2",
        "south": "/d/kaifeng/xihu6",
        "east": "/d/kaifeng/guting1"
      }
    },
    "/d/kaifeng/xihu5": {
      "type": "ROOM",
      "short": "西湖路",
      "exits": {
        "north": "/d/kaifeng/xihu3",
        "southeast": "/d/kaifeng/xihu7"
      }
    },
    "/d/kaifeng/xihu6": {
      "type": "ROOM",
      "short": "西湖路",
      "exits": {
        "north": "/d/kaifeng/xihu4",
        "southwest": "/d/kaifeng/xihu7",
        "east": "/d/kaifeng/guting2"
      }
    },
    "/d/kaifeng/xihu7": {
      "type": "ROOM",
      "short": "西湖路",
      "exits": {
        "northeast": "/d/kaifeng/xihu6",
        "northwest": "/d/kaifeng/xihu5"
      }
    },
    "/d/kaifeng/yangji": {
      "type": "BANK",
      "short": "杨记钱庄",
      "exits": {
        "east": "/d/kaifeng/shun4"
      },
      "objects": {
        "/d/kaifeng/npc/yang": 1
      }
    },
    "/d/kaifeng/yao1": {
      "type": "ROOM",
      "short": "尧王街",
      "exits": {
        "northwest": "/d/kaifeng/guting3",
        "south": "/d/kaifeng/yao2",
        "east": "/d/kaifeng/tianpeng"
      }
    },
    "/d/kaifeng/yao2": {
      "type": "ROOM",
      "short": "尧王街",
      "exits": {
        "north": "/d/kaifeng/yao1",
        "south": "/d/kaifeng/yao3"
      }
    },
    "/d/kaifeng/yao3": {
      "type": "ROOM",
      "short": "尧王街",
      "exits": {
        "north": "/d/kaifeng/yao2",
        "south": "/d/kaifeng/yao4",
        "east": "/d/kaifeng/dangpu"
      }
    },
    "/d/kaifeng/yao4": {
      "type": "ROOM",
      "short": "尧王街",
      "exits": {
        "south": "/d/kaifeng/yao5",
        "north": "/d/kaifeng/yao3",
        "east": "/d/kaifeng/lanting"
      }
    },
    "/d/kaifeng/yao5": {
      "type": "ROOM",
      "short": "尧王街",
      "exits": {
        "southwest": "/d/kaifeng/tieta",
        "north": "/d/kaifeng/yao4",
        "east": "/d/kaifeng/qili"
      }
    },
    "/d/kaifeng/yulan": {
      "type": "ROOM",
      "short": "玉兰亭",
      "exits": {
        "north": "/d/kaifeng/cuilan",
        "south": "/d/kaifeng/xianglan"
      },
      "objects": {
        "/d/kaifeng/npc/yahuan": 1,
        "/d/kaifeng/npc/yulan": 1
      }
    },
    "/d/kaifeng/yuwang1": {
      "type": "ROOM",
      "short": "禹王道",
      "exits": {
        "northwest": "/d/kaifeng/tieta",
        "south": "/d/kaifeng/yuwang2"
      }
    },
    "/d/kaifeng/yuwang2": {
      "type": "ROOM",
      "short": "禹王道",
      "exits": {
        "north": "/d/kaifeng/yuwang1",
        "eastup": "/d/kaifeng/yuwang3"
      }
    },
    "/d/kaifeng/yuwang3": {
      "type": "ROOM",
      "short": "禹王台",
      "exits": {
        "westdown": "/d/kaifeng/yuwang2",
        "south": "/d/kaifeng/shuilu"
      },
      "objects": {
        "/d/kaifeng/npc/zu": 2
      }
    },
    "/d/kaifeng/yuxiang": {
      "type": "ROOM",
      "short": "御相府",
      "exits": {
        "east": "/d/kaifeng/shun2",
        "west": "/d/kaifeng/zhong"
      },
      "objects": {
        "/d/kaifeng/npc/xiaotong": 2
      }
    },
    "/d/kaifeng/zhong": {
      "type": "ROOM",
      "short": "中堂",
      "exits": {
        "east": "/d/kaifeng/yuxiang",
        "north": "/d/kaifeng/bingqi",
        "south": "/d/kaifeng/kuijia"
      },
      "objects": {
        "/d/kaifeng/npc/xiaotong": 1
      }
    },
    "/d/lingtai/baixi": {
      "type": "ROOM",
      "short": "白石溪",
      "exits": {
        "northwest": "/d/lingtai/baixi2",
        "southeast": "/d/lingtai/uphill3"
      }
    },
    "/d/lingtai/baixi2": {
      "type": "ROOM",
      "short": "白石溪",
      "exits": {
        "southup": "/d/lingtai/lantao",
        "southeast": "/d/lingtai/baixi"
      }
    },
    "/d/lingtai/cave1": {
      "type": "ROOM",
      "short": "洞口",
      "exits": {
        "east": "/d/lingtai/forrest",
        "west": "/d/lingtai/cave2"
      },
      "objects": {
        "/d/lingtai/npc/oldwolf.c": 1
      }
    },
    "/d/lingtai/cave2": {
      "type": "ROOM",
      "short": "山洞",
      "objects": {
        "/d/lingtai/npc/youngwolf.c": 2
      },
      "exits": {
        "east": "/d/lingtai/cave1"
      }
    },
    "/d/lingtai/forrest": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "northup": "/d/lingtai/lantao1",
        "south": "/d/lingtai/forrest2",
        "east": "/d/lingtai/uphill2",
        "west": "/d/lingtai/cave1"
      },
      "objects": {
        "/d/lingtai/obj/shuzhi": 2
      }
    },
    "/d/lingtai/forrest2": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "north": "/d/lingtai/forrest"
      },
      "objects": {
        "/d/lingtai/obj/shuzhi": 2
      }
    },
    "/d/lingtai/gate": {
      "type": "ROOM",
      "short": "山门",
      "exits": {
        "north": "/d/lingtai/gate1",
        "southdown": "/d/lingtai/uphill6"
      },
      "objects": {
        "/d/lingtai/npc/yingke": 1
      }
    },
    "/d/lingtai/gate1": {
      "type": "ROOM",
      "short": "小院",
      "exits": {
        "north": "/d/lingtai/inside1",
        "south": "/d/lingtai/gate",
        "east": "/d/lingtai/inside2",
        "west": "/d/lingtai/inside3"
      }
    },
    "/d/lingtai/guanjin": {
      "type": "ROOM",
      "short": "观景台",
      "exits": {
        "west": "/d/lingtai/uphill4"
      },
      "objects": {
        "/d/lingtai/npc/zhangdaoling": 1
      }
    },
    "/d/lingtai/hill": {
      "type": "ROOM",
      "short": "方寸山下",
      "exits": {
        "northup": "/d/lingtai/uphill1",
        "southeast": "/d/gao/road4"
      }
    },
    "/d/lingtai/houlang1": {
      "type": "ROOM",
      "short": "后廊",
      "exits": {
        "northwest": "/d/lingtai/houlang2",
        "south": "/d/lingtai/jingtang"
      }
    },
    "/d/lingtai/houlang2": {
      "type": "ROOM",
      "short": "后廊",
      "exits": {
        "northeast": "/d/lingtai/houlang3",
        "southeast": "/d/lingtai/houlang1"
      }
    },
    "/d/lingtai/houlang3": {
      "type": "ROOM",
      "short": "后廊",
      "exits": {
        "northwest": "/d/lingtai/houlang4",
        "southwest": "/d/lingtai/houlang2"
      }
    },
    "/d/lingtai/houlang4": {
      "type": "ROOM",
      "short": "后廊",
      "exits": {
        "northeast": "/d/lingtai/houlang5",
        "southeast": "/d/lingtai/houlang3"
      }
    },
    "/d/lingtai/houlang5": {
      "type": "ROOM",
      "short": "林中木屋",
      "exits": {
        "southwest": "/d/lingtai/houlang4",
        "enter": "/d/lingtai/room"
      }
    },
    "/d/lingtai/houyuan": {
      "type": "ROOM",
      "short": "后院",
      "exits": {
        "southwest": "/d/lingtai/inside1",
        "south": "/d/lingtai/inside6",
        "north": "/d/lingtai/jingge",
        "east": "/d/lingtai/inside4"
      },
      "objects": {
        "/d/lingtai/npc/xiaodao": 1
      }
    },
    "/d/lingtai/inside1": {
      "type": "ROOM",
      "short": "正院",
      "exits": {
        "northeast": "/d/lingtai/houyuan",
        "west": "/d/lingtai/inside5",
        "south": "/d/lingtai/gate1",
        "northup": "/d/lingtai/jingtang"
      }
    },
    "/d/lingtai/inside2": {
      "type": "ROOM",
      "short": "练功场",
      "exits": {
        "west": "/d/lingtai/gate1",
        "east": "/d/lingtai/inside7",
        "north": "/d/lingtai/inside8",
        "south": "/d/lingtai/sleep"
      },
      "objects": {
        "/d/lingtai/npc/xiao": 3,
        "/d/lingtai/npc/zhangmen": 1,
        "/d/lingtai/obj/rack": 1
      }
    },
    "/d/lingtai/inside3": {
      "type": "ROOM",
      "short": "厢房",
      "exits": {
        "east": "/d/lingtai/gate1"
      },
      "objects": {
        "/d/lingtai/npc/yunjing": 1
      }
    },
    "/d/lingtai/inside4": {
      "type": "ROOM",
      "short": "厨房",
      "exits": {
        "west": "/d/lingtai/houyuan"
      },
      "objects": {
        "/d/lingtai/npc/wanfeng": 1,
        "/d/ourhome/obj/hulu": 1
      }
    },
    "/d/lingtai/inside5": {
      "type": "ROOM",
      "short": "厢房",
      "exits": {
        "east": "/d/lingtai/inside1"
      },
      "objects": {
        "/d/lingtai/npc/guangyun": 1
      }
    },
    "/d/lingtai/inside6": {
      "type": "ROOM",
      "short": "厢房",
      "exits": {
        "north": "/d/lingtai/houyuan"
      },
      "objects": {
        "/d/lingtai/npc/yunqing": 1,
        "/d/lingtai/npc/shixong": 1
      }
    },
    "/d/lingtai/inside7": {
      "type": "ROOM",
      "short": "练功室",
      "exits": {
        "west": "/d/lingtai/inside2"
      },
      "objects": {
        "/d/lingtai/npc/huiliu": 1,
        "/d/lingtai/npc/huigang": 1
      }
    },
    "/d/lingtai/inside8": {
      "type": "ROOM",
      "short": "练功室",
      "exits": {
        "south": "/d/lingtai/inside2"
      },
      "objects": {
        "/d/lingtai/npc/laodao": 1
      }
    },
    "/d/lingtai/jingge": {
      "type": "ROOM",
      "short": "经阁",
      "exits": {
        "south": "/d/lingtai/houyuan",
        "up": "/d/lingtai/lou"
      },
      "objects": {
        "/d/lingtai/npc/guangxi": 1
      }
    },
    "/d/lingtai/jingtang": {
      "type": "ROOM",
      "short": "讲经堂",
      "exits": {
        "north": "/d/lingtai/houlang1.c",
        "southdown": "/d/lingtai/inside1.c"
      },
      "objects": {
        "/d/lingtai/npc/xiao": 1,
        "/d/lingtai/npc/yunyang": 1
      }
    },
    "/d/lingtai/lantao": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "northdown": "/d/lingtai/baixi2",
        "south": "/d/lingtai/lantao1",
        "westup": "/d/lingtai/lantao2"
      },
      "objects": {
        "/d/lingtai/obj/shuzhi": 1,
        "/d/lingtai/npc/kancai": 2
      }
    },
    "/d/lingtai/lantao1": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "north": "/d/lingtai/lantao",
        "southdown": "/d/lingtai/forrest"
      },
      "objects": {
        "/d/lingtai/obj/shuzhi": 1,
        "/d/lingtai/npc/kancai": 1
      }
    },
    "/d/lingtai/lantao2": {
      "type": "ROOM",
      "short": "烂桃山",
      "exits": {
        "eastdown": "/d/lingtai/lantao"
      }
    },
    "/d/lingtai/lou": {
      "type": "ROOM",
      "short": "小室",
      "exits": {
        "down": "/d/lingtai/jingge"
      }
    },
    "/d/lingtai/room": {
      "type": "ROOM",
      "short": "瑶台",
      "exits": {
        "out": "/d/lingtai/houlang5"
      },
      "objects": {
        "/d/lingtai/npc/puti": 1
      }
    },
    "/d/lingtai/sleep": {
      "type": "ROOM",
      "short": "卧室",
      "exits": {
        "north": "/d/lingtai/inside2"
      },
      "objects": {
        "/d/obj/weapon/stick/bang": 1
      }
    },
    "/d/lingtai/uphill1": {
      "type": "ROOM",
      "short": "妙音坡",
      "exits": {
        "north": "/d/lingtai/uphill2",
        "southdown": "/d/lingtai/hill"
      }
    },
    "/d/lingtai/uphill2": {
      "type": "ROOM",
      "short": "枯松坪",
      "exits": {
        "northup": "/d/lingtai/uphill3",
        "south": "/d/lingtai/uphill1",
        "west": "/d/lingtai/forrest"
      }
    },
    "/d/lingtai/uphill3": {
      "type": "ROOM",
      "short": "白石溪",
      "exits": {
        "northeast": "/d/lingtai/uphill4",
        "southdown": "/d/lingtai/uphill2",
        "northwest": "/d/lingtai/baixi"
      }
    },
    "/d/lingtai/uphill4": {
      "type": "ROOM",
      "short": "碧萝岭",
      "exits": {
        "east": "/d/lingtai/guanjin",
        "northeast": "/d/lingtai/uphill5",
        "southwest": "/d/lingtai/uphill3"
      },
      "objects": {
        "/d/lingtai/npc/qiaofu.c": 1
      }
    },
    "/d/lingtai/uphill5": {
      "type": "ROOM",
      "short": "青石阶",
      "exits": {
        "northup": "/d/lingtai/uphill6",
        "southwest": "/d/lingtai/uphill4"
      }
    },
    "/d/lingtai/uphill6": {
      "type": "ROOM",
      "short": "青石阶",
      "exits": {
        "northup": "/d/lingtai/gate",
        "southdown": "/d/lingtai/uphill5"
      },
      "objects": {
        "/d/xueshan/npc/qingshi-laomo": 1
      }
    },
    "/d/lingtai/uptree": {
      "type": "ROOM",
      "short": "大松树顶",
      "exits": {
        "down": "/d/lingtai/uphill2"
      },
      "objects": {
        "/d/lingtai/obj/guo": 1
      }
    },
    "/d/meishan/cuiping": {
      "type": "ROOM",
      "short": "翠屏峡",
      "exits": {
        "northup": "/d/meishan/feifeng",
        "southdown": "/d/meishan/jixian"
      }
    },
    "/d/meishan/denglong1": {
      "type": "ROOM",
      "short": "登龙津",
      "objects": {
        "/d/meishan/npc/fisher": 1
      },
      "exits": {
        "northwest": "/d/meishan/guanjiang3",
        "east": "/d/meishan/denglong2"
      }
    },
    "/d/meishan/denglong2": {
      "type": "ROOM",
      "short": "登龙津",
      "objects": {
        "/d/meishan/npc/fefisher": 1
      },
      "exits": {
        "west": "/d/meishan/denglong1",
        "east": "/d/meishan/denglong3",
        "north": "/d/meishan/xiaoyuan"
      }
    },
    "/d/meishan/denglong3": {
      "type": "ROOM",
      "short": "登龙津",
      "exits": {
        "west": "/d/meishan/denglong2",
        "northeast": "/d/meishan/erlangwai"
      }
    },
    "/d/meishan/erlangmiao": {
      "type": "ROOM",
      "short": "二郎庙",
      "objects": {
        "/d/meishan/npc/miaozhu": 1
      },
      "exits": {
        "south": "/d/meishan/erlangwai"
      }
    },
    "/d/meishan/erlangwai": {
      "type": "ROOM",
      "short": "二郎庙外",
      "objects": {
        "/d/meishan/npc/laotai": 1
      },
      "exits": {
        "southwest": "/d/meishan/denglong3",
        "north": "/d/meishan/erlangmiao",
        "east": "/d/meishan/tiezhu"
      }
    },
    "/d/meishan/feifeng": {
      "type": "ROOM",
      "short": "飞凤峰",
      "objects": {
        "/d/meishan/npc/erlang": 1
      },
      "exits": {
        "southdown": "/d/meishan/cuiping"
      }
    },
    "/d/meishan/fenglin1": {
      "type": "ROOM",
      "short": "枫林",
      "objects": {
        "/d/meishan/npc/cao": 1
      },
      "exits": {
        "west": "/d/meishan/tiezhu",
        "northeast": "/d/meishan/sengquan"
      }
    },
    "/d/meishan/fenglin2": {
      "type": "ROOM",
      "short": "枫林",
      "objects": {
        "/d/meishan/npc/cao": 1
      },
      "exits": {
        "west": "/d/meishan/sengquan"
      }
    },
    "/d/meishan/guanjiang1": {
      "type": "ROOM",
      "short": "灌江",
      "exits": {
        "northwest": "/d/changan/nanyue",
        "east": "/d/meishan/guanjiang2"
      }
    },
    "/d/meishan/guanjiang2": {
      "type": "ROOM",
      "short": "灌江",
      "exits": {
        "west": "/d/meishan/guanjiang1",
        "east": "/d/meishan/guanjiang3"
      }
    },
    "/d/meishan/guanjiang3": {
      "type": "ROOM",
      "short": "灌江",
      "objects": {
        "/d/meishan/npc/luke": 2
      },
      "exits": {
        "west": "/d/meishan/guanjiang2",
        "southeast": "/d/meishan/denglong1"
      }
    },
    "/d/meishan/jixian": {
      "type": "ROOM",
      "short": "集仙坡",
      "objects": {
        "/d/meishan/npc/zhi": 1,
        "/d/meishan/npc/guo": 1
      },
      "exits": {
        "northup": "/d/meishan/cuiping",
        "southeast": "/d/meishan/zhaoyun"
      }
    },
    "/d/meishan/longwan": {
      "type": "ROOM",
      "short": "龙湾渡",
      "objects": {
        "/d/meishan/npc/kang": 1
      },
      "exits": {
        "northwest": "/d/meishan/sengquan"
      }
    },
    "/d/meishan/maowu": {
      "type": "ROOM",
      "short": "草屋",
      "objects": {
        "/d/meishan/npc/zhangsun": 1
      },
      "exits": {
        "south": "/d/meishan/xiaoyuan"
      }
    },
    "/d/meishan/sengquan": {
      "type": "ROOM",
      "short": "圣泉祠",
      "objects": {
        "/d/meishan/npc/zhang": 1
      },
      "exits": {
        "southwest": "/d/meishan/fenglin1",
        "east": "/d/meishan/fenglin2",
        "southeast": "/d/meishan/longwan",
        "northup": "/d/meishan/zhaoyun"
      }
    },
    "/d/meishan/tiezhu": {
      "type": "ROOM",
      "short": "铁柱关",
      "exits": {
        "west": "/d/meishan/erlangwai",
        "east": "/d/meishan/fenglin1"
      }
    },
    "/d/meishan/xiaoyuan": {
      "type": "ROOM",
      "short": "小院",
      "objects": {
        "/d/meishan/npc/girl": 1
      },
      "exits": {
        "south": "/d/meishan/denglong2",
        "north": "/d/meishan/maowu"
      }
    },
    "/d/meishan/zhaoyun": {
      "type": "ROOM",
      "short": "朝云岭",
      "objects": {
        "/d/meishan/npc/yao": 1,
        "/d/meishan/npc/li": 1
      },
      "exits": {
        "southdown": "/d/meishan/sengquan",
        "northwest": "/d/meishan/jixian"
      }
    },
    "/d/moon/backyard": {
      "type": "ROOM",
      "short": "后院",
      "objects": {
        "/d/moon/obj/woodtable": 1,
        "/d/moon/obj/woodseat": 2,
        "/d/moon/obj/guihuageng": 1,
        "/d/moon/obj/snowglass": 2,
        "/d/moon/obj/xueli": 1
      },
      "exits": {
        "west": "/d/moon/wulang.c"
      }
    },
    "/d/moon/bed": {
      "type": "ROOM",
      "short": "牙玉软榻上",
      "exits": {
        "out": "/d/moon/bedroom"
      }
    },
    "/d/moon/bed_moon": {
      "type": "ROOM",
      "short": "床上",
      "exits": {
        "out": "/d/moon/wroom"
      }
    },
    "/d/moon/bedroom": {
      "type": "ROOM",
      "short": "卧房",
      "exits": {
        "down": "/d/moon/rain"
      }
    },
    "/d/moon/change_room": {
      "type": "ROOM",
      "short": "长思馆",
      "objects": {
        "/d/moon/npc/change.c": 1,
        "/d/obj/flower/juhua.c": 1
      },
      "exits": {
        "east": "/d/moon/huilang.c"
      }
    },
    "/d/moon/courtyard": {
      "type": "ROOM",
      "short": "天井",
      "exits": {
        "southeast": "/d/moon/junkroom.c",
        "west": "/d/moon/huilang1.c"
      },
      "objects": {
        "/d/moon/npc/fairy5.c": 1,
        "/d/obj/flower/rose.c": 2
      }
    },
    "/d/moon/eroom": {
      "type": "ROOM",
      "short": "练功房",
      "objects": {
        "/d/obj/book/san": 1,
        "/d/obj/book/girlbook": 1
      },
      "exits": {
        "west": "/d/moon/xiaoyuan"
      }
    },
    "/d/moon/fabao-road1": {
      "type": "ROOM",
      "short": "碎石路",
      "exits": {
        "east": "/d/moon/ontop2",
        "west": "/d/moon/fabao-road2"
      },
      "objects": {}
    },
    "/d/moon/fabao-road2": {
      "type": "ROOM",
      "short": "碎石路",
      "exits": {
        "east": "/d/moon/fabao-road1",
        "west": "/d/moon/fabao-room"
      },
      "objects": {}
    },
    "/d/moon/fabao-room": {
      "type": "ROOM",
      "short": "女娲补天处",
      "exits": {
        "east": "/d/moon/fabao-road2"
      }
    },
    "/d/moon/fengxue/fdoor": {
      "type": "ROOM",
      "short": "枫雪宫大门",
      "exits": {
        "south": "/d/moon/fengxue/fxtd",
        "enter": "/d/moon/fengxue/living"
      }
    },
    "/d/moon/fengxue/fxtd": {
      "type": "ROOM",
      "short": "枫雪天地",
      "exits": {
        "north": "/d/moon/fengxue/fdoor",
        "east": "/d/moon/yunu3"
      }
    },
    "/d/moon/fengxue/living": {
      "type": "ROOM",
      "short": "枫雪大殿",
      "exits": {
        "west": "/d/moon/fengxue/zoulang",
        "east": "/d/moon/fengxue/restroom",
        "north": "/d/moon/fengxue/meeting",
        "south": "/d/moon/fengxue/fdoor"
      },
      "objects": {
        "/d/moon/fengxue/npc/niu": 1
      }
    },
    "/d/moon/fengxue/meeting": {
      "type": "ROOM",
      "short": "议会大厅",
      "exits": {
        "south": "/d/moon/fengxue/living"
      }
    },
    "/d/moon/fengxue/restroom": {
      "type": "ROOM",
      "short": "枫雪宫休息室",
      "exits": {
        "west": "/d/moon/fengxue/living"
      }
    },
    "/d/moon/fengxue/talkroom": {
      "type": "ROOM",
      "short": "谈心室",
      "exits": {
        "out": "/d/moon/fengxue/zoulang"
      }
    },
    "/d/moon/fengxue/zoulang": {
      "type": "ROOM",
      "short": "三楼：走廊",
      "exits": {
        "enter": "/d/moon/fengxue/talkroom",
        "east": "/d/moon/fengxue/living"
      }
    },
    "/d/moon/ghg_zhengdian": {
      "type": "ROOM",
      "short": "广寒宫正殿",
      "objects": {
        "/d/moon/npc/fairy2.c": 1,
        "/d/moon/npc/fairy3.c": 1
      },
      "exits": {
        "east": "/d/moon/wulang.c",
        "south": "/d/moon/road3",
        "west": "/d/moon/huilang.c"
      }
    },
    "/d/moon/hudi": {
      "type": "ROOM",
      "short": "湖底",
      "exits": {
        "up": "/d/moon/lotuspond"
      }
    },
    "/d/moon/huilang": {
      "type": "ROOM",
      "short": "回廊",
      "exits": {
        "east": "/d/moon/ghg_zhengdian.c",
        "north": "/d/moon/huilang1.c",
        "west": "/d/moon/change_room.c"
      }
    },
    "/d/moon/huilang1": {
      "type": "ROOM",
      "short": "回廊",
      "exits": {
        "east": "/d/moon/courtyard.c",
        "south": "/d/moon/huilang.c",
        "west": "/d/moon/wangmu_room.c"
      },
      "objects": {
        "/d/moon/npc/fairy4": 1
      }
    },
    "/d/moon/jiaoli": {
      "type": "ROOM",
      "short": "花轿里面"
    },
    "/d/moon/junkroom": {
      "type": "ROOM",
      "short": "储藏室",
      "objects": {
        "/d/moon/obj/daoyaochu": 1,
        "/d/moon/obj/bigaxe": 2,
        "/d/obj/weapon/whip/wuchou": 2,
        "/d/moon/obj/snow_sword": 2
      },
      "exits": {
        "northwest": "/d/moon/courtyard.c",
        "south": "/d/moon/wulang.c"
      }
    },
    "/d/moon/kunlun": {
      "type": "ROOM",
      "short": "昆仑山区",
      "exits": {
        "north": "/d/xueshan/xueshan1",
        "southeast": "/d/moon/xiaolu1",
        "west": "/d/moon/yunu1"
      }
    },
    "/d/moon/lotuspond": {
      "type": "ROOM",
      "short": "湖边",
      "objects": {
        "/d/moon/npc/chimeng": 1
      },
      "exits": {
        "north": "/d/moon/rain"
      }
    },
    "/d/moon/neartop": {
      "type": "ROOM",
      "short": "玉女峰",
      "objects": {
        "/d/moon/obj/xuelian": 2
      },
      "exits": {
        "northup": "/d/moon/ontop2.c",
        "eastdown": "/d/moon/yunu5"
      }
    },
    "/d/moon/nroom": {
      "type": "ROOM",
      "short": "议事厅",
      "objects": {
        "/d/moon/npc/magu.c": 1
      },
      "exits": {
        "south": "/d/moon/xiaoyuan"
      }
    },
    "/d/moon/ontop": {
      "type": "ROOM",
      "short": "月门",
      "objects": {
        "/d/moon/obj/guishuzhi": 1,
        "/d/moon/npc/girl": 1
      },
      "exits": {
        "enter": "/d/moon/road1",
        "down": "/d/moon/tree2"
      }
    },
    "/d/moon/ontop2": {
      "type": "ROOM",
      "short": "玉女峰顶",
      "objects": {
        "/d/moon/obj/guishuzhi": 2,
        "/d/moon/npc/wugang": 1
      },
      "exits": {
        "east": "/d/moon/yltw",
        "west": "/d/moon/fabao-road1",
        "north": "/d/moon/xiaoyuan",
        "southdown": "/d/moon/neartop"
      }
    },
    "/d/moon/rain": {
      "type": "ROOM",
      "short": "听雨楼",
      "exits": {
        "east": "/d/moon/road3",
        "south": "/d/moon/lotuspond",
        "up": "/d/moon/bedroom"
      }
    },
    "/d/moon/road1": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "out": "/d/moon/ontop.c",
        "north": "/d/moon/road2"
      }
    },
    "/d/moon/road2": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "north": "/d/moon/road3",
        "south": "/d/moon/road1.c"
      }
    },
    "/d/moon/road3": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "east": "/d/moon/snow.c",
        "north": "/d/moon/ghg_zhengdian.c",
        "south": "/d/moon/road2.c",
        "west": "/d/moon/rain.c"
      }
    },
    "/d/moon/snow": {
      "type": "ROOM",
      "short": "噙芳阁",
      "objects": {
        "/d/obj/flower/juhua.c": 1
      },
      "exits": {
        "west": "/d/moon/road3"
      }
    },
    "/d/moon/tree1": {
      "type": "ROOM",
      "short": "桂树叶间",
      "exits": {
        "up": "/d/moon/tree2",
        "down": "/d/moon/ontop2.c"
      },
      "objects": {
        "/d/obj/flower/guihua.c": 2
      }
    },
    "/d/moon/tree2": {
      "type": "ROOM",
      "short": "桂树叶间",
      "exits": {
        "up": "/d/moon/ontop.c",
        "down": "/d/moon/tree1.c"
      },
      "objects": {
        "/d/obj/flower/guihua.c": 2
      }
    },
    "/d/moon/wangmu_room": {
      "type": "ROOM",
      "short": "卧云轩",
      "objects": {
        "/d/moon/npc/xiwangmu.c": 1
      },
      "exits": {
        "east": "/d/moon/huilang1.c"
      }
    },
    "/d/moon/wroom": {
      "type": "ROOM",
      "short": "休息室",
      "exits": {
        "east": "/d/moon/xiaoyuan"
      }
    },
    "/d/moon/wulang": {
      "type": "ROOM",
      "short": "广寒宫舞廊",
      "objects": {
        "/d/moon/npc/fairy.c": 1,
        "/d/moon/npc/zhangmen.c": 1,
        "/d/moon/npc/fairy1.c": 1
      },
      "exits": {
        "east": "/d/moon/backyard.c",
        "north": "/d/moon/junkroom.c",
        "west": "/d/moon/ghg_zhengdian.c"
      }
    },
    "/d/moon/xiaolu1": {
      "type": "ROOM",
      "short": "崎岖小路",
      "exits": {
        "northwest": "/d/moon/kunlun",
        "southeast": "/d/moon/xiaolu2"
      }
    },
    "/d/moon/xiaolu2": {
      "type": "ROOM",
      "short": "崎岖小路",
      "objects": {
        "/d/ourhome/npc/dog": 1,
        "/d/lingtai/npc/youngwolf": 1
      },
      "exits": {
        "southeast": "/d/moon/xiaolu3",
        "northwest": "/d/moon/xiaolu1"
      }
    },
    "/d/moon/xiaolu3": {
      "type": "ROOM",
      "short": "崎岖小路",
      "exits": {
        "southwest": "/d/westway/jincheng",
        "northwest": "/d/moon/xiaolu2"
      }
    },
    "/d/moon/xiaoyuan": {
      "type": "ROOM",
      "short": "篱笆小院",
      "objects": {
        "/d/moon/obj/guihuageng": 1,
        "/d/moon/obj/jiudai": 1,
        "/d/moon/npc/yuenu": 1,
        "/d/moon/obj/xueli": 1
      },
      "exits": {
        "east": "/d/moon/eroom",
        "north": "/d/moon/nroom",
        "south": "/d/moon/ontop2",
        "west": "/d/moon/wroom"
      }
    },
    "/d/moon/ylt": {
      "type": "ROOM",
      "short": "杏林",
      "exits": {
        "out": "/d/moon/yltw"
      },
      "objects": {
        "/d/moon/npc/yuelao": 1
      }
    },
    "/d/moon/yltw": {
      "type": "ROOM",
      "short": "杏林外",
      "objects": {
        "/d/moon/obj/jiaozi": 1,
        "/d/moon/npc/jiaofu": 1,
        "/d/moon/npc/lgshou": 1,
        "/d/moon/npc/jftou": 1,
        "/d/moon/npc/snshou": 1
      },
      "exits": {
        "west": "/d/moon/ontop2",
        "enter": "/d/moon/ylt"
      }
    },
    "/d/moon/yunu1": {
      "type": "ROOM",
      "short": "玉女峰底",
      "exits": {
        "east": "/d/moon/kunlun",
        "westup": "/d/moon/yunu2"
      }
    },
    "/d/moon/yunu2": {
      "type": "ROOM",
      "short": "玉女峰",
      "exits": {
        "eastdown": "/d/moon/yunu1",
        "southup": "/d/moon/yunu3"
      }
    },
    "/d/moon/yunu3": {
      "type": "ROOM",
      "short": "玉女峰",
      "exits": {
        "northdown": "/d/moon/yunu2",
        "southup": "/d/moon/yunu4"
      }
    },
    "/d/moon/yunu4": {
      "type": "ROOM",
      "short": "玉女峰",
      "exits": {
        "northdown": "/d/moon/yunu3",
        "westup": "/d/moon/yunu5"
      }
    },
    "/d/moon/yunu5": {
      "type": "ROOM",
      "short": "玉女峰",
      "exits": {
        "westup": "/d/moon/neartop",
        "eastdown": "/d/moon/yunu4"
      }
    },
    "/d/nanhai/chanfang": {
      "type": "ROOM",
      "short": "禅房",
      "exits": {
        "north": "/d/nanhai/zoulang"
      },
      "objects": {
        "/d/nanhai/npc/zhangchan": 1
      }
    },
    "/d/nanhai/chaoyindong": {
      "type": "ROOM",
      "short": "潮音洞",
      "exits": {
        "out": "/d/nanhai/guangchang.c"
      },
      "objects": {
        "/d/nanhai/npc/shizhe": 1,
        "/d/nanhai/npc/guanyin": 1
      }
    },
    "/d/nanhai/chucangshi": {
      "type": "ROOM",
      "short": "储藏室",
      "exits": {
        "north": "/d/nanhai/zoulang2"
      },
      "objects": {
        "/d/nanhai/obj/shugan": 2
      }
    },
    "/d/nanhai/gate": {
      "type": "ROOM",
      "short": "山门",
      "objects": {
        "/d/nanhai/npc/zhike": 1
      },
      "exits": {
        "north": "/d/nanhai/xiaoyuan",
        "southdown": "/d/nanhai/shanglu"
      }
    },
    "/d/nanhai/guangchang": {
      "type": "ROOM",
      "short": "洞前广场",
      "objects": {
        "/d/nanhai/npc/huian": 1,
        "/d/nanhai/npc/zhangmen": 1
      },
      "exits": {
        "south": "/d/nanhai/xiaoyuan",
        "west": "/d/nanhai/zoulang",
        "east": "/d/nanhai/road1.c",
        "enter": "/d/nanhai/chaoyindong"
      }
    },
    "/d/nanhai/island": {
      "type": "ROOM",
      "short": "小岛",
      "exits": {
        "east": "/d/nanhai/tingjing"
      }
    },
    "/d/nanhai/pool": {
      "type": "ROOM",
      "short": "池塘边",
      "exits": {
        "south": "/d/nanhai/zhulin"
      },
      "objects": {
        "/d/qujing/wuzhuang/npc/ludongbin": 1
      }
    },
    "/d/nanhai/restroom": {
      "type": "ROOM",
      "short": "休息室",
      "exits": {
        "east": "/d/nanhai/xiaoyuan"
      }
    },
    "/d/nanhai/road1": {
      "type": "ROOM",
      "short": "小路",
      "objects": {
        "/d/nanhai/npc/xingzhe.c": 1
      },
      "exits": {
        "west": "/d/nanhai/guangchang",
        "northdown": "/d/nanhai/road2"
      }
    },
    "/d/nanhai/road2": {
      "type": "ROOM",
      "short": "小路",
      "objects": {
        "/d/nanhai/npc/bear-monster": 1
      },
      "exits": {
        "north": "/d/nanhai/road3",
        "southup": "/d/nanhai/road1"
      }
    },
    "/d/nanhai/road3": {
      "type": "ROOM",
      "short": "小路",
      "objects": {},
      "exits": {
        "north": "/d/nanhai/road4",
        "south": "/d/nanhai/road2"
      }
    },
    "/d/nanhai/road4": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "north": "/d/nanhai/zhulin0.c",
        "south": "/d/nanhai/road3"
      }
    },
    "/d/nanhai/shanglu": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "westdown": "/d/nanhai/shanglu2",
        "northup": "/d/nanhai/gate"
      }
    },
    "/d/nanhai/shanglu2": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "west": "/d/nanhai/tingjing",
        "eastup": "/d/nanhai/shanglu"
      }
    },
    "/d/nanhai/shuyuan": {
      "type": "ROOM",
      "short": "书院",
      "exits": {
        "east": "/d/nanhai/zoulang"
      },
      "objects": {
        "/d/obj/book/san.c": 1,
        "/d/obj/book/jingang": 1,
        "/d/nanhai/npc/shami": 1
      }
    },
    "/d/nanhai/tingjing": {
      "type": "ROOM",
      "short": "听经石",
      "exits": {
        "west": "/d/nanhai/island",
        "east": "/d/nanhai/shanglu2"
      },
      "objects": {}
    },
    "/d/nanhai/xiaoyuan": {
      "type": "ROOM",
      "short": "小院",
      "objects": {
        "/d/nanhai/npc/tidu": 1
      },
      "exits": {
        "north": "/d/nanhai/guangchang",
        "west": "/d/nanhai/restroom",
        "south": "/d/nanhai/gate",
        "east": "/d/nanhai/zoulang2"
      }
    },
    "/d/nanhai/zhaifang": {
      "type": "ROOM",
      "short": "斋房",
      "exits": {
        "west": "/d/nanhai/zoulang2"
      },
      "objects": {
        "/d/ourhome/obj/dhg": 1,
        "/d/ourhome/obj/hulu": 1,
        "/d/ourhome/obj/xbc": 1,
        "/d/ourhome/obj/xqc": 1
      }
    },
    "/d/nanhai/zhulin": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "north": "/d/nanhai/pool",
        "east": "/d/nanhai/zhulin24"
      }
    },
    "/d/nanhai/zhulin0": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin+sprintf(%d",
        "south": "/d/nanhai/road4",
        "east": "/d/nanhai/zhulin2"
      }
    },
    "/d/nanhai/zhulin1": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin+sprintf(%d",
        "south": "/d/nanhai/zhulin+sprintf(%d",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zhulin10": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "south": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin+sprintf(%d",
        "north": "/d/nanhai/zhulin12",
        "east": "/d/nanhai/zhulin8"
      }
    },
    "/d/nanhai/zhulin11": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin+sprintf(%d",
        "south": "/d/nanhai/zhulin+sprintf(%d",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zhulin12": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "south": "/d/nanhai/zhulin10",
        "west": "/d/nanhai/zhulin+sprintf(%d",
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "east": "/d/nanhai/zhulin14"
      }
    },
    "/d/nanhai/zhulin13": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin+sprintf(%d",
        "south": "/d/nanhai/zhulin+sprintf(%d",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zhulin14": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "south": "/d/nanhai/zhulin16",
        "west": "/d/nanhai/zhulin12",
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zhulin15": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin+sprintf(%d",
        "south": "/d/nanhai/zhulin+sprintf(%d",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zhulin16": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "south": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin18",
        "north": "/d/nanhai/zhulin14",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zhulin17": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin+sprintf(%d",
        "south": "/d/nanhai/zhulin+sprintf(%d",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zhulin18": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "south": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin+sprintf(%d",
        "north": "/d/nanhai/zhulin20",
        "east": "/d/nanhai/zhulin16"
      }
    },
    "/d/nanhai/zhulin19": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin+sprintf(%d",
        "south": "/d/nanhai/zhulin+sprintf(%d",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zhulin2": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "south": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin0",
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "east": "/d/nanhai/zhulin4"
      }
    },
    "/d/nanhai/zhulin20": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "south": "/d/nanhai/zhulin18",
        "west": "/d/nanhai/zhulin+sprintf(%d",
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "east": "/d/nanhai/zhulin22"
      }
    },
    "/d/nanhai/zhulin21": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin+sprintf(%d",
        "south": "/d/nanhai/zhulin+sprintf(%d",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zhulin22": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "south": "/d/nanhai/zhulin24",
        "west": "/d/nanhai/zhulin20",
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zhulin23": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin+sprintf(%d",
        "south": "/d/nanhai/zhulin+sprintf(%d",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zhulin24": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "south": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin",
        "north": "/d/nanhai/zhulin22",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zhulin3": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin+sprintf(%d",
        "south": "/d/nanhai/zhulin+sprintf(%d",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zhulin4": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "south": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin2",
        "north": "/d/nanhai/zhulin6",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zhulin5": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin+sprintf(%d",
        "south": "/d/nanhai/zhulin+sprintf(%d",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zhulin6": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "south": "/d/nanhai/zhulin4",
        "west": "/d/nanhai/zhulin+sprintf(%d",
        "north": "/d/nanhai/zhulin8",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zhulin7": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin+sprintf(%d",
        "south": "/d/nanhai/zhulin+sprintf(%d",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zhulin8": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "south": "/d/nanhai/zhulin6",
        "west": "/d/nanhai/zhulin10",
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zhulin9": {
      "type": "ROOM",
      "short": "紫竹林",
      "exits": {
        "north": "/d/nanhai/zhulin+sprintf(%d",
        "west": "/d/nanhai/zhulin+sprintf(%d",
        "south": "/d/nanhai/zhulin+sprintf(%d",
        "east": "/d/nanhai/zhulin+sprintf(%d"
      }
    },
    "/d/nanhai/zoulang": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "south": "/d/nanhai/chanfang",
        "west": "/d/nanhai/shuyuan",
        "east": "/d/nanhai/guangchang.c"
      },
      "objects": {
        "/d/nanhai/npc/honghaier": 1
      }
    },
    "/d/nanhai/zoulang2": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "west": "/d/nanhai/xiaoyuan",
        "south": "/d/nanhai/chucangshi",
        "east": "/d/nanhai/zhaifang"
      },
      "objects": {
        "/d/nanhai/npc/zhangchu": 1
      }
    },
    "/d/obj/clone/misc/roommaker": {
      "type": [
        "ITEM",
        "F_AUTOLOAD",
        "ROOM",
        "ROOM"
      ],
      "short": "空房间",
      "exits": {
        "dir": "file"
      }
    },
    "/d/obj/clone/misc/void": {
      "type": "ROOM",
      "short": "最後乐园",
      "exits": {
        "down": "/d/suburb/xkx/city/zuixianlou"
      }
    },
    "/d/obj/inherit/room/bank": {
      "type": "ROOM"
    },
    "/d/obj/inherit/room/hockshop": {
      "type": "ROOM"
    },
    "/d/obj/inherit/room/pigroom": {
      "type": [
        "F_CLEAN_UP",
        "ROOM"
      ]
    },
    "/d/ourhome/bldg": {
      "type": "ROOM",
      "short": "住宅区",
      "exits": {
        "north": "/d/ourhome/kedian3"
      },
      "objects": {
        "/d/ourhome/npc/driver": 1
      }
    },
    "/d/ourhome/honglou/april": {
      "type": "ROOM",
      "short": "四月谜会",
      "exits": {
        "east": "/d/ourhome/honglou/village"
      }
    },
    "/d/ourhome/honglou/bridge": {
      "type": "ROOM",
      "short": "沁芳闸",
      "exits": {
        "south": "/d/ourhome/honglou/main",
        "north": "/d/ourhome/honglou/yard3",
        "down": "/d/ourhome/honglou/cool"
      }
    },
    "/d/ourhome/honglou/bull": {
      "type": "ROOM",
      "short": "菩提明镜",
      "exits": {
        "frontyard": "/d/ourhome/honglou/yard3"
      }
    },
    "/d/ourhome/honglou/cave": {
      "type": "ROOM",
      "short": "蓼汀花溆",
      "exits": {
        "up": "/d/ourhome/honglou/none.c",
        "north": "/d/ourhome/honglou/yard2",
        "south": "/d/ourhome/honglou/village"
      },
      "objects": {
        "/d/obj/misc/seed": 1
      }
    },
    "/d/ourhome/honglou/cglaem": {
      "type": "ROOM",
      "short": "蝉房",
      "exits": {
        "west": "/d/ourhome/honglou/path1"
      }
    },
    "/d/ourhome/honglou/cool": {
      "type": "ROOM",
      "short": "云水深处",
      "exits": {
        "up": "/d/ourhome/honglou/bridge"
      }
    },
    "/d/ourhome/honglou/cottage": {
      "type": "ROOM",
      "short": "天然",
      "exits": {
        "out": "/d/ourhome/honglou/village"
      }
    },
    "/d/ourhome/honglou/dream": {
      "type": "ROOM",
      "short": "醉梦亭",
      "exits": {
        "east": "/d/ourhome/honglou/path1"
      }
    },
    "/d/ourhome/honglou/fairyplace": {
      "type": "ROOM",
      "short": "太虚幻境",
      "exits": {
        "down": "/d/ourhome/honglou/main"
      },
      "objects": {
        "/d/ourhome/honglou/npc/fairygirl": 1
      }
    },
    "/d/ourhome/honglou/fisher": {
      "type": "ROOM",
      "short": "钓鱼台",
      "exits": {
        "west": "/d/ourhome/honglou/village"
      }
    },
    "/d/ourhome/honglou/kat": {
      "type": "ROOM",
      "short": "荡悠悠三更梦",
      "exits": {
        "up": "/d/ourhome/honglou/pavilion"
      }
    },
    "/d/ourhome/honglou/main": {
      "type": "ROOM",
      "short": "大观楼",
      "exits": {
        "up": "/d/ourhome/honglou/fairyplace",
        "west": "/d/ourhome/honglou/mainwest",
        "north": "/d/ourhome/honglou/bridge",
        "south": "/d/ourhome/honglou/yard2",
        "east": "/d/ourhome/honglou/maineast"
      },
      "objects": {
        "/d/ourhome/honglou/npc/leng": 1
      }
    },
    "/d/ourhome/honglou/maineast": {
      "type": "ROOM",
      "short": "缀锦阁",
      "exits": {
        "west": "/d/ourhome/honglou/main"
      }
    },
    "/d/ourhome/honglou/mainwest": {
      "type": "ROOM",
      "short": "含芳阁",
      "exits": {
        "east": "/d/ourhome/honglou/main"
      }
    },
    "/d/ourhome/honglou/miner": {
      "type": "ROOM",
      "short": "蓝桥",
      "exits": {
        "east": "/d/ourhome/honglou/yard2"
      }
    },
    "/d/ourhome/honglou/none": {
      "type": "ROOM",
      "short": "画楼",
      "exits": {
        "down": "/d/ourhome/honglou/cave"
      }
    },
    "/d/ourhome/honglou/path1": {
      "type": "ROOM",
      "short": "曲径通幽",
      "exits": {
        "north": "/d/ourhome/honglou/pavilion",
        "out": "/d/ourhome/honglou/workroom",
        "east": "/d/ourhome/honglou/cglaem",
        "west": "/d/ourhome/honglou/dream"
      }
    },
    "/d/ourhome/honglou/pavilion": {
      "type": "ROOM",
      "short": "沁芳亭",
      "exits": {
        "west": "/d/ourhome/honglou/wux",
        "south": "/d/ourhome/honglou/path1",
        "north": "/d/ourhome/honglou/yard1",
        "down": "/d/ourhome/honglou/kat"
      }
    },
    "/d/ourhome/honglou/village": {
      "type": "ROOM",
      "short": "稻香村",
      "exits": {
        "west": "/d/ourhome/honglou/april",
        "south": "/d/ourhome/honglou/yard1",
        "north": "/d/ourhome/honglou/cave",
        "east": "/d/ourhome/honglou/fisher",
        "enter": "/d/ourhome/honglou/cottage"
      }
    },
    "/d/ourhome/honglou/workroom": {
      "type": "ROOM",
      "short": "红楼旧址",
      "exits": {
        "enter": "/d/ourhome/honglou/path1"
      }
    },
    "/d/ourhome/honglou/wow": {
      "type": "ROOM",
      "short": "空房间",
      "exits": {
        "west": "/d/ourhome/honglou/yard1"
      }
    },
    "/d/ourhome/honglou/wux": {
      "type": "ROOM",
      "short": "星亭",
      "exits": {
        "east": "/d/ourhome/honglou/pavilion"
      }
    },
    "/d/ourhome/honglou/yard1": {
      "type": "ROOM",
      "short": "潇湘馆",
      "exits": {
        "south": "/d/ourhome/honglou/pavilion",
        "north": "/d/ourhome/honglou/village",
        "east": "/d/ourhome/honglou/wow"
      }
    },
    "/d/ourhome/honglou/yard2": {
      "type": "ROOM",
      "short": "蘅芜院",
      "exits": {
        "west": "/d/ourhome/honglou/miner.c",
        "south": "/d/ourhome/honglou/cave",
        "north": "/d/ourhome/honglou/main"
      },
      "objects": {
        "/d/ourhome/honglou/npc/poemgirl": 1
      }
    },
    "/d/ourhome/honglou/yard3": {
      "type": "ROOM",
      "short": "怡红院",
      "exits": {
        "south": "/d/ourhome/honglou/bridge",
        "backyard": "/d/ourhome/honglou/bull"
      }
    },
    "/d/ourhome/kedian": {
      "type": "ROOM",
      "short": "荒郊小店",
      "objects": {
        "/d/ourhome/npc/xiaoer": 1
      },
      "exits": {
        "south": "/d/ourhome/kedian2"
      }
    },
    "/d/ourhome/kedian2": {
      "type": "ROOM",
      "short": "荒郊野外",
      "exits": {
        "north": "/d/ourhome/kedian",
        "south": "/d/ourhome/kedian3"
      }
    },
    "/d/ourhome/kedian3": {
      "type": "ROOM",
      "short": "荒郊野外",
      "exits": {
        "north": "/d/ourhome/kedian2",
        "south": "/d/ourhome/kedian4"
      }
    },
    "/d/ourhome/kedian4": {
      "type": "ROOM",
      "short": "路的尽头",
      "exits": {
        "north": "/d/ourhome/kedian3",
        "south": "/d/ourhome/xiaoting"
      }
    },
    "/d/ourhome/postoffice": {
      "type": "ROOM",
      "short": "害虫电信局",
      "exits": {
        "kedian": "/d/ourhome/kedian"
      },
      "objects": {
        "/d/ourhome/npc/28star": 1,
        "/d/ourhome/npc/firefly": 1
      }
    },
    "/d/ourhome/void": {
      "type": "ROOM",
      "short": "最后乐园"
    },
    "/d/ourhome/xiaoting": {
      "type": "ROOM",
      "short": "聚见亭",
      "exits": {
        "north": "/d/ourhome/kedian4"
      },
      "objects": {
        "/d/ourhome/obj/table": 1,
        "/d/ourhome/obj/seat": 2
      }
    },
    "/d/pantao/fenga": {
      "type": "ROOM",
      "short": "彩凤厅",
      "exits": {
        "north": "/d/pantao/pan3b",
        "east": "/d/pantao/fengb"
      },
      "objects": {
        "/d/pantao/npc/female": 1
      }
    },
    "/d/pantao/fengb": {
      "type": "ROOM",
      "short": "封神台",
      "exits": {
        "north": "/d/pantao/palace7",
        "west": "/d/pantao/fenga",
        "east": "/d/pantao/fengc"
      },
      "objects": {
        "/d/pantao/npc/male": 1,
        "/d/pantao/npc/female": 1
      }
    },
    "/d/pantao/fengc": {
      "type": "ROOM",
      "short": "金龙厅",
      "exits": {
        "north": "/d/pantao/pan3e",
        "west": "/d/pantao/fengb"
      },
      "objects": {
        "/d/pantao/npc/male": 1
      }
    },
    "/d/pantao/ge1": {
      "type": "ROOM",
      "short": "守烟阁",
      "exits": {
        "south": "/d/pantao/ge2",
        "southwest": "/d/pantao/pan1f"
      },
      "objects": {
        "/d/pantao/npc/lishi1": 1
      }
    },
    "/d/pantao/ge2": {
      "type": "ROOM",
      "short": "定烟阁",
      "exits": {
        "north": "/d/pantao/ge1",
        "south": "/d/pantao/ge3",
        "west": "/d/pantao/pan1f"
      },
      "objects": {
        "/d/pantao/npc/lishi2": 1
      }
    },
    "/d/pantao/ge3": {
      "type": "ROOM",
      "short": "寄烟阁",
      "exits": {
        "north": "/d/pantao/ge2",
        "south": "/d/pantao/ge4",
        "northwest": "/d/pantao/pan1f",
        "southwest": "/d/pantao/pan2f"
      },
      "objects": {
        "/d/pantao/npc/lishi3": 1
      }
    },
    "/d/pantao/ge4": {
      "type": "ROOM",
      "short": "寒烟阁",
      "exits": {
        "north": "/d/pantao/ge3",
        "south": "/d/pantao/ge5",
        "west": "/d/pantao/pan2f"
      },
      "objects": {
        "/d/pantao/npc/lishi4": 1
      }
    },
    "/d/pantao/ge5": {
      "type": "ROOM",
      "short": "宣烟阁",
      "exits": {
        "north": "/d/pantao/ge4",
        "south": "/d/pantao/ge6",
        "northwest": "/d/pantao/pan2f",
        "southwest": "/d/pantao/pan3f"
      },
      "objects": {
        "/d/pantao/npc/lishi5": 1
      }
    },
    "/d/pantao/ge6": {
      "type": "ROOM",
      "short": "宁烟阁",
      "exits": {
        "north": "/d/pantao/ge5",
        "south": "/d/pantao/ge7",
        "west": "/d/pantao/pan3f"
      },
      "objects": {
        "/d/pantao/npc/lishi6": 1
      }
    },
    "/d/pantao/ge7": {
      "type": "ROOM",
      "short": "安烟阁",
      "exits": {
        "north": "/d/pantao/ge6",
        "northwest": "/d/pantao/pan3f"
      },
      "objects": {
        "/d/pantao/npc/lishi7": 1
      }
    },
    "/d/pantao/palace1": {
      "type": "ROOM",
      "short": "天乾殿",
      "exits": {
        "north": "/d/pantao/yaob",
        "south": "/d/pantao/palace2",
        "southwest": "/d/pantao/pan1c",
        "southeast": "/d/pantao/pan1d"
      },
      "objects": {
        "/d/pantao/npc/tian1": 1
      }
    },
    "/d/pantao/palace2": {
      "type": "ROOM",
      "short": "地坤殿",
      "exits": {
        "north": "/d/pantao/palace1",
        "south": "/d/pantao/palace3",
        "west": "/d/pantao/pan1c",
        "east": "/d/pantao/pan1d"
      },
      "objects": {
        "/d/pantao/npc/tian2": 1
      }
    },
    "/d/pantao/palace3": {
      "type": "ROOM",
      "short": "云象殿",
      "exits": {
        "north": "/d/pantao/palace2",
        "south": "/d/pantao/palace4",
        "northwest": "/d/pantao/pan1c",
        "northeast": "/d/pantao/pan1d"
      },
      "objects": {
        "/d/pantao/npc/tian3": 1
      }
    },
    "/d/pantao/palace4": {
      "type": "ROOM",
      "short": "旦寰殿",
      "exits": {
        "north": "/d/pantao/palace3",
        "south": "/d/pantao/palace5",
        "west": "/d/pantao/pan2c",
        "east": "/d/pantao/pan2d"
      },
      "objects": {
        "/d/pantao/npc/tian4": 1
      }
    },
    "/d/pantao/palace5": {
      "type": "ROOM",
      "short": "夕寅殿",
      "exits": {
        "north": "/d/pantao/palace4",
        "south": "/d/pantao/palace6",
        "southwest": "/d/pantao/pan3c",
        "southeast": "/d/pantao/pan3d"
      },
      "objects": {
        "/d/pantao/npc/tian5": 1
      }
    },
    "/d/pantao/palace6": {
      "type": "ROOM",
      "short": "星冕殿",
      "exits": {
        "north": "/d/pantao/palace5",
        "south": "/d/pantao/palace7",
        "west": "/d/pantao/pan3c",
        "east": "/d/pantao/pan3d"
      },
      "objects": {
        "/d/pantao/npc/tian6": 1
      }
    },
    "/d/pantao/palace7": {
      "type": "ROOM",
      "short": "辰亘殿",
      "exits": {
        "north": "/d/pantao/palace6",
        "south": "/d/pantao/fengb",
        "northwest": "/d/pantao/pan3c",
        "northeast": "/d/pantao/pan3d"
      },
      "objects": {
        "/d/pantao/npc/tian7": 1
      }
    },
    "/d/pantao/pan1a": {
      "type": "ROOM",
      "short": "蟠桃园",
      "exits": {
        "northwest": "/d/pantao/ting1",
        "west": "/d/pantao/ting2",
        "southwest": "/d/pantao/ting3",
        "east": "/d/pantao/pan1b"
      }
    },
    "/d/pantao/pan1b": {
      "type": "ROOM",
      "short": "九千年蟠桃园",
      "exits": {
        "west": "/d/pantao/pan1a",
        "east": "/d/pantao/pan1c",
        "north": "/d/pantao/yaoa",
        "south": "/d/pantao/pan2b"
      }
    },
    "/d/pantao/pan1c": {
      "type": "ROOM",
      "short": "蟠桃园",
      "exits": {
        "west": "/d/pantao/pan1b",
        "northeast": "/d/pantao/palace1",
        "east": "/d/pantao/palace2",
        "southeast": "/d/pantao/palace3"
      }
    },
    "/d/pantao/pan1d": {
      "type": "ROOM",
      "short": "蟠桃园",
      "exits": {
        "east": "/d/pantao/pan1e",
        "northwest": "/d/pantao/palace1",
        "west": "/d/pantao/palace2",
        "southwest": "/d/pantao/palace3"
      }
    },
    "/d/pantao/pan1e": {
      "type": "ROOM",
      "short": "九千年蟠桃园",
      "exits": {
        "east": "/d/pantao/pan1f",
        "west": "/d/pantao/pan1d",
        "north": "/d/pantao/yaoc",
        "south": "/d/pantao/pan2e"
      }
    },
    "/d/pantao/pan1f": {
      "type": "ROOM",
      "short": "蟠桃园",
      "exits": {
        "northeast": "/d/pantao/ge1",
        "east": "/d/pantao/ge2",
        "southeast": "/d/pantao/ge3",
        "west": "/d/pantao/pan1e"
      }
    },
    "/d/pantao/pan2a": {
      "type": "ROOM",
      "short": "蟠桃园",
      "exits": {
        "northwest": "/d/pantao/ting3",
        "west": "/d/pantao/ting4",
        "southwest": "/d/pantao/ting5",
        "east": "/d/pantao/pan2b"
      }
    },
    "/d/pantao/pan2b": {
      "type": "ROOM",
      "short": "六千年蟠桃园",
      "exits": {
        "west": "/d/pantao/pan2a",
        "east": "/d/pantao/pan2c",
        "north": "/d/pantao/pan1b",
        "south": "/d/pantao/pan3b"
      }
    },
    "/d/pantao/pan2c": {
      "type": "ROOM",
      "short": "蟠桃园",
      "exits": {
        "west": "/d/pantao/pan2b",
        "east": "/d/pantao/palace4"
      }
    },
    "/d/pantao/pan2d": {
      "type": "ROOM",
      "short": "蟠桃园",
      "exits": {
        "east": "/d/pantao/pan2e",
        "west": "/d/pantao/palace4"
      }
    },
    "/d/pantao/pan2e": {
      "type": "ROOM",
      "short": "六千年蟠桃园",
      "exits": {
        "east": "/d/pantao/pan2f",
        "west": "/d/pantao/pan2d",
        "north": "/d/pantao/pan1e",
        "south": "/d/pantao/pan3e"
      }
    },
    "/d/pantao/pan2f": {
      "type": "ROOM",
      "short": "蟠桃园",
      "exits": {
        "northeast": "/d/pantao/ge3",
        "east": "/d/pantao/ge4",
        "southeast": "/d/pantao/ge5",
        "west": "/d/pantao/pan2e"
      }
    },
    "/d/pantao/pan3a": {
      "type": "ROOM",
      "short": "蟠桃园",
      "exits": {
        "northwest": "/d/pantao/ting5",
        "west": "/d/pantao/ting6",
        "southwest": "/d/pantao/ting7",
        "east": "/d/pantao/pan3b"
      }
    },
    "/d/pantao/pan3b": {
      "type": "ROOM",
      "short": "三千年蟠桃园",
      "exits": {
        "west": "/d/pantao/pan3a",
        "east": "/d/pantao/pan3c",
        "north": "/d/pantao/pan2b",
        "south": "/d/pantao/fenga"
      }
    },
    "/d/pantao/pan3c": {
      "type": "ROOM",
      "short": "蟠桃园",
      "exits": {
        "west": "/d/pantao/pan3b",
        "northeast": "/d/pantao/palace5",
        "east": "/d/pantao/palace6",
        "southeast": "/d/pantao/palace7"
      }
    },
    "/d/pantao/pan3d": {
      "type": "ROOM",
      "short": "蟠桃园",
      "exits": {
        "east": "/d/pantao/pan3e",
        "northwest": "/d/pantao/palace5",
        "west": "/d/pantao/palace6",
        "southwest": "/d/pantao/palace7"
      }
    },
    "/d/pantao/pan3e": {
      "type": "ROOM",
      "short": "三千年蟠桃园",
      "exits": {
        "east": "/d/pantao/pan3f",
        "west": "/d/pantao/pan3d",
        "north": "/d/pantao/pan2e",
        "south": "/d/pantao/fengc"
      }
    },
    "/d/pantao/pan3f": {
      "type": "ROOM",
      "short": "蟠桃园",
      "exits": {
        "northeast": "/d/pantao/ge5",
        "east": "/d/pantao/ge6",
        "southeast": "/d/pantao/ge7",
        "west": "/d/pantao/pan3e"
      }
    },
    "/d/pantao/ting1": {
      "type": "ROOM",
      "short": "黄霞亭",
      "exits": {
        "south": "/d/pantao/ting2",
        "southeast": "/d/pantao/pan1a"
      },
      "objects": {
        "/d/pantao/npc/xiannu1": 1
      }
    },
    "/d/pantao/ting2": {
      "type": "ROOM",
      "short": "紫霞亭",
      "exits": {
        "north": "/d/pantao/ting1",
        "south": "/d/pantao/ting3",
        "east": "/d/pantao/pan1a"
      },
      "objects": {
        "/d/pantao/npc/xiannu2": 1
      }
    },
    "/d/pantao/ting3": {
      "type": "ROOM",
      "short": "绿霞亭",
      "exits": {
        "north": "/d/pantao/ting2",
        "south": "/d/pantao/ting4",
        "northeast": "/d/pantao/pan1a",
        "southeast": "/d/pantao/pan2a"
      },
      "objects": {
        "/d/pantao/npc/xiannu3": 1
      }
    },
    "/d/pantao/ting4": {
      "type": "ROOM",
      "short": "红霞亭",
      "exits": {
        "north": "/d/pantao/ting3",
        "south": "/d/pantao/ting5",
        "east": "/d/pantao/pan2a"
      },
      "objects": {
        "/d/pantao/npc/xiannu4": 1
      }
    },
    "/d/pantao/ting5": {
      "type": "ROOM",
      "short": "青霞亭",
      "exits": {
        "north": "/d/pantao/ting4",
        "south": "/d/pantao/ting6",
        "northeast": "/d/pantao/pan2a",
        "southeast": "/d/pantao/pan3a"
      },
      "objects": {
        "/d/pantao/npc/xiannu5": 1
      }
    },
    "/d/pantao/ting6": {
      "type": "ROOM",
      "short": "皂霞亭",
      "exits": {
        "north": "/d/pantao/ting5",
        "south": "/d/pantao/ting7",
        "east": "/d/pantao/pan3a"
      },
      "objects": {
        "/d/pantao/npc/xiannu6": 1
      }
    },
    "/d/pantao/ting7": {
      "type": "ROOM",
      "short": "素霞亭",
      "exits": {
        "north": "/d/pantao/ting6",
        "northeast": "/d/pantao/pan3a"
      },
      "objects": {
        "/d/pantao/npc/xiannu7": 1
      }
    },
    "/d/pantao/yaoa": {
      "type": "ROOM",
      "short": "瑶池西廊",
      "exits": {
        "east": "/d/pantao/yaob",
        "south": "/d/pantao/pan1b"
      }
    },
    "/d/pantao/yaob": {
      "type": "ROOM",
      "short": "瑶池",
      "exits": {
        "south": "/d/pantao/palace1",
        "west": "/d/pantao/yaoa",
        "east": "/d/pantao/yaoc"
      }
    },
    "/d/pantao/yaoc": {
      "type": "ROOM",
      "short": "瑶池东廊",
      "exits": {
        "west": "/d/pantao/yaob",
        "south": "/d/pantao/pan1e"
      }
    },
    "/d/penglai/baiyun": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "out": "/d/penglai/undertree"
      }
    },
    "/d/penglai/baiyun0": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "north": "/d/penglai/baiyun5",
        "northeast": "/d/penglai/baiyun1",
        "northwest": "/d/penglai/baiyun+sprintf(%d",
        "out": "/d/penglai/undertree"
      }
    },
    "/d/penglai/baiyun1": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "north": "/d/penglai/baiyun+sprintf(%d",
        "northeast": "/d/penglai/baiyun2",
        "northwest": "/d/penglai/baiyun+sprintf(%d"
      }
    },
    "/d/penglai/baiyun10": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "north": "/d/penglai/baiyun15",
        "northeast": "/d/penglai/baiyun+sprintf(%d",
        "northwest": "/d/penglai/baiyun11"
      }
    },
    "/d/penglai/baiyun11": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "north": "/d/penglai/baiyun+sprintf(%d",
        "northeast": "/d/penglai/baiyun+sprintf(%d",
        "northwest": "/d/penglai/baiyun12"
      }
    },
    "/d/penglai/baiyun12": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "north": "/d/penglai/baiyun13",
        "northeast": "/d/penglai/baiyun+sprintf(%d",
        "northwest": "/d/penglai/baiyun+sprintf(%d"
      }
    },
    "/d/penglai/baiyun13": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "north": "/d/penglai/baiyun14",
        "northeast": "/d/penglai/baiyun+sprintf(%d",
        "northwest": "/d/penglai/baiyun+sprintf(%d"
      }
    },
    "/d/penglai/baiyun14": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "northeast": "/d/penglai/baiyun+sprintf(%d",
        "north": "/d/penglai/baiyun15",
        "northwest": "/d/penglai/baiyun+sprintf(%d"
      }
    },
    "/d/penglai/baiyun15": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "north": "/d/penglai/baiyun0",
        "northeast": "/d/penglai/baiyun16",
        "northwest": "/d/penglai/baiyun+sprintf(%d"
      }
    },
    "/d/penglai/baiyun16": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "north": "/d/penglai/baiyun+sprintf(%d",
        "northeast": "/d/penglai/baiyun17",
        "northwest": "/d/penglai/baiyun+sprintf(%d"
      }
    },
    "/d/penglai/baiyun17": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "north": "/d/penglai/baiyun+sprintf(%d",
        "northeast": "/d/penglai/baiyun+sprintf(%d",
        "northwest": "/d/penglai/baiyun18"
      }
    },
    "/d/penglai/baiyun18": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "north": "/d/penglai/baiyun19",
        "northeast": "/d/penglai/baiyun+sprintf(%d",
        "northwest": "/d/penglai/baiyun+sprintf(%d"
      }
    },
    "/d/penglai/baiyun19": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "north": "/d/penglai/road1",
        "northeast": "/d/penglai/baiyun+sprintf(%d",
        "northwest": "/d/penglai/baiyun+sprintf(%d"
      }
    },
    "/d/penglai/baiyun2": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "northeast": "/d/penglai/baiyun3",
        "north": "/d/penglai/baiyun+sprintf(%d",
        "northwest": "/d/penglai/baiyun+sprintf(%d"
      }
    },
    "/d/penglai/baiyun3": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "north": "/d/penglai/baiyun+sprintf(%d",
        "northeast": "/d/penglai/baiyun4",
        "northwest": "/d/penglai/baiyun+sprintf(%d"
      }
    },
    "/d/penglai/baiyun4": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "north": "/d/penglai/baiyun+sprintf(%d",
        "northeast": "/d/penglai/baiyun5",
        "northwest": "/d/penglai/baiyun+sprintf(%d"
      }
    },
    "/d/penglai/baiyun5": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "north": "/d/penglai/baiyun10",
        "northeast": "/d/penglai/baiyun+sprintf(%d",
        "northwest": "/d/penglai/baiyun6"
      }
    },
    "/d/penglai/baiyun6": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "north": "/d/penglai/baiyun+sprintf(%d",
        "northeast": "/d/penglai/baiyun+sprintf(%d",
        "northwest": "/d/penglai/baiyun7"
      }
    },
    "/d/penglai/baiyun7": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "north": "/d/penglai/baiyun+sprintf(%d",
        "northeast": "/d/penglai/baiyun+sprintf(%d",
        "northwest": "/d/penglai/baiyun8"
      }
    },
    "/d/penglai/baiyun8": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "northeast": "/d/penglai/baiyun+sprintf(%d",
        "north": "/d/penglai/baiyun+sprintf(%d",
        "northwest": "/d/penglai/baiyun9"
      }
    },
    "/d/penglai/baiyun9": {
      "type": "ROOM",
      "short": "白云洞",
      "exits": {
        "north": "/d/penglai/baiyun+sprintf(%d",
        "northeast": "/d/penglai/baiyun+sprintf(%d",
        "northwest": "/d/penglai/baiyun10"
      }
    },
    "/d/penglai/penglai": {
      "type": "ROOM",
      "short": "蓬莱仙岛",
      "exits": {
        "northup": "/d/penglai/undertree"
      }
    },
    "/d/penglai/road1": {
      "type": "ROOM",
      "short": "山后小路",
      "exits": {
        "south": "/d/penglai/baiyun19",
        "north": "/d/penglai/yaxia"
      },
      "objects": {
        "/d/penglai/npc/baiyuan": 1
      }
    },
    "/d/penglai/undertree": {
      "type": "ROOM",
      "short": "白云洞外，松阴之下",
      "exits": {
        "enter": "/d/penglai/baiyun0",
        "southdown": "/d/penglai/penglai"
      },
      "objects": {
        "/d/penglai/npc/shouxing": 1,
        "/d/penglai/npc/luxing": 1,
        "/d/penglai/npc/fuxing": 1
      }
    },
    "/d/penglai/yashang": {
      "type": "ROOM",
      "short": "青石崖",
      "exits": {}
    },
    "/d/penglai/yaxia": {
      "type": "ROOM",
      "short": "青石崖下",
      "exits": {
        "south": "/d/penglai/road1"
      }
    },
    "/d/penglai/yazhong": {
      "type": "ROOM",
      "short": "青石台",
      "exits": {}
    },
    "/d/qujing/baotou/dongwai": {
      "type": "ROOM",
      "short": "洞外",
      "exits": {
        "northwest": "/d/qujing/baotou/hukou"
      }
    },
    "/d/qujing/baotou/houdong": {
      "type": "ROOM",
      "short": "后洞",
      "exits": {
        "southwest": "/d/qujing/baotou/qiandong"
      },
      "objects": {
        "/d/qujing/baotou/npc/yao": 1
      }
    },
    "/d/qujing/baotou/hukou": {
      "type": "ROOM",
      "short": "虎口",
      "exits": {
        "north": "/d/qujing/baotou/qiandong",
        "southeast": "/d/qujing/baotou/dongwai"
      },
      "objects": {
        "/d/qujing/baotou/npc/yao": 3
      }
    },
    "/d/qujing/baotou/midong1": {
      "type": "ROOM",
      "short": "密洞",
      "exits": {
        "down": "/d/qujing/baotou/houdong"
      },
      "objects": {
        "/d/qujing/baotou/obj/dao": 1
      }
    },
    "/d/qujing/baotou/midong2": {
      "type": "ROOM",
      "short": "密洞",
      "exits": {
        "down": "/d/qujing/baotou/houdong"
      },
      "objects": {
        "/d/qujing/baotou/obj/bang": 1
      }
    },
    "/d/qujing/baotou/midong3": {
      "type": "ROOM",
      "short": "密洞",
      "exits": {
        "down": "/d/qujing/baotou/houdong"
      },
      "objects": {
        "/d/qujing/baotou/obj/pa": 1
      }
    },
    "/d/qujing/baotou/midong4": {
      "type": "ROOM",
      "short": "密洞",
      "exits": {
        "down": "/d/qujing/baotou/houdong"
      },
      "objects": {
        "/d/qujing/baotou/obj/zhang": 1
      }
    },
    "/d/qujing/baotou/midong5": {
      "type": "ROOM",
      "short": "密洞",
      "exits": {
        "down": "/d/qujing/baotou/houdong"
      }
    },
    "/d/qujing/baotou/qiandong": {
      "type": "ROOM",
      "short": "前洞",
      "exits": {
        "south": "/d/qujing/baotou/hukou",
        "northeast": "/d/qujing/baotou/houdong"
      },
      "objects": {
        "/d/qujing/baotou/npc/yao": 3,
        "/d/qujing/baotou/npc/yaowang": 1
      }
    },
    "/d/qujing/baotou/shanlu1": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "southdown": "/d/qujing/baotou/shanlu3"
      },
      "objects": {
        "/d/qujing/baotou/npc/dzgg": 1
      }
    },
    "/d/qujing/baotou/shanlu10": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northup": "/d/qujing/baotou/shanlu9",
        "southeast": "/d/qujing/yuhua/xiaolu2"
      }
    },
    "/d/qujing/baotou/shanlu2": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "southeast": "/d/qujing/baotou/shanlu4"
      },
      "objects": {
        "/d/qujing/baotou/npc/ggdz": 1
      }
    },
    "/d/qujing/baotou/shanlu3": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "southdown": "/d/qujing/baotou/shanlu6",
        "northup": "/d/qujing/baotou/shanlu1"
      }
    },
    "/d/qujing/baotou/shanlu4": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northwest": "/d/qujing/baotou/shanlu2",
        "eastdown": "/d/qujing/baotou/shanlu5"
      }
    },
    "/d/qujing/baotou/shanlu5": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "eastdown": "/d/qujing/baotou/shanlu6",
        "westup": "/d/qujing/baotou/shanlu4"
      }
    },
    "/d/qujing/baotou/shanlu6": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "westup": "/d/qujing/baotou/shanlu5",
        "northup": "/d/qujing/baotou/shanlu3",
        "southeast": "/d/qujing/baotou/shanlu7"
      }
    },
    "/d/qujing/baotou/shanlu7": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northwest": "/d/qujing/baotou/shanlu6",
        "southeast": "/d/qujing/baotou/shanlu8"
      }
    },
    "/d/qujing/baotou/shanlu8": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northwest": "/d/qujing/baotou/shanlu7",
        "southeast": "/d/qujing/baotou/shanlu9"
      }
    },
    "/d/qujing/baotou/shanlu9": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northwest": "/d/qujing/baotou/shanlu8",
        "southdown": "/d/qujing/baotou/shanlu10"
      }
    },
    "/d/qujing/baoxiang/bei1": {
      "type": "ROOM",
      "short": "北城门",
      "exits": {
        "northwest": "/d/qujing/baoxiang/yedu",
        "south": "/d/qujing/baoxiang/bei2"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/people": 2,
        "/d/qujing/baoxiang/npc/bing": 2,
        "/d/qujing/baoxiang/npc/shanyao": 1
      }
    },
    "/d/qujing/baoxiang/bei2": {
      "type": "ROOM",
      "short": "北街",
      "exits": {
        "north": "/d/qujing/baoxiang/bei1",
        "south": "/d/qujing/baoxiang/bei3"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/people": 2
      }
    },
    "/d/qujing/baoxiang/bei3": {
      "type": "ROOM",
      "short": "北街",
      "exits": {
        "north": "/d/qujing/baoxiang/bei2",
        "east": "/d/qujing/baoxiang/zuofang",
        "south": "/d/qujing/baoxiang/bei4"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/people": 2
      }
    },
    "/d/qujing/baoxiang/bei4": {
      "type": "ROOM",
      "short": "北街",
      "exits": {
        "north": "/d/qujing/baoxiang/bei3",
        "east": "/d/qujing/baoxiang/mazhan",
        "south": "/d/qujing/baoxiang/gongmen"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/people": 2
      }
    },
    "/d/qujing/baoxiang/chaoxing": {
      "type": "ROOM",
      "short": "潮星谷",
      "exits": {
        "west": "/d/qujing/baoxiang/luochi2"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/shanyao": 6
      }
    },
    "/d/qujing/baoxiang/dian1": {
      "type": "ROOM",
      "short": "太极殿",
      "exits": {
        "west": "/d/qujing/baoxiang/yujie1"
      }
    },
    "/d/qujing/baoxiang/dian2": {
      "type": "ROOM",
      "short": "华盖殿",
      "exits": {
        "west": "/d/qujing/baoxiang/yujie2"
      }
    },
    "/d/qujing/baoxiang/dian3": {
      "type": "ROOM",
      "short": "烧香殿",
      "exits": {
        "west": "/d/qujing/baoxiang/yujie3"
      }
    },
    "/d/qujing/baoxiang/dian4": {
      "type": "ROOM",
      "short": "观文殿",
      "exits": {
        "west": "/d/qujing/baoxiang/yujie4"
      }
    },
    "/d/qujing/baoxiang/dian5": {
      "type": "ROOM",
      "short": "宣政殿",
      "exits": {
        "west": "/d/qujing/baoxiang/yujie5"
      }
    },
    "/d/qujing/baoxiang/dian6": {
      "type": "ROOM",
      "short": "延英殿",
      "exits": {
        "west": "/d/qujing/baoxiang/yujie6"
      }
    },
    "/d/qujing/baoxiang/dong": {
      "type": "ROOM",
      "short": "波月洞",
      "exits": {
        "northwest": "/d/qujing/baoxiang/dongwai"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/shanyao": 6,
        "/d/qujing/baoxiang/npc/huangpao": 1,
        "/d/qujing/baoxiang/npc/baihua": 1
      }
    },
    "/d/qujing/baoxiang/dongwai": {
      "type": "ROOM",
      "short": "波月洞外",
      "exits": {
        "southeast": "/d/qujing/baoxiang/dong"
      }
    },
    "/d/qujing/baoxiang/gong1": {
      "type": "ROOM",
      "short": "大明宫",
      "exits": {
        "east": "/d/qujing/baoxiang/yujie1"
      }
    },
    "/d/qujing/baoxiang/gong2": {
      "type": "ROOM",
      "short": "昭阳宫",
      "exits": {
        "east": "/d/qujing/baoxiang/yujie2"
      }
    },
    "/d/qujing/baoxiang/gong3": {
      "type": "ROOM",
      "short": "长乐宫",
      "exits": {
        "east": "/d/qujing/baoxiang/yujie3"
      }
    },
    "/d/qujing/baoxiang/gong4": {
      "type": "ROOM",
      "short": "华清宫",
      "exits": {
        "east": "/d/qujing/baoxiang/yujie4"
      }
    },
    "/d/qujing/baoxiang/gong5": {
      "type": "ROOM",
      "short": "建章宫",
      "exits": {
        "east": "/d/qujing/baoxiang/yujie5"
      }
    },
    "/d/qujing/baoxiang/gong6": {
      "type": "ROOM",
      "short": "未央宫",
      "exits": {
        "east": "/d/qujing/baoxiang/yujie6"
      }
    },
    "/d/qujing/baoxiang/gongmen": {
      "type": "ROOM",
      "short": "王宫门",
      "exits": {
        "southwest": "/d/qujing/baoxiang/xi4",
        "north": "/d/qujing/baoxiang/bei4",
        "east": "/d/qujing/baoxiang/zhendong",
        "south": "/d/qujing/baoxiang/longfeng"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/bing": 2
      }
    },
    "/d/qujing/baoxiang/longfeng": {
      "type": "ROOM",
      "short": "龙凤阁",
      "exits": {
        "north": "/d/qujing/baoxiang/gongmen",
        "southup": "/d/qujing/baoxiang/yujie1"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/dashi": 1,
        "/d/qujing/baoxiang/npc/bing": 2
      }
    },
    "/d/qujing/baoxiang/luochi1": {
      "type": "ROOM",
      "short": "漯池",
      "exits": {
        "southwest": "/d/qujing/baoxiang/shan1",
        "east": "/d/qujing/baoxiang/luochi2"
      }
    },
    "/d/qujing/baoxiang/luochi2": {
      "type": "ROOM",
      "short": "漯池",
      "exits": {
        "west": "/d/qujing/baoxiang/luochi1",
        "east": "/d/qujing/baoxiang/chaoxing"
      }
    },
    "/d/qujing/baoxiang/mazhan": {
      "type": "ROOM",
      "short": "马栈",
      "exits": {
        "west": "/d/qujing/baoxiang/bei4"
      }
    },
    "/d/qujing/baoxiang/qiao1": {
      "type": "ROOM",
      "short": "云头桥",
      "exits": {
        "northeast": "/d/qujing/baoxiang/shanwan3",
        "south": "/d/qujing/baoxiang/qiao2"
      }
    },
    "/d/qujing/baoxiang/qiao2": {
      "type": "ROOM",
      "short": "云头桥",
      "exits": {
        "southeast": "/d/qujing/baoxiang/xi1",
        "north": "/d/qujing/baoxiang/qiao1"
      }
    },
    "/d/qujing/baoxiang/shan1": {
      "type": "ROOM",
      "short": "碗子山",
      "exits": {
        "southdown": "/d/qujing/baoxiang/yelu3",
        "northeast": "/d/qujing/baoxiang/luochi1"
      }
    },
    "/d/qujing/baoxiang/shan2": {
      "type": "ROOM",
      "short": "碗子山",
      "exits": {
        "southdown": "/d/qujing/baoxiang/shanwan2",
        "eastdown": "/d/qujing/baoxiang/shanwan1",
        "southeast": "/d/qujing/baoxiang/shan3"
      }
    },
    "/d/qujing/baoxiang/shan3": {
      "type": "ROOM",
      "short": "碗子山",
      "exits": {
        "northwest": "/d/qujing/baoxiang/shan2",
        "southwest": "/d/qujing/baoxiang/shan4",
        "southeast": "/d/qujing/baoxiang/shan5"
      }
    },
    "/d/qujing/baoxiang/shan4": {
      "type": "ROOM",
      "short": "碗子山",
      "exits": {
        "northdown": "/d/qujing/baoxiang/shanwan2",
        "northeast": "/d/qujing/baoxiang/shan3",
        "southeast": "/d/qujing/baoxiang/shan6"
      }
    },
    "/d/qujing/baoxiang/shan5": {
      "type": "ROOM",
      "short": "碗子山",
      "exits": {
        "northwest": "/d/qujing/baoxiang/shan3",
        "south": "/d/qujing/baoxiang/songlin"
      }
    },
    "/d/qujing/baoxiang/shan6": {
      "type": "ROOM",
      "short": "碗子山",
      "exits": {
        "northwest": "/d/qujing/baoxiang/shan4",
        "southdown": "/d/qujing/baoxiang/shanwan3"
      }
    },
    "/d/qujing/baoxiang/shana": {
      "type": "ROOM",
      "short": "碗子山",
      "exits": {
        "southwest": "/d/qujing/baoxiang/shan1",
        "east": "/d/qujing/baoxiang/luochi2"
      }
    },
    "/d/qujing/baoxiang/shanb": {
      "type": "ROOM",
      "short": "碗子山",
      "exits": {
        "west": "/d/qujing/baoxiang/luochi1",
        "east": "/d/qujing/baoxiang/chaoxing"
      }
    },
    "/d/qujing/baoxiang/shanc": {
      "type": "ROOM",
      "short": "碗子山",
      "exits": {
        "west": "/d/qujing/baoxiang/luochi2"
      }
    },
    "/d/qujing/baoxiang/shanwan1": {
      "type": "ROOM",
      "short": "山湾",
      "exits": {
        "westup": "/d/qujing/baoxiang/shan2",
        "east": "/d/qujing/baoxiang/yelu4"
      }
    },
    "/d/qujing/baoxiang/shanwan2": {
      "type": "ROOM",
      "short": "山湾",
      "exits": {
        "northwest": "/d/qujing/baoxiang/yelu3",
        "northup": "/d/qujing/baoxiang/shan2",
        "southup": "/d/qujing/baoxiang/shan4"
      }
    },
    "/d/qujing/baoxiang/shanwan3": {
      "type": "ROOM",
      "short": "山湾",
      "exits": {
        "northup": "/d/qujing/baoxiang/shan6",
        "southwest": "/d/qujing/baoxiang/qiao1"
      }
    },
    "/d/qujing/baoxiang/songlin": {
      "type": "ROOM",
      "short": "黑松林",
      "exits": {
        "north": "/d/qujing/baoxiang/shan5",
        "southeast": "/d/qujing/baoxiang/dongwai"
      }
    },
    "/d/qujing/baoxiang/tiandi": {
      "type": "ROOM",
      "short": "天地阁",
      "exits": {
        "northdown": "/d/qujing/baoxiang/yujie6"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/girl": 2,
        "/d/qujing/baoxiang/npc/king": 1
      }
    },
    "/d/qujing/baoxiang/west": {
      "type": "ROOM",
      "short": "乾元街"
    },
    "/d/qujing/baoxiang/xi1": {
      "type": "ROOM",
      "short": "西城门",
      "exits": {
        "northwest": "/d/qujing/baoxiang/qiao2",
        "east": "/d/qujing/baoxiang/xi2"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/people": 2,
        "/d/qujing/baoxiang/npc/bing": 2
      }
    },
    "/d/qujing/baoxiang/xi2": {
      "type": "ROOM",
      "short": "西街",
      "exits": {
        "west": "/d/qujing/baoxiang/xi1",
        "east": "/d/qujing/baoxiang/xi3",
        "south": "/d/qujing/baoxiang/yangrou"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/people": 2
      }
    },
    "/d/qujing/baoxiang/xi3": {
      "type": "ROOM",
      "short": "西街",
      "exits": {
        "west": "/d/qujing/baoxiang/xi2",
        "east": "/d/qujing/baoxiang/xi4"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/people": 2
      }
    },
    "/d/qujing/baoxiang/xi4": {
      "type": "ROOM",
      "short": "西街",
      "exits": {
        "west": "/d/qujing/baoxiang/xi3",
        "north": "/d/qujing/baoxiang/xiqi",
        "northeast": "/d/qujing/baoxiang/gongmen"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/people": 2
      }
    },
    "/d/qujing/baoxiang/xiqi": {
      "type": "ROOM",
      "short": "锡器铺",
      "exits": {
        "south": "/d/qujing/baoxiang/xi4"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/xijiang": 1
      }
    },
    "/d/qujing/baoxiang/yangrou": {
      "type": "ROOM",
      "short": "羊肉馆",
      "exits": {
        "north": "/d/qujing/baoxiang/xi2"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/laoban": 1
      }
    },
    "/d/qujing/baoxiang/yedu": {
      "type": "ROOM",
      "short": "野渡",
      "exits": {
        "northwest": "/d/qujing/baoxiang/yelu5",
        "southeast": "/d/qujing/baoxiang/bei1"
      }
    },
    "/d/qujing/baoxiang/yelu1": {
      "type": "ROOM",
      "short": "野路",
      "exits": {
        "southeast": "/d/qujing/baoxiang/yelu2",
        "southwest": "/d/qujing/pingding/shan11"
      }
    },
    "/d/qujing/baoxiang/yelu2": {
      "type": "ROOM",
      "short": "野路",
      "exits": {
        "northwest": "/d/qujing/baoxiang/yelu1",
        "southeast": "/d/qujing/baoxiang/yelu3"
      }
    },
    "/d/qujing/baoxiang/yelu3": {
      "type": "ROOM",
      "short": "野路",
      "exits": {
        "northwest": "/d/qujing/baoxiang/yelu2",
        "northup": "/d/qujing/baoxiang/shan1",
        "southeast": "/d/qujing/baoxiang/shanwan2"
      }
    },
    "/d/qujing/baoxiang/yelu4": {
      "type": "ROOM",
      "short": "野路",
      "exits": {
        "west": "/d/qujing/baoxiang/shanwan1",
        "east": "/d/qujing/baoxiang/yelu5"
      }
    },
    "/d/qujing/baoxiang/yelu5": {
      "type": "ROOM",
      "short": "野路",
      "exits": {
        "northeast": "/d/qujing/baoxiang/yelu6",
        "west": "/d/qujing/baoxiang/yelu4",
        "southeast": "/d/qujing/baoxiang/yedu"
      }
    },
    "/d/qujing/baoxiang/yelu6": {
      "type": "ROOM",
      "short": "野路",
      "exits": {
        "northeast": "/d/qujing/baoxiang/yelu7",
        "southwest": "/d/qujing/baoxiang/yelu5"
      }
    },
    "/d/qujing/baoxiang/yelu7": {
      "type": "ROOM",
      "short": "野路",
      "exits": {
        "northeast": "/d/qujing/baoxiang/yelu8",
        "southwest": "/d/qujing/baoxiang/yelu6"
      }
    },
    "/d/qujing/baoxiang/yelu8": {
      "type": "ROOM",
      "short": "野路",
      "exits": {
        "east": "/d/westway/jiayu",
        "southwest": "/d/qujing/baoxiang/yelu7"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/nuzi": 1
      }
    },
    "/d/qujing/baoxiang/yujie1": {
      "type": "ROOM",
      "short": "白玉阶",
      "exits": {
        "northdown": "/d/qujing/baoxiang/longfeng",
        "southup": "/d/qujing/baoxiang/yujie2",
        "west": "/d/qujing/baoxiang/gong1",
        "east": "/d/qujing/baoxiang/dian1"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/girl": 2
      }
    },
    "/d/qujing/baoxiang/yujie2": {
      "type": "ROOM",
      "short": "白玉阶",
      "exits": {
        "northdown": "/d/qujing/baoxiang/yujie1",
        "southup": "/d/qujing/baoxiang/yujie3",
        "west": "/d/qujing/baoxiang/gong2",
        "east": "/d/qujing/baoxiang/dian2"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/girl": 2
      }
    },
    "/d/qujing/baoxiang/yujie3": {
      "type": "ROOM",
      "short": "白玉阶",
      "exits": {
        "northdown": "/d/qujing/baoxiang/yujie2",
        "southup": "/d/qujing/baoxiang/yujie4",
        "west": "/d/qujing/baoxiang/gong3",
        "east": "/d/qujing/baoxiang/dian3"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/girl": 2
      }
    },
    "/d/qujing/baoxiang/yujie4": {
      "type": "ROOM",
      "short": "白玉阶",
      "exits": {
        "northdown": "/d/qujing/baoxiang/yujie3",
        "southup": "/d/qujing/baoxiang/yujie5",
        "west": "/d/qujing/baoxiang/gong4",
        "east": "/d/qujing/baoxiang/dian4"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/girl": 2
      }
    },
    "/d/qujing/baoxiang/yujie5": {
      "type": "ROOM",
      "short": "白玉阶",
      "exits": {
        "northdown": "/d/qujing/baoxiang/yujie4",
        "southup": "/d/qujing/baoxiang/yujie6",
        "west": "/d/qujing/baoxiang/gong5",
        "east": "/d/qujing/baoxiang/dian5"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/girl": 2
      }
    },
    "/d/qujing/baoxiang/yujie6": {
      "type": "ROOM",
      "short": "白玉阶",
      "exits": {
        "northdown": "/d/qujing/baoxiang/yujie5",
        "southup": "/d/qujing/baoxiang/tiandi",
        "west": "/d/qujing/baoxiang/gong6",
        "east": "/d/qujing/baoxiang/dian6"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/girl": 2
      }
    },
    "/d/qujing/baoxiang/zhendong": {
      "type": "ROOM",
      "short": "镇东场",
      "exits": {
        "west": "/d/qujing/baoxiang/gongmen"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/bing": 4
      }
    },
    "/d/qujing/baoxiang/zuofang": {
      "type": "ROOM",
      "short": "小作坊",
      "exits": {
        "west": "/d/qujing/baoxiang/bei3"
      },
      "objects": {
        "/d/qujing/baoxiang/npc/fangzhu": 1
      }
    },
    "/d/qujing/bibotan/furong": {
      "type": "ROOM",
      "short": "芙蓉亭",
      "objects": {
        "/d/qujing/bibotan/npc/table": 1
      },
      "exits": {
        "south": "/d/qujing/bibotan/hua_qian",
        "east": "/d/qujing/bibotan/hua_li",
        "north": "/d/qujing/bibotan/hua_kun",
        "west": "/d/qujing/bibotan/hua_kan"
      }
    },
    "/d/qujing/bibotan/gudu": {
      "type": "ROOM",
      "short": "古渡口",
      "exits": {
        "northeast": "/d/qujing/bibotan/xiaolu1",
        "west": "/d/qujing/bibotan/xiaolu3"
      }
    },
    "/d/qujing/bibotan/hanyu": {
      "type": "ROOM",
      "short": "寒玉堂",
      "objects": {
        "/d/sea/npc/gonge": 1
      },
      "exits": {
        "west": "/d/qujing/bibotan/shuijg"
      }
    },
    "/d/qujing/bibotan/hua_dui": {
      "type": "ROOM",
      "short": "后花园",
      "exits": {
        "northeast": "/d/qujing/bibotan/hua_li",
        "southwest": "/d/qujing/bibotan/hua_qian"
      }
    },
    "/d/qujing/bibotan/hua_gong": {
      "type": "ROOM",
      "short": "后花园",
      "exits": {
        "southeast": "/d/qujing/bibotan/hua_qian",
        "northwest": "/d/qujing/bibotan/hua_kan"
      }
    },
    "/d/qujing/bibotan/hua_kan": {
      "type": "ROOM",
      "short": "后花园",
      "exits": {
        "southeast": "/d/qujing/bibotan/hua_gong",
        "northeast": "/d/qujing/bibotan/hua_ken"
      }
    },
    "/d/qujing/bibotan/hua_ken": {
      "type": "ROOM",
      "short": "后花园",
      "exits": {
        "southwest": "/d/qujing/bibotan/hua_kan",
        "northeast": "/d/qujing/bibotan/hua_kun"
      }
    },
    "/d/qujing/bibotan/hua_kun": {
      "type": "ROOM",
      "short": "后花园",
      "exits": {
        "southwest": "/d/qujing/bibotan/hua_ken",
        "southeast": "/d/qujing/bibotan/hua_zhen"
      }
    },
    "/d/qujing/bibotan/hua_li": {
      "type": "ROOM",
      "short": "后花园",
      "exits": {
        "northwest": "/d/qujing/bibotan/hua_zhen",
        "southwest": "/d/qujing/bibotan/hua_dui"
      }
    },
    "/d/qujing/bibotan/hua_qian": {
      "type": "ROOM",
      "short": "后花园",
      "exits": {
        "south": "/d/qujing/bibotan/yuemen",
        "northeast": "/d/qujing/bibotan/hua_dui",
        "northwest": "/d/qujing/bibotan/hua_gong"
      }
    },
    "/d/qujing/bibotan/hua_zhen": {
      "type": "ROOM",
      "short": "后花园",
      "exits": {
        "northwest": "/d/qujing/bibotan/hua_kun",
        "southeast": "/d/qujing/bibotan/hua_li"
      }
    },
    "/d/qujing/bibotan/lengxiang": {
      "type": "ROOM",
      "short": "冷香殿",
      "objects": {
        "/d/sea/npc/gonge": 1
      },
      "exits": {
        "east": "/d/qujing/bibotan/shuijg"
      }
    },
    "/d/qujing/bibotan/longtai1": {
      "type": "ROOM",
      "short": "龙沙台",
      "objects": {
        "/d/sea/npc/soldier2": 1
      },
      "exits": {
        "southdown": "/d/qujing/bibotan/tandi1",
        "north": "/d/qujing/bibotan/yujie"
      }
    },
    "/d/qujing/bibotan/longtai2": {
      "type": "ROOM",
      "short": "龙沙台",
      "objects": {
        "/d/qujing/bibotan/obj/rack": 1
      },
      "exits": {
        "south": "/d/qujing/bibotan/shuijg",
        "north": "/d/qujing/bibotan/yuemen"
      }
    },
    "/d/qujing/bibotan/luhua1": {
      "type": "ROOM",
      "short": "芦花荡",
      "exits": {
        "west": "/d/qujing/bibotan/xiaolu2",
        "east": "/d/qujing/bibotan/luhua4",
        "north": "/d/qujing/bibotan/luhua2",
        "south": "/d/qujing/bibotan/luhua3"
      }
    },
    "/d/qujing/bibotan/luhua2": {
      "type": "ROOM",
      "short": "芦花荡",
      "exits": {
        "west": "/d/qujing/bibotan/luhua8",
        "east": "/d/qujing/bibotan/luhua5",
        "north": "/d/qujing/bibotan/luhua3",
        "south": "/d/qujing/bibotan/luhua1"
      }
    },
    "/d/qujing/bibotan/luhua3": {
      "type": "ROOM",
      "short": "芦花荡",
      "exits": {
        "west": "/d/qujing/bibotan/luhua9",
        "east": "/d/qujing/bibotan/luhua6",
        "north": "/d/qujing/bibotan/luhua1",
        "south": "/d/qujing/bibotan/luhua2"
      }
    },
    "/d/qujing/bibotan/luhua4": {
      "type": "ROOM",
      "short": "芦花荡",
      "exits": {
        "west": "/d/qujing/bibotan/luhua1",
        "east": "/d/qujing/bibotan/luhua7",
        "north": "/d/qujing/bibotan/luhua5",
        "south": "/d/qujing/bibotan/luhua6"
      }
    },
    "/d/qujing/bibotan/luhua5": {
      "type": "ROOM",
      "short": "芦花荡",
      "objects": {
        "/d/qujing/bibotan/npc/luniang": 1
      },
      "exits": {
        "west": "/d/qujing/bibotan/luhua2",
        "east": "/d/qujing/bibotan/luhua8",
        "north": "/d/qujing/bibotan/luhua6",
        "south": "/d/qujing/bibotan/luhua4"
      }
    },
    "/d/qujing/bibotan/luhua6": {
      "type": "ROOM",
      "short": "芦花荡",
      "exits": {
        "west": "/d/qujing/bibotan/luhua3",
        "east": "/d/qujing/bibotan/luhua9",
        "north": "/d/qujing/bibotan/luhua4",
        "south": "/d/qujing/bibotan/luhua5"
      }
    },
    "/d/qujing/bibotan/luhua7": {
      "type": "ROOM",
      "short": "芦花荡",
      "exits": {
        "west": "/d/qujing/bibotan/luhua4",
        "east": "/d/qujing/bibotan/luhua1",
        "north": "/d/qujing/bibotan/luhua8",
        "south": "/d/qujing/bibotan/luhua9"
      }
    },
    "/d/qujing/bibotan/luhua8": {
      "type": "ROOM",
      "short": "芦花荡",
      "exits": {
        "west": "/d/qujing/bibotan/luhua5",
        "east": "/d/qujing/bibotan/luhua2",
        "north": "/d/qujing/bibotan/luhua9",
        "south": "/d/qujing/bibotan/luhua7"
      }
    },
    "/d/qujing/bibotan/luhua9": {
      "type": "ROOM",
      "short": "芦花荡",
      "exits": {
        "west": "/d/qujing/bibotan/luhua6",
        "east": "/d/qujing/bibotan/luhua3",
        "north": "/d/qujing/bibotan/luhua7",
        "south": "/d/qujing/bibotan/luhua8"
      }
    },
    "/d/qujing/bibotan/shigang1": {
      "type": "ROOM",
      "short": "乱石冈",
      "objects": {
        "/d/qujing/bibotan/npc/stone": 1
      },
      "exits": {
        "southdown": "/d/qujing/bibotan/shipo2",
        "eastup": "/d/qujing/bibotan/shishan"
      }
    },
    "/d/qujing/bibotan/shigang2": {
      "type": "ROOM",
      "short": "乱石冈",
      "objects": {
        "/d/qujing/bibotan/npc/shanyao": 1
      },
      "exits": {
        "southup": "/d/qujing/bibotan/shishan",
        "northeast": "/d/qujing/bibotan/shipo3"
      }
    },
    "/d/qujing/bibotan/shipo1": {
      "type": "ROOM",
      "short": "乱石坡",
      "objects": {
        "/d/qujing/bibotan/npc/shanyao": 1
      },
      "exits": {
        "eastdown": "/d/qujing/bibotan/xiaolu4",
        "northwest": "/d/qujing/bibotan/shipo2"
      }
    },
    "/d/qujing/bibotan/shipo2": {
      "type": "ROOM",
      "short": "乱石坡",
      "exits": {
        "southeast": "/d/qujing/bibotan/shipo1",
        "northup": "/d/qujing/bibotan/shigang1",
        "south": "/d/qujing/bibotan/shipo4"
      }
    },
    "/d/qujing/bibotan/shipo3": {
      "type": "ROOM",
      "short": "乱石坡",
      "exits": {
        "southwest": "/d/qujing/bibotan/shigang2",
        "north": "/d/qujing/bibotan/yangchang1"
      }
    },
    "/d/qujing/bibotan/shipo4": {
      "type": "ROOM",
      "short": "乱石坡",
      "objects": {
        "/d/qujing/bibotan/npc/jaguar": 1
      },
      "exits": {
        "north": "/d/qujing/bibotan/shipo2"
      }
    },
    "/d/qujing/bibotan/shishan": {
      "type": "ROOM",
      "short": "乱石山",
      "exits": {
        "westdown": "/d/qujing/bibotan/shigang1",
        "northdown": "/d/qujing/bibotan/shigang2"
      }
    },
    "/d/qujing/bibotan/shuangyu": {
      "type": "ROOM",
      "short": "霜雨轩",
      "objects": {
        "/d/qujing/bibotan/npc/gongzhu": 1,
        "/d/qujing/bibotan/npc/fuma": 1
      },
      "exits": {
        "out": "/d/qujing/bibotan/yuetai2"
      }
    },
    "/d/qujing/bibotan/shuijg": {
      "type": "ROOM",
      "short": "碧波潭水晶宫",
      "objects": {
        "/d/qujing/bibotan/npc/longwang": 1
      },
      "exits": {
        "southdown": "/d/qujing/bibotan/yujie",
        "north": "/d/qujing/bibotan/longtai2",
        "east": "/d/qujing/bibotan/hanyu",
        "west": "/d/qujing/bibotan/lengxiang"
      }
    },
    "/d/qujing/bibotan/tandi1": {
      "type": "ROOM",
      "short": "潭底小径",
      "objects": {
        "/d/sea/npc/soldier1": 2
      },
      "exits": {
        "northup": "/d/qujing/bibotan/longtai1",
        "south": "/d/qujing/bibotan/tandi2"
      }
    },
    "/d/qujing/bibotan/tandi2": {
      "type": "ROOM",
      "short": "潭底小径",
      "exits": {
        "north": "/d/qujing/bibotan/tandi1",
        "south": "/d/qujing/bibotan/tandi3"
      }
    },
    "/d/qujing/bibotan/tandi3": {
      "type": "ROOM",
      "short": "潭底小径",
      "objects": {
        "/d/qujing/bibotan/npc/dadu": 1
      },
      "exits": {
        "north": "/d/qujing/bibotan/tandi2",
        "up": "/d/qujing/bibotan/gudu"
      }
    },
    "/d/qujing/bibotan/xiaolu1": {
      "type": "ROOM",
      "short": "潭边小路",
      "exits": {
        "southwest": "/d/qujing/bibotan/gudu",
        "northeast": "/d/qujing/bibotan/xiaolu2"
      }
    },
    "/d/qujing/bibotan/xiaolu2": {
      "type": "ROOM",
      "short": "潭边小路",
      "exits": {
        "southwest": "/d/qujing/bibotan/xiaolu1",
        "east": "/d/qujing/bibotan/luhua1"
      }
    },
    "/d/qujing/bibotan/xiaolu3": {
      "type": "ROOM",
      "short": "潭边小路",
      "exits": {
        "east": "/d/qujing/bibotan/gudu",
        "northwest": "/d/qujing/bibotan/xiaolu4"
      }
    },
    "/d/qujing/bibotan/xiaolu4": {
      "type": "ROOM",
      "short": "潭边小路",
      "exits": {
        "southeast": "/d/qujing/bibotan/xiaolu3",
        "westup": "/d/qujing/bibotan/shipo1"
      }
    },
    "/d/qujing/bibotan/yangchang1": {
      "type": "ROOM",
      "short": "羊肠小路",
      "objects": {
        "/d/qujing/bibotan/npc/hunter": 3
      },
      "exits": {
        "south": "/d/qujing/bibotan/shipo3",
        "northwest": "/d/qujing/bibotan/yangchang2",
        "west": "/d/qujing/jingjiling/jingji1"
      }
    },
    "/d/qujing/bibotan/yangchang2": {
      "type": "ROOM",
      "short": "羊肠小路",
      "exits": {
        "southeast": "/d/qujing/bibotan/yangchang1",
        "north": "/d/qujing/bibotan/yangchang3"
      }
    },
    "/d/qujing/bibotan/yangchang3": {
      "type": "ROOM",
      "short": "羊肠小路",
      "exits": {
        "south": "/d/qujing/bibotan/yangchang2",
        "northeast": "/d/qujing/jisaiguo/pingxi"
      }
    },
    "/d/qujing/bibotan/yuemen": {
      "type": "ROOM",
      "short": "月门",
      "objects": {
        "/d/qujing/bibotan/npc/qingshan": 1,
        "/d/qujing/bibotan/npc/niqiu": 1
      },
      "exits": {
        "south": "/d/qujing/bibotan/longtai2",
        "north": "/d/qujing/bibotan/hua_qian",
        "east": "/d/qujing/bibotan/yuetai1"
      }
    },
    "/d/qujing/bibotan/yuetai1": {
      "type": "ROOM",
      "short": "月台小径",
      "objects": {
        "/d/qujing/bibotan/npc/changtui": 1
      },
      "exits": {
        "east": "/d/qujing/bibotan/yuetai2",
        "west": "/d/qujing/bibotan/yuemen"
      }
    },
    "/d/qujing/bibotan/yuetai2": {
      "type": "ROOM",
      "short": "月台小径",
      "exits": {
        "enter": "/d/qujing/bibotan/shuangyu",
        "west": "/d/qujing/bibotan/yuetai1"
      }
    },
    "/d/qujing/bibotan/yujie": {
      "type": "ROOM",
      "short": "玉阶",
      "objects": {
        "/d/qujing/bibotan/npc/bie": 1,
        "/d/qujing/bibotan/npc/gui": 1
      },
      "exits": {
        "northup": "/d/qujing/bibotan/shuijg",
        "south": "/d/qujing/bibotan/longtai1"
      }
    },
    "/d/qujing/biqiu/bao": {
      "type": "ROOM",
      "short": "宝殿",
      "exits": {
        "east": "/d/qujing/biqiu/da",
        "south": "/d/qujing/biqiu/yu"
      },
      "objects": {
        "/d/qujing/biqiu/npc/guozhang": 1,
        "/d/qujing/biqiu/npc/king": 1,
        "/d/qujing/biqiu/npc/taijian": 1
      }
    },
    "/d/qujing/biqiu/caipu": {
      "type": "ROOM",
      "short": "彩铺",
      "exits": {
        "north": "/d/qujing/biqiu/jie3"
      },
      "objects": {
        "/d/qujing/biqiu/npc/binumuyi": 1
      }
    },
    "/d/qujing/biqiu/da": {
      "type": "ROOM",
      "short": "大殿",
      "exits": {
        "east": "/d/qujing/biqiu/zhaomen",
        "west": "/d/qujing/biqiu/bao"
      },
      "objects": {
        "/d/qujing/biqiu/npc/taijian": 1
      }
    },
    "/d/qujing/biqiu/daochang": {
      "type": "ROOM",
      "short": "佛道场",
      "exits": {
        "east": "/d/qujing/biqiu/jie11"
      }
    },
    "/d/qujing/biqiu/dong": {
      "type": "ROOM",
      "short": "清华洞",
      "exits": {
        "out": "/d/qujing/biqiu/zhuang"
      },
      "objects": {
        "/d/qujing/biqiu/npc/yao": 5
      }
    },
    "/d/qujing/biqiu/dongmen": {
      "type": "ROOM",
      "short": "峒门",
      "exits": {
        "west": "/d/qujing/biqiu/jie6",
        "east": "/d/qujing/biqiu/lin2"
      }
    },
    "/d/qujing/biqiu/guan": {
      "type": "ROOM",
      "short": "官场",
      "exits": {
        "northeast": "/d/qujing/biqiu/zhaomen"
      },
      "objects": {
        "/d/qujing/biqiu/npc/wenguan": 2
      }
    },
    "/d/qujing/biqiu/jie1": {
      "type": "ROOM",
      "short": "街坊",
      "exits": {
        "southwest": "/d/qujing/biqiu/jie4",
        "east": "/d/qujing/biqiu/jie2"
      },
      "objects": {
        "/d/qujing/biqiu/npc/people": 1
      }
    },
    "/d/qujing/biqiu/jie10": {
      "type": "ROOM",
      "short": "街坊",
      "exits": {
        "northeast": "/d/qujing/biqiu/jie8",
        "southeast": "/d/qujing/biqiu/jie11",
        "east": "/d/qujing/biqiu/niurou"
      },
      "objects": {
        "/d/qujing/biqiu/npc/people": 1
      }
    },
    "/d/qujing/biqiu/jie11": {
      "type": "ROOM",
      "short": "街坊",
      "exits": {
        "northwest": "/d/qujing/biqiu/jie10",
        "southeast": "/d/qujing/biqiu/jie12",
        "west": "/d/qujing/biqiu/daochang"
      },
      "objects": {
        "/d/qujing/biqiu/npc/people": 1
      }
    },
    "/d/qujing/biqiu/jie12": {
      "type": "ROOM",
      "short": "街坊",
      "exits": {
        "northwest": "/d/qujing/biqiu/jie11",
        "south": "/d/qujing/biqiu/nanmen"
      },
      "objects": {
        "/d/qujing/biqiu/npc/people": 1
      }
    },
    "/d/qujing/biqiu/jie2": {
      "type": "ROOM",
      "short": "街坊",
      "exits": {
        "west": "/d/qujing/biqiu/jie1",
        "east": "/d/qujing/biqiu/jie3"
      },
      "objects": {
        "/d/qujing/biqiu/npc/people": 1
      }
    },
    "/d/qujing/biqiu/jie3": {
      "type": "ROOM",
      "short": "街坊",
      "exits": {
        "west": "/d/qujing/biqiu/jie2",
        "east": "/d/qujing/biqiu/jinting",
        "south": "/d/qujing/biqiu/caipu",
        "southeast": "/d/qujing/biqiu/jie5"
      },
      "objects": {
        "/d/qujing/biqiu/npc/people": 1
      }
    },
    "/d/qujing/biqiu/jie4": {
      "type": "ROOM",
      "short": "街坊",
      "exits": {
        "east": "/d/qujing/biqiu/zhai1",
        "northeast": "/d/qujing/biqiu/jie1",
        "northwest": "/d/qujing/biqiu/jiulou",
        "south": "/d/qujing/biqiu/jie7"
      },
      "objects": {
        "/d/qujing/biqiu/npc/people": 1
      }
    },
    "/d/qujing/biqiu/jie5": {
      "type": "ROOM",
      "short": "街坊",
      "exits": {
        "northwest": "/d/qujing/biqiu/jie3",
        "east": "/d/qujing/biqiu/jie6",
        "south": "/d/qujing/biqiu/jie8"
      },
      "objects": {
        "/d/qujing/biqiu/npc/people": 1
      }
    },
    "/d/qujing/biqiu/jie6": {
      "type": "ROOM",
      "short": "街坊",
      "exits": {
        "west": "/d/qujing/biqiu/jie5",
        "east": "/d/qujing/biqiu/dongmen"
      },
      "objects": {
        "/d/qujing/biqiu/npc/people": 1
      }
    },
    "/d/qujing/biqiu/jie7": {
      "type": "ROOM",
      "short": "街坊",
      "exits": {
        "west": "/d/qujing/biqiu/ximen",
        "east": "/d/qujing/biqiu/zhai2",
        "north": "/d/qujing/biqiu/jie4",
        "south": "/d/qujing/biqiu/jie9"
      },
      "objects": {
        "/d/qujing/biqiu/npc/people": 1
      }
    },
    "/d/qujing/biqiu/jie8": {
      "type": "ROOM",
      "short": "街坊",
      "exits": {
        "north": "/d/qujing/biqiu/jie5",
        "southwest": "/d/qujing/biqiu/jie10"
      },
      "objects": {
        "/d/qujing/biqiu/npc/people": 1
      }
    },
    "/d/qujing/biqiu/jie9": {
      "type": "ROOM",
      "short": "街坊",
      "exits": {
        "north": "/d/qujing/biqiu/jie7",
        "southeast": "/d/qujing/biqiu/jinqi",
        "southwest": "/d/qujing/biqiu/xiaozi"
      },
      "objects": {
        "/d/qujing/biqiu/npc/people": 1
      }
    },
    "/d/qujing/biqiu/jinqi": {
      "type": "ROOM",
      "short": "金器店",
      "exits": {
        "northwest": "/d/qujing/biqiu/jie9"
      },
      "objects": {
        "/d/qujing/biqiu/npc/lasulusi": 1
      }
    },
    "/d/qujing/biqiu/jinting": {
      "type": "ROOM",
      "short": "金亭馆",
      "exits": {
        "west": "/d/qujing/biqiu/jie3"
      },
      "objects": {
        "/d/qujing/biqiu/npc/suohana": 1
      }
    },
    "/d/qujing/biqiu/jiulou": {
      "type": "ROOM",
      "short": "酒楼",
      "exits": {
        "southeast": "/d/qujing/biqiu/jie4"
      },
      "objects": {
        "/d/qujing/biqiu/npc/kanduli": 1
      }
    },
    "/d/qujing/biqiu/lin1": {
      "type": "ROOM",
      "short": "林道",
      "exits": {
        "southeast": "/d/qujing/biqiu/lin2",
        "west": "/d/qujing/biqiu/dongmen"
      }
    },
    "/d/qujing/biqiu/lin2": {
      "type": "ROOM",
      "short": "林道",
      "exits": {
        "northwest": "/d/qujing/biqiu/lin1",
        "east": "/d/qujing/pansi/ling1"
      }
    },
    "/d/qujing/biqiu/lin3": {
      "type": "ROOM",
      "short": "林道",
      "exits": {
        "east": "/d/qujing/biqiu/lin4",
        "northwest": "/d/qujing/wudidong/firemount-wudidong1.c"
      }
    },
    "/d/qujing/biqiu/lin4": {
      "type": "ROOM",
      "short": "林道",
      "exits": {
        "west": "/d/qujing/biqiu/lin3",
        "east": "/d/qujing/biqiu/ximen"
      }
    },
    "/d/qujing/biqiu/lin5": {
      "type": "ROOM",
      "short": "林道",
      "exits": {
        "northeast": "/d/qujing/biqiu/nanmen",
        "south": "/d/qujing/biqiu/lin6"
      }
    },
    "/d/qujing/biqiu/lin6": {
      "type": "ROOM",
      "short": "林道",
      "exits": {
        "north": "/d/qujing/biqiu/lin5",
        "southwest": "/d/qujing/biqiu/lin7"
      }
    },
    "/d/qujing/biqiu/lin7": {
      "type": "ROOM",
      "short": "林道",
      "exits": {
        "northeast": "/d/qujing/biqiu/lin6",
        "south": "/d/qujing/biqiu/liu1"
      }
    },
    "/d/qujing/biqiu/liu1": {
      "type": "ROOM",
      "short": "柳林坡",
      "exits": {
        "north": "/d/qujing/biqiu/lin7",
        "east": "/d/qujing/biqiu/liu2"
      }
    },
    "/d/qujing/biqiu/liu2": {
      "type": "ROOM",
      "short": "柳林坡",
      "exits": {
        "west": "/d/qujing/biqiu/liu1",
        "southwest": "/d/qujing/biqiu/liu3"
      }
    },
    "/d/qujing/biqiu/liu3": {
      "type": "ROOM",
      "short": "柳林坡",
      "exits": {
        "northeast": "/d/qujing/biqiu/liu2",
        "southeast": "/d/qujing/biqiu/liu4"
      }
    },
    "/d/qujing/biqiu/liu4": {
      "type": "ROOM",
      "short": "柳林坡",
      "exits": {
        "northwest": "/d/qujing/biqiu/liu3",
        "south": "/d/qujing/biqiu/xibei"
      }
    },
    "/d/qujing/biqiu/maowu": {
      "type": "ROOM",
      "short": "茅屋",
      "exits": {
        "west": "/d/qujing/biqiu/zhuang",
        "southwest": "/d/qujing/biqiu/yang5"
      }
    },
    "/d/qujing/biqiu/nanmen": {
      "type": "ROOM",
      "short": "曩门",
      "exits": {
        "north": "/d/qujing/biqiu/jie12",
        "southwest": "/d/qujing/biqiu/lin5"
      }
    },
    "/d/qujing/biqiu/niurou": {
      "type": "ROOM",
      "short": "牛肉馆",
      "exits": {
        "west": "/d/qujing/biqiu/jie10"
      },
      "objects": {
        "/d/qujing/biqiu/npc/kusikusi": 1
      }
    },
    "/d/qujing/biqiu/xiaozi": {
      "type": "ROOM",
      "short": "小子场",
      "exits": {
        "northeast": "/d/qujing/biqiu/jie9",
        "south": "/d/qujing/biqiu/zhaomen"
      }
    },
    "/d/qujing/biqiu/xibei": {
      "type": "ROOM",
      "short": "溪北",
      "exits": {
        "north": "/d/qujing/biqiu/liu4",
        "south": "/d/qujing/biqiu/xinan"
      }
    },
    "/d/qujing/biqiu/ximen": {
      "type": "ROOM",
      "short": "阋门",
      "exits": {
        "west": "/d/qujing/biqiu/lin4",
        "east": "/d/qujing/biqiu/jie7"
      }
    },
    "/d/qujing/biqiu/xinan": {
      "type": "ROOM",
      "short": "溪南",
      "exits": {
        "north": "/d/qujing/biqiu/xibei",
        "southwest": "/d/qujing/biqiu/zhuang"
      }
    },
    "/d/qujing/biqiu/yang1": {
      "type": "ROOM",
      "short": "杨树",
      "exits": {
        "east": "/d/qujing/biqiu/yang2",
        "southeast": "/d/qujing/biqiu/yang3"
      }
    },
    "/d/qujing/biqiu/yang2": {
      "type": "ROOM",
      "short": "杨树",
      "exits": {
        "west": "/d/qujing/biqiu/yang1",
        "southwest": "/d/qujing/biqiu/yang3",
        "southeast": "/d/qujing/biqiu/yang4",
        "east": "/d/qujing/biqiu/zhuang"
      }
    },
    "/d/qujing/biqiu/yang3": {
      "type": "ROOM",
      "short": "杨树",
      "exits": {
        "northwest": "/d/qujing/biqiu/yang1",
        "northeast": "/d/qujing/biqiu/yang2",
        "east": "/d/qujing/biqiu/yang4"
      }
    },
    "/d/qujing/biqiu/yang4": {
      "type": "ROOM",
      "short": "杨树",
      "exits": {
        "west": "/d/qujing/biqiu/yang3",
        "northwest": "/d/qujing/biqiu/yang2",
        "east": "/d/qujing/biqiu/yang5"
      }
    },
    "/d/qujing/biqiu/yang5": {
      "type": "ROOM",
      "short": "杨树",
      "exits": {
        "west": "/d/qujing/biqiu/yang4",
        "northeast": "/d/qujing/biqiu/maowu"
      }
    },
    "/d/qujing/biqiu/yu": {
      "type": "ROOM",
      "short": "玉殿",
      "exits": {
        "north": "/d/qujing/biqiu/bao"
      },
      "objects": {
        "/d/qujing/biqiu/npc/girl": 2,
        "/d/qujing/biqiu/npc/hou": 1
      }
    },
    "/d/qujing/biqiu/zhai1": {
      "type": "ROOM",
      "short": "宅院",
      "exits": {
        "south": "/d/qujing/biqiu/zhai2",
        "west": "/d/qujing/biqiu/jie4"
      },
      "objects": {
        "/d/qujing/biqiu/obj/elong": 1
      }
    },
    "/d/qujing/biqiu/zhai2": {
      "type": "ROOM",
      "short": "宅院",
      "exits": {
        "north": "/d/qujing/biqiu/zhai1",
        "west": "/d/qujing/biqiu/jie7"
      },
      "objects": {
        "/d/qujing/biqiu/obj/elong": 1
      }
    },
    "/d/qujing/biqiu/zhaomen": {
      "type": "ROOM",
      "short": "朝门",
      "exits": {
        "north": "/d/qujing/biqiu/xiaozi",
        "southwest": "/d/qujing/biqiu/guan",
        "west": "/d/qujing/biqiu/da"
      },
      "objects": {
        "/d/qujing/biqiu/npc/wenguan": 1
      }
    },
    "/d/qujing/biqiu/zhuang": {
      "type": "ROOM",
      "short": "清华庄",
      "exits": {
        "northeast": "/d/qujing/biqiu/xinan",
        "west": "/d/qujing/biqiu/yang2",
        "east": "/d/qujing/biqiu/maowu"
      }
    },
    "/d/qujing/chechi/banlu1": {
      "type": "ROOM",
      "short": "石板路",
      "exits": {
        "southdown": "/d/qujing/chechi/banlu2",
        "northup": "/d/qujing/chechi/dianmen"
      }
    },
    "/d/qujing/chechi/banlu2": {
      "type": "ROOM",
      "short": "石板路",
      "exits": {
        "southdown": "/d/qujing/chechi/qiang7d",
        "northup": "/d/qujing/chechi/banlu1"
      }
    },
    "/d/qujing/chechi/beiyuan": {
      "type": "ROOM",
      "short": "北院",
      "exits": {
        "north": "/d/qujing/chechi/zhaifang",
        "south": "/d/qujing/chechi/jingang"
      }
    },
    "/d/qujing/chechi/caichang": {
      "type": "ROOM",
      "short": "西城菜场",
      "exits": {
        "north": "/d/qujing/chechi/jieshi2",
        "east": "/d/qujing/chechi/jieshi4",
        "west": "/d/qujing/chechi/jiuguan",
        "south": "/d/qujing/chechi/taiping"
      }
    },
    "/d/qujing/chechi/cangjing": {
      "type": "ROOM",
      "short": "藏经楼",
      "exits": {
        "southeast": "/d/qujing/chechi/houdian"
      },
      "objects": {
        "/d/obj/book/daode": 1
      }
    },
    "/d/qujing/chechi/da": {
      "type": "ROOM",
      "short": "大相府",
      "exits": {
        "east": "/d/qujing/chechi/jieshi3"
      },
      "objects": {
        "/d/qujing/chechi/npc/daguan": 1
      }
    },
    "/d/qujing/chechi/damo": {
      "type": "ROOM",
      "short": "达摩殿",
      "exits": {
        "northwest": "/d/qujing/chechi/jingang"
      },
      "objects": {
        "/d/qujing/chechi/npc/heshang": 3
      }
    },
    "/d/qujing/chechi/dianmen": {
      "type": "ROOM",
      "short": "殿门",
      "exits": {
        "southdown": "/d/qujing/chechi/banlu1",
        "west": "/d/qujing/chechi/zhai",
        "east": "/d/qujing/chechi/wugu",
        "north": "/d/qujing/chechi/sanqing"
      },
      "objects": {
        "/d/qujing/chechi/npc/daozhang": 1
      }
    },
    "/d/qujing/chechi/dong": {
      "type": "ROOM",
      "short": "东场",
      "exits": {
        "east": "/d/qujing/chechi/jieshi7",
        "west": "/d/qujing/chechi/zhong"
      }
    },
    "/d/qujing/chechi/dongmen": {
      "type": "ROOM",
      "short": "东城门",
      "exits": {
        "east": "/d/qujing/chechi/shatan1",
        "south": "/d/qujing/chechi/qiang5g",
        "north": "/d/qujing/chechi/qiang3g",
        "west": "/d/qujing/chechi/ruizhao"
      }
    },
    "/d/qujing/chechi/fang": {
      "type": "ROOM",
      "short": "方丈楼",
      "exits": {
        "southdown": "/d/qujing/chechi/hou"
      }
    },
    "/d/qujing/chechi/feng": {
      "type": "ROOM",
      "short": "凤阁",
      "exits": {
        "west": "/d/qujing/chechi/jieshi10"
      },
      "objects": {
        "/d/qujing/chechi/npc/feng": 5
      }
    },
    "/d/qujing/chechi/fengyun": {
      "type": "ROOM",
      "short": "风云殿",
      "exits": {
        "south": "/d/qujing/chechi/jishui",
        "east": "/d/qujing/chechi/jinluan"
      },
      "objects": {
        "/d/qujing/chechi/npc/taijian": 1
      }
    },
    "/d/qujing/chechi/gong1a": {
      "type": "ROOM",
      "short": "宫墙",
      "exits": {
        "east": "/d/qujing/chechi/gong1b",
        "south": "/d/qujing/chechi/gong2a"
      }
    },
    "/d/qujing/chechi/gong1b": {
      "type": "ROOM",
      "short": "宫墙",
      "exits": {
        "east": "/d/qujing/chechi/gong1c",
        "west": "/d/qujing/chechi/gong1a"
      }
    },
    "/d/qujing/chechi/gong1c": {
      "type": "ROOM",
      "short": "宫墙",
      "exits": {
        "east": "/d/qujing/chechi/gong1d",
        "west": "/d/qujing/chechi/gong1b"
      }
    },
    "/d/qujing/chechi/gong1d": {
      "type": "ROOM",
      "short": "宫墙",
      "exits": {
        "east": "/d/qujing/chechi/gong1e",
        "west": "/d/qujing/chechi/gong1c"
      }
    },
    "/d/qujing/chechi/gong1e": {
      "type": "ROOM",
      "short": "宫墙",
      "exits": {
        "south": "/d/qujing/chechi/gong2e",
        "west": "/d/qujing/chechi/gong1d"
      }
    },
    "/d/qujing/chechi/gong2a": {
      "type": "ROOM",
      "short": "宫墙",
      "exits": {
        "south": "/d/qujing/chechi/gong3a",
        "north": "/d/qujing/chechi/gong1a"
      }
    },
    "/d/qujing/chechi/gong2e": {
      "type": "ROOM",
      "short": "宫墙",
      "exits": {
        "south": "/d/qujing/chechi/gong3e",
        "north": "/d/qujing/chechi/gong1e"
      }
    },
    "/d/qujing/chechi/gong3a": {
      "type": "ROOM",
      "short": "宫墙",
      "exits": {
        "south": "/d/qujing/chechi/gong4a",
        "north": "/d/qujing/chechi/gong2a"
      }
    },
    "/d/qujing/chechi/gong3e": {
      "type": "ROOM",
      "short": "宫墙",
      "exits": {
        "south": "/d/qujing/chechi/gong4e",
        "north": "/d/qujing/chechi/gong2e"
      }
    },
    "/d/qujing/chechi/gong4a": {
      "type": "ROOM",
      "short": "宫墙",
      "exits": {
        "south": "/d/qujing/chechi/gong5a",
        "north": "/d/qujing/chechi/gong3a"
      }
    },
    "/d/qujing/chechi/gong4e": {
      "type": "ROOM",
      "short": "宫墙",
      "exits": {
        "south": "/d/qujing/chechi/gong5e",
        "north": "/d/qujing/chechi/gong3e"
      }
    },
    "/d/qujing/chechi/gong5a": {
      "type": "ROOM",
      "short": "宫墙",
      "exits": {
        "north": "/d/qujing/chechi/gong4a",
        "east": "/d/qujing/chechi/gong5b"
      },
      "objects": {
        "/d/qujing/chechi/npc/weishi": 1
      }
    },
    "/d/qujing/chechi/gong5b": {
      "type": "ROOM",
      "short": "宫墙",
      "exits": {
        "west": "/d/qujing/chechi/gong5a",
        "east": "/d/qujing/chechi/gongmen"
      },
      "objects": {
        "/d/qujing/chechi/npc/weishi": 2
      }
    },
    "/d/qujing/chechi/gong5d": {
      "type": "ROOM",
      "short": "宫墙",
      "exits": {
        "west": "/d/qujing/chechi/gongmen",
        "east": "/d/qujing/chechi/gong5e"
      },
      "objects": {
        "/d/qujing/chechi/npc/weishi": 2
      }
    },
    "/d/qujing/chechi/gong5e": {
      "type": "ROOM",
      "short": "宫墙",
      "exits": {
        "west": "/d/qujing/chechi/gong5d",
        "north": "/d/qujing/chechi/gong4e"
      },
      "objects": {
        "/d/qujing/chechi/npc/weishi": 1
      }
    },
    "/d/qujing/chechi/gongmen": {
      "type": "ROOM",
      "short": "宫门",
      "exits": {
        "west": "/d/qujing/chechi/gong5b",
        "east": "/d/qujing/chechi/gong5d",
        "south": "/d/qujing/chechi/zhong",
        "north": "/d/qujing/chechi/zhaomen"
      }
    },
    "/d/qujing/chechi/hou": {
      "type": "ROOM",
      "short": "后殿",
      "exits": {
        "northup": "/d/qujing/chechi/fang",
        "west": "/d/qujing/chechi/zheng"
      },
      "objects": {
        "/d/qujing/chechi/npc/heshang": 2
      }
    },
    "/d/qujing/chechi/houdian": {
      "type": "ROOM",
      "short": "后殿",
      "exits": {
        "south": "/d/qujing/chechi/sanqing",
        "northwest": "/d/qujing/chechi/cangjing"
      },
      "objects": {
        "/d/qujing/chechi/npc/daotong": 2
      }
    },
    "/d/qujing/chechi/hougong1": {
      "type": "ROOM",
      "short": "后宫",
      "exits": {
        "east": "/d/qujing/chechi/hougong2"
      },
      "objects": {
        "/d/qujing/chechi/npc/girl": 2
      }
    },
    "/d/qujing/chechi/hougong2": {
      "type": "ROOM",
      "short": "后宫",
      "exits": {
        "west": "/d/qujing/chechi/hougong1",
        "east": "/d/qujing/chechi/hougong3",
        "south": "/d/qujing/chechi/jinluan"
      },
      "objects": {
        "/d/qujing/chechi/npc/girl": 3
      }
    },
    "/d/qujing/chechi/hougong3": {
      "type": "ROOM",
      "short": "后宫",
      "exits": {
        "west": "/d/qujing/chechi/hougong2"
      },
      "objects": {
        "/d/qujing/chechi/npc/girl": 2
      }
    },
    "/d/qujing/chechi/jieshi1": {
      "type": "ROOM",
      "short": "街市",
      "exits": {
        "west": "/d/qujing/chechi/xiao",
        "south": "/d/qujing/chechi/jieshi3"
      },
      "objects": {
        "/d/qujing/chechi/npc/people": 2
      }
    },
    "/d/qujing/chechi/jieshi10": {
      "type": "ROOM",
      "short": "街市",
      "exits": {
        "north": "/d/qujing/chechi/jieshi9",
        "east": "/d/qujing/chechi/feng"
      },
      "objects": {
        "/d/qujing/chechi/npc/people": 2
      }
    },
    "/d/qujing/chechi/jieshi2": {
      "type": "ROOM",
      "short": "街市",
      "exits": {
        "west": "/d/qujing/chechi/tangchi",
        "south": "/d/qujing/chechi/caichang"
      },
      "objects": {
        "/d/qujing/chechi/npc/people": 2
      }
    },
    "/d/qujing/chechi/jieshi3": {
      "type": "ROOM",
      "short": "街市",
      "exits": {
        "north": "/d/qujing/chechi/jieshi1",
        "west": "/d/qujing/chechi/da",
        "south": "/d/qujing/chechi/xinshi"
      },
      "objects": {
        "/d/qujing/chechi/npc/people": 2
      }
    },
    "/d/qujing/chechi/jieshi4": {
      "type": "ROOM",
      "short": "街市",
      "exits": {
        "west": "/d/qujing/chechi/caichang",
        "east": "/d/qujing/chechi/jieshi5"
      },
      "objects": {
        "/d/qujing/chechi/npc/people": 2
      }
    },
    "/d/qujing/chechi/jieshi5": {
      "type": "ROOM",
      "short": "街市",
      "exits": {
        "west": "/d/qujing/chechi/jieshi4",
        "east": "/d/qujing/chechi/xinshi"
      },
      "objects": {
        "/d/qujing/chechi/npc/people": 2
      }
    },
    "/d/qujing/chechi/jieshi6": {
      "type": "ROOM",
      "short": "街市",
      "exits": {
        "west": "/d/qujing/chechi/shutang",
        "east": "/d/qujing/chechi/xi",
        "north": "/d/qujing/chechi/taiping",
        "south": "/d/qujing/chechi/jieshi8"
      },
      "objects": {
        "/d/qujing/chechi/npc/people": 2
      }
    },
    "/d/qujing/chechi/jieshi7": {
      "type": "ROOM",
      "short": "街市",
      "exits": {
        "west": "/d/qujing/chechi/dong",
        "north": "/d/qujing/chechi/ruizhao",
        "south": "/d/qujing/chechi/jieshi9"
      },
      "objects": {
        "/d/qujing/chechi/npc/people": 2
      }
    },
    "/d/qujing/chechi/jieshi8": {
      "type": "ROOM",
      "short": "街市",
      "exits": {
        "west": "/d/qujing/chechi/xitai",
        "south": "/d/qujing/chechi/yanhua",
        "north": "/d/qujing/chechi/jieshi6"
      },
      "objects": {
        "/d/qujing/chechi/npc/people": 2
      }
    },
    "/d/qujing/chechi/jieshi9": {
      "type": "ROOM",
      "short": "街市",
      "exits": {
        "north": "/d/qujing/chechi/jieshi7",
        "east": "/d/qujing/chechi/long",
        "south": "/d/qujing/chechi/jieshi10"
      }
    },
    "/d/qujing/chechi/jingang": {
      "type": "ROOM",
      "short": "金刚殿",
      "exits": {
        "west": "/d/qujing/chechi/simen",
        "east": "/d/qujing/chechi/zheng",
        "north": "/d/qujing/chechi/beiyuan",
        "southeast": "/d/qujing/chechi/damo"
      }
    },
    "/d/qujing/chechi/jinluan": {
      "type": "ROOM",
      "short": "金銮殿",
      "exits": {
        "north": "/d/qujing/chechi/hougong2",
        "south": "/d/qujing/chechi/wufeng",
        "west": "/d/qujing/chechi/fengyun",
        "east": "/d/qujing/chechi/leiyu"
      },
      "objects": {
        "/d/qujing/chechi/npc/taijian": 1,
        "/d/qujing/chechi/npc/king": 1
      }
    },
    "/d/qujing/chechi/jishui": {
      "type": "ROOM",
      "short": "祭水场",
      "exits": {
        "north": "/d/qujing/chechi/fengyun",
        "east": "/d/qujing/chechi/tan"
      },
      "objects": {
        "/d/qujing/chechi/npc/jz1": 1,
        "/d/qujing/chechi/obj/chantai": 2
      }
    },
    "/d/qujing/chechi/jiuguan": {
      "type": "ROOM",
      "short": "酒馆",
      "exits": {
        "east": "/d/qujing/chechi/caichang"
      },
      "objects": {
        "/d/qujing/chechi/npc/jiubao": 1
      }
    },
    "/d/qujing/chechi/leiyu": {
      "type": "ROOM",
      "short": "雷雨殿",
      "exits": {
        "south": "/d/qujing/chechi/qiyu",
        "west": "/d/qujing/chechi/jinluan"
      },
      "objects": {
        "/d/qujing/chechi/npc/taijian": 1
      }
    },
    "/d/qujing/chechi/long": {
      "type": "ROOM",
      "short": "龙楼",
      "exits": {
        "west": "/d/qujing/chechi/jieshi9"
      },
      "objects": {
        "/d/qujing/chechi/npc/long": 5
      }
    },
    "/d/qujing/chechi/miyuan": {
      "type": "ROOM",
      "short": "秘院",
      "exits": {
        "south": "/d/qujing/chechi/cangjing"
      },
      "objects": {
        "/d/qujing/chechi/npc/langli": 1,
        "/d/qujing/chechi/npc/chaili": 1,
        "/d/qujing/chechi/npc/beili": 1,
        "/d/qujing/chechi/npc/mali": 1
      }
    },
    "/d/qujing/chechi/qiang1a": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "south": "/d/qujing/chechi/qiang2a",
        "east": "/d/qujing/chechi/qiang1b"
      }
    },
    "/d/qujing/chechi/qiang1b": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "west": "/d/qujing/chechi/qiang1a",
        "east": "/d/qujing/chechi/qiang1c"
      }
    },
    "/d/qujing/chechi/qiang1c": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "west": "/d/qujing/chechi/qiang1b",
        "east": "/d/qujing/chechi/qiang1d"
      }
    },
    "/d/qujing/chechi/qiang1d": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "west": "/d/qujing/chechi/qiang1c",
        "east": "/d/qujing/chechi/qiang1e",
        "southup": "/d/qujing/chechi/shanlu1"
      }
    },
    "/d/qujing/chechi/qiang1e": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "west": "/d/qujing/chechi/qiang1d",
        "east": "/d/qujing/chechi/qiang1f"
      }
    },
    "/d/qujing/chechi/qiang1f": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "west": "/d/qujing/chechi/qiang1e",
        "east": "/d/qujing/chechi/qiang1g"
      }
    },
    "/d/qujing/chechi/qiang1g": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "west": "/d/qujing/chechi/qiang1f",
        "south": "/d/qujing/chechi/qiang2g"
      }
    },
    "/d/qujing/chechi/qiang2a": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "north": "/d/qujing/chechi/qiang1a",
        "south": "/d/qujing/chechi/qiang3a"
      }
    },
    "/d/qujing/chechi/qiang2g": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "north": "/d/qujing/chechi/qiang1g",
        "south": "/d/qujing/chechi/qiang3g"
      }
    },
    "/d/qujing/chechi/qiang3a": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "north": "/d/qujing/chechi/qiang2a",
        "south": "/d/qujing/chechi/ximen"
      }
    },
    "/d/qujing/chechi/qiang3g": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "south": "/d/qujing/chechi/dongmen",
        "north": "/d/qujing/chechi/qiang2g"
      }
    },
    "/d/qujing/chechi/qiang5a": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "north": "/d/qujing/chechi/ximen",
        "south": "/d/qujing/chechi/qiang6a"
      }
    },
    "/d/qujing/chechi/qiang5g": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "north": "/d/qujing/chechi/dongmen",
        "south": "/d/qujing/chechi/qiang6g"
      }
    },
    "/d/qujing/chechi/qiang6a": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "north": "/d/qujing/chechi/qiang5a",
        "south": "/d/qujing/chechi/qiang7a"
      }
    },
    "/d/qujing/chechi/qiang6g": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "north": "/d/qujing/chechi/qiang5g",
        "south": "/d/qujing/chechi/qiang7g"
      }
    },
    "/d/qujing/chechi/qiang7a": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "north": "/d/qujing/chechi/qiang6a",
        "east": "/d/qujing/chechi/qiang7b"
      }
    },
    "/d/qujing/chechi/qiang7b": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "west": "/d/qujing/chechi/qiang7a",
        "east": "/d/qujing/chechi/qiang7c"
      }
    },
    "/d/qujing/chechi/qiang7c": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "west": "/d/qujing/chechi/qiang7b",
        "east": "/d/qujing/chechi/qiang7d"
      }
    },
    "/d/qujing/chechi/qiang7d": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "west": "/d/qujing/chechi/qiang7c",
        "east": "/d/qujing/chechi/qiang7e",
        "northup": "/d/qujing/chechi/banlu2"
      }
    },
    "/d/qujing/chechi/qiang7e": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "west": "/d/qujing/chechi/qiang7d",
        "east": "/d/qujing/chechi/qiang7f"
      }
    },
    "/d/qujing/chechi/qiang7f": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "west": "/d/qujing/chechi/qiang7e",
        "east": "/d/qujing/chechi/qiang7g"
      }
    },
    "/d/qujing/chechi/qiang7g": {
      "type": "ROOM",
      "short": "城墙",
      "exits": {
        "north": "/d/qujing/chechi/qiang6g",
        "west": "/d/qujing/chechi/qiang7f"
      }
    },
    "/d/qujing/chechi/qiyu": {
      "type": "ROOM",
      "short": "祈雨场",
      "exits": {
        "north": "/d/qujing/chechi/leiyu",
        "west": "/d/qujing/chechi/tan"
      },
      "objects": {
        "/d/qujing/chechi/npc/jz3": 1,
        "/d/qujing/chechi/obj/youguo": 1
      }
    },
    "/d/qujing/chechi/ruizhao": {
      "type": "ROOM",
      "short": "瑞兆场",
      "exits": {
        "east": "/d/qujing/chechi/dongmen",
        "south": "/d/qujing/chechi/jieshi7"
      }
    },
    "/d/qujing/chechi/sanqing": {
      "type": "ROOM",
      "short": "三清殿",
      "exits": {
        "south": "/d/qujing/chechi/dianmen",
        "north": "/d/qujing/chechi/houdian",
        "northeast": "/d/qujing/chechi/xiang1"
      },
      "objects": {
        "/d/qujing/chechi/npc/yuanshi": 1,
        "/d/qujing/chechi/npc/lingbao": 1,
        "/d/qujing/chechi/npc/taishang": 1,
        "/d/qujing/chechi/obj/zhengsu": 1
      }
    },
    "/d/qujing/chechi/shanlu1": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northdown": "/d/qujing/chechi/qiang1d",
        "eastup": "/d/qujing/chechi/shanlu2"
      }
    },
    "/d/qujing/chechi/shanlu2": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "westdown": "/d/qujing/chechi/shanlu1",
        "southwest": "/d/qujing/chechi/shanlu3"
      }
    },
    "/d/qujing/chechi/shanlu3": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northeast": "/d/qujing/chechi/shanlu2",
        "southup": "/d/qujing/chechi/shanlu4"
      }
    },
    "/d/qujing/chechi/shanlu4": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northdown": "/d/qujing/chechi/shanlu3",
        "southeast": "/d/qujing/chechi/simen"
      }
    },
    "/d/qujing/chechi/shatan1": {
      "type": "ROOM",
      "short": "沙滩",
      "exits": {
        "southeast": "/d/qujing/chechi/shatan2",
        "west": "/d/qujing/chechi/dongmen"
      }
    },
    "/d/qujing/chechi/shatan2": {
      "type": "ROOM",
      "short": "沙滩",
      "exits": {
        "northwest": "/d/qujing/chechi/shatan1",
        "south": "/d/qujing/chechi/shatan3"
      }
    },
    "/d/qujing/chechi/shatan3": {
      "type": "ROOM",
      "short": "沙滩",
      "exits": {
        "southeast": "/d/qujing/wuji/shandao5",
        "north": "/d/qujing/chechi/shatan2"
      }
    },
    "/d/qujing/chechi/shatan4": {
      "type": "ROOM",
      "short": "沙滩",
      "exits": {
        "east": "/d/qujing/chechi/ximen",
        "southwest": "/d/qujing/chechi/shatan5"
      }
    },
    "/d/qujing/chechi/shatan5": {
      "type": "ROOM",
      "short": "沙滩",
      "exits": {
        "northeast": "/d/qujing/chechi/shatan4",
        "southwest": "/d/qujing/tongtian/xiaolu3"
      }
    },
    "/d/qujing/chechi/shutang": {
      "type": "ROOM",
      "short": "书堂",
      "exits": {
        "east": "/d/qujing/chechi/jieshi6"
      },
      "objects": {
        "/d/qujing/chechi/npc/shulao": 1
      }
    },
    "/d/qujing/chechi/simen": {
      "type": "ROOM",
      "short": "寺门",
      "exits": {
        "northwest": "/d/qujing/chechi/shanlu4",
        "east": "/d/qujing/chechi/jingang"
      },
      "objects": {
        "/d/qujing/chechi/npc/heshang": 2
      }
    },
    "/d/qujing/chechi/taiping": {
      "type": "ROOM",
      "short": "太平场",
      "exits": {
        "west": "/d/qujing/chechi/ximen",
        "north": "/d/qujing/chechi/caichang",
        "south": "/d/qujing/chechi/jieshi6"
      }
    },
    "/d/qujing/chechi/tan": {
      "type": "ROOM",
      "short": "坛场",
      "exits": {
        "south": "/d/qujing/chechi/zhaomen",
        "north": "/d/qujing/chechi/wufeng",
        "east": "/d/qujing/chechi/qiyu",
        "west": "/d/qujing/chechi/jishui"
      },
      "objects": {
        "/d/qujing/chechi/npc/jz2": 1,
        "/d/qujing/chechi/obj/guizi": 1
      }
    },
    "/d/qujing/chechi/tangchi": {
      "type": "ROOM",
      "short": "汤池",
      "exits": {
        "east": "/d/qujing/chechi/jieshi2"
      },
      "objects": {
        "/d/qujing/chechi/obj/yujin": 1
      }
    },
    "/d/qujing/chechi/wufeng": {
      "type": "ROOM",
      "short": "五凤楼",
      "exits": {
        "north": "/d/qujing/chechi/jinluan",
        "south": "/d/qujing/chechi/tan"
      },
      "objects": {
        "/d/qujing/chechi/npc/girl": 5
      }
    },
    "/d/qujing/chechi/wugu": {
      "type": "ROOM",
      "short": "五谷轮回",
      "exits": {
        "west": "/d/qujing/chechi/dianmen"
      }
    },
    "/d/qujing/chechi/xi": {
      "type": "ROOM",
      "short": "西场",
      "exits": {
        "west": "/d/qujing/chechi/jieshi6",
        "east": "/d/qujing/chechi/zhong"
      }
    },
    "/d/qujing/chechi/xiang1": {
      "type": "ROOM",
      "short": "厢廊",
      "exits": {
        "southwest": "/d/qujing/chechi/sanqing",
        "east": "/d/qujing/chechi/xiang2"
      },
      "objects": {
        "/d/qujing/chechi/npc/daoshi": 1
      }
    },
    "/d/qujing/chechi/xiang2": {
      "type": "ROOM",
      "short": "厢房",
      "exits": {
        "west": "/d/qujing/chechi/xiang1",
        "east": "/d/qujing/chechi/xiang3"
      },
      "objects": {
        "/d/qujing/chechi/npc/daoshi": 2
      }
    },
    "/d/qujing/chechi/xiang3": {
      "type": "ROOM",
      "short": "厢房",
      "exits": {
        "west": "/d/qujing/chechi/xiang2"
      },
      "objects": {
        "/d/qujing/chechi/npc/daoshi": 2
      }
    },
    "/d/qujing/chechi/xiao": {
      "type": "ROOM",
      "short": "小相府",
      "exits": {
        "east": "/d/qujing/chechi/jieshi1"
      },
      "objects": {
        "/d/qujing/chechi/npc/xiaoguan": 1
      }
    },
    "/d/qujing/chechi/ximen": {
      "type": "ROOM",
      "short": "西城门",
      "exits": {
        "north": "/d/qujing/chechi/qiang3a",
        "east": "/d/qujing/chechi/taiping",
        "west": "/d/qujing/chechi/shatan4",
        "south": "/d/qujing/chechi/qiang5a"
      }
    },
    "/d/qujing/chechi/xinshi": {
      "type": "ROOM",
      "short": "新市口",
      "exits": {
        "west": "/d/qujing/chechi/jieshi5",
        "north": "/d/qujing/chechi/jieshi3"
      }
    },
    "/d/qujing/chechi/xitai": {
      "type": "ROOM",
      "short": "戏台",
      "exits": {
        "east": "/d/qujing/chechi/jieshi8"
      },
      "objects": {
        "/d/qujing/chechi/npc/xizi": 1
      }
    },
    "/d/qujing/chechi/yanhua": {
      "type": "ROOM",
      "short": "烟花院",
      "exits": {
        "north": "/d/qujing/chechi/jieshi8"
      },
      "objects": {
        "/d/qujing/chechi/npc/jinchai": 1
      }
    },
    "/d/qujing/chechi/zhai": {
      "type": "ROOM",
      "short": "斋房",
      "exits": {
        "east": "/d/qujing/chechi/dianmen"
      },
      "objects": {
        "/d/qujing/chechi/obj/gongguo": 1,
        "/d/qujing/chechi/obj/guo": 2
      }
    },
    "/d/qujing/chechi/zhaifang": {
      "type": "ROOM",
      "short": "斋房",
      "exits": {
        "south": "/d/qujing/chechi/beiyuan"
      },
      "objects": {
        "/d/qujing/chechi/obj/rice": 1,
        "/d/qujing/chechi/obj/kang": 1
      }
    },
    "/d/qujing/chechi/zhaomen": {
      "type": "ROOM",
      "short": "朝门",
      "exits": {
        "south": "/d/qujing/chechi/gongmen",
        "north": "/d/qujing/chechi/tan"
      },
      "objects": {
        "/d/qujing/chechi/npc/weishi": 2
      }
    },
    "/d/qujing/chechi/zheng": {
      "type": "ROOM",
      "short": "正殿",
      "exits": {
        "west": "/d/qujing/chechi/jingang",
        "east": "/d/qujing/chechi/hou"
      },
      "objects": {
        "/d/qujing/chechi/npc/heshang": 2
      }
    },
    "/d/qujing/chechi/zhong": {
      "type": "ROOM",
      "short": "中场",
      "exits": {
        "west": "/d/qujing/chechi/xi",
        "north": "/d/qujing/chechi/gongmen",
        "east": "/d/qujing/chechi/dong"
      }
    },
    "/d/qujing/dudi/dongkou": {
      "type": "ROOM",
      "short": "洞口",
      "exits": {
        "southwest": "/d/qujing/dudi/dudi2",
        "enter": "/d/qujing/dudi/yidong"
      }
    },
    "/d/qujing/dudi/dongting": {
      "type": "ROOM",
      "short": "洞厅",
      "exits": {
        "northwest": "/d/qujing/dudi/sandong",
        "south": "/d/qujing/dudi/huating"
      },
      "objects": {
        "/d/qujing/dudi/npc/yao": 6
      }
    },
    "/d/qujing/dudi/dudi1": {
      "type": "ROOM",
      "short": "毒敌山",
      "exits": {
        "southwest": "/d/qujing/dudi/dudi2"
      }
    },
    "/d/qujing/dudi/dudi2": {
      "type": "ROOM",
      "short": "毒敌山",
      "exits": {
        "northeast": "/d/qujing/dudi/dudi1",
        "southeast": "/d/qujing/dudi/dongkou",
        "southwest": "/d/qujing/dudi/dudi3"
      }
    },
    "/d/qujing/dudi/dudi3": {
      "type": "ROOM",
      "short": "毒敌山",
      "exits": {
        "northeast": "/d/qujing/dudi/dudi2",
        "southeast": "/d/qujing/dudi/dudi4"
      }
    },
    "/d/qujing/dudi/dudi4": {
      "type": "ROOM",
      "short": "毒敌山",
      "exits": {
        "northwest": "/d/qujing/dudi/dudi3",
        "southdown": "/d/qujing/dudi/shanlu1"
      }
    },
    "/d/qujing/dudi/erdong": {
      "type": "ROOM",
      "short": "二洞门",
      "exits": {
        "northeast": "/d/qujing/dudi/yidong"
      },
      "objects": {
        "/d/qujing/dudi/npc/yao": 5
      }
    },
    "/d/qujing/dudi/huating": {
      "type": "ROOM",
      "short": "花亭子",
      "exits": {
        "north": "/d/qujing/dudi/dongting",
        "east": "/d/qujing/dudi/neigong"
      },
      "objects": {
        "/d/qujing/dudi/obj/momo": 2,
        "/d/qujing/dudi/npc/yao": 5,
        "/d/qujing/dudi/npc/xiezi": 1
      }
    },
    "/d/qujing/dudi/neigong": {
      "type": "ROOM",
      "short": "内宫",
      "exits": {
        "west": "/d/qujing/dudi/huating"
      },
      "objects": {
        "/d/qujing/dudi/npc/yao": 4
      }
    },
    "/d/qujing/dudi/sandong": {
      "type": "ROOM",
      "short": "三洞门",
      "exits": {
        "north": "/d/qujing/dudi/erdong"
      },
      "objects": {
        "/d/qujing/dudi/npc/yao": 5
      }
    },
    "/d/qujing/dudi/shanlu1": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northup": "/d/qujing/dudi/dudi4",
        "southeast": "/d/qujing/dudi/shanlu3"
      }
    },
    "/d/qujing/dudi/shanlu10": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northwest": "/d/qujing/dudi/shanlu7",
        "northeast": "/d/qujing/dudi/shanlu8"
      }
    },
    "/d/qujing/dudi/shanlu2": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "eastup": "/d/qujing/dudi/shanlu3",
        "southeast": "/d/qujing/dudi/shanlu4"
      }
    },
    "/d/qujing/dudi/shanlu3": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northwest": "/d/qujing/dudi/shanlu1",
        "westdown": "/d/qujing/dudi/shanlu2"
      }
    },
    "/d/qujing/dudi/shanlu4": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northwest": "/d/qujing/dudi/shanlu2",
        "eastdown": "/d/qujing/dudi/shanlu5"
      }
    },
    "/d/qujing/dudi/shanlu5": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "westup": "/d/qujing/dudi/shanlu4",
        "southwest": "/d/qujing/dudi/shanlu7"
      }
    },
    "/d/qujing/dudi/shanlu6": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "east": "/d/qujing/dudi/shanlu7",
        "northwest": "/d/qujing/firemount/qujinglu"
      }
    },
    "/d/qujing/dudi/shanlu7": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "west": "/d/qujing/dudi/shanlu6",
        "northeast": "/d/qujing/dudi/shanlu5",
        "southeast": "/d/qujing/dudi/shanlu10"
      }
    },
    "/d/qujing/dudi/shanlu8": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "east": "/d/qujing/dudi/shanlu9",
        "southwest": "/d/qujing/dudi/shanlu10"
      }
    },
    "/d/qujing/dudi/shanlu9": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "west": "/d/qujing/dudi/shanlu8",
        "southeast": "/d/qujing/nuerguo/end"
      }
    },
    "/d/qujing/dudi/yidong": {
      "type": "ROOM",
      "short": "一洞门",
      "exits": {
        "out": "/d/qujing/dudi/dongkou"
      },
      "objects": {
        "/d/qujing/dudi/npc/yao": 4
      }
    },
    "/d/qujing/fengxian/dalu1": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "southwest": "/d/qujing/fengxian/dalu2",
        "east": "/d/qujing/yinwu/huangye2"
      }
    },
    "/d/qujing/fengxian/dalu2": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "northeast": "/d/qujing/fengxian/dalu1",
        "southwest": "/d/qujing/fengxian/dalu3"
      }
    },
    "/d/qujing/fengxian/dalu3": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "northeast": "/d/qujing/fengxian/dalu2",
        "south": "/d/qujing/fengxian/diaoqiao"
      }
    },
    "/d/qujing/fengxian/dalu4": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "north": "/d/qujing/fengxian/diaoqiao",
        "south": "/d/qujing/fengxian/dalu5"
      }
    },
    "/d/qujing/fengxian/dalu5": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "north": "/d/qujing/fengxian/dalu4",
        "south": "/d/qujing/fengxian/dalu6"
      }
    },
    "/d/qujing/fengxian/dalu6": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "north": "/d/qujing/fengxian/dalu5",
        "south": "/d/qujing/fengxian/dalu7"
      }
    },
    "/d/qujing/fengxian/dalu7": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "north": "/d/qujing/fengxian/dalu6",
        "south": "/d/qujing/fengxian/dalu8"
      }
    },
    "/d/qujing/fengxian/dalu8": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "north": "/d/qujing/fengxian/dalu7",
        "southwest": "/d/qujing/fengxian/dalu9"
      }
    },
    "/d/qujing/fengxian/dalu9": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "northeast": "/d/qujing/fengxian/dalu8",
        "west": "/d/qujing/yuhua/xiaolu10"
      }
    },
    "/d/qujing/fengxian/daochang": {
      "type": "ROOM",
      "short": "道场",
      "exits": {
        "south": "/d/qujing/fengxian/jiedao1"
      },
      "objects": {
        "/d/qujing/fengxian/npc/fashi": 1,
        "/d/qujing/fengxian/npc/people2": 4
      }
    },
    "/d/qujing/fengxian/diaoqiao": {
      "type": "ROOM",
      "short": "吊桥",
      "exits": {
        "north": "/d/qujing/fengxian/dalu3",
        "south": "/d/qujing/fengxian/dalu4",
        "west": "/d/qujing/fengxian/jiedao7"
      }
    },
    "/d/qujing/fengxian/guanmao": {
      "type": "ROOM",
      "short": "冠帽店",
      "exits": {
        "south": "/d/qujing/fengxian/jiedao5"
      },
      "objects": {
        "/d/qujing/fengxian/npc/sg2": 1
      }
    },
    "/d/qujing/fengxian/jiedao1": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/fengxian/daochang",
        "south": "/d/qujing/fengxian/shikou"
      },
      "objects": {
        "/d/qujing/fengxian/npc/people": 1
      }
    },
    "/d/qujing/fengxian/jiedao10": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/fengxian/jiedao4",
        "west": "/d/qujing/fengxian/jiedao9"
      },
      "objects": {
        "/d/qujing/fengxian/npc/people": 1
      }
    },
    "/d/qujing/fengxian/jiedao11": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/fengxian/shikou",
        "south": "/d/qujing/fengxian/shang"
      },
      "objects": {
        "/d/qujing/fengxian/npc/people": 1
      }
    },
    "/d/qujing/fengxian/jiedao12": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/fengxian/jiedao5",
        "east": "/d/qujing/fengxian/jiedao13"
      },
      "objects": {
        "/d/qujing/fengxian/npc/people": 1
      }
    },
    "/d/qujing/fengxian/jiedao13": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/fengxian/jiedao6",
        "west": "/d/qujing/fengxian/jiedao12",
        "east": "/d/qujing/fengxian/jiedao14"
      },
      "objects": {
        "/d/qujing/fengxian/npc/people": 1
      }
    },
    "/d/qujing/fengxian/jiedao14": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/fengxian/jiedao7",
        "west": "/d/qujing/fengxian/jiedao13",
        "south": "/d/qujing/fengxian/xiang"
      },
      "objects": {
        "/d/qujing/fengxian/npc/people": 1
      }
    },
    "/d/qujing/fengxian/jiedao2": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/fengxian/puji",
        "south": "/d/qujing/fengxian/jiedao8",
        "east": "/d/qujing/fengxian/jiedao3"
      },
      "objects": {
        "/d/qujing/fengxian/npc/people": 1
      }
    },
    "/d/qujing/fengxian/jiedao3": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/fengxian/ludian",
        "south": "/d/qujing/fengxian/jiedao9",
        "east": "/d/qujing/fengxian/jiedao4",
        "west": "/d/qujing/fengxian/jiedao2"
      },
      "objects": {
        "/d/qujing/fengxian/npc/people": 1
      }
    },
    "/d/qujing/fengxian/jiedao4": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/fengxian/jiuguan",
        "south": "/d/qujing/fengxian/jiedao10",
        "east": "/d/qujing/fengxian/shikou",
        "west": "/d/qujing/fengxian/jiedao3"
      },
      "objects": {
        "/d/qujing/fengxian/npc/people": 1
      }
    },
    "/d/qujing/fengxian/jiedao5": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/fengxian/guanmao",
        "south": "/d/qujing/fengxian/jiedao12",
        "east": "/d/qujing/fengxian/jiedao6",
        "west": "/d/qujing/fengxian/shikou"
      },
      "objects": {
        "/d/qujing/fengxian/npc/people": 1
      }
    },
    "/d/qujing/fengxian/jiedao6": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "south": "/d/qujing/fengxian/jiedao13",
        "east": "/d/qujing/fengxian/jiedao7",
        "west": "/d/qujing/fengxian/jiedao5"
      },
      "objects": {
        "/d/qujing/fengxian/npc/people": 1
      }
    },
    "/d/qujing/fengxian/jiedao7": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/fengxian/zhaizhan",
        "south": "/d/qujing/fengxian/jiedao14",
        "east": "/d/qujing/fengxian/diaoqiao",
        "west": "/d/qujing/fengxian/jiedao6"
      },
      "objects": {
        "/d/qujing/fengxian/npc/people": 1
      }
    },
    "/d/qujing/fengxian/jiedao8": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/fengxian/jiedao2",
        "east": "/d/qujing/fengxian/jiedao9",
        "west": "/d/qujing/fengxian/jitan"
      },
      "objects": {
        "/d/qujing/fengxian/npc/people": 1
      }
    },
    "/d/qujing/fengxian/jiedao9": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/fengxian/jiedao3",
        "south": "/d/qujing/fengxian/shantang",
        "east": "/d/qujing/fengxian/jiedao10",
        "west": "/d/qujing/fengxian/jiedao8"
      },
      "objects": {
        "/d/qujing/fengxian/npc/people": 1
      }
    },
    "/d/qujing/fengxian/jitan": {
      "type": "ROOM",
      "short": "祭坛",
      "exits": {
        "east": "/d/qujing/fengxian/jiedao8"
      },
      "objects": {
        "/d/qujing/fengxian/npc/jiguan": 1,
        "/d/qujing/fengxian/npc/people2": 4
      }
    },
    "/d/qujing/fengxian/jiuguan": {
      "type": "ROOM",
      "short": "酒馆",
      "exits": {
        "south": "/d/qujing/fengxian/jiedao4"
      },
      "objects": {
        "/d/qujing/fengxian/npc/sg3": 1,
        "/d/qujing/fengxian/obj/tea": 2
      }
    },
    "/d/qujing/fengxian/junhou": {
      "type": "ROOM",
      "short": "郡侯衙",
      "exits": {
        "northeast": "/d/qujing/fengxian/shuode",
        "northwest": "/d/qujing/fengxian/shien"
      },
      "objects": {
        "/d/qujing/fengxian/npc/sg": 1
      }
    },
    "/d/qujing/fengxian/ludian": {
      "type": "ROOM",
      "short": "履店",
      "exits": {
        "south": "/d/qujing/fengxian/jiedao3"
      },
      "objects": {
        "/d/qujing/fengxian/npc/sg4": 1
      }
    },
    "/d/qujing/fengxian/puji": {
      "type": "ROOM",
      "short": "普济寺",
      "exits": {
        "south": "/d/qujing/fengxian/jiedao2"
      },
      "objects": {
        "/d/qujing/fengxian/npc/monk": 1
      }
    },
    "/d/qujing/fengxian/shang": {
      "type": "ROOM",
      "short": "上官府",
      "exits": {
        "north": "/d/qujing/fengxian/jiedao11",
        "southwest": "/d/qujing/fengxian/shien",
        "southeast": "/d/qujing/fengxian/shuode"
      }
    },
    "/d/qujing/fengxian/shantang": {
      "type": "ROOM",
      "short": "膳堂",
      "exits": {
        "north": "/d/qujing/fengxian/jiedao9"
      }
    },
    "/d/qujing/fengxian/shien": {
      "type": "ROOM",
      "short": "施恩堂",
      "exits": {
        "northeast": "/d/qujing/fengxian/shang",
        "southeast": "/d/qujing/fengxian/junhou"
      }
    },
    "/d/qujing/fengxian/shikou": {
      "type": "ROOM",
      "short": "市口",
      "exits": {
        "north": "/d/qujing/fengxian/jiedao1",
        "west": "/d/qujing/fengxian/jiedao4",
        "east": "/d/qujing/fengxian/jiedao5",
        "south": "/d/qujing/fengxian/jiedao11"
      },
      "objects": {
        "/d/qujing/fengxian/npc/people": 1
      }
    },
    "/d/qujing/fengxian/shuode": {
      "type": "ROOM",
      "short": "硕德堂",
      "exits": {
        "northwest": "/d/qujing/fengxian/shang",
        "southwest": "/d/qujing/fengxian/junhou"
      }
    },
    "/d/qujing/fengxian/xiang": {
      "type": "ROOM",
      "short": "香庙",
      "exits": {
        "north": "/d/qujing/fengxian/jiedao14"
      },
      "objects": {
        "/d/qujing/fengxian/npc/miaozhu": 1,
        "/d/qujing/fengxian/npc/people2": 4
      }
    },
    "/d/qujing/fengxian/zhaishi": {
      "type": "ROOM",
      "short": "斋室",
      "exits": {
        "south": "/d/qujing/fengxian/zhaizhan"
      },
      "objects": {
        "/d/qujing/fengxian/obj/xifan": 1,
        "/d/qujing/fengxian/obj/xiaocai": 1
      }
    },
    "/d/qujing/fengxian/zhaizhan": {
      "type": "ROOM",
      "short": "斋栈",
      "exits": {
        "south": "/d/qujing/fengxian/jiedao7",
        "north": "/d/qujing/fengxian/zhaishi"
      },
      "objects": {
        "/d/qujing/fengxian/npc/sg1": 1
      }
    },
    "/d/qujing/firemount/cuiyun1": {
      "type": "ROOM",
      "short": "翠云山",
      "exits": {
        "east": "/d/qujing/firemount/dongkou",
        "northdown": "/d/qujing/firemount/cuiyun2"
      }
    },
    "/d/qujing/firemount/cuiyun2": {
      "type": "ROOM",
      "short": "翠云山",
      "objects": {
        "/d/qujing/firemount/npc/qiaofu": 1
      },
      "exits": {
        "eastdown": "/d/qujing/firemount/cuiyun3",
        "southup": "/d/qujing/firemount/cuiyun1"
      }
    },
    "/d/qujing/firemount/cuiyun3": {
      "type": "ROOM",
      "short": "翠云山",
      "objects": {
        "/d/qujing/firemount/npc/qiaofu": 1
      },
      "exits": {
        "westup": "/d/qujing/firemount/cuiyun2",
        "northdown": "/d/qujing/firemount/cuiyun4"
      }
    },
    "/d/qujing/firemount/cuiyun4": {
      "type": "ROOM",
      "short": "翠云山",
      "exits": {
        "southup": "/d/qujing/firemount/cuiyun3",
        "eastdown": "/d/qujing/firemount/cuiyun5"
      }
    },
    "/d/qujing/firemount/cuiyun5": {
      "type": "ROOM",
      "short": "翠云山",
      "exits": {
        "westup": "/d/qujing/firemount/cuiyun4",
        "north": "/d/qujing/firemount/south3"
      }
    },
    "/d/qujing/firemount/dongkou": {
      "type": "ROOM",
      "short": "芭蕉洞口",
      "exits": {
        "west": "/d/qujing/firemount/cuiyun1",
        "east": "/d/qujing/firemount/shimen"
      }
    },
    "/d/qujing/firemount/dongnei": {
      "type": "ROOM",
      "short": "洞内",
      "exits": {
        "out": "/d/qujing/firemount/shimen"
      },
      "objects": {
        "/d/qujing/firemount/npc/xiaoyao": 3
      }
    },
    "/d/qujing/firemount/hongse": {
      "type": "ROOM",
      "short": "红色庄院",
      "objects": {
        "/d/qujing/firemount/npc/oldman": 1
      },
      "exits": {
        "north": "/d/qujing/firemount/luzhou2"
      }
    },
    "/d/qujing/firemount/hongyan": {
      "type": "ROOM",
      "short": "红岩潭",
      "exits": {
        "southup": "/d/qujing/firemount/shanwai",
        "west": "/d/qujing/jilei/shan4"
      }
    },
    "/d/qujing/firemount/huoyan": {
      "type": "ROOM",
      "short": "火焰山",
      "exits": {
        "northwest": "/d/qujing/firemount/shanwai",
        "eastdown": "/d/qujing/firemount/shanbian"
      }
    },
    "/d/qujing/firemount/longzhua": {
      "type": "ROOM",
      "short": "红色庄院",
      "exits": {
        "north": "/d/qujing/firemount/luzhou2"
      },
      "objects": {
        "/d/qujing/firemount/npc/oldman": 1
      }
    },
    "/d/qujing/firemount/luzhou": {
      "type": "ROOM",
      "short": "沙漠绿洲",
      "exits": {
        "west": "/d/qujing/firemount/shalu2",
        "east": "/d/qujing/firemount/luzhou2"
      }
    },
    "/d/qujing/firemount/luzhou2": {
      "type": "ROOM",
      "short": "沙漠绿洲",
      "exits": {
        "south": "/d/qujing/firemount/hongse",
        "north": "/d/qujing/firemount/xiaodian",
        "west": "/d/qujing/firemount/luzhou",
        "east": "/d/qujing/firemount/luzhou3"
      }
    },
    "/d/qujing/firemount/luzhou3": {
      "type": "ROOM",
      "short": "沙漠绿洲",
      "exits": {
        "southeast": "/d/qujing/firemount/qujinglu",
        "west": "/d/qujing/firemount/luzhou2"
      }
    },
    "/d/qujing/firemount/nofire": {
      "type": "ROOM",
      "short": "火焰山",
      "exits": {
        "northwest": "/d/qujing/firemount/shanwai",
        "eastdown": "/d/qujing/firemount/shanbian"
      }
    },
    "/d/qujing/firemount/nonamemo": {
      "type": "ROOM",
      "short": "无名小山",
      "exits": {
        "southdown": "/d/qujing/firemount/southside1",
        "eastdown": "/d/qujing/firemount/nonameroad4"
      }
    },
    "/d/qujing/firemount/nonamero": {
      "type": "ROOM",
      "short": "无名小路",
      "exits": {
        "westup": "/d/qujing/firemount/nonamemount",
        "northdown": "/d/qujing/firemount/nonameroad3"
      }
    },
    "/d/qujing/firemount/qujinglu": {
      "type": "ROOM",
      "short": "取经路",
      "exits": {
        "northwest": "/d/qujing/firemount/luzhou3",
        "southeast": "/d/qujing/dudi/shanlu6"
      }
    },
    "/d/qujing/firemount/shalu": {
      "type": "ROOM",
      "short": "砂砾径",
      "exits": {
        "westup": "/d/qujing/firemount/shanbian",
        "east": "/d/qujing/firemount/shalu2",
        "southwest": "/d/qujing/firemount/wuming1"
      }
    },
    "/d/qujing/firemount/shalu2": {
      "type": "ROOM",
      "short": "砂砾径",
      "exits": {
        "west": "/d/qujing/firemount/shalu",
        "east": "/d/qujing/firemount/luzhou"
      }
    },
    "/d/qujing/firemount/shanbian": {
      "type": "ROOM",
      "short": "山边",
      "objects": {
        "/d/sea/npc/long8.c": 1
      },
      "exits": {
        "westup": "/d/qujing/firemount/huoyan",
        "eastdown": "/d/qujing/firemount/shalu"
      }
    },
    "/d/qujing/firemount/shanwai": {
      "type": "ROOM",
      "short": "山外小路",
      "exits": {
        "northdown": "/d/qujing/firemount/hongyan",
        "southeast": "/d/qujing/firemount/huoyan"
      }
    },
    "/d/qujing/firemount/shimen": {
      "type": "ROOM",
      "short": "石洞门",
      "exits": {
        "west": "/d/qujing/firemount/dongkou"
      }
    },
    "/d/qujing/firemount/south1": {
      "type": "ROOM",
      "short": "小山南坡",
      "objects": {
        "/d/qujing/firemount/npc/bajiaoq": 1
      },
      "exits": {
        "southdown": "/d/qujing/firemount/south2",
        "northup": "/d/qujing/firemount/wuming"
      }
    },
    "/d/qujing/firemount/south2": {
      "type": "ROOM",
      "short": "小山南坡",
      "objects": {
        "/d/qujing/firemount/npc/qiaofu": 1
      },
      "exits": {
        "southeast": "/d/qujing/firemount/xiaomiao",
        "northup": "/d/qujing/firemount/south1",
        "southdown": "/d/qujing/firemount/south3"
      }
    },
    "/d/qujing/firemount/south3": {
      "type": "ROOM",
      "short": "山脚",
      "exits": {
        "northeast": "/d/qujing/firemount/xiaomiao",
        "south": "/d/qujing/firemount/cuiyun5",
        "northup": "/d/qujing/firemount/south2"
      }
    },
    "/d/qujing/firemount/southsid": {
      "type": "ROOM",
      "short": "山脚",
      "exits": {
        "northeast": "/d/qujing/firemount/xiaomiao",
        "south": "/d/qujing/firemount/cuiyunshan4",
        "northup": "/d/qujing/firemount/southside2"
      }
    },
    "/d/qujing/firemount/stonedoor": {
      "type": "ROOM",
      "short": "石洞门",
      "exits": {
        "west": "/d/qujing/firemount/dongkou"
      }
    },
    "/d/qujing/firemount/wuming": {
      "type": "ROOM",
      "short": "无名小山",
      "objects": {
        "/d/qujing/firemount/npc/bajiaoq": 1
      },
      "exits": {
        "southdown": "/d/qujing/firemount/south1",
        "eastdown": "/d/qujing/firemount/wuming4"
      }
    },
    "/d/qujing/firemount/wuming1": {
      "type": "ROOM",
      "short": "无名小路",
      "exits": {
        "northeast": "/d/qujing/firemount/shalu",
        "southwest": "/d/qujing/firemount/wuming2"
      }
    },
    "/d/qujing/firemount/wuming2": {
      "type": "ROOM",
      "short": "无名小路",
      "objects": {
        "/d/qujing/firemount/npc/bajiao": 1
      },
      "exits": {
        "northeast": "/d/qujing/firemount/wuming1",
        "southup": "/d/qujing/firemount/wuming3"
      }
    },
    "/d/qujing/firemount/wuming3": {
      "type": "ROOM",
      "short": "无名小路",
      "objects": {
        "/d/qujing/firemount/npc/bajiaob": 1
      },
      "exits": {
        "northdown": "/d/qujing/firemount/wuming2",
        "southup": "/d/qujing/firemount/wuming4"
      }
    },
    "/d/qujing/firemount/wuming4": {
      "type": "ROOM",
      "short": "无名小路",
      "objects": {
        "/d/qujing/firemount/npc/bajiaoq": 1
      },
      "exits": {
        "westup": "/d/qujing/firemount/wuming",
        "northdown": "/d/qujing/firemount/wuming3"
      }
    },
    "/d/qujing/firemount/xiaodian": {
      "type": "ROOM",
      "short": "小店",
      "exits": {
        "south": "/d/qujing/firemount/luzhou2"
      },
      "objects": {
        "/d/qujing/firemount/npc/vendor": 1
      }
    },
    "/d/qujing/firemount/xiaomiao": {
      "type": "ROOM",
      "short": "土地庙",
      "exits": {
        "northwest": "/d/qujing/firemount/south2",
        "southwest": "/d/qujing/firemount/south3"
      }
    },
    "/d/qujing/jilei/cangku": {
      "type": "ROOM",
      "short": "仓库",
      "exits": {
        "northeast": "/d/qujing/jilei/canting"
      }
    },
    "/d/qujing/jilei/canting": {
      "type": "ROOM",
      "short": "餐厅",
      "exits": {
        "east": "/d/qujing/jilei/dating",
        "southwest": "/d/qujing/jilei/cangku"
      },
      "objects": {
        "/d/qujing/jilei/npc/yao": 5,
        "/d/qujing/jilei/obj/rou": 3
      }
    },
    "/d/qujing/jilei/dating": {
      "type": "ROOM",
      "short": "大厅",
      "exits": {
        "west": "/d/qujing/jilei/canting",
        "northeast": "/d/qujing/jilei/shilang",
        "southeast": "/d/qujing/jilei/woshi"
      },
      "objects": {
        "/d/qujing/jilei/npc/yao": 5
      }
    },
    "/d/qujing/jilei/jilei1": {
      "type": "ROOM",
      "short": "积雷山",
      "exits": {
        "northeast": "/d/qujing/jilei/shan11",
        "southwest": "/d/qujing/jilei/jilei2",
        "southeast": "/d/qujing/jilei/jilei3"
      }
    },
    "/d/qujing/jilei/jilei2": {
      "type": "ROOM",
      "short": "积雷山",
      "exits": {
        "northeast": "/d/qujing/jilei/jilei1",
        "south": "/d/qujing/jilei/shidong"
      }
    },
    "/d/qujing/jilei/jilei3": {
      "type": "ROOM",
      "short": "积雷山",
      "exits": {
        "northwest": "/d/qujing/jilei/jilei1",
        "southwest": "/d/qujing/jilei/shidong"
      }
    },
    "/d/qujing/jilei/shan1": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "southeast": "/d/qujing/jilei/shan2",
        "west": "/d/qujing/jisaiguo/to-baoxiang5"
      }
    },
    "/d/qujing/jilei/shan10": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "west": "/d/qujing/jilei/shan9",
        "southup": "/d/qujing/jilei/shan11"
      }
    },
    "/d/qujing/jilei/shan11": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "northdown": "/d/qujing/jilei/shan10",
        "southwest": "/d/qujing/jilei/jilei1"
      }
    },
    "/d/qujing/jilei/shan2": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "northwest": "/d/qujing/jilei/shan1",
        "east": "/d/qujing/jilei/shan3"
      }
    },
    "/d/qujing/jilei/shan3": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "west": "/d/qujing/jilei/shan2",
        "southwest": "/d/qujing/jilei/shan5",
        "southeast": "/d/qujing/jilei/shan6"
      }
    },
    "/d/qujing/jilei/shan4": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "southwest": "/d/qujing/jilei/shan6",
        "east": "/d/qujing/firemount/hongyan"
      }
    },
    "/d/qujing/jilei/shan5": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "northeast": "/d/qujing/jilei/shan3",
        "southup": "/d/qujing/jilei/shan7"
      }
    },
    "/d/qujing/jilei/shan6": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "northwest": "/d/qujing/jilei/shan3",
        "northeast": "/d/qujing/jilei/shan4"
      }
    },
    "/d/qujing/jilei/shan7": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "northdown": "/d/qujing/jilei/shan5",
        "southwest": "/d/qujing/jilei/shan8"
      }
    },
    "/d/qujing/jilei/shan8": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "northeast": "/d/qujing/jilei/shan7",
        "southeast": "/d/qujing/jilei/shan9"
      }
    },
    "/d/qujing/jilei/shan9": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "northwest": "/d/qujing/jilei/shan8",
        "east": "/d/qujing/jilei/shan10"
      }
    },
    "/d/qujing/jilei/shidong": {
      "type": "ROOM",
      "short": "石洞门",
      "exits": {
        "north": "/d/qujing/jilei/jilei2",
        "northeast": "/d/qujing/jilei/jilei3",
        "southeast": "/d/qujing/jilei/shilang"
      }
    },
    "/d/qujing/jilei/shilang": {
      "type": "ROOM",
      "short": "石廊",
      "exits": {
        "northwest": "/d/qujing/jilei/shidong",
        "southwest": "/d/qujing/jilei/dating"
      },
      "objects": {
        "/d/qujing/jilei/npc/yao": 5
      }
    },
    "/d/qujing/jilei/woshi": {
      "type": "ROOM",
      "short": "卧室",
      "exits": {
        "northwest": "/d/qujing/jilei/dating"
      },
      "objects": {
        "/d/qujing/jilei/npc/yumian": 1,
        "/d/qujing/jilei/npc/niumo": 1,
        "/d/qujing/jilei/npc/jinjing": 1
      }
    },
    "/d/qujing/jindou/dongnei1": {
      "type": "ROOM",
      "short": "洞内",
      "exits": {
        "north": "/d/qujing/jindou/shidong",
        "southwest": "/d/qujing/jindou/dongnei3"
      },
      "objects": {
        "/d/qujing/jindou/npc/yao": 2
      }
    },
    "/d/qujing/jindou/dongnei2": {
      "type": "ROOM",
      "short": "洞内",
      "exits": {
        "east": "/d/qujing/jindou/dongnei3",
        "south": "/d/qujing/jindou/dongnei4"
      },
      "objects": {
        "/d/qujing/jindou/npc/yao": 2
      }
    },
    "/d/qujing/jindou/dongnei3": {
      "type": "ROOM",
      "short": "洞内",
      "exits": {
        "northeast": "/d/qujing/jindou/dongnei1",
        "west": "/d/qujing/jindou/dongnei2",
        "southwest": "/d/qujing/jindou/dongnei4"
      },
      "objects": {
        "/d/qujing/jindou/npc/yao": 4,
        "/d/qujing/jindou/npc/dujiao": 1
      }
    },
    "/d/qujing/jindou/dongnei4": {
      "type": "ROOM",
      "short": "洞内",
      "exits": {
        "north": "/d/qujing/jindou/dongnei2",
        "northeast": "/d/qujing/jindou/dongnei3"
      },
      "objects": {
        "/d/qujing/jindou/npc/yao": 2,
        "/d/qujing/jindou/obj/rou": 3
      }
    },
    "/d/qujing/jindou/jindou1": {
      "type": "ROOM",
      "short": "金兜山",
      "exits": {
        "south": "/d/qujing/jindou/shanshi1",
        "southwest": "/d/qujing/jindou/shanlu2"
      },
      "objects": {
        "/d/qujing/jindou/npc/yao": 2
      }
    },
    "/d/qujing/jindou/jindou2": {
      "type": "ROOM",
      "short": "金兜山",
      "exits": {
        "northwest": "/d/qujing/jindou/shanshi2",
        "south": "/d/qujing/jindou/jindou4"
      },
      "objects": {
        "/d/qujing/jindou/npc/yao": 2
      }
    },
    "/d/qujing/jindou/jindou3": {
      "type": "ROOM",
      "short": "金兜山",
      "exits": {
        "eastdown": "/d/qujing/jindou/shanlu8",
        "southwest": "/d/qujing/jindou/jindou4"
      },
      "objects": {
        "/d/qujing/jindou/npc/yao": 2
      }
    },
    "/d/qujing/jindou/jindou4": {
      "type": "ROOM",
      "short": "金兜山",
      "exits": {
        "north": "/d/qujing/jindou/jindou2",
        "northeast": "/d/qujing/jindou/jindou3"
      },
      "objects": {
        "/d/qujing/jindou/npc/yao": 2
      }
    },
    "/d/qujing/jindou/shanlu1": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "east": "/d/qujing/jindou/shanlu2",
        "southwest": "/d/qujing/jindou/shanlu3"
      }
    },
    "/d/qujing/jindou/shanlu2": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "west": "/d/qujing/jindou/shanlu1",
        "northeast": "/d/qujing/jindou/jindou1"
      }
    },
    "/d/qujing/jindou/shanlu3": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "southdown": "/d/qujing/jindou/shanlu7",
        "northeast": "/d/qujing/jindou/shanlu1"
      }
    },
    "/d/qujing/jindou/shanlu4": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "east": "/d/qujing/jindou/shanlu5",
        "southwest": "/d/qujing/jindou/shanlu8"
      }
    },
    "/d/qujing/jindou/shanlu5": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "east": "/d/qujing/tongtian/xiaolu1",
        "west": "/d/qujing/jindou/shanlu4"
      }
    },
    "/d/qujing/jindou/shanlu6": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northwest": "/d/qujing/nuerguo/start",
        "eastup": "/d/qujing/jindou/shanlu7"
      }
    },
    "/d/qujing/jindou/shanlu7": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northup": "/d/qujing/jindou/shanlu3",
        "westdown": "/d/qujing/jindou/shanlu6"
      }
    },
    "/d/qujing/jindou/shanlu8": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "westup": "/d/qujing/jindou/jindou3",
        "northeast": "/d/qujing/jindou/shanlu4"
      }
    },
    "/d/qujing/jindou/shanshi1": {
      "type": "ROOM",
      "short": "山石冈",
      "exits": {
        "north": "/d/qujing/jindou/jindou1",
        "southeast": "/d/qujing/jindou/shanshi2"
      }
    },
    "/d/qujing/jindou/shanshi2": {
      "type": "ROOM",
      "short": "山石冈",
      "exits": {
        "northwest": "/d/qujing/jindou/shanshi1",
        "southeast": "/d/qujing/jindou/jindou2",
        "southwest": "/d/qujing/jindou/shidong"
      }
    },
    "/d/qujing/jindou/shidong": {
      "type": "ROOM",
      "short": "石洞",
      "exits": {
        "northeast": "/d/qujing/jindou/shanshi2",
        "south": "/d/qujing/jindou/dongnei1"
      },
      "objects": {
        "/d/qujing/jindou/npc/yao": 2
      }
    },
    "/d/qujing/jingjiling/bolin": {
      "type": "ROOM",
      "short": "柏林",
      "objects": {
        "/d/qujing/jingjiling/npc/bo": 1
      },
      "exits": {
        "west": "/d/qujing/jingjiling/xinglin",
        "northwest": "/d/qujing/jingjiling/shiya",
        "southwest": "/d/qujing/jingjiling/zhulin"
      }
    },
    "/d/qujing/jingjiling/huilin": {
      "type": "ROOM",
      "short": "桧林",
      "objects": {
        "/d/qujing/jingjiling/npc/hui": 1
      },
      "exits": {
        "southeast": "/d/qujing/jingjiling/songlin",
        "east": "/d/qujing/jingjiling/xinglin",
        "northeast": "/d/qujing/jingjiling/shiya"
      }
    },
    "/d/qujing/jingjiling/jingji1": {
      "type": "ROOM",
      "short": "荆棘岭",
      "objects": {},
      "exits": {
        "east": "/d/qujing/bibotan/yangchang1"
      }
    },
    "/d/qujing/jingjiling/jingji2": {
      "type": "ROOM",
      "short": "荆棘岭",
      "objects": {},
      "exits": {
        "eastdown": "/d/qujing/jingjiling/jingji1"
      }
    },
    "/d/qujing/jingjiling/jingji3": {
      "type": "ROOM",
      "short": "荆棘岭",
      "objects": {},
      "exits": {
        "northeast": "/d/qujing/jingjiling/jingji2"
      }
    },
    "/d/qujing/jingjiling/jingji4": {
      "type": "ROOM",
      "short": "荆棘岭",
      "objects": {},
      "exits": {
        "east": "/d/qujing/jingjiling/jingji3"
      }
    },
    "/d/qujing/jingjiling/jingji5": {
      "type": "ROOM",
      "short": "荆棘岭",
      "objects": {},
      "exits": {
        "southeast": "/d/qujing/jingjiling/jingji4"
      }
    },
    "/d/qujing/jingjiling/jingji6": {
      "type": "ROOM",
      "short": "荆棘岭",
      "objects": {},
      "exits": {
        "eastdown": "/d/qujing/jingjiling/jingji5"
      }
    },
    "/d/qujing/jingjiling/jingji7": {
      "type": "ROOM",
      "short": "荆棘岭",
      "objects": {},
      "exits": {
        "southeast": "/d/qujing/jingjiling/jingji6"
      }
    },
    "/d/qujing/jingjiling/jingji8": {
      "type": "ROOM",
      "short": "荆棘岭",
      "objects": {},
      "exits": {
        "eastdown": "/d/qujing/jingjiling/jingji7"
      }
    },
    "/d/qujing/jingjiling/ping": {
      "type": "ROOM",
      "short": "萝藤坪",
      "objects": {
        "/d/qujing/jingjiling/npc/guard": 1
      },
      "exits": {
        "north": "/d/qujing/jingjiling/jingji8",
        "southup": "/d/qujing/jingjiling/shiya"
      }
    },
    "/d/qujing/jingjiling/shiya": {
      "type": "ROOM",
      "short": "石崖",
      "objects": {},
      "exits": {
        "northdown": "/d/qujing/jingjiling/ping",
        "southwest": "/d/qujing/jingjiling/huilin",
        "southeast": "/d/qujing/jingjiling/bolin",
        "south": "/d/qujing/jingjiling/xinglin"
      }
    },
    "/d/qujing/jingjiling/songlin": {
      "type": "ROOM",
      "short": "松林",
      "objects": {
        "/d/qujing/jingjiling/npc/song": 1
      },
      "exits": {
        "east": "/d/qujing/jingjiling/zhulin",
        "northwest": "/d/qujing/jingjiling/huilin",
        "northeast": "/d/qujing/jingjiling/xinglin"
      }
    },
    "/d/qujing/jingjiling/xinglin": {
      "type": "ROOM",
      "short": "杏林",
      "objects": {
        "/d/qujing/jingjiling/npc/xing": 1
      },
      "exits": {
        "north": "/d/qujing/jingjiling/shiya",
        "east": "/d/qujing/jingjiling/bolin",
        "west": "/d/qujing/jingjiling/huilin",
        "southeast": "/d/qujing/jingjiling/zhulin",
        "southwest": "/d/qujing/jingjiling/songlin"
      }
    },
    "/d/qujing/jingjiling/yangchang1": {
      "type": "ROOM",
      "short": "羊肠小路",
      "objects": {
        "/d/qujing/jingjiling/npc/hunter": 2
      },
      "exits": {
        "south": "/d/qujing/jingjiling/shipo3",
        "northwest": "/d/qujing/jingjiling/yangchang2",
        "west": "/d/qujing/jingjiling/jingji1"
      }
    },
    "/d/qujing/jingjiling/zhulin": {
      "type": "ROOM",
      "short": "竹林",
      "objects": {
        "/d/qujing/jingjiling/npc/zhu": 1
      },
      "exits": {
        "west": "/d/qujing/jingjiling/songlin",
        "northwest": "/d/qujing/jingjiling/xinglin",
        "northeast": "/d/qujing/jingjiling/bolin"
      }
    },
    "/d/qujing/jinping/cunlu1": {
      "type": "ROOM",
      "short": "村路",
      "exits": {
        "north": "/d/qujing/qinglong/shanlu7",
        "west": "/d/qujing/tianzhu/shan5",
        "southeast": "/d/qujing/jinping/cunlu2"
      }
    },
    "/d/qujing/jinping/cunlu2": {
      "type": "ROOM",
      "short": "村路",
      "exits": {
        "northwest": "/d/qujing/jinping/cunlu1",
        "southeast": "/d/qujing/jinping/qiaobei"
      }
    },
    "/d/qujing/jinping/cunlu3": {
      "type": "ROOM",
      "short": "村路",
      "exits": {
        "northwest": "/d/qujing/jinping/xiaojie7",
        "southeast": "/d/qujing/jinping/cunlu4"
      }
    },
    "/d/qujing/jinping/cunlu4": {
      "type": "ROOM",
      "short": "村路",
      "exits": {
        "northwest": "/d/qujing/jinping/cunlu3",
        "southeast": "/d/qujing/jinping/cunlu5"
      }
    },
    "/d/qujing/jinping/cunlu5": {
      "type": "ROOM",
      "short": "村路",
      "exits": {
        "northwest": "/d/qujing/jinping/cunlu4",
        "south": "/d/qujing/jinping/cunlu6"
      }
    },
    "/d/qujing/jinping/cunlu6": {
      "type": "ROOM",
      "short": "村路",
      "exits": {
        "north": "/d/qujing/jinping/cunlu5",
        "south": "/d/qujing/jinping/cunlu7",
        "eastup": "/d/qujing/jinping/shanmen"
      }
    },
    "/d/qujing/jinping/cunlu7": {
      "type": "ROOM",
      "short": "村路",
      "exits": {
        "north": "/d/qujing/jinping/cunlu6",
        "southeast": "/d/qujing/jinping/cunlu8"
      }
    },
    "/d/qujing/jinping/cunlu8": {
      "type": "ROOM",
      "short": "村路",
      "exits": {
        "northwest": "/d/qujing/jinping/cunlu7",
        "southeast": "/d/qujing/jinping/cunlu9"
      }
    },
    "/d/qujing/jinping/cunlu9": {
      "type": "ROOM",
      "short": "村路",
      "exits": {
        "northwest": "/d/qujing/jinping/cunlu8",
        "southeast": "/d/qujing/yuhua/xiaolu3"
      }
    },
    "/d/qujing/jinping/datang": {
      "type": "ROOM",
      "short": "大堂",
      "exits": {
        "north": "/d/qujing/jinping/fumen"
      },
      "objects": {
        "/d/qujing/jinping/npc/guan": 2,
        "/d/qujing/jinping/npc/fuling": 1
      }
    },
    "/d/qujing/jinping/fumen": {
      "type": "ROOM",
      "short": "府门",
      "exits": {
        "east": "/d/qujing/jinping/xiaojie4",
        "south": "/d/qujing/jinping/datang"
      },
      "objects": {
        "/d/qujing/jinping/npc/guan": 1
      }
    },
    "/d/qujing/jinping/huayuan1": {
      "type": "ROOM",
      "short": "花园",
      "exits": {
        "east": "/d/qujing/jinping/huayuan2",
        "south": "/d/qujing/jinping/zheng"
      }
    },
    "/d/qujing/jinping/huayuan2": {
      "type": "ROOM",
      "short": "花园",
      "exits": {
        "west": "/d/qujing/jinping/huayuan1",
        "south": "/d/qujing/jinping/huayuan3"
      }
    },
    "/d/qujing/jinping/huayuan3": {
      "type": "ROOM",
      "short": "花园",
      "exits": {
        "north": "/d/qujing/jinping/huayuan2",
        "west": "/d/qujing/jinping/zheng",
        "east": "/d/qujing/jinping/xiaolu"
      }
    },
    "/d/qujing/jinping/jimiao": {
      "type": "ROOM",
      "short": "祭庙",
      "exits": {
        "west": "/d/qujing/jinping/xiaojie2"
      },
      "objects": {
        "/d/qujing/jinping/npc/keeper": 1
      }
    },
    "/d/qujing/jinping/kedian": {
      "type": "ROOM",
      "short": "客店",
      "exits": {
        "north": "/d/qujing/jinping/xiaojie5"
      },
      "objects": {
        "/d/qujing/jinping/npc/dianzhu": 1
      }
    },
    "/d/qujing/jinping/minju1": {
      "type": "ROOM",
      "short": "民居",
      "exits": {
        "south": "/d/qujing/jinping/xiaojie1"
      },
      "objects": {
        "/d/qujing/jinping/npc/people": 1,
        "/d/qujing/jinping/obj/pot": 1
      }
    },
    "/d/qujing/jinping/minju2": {
      "type": "ROOM",
      "short": "民居",
      "exits": {
        "west": "/d/qujing/jinping/xiaojie1"
      },
      "objects": {
        "/d/qujing/jinping/npc/people": 1,
        "/d/qujing/jinping/obj/pot": 1
      }
    },
    "/d/qujing/jinping/minju3": {
      "type": "ROOM",
      "short": "民居",
      "exits": {
        "south": "/d/qujing/jinping/xiaojie6"
      },
      "objects": {
        "/d/qujing/jinping/npc/people": 1,
        "/d/qujing/jinping/obj/pot": 1
      }
    },
    "/d/qujing/jinping/minju4": {
      "type": "ROOM",
      "short": "民居",
      "exits": {
        "west": "/d/qujing/jinping/xiaojie3"
      },
      "objects": {
        "/d/qujing/jinping/npc/people": 1,
        "/d/qujing/jinping/obj/pot": 1
      }
    },
    "/d/qujing/jinping/qian": {
      "type": "ROOM",
      "short": "前殿",
      "exits": {
        "west": "/d/qujing/jinping/shanmen",
        "east": "/d/qujing/jinping/zheng"
      },
      "objects": {
        "/d/qujing/jinping/npc/monk": 2
      }
    },
    "/d/qujing/jinping/qiao": {
      "type": "ROOM",
      "short": "金灯桥",
      "exits": {
        "north": "/d/qujing/jinping/qiaobei",
        "south": "/d/qujing/jinping/qiaonan"
      },
      "objects": {
        "/d/qujing/jinping/obj/gang": 3,
        "/d/qujing/jinping/npc/dengguan": 1
      }
    },
    "/d/qujing/jinping/qiaobei": {
      "type": "ROOM",
      "short": "桥北",
      "exits": {
        "northwest": "/d/qujing/jinping/cunlu2",
        "south": "/d/qujing/jinping/qiao"
      }
    },
    "/d/qujing/jinping/qiaonan": {
      "type": "ROOM",
      "short": "桥南",
      "exits": {
        "north": "/d/qujing/jinping/qiao",
        "south": "/d/qujing/jinping/xiaojie2"
      }
    },
    "/d/qujing/jinping/shanmen": {
      "type": "ROOM",
      "short": "山门",
      "exits": {
        "westdown": "/d/qujing/jinping/cunlu6",
        "east": "/d/qujing/jinping/qian"
      }
    },
    "/d/qujing/jinping/xiaojie1": {
      "type": "ROOM",
      "short": "小街",
      "exits": {
        "north": "/d/qujing/jinping/minju1",
        "east": "/d/qujing/jinping/minju2",
        "south": "/d/qujing/jinping/xiaojie3"
      },
      "objects": {
        "/d/qujing/jinping/npc/people": 1
      }
    },
    "/d/qujing/jinping/xiaojie2": {
      "type": "ROOM",
      "short": "小街",
      "exits": {
        "north": "/d/qujing/jinping/qiaonan",
        "east": "/d/qujing/jinping/jimiao",
        "south": "/d/qujing/jinping/xiaojie4"
      },
      "objects": {
        "/d/qujing/jinping/npc/people": 1
      }
    },
    "/d/qujing/jinping/xiaojie3": {
      "type": "ROOM",
      "short": "小街",
      "exits": {
        "north": "/d/qujing/jinping/xiaojie1",
        "east": "/d/qujing/jinping/minju4",
        "south": "/d/qujing/jinping/xiaojie7"
      },
      "objects": {
        "/d/qujing/jinping/npc/people": 1
      }
    },
    "/d/qujing/jinping/xiaojie4": {
      "type": "ROOM",
      "short": "小街",
      "exits": {
        "north": "/d/qujing/jinping/xiaojie2",
        "west": "/d/qujing/jinping/fumen",
        "east": "/d/qujing/jinping/xiaojie5"
      },
      "objects": {
        "/d/qujing/jinping/npc/people": 1
      }
    },
    "/d/qujing/jinping/xiaojie5": {
      "type": "ROOM",
      "short": "小街",
      "exits": {
        "west": "/d/qujing/jinping/xiaojie4",
        "east": "/d/qujing/jinping/xiaojie6",
        "south": "/d/qujing/jinping/kedian"
      },
      "objects": {
        "/d/qujing/jinping/npc/people": 1
      }
    },
    "/d/qujing/jinping/xiaojie6": {
      "type": "ROOM",
      "short": "小街",
      "exits": {
        "north": "/d/qujing/jinping/minju3",
        "west": "/d/qujing/jinping/xiaojie5",
        "east": "/d/qujing/jinping/xiaojie7"
      },
      "objects": {
        "/d/qujing/jinping/npc/people": 1
      }
    },
    "/d/qujing/jinping/xiaojie7": {
      "type": "ROOM",
      "short": "小街",
      "exits": {
        "west": "/d/qujing/jinping/xiaojie6",
        "north": "/d/qujing/jinping/xiaojie3",
        "southeast": "/d/qujing/jinping/cunlu3"
      },
      "objects": {
        "/d/qujing/jinping/npc/people": 1
      }
    },
    "/d/qujing/jinping/xiaolu": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "west": "/d/qujing/jinping/huayuan3",
        "southeast": "/d/qujing/jinping/zhai"
      }
    },
    "/d/qujing/jinping/zhai": {
      "type": "ROOM",
      "short": "斋房",
      "exits": {
        "northwest": "/d/qujing/jinping/xiaolu"
      },
      "objects": {
        "/d/qujing/jinping/npc/monk": 2
      }
    },
    "/d/qujing/jinping/zheng": {
      "type": "ROOM",
      "short": "正殿",
      "exits": {
        "west": "/d/qujing/jinping/qian",
        "north": "/d/qujing/jinping/huayuan1",
        "east": "/d/qujing/jinping/huayuan3"
      },
      "objects": {
        "/d/qujing/jinping/npc/monk": 2
      }
    },
    "/d/qujing/jisaiguo/bamboo": {
      "type": "ROOM",
      "short": "南湾竹屋",
      "objects": {
        "/d/qujing/jisaiguo/npc/huoji": 1
      },
      "exits": {
        "north": "/d/qujing/jisaiguo/eastmarket"
      }
    },
    "/d/qujing/jisaiguo/baodian": {
      "type": "ROOM",
      "short": "大雄宝殿",
      "objects": {
        "/d/qujing/jisaiguo/npc/kusu": 1
      },
      "exits": {
        "southdown": "/d/qujing/jisaiguo/inner3"
      }
    },
    "/d/qujing/jisaiguo/centermarket": {
      "type": "ROOM",
      "short": "中市",
      "objects": {
        "/d/qujing/jisaiguo/npc/xiaofan": 1
      },
      "exits": {
        "west": "/d/qujing/jisaiguo/westmarket",
        "east": "/d/qujing/jisaiguo/eastmarket",
        "south": "/d/qujing/jisaiguo/restaurant",
        "northup": "/d/qujing/jisaiguo/yunqi"
      }
    },
    "/d/qujing/jisaiguo/cha": {
      "type": "ROOM",
      "short": "茶室",
      "objects": {
        "/d/qujing/jisaiguo/obj/qingzhutong": 1
      },
      "exits": {
        "east": "/d/qujing/jisaiguo/inner3"
      }
    },
    "/d/qujing/jisaiguo/crosseast": {
      "type": "ROOM",
      "short": "路口",
      "objects": {
        "/d/qujing/jisaiguo/npc/laoban": 1
      },
      "exits": {
        "west": "/d/qujing/jisaiguo/eastmarket",
        "east": "/d/qujing/jisaiguo/eastgate",
        "south": "/d/qujing/jisaiguo/east1"
      }
    },
    "/d/qujing/jisaiguo/crosswest": {
      "type": "ROOM",
      "short": "路口",
      "objects": {
        "/d/qujing/jisaiguo/npc/shusheng": 1,
        "/d/qujing/jisaiguo/npc/qiaofu": 1
      },
      "exits": {
        "west": "/d/qujing/jisaiguo/westgate",
        "east": "/d/qujing/jisaiguo/westmarket",
        "south": "/d/qujing/jisaiguo/west1"
      }
    },
    "/d/qujing/jisaiguo/east1": {
      "type": "ROOM",
      "short": "金光寺东街",
      "exits": {
        "north": "/d/qujing/jisaiguo/crosseast",
        "south": "/d/qujing/jisaiguo/east2"
      }
    },
    "/d/qujing/jisaiguo/east2": {
      "type": "ROOM",
      "short": "金光寺东街",
      "exits": {
        "north": "/d/qujing/jisaiguo/east1",
        "south": "/d/qujing/jisaiguo/east3"
      }
    },
    "/d/qujing/jisaiguo/east3": {
      "type": "ROOM",
      "short": "金光寺东街",
      "exits": {
        "north": "/d/qujing/jisaiguo/east2",
        "south": "/d/qujing/jisaiguo/east4"
      }
    },
    "/d/qujing/jisaiguo/east4": {
      "type": "ROOM",
      "short": "金光寺东街",
      "exits": {
        "north": "/d/qujing/jisaiguo/east3",
        "west": "/d/qujing/jisaiguo/south2"
      }
    },
    "/d/qujing/jisaiguo/eastgate": {
      "type": "ROOM",
      "short": "祭赛国东门",
      "objects": {
        "/d/qujing/jisaiguo/npc/guard": 2
      },
      "exits": {
        "west": "/d/qujing/jisaiguo/crosseast",
        "east": "/d/qujing/jisaiguo/to-baoxiang1"
      }
    },
    "/d/qujing/jisaiguo/eastmarket": {
      "type": "ROOM",
      "short": "东市",
      "exits": {
        "west": "/d/qujing/jisaiguo/centermarket",
        "east": "/d/qujing/jisaiguo/crosseast",
        "south": "/d/qujing/jisaiguo/bamboo"
      }
    },
    "/d/qujing/jisaiguo/gate": {
      "type": "ROOM",
      "short": "金光寺",
      "exits": {
        "north": "/d/qujing/jisaiguo/inner1",
        "west": "/d/qujing/jisaiguo/south1",
        "east": "/d/qujing/jisaiguo/south2"
      }
    },
    "/d/qujing/jisaiguo/inner1": {
      "type": "ROOM",
      "short": "大院",
      "objects": {
        "/d/qujing/jisaiguo/npc/oldmonk": 1
      },
      "exits": {
        "north": "/d/qujing/jisaiguo/inner2",
        "south": "/d/qujing/jisaiguo/gate"
      }
    },
    "/d/qujing/jisaiguo/inner2": {
      "type": "ROOM",
      "short": "中院",
      "objects": {
        "/d/qujing/jisaiguo/npc/heshang": 1
      },
      "exits": {
        "north": "/d/qujing/jisaiguo/inner3",
        "south": "/d/qujing/jisaiguo/inner1",
        "east": "/d/qujing/jisaiguo/jing",
        "west": "/d/qujing/jisaiguo/xiang"
      }
    },
    "/d/qujing/jisaiguo/inner3": {
      "type": "ROOM",
      "short": "后院",
      "objects": {
        "/d/qujing/jisaiguo/npc/shaodi": 1
      },
      "exits": {
        "northup": "/d/qujing/jisaiguo/baodian",
        "south": "/d/qujing/jisaiguo/inner2",
        "east": "/d/qujing/jisaiguo/zai",
        "west": "/d/qujing/jisaiguo/cha"
      }
    },
    "/d/qujing/jisaiguo/jing": {
      "type": "ROOM",
      "short": "经堂",
      "exits": {
        "west": "/d/qujing/jisaiguo/inner2"
      }
    },
    "/d/qujing/jisaiguo/pingxi": {
      "type": "ROOM",
      "short": "平西大路",
      "exits": {
        "east": "/d/qujing/jisaiguo/westgate",
        "west": "/d/qujing/jisaiguo/pingxi1",
        "southwest": "/d/qujing/bibotan/yangchang3"
      }
    },
    "/d/qujing/jisaiguo/pingxi1": {
      "type": "ROOM",
      "short": "平西大路",
      "exits": {
        "east": "/d/qujing/jisaiguo/pingxi",
        "northwest": "/d/qujing/xiaoxitian/lindao6"
      }
    },
    "/d/qujing/jisaiguo/restaurant": {
      "type": "ROOM",
      "short": "羊肉店",
      "objects": {
        "/d/qujing/jisaiguo/npc/samui": 1
      },
      "exits": {
        "north": "/d/qujing/jisaiguo/centermarket"
      }
    },
    "/d/qujing/jisaiguo/silver": {
      "type": "ROOM",
      "short": "银器铺",
      "objects": {
        "/d/qujing/jisaiguo/npc/ayina": 1
      },
      "exits": {
        "north": "/d/qujing/jisaiguo/westmarket"
      }
    },
    "/d/qujing/jisaiguo/south1": {
      "type": "ROOM",
      "short": "金光寺南街",
      "exits": {
        "west": "/d/qujing/jisaiguo/west4",
        "east": "/d/qujing/jisaiguo/gate"
      }
    },
    "/d/qujing/jisaiguo/south2": {
      "type": "ROOM",
      "short": "金光寺南街",
      "exits": {
        "west": "/d/qujing/jisaiguo/gate",
        "east": "/d/qujing/jisaiguo/east4"
      }
    },
    "/d/qujing/jisaiguo/to-baoxiang1": {
      "type": "ROOM",
      "short": "土路",
      "exits": {
        "west": "/d/qujing/jisaiguo/eastgate",
        "northeast": "/d/qujing/jisaiguo/to-baoxiang2"
      }
    },
    "/d/qujing/jisaiguo/to-baoxiang2": {
      "type": "ROOM",
      "short": "土路",
      "exits": {
        "southwest": "/d/qujing/jisaiguo/to-baoxiang1",
        "east": "/d/qujing/jisaiguo/to-baoxiang3"
      }
    },
    "/d/qujing/jisaiguo/to-baoxiang3": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "west": "/d/qujing/jisaiguo/to-baoxiang2",
        "eastup": "/d/qujing/jisaiguo/to-baoxiang4"
      }
    },
    "/d/qujing/jisaiguo/to-baoxiang4": {
      "type": "ROOM",
      "short": "山路",
      "objects": {
        "/d/qujing/jisaiguo/npc/lingxuzi": 1
      },
      "exits": {
        "westdown": "/d/qujing/jisaiguo/to-baoxiang3",
        "southeast": "/d/qujing/jisaiguo/to-baoxiang5"
      }
    },
    "/d/qujing/jisaiguo/to-baoxiang5": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northwest": "/d/qujing/jisaiguo/to-baoxiang4",
        "east": "/d/qujing/jilei/shan1"
      }
    },
    "/d/qujing/jisaiguo/tower1": {
      "type": "ROOM",
      "short": "琉璃塔一层",
      "exits": {
        "up": "/d/qujing/jisaiguo/tower2"
      }
    },
    "/d/qujing/jisaiguo/tower10": {
      "type": "ROOM",
      "short": "琉璃塔十层",
      "exits": {
        "down": "/d/qujing/jisaiguo/tower9",
        "up": "/d/qujing/jisaiguo/tower11"
      }
    },
    "/d/qujing/jisaiguo/tower11": {
      "type": "ROOM",
      "short": "琉璃塔十一层",
      "exits": {
        "down": "/d/qujing/jisaiguo/tower10",
        "up": "/d/qujing/jisaiguo/tower12"
      }
    },
    "/d/qujing/jisaiguo/tower12": {
      "type": "ROOM",
      "short": "琉璃塔十二层",
      "exits": {
        "down": "/d/qujing/jisaiguo/tower11",
        "up": "/d/qujing/jisaiguo/tower13"
      }
    },
    "/d/qujing/jisaiguo/tower13": {
      "type": "ROOM",
      "short": "琉璃塔十三层",
      "objects": {
        "/d/qujing/jisaiguo/npc/baben": 1,
        "/d/qujing/jisaiguo/npc/benba": 1
      },
      "exits": {
        "down": "/d/qujing/jisaiguo/tower12"
      }
    },
    "/d/qujing/jisaiguo/tower2": {
      "type": "ROOM",
      "short": "琉璃塔二层",
      "exits": {
        "up": "/d/qujing/jisaiguo/tower3",
        "down": "/d/qujing/jisaiguo/tower1"
      }
    },
    "/d/qujing/jisaiguo/tower3": {
      "type": "ROOM",
      "short": "琉璃塔三层",
      "exits": {
        "down": "/d/qujing/jisaiguo/tower2",
        "up": "/d/qujing/jisaiguo/tower4"
      }
    },
    "/d/qujing/jisaiguo/tower4": {
      "type": "ROOM",
      "short": "琉璃塔四层",
      "exits": {
        "down": "/d/qujing/jisaiguo/tower3",
        "up": "/d/qujing/jisaiguo/tower5"
      }
    },
    "/d/qujing/jisaiguo/tower5": {
      "type": "ROOM",
      "short": "琉璃塔五层",
      "exits": {
        "down": "/d/qujing/jisaiguo/tower4",
        "up": "/d/qujing/jisaiguo/tower6"
      }
    },
    "/d/qujing/jisaiguo/tower6": {
      "type": "ROOM",
      "short": "琉璃塔六层",
      "exits": {
        "down": "/d/qujing/jisaiguo/tower5",
        "up": "/d/qujing/jisaiguo/tower7"
      }
    },
    "/d/qujing/jisaiguo/tower7": {
      "type": "ROOM",
      "short": "琉璃塔七层",
      "exits": {
        "down": "/d/qujing/jisaiguo/tower6",
        "up": "/d/qujing/jisaiguo/tower8"
      }
    },
    "/d/qujing/jisaiguo/tower8": {
      "type": "ROOM",
      "short": "琉璃塔八层",
      "exits": {
        "down": "/d/qujing/jisaiguo/tower7",
        "up": "/d/qujing/jisaiguo/tower9"
      }
    },
    "/d/qujing/jisaiguo/tower9": {
      "type": "ROOM",
      "short": "琉璃塔九层",
      "exits": {
        "down": "/d/qujing/jisaiguo/tower8",
        "up": "/d/qujing/jisaiguo/tower10"
      }
    },
    "/d/qujing/jisaiguo/west1": {
      "type": "ROOM",
      "short": "金光寺西街",
      "exits": {
        "north": "/d/qujing/jisaiguo/crosswest",
        "south": "/d/qujing/jisaiguo/west2"
      }
    },
    "/d/qujing/jisaiguo/west2": {
      "type": "ROOM",
      "short": "金光寺西街",
      "exits": {
        "north": "/d/qujing/jisaiguo/west1",
        "south": "/d/qujing/jisaiguo/west3"
      }
    },
    "/d/qujing/jisaiguo/west3": {
      "type": "ROOM",
      "short": "金光寺西街",
      "exits": {
        "north": "/d/qujing/jisaiguo/west2",
        "south": "/d/qujing/jisaiguo/west4"
      }
    },
    "/d/qujing/jisaiguo/west4": {
      "type": "ROOM",
      "short": "金光寺西街",
      "exits": {
        "north": "/d/qujing/jisaiguo/west3",
        "east": "/d/qujing/jisaiguo/south1"
      }
    },
    "/d/qujing/jisaiguo/westgate": {
      "type": "ROOM",
      "short": "祭赛国西门",
      "objects": {
        "/d/qujing/jisaiguo/npc/guard": 2
      },
      "exits": {
        "west": "/d/qujing/jisaiguo/pingxi",
        "east": "/d/qujing/jisaiguo/crosswest"
      }
    },
    "/d/qujing/jisaiguo/westmarket": {
      "type": "ROOM",
      "short": "西市",
      "exits": {
        "west": "/d/qujing/jisaiguo/crosswest",
        "east": "/d/qujing/jisaiguo/centermarket",
        "south": "/d/qujing/jisaiguo/silver",
        "north": "/d/qujing/jisaiguo/yaopu"
      }
    },
    "/d/qujing/jisaiguo/wufeng": {
      "type": "ROOM",
      "short": "五凤楼",
      "objects": {
        "/d/qujing/jisaiguo/npc/king": 1
      },
      "exits": {
        "south": "/d/qujing/jisaiguo/yunqi"
      }
    },
    "/d/qujing/jisaiguo/xiang": {
      "type": "ROOM",
      "short": "香堂",
      "exits": {
        "east": "/d/qujing/jisaiguo/inner2"
      }
    },
    "/d/qujing/jisaiguo/yaopu": {
      "type": "ROOM",
      "short": "药铺",
      "objects": {
        "/d/qujing/jisaiguo/npc/doctor": 1
      },
      "exits": {
        "south": "/d/qujing/jisaiguo/westmarket"
      }
    },
    "/d/qujing/jisaiguo/yunqi": {
      "type": "ROOM",
      "short": "云霁台",
      "objects": {
        "/d/qujing/jisaiguo/npc/guan": 2
      },
      "exits": {
        "southdown": "/d/qujing/jisaiguo/centermarket",
        "north": "/d/qujing/jisaiguo/wufeng"
      }
    },
    "/d/qujing/jisaiguo/zai": {
      "type": "ROOM",
      "short": "斋室",
      "objects": {
        "/d/qujing/jisaiguo/obj/tanggao": 1,
        "/d/qujing/jisaiguo/obj/xiangsu": 1,
        "/d/qujing/jisaiguo/obj/youshi": 1
      },
      "exits": {
        "west": "/d/qujing/jisaiguo/inner3"
      }
    },
    "/d/qujing/lingshan/baoge1": {
      "type": "ROOM",
      "short": "宝阁",
      "exits": {
        "up": "/d/qujing/lingshan/baoge2",
        "west": "/d/qujing/lingshan/daxiong"
      },
      "objects": {
        "/d/qujing/lingshan/npc/randeng": 1,
        "/d/qujing/lingshan/npc/xiantong": 2
      }
    },
    "/d/qujing/lingshan/baoge2": {
      "type": "ROOM",
      "short": "宝阁",
      "exits": {
        "down": "/d/qujing/lingshan/baoge1"
      },
      "objects": {
        "/d/qujing/lingshan/npc/xiantong": 2
      }
    },
    "/d/qujing/lingshan/dalu1": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "east": "/d/qujing/lingshan/dalu2",
        "south": "/d/qujing/lingshan/shanjiao"
      },
      "objects": {
        "/d/qujing/lingshan/npc/people": 1
      }
    },
    "/d/qujing/lingshan/dalu2": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "east": "/d/qujing/lingshan/dalu3",
        "west": "/d/qujing/lingshan/dalu1"
      },
      "objects": {
        "/d/qujing/lingshan/npc/people": 1
      }
    },
    "/d/qujing/lingshan/dalu3": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "west": "/d/qujing/lingshan/dalu2",
        "east": "/d/qujing/tianzhu/dalu1"
      },
      "objects": {
        "/d/qujing/lingshan/npc/people": 1
      }
    },
    "/d/qujing/lingshan/daxiong": {
      "type": "ROOM",
      "short": "大雄宝殿",
      "exits": {
        "north": "/d/qujing/lingshan/sanmen",
        "south": "/d/qujing/lingshan/houdian",
        "west": "/d/qujing/lingshan/zhenlou1",
        "east": "/d/qujing/lingshan/baoge1"
      },
      "objects": {
        "/d/qujing/lingshan/npc/rulai": 1,
        "/d/qujing/lingshan/npc/xiantong": 2
      }
    },
    "/d/qujing/lingshan/dumuqiao": {
      "type": "ROOM",
      "short": "独木桥",
      "exits": {
        "south": "/d/qujing/lingshan/lingyun2",
        "northwest": "/d/qujing/lingshan/lingyun1"
      }
    },
    "/d/qujing/lingshan/ermen": {
      "type": "ROOM",
      "short": "二门",
      "exits": {
        "north": "/d/qujing/lingshan/yimen",
        "south": "/d/qujing/lingshan/sanmen",
        "west": "/d/qujing/lingshan/sidian23",
        "east": "/d/qujing/lingshan/sidian25"
      },
      "objects": {
        "/d/qujing/lingshan/npc/jingang": 4
      }
    },
    "/d/qujing/lingshan/houdian": {
      "type": "ROOM",
      "short": "后殿",
      "exits": {
        "north": "/d/qujing/lingshan/daxiong"
      },
      "objects": {
        "/d/qujing/lingshan/npc/xiantong": 2
      }
    },
    "/d/qujing/lingshan/lingyun1": {
      "type": "ROOM",
      "short": "凌云渡",
      "exits": {
        "southeast": "/d/qujing/lingshan/dumuqiao",
        "westup": "/d/qujing/lingshan/shandian"
      }
    },
    "/d/qujing/lingshan/lingyun2": {
      "type": "ROOM",
      "short": "凌云渡",
      "exits": {
        "north": "/d/qujing/lingshan/dumuqiao",
        "southeast": "/d/qujing/lingshan/yang1"
      },
      "objects": {
        "/d/qujing/lingshan/npc/jieyin": 1
      }
    },
    "/d/qujing/lingshan/sanmen": {
      "type": "ROOM",
      "short": "三门",
      "exits": {
        "north": "/d/qujing/lingshan/ermen",
        "south": "/d/qujing/lingshan/daxiong",
        "west": "/d/qujing/lingshan/sidian33",
        "east": "/d/qujing/lingshan/sidian35"
      },
      "objects": {
        "/d/qujing/lingshan/npc/pusa": 8
      }
    },
    "/d/qujing/lingshan/shandian": {
      "type": "ROOM",
      "short": "灵山巅",
      "exits": {
        "eastdown": "/d/qujing/lingshan/lingyun1",
        "south": "/d/qujing/lingshan/siqian"
      },
      "objects": {
        "/d/qujing/lingshan/npc/youpo": 4
      }
    },
    "/d/qujing/lingshan/shanjiao": {
      "type": "ROOM",
      "short": "灵山脚",
      "exits": {
        "north": "/d/qujing/lingshan/dalu1",
        "westup": "/d/qujing/lingshan/yang3"
      },
      "objects": {
        "/d/qujing/lingshan/npc/jinding": 1
      }
    },
    "/d/qujing/lingshan/sidian11": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "east": "/d/qujing/lingshan/sidian12",
        "south": "/d/qujing/lingshan/sidian21"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian12": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "east": "/d/qujing/lingshan/sidian13",
        "west": "/d/qujing/lingshan/sidian11"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian13": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "east": "/d/qujing/lingshan/yimen",
        "west": "/d/qujing/lingshan/sidian12"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian15": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "east": "/d/qujing/lingshan/sidian16",
        "west": "/d/qujing/lingshan/yimen"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian16": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "east": "/d/qujing/lingshan/sidian17",
        "west": "/d/qujing/lingshan/sidian15"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian17": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "south": "/d/qujing/lingshan/sidian27",
        "west": "/d/qujing/lingshan/sidian16"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian21": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "east": "/d/qujing/lingshan/sidian22",
        "south": "/d/qujing/lingshan/sidian31",
        "north": "/d/qujing/lingshan/sidian11"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian22": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "east": "/d/qujing/lingshan/sidian23",
        "west": "/d/qujing/lingshan/sidian21"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian23": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "east": "/d/qujing/lingshan/ermen",
        "west": "/d/qujing/lingshan/sidian22"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian25": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "east": "/d/qujing/lingshan/sidian26",
        "west": "/d/qujing/lingshan/ermen"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian26": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "east": "/d/qujing/lingshan/sidian27",
        "west": "/d/qujing/lingshan/sidian25"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian27": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "north": "/d/qujing/lingshan/sidian17",
        "west": "/d/qujing/lingshan/sidian26",
        "south": "/d/qujing/lingshan/sidian37"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian31": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "east": "/d/qujing/lingshan/sidian32",
        "south": "/d/qujing/lingshan/sidian41",
        "north": "/d/qujing/lingshan/sidian21"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian32": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "east": "/d/qujing/lingshan/sidian33",
        "west": "/d/qujing/lingshan/sidian31"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian33": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "east": "/d/qujing/lingshan/sanmen",
        "west": "/d/qujing/lingshan/sidian32"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian35": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "east": "/d/qujing/lingshan/sidian36",
        "west": "/d/qujing/lingshan/sanmen"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian36": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "east": "/d/qujing/lingshan/sidian37",
        "west": "/d/qujing/lingshan/sidian35"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian37": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "north": "/d/qujing/lingshan/sidian27",
        "west": "/d/qujing/lingshan/sidian36",
        "south": "/d/qujing/lingshan/sidian47"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian41": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "north": "/d/qujing/lingshan/sidian31",
        "south": "/d/qujing/lingshan/sidian51"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian47": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "north": "/d/qujing/lingshan/sidian37",
        "south": "/d/qujing/lingshan/sidian57"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian51": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "north": "/d/qujing/lingshan/sidian41",
        "south": "/d/qujing/lingshan/sidian61"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian57": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "north": "/d/qujing/lingshan/sidian47",
        "south": "/d/qujing/lingshan/sidian67"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian61": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "north": "/d/qujing/lingshan/sidian51",
        "east": "/d/qujing/lingshan/sidian62",
        "south": "/d/qujing/lingshan/sidian71"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian62": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "west": "/d/qujing/lingshan/sidian61",
        "east": "/d/qujing/lingshan/sidian63"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian63": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "west": "/d/qujing/lingshan/sidian62",
        "east": "/d/qujing/lingshan/sidian64"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian64": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "west": "/d/qujing/lingshan/sidian63",
        "east": "/d/qujing/lingshan/sidian65"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian65": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "west": "/d/qujing/lingshan/sidian64",
        "east": "/d/qujing/lingshan/sidian66"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian66": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "west": "/d/qujing/lingshan/sidian65",
        "east": "/d/qujing/lingshan/sidian67"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian67": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "west": "/d/qujing/lingshan/sidian66",
        "north": "/d/qujing/lingshan/sidian57",
        "south": "/d/qujing/lingshan/sidian77"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian71": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "north": "/d/qujing/lingshan/sidian61",
        "east": "/d/qujing/lingshan/sidian72"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian72": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "west": "/d/qujing/lingshan/sidian71",
        "east": "/d/qujing/lingshan/sidian73"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian73": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "west": "/d/qujing/lingshan/sidian72",
        "east": "/d/qujing/lingshan/sidian74"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian74": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "west": "/d/qujing/lingshan/sidian73",
        "east": "/d/qujing/lingshan/sidian75"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian75": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "west": "/d/qujing/lingshan/sidian74",
        "east": "/d/qujing/lingshan/sidian76"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian76": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "west": "/d/qujing/lingshan/sidian75",
        "east": "/d/qujing/lingshan/sidian77"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/sidian77": {
      "type": "ROOM",
      "short": "寺殿",
      "exits": {
        "west": "/d/qujing/lingshan/sidian76",
        "north": "/d/qujing/lingshan/sidian67"
      },
      "objects": {
        "/d/qujing/lingshan/npc/monk": 1
      }
    },
    "/d/qujing/lingshan/siqian": {
      "type": "ROOM",
      "short": "寺前",
      "exits": {
        "north": "/d/qujing/lingshan/shandian",
        "south": "/d/qujing/lingshan/yimen"
      },
      "objects": {
        "/d/qujing/lingshan/npc/anuo": 1,
        "/d/qujing/lingshan/npc/jiaye": 1
      }
    },
    "/d/qujing/lingshan/yang1": {
      "type": "ROOM",
      "short": "阳明道",
      "exits": {
        "eastdown": "/d/qujing/lingshan/yang2",
        "northwest": "/d/qujing/lingshan/lingyun2"
      }
    },
    "/d/qujing/lingshan/yang2": {
      "type": "ROOM",
      "short": "阳明道",
      "exits": {
        "southdown": "/d/qujing/lingshan/yang4",
        "westup": "/d/qujing/lingshan/yang1"
      }
    },
    "/d/qujing/lingshan/yang3": {
      "type": "ROOM",
      "short": "阳明道",
      "exits": {
        "eastdown": "/d/qujing/lingshan/shanjiao",
        "southwest": "/d/qujing/lingshan/yang4"
      }
    },
    "/d/qujing/lingshan/yang4": {
      "type": "ROOM",
      "short": "阳明道",
      "exits": {
        "northeast": "/d/qujing/lingshan/yang3",
        "northup": "/d/qujing/lingshan/yang2"
      }
    },
    "/d/qujing/lingshan/yimen": {
      "type": "ROOM",
      "short": "一门",
      "exits": {
        "north": "/d/qujing/lingshan/siqian",
        "south": "/d/qujing/lingshan/ermen",
        "west": "/d/qujing/lingshan/sidian13",
        "east": "/d/qujing/lingshan/sidian15"
      },
      "objects": {
        "/d/qujing/lingshan/npc/biqiu": 2
      }
    },
    "/d/qujing/lingshan/zhenlou1": {
      "type": "ROOM",
      "short": "珍楼",
      "exits": {
        "east": "/d/qujing/lingshan/daxiong",
        "up": "/d/qujing/lingshan/zhenlou2"
      },
      "objects": {
        "/d/qujing/lingshan/npc/baixiong": 1,
        "/d/qujing/lingshan/npc/xiantong": 2
      }
    },
    "/d/qujing/lingshan/zhenlou2": {
      "type": "ROOM",
      "short": "珍楼",
      "exits": {
        "down": "/d/qujing/lingshan/zhenlou1"
      },
      "objects": {
        "/d/qujing/lingshan/obj/cha": 2,
        "/d/qujing/lingshan/obj/guo": 2,
        "/d/qujing/lingshan/npc/xiantong": 2
      }
    },
    "/d/qujing/maoying/andao1": {
      "type": "ROOM",
      "short": "暗道",
      "exits": {}
    },
    "/d/qujing/maoying/andao2": {
      "type": "ROOM",
      "short": "暗道",
      "exits": {}
    },
    "/d/qujing/maoying/andao3": {
      "type": "ROOM",
      "short": "暗道",
      "exits": {}
    },
    "/d/qujing/maoying/shanpo1": {
      "type": "ROOM",
      "short": "山坡",
      "exits": {
        "northeast": "/d/qujing/maoying/shilu5",
        "eastup": "/d/qujing/maoying/shanpo2",
        "southup": "/d/qujing/maoying/shanpo4",
        "southwest": "/d/qujing/maoying/shanpo3"
      }
    },
    "/d/qujing/maoying/shanpo10": {
      "type": "ROOM",
      "short": "山坡",
      "exits": {
        "northwest": "/d/qujing/maoying/shanpo8",
        "southwest": "/d/qujing/maoying/shanpo12"
      }
    },
    "/d/qujing/maoying/shanpo11": {
      "type": "ROOM",
      "short": "山坡",
      "exits": {
        "northwest": "/d/qujing/maoying/shanpo9",
        "southeast": "/d/qujing/maoying/shanpo13"
      }
    },
    "/d/qujing/maoying/shanpo12": {
      "type": "ROOM",
      "short": "山坡",
      "exits": {
        "northeast": "/d/qujing/maoying/shanpo10",
        "southup": "/d/qujing/maoying/shanpo16"
      }
    },
    "/d/qujing/maoying/shanpo13": {
      "type": "ROOM",
      "short": "山坡",
      "exits": {
        "northwest": "/d/qujing/maoying/shanpo11",
        "east": "/d/qujing/maoying/shanpo14"
      }
    },
    "/d/qujing/maoying/shanpo14": {
      "type": "ROOM",
      "short": "山坡",
      "exits": {
        "west": "/d/qujing/maoying/shanpo13",
        "east": "/d/qujing/maoying/shanpo15"
      }
    },
    "/d/qujing/maoying/shanpo15": {
      "type": "ROOM",
      "short": "山坡",
      "exits": {
        "west": "/d/qujing/maoying/shanpo14",
        "east": "/d/qujing/maoying/shanpo16"
      }
    },
    "/d/qujing/maoying/shanpo16": {
      "type": "ROOM",
      "short": "山坡",
      "exits": {
        "northdown": "/d/qujing/maoying/shanpo12",
        "west": "/d/qujing/maoying/shanpo15"
      }
    },
    "/d/qujing/maoying/shanpo2": {
      "type": "ROOM",
      "short": "山坡",
      "exits": {
        "westdown": "/d/qujing/maoying/shanpo1",
        "southeast": "/d/qujing/maoying/shanpo5"
      }
    },
    "/d/qujing/maoying/shanpo3": {
      "type": "ROOM",
      "short": "山坡",
      "exits": {
        "northeast": "/d/qujing/maoying/shanpo1",
        "southwest": "/d/qujing/maoying/shanpo7"
      }
    },
    "/d/qujing/maoying/shanpo4": {
      "type": "ROOM",
      "short": "山坡",
      "exits": {
        "northdown": "/d/qujing/maoying/shanpo1"
      }
    },
    "/d/qujing/maoying/shanpo5": {
      "type": "ROOM",
      "short": "山坡",
      "exits": {
        "northwest": "/d/qujing/maoying/shanpo2",
        "eastup": "/d/qujing/maoying/shanpo6"
      }
    },
    "/d/qujing/maoying/shanpo6": {
      "type": "ROOM",
      "short": "山坡",
      "exits": {
        "westdown": "/d/qujing/maoying/shanpo5",
        "southeast": "/d/qujing/maoying/shanpo8"
      }
    },
    "/d/qujing/maoying/shanpo7": {
      "type": "ROOM",
      "short": "山坡",
      "exits": {
        "northeast": "/d/qujing/maoying/shanpo3",
        "southup": "/d/qujing/maoying/shanpo9"
      }
    },
    "/d/qujing/maoying/shanpo8": {
      "type": "ROOM",
      "short": "山坡",
      "exits": {
        "northwest": "/d/qujing/maoying/shanpo6",
        "southeast": "/d/qujing/maoying/shanpo10"
      }
    },
    "/d/qujing/maoying/shanpo9": {
      "type": "ROOM",
      "short": "山坡",
      "exits": {
        "northdown": "/d/qujing/maoying/shanpo7",
        "southeast": "/d/qujing/maoying/shanpo11"
      }
    },
    "/d/qujing/maoying/shilu1": {
      "type": "ROOM",
      "short": "石路",
      "exits": {
        "southwest": "/d/qujing/maoying/shilu2",
        "north": "/d/qujing/tianzhu/dalu5"
      }
    },
    "/d/qujing/maoying/shilu2": {
      "type": "ROOM",
      "short": "石路",
      "exits": {
        "northeast": "/d/qujing/maoying/shilu1",
        "south": "/d/qujing/maoying/shilu3"
      }
    },
    "/d/qujing/maoying/shilu3": {
      "type": "ROOM",
      "short": "石路",
      "exits": {
        "north": "/d/qujing/maoying/shilu2",
        "southeast": "/d/qujing/maoying/shilu4"
      }
    },
    "/d/qujing/maoying/shilu4": {
      "type": "ROOM",
      "short": "石路",
      "exits": {
        "northwest": "/d/qujing/maoying/shilu2",
        "southeast": "/d/qujing/maoying/shilu5"
      }
    },
    "/d/qujing/maoying/shilu5": {
      "type": "ROOM",
      "short": "石路",
      "exits": {
        "northwest": "/d/qujing/maoying/shilu4",
        "southwest": "/d/qujing/maoying/shanpo1"
      }
    },
    "/d/qujing/maoying/tuxue1": {
      "type": "ROOM",
      "short": "兔穴",
      "exits": {
        "east": "/d/qujing/maoying/andao1",
        "southeast": "/d/qujing/maoying/andao2"
      }
    },
    "/d/qujing/maoying/tuxue2": {
      "type": "ROOM",
      "short": "兔穴",
      "exits": {
        "west": "/d/qujing/maoying/andao1",
        "southwest": "/d/qujing/maoying/andao3"
      }
    },
    "/d/qujing/maoying/tuxue3": {
      "type": "ROOM",
      "short": "兔穴",
      "exits": {
        "northeast": "/d/qujing/maoying/andao3",
        "northwest": "/d/qujing/maoying/andao2"
      }
    },
    "/d/qujing/nuerguo/annei": {
      "type": "ROOM",
      "short": "庵内",
      "exits": {
        "out": "/d/qujing/nuerguo/juxianan"
      },
      "objects": {
        "/d/qujing/nuerguo/npc/niuer": 1
      }
    },
    "/d/qujing/nuerguo/backhall": {
      "type": "ROOM",
      "short": "后宫",
      "exits": {
        "north": "/d/qujing/nuerguo/greenyard",
        "south": "/d/qujing/nuerguo/fronthall"
      },
      "objects": {
        "/d/qujing/nuerguo/npc/princess": 1,
        "/d/qujing/nuerguo/npc/girl": 1
      }
    },
    "/d/qujing/nuerguo/changbie": {
      "type": "ROOM",
      "short": "长别亭",
      "exits": {
        "northwest": "/d/qujing/nuerguo/end",
        "eastdown": "/d/qujing/nuerguo/shanpo",
        "southdown": "/d/qujing/nuerguo/xiaolu4"
      }
    },
    "/d/qujing/nuerguo/easthall": {
      "type": "ROOM",
      "short": "东侧殿",
      "exits": {
        "west": "/d/qujing/nuerguo/fronthall"
      }
    },
    "/d/qujing/nuerguo/eastriver1": {
      "type": "ROOM",
      "short": "子母河东岸",
      "exits": {
        "south": "/d/qujing/nuerguo/eastriver2",
        "east": "/d/qujing/nuerguo/start"
      }
    },
    "/d/qujing/nuerguo/eastriver2": {
      "type": "ROOM",
      "short": "子母河东岸",
      "exits": {
        "south": "/d/qujing/nuerguo/eastriver3",
        "north": "/d/qujing/nuerguo/eastriver1"
      }
    },
    "/d/qujing/nuerguo/eastriver3": {
      "type": "ROOM",
      "short": "子母河东岸",
      "exits": {
        "north": "/d/qujing/nuerguo/eastriver2"
      }
    },
    "/d/qujing/nuerguo/end": {
      "type": "ROOM",
      "short": "一线天",
      "exits": {
        "southeast": "/d/qujing/nuerguo/changbie",
        "northwest": "/d/qujing/dudi/shanlu9"
      }
    },
    "/d/qujing/nuerguo/entry": {
      "type": "ROOM",
      "short": "王宫大门",
      "exits": {
        "north": "/d/qujing/nuerguo/fronthall",
        "southdown": "/d/qujing/nuerguo/towna2"
      },
      "objects": {
        "/d/qujing/nuerguo/npc/lady": 1
      }
    },
    "/d/qujing/nuerguo/fronthall": {
      "type": "ROOM",
      "short": "前宫",
      "exits": {
        "north": "/d/qujing/nuerguo/backhall",
        "east": "/d/qujing/nuerguo/easthall",
        "west": "/d/qujing/nuerguo/westhall",
        "south": "/d/qujing/nuerguo/entry"
      },
      "objects": {
        "/d/qujing/nuerguo/npc/girl": 2
      }
    },
    "/d/qujing/nuerguo/greenyard": {
      "type": "ROOM",
      "short": "绿迷宫",
      "exits": {
        "east": "/d/qujing/nuerguo/greenyard",
        "west": "/d/qujing/nuerguo/greenyard",
        "south": "/d/qujing/nuerguo/greenyard",
        "north": "/d/qujing/nuerguo/greenyard",
        "northwest": "/d/qujing/nuerguo/greenyard",
        "southwest": "/d/qujing/nuerguo/greenyard"
      }
    },
    "/d/qujing/nuerguo/jieyang": {
      "type": "ROOM",
      "short": "解阳山",
      "exits": {
        "north": "/d/qujing/nuerguo/sanchalu",
        "west": "/d/qujing/nuerguo/xiaolu1",
        "southup": "/d/qujing/nuerguo/juxianan"
      }
    },
    "/d/qujing/nuerguo/juxianan": {
      "type": "ROOM",
      "short": "聚仙庵",
      "exits": {
        "enter": "/d/qujing/nuerguo/annei",
        "northdown": "/d/qujing/nuerguo/jieyang"
      },
      "objects": {
        "/d/qujing/nuerguo/npc/daoshi": 1
      }
    },
    "/d/qujing/nuerguo/maowu": {
      "type": "ROOM",
      "short": "茅屋",
      "exits": {
        "south": "/d/qujing/nuerguo/westriver"
      },
      "objects": {
        "/d/qujing/nuerguo/npc/oldwoman": 1
      }
    },
    "/d/qujing/nuerguo/outlet": {
      "type": "ROOM",
      "short": "迷宫出口",
      "exits": {
        "westup": "/d/qujing/nuerguo/shanpo"
      }
    },
    "/d/qujing/nuerguo/river": {
      "type": "ROOM",
      "short": "河中",
      "exits": {}
    },
    "/d/qujing/nuerguo/sanchalu": {
      "type": "ROOM",
      "short": "三岔路口",
      "exits": {
        "northwest": "/d/qujing/nuerguo/townc3",
        "east": "/d/qujing/nuerguo/westriver",
        "south": "/d/qujing/nuerguo/jieyang"
      }
    },
    "/d/qujing/nuerguo/shanpo": {
      "type": "ROOM",
      "short": "山坡",
      "exits": {
        "westup": "/d/qujing/nuerguo/changbie"
      }
    },
    "/d/qujing/nuerguo/start": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "southeast": "dir+qujing/jindou/shanlu6",
        "west": "/d/qujing/nuerguo/eastriver1"
      }
    },
    "/d/qujing/nuerguo/towna1": {
      "type": "ROOM",
      "short": "安乐巷西",
      "exits": {
        "east": "/d/qujing/nuerguo/towna2",
        "south": "/d/qujing/nuerguo/townb1"
      }
    },
    "/d/qujing/nuerguo/towna2": {
      "type": "ROOM",
      "short": "安乐巷中",
      "exits": {
        "northup": "/d/qujing/nuerguo/entry",
        "west": "/d/qujing/nuerguo/towna1",
        "east": "/d/qujing/nuerguo/towna3",
        "south": "/d/qujing/nuerguo/townb2"
      }
    },
    "/d/qujing/nuerguo/towna3": {
      "type": "ROOM",
      "short": "安乐巷东",
      "exits": {
        "west": "/d/qujing/nuerguo/towna2",
        "south": "/d/qujing/nuerguo/townb3"
      }
    },
    "/d/qujing/nuerguo/townb1": {
      "type": "ROOM",
      "short": "儿女巷西",
      "exits": {
        "north": "/d/qujing/nuerguo/towna1",
        "east": "/d/qujing/nuerguo/townb2",
        "south": "/d/qujing/nuerguo/townc1"
      },
      "objects": {
        "/d/qujing/nuerguo/npc/woman1": 2
      }
    },
    "/d/qujing/nuerguo/townb2": {
      "type": "ROOM",
      "short": "儿女巷中",
      "exits": {
        "north": "/d/qujing/nuerguo/towna2",
        "east": "/d/qujing/nuerguo/townb3",
        "west": "/d/qujing/nuerguo/townb1",
        "south": "/d/qujing/nuerguo/townc2"
      },
      "objects": {
        "/d/qujing/nuerguo/npc/woman1": 2,
        "/d/qujing/nuerguo/npc/woman2": 2
      }
    },
    "/d/qujing/nuerguo/townb3": {
      "type": "ROOM",
      "short": "儿女巷东",
      "exits": {
        "north": "/d/qujing/nuerguo/towna3",
        "west": "/d/qujing/nuerguo/townb2",
        "south": "/d/qujing/nuerguo/townc3"
      },
      "objects": {
        "/d/qujing/nuerguo/npc/woman1": 2
      }
    },
    "/d/qujing/nuerguo/townc1": {
      "type": "ROOM",
      "short": "桑花巷西",
      "exits": {
        "north": "/d/qujing/nuerguo/townb1",
        "east": "/d/qujing/nuerguo/townc2"
      }
    },
    "/d/qujing/nuerguo/townc2": {
      "type": "ROOM",
      "short": "桑花巷中",
      "exits": {
        "north": "/d/qujing/nuerguo/townb2",
        "west": "/d/qujing/nuerguo/townc1",
        "east": "/d/qujing/nuerguo/townc3"
      }
    },
    "/d/qujing/nuerguo/townc3": {
      "type": "ROOM",
      "short": "桑花巷东",
      "exits": {
        "north": "/d/qujing/nuerguo/townb3",
        "west": "/d/qujing/nuerguo/townc2",
        "southeast": "/d/qujing/nuerguo/sanchalu"
      }
    },
    "/d/qujing/nuerguo/westhall": {
      "type": "ROOM",
      "short": "西侧殿",
      "exits": {
        "east": "/d/qujing/nuerguo/fronthall"
      }
    },
    "/d/qujing/nuerguo/westrive": {
      "type": "ROOM",
      "short": "河西岸",
      "exits": {
        "north": "/d/qujing/nuerguo/maowu",
        "west": "/d/qujing/nuerguo/sanchalu"
      }
    },
    "/d/qujing/nuerguo/westriver": {
      "type": "ROOM",
      "short": "子母河西岸",
      "exits": {
        "west": "/d/qujing/nuerguo/sanchalu",
        "north": "/d/qujing/nuerguo/maowu"
      }
    },
    "/d/qujing/nuerguo/xiaolu1": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "east": "/d/qujing/nuerguo/jieyang",
        "westup": "/d/qujing/nuerguo/xiaolu2"
      }
    },
    "/d/qujing/nuerguo/xiaolu2": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "eastdown": "/d/qujing/nuerguo/xiaolu1",
        "northdown": "/d/qujing/nuerguo/xiaolu3"
      }
    },
    "/d/qujing/nuerguo/xiaolu3": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "southup": "/d/qujing/nuerguo/xiaolu2",
        "northup": "/d/qujing/nuerguo/xiaolu4"
      }
    },
    "/d/qujing/nuerguo/xiaolu4": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "southdown": "/d/qujing/nuerguo/xiaolu3",
        "northup": "/d/qujing/nuerguo/changbie"
      }
    },
    "/d/qujing/pansi/bixi1": {
      "type": "ROOM",
      "short": "碧溪",
      "exits": {
        "southwest": "/d/qujing/pansi/shiwu",
        "east": "/d/qujing/pansi/bixi2"
      }
    },
    "/d/qujing/pansi/bixi2": {
      "type": "ROOM",
      "short": "碧溪",
      "exits": {
        "west": "/d/qujing/pansi/bixi1",
        "southeast": "/d/qujing/pansi/bixi3"
      }
    },
    "/d/qujing/pansi/bixi3": {
      "type": "ROOM",
      "short": "碧溪",
      "exits": {
        "northwest": "/d/qujing/pansi/bixi2",
        "south": "/d/qujing/pansi/bixi6"
      }
    },
    "/d/qujing/pansi/bixi4": {
      "type": "ROOM",
      "short": "碧溪",
      "exits": {
        "northwest": "/d/qujing/pansi/shiwu",
        "east": "/d/qujing/pansi/bixi5"
      }
    },
    "/d/qujing/pansi/bixi5": {
      "type": "ROOM",
      "short": "碧溪",
      "exits": {
        "east": "/d/qujing/pansi/bixi6",
        "west": "/d/qujing/pansi/bixi4"
      }
    },
    "/d/qujing/pansi/bixi6": {
      "type": "ROOM",
      "short": "碧溪",
      "exits": {
        "north": "/d/qujing/pansi/bixi3",
        "west": "/d/qujing/pansi/bixi5"
      }
    },
    "/d/qujing/pansi/cha": {
      "type": "ROOM",
      "short": "茶房",
      "exits": {
        "west": "/d/qujing/pansi/zheng",
        "northeast": "/d/qujing/pansi/chu",
        "south": "/d/qujing/pansi/ke"
      },
      "objects": {
        "/d/qujing/pansi/obj/tea": 2,
        "/d/qujing/pansi/npc/xiaotong": 1
      }
    },
    "/d/qujing/pansi/chu": {
      "type": "ROOM",
      "short": "厨房",
      "exits": {
        "southwest": "/d/qujing/pansi/cha"
      }
    },
    "/d/qujing/pansi/chulang": {
      "type": "ROOM",
      "short": "厨廊",
      "exits": {
        "east": "/d/qujing/pansi/shiyuan"
      },
      "objects": {
        "/d/qujing/pansi/obj/doufu": 1,
        "/d/qujing/pansi/obj/mianjin": 1
      }
    },
    "/d/qujing/pansi/dongnei": {
      "type": "ROOM",
      "short": "洞内",
      "exits": {
        "northeast": "/d/qujing/pansi/shidong"
      },
      "objects": {
        "/d/qujing/pansi/npc/son1": 1,
        "/d/qujing/pansi/npc/son2": 1,
        "/d/qujing/pansi/npc/son3": 1,
        "/d/qujing/pansi/npc/son4": 1,
        "/d/qujing/pansi/npc/son5": 1,
        "/d/qujing/pansi/npc/son6": 1,
        "/d/qujing/pansi/npc/son7": 1
      }
    },
    "/d/qujing/pansi/huajian1": {
      "type": "ROOM",
      "short": "花涧",
      "exits": {
        "southwest": "/d/qujing/pansi/huajian2",
        "east": "/d/qujing/pansi/shiwu"
      }
    },
    "/d/qujing/pansi/huajian2": {
      "type": "ROOM",
      "short": "花涧",
      "exits": {
        "northeast": "/d/qujing/pansi/huajian1",
        "north": "/d/qujing/pansi/qianhua"
      }
    },
    "/d/qujing/pansi/jiandi": {
      "type": "ROOM",
      "short": "涧底",
      "exits": {
        "westup": "/d/qujing/pansi/jiankou1",
        "down": "/d/qujing/pansi/jiandi2"
      },
      "objects": {
        "/d/qujing/pansi/npc/shuizhi": 1
      }
    },
    "/d/qujing/pansi/jiandi2": {
      "type": "ROOM",
      "short": "涧底",
      "exits": {
        "up": "/d/qujing/pansi/jiandi",
        "down": "/d/qujing/pansi/jiandi3"
      },
      "objects": {
        "/d/qujing/pansi/npc/shuizhi": 1
      }
    },
    "/d/qujing/pansi/jiandi3": {
      "type": "ROOM",
      "short": "涧底",
      "exits": {
        "up": "/d/qujing/pansi/jiandi2",
        "down": "/d/qujing/pansi/jiandi4"
      },
      "objects": {
        "/d/qujing/pansi/npc/shuizhi": 1
      }
    },
    "/d/qujing/pansi/jiandi4": {
      "type": "ROOM",
      "short": "涧底",
      "exits": {
        "up": "/d/qujing/pansi/jiandi3"
      },
      "objects": {
        "/d/qujing/pansi/npc/shuizhi": 1
      }
    },
    "/d/qujing/pansi/jiankou1": {
      "type": "ROOM",
      "short": "涧口",
      "exits": {
        "eastdown": "/d/qujing/pansi/jiandi",
        "westup": "/d/qujing/pansi/ling2"
      }
    },
    "/d/qujing/pansi/jiankou2": {
      "type": "ROOM",
      "short": "涧口",
      "exits": {
        "east": "/d/qujing/pansi/shandao4"
      }
    },
    "/d/qujing/pansi/ke": {
      "type": "ROOM",
      "short": "客房",
      "exits": {
        "north": "/d/qujing/pansi/cha"
      }
    },
    "/d/qujing/pansi/ling1": {
      "type": "ROOM",
      "short": "岭道",
      "exits": {
        "west": "/d/qujing/biqiu/lin2",
        "southeast": "/d/qujing/pansi/ling3"
      }
    },
    "/d/qujing/pansi/ling2": {
      "type": "ROOM",
      "short": "岭道",
      "exits": {
        "southwest": "/d/qujing/pansi/ling4",
        "eastdown": "/d/qujing/pansi/jiankou1"
      }
    },
    "/d/qujing/pansi/ling3": {
      "type": "ROOM",
      "short": "岭道",
      "exits": {
        "northwest": "/d/qujing/pansi/ling1",
        "eastup": "/d/qujing/pansi/ling4"
      }
    },
    "/d/qujing/pansi/ling4": {
      "type": "ROOM",
      "short": "岭道",
      "exits": {
        "westdown": "/d/qujing/pansi/ling3",
        "northeast": "/d/qujing/pansi/ling2",
        "southeast": "/d/qujing/pansi/qiaolin1"
      }
    },
    "/d/qujing/pansi/ling5": {
      "type": "ROOM",
      "short": "岭道",
      "exits": {
        "southeast": "/d/qujing/zhuzi/lin3",
        "southwest": "/d/qujing/pansi/ling7"
      }
    },
    "/d/qujing/pansi/ling6": {
      "type": "ROOM",
      "short": "岭道",
      "exits": {
        "westup": "/d/qujing/pansi/qiaolin2",
        "east": "/d/qujing/pansi/ling7"
      }
    },
    "/d/qujing/pansi/ling7": {
      "type": "ROOM",
      "short": "岭道",
      "exits": {
        "west": "/d/qujing/pansi/ling6",
        "northeast": "/d/qujing/pansi/ling5"
      }
    },
    "/d/qujing/pansi/maowu": {
      "type": "ROOM",
      "short": "茅屋",
      "exits": {
        "west": "/d/qujing/pansi/muxiang",
        "southeast": "/d/qujing/pansi/shiqiao"
      }
    },
    "/d/qujing/pansi/menqian": {
      "type": "ROOM",
      "short": "门前",
      "exits": {
        "northwest": "/d/qujing/pansi/qiaolin6",
        "east": "/d/qujing/pansi/yuannei"
      },
      "objects": {
        "/d/qujing/pansi/npc/xiaotong": 2
      }
    },
    "/d/qujing/pansi/menqiang": {
      "type": "ROOM",
      "short": "门墙",
      "exits": {
        "west": "/d/qujing/pansi/qiaolin7",
        "southdown": "/d/qujing/pansi/zhuogou"
      }
    },
    "/d/qujing/pansi/muxiang": {
      "type": "ROOM",
      "short": "木香亭",
      "exits": {
        "east": "/d/qujing/pansi/maowu",
        "south": "/d/qujing/pansi/shitou"
      },
      "objects": {
        "/d/qujing/pansi/npc/girl2": 1,
        "/d/qujing/pansi/npc/girl3": 1
      }
    },
    "/d/qujing/pansi/nanpo": {
      "type": "ROOM",
      "short": "南坡",
      "exits": {
        "northeast": "/d/qujing/pansi/qiaolin5"
      },
      "objects": {
        "/d/qujing/pansi/npc/woman": 1
      }
    },
    "/d/qujing/pansi/pian": {
      "type": "ROOM",
      "short": "偏房",
      "exits": {
        "east": "/d/qujing/pansi/zheng"
      },
      "objects": {
        "/d/qujing/pansi/npc/dao": 1
      }
    },
    "/d/qujing/pansi/qianhua": {
      "type": "ROOM",
      "short": "千花洞",
      "exits": {
        "northwest": "/d/qujing/pansi/shandao1",
        "south": "/d/qujing/pansi/huajian2"
      }
    },
    "/d/qujing/pansi/qiaolin1": {
      "type": "ROOM",
      "short": "乔林",
      "exits": {
        "northwest": "/d/qujing/pansi/ling4",
        "southeast": "/d/qujing/pansi/qiaolin2"
      }
    },
    "/d/qujing/pansi/qiaolin2": {
      "type": "ROOM",
      "short": "乔林",
      "exits": {
        "northwest": "/d/qujing/pansi/qiaolin1",
        "southeast": "/d/qujing/pansi/qiaolin4",
        "eastdown": "/d/qujing/pansi/ling6"
      }
    },
    "/d/qujing/pansi/qiaolin3": {
      "type": "ROOM",
      "short": "乔林",
      "exits": {
        "east": "/d/qujing/pansi/qiaolin4",
        "southwest": "/d/qujing/pansi/qiaolin5",
        "west": "/d/qujing/pansi/shiqiao"
      }
    },
    "/d/qujing/pansi/qiaolin4": {
      "type": "ROOM",
      "short": "乔林",
      "exits": {
        "west": "/d/qujing/pansi/qiaolin3",
        "southeast": "/d/qujing/pansi/qiaolin6",
        "northwest": "/d/qujing/pansi/qiaolin2"
      }
    },
    "/d/qujing/pansi/qiaolin5": {
      "type": "ROOM",
      "short": "乔林",
      "exits": {
        "northeast": "/d/qujing/pansi/qiaolin3",
        "southwest": "/d/qujing/pansi/nanpo",
        "southeast": "/d/qujing/pansi/qiaolin7"
      }
    },
    "/d/qujing/pansi/qiaolin6": {
      "type": "ROOM",
      "short": "乔林",
      "exits": {
        "northwest": "/d/qujing/pansi/qiaolin4",
        "southeast": "/d/qujing/pansi/menqian"
      }
    },
    "/d/qujing/pansi/qiaolin7": {
      "type": "ROOM",
      "short": "乔林",
      "exits": {
        "northwest": "/d/qujing/pansi/qiaolin5",
        "east": "/d/qujing/pansi/menqiang"
      }
    },
    "/d/qujing/pansi/shandao1": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "southdown": "/d/qujing/pansi/shandao2",
        "southeast": "/d/qujing/pansi/qianhua"
      }
    },
    "/d/qujing/pansi/shandao2": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "southwest": "/d/qujing/pansi/shandao3",
        "northup": "/d/qujing/pansi/shandao1"
      }
    },
    "/d/qujing/pansi/shandao3": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "southdown": "/d/qujing/pansi/shandao4",
        "northeast": "/d/qujing/pansi/shandao2"
      }
    },
    "/d/qujing/pansi/shandao4": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "west": "/d/qujing/pansi/jiankou2",
        "northup": "/d/qujing/pansi/shandao3"
      }
    },
    "/d/qujing/pansi/shidong": {
      "type": "ROOM",
      "short": "石洞",
      "exits": {
        "north": "/d/qujing/pansi/shiyuan",
        "southwest": "/d/qujing/pansi/dongnei"
      }
    },
    "/d/qujing/pansi/shiqiao": {
      "type": "ROOM",
      "short": "石桥",
      "exits": {
        "east": "/d/qujing/pansi/qiaolin3",
        "northwest": "/d/qujing/pansi/maowu"
      },
      "objects": {
        "/d/qujing/pansi/npc/girl1": 1
      }
    },
    "/d/qujing/pansi/shitou": {
      "type": "ROOM",
      "short": "石头门",
      "exits": {
        "north": "/d/qujing/pansi/muxiang",
        "south": "/d/qujing/pansi/shiyuan"
      }
    },
    "/d/qujing/pansi/shiwu": {
      "type": "ROOM",
      "short": "石屋",
      "exits": {
        "west": "/d/qujing/pansi/huajian1",
        "northeast": "/d/qujing/pansi/bixi1",
        "southeast": "/d/qujing/pansi/bixi4",
        "enter": "/d/qujing/pansi/wunei"
      }
    },
    "/d/qujing/pansi/shiyuan": {
      "type": "ROOM",
      "short": "石院",
      "exits": {
        "north": "/d/qujing/pansi/shitou",
        "south": "/d/qujing/pansi/shidong",
        "west": "/d/qujing/pansi/chulang"
      },
      "objects": {
        "/d/qujing/pansi/npc/girl4": 1,
        "/d/qujing/pansi/npc/girl5": 1
      }
    },
    "/d/qujing/pansi/wunei": {
      "type": "ROOM",
      "short": "屋内",
      "exits": {
        "out": "/d/qujing/pansi/shiwu"
      }
    },
    "/d/qujing/pansi/yuannei": {
      "type": "ROOM",
      "short": "院内",
      "exits": {
        "west": "/d/qujing/pansi/menqian",
        "south": "/d/qujing/pansi/zheng"
      },
      "objects": {
        "/d/qujing/pansi/obj/danlu": 1
      }
    },
    "/d/qujing/pansi/yuanwai": {
      "type": "ROOM",
      "short": "院外",
      "exits": {
        "south": "/d/qujing/pansi/yuannei"
      },
      "objects": {
        "/d/qujing/pansi/npc/xie1": 1,
        "/d/qujing/pansi/npc/xie2": 1,
        "/d/qujing/pansi/npc/xie3": 1,
        "/d/qujing/pansi/npc/xie4": 1
      }
    },
    "/d/qujing/pansi/yuanwai1": {
      "type": "ROOM",
      "short": "院外",
      "exits": {
        "south": "/d/qujing/pansi/yuannei"
      },
      "objects": {
        "/d/qujing/pansi/npc/xie1": 1,
        "/d/qujing/pansi/npc/xie2": 1,
        "/d/qujing/pansi/npc/xie3": 1,
        "/d/qujing/pansi/npc/xie4": 1
      }
    },
    "/d/qujing/pansi/yuanwai2": {
      "type": "ROOM",
      "short": "院外",
      "exits": {
        "south": "/d/qujing/pansi/yuannei"
      },
      "objects": {
        "/d/qujing/pansi/npc/xie1": 1,
        "/d/qujing/pansi/npc/xie2": 1,
        "/d/qujing/pansi/npc/xie3": 1,
        "/d/qujing/pansi/npc/xie4": 1
      }
    },
    "/d/qujing/pansi/yuanwai3": {
      "type": "ROOM",
      "short": "院外",
      "exits": {
        "south": "/d/qujing/pansi/yuannei"
      },
      "objects": {
        "/d/qujing/pansi/npc/xie1": 1,
        "/d/qujing/pansi/npc/xie2": 1,
        "/d/qujing/pansi/npc/xie3": 1,
        "/d/qujing/pansi/npc/xie4": 1
      }
    },
    "/d/qujing/pansi/yuanwai4": {
      "type": "ROOM",
      "short": "院外",
      "exits": {
        "south": "/d/qujing/pansi/yuannei"
      },
      "objects": {
        "/d/qujing/pansi/npc/xie1": 1,
        "/d/qujing/pansi/npc/xie2": 1,
        "/d/qujing/pansi/npc/xie3": 1,
        "/d/qujing/pansi/npc/xie4": 1
      }
    },
    "/d/qujing/pansi/yuanwai5": {
      "type": "ROOM",
      "short": "院外",
      "exits": {
        "south": "/d/qujing/pansi/yuannei"
      },
      "objects": {
        "/d/qujing/pansi/npc/xie1": 1,
        "/d/qujing/pansi/npc/xie2": 1,
        "/d/qujing/pansi/npc/xie3": 1,
        "/d/qujing/pansi/npc/xie4": 1
      }
    },
    "/d/qujing/pansi/yuanwai6": {
      "type": "ROOM",
      "short": "院外",
      "exits": {
        "south": "/d/qujing/pansi/yuannei"
      },
      "objects": {
        "/d/qujing/pansi/npc/xie1": 1,
        "/d/qujing/pansi/npc/xie2": 1,
        "/d/qujing/pansi/npc/xie3": 1,
        "/d/qujing/pansi/npc/xie4": 1
      }
    },
    "/d/qujing/pansi/zheng": {
      "type": "ROOM",
      "short": "正厅",
      "exits": {
        "north": "/d/qujing/pansi/yuannei",
        "west": "/d/qujing/pansi/pian",
        "east": "/d/qujing/pansi/cha"
      },
      "objects": {
        "/d/qujing/pansi/npc/xiaotong": 1
      }
    },
    "/d/qujing/pansi/zhuogou": {
      "type": "ROOM",
      "short": "濯垢泉",
      "exits": {
        "northup": "/d/qujing/pansi/menqiang"
      },
      "objects": {
        "/d/qujing/pansi/npc/girl6": 1,
        "/d/qujing/pansi/npc/girl7": 1
      }
    },
    "/d/qujing/pingding/beidong": {
      "type": "ROOM",
      "short": "北洞",
      "exits": {
        "southwest": "/d/qujing/pingding/dongmen"
      },
      "objects": {
        "/d/qujing/pingding/npc/yao1": 3,
        "/d/qujing/pingding/npc/yinjiao": 1
      }
    },
    "/d/qujing/pingding/dating": {
      "type": "ROOM",
      "short": "大厅",
      "exits": {
        "west": "/d/qujing/pingding/qianting"
      },
      "objects": {
        "/d/qujing/pingding/npc/yao1": 2
      }
    },
    "/d/qujing/pingding/dongmen": {
      "type": "ROOM",
      "short": "洞门",
      "exits": {
        "northwest": "/d/qujing/pingding/dongwai",
        "northeast": "/d/qujing/pingding/beidong",
        "south": "/d/qujing/pingding/nandong",
        "east": "/d/qujing/pingding/qianting"
      },
      "objects": {
        "/d/qujing/pingding/npc/hu": 1,
        "/d/qujing/pingding/npc/long": 1
      }
    },
    "/d/qujing/pingding/dongwai": {
      "type": "ROOM",
      "short": "洞外",
      "exits": {
        "northwest": "/d/qujing/pingding/ping3",
        "southeast": "/d/qujing/pingding/dongmen"
      },
      "objects": {
        "/d/qujing/pingding/npc/chong": 1,
        "/d/qujing/pingding/npc/gui": 1
      }
    },
    "/d/qujing/pingding/nandong": {
      "type": "ROOM",
      "short": "南洞",
      "exits": {
        "north": "/d/qujing/pingding/dongmen"
      },
      "objects": {
        "/d/qujing/pingding/npc/yao1": 2,
        "/d/qujing/pingding/npc/jinjiao": 1
      }
    },
    "/d/qujing/pingding/neidian": {
      "type": "ROOM",
      "short": "内殿",
      "exits": {
        "northeast": "/d/qujing/pingding/shilang2",
        "east": "/d/qujing/pingding/wofang1",
        "southwest": "/d/qujing/pingding/wofang2"
      },
      "objects": {
        "/d/qujing/pingding/npc/yao2": 3
      }
    },
    "/d/qujing/pingding/ping1": {
      "type": "ROOM",
      "short": "平顶山",
      "exits": {
        "southeast": "/d/qujing/pingding/ping3",
        "southwest": "/d/qujing/pingding/ping2"
      }
    },
    "/d/qujing/pingding/ping2": {
      "type": "ROOM",
      "short": "平顶山",
      "exits": {
        "southeast": "/d/qujing/pingding/ping4",
        "southwest": "/d/qujing/pingding/shan2",
        "south": "/d/qujing/pingding/shan3",
        "northeast": "/d/qujing/pingding/ping1"
      }
    },
    "/d/qujing/pingding/ping3": {
      "type": "ROOM",
      "short": "平顶山",
      "exits": {
        "southeast": "/d/qujing/pingding/dongwai",
        "northwest": "/d/qujing/pingding/ping1",
        "south": "/d/qujing/pingding/ping4"
      }
    },
    "/d/qujing/pingding/ping4": {
      "type": "ROOM",
      "short": "平顶山",
      "exits": {
        "north": "/d/qujing/pingding/ping3",
        "northwest": "/d/qujing/pingding/ping2"
      }
    },
    "/d/qujing/pingding/qianting": {
      "type": "ROOM",
      "short": "前厅",
      "exits": {
        "west": "/d/qujing/pingding/dongmen",
        "east": "/d/qujing/pingding/dating"
      },
      "objects": {
        "/d/qujing/pingding/npc/yao1": 2
      }
    },
    "/d/qujing/pingding/shan1": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "eastup": "/d/qujing/pingding/shan2",
        "southwest": "/d/qujing/pingding/shan4"
      }
    },
    "/d/qujing/pingding/shan10": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "southeast": "/d/qujing/pingding/shan13",
        "westup": "/d/qujing/pingding/shan9"
      }
    },
    "/d/qujing/pingding/shan11": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "southwest": "/d/qujing/pingding/shan13",
        "northeast": "/d/qujing/baoxiang/yelu1"
      }
    },
    "/d/qujing/pingding/shan12": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "northeast": "/d/qujing/pingding/shan8",
        "southup": "/d/qujing/pingding/wulin1"
      }
    },
    "/d/qujing/pingding/shan13": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "northwest": "/d/qujing/pingding/shan10",
        "northeast": "/d/qujing/pingding/shan11"
      }
    },
    "/d/qujing/pingding/shan14": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "northeast": "/d/qujing/pingding/wulin2",
        "southwest": "/d/qujing/pingding/yalong1"
      }
    },
    "/d/qujing/pingding/shan2": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "westdown": "/d/qujing/pingding/shan1",
        "northeast": "/d/qujing/pingding/ping2"
      }
    },
    "/d/qujing/pingding/shan3": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "southeast": "/d/qujing/pingding/shan5",
        "north": "/d/qujing/pingding/ping2"
      }
    },
    "/d/qujing/pingding/shan4": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "northeast": "/d/qujing/pingding/shan1",
        "southwest": "/d/qujing/wuji/shandao1"
      }
    },
    "/d/qujing/pingding/shan5": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "northwest": "/d/qujing/pingding/shan3",
        "southwest": "/d/qujing/pingding/shan6"
      }
    },
    "/d/qujing/pingding/shan6": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "northeast": "/d/qujing/pingding/shan5",
        "southeast": "/d/qujing/pingding/shan7"
      }
    },
    "/d/qujing/pingding/shan7": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "northwest": "/d/qujing/pingding/shan6",
        "south": "/d/qujing/pingding/shan8"
      }
    },
    "/d/qujing/pingding/shan8": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "north": "/d/qujing/pingding/shan7",
        "eastdown": "/d/qujing/pingding/shan9",
        "southwest": "/d/qujing/pingding/shan12"
      }
    },
    "/d/qujing/pingding/shan9": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "eastdown": "/d/qujing/pingding/shan10",
        "westup": "/d/qujing/pingding/shan8"
      }
    },
    "/d/qujing/pingding/shilang1": {
      "type": "ROOM",
      "short": "石廊",
      "exits": {
        "northwest": "/d/qujing/pingding/shimen",
        "south": "/d/qujing/pingding/shilang2"
      },
      "objects": {
        "/d/qujing/pingding/npc/yao2": 3
      }
    },
    "/d/qujing/pingding/shilang2": {
      "type": "ROOM",
      "short": "石廊",
      "exits": {
        "north": "/d/qujing/pingding/shilang1",
        "southwest": "/d/qujing/pingding/neidian"
      },
      "objects": {
        "/d/qujing/pingding/npc/yao2": 4
      }
    },
    "/d/qujing/pingding/shimen": {
      "type": "ROOM",
      "short": "石门",
      "exits": {
        "northeast": "/d/qujing/pingding/yalong2",
        "southeast": "/d/qujing/pingding/shilang1"
      },
      "objects": {
        "/d/qujing/pingding/npc/yao2": 2
      }
    },
    "/d/qujing/pingding/wofang1": {
      "type": "ROOM",
      "short": "卧房",
      "exits": {
        "west": "/d/qujing/pingding/neidian"
      },
      "objects": {
        "/d/qujing/pingding/npc/yao2": 2,
        "/d/qujing/pingding/npc/laonai": 1,
        "/d/qujing/pingding/obj/food": 3
      }
    },
    "/d/qujing/pingding/wofang2": {
      "type": "ROOM",
      "short": "卧房",
      "exits": {
        "northeast": "/d/qujing/pingding/neidian"
      },
      "objects": {
        "/d/qujing/pingding/npc/yao2": 2,
        "/d/qujing/pingding/npc/huaqi": 1,
        "/d/qujing/pingding/obj/shoupi": 2
      }
    },
    "/d/qujing/pingding/wulin1": {
      "type": "ROOM",
      "short": "乌林子",
      "exits": {
        "northdown": "/d/qujing/pingding/shan12",
        "southeast": "/d/qujing/pingding/wulin2"
      }
    },
    "/d/qujing/pingding/wulin2": {
      "type": "ROOM",
      "short": "乌林子",
      "exits": {
        "northwest": "/d/qujing/pingding/wulin1",
        "southwest": "/d/qujing/pingding/shan14"
      }
    },
    "/d/qujing/pingding/yalong1": {
      "type": "ROOM",
      "short": "压龙山",
      "exits": {
        "northeast": "/d/qujing/pingding/shan14",
        "southup": "/d/qujing/pingding/yalong2",
        "southeast": "/d/qujing/pingding/yalong3"
      }
    },
    "/d/qujing/pingding/yalong2": {
      "type": "ROOM",
      "short": "压龙山",
      "exits": {
        "northdown": "/d/qujing/pingding/yalong1",
        "eastdown": "/d/qujing/pingding/yalong3",
        "southwest": "/d/qujing/pingding/shimen"
      }
    },
    "/d/qujing/pingding/yalong3": {
      "type": "ROOM",
      "short": "压龙山",
      "exits": {
        "northwest": "/d/qujing/pingding/yalong1",
        "westup": "/d/qujing/pingding/yalong2"
      }
    },
    "/d/qujing/qilin/bopi": {
      "type": "ROOM",
      "short": "剥皮亭",
      "exits": {
        "west": "/d/qujing/qilin/dongnei",
        "northwest": "/d/qujing/qilin/piangong"
      },
      "objects": {
        "/d/qujing/qilin/npc/nanyao": 2,
        "/d/qujing/qilin/npc/yaowang": 1
      }
    },
    "/d/qujing/qilin/chenglei": {
      "type": "ROOM",
      "short": "承雷石",
      "exits": {
        "left": "/d/qujing/qilin/shan12",
        "right": "/d/qujing/qilin/shan13"
      }
    },
    "/d/qujing/qilin/dinglu": {
      "type": "ROOM",
      "short": "鼎炉厅",
      "exits": {
        "northwest": "/d/qujing/qilin/shuaifu",
        "east": "/d/qujing/qilin/piangong",
        "southeast": "/d/qujing/qilin/dongnei"
      },
      "objects": {
        "/d/qujing/qilin/obj/rou": 5,
        "/d/qujing/qilin/npc/nanyao": 2
      }
    },
    "/d/qujing/qilin/dongkou": {
      "type": "ROOM",
      "short": "洞口",
      "exits": {
        "eastdown": "/d/qujing/qilin/yading",
        "northeast": "/d/qujing/qilin/dongnei"
      }
    },
    "/d/qujing/qilin/dongnei": {
      "type": "ROOM",
      "short": "洞内",
      "exits": {
        "east": "/d/qujing/qilin/bopi",
        "southwest": "/d/qujing/qilin/dongkou",
        "northwest": "/d/qujing/qilin/dinglu",
        "northeast": "/d/qujing/qilin/piangong"
      },
      "objects": {
        "/d/qujing/qilin/npc/nanyao": 6
      }
    },
    "/d/qujing/qilin/hougong": {
      "type": "ROOM",
      "short": "后宫",
      "exits": {
        "southeast": "/d/qujing/qilin/piangong"
      },
      "objects": {
        "/d/qujing/qilin/npc/nuyao": 2,
        "/d/qujing/qilin/npc/queen": 1
      }
    },
    "/d/qujing/qilin/piangong": {
      "type": "ROOM",
      "short": "偏宫",
      "exits": {
        "west": "/d/qujing/qilin/dinglu",
        "northeast": "/d/qujing/qilin/hougong",
        "southeast": "/d/qujing/qilin/bopi"
      },
      "objects": {
        "/d/qujing/qilin/npc/nuyao": 3
      }
    },
    "/d/qujing/qilin/polu1": {
      "type": "ROOM",
      "short": "坡路",
      "exits": {
        "eastup": "/d/qujing/qilin/polu2",
        "southwest": "/d/qujing/zhuzi/tian4"
      }
    },
    "/d/qujing/qilin/polu2": {
      "type": "ROOM",
      "short": "坡路",
      "exits": {
        "eastup": "/d/qujing/qilin/polu3",
        "westdown": "/d/qujing/qilin/polu1"
      }
    },
    "/d/qujing/qilin/polu3": {
      "type": "ROOM",
      "short": "坡路",
      "exits": {
        "southeast": "/d/qujing/qilin/polu4",
        "westdown": "/d/qujing/qilin/polu2"
      }
    },
    "/d/qujing/qilin/polu4": {
      "type": "ROOM",
      "short": "坡路",
      "exits": {
        "northwest": "/d/qujing/qilin/polu3"
      }
    },
    "/d/qujing/qilin/shan11": {
      "type": "ROOM",
      "short": "山环路",
      "exits": {
        "left": "/d/qujing/qilin/shan14",
        "right": "/d/qujing/qilin/yutai"
      }
    },
    "/d/qujing/qilin/shan12": {
      "type": "ROOM",
      "short": "山环路",
      "exits": {
        "left": "/d/qujing/qilin/yutai",
        "right": "/d/qujing/qilin/chenglei"
      }
    },
    "/d/qujing/qilin/shan13": {
      "type": "ROOM",
      "short": "山环路",
      "exits": {
        "left": "/d/qujing/qilin/chenglei",
        "right": "/d/qujing/qilin/shan14"
      }
    },
    "/d/qujing/qilin/shan14": {
      "type": "ROOM",
      "short": "山环路",
      "exits": {
        "left": "/d/qujing/qilin/shan13",
        "right": "/d/qujing/qilin/shan11"
      }
    },
    "/d/qujing/qilin/shan21": {
      "type": "ROOM",
      "short": "山环路",
      "exits": {
        "left": "/d/qujing/qilin/shan24",
        "right": "/d/qujing/qilin/shan22"
      }
    },
    "/d/qujing/qilin/shan22": {
      "type": "ROOM",
      "short": "山环路",
      "exits": {
        "left": "/d/qujing/qilin/shan21",
        "right": "/d/qujing/qilin/shan23"
      }
    },
    "/d/qujing/qilin/shan23": {
      "type": "ROOM",
      "short": "山环路",
      "exits": {
        "left": "/d/qujing/qilin/shan22",
        "right": "/d/qujing/qilin/shan24"
      }
    },
    "/d/qujing/qilin/shan24": {
      "type": "ROOM",
      "short": "山环路",
      "exits": {
        "left": "/d/qujing/qilin/shan23",
        "right": "/d/qujing/qilin/shan21"
      }
    },
    "/d/qujing/qilin/shankou": {
      "type": "ROOM",
      "short": "山口",
      "exits": {
        "northwest": "/d/qujing/qilin/yading"
      }
    },
    "/d/qujing/qilin/shuaifu": {
      "type": "ROOM",
      "short": "帅府宫",
      "exits": {
        "southeast": "/d/qujing/qilin/dinglu"
      },
      "objects": {
        "/d/qujing/qilin/npc/nanyao": 2
      }
    },
    "/d/qujing/qilin/yading": {
      "type": "ROOM",
      "short": "崖顶",
      "exits": {
        "westup": "/d/qujing/qilin/dongkou",
        "southeast": "/d/qujing/qilin/shankou"
      }
    },
    "/d/qujing/qilin/yutai": {
      "type": "ROOM",
      "short": "玉台",
      "exits": {
        "left": "/d/qujing/qilin/shan11",
        "right": "/d/qujing/qilin/shan12"
      }
    },
    "/d/qujing/qinfa/beishi": {
      "type": "ROOM",
      "short": "北市",
      "exits": {
        "north": "/d/qujing/qinfa/qiankun",
        "south": "/d/qujing/qinfa/zhongshi"
      }
    },
    "/d/qujing/qinfa/bupu": {
      "type": "ROOM",
      "short": "布铺",
      "exits": {
        "south": "/d/qujing/qinfa/jiedao2"
      },
      "objects": {
        "/d/qujing/qinfa/npc/li": 1
      }
    },
    "/d/qujing/qinfa/dalu1": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "west": "/d/qujing/qinfa/dongmen",
        "east": "/d/qujing/qinfa/dalu2"
      }
    },
    "/d/qujing/qinfa/dalu10": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "east": "/d/qujing/qinfa/dalu11",
        "west": "/d/qujing/qinfa/dalu9",
        "north": "/d/qujing/qinfa/nanmen"
      }
    },
    "/d/qujing/qinfa/dalu11": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "east": "/d/qujing/qinfa/dalu12",
        "west": "/d/qujing/qinfa/dalu10"
      }
    },
    "/d/qujing/qinfa/dalu12": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "east": "/d/qujing/qinfa/dalu13",
        "west": "/d/qujing/qinfa/dalu11"
      }
    },
    "/d/qujing/qinfa/dalu13": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "north": "/d/qujing/qinfa/dalu6",
        "west": "/d/qujing/qinfa/dalu12"
      }
    },
    "/d/qujing/qinfa/dalu14": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "east": "/d/qujing/qinfa/dalu15",
        "west": "/d/qujing/yinwu/huangye7"
      }
    },
    "/d/qujing/qinfa/dalu15": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "northeast": "/d/qujing/qinfa/dalu7",
        "west": "/d/qujing/qinfa/dalu14"
      }
    },
    "/d/qujing/qinfa/dalu2": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "west": "/d/qujing/qinfa/dalu1",
        "east": "/d/qujing/qinfa/dalu3",
        "south": "/d/qujing/qinfa/dalu4"
      }
    },
    "/d/qujing/qinfa/dalu3": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "west": "/d/qujing/qinfa/dalu2",
        "east": "/d/qujing/wudidong/exit"
      }
    },
    "/d/qujing/qinfa/dalu4": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "north": "/d/qujing/qinfa/dalu2",
        "south": "/d/qujing/qinfa/dalu5"
      }
    },
    "/d/qujing/qinfa/dalu5": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "north": "/d/qujing/qinfa/dalu4",
        "south": "/d/qujing/qinfa/dalu6"
      }
    },
    "/d/qujing/qinfa/dalu6": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "north": "/d/qujing/qinfa/dalu5",
        "south": "/d/qujing/qinfa/dalu13"
      }
    },
    "/d/qujing/qinfa/dalu7": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "east": "/d/qujing/qinfa/dalu8",
        "southwest": "/d/qujing/qinfa/dalu15"
      }
    },
    "/d/qujing/qinfa/dalu8": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "east": "/d/qujing/qinfa/dalu9",
        "west": "/d/qujing/qinfa/dalu7"
      }
    },
    "/d/qujing/qinfa/dalu9": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "east": "/d/qujing/qinfa/dalu10",
        "west": "/d/qujing/qinfa/dalu8"
      }
    },
    "/d/qujing/qinfa/dongmen": {
      "type": "ROOM",
      "short": "东门",
      "exits": {
        "east": "/d/qujing/qinfa/dalu1",
        "west": "/d/qujing/qinfa/zhongshi"
      },
      "objects": {
        "/d/qujing/qinfa/npc/junshi": 2
      }
    },
    "/d/qujing/qinfa/fenggong": {
      "type": "ROOM",
      "short": "凤宫",
      "exits": {
        "west": "/d/qujing/qinfa/longgong",
        "north": "/d/qujing/qinfa/qingong1",
        "south": "/d/qujing/qinfa/qingong2"
      },
      "objects": {
        "/d/qujing/qinfa/npc/queen": 1
      }
    },
    "/d/qujing/qinfa/gongmen": {
      "type": "ROOM",
      "short": "宫门",
      "exits": {
        "west": "/d/qujing/qinfa/qiankun",
        "north": "/d/qujing/qinfa/junying",
        "east": "/d/qujing/qinfa/jinluan"
      },
      "objects": {
        "/d/qujing/qinfa/npc/junshi": 2
      }
    },
    "/d/qujing/qinfa/guafu": {
      "type": "ROOM",
      "short": "寡妇店",
      "exits": {
        "east": "/d/qujing/qinfa/jiedao8",
        "west": "/d/qujing/qinfa/tianjing"
      },
      "objects": {
        "/d/qujing/qinfa/npc/guafu": 1
      }
    },
    "/d/qujing/qinfa/jiedao1": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "south": "/d/qujing/qinfa/jiedao3",
        "east": "/d/qujing/qinfa/jiedao2"
      },
      "objects": {
        "/d/qujing/qinfa/npc/people": 2
      }
    },
    "/d/qujing/qinfa/jiedao2": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/qinfa/bupu",
        "west": "/d/qujing/qinfa/jiedao1",
        "east": "/d/qujing/qinfa/qiankun"
      },
      "objects": {
        "/d/qujing/qinfa/npc/people": 2
      }
    },
    "/d/qujing/qinfa/jiedao3": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "south": "/d/qujing/qinfa/jiedao6",
        "north": "/d/qujing/qinfa/jiedao1",
        "east": "/d/qujing/qinfa/jiupu"
      },
      "objects": {
        "/d/qujing/qinfa/npc/people": 2
      }
    },
    "/d/qujing/qinfa/jiedao4": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "east": "/d/qujing/qinfa/jiedao5",
        "west": "/d/qujing/qinfa/pihuopu"
      },
      "objects": {
        "/d/qujing/qinfa/npc/people": 2
      }
    },
    "/d/qujing/qinfa/jiedao5": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "west": "/d/qujing/qinfa/jiedao4",
        "east": "/d/qujing/qinfa/wugu",
        "north": "/d/qujing/qinfa/yaopu"
      },
      "objects": {
        "/d/qujing/qinfa/npc/people": 2
      }
    },
    "/d/qujing/qinfa/jiedao6": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/qinfa/jiedao3",
        "east": "/d/qujing/qinfa/jiedao7",
        "west": "/d/qujing/qinfa/wugu"
      },
      "objects": {
        "/d/qujing/qinfa/npc/people": 2
      }
    },
    "/d/qujing/qinfa/jiedao7": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "west": "/d/qujing/qinfa/jiedao6",
        "east": "/d/qujing/qinfa/zhongshi"
      },
      "objects": {
        "/d/qujing/qinfa/npc/people": 2
      }
    },
    "/d/qujing/qinfa/jiedao8": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/qinfa/nanshi",
        "south": "/d/qujing/qinfa/nanmen",
        "west": "/d/qujing/qinfa/guafu",
        "east": "/d/qujing/qinfa/xiaoer"
      },
      "objects": {
        "/d/qujing/qinfa/npc/people": 2
      }
    },
    "/d/qujing/qinfa/jinluan": {
      "type": "ROOM",
      "short": "金銮殿",
      "exits": {
        "west": "/d/qujing/qinfa/gongmen",
        "east": "/d/qujing/qinfa/longgong"
      },
      "objects": {
        "/d/qujing/qinfa/npc/taijian": 2
      }
    },
    "/d/qujing/qinfa/jiupu": {
      "type": "ROOM",
      "short": "酒铺",
      "exits": {
        "west": "/d/qujing/qinfa/jiedao3"
      },
      "objects": {
        "/d/qujing/qinfa/npc/zhou": 1
      }
    },
    "/d/qujing/qinfa/junying": {
      "type": "ROOM",
      "short": "军营",
      "exits": {
        "south": "/d/qujing/qinfa/gongmen"
      },
      "objects": {
        "/d/qujing/qinfa/npc/junshi": 6
      }
    },
    "/d/qujing/qinfa/longgong": {
      "type": "ROOM",
      "short": "龙宫",
      "exits": {
        "west": "/d/qujing/qinfa/jinluan",
        "east": "/d/qujing/qinfa/fenggong",
        "northeast": "/d/qujing/qinfa/qingong1",
        "southeast": "/d/qujing/qinfa/qingong2"
      },
      "objects": {
        "/d/qujing/qinfa/npc/king": 1
      }
    },
    "/d/qujing/qinfa/mipu": {
      "type": "ROOM",
      "short": "米铺",
      "exits": {
        "north": "/d/qujing/qinfa/wugu"
      },
      "objects": {
        "/d/qujing/qinfa/npc/chen": 1
      }
    },
    "/d/qujing/qinfa/nanmen": {
      "type": "ROOM",
      "short": "南门",
      "exits": {
        "north": "/d/qujing/qinfa/jiedao8",
        "south": "/d/qujing/qinfa/dalu10"
      },
      "objects": {
        "/d/qujing/qinfa/npc/junshi": 2
      }
    },
    "/d/qujing/qinfa/nanshi": {
      "type": "ROOM",
      "short": "南市",
      "exits": {
        "north": "/d/qujing/qinfa/zhongshi",
        "south": "/d/qujing/qinfa/jiedao8"
      }
    },
    "/d/qujing/qinfa/pihuopu": {
      "type": "ROOM",
      "short": "皮货铺",
      "exits": {
        "east": "/d/qujing/qinfa/jiedao4"
      },
      "objects": {
        "/d/qujing/qinfa/npc/sun": 1
      }
    },
    "/d/qujing/qinfa/qiankun": {
      "type": "ROOM",
      "short": "乾坤场",
      "exits": {
        "east": "/d/qujing/qinfa/gongmen",
        "west": "/d/qujing/qinfa/jiedao2",
        "south": "/d/qujing/qinfa/zhongshi"
      }
    },
    "/d/qujing/qinfa/qingong1": {
      "type": "ROOM",
      "short": "寝宫",
      "exits": {
        "south": "/d/qujing/qinfa/fenggong",
        "southwest": "/d/qujing/qinfa/longgong"
      },
      "objects": {
        "/d/qujing/qinfa/npc/girl": 1
      }
    },
    "/d/qujing/qinfa/qingong2": {
      "type": "ROOM",
      "short": "寝宫",
      "exits": {
        "north": "/d/qujing/qinfa/fenggong",
        "northwest": "/d/qujing/qinfa/longgong"
      },
      "objects": {
        "/d/qujing/qinfa/npc/girl": 1
      }
    },
    "/d/qujing/qinfa/tianjing": {
      "type": "ROOM",
      "short": "天井",
      "exits": {
        "east": "/d/qujing/qinfa/guafu"
      }
    },
    "/d/qujing/qinfa/wugu": {
      "type": "ROOM",
      "short": "五鼓楼",
      "exits": {
        "west": "/d/qujing/qinfa/jiedao5",
        "east": "/d/qujing/qinfa/jiedao6",
        "north": "/d/qujing/qinfa/zahuopu",
        "south": "/d/qujing/qinfa/mipu"
      }
    },
    "/d/qujing/qinfa/xiaoer": {
      "type": "ROOM",
      "short": "小二店",
      "exits": {
        "west": "/d/qujing/qinfa/jiedao8"
      },
      "objects": {
        "/d/qujing/qinfa/npc/xiaoer": 1
      }
    },
    "/d/qujing/qinfa/yaopu": {
      "type": "ROOM",
      "short": "药铺",
      "exits": {
        "south": "/d/qujing/qinfa/jiedao5"
      },
      "objects": {
        "/d/qujing/qinfa/npc/zheng": 1
      }
    },
    "/d/qujing/qinfa/zahuopu": {
      "type": "ROOM",
      "short": "杂货铺",
      "exits": {
        "south": "/d/qujing/qinfa/wugu"
      },
      "objects": {
        "/d/qujing/qinfa/npc/qian": 1
      }
    },
    "/d/qujing/qinfa/zhongshi": {
      "type": "ROOM",
      "short": "中市",
      "exits": {
        "north": "/d/qujing/qinfa/beishi",
        "south": "/d/qujing/qinfa/nanshi",
        "east": "/d/qujing/qinfa/dongmen",
        "west": "/d/qujing/qinfa/jiedao7"
      }
    },
    "/d/qujing/qinglong/dongkou": {
      "type": "ROOM",
      "short": "洞口",
      "exits": {
        "southwest": "/d/qujing/qinglong/shanding",
        "north": "/d/qujing/qinglong/tongdao1"
      },
      "objects": {
        "/d/qujing/qinglong/npc/yao": 1
      }
    },
    "/d/qujing/qinglong/dongshan": {
      "type": "ROOM",
      "short": "东山凹",
      "exits": {
        "southeast": "/d/qujing/qinglong/shanjian",
        "westup": "/d/qujing/qinglong/shanlu3"
      }
    },
    "/d/qujing/qinglong/dongting": {
      "type": "ROOM",
      "short": "洞厅",
      "exits": {
        "southeast": "/d/qujing/qinglong/tongdao1"
      },
      "objects": {
        "/d/qujing/qinglong/npc/yao": 1
      }
    },
    "/d/qujing/qinglong/shanding": {
      "type": "ROOM",
      "short": "山顶",
      "exits": {
        "southwest": "/d/qujing/qinglong/shantou",
        "northeast": "/d/qujing/qinglong/dongkou"
      }
    },
    "/d/qujing/qinglong/shanjian": {
      "type": "ROOM",
      "short": "山涧",
      "exits": {
        "southwest": "/d/qujing/qinglong/shanlu4",
        "northwest": "/d/qujing/qinglong/dongshan"
      }
    },
    "/d/qujing/qinglong/shanlu1": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "southeast": "/d/qujing/qinglong/shanlu2",
        "northup": "/d/qujing/qinglong/shantou"
      }
    },
    "/d/qujing/qinglong/shanlu2": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "eastdown": "/d/qujing/qinglong/shanlu3",
        "northwest": "/d/qujing/qinglong/shanlu1"
      }
    },
    "/d/qujing/qinglong/shanlu3": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "westup": "/d/qujing/qinglong/shanlu2",
        "eastdown": "/d/qujing/qinglong/dongshan"
      }
    },
    "/d/qujing/qinglong/shanlu4": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northeast": "/d/qujing/qinglong/shanjian",
        "southeast": "/d/qujing/qinglong/shanlu5"
      }
    },
    "/d/qujing/qinglong/shanlu5": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northwest": "/d/qujing/qinglong/shanlu4",
        "southdown": "/d/qujing/qinglong/shanlu6"
      }
    },
    "/d/qujing/qinglong/shanlu6": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "southeast": "/d/qujing/qinglong/shanlu7",
        "northup": "/d/qujing/qinglong/shanlu5"
      }
    },
    "/d/qujing/qinglong/shanlu7": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northwest": "/d/qujing/qinglong/shanlu6",
        "south": "/d/qujing/jinping/cunlu1"
      }
    },
    "/d/qujing/qinglong/shantou": {
      "type": "ROOM",
      "short": "山头",
      "exits": {
        "southdown": "/d/qujing/qinglong/shanlu1",
        "northeast": "/d/qujing/qinglong/shanding"
      }
    },
    "/d/qujing/qinglong/tongdao1": {
      "type": "ROOM",
      "short": "通道",
      "exits": {
        "south": "/d/qujing/qinglong/dongkou",
        "northwest": "/d/qujing/qinglong/dongting",
        "east": "/d/qujing/qinglong/tongdao2"
      },
      "objects": {
        "/d/qujing/qinglong/npc/xiniu": 1
      }
    },
    "/d/qujing/qinglong/tongdao2": {
      "type": "ROOM",
      "short": "通道",
      "exits": {
        "northeast": "/d/qujing/qinglong/wowang1",
        "east": "/d/qujing/qinglong/wowang2",
        "southeast": "/d/qujing/qinglong/wowang3",
        "west": "/d/qujing/qinglong/tongdao1"
      },
      "objects": {
        "/d/qujing/qinglong/npc/yao": 1
      }
    },
    "/d/qujing/qinglong/wowang1": {
      "type": "ROOM",
      "short": "卧王室",
      "exits": {
        "southwest": "/d/qujing/qinglong/tongdao2"
      },
      "objects": {
        "/d/qujing/qinglong/npc/pi1": 1
      }
    },
    "/d/qujing/qinglong/wowang2": {
      "type": "ROOM",
      "short": "卧王室",
      "exits": {
        "west": "/d/qujing/qinglong/tongdao2"
      },
      "objects": {
        "/d/qujing/qinglong/npc/pi2": 1
      }
    },
    "/d/qujing/qinglong/wowang3": {
      "type": "ROOM",
      "short": "卧王室",
      "exits": {
        "northwest": "/d/qujing/qinglong/tongdao2"
      },
      "objects": {
        "/d/qujing/qinglong/npc/pi3": 1
      }
    },
    "/d/qujing/tianzhu/baijiao": {
      "type": "ROOM",
      "short": "百脚山麓",
      "exits": {
        "northeast": "/d/qujing/tianzhu/shan4",
        "southwest": "/d/qujing/tianzhu/shanmen"
      }
    },
    "/d/qujing/tianzhu/baodian": {
      "type": "ROOM",
      "short": "宝殿",
      "exits": {
        "west": "/d/qujing/tianzhu/fang",
        "east": "/d/qujing/tianzhu/siyuan",
        "southeast": "/d/qujing/tianzhu/houyuan"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/monk": 1
      }
    },
    "/d/qujing/tianzhu/budao": {
      "type": "ROOM",
      "short": "布道场",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao28"
      }
    },
    "/d/qujing/tianzhu/budian": {
      "type": "ROOM",
      "short": "布店",
      "exits": {
        "south": "/d/qujing/tianzhu/jiedao97"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/guo": 1
      }
    },
    "/d/qujing/tianzhu/chanfang": {
      "type": "ROOM",
      "short": "禅房",
      "exits": {
        "northwest": "/d/qujing/tianzhu/houyuan"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/realgirl": 1
      }
    },
    "/d/qujing/tianzhu/chengyi": {
      "type": "ROOM",
      "short": "成衣店",
      "exits": {
        "south": "/d/qujing/tianzhu/jiedao96"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/tao": 1
      }
    },
    "/d/qujing/tianzhu/dalu1": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "east": "/d/qujing/tianzhu/ximen",
        "west": "/d/qujing/lingshan/dalu3"
      }
    },
    "/d/qujing/tianzhu/dalu2": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "west": "/d/qujing/tianzhu/dongmen",
        "southeast": "/d/qujing/tianzhu/shan1"
      }
    },
    "/d/qujing/tianzhu/dalu3": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "north": "/d/qujing/tianzhu/nanmen",
        "south": "/d/qujing/tianzhu/dalu4"
      }
    },
    "/d/qujing/tianzhu/dalu4": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "north": "/d/qujing/tianzhu/dalu3",
        "south": "/d/qujing/tianzhu/dalu5"
      }
    },
    "/d/qujing/tianzhu/dalu5": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "north": "/d/qujing/tianzhu/dalu4",
        "south": "/d/qujing/maoying/shilu1"
      }
    },
    "/d/qujing/tianzhu/dangpu": {
      "type": "HOCKSHOP",
      "short": "当铺",
      "exits": {
        "north": "/d/qujing/tianzhu/jiedao96"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/le": 1
      }
    },
    "/d/qujing/tianzhu/dongmen": {
      "type": "ROOM",
      "short": "东门",
      "exits": {
        "east": "/d/qujing/tianzhu/dalu2",
        "west": "/d/qujing/tianzhu/jiedao57",
        "north": "/d/qujing/tianzhu/jiedao48",
        "south": "/d/qujing/tianzhu/jiedao68"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/bing": 2
      }
    },
    "/d/qujing/tianzhu/fang": {
      "type": "ROOM",
      "short": "方丈",
      "exits": {
        "east": "/d/qujing/tianzhu/baodian"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/fang": 1
      }
    },
    "/d/qujing/tianzhu/feng": {
      "type": "ROOM",
      "short": "凤亭",
      "exits": {
        "west": "/d/qujing/tianzhu/yuhua",
        "north": "/d/qujing/tianzhu/hou4"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/taijian": 2
      }
    },
    "/d/qujing/tianzhu/gongyuan": {
      "type": "ROOM",
      "short": "宫院",
      "exits": {
        "east": "/d/qujing/tianzhu/huayi",
        "west": "/d/qujing/tianzhu/zhaoyang"
      }
    },
    "/d/qujing/tianzhu/guaguo": {
      "type": "ROOM",
      "short": "瓜果店",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao65"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/zhang": 1
      }
    },
    "/d/qujing/tianzhu/guanglu": {
      "type": "ROOM",
      "short": "光禄寺",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao38"
      }
    },
    "/d/qujing/tianzhu/guaqian": {
      "type": "ROOM",
      "short": "卦签铺",
      "exits": {
        "west": "/d/qujing/tianzhu/jiedao61"
      }
    },
    "/d/qujing/tianzhu/hou1": {
      "type": "ROOM",
      "short": "后宫",
      "exits": {
        "east": "/d/qujing/tianzhu/hou2"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/girl": 2
      }
    },
    "/d/qujing/tianzhu/hou2": {
      "type": "ROOM",
      "short": "后宫",
      "exits": {
        "east": "/d/qujing/tianzhu/hou3",
        "west": "/d/qujing/tianzhu/hou1",
        "south": "/d/qujing/tianzhu/long"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/girl": 2
      }
    },
    "/d/qujing/tianzhu/hou3": {
      "type": "ROOM",
      "short": "后宫",
      "exits": {
        "east": "/d/qujing/tianzhu/hou4",
        "west": "/d/qujing/tianzhu/hou2",
        "south": "/d/qujing/tianzhu/yuhua"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/girl": 2,
        "/d/qujing/tianzhu/npc/fakegirl": 1
      }
    },
    "/d/qujing/tianzhu/hou4": {
      "type": "ROOM",
      "short": "后宫",
      "exits": {
        "east": "/d/qujing/tianzhu/hou5",
        "west": "/d/qujing/tianzhu/hou3",
        "south": "/d/qujing/tianzhu/feng"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/girl": 2
      }
    },
    "/d/qujing/tianzhu/hou5": {
      "type": "ROOM",
      "short": "后宫",
      "exits": {
        "west": "/d/qujing/tianzhu/hou4"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/girl": 2
      }
    },
    "/d/qujing/tianzhu/houyuan": {
      "type": "ROOM",
      "short": "后院",
      "exits": {
        "north": "/d/qujing/tianzhu/siyuan",
        "south": "/d/qujing/tianzhu/zhaifang",
        "northwest": "/d/qujing/tianzhu/baodian"
      }
    },
    "/d/qujing/tianzhu/huapu": {
      "type": "ROOM",
      "short": "花铺",
      "exits": {
        "south": "/d/qujing/tianzhu/jiedao13"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/dai": 1
      }
    },
    "/d/qujing/tianzhu/huayi": {
      "type": "ROOM",
      "short": "华夷阁",
      "exits": {
        "west": "/d/qujing/tianzhu/gongyuan"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/taijian": 1
      }
    },
    "/d/qujing/tianzhu/jiang": {
      "type": "ROOM",
      "short": "酱房",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao71"
      },
      "objects": {
        "/d/obj/food/salt": 2
      }
    },
    "/d/qujing/tianzhu/jiedao11": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao12",
        "south": "/d/qujing/tianzhu/jiedao21"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao12": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "west": "/d/qujing/tianzhu/jiedao11",
        "east": "/d/qujing/tianzhu/jiedao13",
        "south": "/d/qujing/tianzhu/jiuguan"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao13": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao14",
        "west": "/d/qujing/tianzhu/jiedao12",
        "north": "/d/qujing/tianzhu/huapu"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao14": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao15",
        "west": "/d/qujing/tianzhu/jiedao13"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao15": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao16",
        "west": "/d/qujing/tianzhu/jiedao14"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao16": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "west": "/d/qujing/tianzhu/jiedao15",
        "east": "/d/qujing/tianzhu/jiedao17",
        "north": "/d/qujing/tianzhu/zhuqi"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao17": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao18",
        "west": "/d/qujing/tianzhu/jiedao16"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao18": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "east": "/d/qujing/tianzhu/sishu",
        "west": "/d/qujing/tianzhu/jiedao17",
        "south": "/d/qujing/tianzhu/jiedao28"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao21": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/tianzhu/jiedao11",
        "east": "/d/qujing/tianzhu/jiuguan",
        "west": "/d/qujing/tianzhu/kedian",
        "south": "/d/qujing/tianzhu/jiedao31"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao28": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/tianzhu/jiedao18",
        "west": "/d/qujing/tianzhu/budao",
        "south": "/d/qujing/tianzhu/jiedao38"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao31": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "east": "/d/qujing/tianzhu/yaofang",
        "north": "/d/qujing/tianzhu/jiedao21",
        "south": "/d/qujing/tianzhu/jiedao41"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao38": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "west": "/d/qujing/tianzhu/guanglu",
        "north": "/d/qujing/tianzhu/jiedao28",
        "south": "/d/qujing/tianzhu/jiedao48"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao41": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "west": "/d/qujing/tianzhu/mafang",
        "north": "/d/qujing/tianzhu/jiedao31",
        "south": "/d/qujing/tianzhu/ximen"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao45": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/tianzhu/wumen",
        "south": "/d/qujing/tianzhu/shizi"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao48": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/tianzhu/jiedao38",
        "south": "/d/qujing/tianzhu/dongmen"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao52": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "west": "/d/qujing/tianzhu/ximen",
        "east": "/d/qujing/tianzhu/jiedao53"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao53": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "east": "/d/qujing/tianzhu/shizi",
        "west": "/d/qujing/tianzhu/jiedao52",
        "north": "/d/qujing/tianzhu/shuju"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao56": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao57",
        "west": "/d/qujing/tianzhu/shizi",
        "south": "/d/qujing/tianzhu/qian"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao57": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "east": "/d/qujing/tianzhu/dongmen",
        "west": "/d/qujing/tianzhu/jiedao56"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao61": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "east": "/d/qujing/tianzhu/guaqian",
        "south": "/d/qujing/tianzhu/jiedao71",
        "north": "/d/qujing/tianzhu/ximen"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao65": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "west": "/d/qujing/tianzhu/guaguo",
        "north": "/d/qujing/tianzhu/shizi",
        "south": "/d/qujing/tianzhu/jiedao75"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao68": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "west": "/d/qujing/tianzhu/maodian",
        "south": "/d/qujing/tianzhu/jiedao78",
        "north": "/d/qujing/tianzhu/dongmen"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao71": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "west": "/d/qujing/tianzhu/jiang",
        "north": "/d/qujing/tianzhu/jiedao61",
        "south": "/d/qujing/tianzhu/jiedao81"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao75": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "east": "/d/qujing/tianzhu/roupu",
        "west": "/d/qujing/tianzhu/shucai",
        "north": "/d/qujing/tianzhu/jiedao65",
        "south": "/d/qujing/tianzhu/jiedao85"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao78": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "west": "/d/qujing/tianzhu/xiedian",
        "south": "/d/qujing/tianzhu/jiedao88",
        "north": "/d/qujing/tianzhu/jiedao68"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao81": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "west": "/d/qujing/tianzhu/shuifang",
        "south": "/d/qujing/tianzhu/jiedao91",
        "north": "/d/qujing/tianzhu/jiedao71"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao85": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/tianzhu/jiedao75",
        "southwest": "/d/qujing/tianzhu/jiedao94",
        "southeast": "/d/qujing/tianzhu/jiedao95"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao88": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/tianzhu/jiedao78",
        "south": "/d/qujing/tianzhu/jiedao98"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao91": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "north": "/d/qujing/tianzhu/jiedao81",
        "east": "/d/qujing/tianzhu/jiedao92",
        "south": "/d/qujing/tianzhu/xiaochi"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao92": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao93",
        "west": "/d/qujing/tianzhu/jiedao91",
        "north": "/d/qujing/tianzhu/pidian"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao93": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao94",
        "west": "/d/qujing/tianzhu/jiedao92",
        "south": "/d/qujing/tianzhu/shoushi"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao94": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "west": "/d/qujing/tianzhu/jiedao93",
        "northeast": "/d/qujing/tianzhu/jiedao85",
        "southeast": "/d/qujing/tianzhu/nanmen"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao95": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "northwest": "/d/qujing/tianzhu/jiedao85",
        "southwest": "/d/qujing/tianzhu/nanmen",
        "east": "/d/qujing/tianzhu/jiedao96"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao96": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao97",
        "west": "/d/qujing/tianzhu/jiedao95",
        "north": "/d/qujing/tianzhu/chengyi",
        "south": "/d/qujing/tianzhu/dangpu"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao97": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao98",
        "west": "/d/qujing/tianzhu/jiedao96",
        "north": "/d/qujing/tianzhu/budian"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiedao98": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "west": "/d/qujing/tianzhu/jiedao97",
        "north": "/d/qujing/tianzhu/jiedao88"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 1
      }
    },
    "/d/qujing/tianzhu/jiming": {
      "type": "ROOM",
      "short": "鸡鸣关",
      "exits": {
        "north": "/d/qujing/tianzhu/shan1",
        "southeast": "/d/qujing/tianzhu/shan2"
      }
    },
    "/d/qujing/tianzhu/jinluan": {
      "type": "ROOM",
      "short": "金銮殿",
      "exits": {
        "south": "/d/qujing/tianzhu/zhaoyang",
        "north": "/d/qujing/tianzhu/yuhua"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/king": 1,
        "/d/qujing/tianzhu/npc/junji": 1,
        "/d/qujing/tianzhu/npc/taijian": 2
      }
    },
    "/d/qujing/tianzhu/jiuguan": {
      "type": "ROOM",
      "short": "酒馆",
      "exits": {
        "west": "/d/qujing/tianzhu/jiedao21",
        "north": "/d/qujing/tianzhu/jiedao12"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/huang": 1,
        "/d/obj/food/huasheng": 2
      }
    },
    "/d/qujing/tianzhu/kedian": {
      "type": "ROOM",
      "short": "客店",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao21"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/xin": 1
      }
    },
    "/d/qujing/tianzhu/long": {
      "type": "ROOM",
      "short": "龙阁",
      "exits": {
        "east": "/d/qujing/tianzhu/yuhua",
        "north": "/d/qujing/tianzhu/hou2"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/taijian": 2
      }
    },
    "/d/qujing/tianzhu/mafang": {
      "type": "ROOM",
      "short": "马店",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao41"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/ma": 1
      }
    },
    "/d/qujing/tianzhu/maodian": {
      "type": "ROOM",
      "short": "帽店",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao68"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/tian": 1
      }
    },
    "/d/qujing/tianzhu/nanmen": {
      "type": "ROOM",
      "short": "南门",
      "exits": {
        "northwest": "/d/qujing/tianzhu/jiedao94",
        "northeast": "/d/qujing/tianzhu/jiedao95",
        "south": "/d/qujing/tianzhu/dalu3"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/bing": 2
      }
    },
    "/d/qujing/tianzhu/pidian": {
      "type": "ROOM",
      "short": "皮店",
      "exits": {
        "south": "/d/qujing/tianzhu/jiedao92"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/shu": 1
      }
    },
    "/d/qujing/tianzhu/qian": {
      "type": "BANK",
      "short": "钱庄",
      "exits": {
        "north": "/d/qujing/tianzhu/jiedao56"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/situ": 1
      }
    },
    "/d/qujing/tianzhu/roupu": {
      "type": "ROOM",
      "short": "肉铺",
      "exits": {
        "west": "/d/qujing/tianzhu/jiedao75"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/qiao": 1
      }
    },
    "/d/qujing/tianzhu/shan1": {
      "type": "ROOM",
      "short": "山冈",
      "exits": {
        "northwest": "/d/qujing/tianzhu/dalu2",
        "south": "/d/qujing/tianzhu/jiming"
      }
    },
    "/d/qujing/tianzhu/shan2": {
      "type": "ROOM",
      "short": "山冈",
      "exits": {
        "northwest": "/d/qujing/tianzhu/jiming",
        "southeast": "/d/qujing/tianzhu/shan3"
      }
    },
    "/d/qujing/tianzhu/shan3": {
      "type": "ROOM",
      "short": "山冈",
      "exits": {
        "northwest": "/d/qujing/tianzhu/shan2",
        "south": "/d/qujing/tianzhu/shan4"
      }
    },
    "/d/qujing/tianzhu/shan4": {
      "type": "ROOM",
      "short": "山冈",
      "exits": {
        "north": "/d/qujing/tianzhu/shan3",
        "southwest": "/d/qujing/tianzhu/baijiao",
        "south": "/d/qujing/tianzhu/shan5"
      }
    },
    "/d/qujing/tianzhu/shan5": {
      "type": "ROOM",
      "short": "山冈",
      "exits": {
        "north": "/d/qujing/tianzhu/shan4",
        "east": "/d/qujing/jinping/cunlu1"
      }
    },
    "/d/qujing/tianzhu/shanmen": {
      "type": "ROOM",
      "short": "山门",
      "exits": {
        "south": "/d/qujing/tianzhu/siyuan",
        "northeast": "/d/qujing/tianzhu/baijiao"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/monk": 1
      }
    },
    "/d/qujing/tianzhu/shizi": {
      "type": "ROOM",
      "short": "十字街彩楼",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao56",
        "west": "/d/qujing/tianzhu/jiedao53",
        "north": "/d/qujing/tianzhu/jiedao45",
        "south": "/d/qujing/tianzhu/jiedao65"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/people": 5
      }
    },
    "/d/qujing/tianzhu/shoushi": {
      "type": "ROOM",
      "short": "首饰店",
      "exits": {
        "north": "/d/qujing/tianzhu/jiedao93"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/wu": 1
      }
    },
    "/d/qujing/tianzhu/shucai": {
      "type": "ROOM",
      "short": "蔬菜市场",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao75"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/wei": 1
      }
    },
    "/d/qujing/tianzhu/shuifang": {
      "type": "ROOM",
      "short": "水房",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao81"
      }
    },
    "/d/qujing/tianzhu/shuju": {
      "type": "ROOM",
      "short": "书局",
      "exits": {
        "south": "/d/qujing/tianzhu/jiedao53"
      }
    },
    "/d/qujing/tianzhu/sishu": {
      "type": "ROOM",
      "short": "私塾",
      "exits": {
        "west": "/d/qujing/tianzhu/jiedao18"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/yuan": 1,
        "/d/qujing/tianzhu/npc/kid": 3
      }
    },
    "/d/qujing/tianzhu/siyuan": {
      "type": "ROOM",
      "short": "寺院",
      "exits": {
        "west": "/d/qujing/tianzhu/baodian",
        "north": "/d/qujing/tianzhu/shanmen",
        "south": "/d/qujing/tianzhu/houyuan"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/monk": 1
      }
    },
    "/d/qujing/tianzhu/wumen": {
      "type": "ROOM",
      "short": "午门",
      "exits": {
        "north": "/d/qujing/tianzhu/zhaoyang",
        "south": "/d/qujing/tianzhu/jiedao45"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/bing": 2,
        "/d/qujing/tianzhu/npc/siwei": 2
      }
    },
    "/d/qujing/tianzhu/xiaochi": {
      "type": "ROOM",
      "short": "小吃店",
      "exits": {
        "north": "/d/qujing/tianzhu/jiedao91"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/fu": 1
      }
    },
    "/d/qujing/tianzhu/xiedian": {
      "type": "ROOM",
      "short": "鞋店",
      "exits": {
        "east": "/d/qujing/tianzhu/jiedao78"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/ji": 1
      }
    },
    "/d/qujing/tianzhu/ximen": {
      "type": "ROOM",
      "short": "西门",
      "exits": {
        "west": "/d/qujing/tianzhu/dalu1",
        "east": "/d/qujing/tianzhu/jiedao52",
        "north": "/d/qujing/tianzhu/jiedao41",
        "south": "/d/qujing/tianzhu/jiedao61"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/bing": 2
      }
    },
    "/d/qujing/tianzhu/yaofang": {
      "type": "ROOM",
      "short": "药房",
      "exits": {
        "west": "/d/qujing/tianzhu/jiedao31"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/hou": 1
      }
    },
    "/d/qujing/tianzhu/yuhua": {
      "type": "ROOM",
      "short": "御花园",
      "exits": {
        "east": "/d/qujing/tianzhu/feng",
        "west": "/d/qujing/tianzhu/long",
        "south": "/d/qujing/tianzhu/jinluan",
        "north": "/d/qujing/tianzhu/hou3"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/girl": 1
      }
    },
    "/d/qujing/tianzhu/zhaifang": {
      "type": "ROOM",
      "short": "斋房",
      "exits": {
        "north": "/d/qujing/tianzhu/houyuan"
      }
    },
    "/d/qujing/tianzhu/zhaoyang": {
      "type": "ROOM",
      "short": "昭阳宫",
      "exits": {
        "south": "/d/qujing/tianzhu/wumen",
        "east": "/d/qujing/tianzhu/gongyuan",
        "north": "/d/qujing/tianzhu/jinluan"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/taijian": 2
      }
    },
    "/d/qujing/tianzhu/zhuqi": {
      "type": "ROOM",
      "short": "竹器店",
      "exits": {
        "south": "/d/qujing/tianzhu/jiedao16"
      },
      "objects": {
        "/d/qujing/tianzhu/npc/shi": 1
      }
    },
    "/d/qujing/tongtian/bing1": {
      "type": "ROOM",
      "short": "冰道",
      "exits": {
        "west": "/d/qujing/tongtian/hexi3",
        "east": "/d/qujing/tongtian/bing2",
        "south": "/d/qujing/tongtian/bing3"
      },
      "objects": {
        "/d/qujing/tongtian/npc/people": null
      }
    },
    "/d/qujing/tongtian/bing2": {
      "type": "ROOM",
      "short": "冰道",
      "exits": {
        "west": "/d/qujing/tongtian/bing1",
        "east": "/d/qujing/tongtian/hedong2",
        "south": "/d/qujing/tongtian/bing4"
      },
      "objects": {
        "/d/qujing/tongtian/npc/people": null
      }
    },
    "/d/qujing/tongtian/bing3": {
      "type": "ROOM",
      "short": "冰道",
      "exits": {
        "west": "/d/qujing/tongtian/hexi4",
        "east": "/d/qujing/tongtian/bing4",
        "north": "/d/qujing/tongtian/bing1"
      },
      "objects": {
        "/d/qujing/tongtian/npc/people": null
      }
    },
    "/d/qujing/tongtian/bing4": {
      "type": "ROOM",
      "short": "冰道",
      "exits": {
        "west": "/d/qujing/tongtian/bing3",
        "east": "/d/qujing/tongtian/hedong3",
        "north": "/d/qujing/tongtian/bing2"
      },
      "objects": {
        "/d/qujing/tongtian/npc/people": null
      }
    },
    "/d/qujing/tongtian/chen1": {
      "type": "ROOM",
      "short": "陈家庄",
      "exits": {
        "north": "/d/qujing/tongtian/minju1",
        "west": "/d/qujing/tongtian/minju4",
        "east": "/d/qujing/tongtian/chen2",
        "south": "/d/qujing/tongtian/chen3"
      }
    },
    "/d/qujing/tongtian/chen2": {
      "type": "ROOM",
      "short": "陈家庄",
      "exits": {
        "northeast": "/d/qujing/tongtian/minju3",
        "northwest": "/d/qujing/tongtian/minju2",
        "west": "/d/qujing/tongtian/chen1",
        "southeast": "/d/qujing/tongtian/xiaolu3"
      },
      "objects": {
        "/d/qujing/tongtian/npc/vendor": 1
      }
    },
    "/d/qujing/tongtian/chen3": {
      "type": "ROOM",
      "short": "陈家庄",
      "exits": {
        "north": "/d/qujing/tongtian/chen1",
        "west": "/d/qujing/tongtian/xiaolu2",
        "east": "/d/qujing/tongtian/minju5",
        "southeast": "/d/qujing/tongtian/minju6"
      }
    },
    "/d/qujing/tongtian/hedi": {
      "type": "ROOM",
      "short": "河底",
      "exits": {
        "up": "/d/qujing/tongtian/bing2"
      },
      "objects": {
        "/d/qujing/tongtian/npc/yao": null,
        "/d/qujing/tongtian/npc/jinyu": 1
      }
    },
    "/d/qujing/tongtian/hedong1": {
      "type": "ROOM",
      "short": "河东",
      "exits": {
        "south": "/d/qujing/tongtian/hedong2"
      }
    },
    "/d/qujing/tongtian/hedong2": {
      "type": "ROOM",
      "short": "河东",
      "exits": {
        "north": "/d/qujing/tongtian/hedong1",
        "west": "/d/qujing/tongtian/bing2",
        "south": "/d/qujing/tongtian/hedong3"
      }
    },
    "/d/qujing/tongtian/hedong3": {
      "type": "ROOM",
      "short": "河东",
      "exits": {
        "north": "/d/qujing/tongtian/hedong2",
        "west": "/d/qujing/tongtian/bing4",
        "south": "/d/qujing/tongtian/hedong4"
      }
    },
    "/d/qujing/tongtian/hedong4": {
      "type": "ROOM",
      "short": "河东",
      "exits": {
        "north": "/d/qujing/tongtian/hedong3",
        "east": "/d/qujing/tongtian/xiaolu4",
        "south": "/d/qujing/tongtian/hedong5"
      }
    },
    "/d/qujing/tongtian/hedong5": {
      "type": "ROOM",
      "short": "河东",
      "exits": {
        "north": "/d/qujing/tongtian/hedong4",
        "south": "/d/qujing/tongtian/hedong6"
      }
    },
    "/d/qujing/tongtian/hedong6": {
      "type": "ROOM",
      "short": "河东",
      "exits": {
        "north": "/d/qujing/tongtian/hedong5"
      }
    },
    "/d/qujing/tongtian/hexi1": {
      "type": "ROOM",
      "short": "河西",
      "exits": {
        "south": "/d/qujing/tongtian/hexi2"
      }
    },
    "/d/qujing/tongtian/hexi2": {
      "type": "ROOM",
      "short": "河西",
      "exits": {
        "north": "/d/qujing/tongtian/hexi1",
        "south": "/d/qujing/tongtian/hexi3",
        "northwest": "/d/qujing/tongtian/xiaolu1"
      }
    },
    "/d/qujing/tongtian/hexi3": {
      "type": "ROOM",
      "short": "河西",
      "exits": {
        "north": "/d/qujing/tongtian/hexi2",
        "east": "/d/qujing/tongtian/bing1",
        "south": "/d/qujing/tongtian/hexi4"
      }
    },
    "/d/qujing/tongtian/hexi4": {
      "type": "ROOM",
      "short": "河西",
      "exits": {
        "north": "/d/qujing/tongtian/hexi3",
        "east": "/d/qujing/tongtian/bing3",
        "south": "/d/qujing/tongtian/hexi5"
      }
    },
    "/d/qujing/tongtian/hexi5": {
      "type": "ROOM",
      "short": "河西",
      "exits": {
        "north": "/d/qujing/tongtian/hexi4",
        "south": "/d/qujing/tongtian/hexi6"
      }
    },
    "/d/qujing/tongtian/hexi6": {
      "type": "ROOM",
      "short": "河西",
      "exits": {
        "north": "/d/qujing/tongtian/hexi5"
      }
    },
    "/d/qujing/tongtian/minju1": {
      "type": "ROOM",
      "short": "民居",
      "exits": {
        "out": "/d/qujing/tongtian/chen1"
      },
      "objects": {
        "/d/qujing/tongtian/npc/people": null,
        "/d/qujing/tongtian/npc/kid": null
      }
    },
    "/d/qujing/tongtian/minju2": {
      "type": "ROOM",
      "short": "民居",
      "exits": {
        "out": "/d/qujing/tongtian/chen2"
      },
      "objects": {
        "/d/qujing/tongtian/npc/people": null,
        "/d/qujing/tongtian/npc/kid": null
      }
    },
    "/d/qujing/tongtian/minju3": {
      "type": "ROOM",
      "short": "民居",
      "exits": {
        "out": "/d/qujing/tongtian/chen2"
      },
      "objects": {
        "/d/qujing/tongtian/npc/people": null,
        "/d/qujing/tongtian/npc/kid": null,
        "/d/qujing/tongtian/npc/ji": 1
      }
    },
    "/d/qujing/tongtian/minju4": {
      "type": "ROOM",
      "short": "民居",
      "exits": {
        "out": "/d/qujing/tongtian/chen1"
      },
      "objects": {
        "/d/qujing/tongtian/npc/kid": 1
      }
    },
    "/d/qujing/tongtian/minju5": {
      "type": "ROOM",
      "short": "民居",
      "exits": {
        "out": "/d/qujing/tongtian/chen3"
      },
      "objects": {
        "/d/qujing/tongtian/npc/people": null
      }
    },
    "/d/qujing/tongtian/minju6": {
      "type": "ROOM",
      "short": "民居",
      "exits": {
        "out": "/d/qujing/tongtian/chen3"
      },
      "objects": {
        "/d/qujing/tongtian/npc/people": null,
        "/d/qujing/tongtian/npc/kid": null
      }
    },
    "/d/qujing/tongtian/xiaolu1": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "southeast": "/d/qujing/tongtian/hexi2",
        "west": "/d/qujing/jindou/shanlu5"
      }
    },
    "/d/qujing/tongtian/xiaolu2": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "southwest": "/d/qujing/tongtian/xiaolu4",
        "east": "/d/qujing/tongtian/chen3"
      }
    },
    "/d/qujing/tongtian/xiaolu3": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "northwest": "/d/qujing/tongtian/chen2",
        "northeast": "/d/qujing/chechi/shatan5"
      }
    },
    "/d/qujing/tongtian/xiaolu4": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "northeast": "/d/qujing/tongtian/xiaolu2",
        "west": "/d/qujing/tongtian/hedong4"
      }
    },
    "/d/qujing/wudidong/bedroom-gate": {
      "type": "ROOM",
      "short": "彩楼",
      "objects": {
        "/d/qujing/wudidong/npc/kanmen": 2
      },
      "exits": {
        "west": "/d/qujing/wudidong/houdong",
        "east": "/d/qujing/wudidong/inner-bedroom"
      }
    },
    "/d/qujing/wudidong/bedroom": {
      "type": "ROOM",
      "short": "寝室",
      "objects": {
        "/d/qujing/wudidong/npc/fangzhang-temple": 1
      },
      "exits": {
        "southeast": "/d/qujing/wudidong/houyuan",
        "west": "/d/qujing/wudidong/temple-qiandian"
      }
    },
    "/d/qujing/wudidong/book-cave1": {
      "type": "ROOM",
      "short": "洞穴",
      "exits": {
        "northdown": "/d/qujing/wudidong/book-cave2.c",
        "up": "/d/qujing/wudidong/weaponry"
      }
    },
    "/d/qujing/wudidong/book-cave2": {
      "type": "ROOM",
      "short": "洞穴",
      "exits": {
        "southup": "/d/qujing/wudidong/book-cave1"
      }
    },
    "/d/qujing/wudidong/cave1": {
      "type": "ROOM",
      "short": "秘洞"
    },
    "/d/qujing/wudidong/cave2": {
      "type": "ROOM",
      "short": "绝崖",
      "exits": {
        "west": "/d/qujing/wudidong/gongshi"
      }
    },
    "/d/qujing/wudidong/daxiong-baodian": {
      "type": "ROOM",
      "short": "大雄宝殿",
      "exits": {
        "south": "/d/qujing/wudidong/temple"
      }
    },
    "/d/qujing/wudidong/dibaohouse": {
      "type": "ROOM",
      "short": "地保家",
      "exits": {
        "south": "/d/qujing/wudidong/road1"
      },
      "objects": {
        "/d/qujing/wudidong/npc/dibao": 1
      }
    },
    "/d/qujing/wudidong/dong": {
      "type": "ROOM",
      "short": "山顶",
      "exits": {
        "eastdown": "/d/qujing/wudidong/shanlu4"
      }
    },
    "/d/qujing/wudidong/dong1": {
      "type": "ROOM",
      "short": "洞门",
      "exits": {
        "north": "/d/qujing/wudidong/dong2",
        "up": "/d/qujing/wudidong/dong"
      }
    },
    "/d/qujing/wudidong/dong2": {
      "type": "ROOM",
      "short": "前洞",
      "exits": {
        "east": "/d/qujing/wudidong/wdd_bedroom",
        "south": "/d/qujing/wudidong/dong1",
        "west": "/d/qujing/wudidong/kitchen",
        "north": "/d/qujing/wudidong/square2"
      }
    },
    "/d/qujing/wudidong/dragon-room": {
      "type": "ROOM",
      "short": "龙穴",
      "exits": {
        "west": "/d/qujing/wudidong/well"
      },
      "objects": {
        "/d/qujing/wudidong/npc/dragon": 1
      }
    },
    "/d/qujing/wudidong/entrance": {
      "type": "ROOM",
      "short": "小村口",
      "exits": {
        "northeast": "/d/qujing/wudidong/firemount-wudidong3",
        "west": "/d/qujing/wudidong/road1"
      }
    },
    "/d/qujing/wudidong/exit": {
      "type": "ROOM",
      "short": "小村口",
      "exits": {
        "east": "/d/qujing/wudidong/road3",
        "west": "/d/qujing/qinfa/dalu3"
      }
    },
    "/d/qujing/wudidong/firemount-wudidong1": {
      "type": "ROOM",
      "short": "取经路",
      "exits": {
        "westup": "/d/qujing/wudidong/firemount-wudidong2",
        "southeast": "/d/qujing/biqiu/lin3"
      }
    },
    "/d/qujing/wudidong/firemount-wudidong2": {
      "type": "ROOM",
      "short": "小山头",
      "exits": {
        "southdown": "/d/qujing/wudidong/firemount-wudidong3",
        "eastdown": "/d/qujing/wudidong/firemount-wudidong1"
      }
    },
    "/d/qujing/wudidong/firemount-wudidong3": {
      "type": "ROOM",
      "short": "取经路",
      "exits": {
        "northup": "/d/qujing/wudidong/firemount-wudidong2",
        "southwest": "/d/qujing/wudidong/entrance"
      }
    },
    "/d/qujing/wudidong/gongshi": {
      "type": "ROOM",
      "short": "供室",
      "exits": {
        "up": "/d/qujing/wudidong/inner-tang",
        "east": "/d/qujing/wudidong/cave2"
      }
    },
    "/d/qujing/wudidong/guanjia": {
      "type": "ROOM",
      "short": "偏洞",
      "exits": {
        "east": "/d/qujing/wudidong/square2.c"
      },
      "objects": {
        "/d/qujing/wudidong/npc/tianshu": 1
      }
    },
    "/d/qujing/wudidong/houdong": {
      "type": "ROOM",
      "short": "后洞",
      "exits": {
        "south": "/d/qujing/wudidong/square2",
        "north": "/d/qujing/wudidong/tang-gate",
        "east": "/d/qujing/wudidong/bedroom-gate"
      },
      "objects": {
        "/d/qujing/wudidong/npc/zhangmen": 1
      }
    },
    "/d/qujing/wudidong/houyuan": {
      "type": "ROOM",
      "short": "后院",
      "exits": {
        "northwest": "/d/qujing/wudidong/bedroom"
      }
    },
    "/d/qujing/wudidong/inner-bedroom": {
      "type": "ROOM",
      "short": "寝室",
      "exits": {
        "west": "/d/qujing/wudidong/bedroom-gate"
      }
    },
    "/d/qujing/wudidong/inner-tang": {
      "type": "ROOM",
      "short": "大殿",
      "objects": {
        "/d/qujing/wudidong/npc/yushu": 1
      },
      "exits": {
        "south": "/d/qujing/wudidong/tang-gate"
      }
    },
    "/d/qujing/wudidong/jail": {
      "type": "ROOM",
      "short": "狱门",
      "exits": {
        "north": "/d/qujing/wudidong/monk",
        "south": "/d/qujing/wudidong/trap"
      },
      "objects": {
        "/d/qujing/wudidong/npc/ward": 2
      }
    },
    "/d/qujing/wudidong/kefang": {
      "type": "ROOM",
      "short": "客房",
      "exits": {
        "north": "/d/qujing/wudidong/shop"
      }
    },
    "/d/qujing/wudidong/kitchen": {
      "type": "ROOM",
      "short": "厨房",
      "exits": {
        "east": "/d/qujing/wudidong/dong2"
      },
      "objects": {
        "/d/qujing/wudidong/npc/yanshu": 1
      }
    },
    "/d/qujing/wudidong/lock": {
      "type": "ROOM",
      "short": "石洞",
      "exits": {
        "southeast": "/d/qujing/wudidong/houdong",
        "north": "/d/qujing/wudidong/trap"
      }
    },
    "/d/qujing/wudidong/mishi": {
      "type": "ROOM",
      "short": "暗室",
      "exits": {
        "out": "/d/qujing/wudidong/gongshi"
      }
    },
    "/d/qujing/wudidong/monk": {
      "type": "ROOM",
      "short": "狱中",
      "exits": {
        "south": "/d/qujing/wudidong/jail"
      },
      "objects": {
        "/d/qujing/wudidong/npc/fangzhang-jail": 1
      }
    },
    "/d/qujing/wudidong/npc/houdong": {
      "type": "ROOM",
      "short": "后洞",
      "exits": {
        "south": "/d/qujing/wudidong/npc/square2",
        "north": "/d/qujing/wudidong/npc/tang-gate",
        "east": "/d/qujing/wudidong/npc/bedroom-gate"
      }
    },
    "/d/qujing/wudidong/punish": {
      "type": "ROOM",
      "short": "黑暗中"
    },
    "/d/qujing/wudidong/road1": {
      "type": "ROOM",
      "short": "村中小路",
      "objects": {
        "/d/qujing/wudidong/npc/dog": 1,
        "/d/qujing/wudidong/npc/kid": 2
      },
      "exits": {
        "south": "/d/qujing/wudidong/temple-qiandian",
        "north": "/d/qujing/wudidong/dibaohouse",
        "west": "/d/qujing/wudidong/road2",
        "east": "/d/qujing/wudidong/entrance"
      }
    },
    "/d/qujing/wudidong/road2": {
      "type": "ROOM",
      "short": "村中小路",
      "exits": {
        "east": "/d/qujing/wudidong/road1",
        "north": "/d/qujing/wudidong/smithy",
        "south": "/d/qujing/wudidong/shop",
        "west": "/d/qujing/wudidong/road3"
      }
    },
    "/d/qujing/wudidong/road3": {
      "type": "ROOM",
      "short": "村中小路",
      "exits": {
        "west": "/d/qujing/wudidong/exit",
        "south": "/d/qujing/wudidong/zhanghome",
        "north": "/d/qujing/wudidong/xuetang",
        "east": "/d/qujing/wudidong/road2"
      }
    },
    "/d/qujing/wudidong/shanlu1": {
      "type": "ROOM",
      "short": "山腹",
      "exits": {
        "up": "/d/qujing/wudidong/temple-houdian",
        "southwest": "/d/qujing/wudidong/shanlu2"
      }
    },
    "/d/qujing/wudidong/shanlu2": {
      "type": "ROOM",
      "short": "山腹",
      "exits": {
        "northeast": "/d/qujing/wudidong/shanlu1",
        "southup": "/d/qujing/wudidong/shanlu3.c"
      }
    },
    "/d/qujing/wudidong/shanlu3": {
      "type": "ROOM",
      "short": "山谷",
      "exits": {
        "enter": "/d/qujing/wudidong/shanlu2",
        "southup": "/d/qujing/wudidong/shanlu4"
      }
    },
    "/d/qujing/wudidong/shanlu4": {
      "type": "ROOM",
      "short": "黑松林",
      "exits": {
        "westup": "/d/qujing/wudidong/dong",
        "northdown": "/d/qujing/wudidong/shanlu3"
      }
    },
    "/d/qujing/wudidong/shop": {
      "type": "ROOM",
      "short": "张家老店",
      "exits": {
        "north": "/d/qujing/wudidong/road2",
        "south": "/d/qujing/wudidong/kefang"
      },
      "objects": {
        "/d/qujing/wudidong/npc/waiter": 1
      }
    },
    "/d/qujing/wudidong/smithy": {
      "type": "ROOM",
      "short": "铁匠铺",
      "exits": {
        "south": "/d/qujing/wudidong/road2"
      },
      "objects": {
        "/d/qujing/wudidong/npc/smith.c": 1
      }
    },
    "/d/qujing/wudidong/square2": {
      "type": "ROOM",
      "short": "甬道",
      "exits": {
        "north": "/d/qujing/wudidong/houdong",
        "west": "/d/qujing/wudidong/guanjia.c",
        "south": "/d/qujing/wudidong/dong2",
        "east": "/d/qujing/wudidong/weaponry.c"
      }
    },
    "/d/qujing/wudidong/steamer": {
      "type": "ROOM",
      "short": "蒸笼"
    },
    "/d/qujing/wudidong/tang-gate": {
      "type": "ROOM",
      "short": "殿门",
      "objects": {
        "/d/qujing/wudidong/npc/hudian": 2
      },
      "exits": {
        "south": "/d/qujing/wudidong/houdong",
        "north": "/d/qujing/wudidong/inner-tang"
      }
    },
    "/d/qujing/wudidong/temple-gate": {
      "type": "ROOM",
      "short": "华严寺",
      "exits": {
        "north": "/d/qujing/wudidong/road1"
      }
    },
    "/d/qujing/wudidong/temple-houdian": {
      "type": "ROOM",
      "short": "后殿",
      "exits": {
        "north": "/d/qujing/wudidong/temple-qiandian"
      }
    },
    "/d/qujing/wudidong/temple-qiandian": {
      "type": "ROOM",
      "short": "小庙前殿",
      "exits": {
        "south": "/d/qujing/wudidong/temple-houdian",
        "north": "/d/qujing/wudidong/road1"
      }
    },
    "/d/qujing/wudidong/trap": {
      "type": "ROOM",
      "short": "石洞深处",
      "exits": {
        "north": "/d/qujing/wudidong/jail",
        "south": "/d/qujing/wudidong/lock"
      }
    },
    "/d/qujing/wudidong/wdd_bedroom": {
      "type": "ROOM",
      "short": "卧房",
      "exits": {
        "west": "/d/qujing/wudidong/dong2"
      }
    },
    "/d/qujing/wudidong/weaponry": {
      "type": "ROOM",
      "short": "兵器库",
      "exits": {
        "west": "/d/qujing/wudidong/square2"
      },
      "objects": {
        "/d/qujing/wudidong/npc/bishu.c": 1
      }
    },
    "/d/qujing/wudidong/well": {
      "type": "ROOM",
      "short": "井底",
      "exits": {
        "up": "/d/qujing/wudidong/houyuan",
        "east": "/d/qujing/wudidong/dragon-room"
      }
    },
    "/d/qujing/wudidong/xuetang": {
      "type": "ROOM",
      "short": "学堂",
      "exits": {
        "south": "/d/qujing/wudidong/road3"
      },
      "objects": {
        "/d/qujing/wudidong/npc/xiucai": 1,
        "/d/qujing/wudidong/npc/boy": 2,
        "/d/qujing/wudidong/npc/girl": 2
      }
    },
    "/d/qujing/wudidong/zhanghome": {
      "type": "ROOM",
      "short": "老张家",
      "exits": {
        "north": "/d/qujing/wudidong/road3"
      },
      "objects": {
        "/d/qujing/wudidong/npc/oldzhang": 1
      }
    },
    "/d/qujing/wuji/backyard": {
      "type": "ROOM",
      "short": "后院",
      "exits": {
        "south": "/d/qujing/wuji/eastroom"
      }
    },
    "/d/qujing/wuji/bedroom": {
      "type": "ROOM",
      "short": "寝宫",
      "exits": {
        "north": "/d/qujing/wuji/garden"
      }
    },
    "/d/qujing/wuji/east": {
      "type": "ROOM",
      "short": "东厢房",
      "exits": {
        "north": ""
      }
    },
    "/d/qujing/wuji/eastgate": {
      "type": "ROOM",
      "short": "东门",
      "exits": {
        "east": "/d/qujing/wuji/street2",
        "west": "/d/qujing/wuji/estreet"
      }
    },
    "/d/qujing/wuji/eastroom": {
      "type": "ROOM",
      "short": "东厢房",
      "exits": {
        "north": "/d/qujing/wuji/backyard",
        "west": "/d/qujing/wuji/zheng"
      }
    },
    "/d/qujing/wuji/estreet": {
      "type": "ROOM",
      "short": "坤元街",
      "exits": {
        "west": "/d/qujing/wuji/estreet2.c",
        "south": "/d/qujing/wuji/fruit.c",
        "east": "/d/qujing/wuji/eastgate"
      },
      "objects": {
        "/d/qujing/wuji/npc/people": 3
      }
    },
    "/d/qujing/wuji/estreet2": {
      "type": "ROOM",
      "short": "坤元街",
      "exits": {
        "west": "/d/qujing/wuji/square.c",
        "south": "/d/qujing/wuji/kezhan.c",
        "east": "/d/qujing/wuji/estreet"
      },
      "objects": {
        "/d/qujing/wuji/npc/people": 3
      }
    },
    "/d/qujing/wuji/fruit": {
      "type": "ROOM",
      "short": "四季水果店",
      "objects": {
        "/d/qujing/wuji/npc/vender.c": 1
      },
      "exits": {
        "north": "/d/qujing/wuji/estreet.c"
      }
    },
    "/d/qujing/wuji/garden": {
      "type": "ROOM",
      "short": "后院",
      "exits": {
        "west": "/d/qujing/wuji/house.c",
        "south": "/d/qujing/wuji/bedroom.c",
        "east": "/d/qujing/wuji/stable.c",
        "north": "/d/qujing/wuji/shufang.c"
      }
    },
    "/d/qujing/wuji/hilltop": {
      "type": "ROOM",
      "short": "山顶",
      "exits": {
        "northdown": "/d/qujing/wuji/road5"
      },
      "objects": {
        "/d/qujing/wuji/npc/prince": 1,
        "/d/qujing/wuji/npc/siwei": 2
      }
    },
    "/d/qujing/wuji/house": {
      "type": "ROOM",
      "short": "太子府",
      "exits": {
        "west": "/d/qujing/wuji/nstreet2",
        "northeast": "/d/qujing/wuji/shufang.c",
        "east": "/d/qujing/wuji/garden.c"
      },
      "objects": {
        "/d/qujing/wuji/npc/siwei": 2
      }
    },
    "/d/qujing/wuji/huilang": {
      "type": "ROOM",
      "short": "白玉回廊",
      "exits": {
        "west": "/d/qujing/wuji/jxt.c",
        "south": "/d/qujing/wuji/palace",
        "north": "/d/qujing/wuji/huilang2.c"
      },
      "objects": {
        "/d/qujing/wuji/npc/girl": 2
      }
    },
    "/d/qujing/wuji/huilang2": {
      "type": "ROOM",
      "short": "白玉回廊",
      "exits": {
        "enter": "/d/qujing/wuji/yuhua",
        "south": "/d/qujing/wuji/huilang",
        "west": "/d/qujing/wuji/ziyun.c"
      },
      "objects": {
        "/d/qujing/wuji/npc/girl": 1
      }
    },
    "/d/qujing/wuji/hzm": {
      "type": "ROOM",
      "short": "后宰门",
      "exits": {
        "east": "/d/qujing/wuji/jxt",
        "south": "/d/qujing/wuji/wall.c"
      },
      "objects": {
        "/d/qujing/wuji/npc/taijian": 2
      }
    },
    "/d/qujing/wuji/jxt": {
      "type": "ROOM",
      "short": "锦香亭",
      "exits": {
        "west": "/d/qujing/wuji/hzm.c",
        "north": "/d/qujing/wuji/qiyutan.c",
        "east": "/d/qujing/wuji/huilang.c"
      },
      "objects": {
        "/d/qujing/wuji/npc/queen": 1,
        "/d/qujing/wuji/npc/girl": 3
      }
    },
    "/d/qujing/wuji/kezhan": {
      "type": "ROOM",
      "short": "坤元客栈",
      "objects": {
        "/d/qujing/wuji/npc/xiaoer": 1
      },
      "exits": {
        "up": "/d/qujing/wuji/up",
        "north": "/d/qujing/wuji/estreet2"
      }
    },
    "/d/qujing/wuji/not_used/zixia": {
      "type": "ROOM",
      "short": "紫霞宫",
      "exits": {
        "south": "/d/qujing/wuji/not_used/palace"
      }
    },
    "/d/qujing/wuji/nstreet": {
      "type": "ROOM",
      "short": "乾元街",
      "exits": {
        "south": "/d/qujing/wuji/square",
        "north": "/d/qujing/wuji/nstreet2.c"
      },
      "objects": {
        "/d/qujing/wuji/npc/people": 3
      }
    },
    "/d/qujing/wuji/nstreet2": {
      "type": "ROOM",
      "short": "乾元街",
      "exits": {
        "south": "/d/qujing/wuji/nstreet",
        "east": "/d/qujing/wuji/house.c",
        "north": "/d/qujing/wuji/zym.c"
      },
      "objects": {
        "/d/qujing/wuji/npc/people": 3
      }
    },
    "/d/qujing/wuji/palace": {
      "type": "ROOM",
      "short": "昭泽殿",
      "exits": {
        "north": "/d/qujing/wuji/huilang.c",
        "south": "/d/qujing/wuji/zym.c"
      },
      "objects": {
        "/d/qujing/wuji/npc/taijian": 2,
        "/d/qujing/wuji/npc/chen": 3,
        "/d/qujing/wuji/npc/kingfake": 1
      }
    },
    "/d/qujing/wuji/piandian": {
      "type": "ROOM",
      "short": "前殿",
      "exits": {
        "out": "/d/qujing/wuji/temple",
        "north": "/d/qujing/wuji/zheng"
      }
    },
    "/d/qujing/wuji/qiyutan": {
      "type": "ROOM",
      "short": "祈雨坛",
      "exits": {
        "south": "/d/qujing/wuji/jxt"
      },
      "objects": {
        "/d/qujing/wuji/npc/taijian": 1
      }
    },
    "/d/qujing/wuji/road1": {
      "type": "ROOM",
      "short": "山路",
      "objects": {
        "/d/qujing/wuji/npc/shanji": 1
      },
      "exits": {
        "west": "/d/qujing/wuji/road2"
      }
    },
    "/d/qujing/wuji/road2": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "east": "/d/qujing/wuji/road1",
        "westup": "/d/qujing/wuji/road3"
      }
    },
    "/d/qujing/wuji/road3": {
      "type": "ROOM",
      "short": "山路",
      "objects": {
        "/d/qujing/wuji/npc/shanji": 1
      },
      "exits": {
        "northwest": "/d/qujing/wuji/road4.c",
        "eastdown": "/d/qujing/wuji/road2.c"
      }
    },
    "/d/qujing/wuji/road4": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "southeast": "/d/qujing/wuji/road3",
        "northwest": "/d/qujing/wuji/temple",
        "west": "/d/qujing/wuji/road5.c"
      }
    },
    "/d/qujing/wuji/road5": {
      "type": "ROOM",
      "short": "山路",
      "objects": {
        "/d/qujing/wuji/npc/shanji": 1
      },
      "exits": {
        "southup": "/d/qujing/wuji/hilltop",
        "east": "/d/qujing/wuji/road4",
        "north": "/d/qujing/wuji/temple.c",
        "westdown": "/d/qujing/wuji/road6"
      }
    },
    "/d/qujing/wuji/road6": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northwest": "/d/qujing/wuji/road7",
        "eastup": "/d/qujing/wuji/road5"
      }
    },
    "/d/qujing/wuji/road7": {
      "type": "ROOM",
      "short": "山路",
      "objects": {
        "/d/qujing/wuji/npc/shanji": 1
      },
      "exits": {
        "southeast": "/d/qujing/wuji/road6",
        "westdown": "/d/qujing/wuji/street1"
      }
    },
    "/d/qujing/wuji/rxg": {
      "type": "ROOM",
      "short": "蕊祥宫"
    },
    "/d/qujing/wuji/shandao1": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "northeast": "/d/qujing/pingding/shan4",
        "southwest": "/d/qujing/wuji/shandao2"
      }
    },
    "/d/qujing/wuji/shandao2": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "northeast": "/d/qujing/wuji/shandao1",
        "southwest": "/d/qujing/wuji/street1"
      }
    },
    "/d/qujing/wuji/shandao3": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "west": "/d/qujing/wuji/shandao4",
        "northeast": "/d/qujing/wuji/street1"
      }
    },
    "/d/qujing/wuji/shandao4": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "east": "/d/qujing/wuji/shandao3",
        "southwest": "/d/qujing/wuji/shandao5"
      }
    },
    "/d/qujing/wuji/shandao5": {
      "type": "ROOM",
      "short": "山道",
      "exits": {
        "northwest": "/d/qujing/chechi/shatan3",
        "northeast": "/d/qujing/wuji/shandao4"
      }
    },
    "/d/qujing/wuji/shufang": {
      "type": "ROOM",
      "short": "书房",
      "exits": {
        "south": "/d/qujing/wuji/garden",
        "southwest": "/d/qujing/wuji/house.c"
      }
    },
    "/d/qujing/wuji/shuijing": {
      "type": "ROOM",
      "short": "水晶宫",
      "exits": {
        "up": "/d/qujing/wuji/well",
        "east": "/d/qujing/wuji/shuijing",
        "west": "/d/qujing/wuji/shuijing",
        "south": "/d/qujing/wuji/shuijing",
        "north": "/d/qujing/wuji/shuijing"
      }
    },
    "/d/qujing/wuji/square": {
      "type": "ROOM",
      "short": "乾坤广场",
      "exits": {
        "east": "/d/qujing/wuji/estreet2",
        "north": "/d/qujing/wuji/nstreet.c"
      }
    },
    "/d/qujing/wuji/stable": {
      "type": "ROOM",
      "short": "马槽",
      "exits": {
        "west": "/d/qujing/wuji/garden.c"
      }
    },
    "/d/qujing/wuji/street1": {
      "type": "ROOM",
      "short": "山脚",
      "exits": {
        "northeast": "/d/qujing/wuji/shandao2",
        "west": "/d/qujing/wuji/street2",
        "eastup": "/d/qujing/wuji/road7",
        "southwest": "/d/qujing/wuji/shandao3"
      }
    },
    "/d/qujing/wuji/street2": {
      "type": "ROOM",
      "short": "官道",
      "exits": {
        "east": "/d/qujing/wuji/street1",
        "west": "/d/qujing/wuji/eastgate"
      }
    },
    "/d/qujing/wuji/temple": {
      "type": "ROOM",
      "short": "宝林寺",
      "exits": {
        "southeast": "/d/qujing/wuji/road4",
        "enter": "/d/qujing/wuji/piandian.c",
        "south": "/d/qujing/wuji/road5.c"
      },
      "objects": {
        "/d/qujing/wuji/npc/monk2": 2,
        "/d/qujing/wuji/npc/monk1": 1
      }
    },
    "/d/qujing/wuji/up": {
      "type": "ROOM",
      "short": "二楼客房",
      "exits": {
        "down": "/d/qujing/wuji/kezhan"
      }
    },
    "/d/qujing/wuji/wall": {
      "type": "ROOM",
      "short": "宫墙外围",
      "exits": {
        "north": "/d/qujing/wuji/hzm",
        "east": "/d/qujing/wuji/wall2"
      },
      "objects": {
        "/d/qujing/wuji/npc/weishi": 2
      }
    },
    "/d/qujing/wuji/wall2": {
      "type": "ROOM",
      "short": "宫墙外围",
      "exits": {
        "west": "/d/qujing/wuji/wall",
        "east": "/d/qujing/wuji/wall3"
      },
      "objects": {
        "/d/qujing/wuji/npc/weishi": 2
      }
    },
    "/d/qujing/wuji/wall3": {
      "type": "ROOM",
      "short": "宫墙外围",
      "exits": {
        "west": "/d/qujing/wuji/wall2",
        "east": "/d/qujing/wuji/zym"
      },
      "objects": {
        "/d/qujing/wuji/npc/weishi": 3
      }
    },
    "/d/qujing/wuji/well": {
      "type": "ROOM",
      "short": "井底",
      "exits": {
        "up": "/d/qujing/wuji/yuhua",
        "down": "/d/qujing/wuji/shuijing"
      }
    },
    "/d/qujing/wuji/westree": {
      "type": "ROOM",
      "short": "东大街",
      "exits": {
        "east": "/d/qujing/wuji/eastgate"
      }
    },
    "/d/qujing/wuji/westroom": {
      "type": "ROOM",
      "short": "西厢房",
      "exits": {
        "east": "/d/qujing/wuji/zheng"
      }
    },
    "/d/qujing/wuji/yuhua": {
      "type": "ROOM",
      "short": "御花园",
      "exits": {
        "out": "/d/qujing/wuji/huilang2.c",
        "down": "/d/qujing/wuji/well"
      }
    },
    "/d/qujing/wuji/zheng": {
      "type": "ROOM",
      "short": "大雄宝殿",
      "objects": {
        "/d/qujing/wuji/npc/monk1": 1
      },
      "exits": {
        "east": "/d/qujing/wuji/eastroom.c",
        "south": "/d/qujing/wuji/piandian.c",
        "west": "/d/qujing/wuji/westroom.c"
      }
    },
    "/d/qujing/wuji/ziyun": {
      "type": "ROOM",
      "short": "紫云宫",
      "exits": {
        "east": "/d/qujing/wuji/huilang2"
      }
    },
    "/d/qujing/wuji/zym": {
      "type": "ROOM",
      "short": "正阳门",
      "exits": {
        "south": "/d/qujing/wuji/nstreet2",
        "north": "/d/qujing/wuji/palace.c",
        "west": "/d/qujing/wuji/wall3"
      }
    },
    "/d/qujing/wuzhuang/anshi": {
      "type": "ROOM",
      "short": "亭底暗室",
      "exits": {
        "up": "/d/qujing/wuzhuang/mudanting"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/baicaidi": {
      "type": "ROOM",
      "short": "白菜地",
      "exits": {
        "south": "/d/qujing/wuzhuang/qiezidi",
        "northwest": "/d/qujing/wuzhuang/xiguadi"
      },
      "objects": {
        "/d/obj/food/dbc": 2,
        "/d/obj/food/xbc": 2
      }
    },
    "/d/qujing/wuzhuang/chengyun": {
      "type": "ROOM",
      "short": "乘云阁",
      "exits": {
        "down": "/d/qujing/wuzhuang/yanzhen"
      },
      "objects": {
        "/d/qujing/wuzhuang/npc/zhenyuan": 1
      }
    },
    "/d/qujing/wuzhuang/eastway1": {
      "type": "ROOM",
      "short": "东小廊",
      "exits": {
        "southup": "/d/qujing/wuzhuang/xunzhen",
        "north": "/d/qujing/wuzhuang/eastway2",
        "west": "/d/qujing/wuzhuang/guangchang"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/eastway2": {
      "type": "ROOM",
      "short": "东小廊",
      "exits": {
        "south": "/d/qujing/wuzhuang/eastway1",
        "north": "/d/qujing/wuzhuang/eastway3",
        "west": "/d/qujing/wuzhuang/epiandian"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/eastway3": {
      "type": "ROOM",
      "short": "东小廊",
      "exits": {
        "south": "/d/qujing/wuzhuang/eastway2",
        "north": "/d/qujing/wuzhuang/eastway4",
        "east": "/d/qujing/wuzhuang/zongge"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/eastway4": {
      "type": "ROOM",
      "short": "东小廊",
      "exits": {
        "south": "/d/qujing/wuzhuang/eastway3",
        "north": "/d/qujing/wuzhuang/eastway5"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/eastway5": {
      "type": "ROOM",
      "short": "东小廊",
      "exits": {
        "south": "/d/qujing/wuzhuang/eastway4",
        "north": "/d/qujing/wuzhuang/eastway6",
        "west": "/d/qujing/wuzhuang/zaifang"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/eastway6": {
      "type": "ROOM",
      "short": "东小廊",
      "exits": {
        "south": "/d/qujing/wuzhuang/eastway5",
        "west": "/d/qujing/wuzhuang/houdian"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/epiandian": {
      "type": "ROOM",
      "short": "东偏殿",
      "exits": {
        "east": "/d/qujing/wuzhuang/eastway2",
        "west": "/d/qujing/wuzhuang/zhengdian",
        "north": "/d/qujing/wuzhuang/shuofa"
      },
      "objects": {
        "/d/qujing/wuzhuang/npc/mingyue": 1
      }
    },
    "/d/qujing/wuzhuang/gate": {
      "type": "ROOM",
      "short": "观门",
      "exits": {
        "southdown": "/d/qujing/wuzhuang/linyin2",
        "northup": "/d/qujing/wuzhuang/shaoxiang"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/guangchang": {
      "type": "ROOM",
      "short": "殿前广场",
      "exits": {
        "southdown": "/d/qujing/wuzhuang/linkway",
        "enter": "/d/qujing/wuzhuang/zhengdian",
        "east": "/d/qujing/wuzhuang/eastway1",
        "west": "/d/qujing/wuzhuang/westway1"
      },
      "objects": {
        "/d/qujing/wuzhuang/npc/tieguaili": 1
      }
    },
    "/d/qujing/wuzhuang/guge": {
      "type": "ROOM",
      "short": "鼓阁",
      "exits": {
        "east": "/d/qujing/wuzhuang/westway3"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/houdian": {
      "type": "ROOM",
      "short": "后殿",
      "exits": {
        "north": "/d/qujing/wuzhuang/houyuan",
        "east": "/d/qujing/wuzhuang/eastway6",
        "west": "/d/qujing/wuzhuang/westway6"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/houyuan": {
      "type": "ROOM",
      "short": "后院",
      "exits": {
        "north": "/d/qujing/wuzhuang/juyuan",
        "south": "/d/qujing/wuzhuang/houdian"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/huangguadi": {
      "type": "ROOM",
      "short": "黄瓜地",
      "exits": {
        "south": "/d/qujing/wuzhuang/northpool",
        "northeast": "/d/qujing/wuzhuang/qiezidi",
        "northwest": "/d/qujing/wuzhuang/luobodi"
      },
      "objects": {
        "/d/obj/food/dhg": 3
      }
    },
    "/d/qujing/wuzhuang/huludi": {
      "type": "ROOM",
      "short": "葫芦地",
      "exits": {
        "northeast": "/d/qujing/wuzhuang/xiguadi",
        "south": "/d/qujing/wuzhuang/luobodi"
      },
      "objects": {
        "/d/obj/food/hulu": 2
      }
    },
    "/d/qujing/wuzhuang/inpool": {
      "type": "ROOM",
      "short": "荷塘中",
      "exits": {
        "up": "/d/qujing/wuzhuang/southpool"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/jiangjing": {
      "type": "ROOM",
      "short": "讲经堂",
      "exits": {
        "south": "/d/qujing/wuzhuang/wpiandian",
        "eastup": "/d/qujing/wuzhuang/yanzhen"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/juyuan": {
      "type": "ROOM",
      "short": "菊园",
      "exits": {
        "northeast": "/d/qujing/wuzhuang/mudanting",
        "northwest": "/d/qujing/wuzhuang/shuoyaopu",
        "south": "/d/qujing/wuzhuang/houyuan"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/linkway": {
      "type": "ROOM",
      "short": "青砖道",
      "exits": {
        "south": "/d/qujing/wuzhuang/secondgate",
        "northup": "/d/qujing/wuzhuang/guangchang"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/linyin1": {
      "type": "ROOM",
      "short": "林荫小道",
      "exits": {
        "southeast": "/d/qujing/wuzhuang/shanlu2",
        "north": "/d/qujing/wuzhuang/linyin2"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/linyin2": {
      "type": "ROOM",
      "short": "林荫小道",
      "exits": {
        "south": "/d/qujing/wuzhuang/linyin1",
        "northup": "/d/qujing/wuzhuang/gate"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/luobodi": {
      "type": "ROOM",
      "short": "萝卜地",
      "exits": {
        "north": "/d/qujing/wuzhuang/huludi",
        "southeast": "/d/qujing/wuzhuang/huangguadi"
      },
      "objects": {
        "/d/obj/food/carrot": 3
      }
    },
    "/d/qujing/wuzhuang/mudanting": {
      "type": "ROOM",
      "short": "牡丹亭",
      "exits": {
        "southwest": "/d/qujing/wuzhuang/juyuan",
        "north": "/d/qujing/wuzhuang/southpool",
        "down": "/d/qujing/wuzhuang/anshi"
      },
      "objects": {
        "/d/obj/misc/table": 1,
        "/d/qujing/wuzhuang/npc/hanzhongli": 1
      }
    },
    "/d/qujing/wuzhuang/northpool": {
      "type": "ROOM",
      "short": "荷塘边",
      "exits": {
        "south": "/d/qujing/wuzhuang/wzgmaze5",
        "north": "/d/qujing/wuzhuang/huangguadi"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/qiezidi": {
      "type": "ROOM",
      "short": "茄子地",
      "exits": {
        "southwest": "/d/qujing/wuzhuang/huangguadi",
        "north": "/d/qujing/wuzhuang/baicaidi"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/renshenguo-yuan": {
      "type": "ROOM",
      "short": "人参果园",
      "exits": {},
      "objects": {}
    },
    "/d/qujing/wuzhuang/secondgate": {
      "type": "ROOM",
      "short": "二山门",
      "exits": {
        "southdown": "/d/qujing/wuzhuang/shaoxiang",
        "north": "/d/qujing/wuzhuang/linkway"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/shanlu1": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northup": "/d/qujing/wuzhuang/shanlu2",
        "south": "/d/westway/yunti"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/shanlu2": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northwest": "/d/qujing/wuzhuang/linyin1",
        "southdown": "/d/qujing/wuzhuang/shanlu1"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/shaoxiang": {
      "type": "ROOM",
      "short": "烧香坊",
      "exits": {
        "southdown": "/d/qujing/wuzhuang/gate",
        "northup": "/d/qujing/wuzhuang/secondgate"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/shuofa": {
      "type": "ROOM",
      "short": "说法堂",
      "exits": {
        "south": "/d/qujing/wuzhuang/epiandian",
        "westup": "/d/qujing/wuzhuang/yanzhen"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/shuoyaopu": {
      "type": "ROOM",
      "short": "芍药圃",
      "exits": {
        "southeast": "/d/qujing/wuzhuang/juyuan",
        "north": "/d/qujing/wuzhuang/southpool"
      },
      "objects": {
        "/d/qujing/wuzhuang/npc/hexiangu": 1,
        "/d/qujing/wuzhuang/npc/girl": 3
      }
    },
    "/d/qujing/wuzhuang/sleep": {
      "type": "ROOM",
      "short": "睡房",
      "exits": {
        "west": "/d/qujing/wuzhuang/westway5"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/southpool": {
      "type": "ROOM",
      "short": "荷塘边",
      "exits": {
        "southwest": "/d/qujing/wuzhuang/shuoyaopu",
        "southeast": "/d/qujing/wuzhuang/mudanting",
        "north": "/d/qujing/wuzhuang/wzgmaze1"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/wangxian": {
      "type": "ROOM",
      "short": "望仙台",
      "exits": {
        "northdown": "/d/qujing/wuzhuang/westway1"
      },
      "objects": {
        "/d/qujing/wuzhuang/npc/lancaihe": 1
      }
    },
    "/d/qujing/wuzhuang/westway1": {
      "type": "ROOM",
      "short": "西小廊",
      "exits": {
        "southup": "/d/qujing/wuzhuang/wangxian",
        "north": "/d/qujing/wuzhuang/westway2",
        "east": "/d/qujing/wuzhuang/guangchang"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/westway2": {
      "type": "ROOM",
      "short": "西小廊",
      "exits": {
        "south": "/d/qujing/wuzhuang/westway1",
        "north": "/d/qujing/wuzhuang/westway3",
        "east": "/d/qujing/wuzhuang/wpiandian"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/westway3": {
      "type": "ROOM",
      "short": "西小廊",
      "exits": {
        "south": "/d/qujing/wuzhuang/westway2",
        "north": "/d/qujing/wuzhuang/westway4",
        "west": "/d/qujing/wuzhuang/guge"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/westway4": {
      "type": "ROOM",
      "short": "西小廊",
      "exits": {
        "south": "/d/qujing/wuzhuang/westway3",
        "north": "/d/qujing/wuzhuang/westway5"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/westway5": {
      "type": "ROOM",
      "short": "西小廊",
      "exits": {
        "south": "/d/qujing/wuzhuang/westway4",
        "north": "/d/qujing/wuzhuang/westway6",
        "east": "/d/qujing/wuzhuang/sleep"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/westway6": {
      "type": "ROOM",
      "short": "西小廊",
      "exits": {
        "south": "/d/qujing/wuzhuang/westway5",
        "east": "/d/qujing/wuzhuang/houdian"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/wpiandian": {
      "type": "ROOM",
      "short": "西偏殿",
      "exits": {
        "north": "/d/qujing/wuzhuang/jiangjing",
        "east": "/d/qujing/wuzhuang/zhengdian",
        "west": "/d/qujing/wuzhuang/westway2"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/wzgmaze1": {
      "type": "ROOM",
      "short": "八卦桥",
      "exits": {
        "north": "/d/qujing/wuzhuang/wzgmaze5",
        "northeast": "/d/qujing/wuzhuang/wzgmaze2",
        "northwest": "/d/qujing/wuzhuang/wzgmaze8"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/wzgmaze2": {
      "type": "ROOM",
      "short": "八卦桥",
      "exits": {
        "southwest": "/d/qujing/wuzhuang/wzgmaze1",
        "northeast": "/d/qujing/wuzhuang/wzgmaze3",
        "northwest": "/d/qujing/wuzhuang/wzgmaze6"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/wzgmaze3": {
      "type": "ROOM",
      "short": "八卦桥",
      "exits": {
        "west": "/d/qujing/wuzhuang/wzgmaze7",
        "southwest": "/d/qujing/wuzhuang/wzgmaze2",
        "northwest": "/d/qujing/wuzhuang/wzgmaze4"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/wzgmaze4": {
      "type": "ROOM",
      "short": "八卦桥",
      "exits": {
        "northwest": "/d/qujing/wuzhuang/wzgmaze5",
        "southeast": "/d/qujing/wuzhuang/wzgmaze3",
        "southwest": "/d/qujing/wuzhuang/wzgmaze8"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/wzgmaze5": {
      "type": "ROOM",
      "short": "八卦桥",
      "exits": {
        "south": "/d/qujing/wuzhuang/wzgmaze1",
        "southeast": "/d/qujing/wuzhuang/wzgmaze4",
        "southwest": "/d/qujing/wuzhuang/wzgmaze6"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/wzgmaze6": {
      "type": "ROOM",
      "short": "八卦桥",
      "exits": {
        "southeast": "/d/qujing/wuzhuang/wzgmaze2",
        "northeast": "/d/qujing/wuzhuang/wzgmaze5",
        "southwest": "/d/qujing/wuzhuang/wzgmaze7"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/wzgmaze7": {
      "type": "ROOM",
      "short": "八卦桥",
      "exits": {
        "east": "/d/qujing/wuzhuang/wzgmaze3",
        "northeast": "/d/qujing/wuzhuang/wzgmaze6",
        "southeast": "/d/qujing/wuzhuang/wzgmaze8"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/wzgmaze8": {
      "type": "ROOM",
      "short": "八卦桥",
      "exits": {
        "southeast": "/d/qujing/wuzhuang/wzgmaze1",
        "northeast": "/d/qujing/wuzhuang/wzgmaze4",
        "northwest": "/d/qujing/wuzhuang/wzgmaze7"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/xiguadi": {
      "type": "ROOM",
      "short": "西瓜地",
      "exits": {
        "southeast": "/d/qujing/wuzhuang/baicaidi",
        "southwest": "/d/qujing/wuzhuang/huludi"
      },
      "objects": {
        "/d/obj/food/watermellon": 3
      }
    },
    "/d/qujing/wuzhuang/xunzhen": {
      "type": "ROOM",
      "short": "寻真台",
      "exits": {
        "northdown": "/d/qujing/wuzhuang/eastway1"
      },
      "objects": {
        "/d/qujing/wuzhuang/npc/hanxiangzi": 1
      }
    },
    "/d/qujing/wuzhuang/yanzhen": {
      "type": "ROOM",
      "short": "延真楼",
      "exits": {
        "eastdown": "/d/qujing/wuzhuang/shuofa",
        "up": "/d/qujing/wuzhuang/chengyun",
        "westdown": "/d/qujing/wuzhuang/jiangjing"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/zaifang": {
      "type": "ROOM",
      "short": "斋房",
      "exits": {
        "east": "/d/qujing/wuzhuang/eastway5"
      },
      "objects": {}
    },
    "/d/qujing/wuzhuang/zhengdian": {
      "type": "ROOM",
      "short": "正殿",
      "exits": {
        "out": "/d/qujing/wuzhuang/guangchang",
        "east": "/d/qujing/wuzhuang/epiandian",
        "west": "/d/qujing/wuzhuang/wpiandian"
      },
      "objects": {
        "/d/qujing/wuzhuang/npc/qingfeng": 1,
        "/d/qujing/wuzhuang/npc/caoguojiu": 1
      }
    },
    "/d/qujing/wuzhuang/zongge": {
      "type": "ROOM",
      "short": "钟阁",
      "exits": {
        "west": "/d/qujing/wuzhuang/eastway3"
      },
      "objects": {}
    },
    "/d/qujing/xiaoxitian/baoge": {
      "type": "ROOM",
      "short": "宝阁",
      "exits": {
        "north": "/d/qujing/xiaoxitian/daxiong"
      },
      "objects": {
        "/d/qujing/xiaoxitian/npc/tong": 3
      }
    },
    "/d/qujing/xiaoxitian/caiyuan": {
      "type": "ROOM",
      "short": "菜园",
      "exits": {
        "northeast": "/d/qujing/xiaoxitian/siyuan",
        "south": "/d/qujing/xiaoxitian/chanfang"
      }
    },
    "/d/qujing/xiaoxitian/chanfang": {
      "type": "ROOM",
      "short": "禅房",
      "exits": {
        "north": "/d/qujing/xiaoxitian/caiyuan"
      },
      "objects": {
        "/d/qujing/xiaoxitian/obj/jinnao": 1
      }
    },
    "/d/qujing/xiaoxitian/daxiong": {
      "type": "ROOM",
      "short": "大雄宝殿",
      "exits": {
        "north": "/d/qujing/xiaoxitian/zhenlou",
        "south": "/d/qujing/xiaoxitian/baoge",
        "west": "/d/qujing/xiaoxitian/siyuan",
        "east": "/d/qujing/xiaoxitian/houdian"
      },
      "objects": {
        "/d/qujing/xiaoxitian/npc/xiaotong": 3,
        "/d/qujing/xiaoxitian/npc/huangmei": 1
      }
    },
    "/d/qujing/xiaoxitian/houdian": {
      "type": "ROOM",
      "short": "后殿",
      "exits": {
        "west": "/d/qujing/xiaoxitian/daxiong"
      },
      "objects": {
        "/d/qujing/xiaoxitian/npc/tong": 3
      }
    },
    "/d/qujing/xiaoxitian/lindao1": {
      "type": "ROOM",
      "short": "林道",
      "exits": {
        "east": "/d/qujing/xiaoxitian/lindao2",
        "southwest": "/d/qujing/xiaoxitian/lindao8"
      }
    },
    "/d/qujing/xiaoxitian/lindao10": {
      "type": "ROOM",
      "short": "林道",
      "exits": {
        "northeast": "/d/qujing/xiaoxitian/lindao3",
        "west": "/d/qujing/xiaoxitian/lindao9"
      }
    },
    "/d/qujing/xiaoxitian/lindao11": {
      "type": "ROOM",
      "short": "林道",
      "exits": {
        "northwest": "/d/qujing/xiaoxitian/lindao9",
        "southeast": "/d/qujing/xiaoxitian/simen"
      }
    },
    "/d/qujing/xiaoxitian/lindao2": {
      "type": "ROOM",
      "short": "林道",
      "exits": {
        "south": "/d/qujing/xiaoxitian/lindao9",
        "west": "/d/qujing/xiaoxitian/lindao1"
      }
    },
    "/d/qujing/xiaoxitian/lindao3": {
      "type": "ROOM",
      "short": "林道",
      "exits": {
        "east": "/d/qujing/xiaoxitian/lindao4",
        "southwest": "/d/qujing/xiaoxitian/lindao10"
      }
    },
    "/d/qujing/xiaoxitian/lindao4": {
      "type": "ROOM",
      "short": "林道",
      "exits": {
        "east": "/d/qujing/xiaoxitian/lindao5",
        "west": "/d/qujing/xiaoxitian/lindao3"
      }
    },
    "/d/qujing/xiaoxitian/lindao5": {
      "type": "ROOM",
      "short": "林道",
      "exits": {
        "east": "/d/qujing/xiaoxitian/lindao6",
        "west": "/d/qujing/xiaoxitian/lindao4"
      }
    },
    "/d/qujing/xiaoxitian/lindao6": {
      "type": "ROOM",
      "short": "林道",
      "exits": {
        "west": "/d/qujing/xiaoxitian/lindao5",
        "southeast": "/d/qujing/jisaiguo/pingxi1"
      }
    },
    "/d/qujing/xiaoxitian/lindao7": {
      "type": "ROOM",
      "short": "林道",
      "exits": {
        "east": "/d/qujing/xiaoxitian/lindao8",
        "southwest": "/d/qujing/zhuzi/lin1"
      }
    },
    "/d/qujing/xiaoxitian/lindao8": {
      "type": "ROOM",
      "short": "林道",
      "exits": {
        "northeast": "/d/qujing/xiaoxitian/lindao1",
        "west": "/d/qujing/xiaoxitian/lindao7"
      }
    },
    "/d/qujing/xiaoxitian/lindao9": {
      "type": "ROOM",
      "short": "林道",
      "exits": {
        "north": "/d/qujing/xiaoxitian/lindao2",
        "east": "/d/qujing/xiaoxitian/lindao10",
        "southeast": "/d/qujing/xiaoxitian/lindao11"
      }
    },
    "/d/qujing/xiaoxitian/simen": {
      "type": "ROOM",
      "short": "寺门",
      "exits": {
        "northwest": "/d/qujing/xiaoxitian/lindao11",
        "south": "/d/qujing/xiaoxitian/siyuan"
      }
    },
    "/d/qujing/xiaoxitian/siyuan": {
      "type": "ROOM",
      "short": "寺院",
      "exits": {
        "north": "/d/qujing/xiaoxitian/simen",
        "southwest": "/d/qujing/xiaoxitian/caiyuan",
        "east": "/d/qujing/xiaoxitian/daxiong"
      }
    },
    "/d/qujing/xiaoxitian/zhenlou": {
      "type": "ROOM",
      "short": "珍楼",
      "exits": {
        "south": "/d/qujing/xiaoxitian/daxiong"
      },
      "objects": {
        "/d/qujing/xiaoxitian/npc/tong": 3,
        "/d/qujing/xiaoxitian/obj/zhaiguo": 2
      }
    },
    "/d/qujing/yinwu/bopiting": {
      "type": "ROOM",
      "short": "剥皮亭",
      "exits": {
        "north": "/d/qujing/yinwu/houyuan",
        "west": "/d/qujing/yinwu/zhong",
        "east": "/d/qujing/yinwu/tianjing",
        "southeast": "/d/qujing/yinwu/rouku"
      },
      "objects": {
        "/d/qujing/yinwu/npc/yaojing": 2
      }
    },
    "/d/qujing/yinwu/caopo1": {
      "type": "ROOM",
      "short": "草坡",
      "exits": {
        "east": "/d/qujing/yinwu/lukou",
        "southeast": "/d/qujing/yinwu/caopo3"
      }
    },
    "/d/qujing/yinwu/caopo2": {
      "type": "ROOM",
      "short": "草坡",
      "exits": {
        "northwest": "/d/qujing/yinwu/lukou",
        "southeast": "/d/qujing/yinwu/caopo4"
      }
    },
    "/d/qujing/yinwu/caopo3": {
      "type": "ROOM",
      "short": "草坡",
      "exits": {
        "northwest": "/d/qujing/yinwu/caopo1",
        "southwest": "/d/qujing/yinwu/caopo5",
        "northeast": "/d/qujing/yinwu/lukou"
      }
    },
    "/d/qujing/yinwu/caopo4": {
      "type": "ROOM",
      "short": "草坡",
      "exits": {
        "northwest": "/d/qujing/yinwu/caopo2",
        "southeast": "/d/qujing/yinwu/huangye1"
      }
    },
    "/d/qujing/yinwu/caopo5": {
      "type": "ROOM",
      "short": "草坡",
      "exits": {
        "northeast": "/d/qujing/yinwu/caopo3"
      }
    },
    "/d/qujing/yinwu/houyuan": {
      "type": "ROOM",
      "short": "后园",
      "exits": {
        "south": "/d/qujing/yinwu/bopiting"
      },
      "objects": {
        "/d/qujing/yinwu/npc/qiaozi": 1
      }
    },
    "/d/qujing/yinwu/huangye1": {
      "type": "ROOM",
      "short": "荒野",
      "exits": {
        "northeast": "/d/qujing/yinwu/jiankou2",
        "northwest": "/d/qujing/yinwu/caopo4",
        "southwest": "/d/qujing/yinwu/huangye5",
        "southeast": "/d/qujing/yinwu/huangye6"
      }
    },
    "/d/qujing/yinwu/huangye2": {
      "type": "ROOM",
      "short": "荒野",
      "exits": {
        "east": "/d/qujing/yinwu/huangye3",
        "west": "/d/qujing/fengxian/dalu1"
      }
    },
    "/d/qujing/yinwu/huangye3": {
      "type": "ROOM",
      "short": "荒野",
      "exits": {
        "west": "/d/qujing/yinwu/huangye2",
        "east": "/d/qujing/yinwu/huangye4"
      }
    },
    "/d/qujing/yinwu/huangye4": {
      "type": "ROOM",
      "short": "荒野",
      "exits": {
        "west": "/d/qujing/yinwu/huangye3",
        "east": "/d/qujing/yinwu/huangye5"
      }
    },
    "/d/qujing/yinwu/huangye5": {
      "type": "ROOM",
      "short": "荒野",
      "exits": {
        "west": "/d/qujing/yinwu/huangye4",
        "northeast": "/d/qujing/yinwu/huangye1"
      }
    },
    "/d/qujing/yinwu/huangye6": {
      "type": "ROOM",
      "short": "荒野",
      "exits": {
        "east": "/d/qujing/yinwu/huangye7",
        "northwest": "/d/qujing/yinwu/huangye1",
        "southwest": "/d/qujing/yinwu/huangye8"
      }
    },
    "/d/qujing/yinwu/huangye7": {
      "type": "ROOM",
      "short": "荒野",
      "exits": {
        "west": "/d/qujing/yinwu/huangye6",
        "east": "/d/qujing/qinfa/dalu14"
      }
    },
    "/d/qujing/yinwu/huangye8": {
      "type": "ROOM",
      "short": "荒野",
      "exits": {
        "northeast": "/d/qujing/yinwu/huangye6",
        "southeast": "/d/qujing/yinwu/maowu"
      }
    },
    "/d/qujing/yinwu/jiankou1": {
      "type": "ROOM",
      "short": "涧口",
      "exits": {
        "northup": "/d/qujing/yinwu/xuanya7"
      }
    },
    "/d/qujing/yinwu/jiankou2": {
      "type": "ROOM",
      "short": "涧口",
      "exits": {
        "southwest": "/d/qujing/yinwu/huangye1"
      }
    },
    "/d/qujing/yinwu/lukou": {
      "type": "ROOM",
      "short": "路口",
      "exits": {
        "northwest": "/d/qujing/yinwu/xuanya5",
        "northeast": "/d/qujing/yinwu/xuanya3",
        "west": "/d/qujing/yinwu/caopo1",
        "southwest": "/d/qujing/yinwu/caopo3",
        "southeast": "/d/qujing/yinwu/caopo2"
      },
      "objects": {
        "/d/qujing/yinwu/npc/shanyao": 3
      }
    },
    "/d/qujing/yinwu/maowu": {
      "type": "ROOM",
      "short": "茅屋",
      "exits": {
        "northwest": "/d/qujing/yinwu/huangye8"
      },
      "objects": {
        "/d/qujing/yinwu/npc/laofu": 1
      }
    },
    "/d/qujing/yinwu/pian": {
      "type": "ROOM",
      "short": "偏堂",
      "exits": {
        "east": "/d/qujing/yinwu/zhong",
        "northwest": "/d/qujing/yinwu/shanmen"
      }
    },
    "/d/qujing/yinwu/rouku": {
      "type": "ROOM",
      "short": "肉库",
      "exits": {
        "northwest": "/d/qujing/yinwu/bopiting"
      },
      "objects": {
        "/d/qujing/yinwu/obj/rou": 8
      }
    },
    "/d/qujing/yinwu/shanmen": {
      "type": "ROOM",
      "short": "山门",
      "exits": {}
    },
    "/d/qujing/yinwu/tianjing": {
      "type": "ROOM",
      "short": "天井",
      "exits": {
        "west": "/d/qujing/yinwu/bopiting"
      },
      "objects": {
        "/d/qujing/yinwu/npc/xiaoyao": 4
      }
    },
    "/d/qujing/yinwu/xuanya1": {
      "type": "ROOM",
      "short": "悬崖",
      "exits": {
        "east": "/d/qujing/yinwu/xuanya2",
        "southwest": "/d/qujing/yinwu/xuanya6"
      }
    },
    "/d/qujing/yinwu/xuanya2": {
      "type": "ROOM",
      "short": "悬崖",
      "exits": {
        "west": "/d/qujing/yinwu/xuanya1",
        "southdown": "/d/qujing/yinwu/xuanya5"
      }
    },
    "/d/qujing/yinwu/xuanya3": {
      "type": "ROOM",
      "short": "悬崖",
      "exits": {
        "southwest": "/d/qujing/yinwu/lukou",
        "east": "/d/qujing/yinwu/xuanya4"
      }
    },
    "/d/qujing/yinwu/xuanya4": {
      "type": "ROOM",
      "short": "悬崖",
      "exits": {
        "west": "/d/qujing/yinwu/xuanya3",
        "southeast": "/d/qujing/yinwu/xuanya7"
      }
    },
    "/d/qujing/yinwu/xuanya5": {
      "type": "ROOM",
      "short": "悬崖",
      "exits": {
        "northup": "/d/qujing/yinwu/xuanya2",
        "southeast": "/d/qujing/yinwu/lukou"
      }
    },
    "/d/qujing/yinwu/xuanya6": {
      "type": "ROOM",
      "short": "悬崖",
      "exits": {
        "northeast": "/d/qujing/yinwu/xuanya1",
        "southdown": "/d/qujing/yinwu/xuanya8"
      }
    },
    "/d/qujing/yinwu/xuanya7": {
      "type": "ROOM",
      "short": "悬崖",
      "exits": {
        "northwest": "/d/qujing/yinwu/xuanya4",
        "southdown": "/d/qujing/yinwu/jiankou1"
      },
      "objects": {
        "/d/qujing/yinwu/npc/xiaoyao": 2
      }
    },
    "/d/qujing/yinwu/xuanya8": {
      "type": "ROOM",
      "short": "悬崖",
      "exits": {
        "northup": "/d/qujing/yinwu/xuanya6"
      }
    },
    "/d/qujing/yinwu/zhong": {
      "type": "ROOM",
      "short": "中堂",
      "exits": {
        "east": "/d/qujing/yinwu/bopiting",
        "west": "/d/qujing/yinwu/pian"
      },
      "objects": {
        "/d/qujing/yinwu/npc/yaowang": 1
      }
    },
    "/d/qujing/yuhua/changshi": {
      "type": "ROOM",
      "short": "长史馆",
      "exits": {
        "east": "/d/qujing/yuhua/xiaojie5"
      },
      "objects": {
        "/d/qujing/yuhua/npc/chaiguan": 1
      }
    },
    "/d/qujing/yuhua/da": {
      "type": "ROOM",
      "short": "大王子府",
      "exits": {
        "west": "/d/qujing/yuhua/dayuan",
        "east": "/d/qujing/yuhua/er"
      },
      "objects": {
        "/d/qujing/yuhua/npc/dianguan": 2,
        "/d/qujing/yuhua/npc/prince1": 1
      }
    },
    "/d/qujing/yuhua/daike": {
      "type": "ROOM",
      "short": "待客馆",
      "exits": {
        "west": "/d/qujing/yuhua/xiaojie9"
      },
      "objects": {
        "/d/qujing/yuhua/npc/chaiguan": 1
      }
    },
    "/d/qujing/yuhua/dayuan": {
      "type": "ROOM",
      "short": "大院",
      "exits": {
        "north": "/d/qujing/yuhua/fumen",
        "south": "/d/qujing/yuhua/zheng",
        "east": "/d/qujing/yuhua/da"
      }
    },
    "/d/qujing/yuhua/dianshan": {
      "type": "ROOM",
      "short": "典膳所",
      "exits": {
        "north": "/d/qujing/yuhua/xiaojie8"
      },
      "objects": {
        "/d/qujing/yuhua/npc/chaiguan": 1
      }
    },
    "/d/qujing/yuhua/er": {
      "type": "ROOM",
      "short": "二王子府",
      "exits": {
        "west": "/d/qujing/yuhua/da",
        "east": "/d/qujing/yuhua/xiao"
      },
      "objects": {
        "/d/qujing/yuhua/npc/dianguan": 2,
        "/d/qujing/yuhua/npc/prince2": 1
      }
    },
    "/d/qujing/yuhua/fumen": {
      "type": "ROOM",
      "short": "府门",
      "exits": {
        "north": "/d/qujing/yuhua/xiaojie7",
        "south": "/d/qujing/yuhua/dayuan"
      },
      "objects": {
        "/d/qujing/yuhua/npc/bing": 2
      }
    },
    "/d/qujing/yuhua/geguan": {
      "type": "ROOM",
      "short": "歌馆",
      "exits": {
        "west": "/d/qujing/yuhua/xiaojie3"
      },
      "objects": {
        "/d/qujing/yuhua/npc/genu": 1
      }
    },
    "/d/qujing/yuhua/jiulou": {
      "type": "ROOM",
      "short": "酒楼",
      "exits": {
        "east": "/d/qujing/yuhua/xiaojie3"
      },
      "objects": {
        "/d/qujing/yuhua/npc/jiubao": 1
      }
    },
    "/d/qujing/yuhua/menlou": {
      "type": "ROOM",
      "short": "门楼",
      "exits": {
        "north": "/d/qujing/yuhua/xiaolu11",
        "south": "/d/qujing/yuhua/xiaojie1",
        "west": "/d/qujing/yuhua/shi2",
        "east": "/d/qujing/yuhua/shi3"
      },
      "objects": {
        "/d/qujing/yuhua/npc/bing": 4
      }
    },
    "/d/qujing/yuhua/shaoying": {
      "type": "ROOM",
      "short": "哨营",
      "exits": {
        "west": "/d/qujing/yuhua/xiaojie1"
      },
      "objects": {
        "/d/qujing/yuhua/npc/bing": 3
      }
    },
    "/d/qujing/yuhua/shenli": {
      "type": "ROOM",
      "short": "审理厅",
      "exits": {
        "north": "/d/qujing/yuhua/xiaojie6"
      },
      "objects": {
        "/d/qujing/yuhua/npc/chaiguan": 1
      }
    },
    "/d/qujing/yuhua/shi1": {
      "type": "ROOM",
      "short": "石墙",
      "exits": {
        "east": "/d/qujing/yuhua/shi2"
      }
    },
    "/d/qujing/yuhua/shi2": {
      "type": "ROOM",
      "short": "石墙",
      "exits": {
        "west": "/d/qujing/yuhua/shi1",
        "east": "/d/qujing/yuhua/menlou"
      }
    },
    "/d/qujing/yuhua/shi3": {
      "type": "ROOM",
      "short": "石墙",
      "exits": {
        "east": "/d/qujing/yuhua/shi4",
        "west": "/d/qujing/yuhua/menlou"
      }
    },
    "/d/qujing/yuhua/shi4": {
      "type": "ROOM",
      "short": "石墙",
      "exits": {
        "west": "/d/qujing/yuhua/shi3"
      }
    },
    "/d/qujing/yuhua/tiejiang": {
      "type": "ROOM",
      "short": "铁匠铺",
      "exits": {
        "east": "/d/qujing/yuhua/xiaojie2"
      },
      "objects": {
        "/d/qujing/yuhua/npc/tiejiang": 1
      }
    },
    "/d/qujing/yuhua/ting": {
      "type": "ROOM",
      "short": "暴纱亭",
      "exits": {
        "northeast": "/d/qujing/yuhua/zheng"
      }
    },
    "/d/qujing/yuhua/xiao": {
      "type": "ROOM",
      "short": "小王子府",
      "exits": {
        "west": "/d/qujing/yuhua/er"
      },
      "objects": {
        "/d/qujing/yuhua/npc/dianguan": 2,
        "/d/qujing/yuhua/npc/prince3": 1
      }
    },
    "/d/qujing/yuhua/xiaojie1": {
      "type": "ROOM",
      "short": "小街",
      "exits": {
        "north": "/d/qujing/yuhua/menlou",
        "south": "/d/qujing/yuhua/xiaojie2",
        "east": "/d/qujing/yuhua/shaoying"
      },
      "objects": {
        "/d/qujing/yuhua/npc/people": 2
      }
    },
    "/d/qujing/yuhua/xiaojie2": {
      "type": "ROOM",
      "short": "小街",
      "exits": {
        "north": "/d/qujing/yuhua/xiaojie1",
        "south": "/d/qujing/yuhua/xiaojie3",
        "west": "/d/qujing/yuhua/tiejiang"
      },
      "objects": {
        "/d/qujing/yuhua/npc/people": 2
      }
    },
    "/d/qujing/yuhua/xiaojie3": {
      "type": "ROOM",
      "short": "小街",
      "exits": {
        "north": "/d/qujing/yuhua/xiaojie2",
        "south": "/d/qujing/yuhua/xiaojie4",
        "east": "/d/qujing/yuhua/geguan",
        "west": "/d/qujing/yuhua/jiulou"
      },
      "objects": {
        "/d/qujing/yuhua/npc/people": 2
      }
    },
    "/d/qujing/yuhua/xiaojie4": {
      "type": "ROOM",
      "short": "小街",
      "exits": {
        "north": "/d/qujing/yuhua/xiaojie3",
        "south": "/d/qujing/yuhua/xiaojie7"
      },
      "objects": {
        "/d/qujing/yuhua/npc/people": 2
      }
    },
    "/d/qujing/yuhua/xiaojie5": {
      "type": "ROOM",
      "short": "小街",
      "exits": {
        "east": "/d/qujing/yuhua/xiaojie6",
        "west": "/d/qujing/yuhua/changshi"
      }
    },
    "/d/qujing/yuhua/xiaojie6": {
      "type": "ROOM",
      "short": "小街",
      "exits": {
        "west": "/d/qujing/yuhua/xiaojie5",
        "south": "/d/qujing/yuhua/shenli",
        "east": "/d/qujing/yuhua/xiaojie7"
      }
    },
    "/d/qujing/yuhua/xiaojie7": {
      "type": "ROOM",
      "short": "小街",
      "exits": {
        "north": "/d/qujing/yuhua/xiaojie4",
        "south": "/d/qujing/yuhua/fumen",
        "east": "/d/qujing/yuhua/xiaojie8",
        "west": "/d/qujing/yuhua/xiaojie6"
      }
    },
    "/d/qujing/yuhua/xiaojie8": {
      "type": "ROOM",
      "short": "小街",
      "exits": {
        "west": "/d/qujing/yuhua/xiaojie7",
        "south": "/d/qujing/yuhua/dianshan",
        "east": "/d/qujing/yuhua/xiaojie9"
      }
    },
    "/d/qujing/yuhua/xiaojie9": {
      "type": "ROOM",
      "short": "小街",
      "exits": {
        "west": "/d/qujing/yuhua/xiaojie8",
        "east": "/d/qujing/yuhua/daike"
      }
    },
    "/d/qujing/yuhua/xiaolu1": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "southwest": "/d/qujing/yuhua/xiaolu2",
        "northeast": "/d/qujing/zhujie/shanlu18"
      }
    },
    "/d/qujing/yuhua/xiaolu10": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "northwest": "/d/qujing/yuhua/xiaolu8",
        "east": "/d/qujing/fengxian/dalu9"
      }
    },
    "/d/qujing/yuhua/xiaolu11": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "south": "/d/qujing/yuhua/menlou",
        "north": "/d/qujing/yuhua/xiaolu9"
      }
    },
    "/d/qujing/yuhua/xiaolu2": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "northwest": "/d/qujing/baotou/shanlu10",
        "northeast": "/d/qujing/yuhua/xiaolu1",
        "southeast": "/d/qujing/yuhua/xiaolu6"
      }
    },
    "/d/qujing/yuhua/xiaolu3": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "east": "/d/qujing/yuhua/xiaolu4",
        "northwest": "/d/qujing/jinping/cunlu9"
      }
    },
    "/d/qujing/yuhua/xiaolu4": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "west": "/d/qujing/yuhua/xiaolu3",
        "east": "/d/qujing/yuhua/xiaolu5"
      }
    },
    "/d/qujing/yuhua/xiaolu5": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "west": "/d/qujing/yuhua/xiaolu4",
        "east": "/d/qujing/yuhua/xiaolu6"
      }
    },
    "/d/qujing/yuhua/xiaolu6": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "west": "/d/qujing/yuhua/xiaolu5",
        "east": "/d/qujing/yuhua/xiaolu7",
        "northwest": "/d/qujing/yuhua/xiaolu2",
        "south": "/d/qujing/yuhua/xiaolu9"
      }
    },
    "/d/qujing/yuhua/xiaolu7": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "west": "/d/qujing/yuhua/xiaolu6",
        "east": "/d/qujing/yuhua/xiaolu8"
      }
    },
    "/d/qujing/yuhua/xiaolu8": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "west": "/d/qujing/yuhua/xiaolu7",
        "southeast": "/d/qujing/yuhua/xiaolu10"
      }
    },
    "/d/qujing/yuhua/xiaolu9": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "south": "/d/qujing/yuhua/xiaolu11",
        "north": "/d/qujing/yuhua/xiaolu6"
      }
    },
    "/d/qujing/yuhua/zheng": {
      "type": "ROOM",
      "short": "正府",
      "exits": {
        "north": "/d/qujing/yuhua/dayuan",
        "southwest": "/d/qujing/yuhua/ting"
      },
      "objects": {
        "/d/qujing/yuhua/npc/dianguan": 2,
        "/d/qujing/yuhua/npc/prince": 1
      }
    },
    "/d/qujing/zhujie/can": {
      "type": "ROOM",
      "short": "餐厅",
      "exits": {
        "west": "/d/qujing/zhujie/shimen",
        "northeast": "/d/qujing/zhujie/cang"
      },
      "objects": {
        "/d/qujing/zhujie/npc/yao": 2
      }
    },
    "/d/qujing/zhujie/cang": {
      "type": "ROOM",
      "short": "仓库",
      "exits": {
        "southwest": "/d/qujing/zhujie/can"
      }
    },
    "/d/qujing/zhujie/da": {
      "type": "ROOM",
      "short": "大厅",
      "exits": {
        "west": "/d/qujing/zhujie/zou",
        "southeast": "/d/qujing/zhujie/shimen"
      },
      "objects": {
        "/d/qujing/zhujie/npc/yao": 2
      }
    },
    "/d/qujing/zhujie/guo": {
      "type": "ROOM",
      "short": "过道",
      "exits": {
        "west": "/d/qujing/zhujie/wai",
        "northeast": "/d/qujing/zhujie/zou"
      }
    },
    "/d/qujing/zhujie/nei": {
      "type": "ROOM",
      "short": "内宫",
      "exits": {
        "northeast": "/d/qujing/zhujie/pian"
      },
      "objects": {
        "/d/qujing/zhujie/npc/shi": 1
      }
    },
    "/d/qujing/zhujie/pian": {
      "type": "ROOM",
      "short": "偏宫",
      "exits": {
        "east": "/d/qujing/zhujie/zhong",
        "southwest": "/d/qujing/zhujie/nei"
      },
      "objects": {
        "/d/qujing/zhujie/npc/yao": 2
      }
    },
    "/d/qujing/zhujie/shanlu1": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "east": "/d/qujing/zhujie/shanlu2",
        "southwest": "/d/qujing/zhujie/shanlu5"
      }
    },
    "/d/qujing/zhujie/shanlu10": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northeast": "/d/qujing/zhujie/shimen",
        "west": "/d/qujing/zhujie/shanlu9",
        "east": "/d/qujing/zhujie/shanlu11"
      }
    },
    "/d/qujing/zhujie/shanlu11": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "west": "/d/qujing/zhujie/shanlu10",
        "southeast": "/d/qujing/zhujie/shanlu14"
      }
    },
    "/d/qujing/zhujie/shanlu12": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northup": "/d/qujing/zhujie/shanlu8",
        "southwest": "/d/qujing/zhujie/shanlu14"
      }
    },
    "/d/qujing/zhujie/shanlu13": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northup": "/d/qujing/zhujie/shanlu9",
        "southwest": "/d/qujing/zhujie/shanlu15"
      }
    },
    "/d/qujing/zhujie/shanlu14": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northeast": "/d/qujing/zhujie/shanlu12",
        "northwest": "/d/qujing/zhujie/shanlu11"
      }
    },
    "/d/qujing/zhujie/shanlu15": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northeast": "/d/qujing/zhujie/shanlu13",
        "southeast": "/d/qujing/zhujie/shanlu16"
      }
    },
    "/d/qujing/zhujie/shanlu16": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northwest": "/d/qujing/zhujie/shanlu15",
        "southdown": "/d/qujing/zhujie/shanlu17"
      }
    },
    "/d/qujing/zhujie/shanlu17": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northup": "/d/qujing/zhujie/shanlu16",
        "southwest": "/d/qujing/zhujie/shanlu18"
      }
    },
    "/d/qujing/zhujie/shanlu18": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northeast": "/d/qujing/zhujie/shanlu17",
        "southwest": "/d/qujing/yuhua/xiaolu1"
      }
    },
    "/d/qujing/zhujie/shanlu2": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "east": "/d/qujing/zhujie/shanlu3",
        "west": "/d/qujing/zhujie/shanlu1"
      }
    },
    "/d/qujing/zhujie/shanlu3": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "east": "/d/qujing/zhujie/shanlu4",
        "west": "/d/qujing/zhujie/shanlu2"
      }
    },
    "/d/qujing/zhujie/shanlu4": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "southeast": "/d/qujing/zhujie/shanlu6",
        "west": "/d/qujing/zhujie/shanlu3"
      }
    },
    "/d/qujing/zhujie/shanlu5": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northeast": "/d/qujing/zhujie/shanlu1",
        "southwest": "/d/qujing/zhujie/shanlu7"
      }
    },
    "/d/qujing/zhujie/shanlu6": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northwest": "/d/qujing/zhujie/shanlu4",
        "southwest": "/d/qujing/zhujie/shanlu8"
      }
    },
    "/d/qujing/zhujie/shanlu7": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northeast": "/d/qujing/zhujie/shanlu5",
        "southeast": "/d/qujing/zhujie/shanlu9"
      }
    },
    "/d/qujing/zhujie/shanlu8": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northeast": "/d/qujing/zhujie/shanlu6",
        "southdown": "/d/qujing/zhujie/shanlu12"
      }
    },
    "/d/qujing/zhujie/shanlu9": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northwest": "/d/qujing/zhujie/shanlu7",
        "east": "/d/qujing/zhujie/shanlu10",
        "southdown": "/d/qujing/zhujie/shanlu13"
      }
    },
    "/d/qujing/zhujie/shi": {
      "type": "ROOM",
      "short": "石牢",
      "exits": {}
    },
    "/d/qujing/zhujie/shimen": {
      "type": "ROOM",
      "short": "石门",
      "exits": {
        "east": "/d/qujing/zhujie/can",
        "northwest": "/d/qujing/zhujie/da",
        "southwest": "/d/qujing/zhujie/shanlu10"
      },
      "objects": {
        "/d/qujing/zhujie/npc/yao": 2
      }
    },
    "/d/qujing/zhujie/wai": {
      "type": "ROOM",
      "short": "外宫",
      "exits": {
        "northwest": "/d/qujing/zhujie/zhong",
        "east": "/d/qujing/zhujie/guo"
      },
      "objects": {
        "/d/qujing/zhujie/npc/yao": 2
      }
    },
    "/d/qujing/zhujie/zhong": {
      "type": "ROOM",
      "short": "中宫",
      "exits": {
        "west": "/d/qujing/zhujie/pian",
        "southeast": "/d/qujing/zhujie/wai"
      },
      "objects": {
        "/d/qujing/zhujie/npc/yao": 2
      }
    },
    "/d/qujing/zhujie/zou": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "east": "/d/qujing/zhujie/da",
        "southwest": "/d/qujing/zhujie/guo"
      },
      "objects": {
        "/d/qujing/zhujie/npc/yao": 2
      }
    },
    "/d/qujing/zhuzi/beixia1": {
      "type": "ROOM",
      "short": "北霞街",
      "exits": {
        "east": "/d/qujing/zhuzi/beixia2"
      }
    },
    "/d/qujing/zhuzi/beixia2": {
      "type": "ROOM",
      "short": "北霞街",
      "exits": {
        "west": "/d/qujing/zhuzi/beixia1",
        "east": "/d/qujing/zhuzi/beixia3",
        "south": "/d/qujing/zhuzi/chafang"
      }
    },
    "/d/qujing/zhuzi/beixia3": {
      "type": "ROOM",
      "short": "北霞街",
      "exits": {
        "west": "/d/qujing/zhuzi/beixia2",
        "east": "/d/qujing/zhuzi/jiekou"
      }
    },
    "/d/qujing/zhuzi/beixia4": {
      "type": "ROOM",
      "short": "北霞街",
      "exits": {
        "west": "/d/qujing/zhuzi/jiekou",
        "east": "/d/qujing/zhuzi/beixia5"
      }
    },
    "/d/qujing/zhuzi/beixia5": {
      "type": "ROOM",
      "short": "北霞街",
      "exits": {
        "west": "/d/qujing/zhuzi/beixia4",
        "east": "/d/qujing/zhuzi/beixia6"
      }
    },
    "/d/qujing/zhuzi/beixia6": {
      "type": "ROOM",
      "short": "北霞街",
      "exits": {
        "west": "/d/qujing/zhuzi/beixia5",
        "south": "/d/qujing/zhuzi/mazhan"
      }
    },
    "/d/qujing/zhuzi/bingying": {
      "type": "ROOM",
      "short": "兵营",
      "exits": {
        "west": "/d/qujing/zhuzi/zhuzi5"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/xiaowei": 6
      }
    },
    "/d/qujing/zhuzi/chafang": {
      "type": "ROOM",
      "short": "茶房",
      "exits": {
        "south": "/d/qujing/zhuzi/xi3",
        "north": "/d/qujing/zhuzi/beixia2"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/cha": 1
      }
    },
    "/d/qujing/zhuzi/chu": {
      "type": "ROOM",
      "short": "厨房",
      "exits": {
        "west": "/d/qujing/zhuzi/huitong"
      }
    },
    "/d/qujing/zhuzi/dalu1": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "northeast": "/d/qujing/zhuzi/lin4",
        "west": "/d/qujing/zhuzi/lin6",
        "south": "/d/qujing/zhuzi/dalu2"
      }
    },
    "/d/qujing/zhuzi/dalu2": {
      "type": "ROOM",
      "short": "大路",
      "exits": {
        "north": "/d/qujing/zhuzi/dalu1",
        "south": "/d/qujing/zhuzi/zhuzi1"
      }
    },
    "/d/qujing/zhuzi/douxi": {
      "type": "ROOM",
      "short": "斗蟋馆",
      "exits": {
        "south": "/d/qujing/zhuzi/tian2"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/xishuai": 2
      }
    },
    "/d/qujing/zhuzi/fanlou": {
      "type": "ROOM",
      "short": "饭楼",
      "exits": {
        "north": "/d/qujing/zhuzi/xi2"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/wan": 1
      }
    },
    "/d/qujing/zhuzi/gongmen": {
      "type": "ROOM",
      "short": "宫门",
      "exits": {
        "west": "/d/qujing/zhuzi/hugong1",
        "east": "/d/qujing/zhuzi/hugong2",
        "north": "/d/qujing/zhuzi/zhuzi5",
        "south": "/d/qujing/zhuzi/qian"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/xiaowei": 4
      }
    },
    "/d/qujing/zhuzi/gulou": {
      "type": "ROOM",
      "short": "鼓楼",
      "exits": {
        "north": "/d/qujing/zhuzi/zhuzi3",
        "south": "/d/qujing/zhuzi/zhuzi4",
        "west": "/d/qujing/zhuzi/xi4",
        "east": "/d/qujing/zhuzi/tian1"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/taijian": 3,
        "/d/qujing/zhuzi/npc/xiaowei": 3
      }
    },
    "/d/qujing/zhuzi/housan": {
      "type": "ROOM",
      "short": "后三宫",
      "exits": {
        "northwest": "/d/qujing/zhuzi/neiyuan",
        "northeast": "/d/qujing/zhuzi/nei",
        "west": "/d/qujing/zhuzi/zhaoyang"
      }
    },
    "/d/qujing/zhuzi/hugong1": {
      "type": "ROOM",
      "short": "护宫河",
      "exits": {
        "east": "/d/qujing/zhuzi/gongmen"
      }
    },
    "/d/qujing/zhuzi/hugong2": {
      "type": "ROOM",
      "short": "护宫河",
      "exits": {
        "west": "/d/qujing/zhuzi/gongmen"
      }
    },
    "/d/qujing/zhuzi/huitong": {
      "type": "ROOM",
      "short": "会同馆",
      "exits": {
        "east": "/d/qujing/zhuzi/chu",
        "south": "/d/qujing/zhuzi/xiang",
        "north": "/d/qujing/zhuzi/tian2"
      }
    },
    "/d/qujing/zhuzi/jiekou": {
      "type": "ROOM",
      "short": "街口",
      "exits": {
        "north": "/d/qujing/zhuzi/zhuzi2",
        "south": "/d/qujing/zhuzi/zhuzi3",
        "west": "/d/qujing/zhuzi/beixia3",
        "east": "/d/qujing/zhuzi/beixia4"
      }
    },
    "/d/qujing/zhuzi/jiudian": {
      "type": "ROOM",
      "short": "酒店",
      "exits": {
        "south": "/d/qujing/zhuzi/xi2"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/zui": 1,
        "/d/obj/misc/woodtable": 1,
        "/d/obj/misc/woodseat": 2
      }
    },
    "/d/qujing/zhuzi/lin1": {
      "type": "ROOM",
      "short": "林中路",
      "exits": {
        "northeast": "/d/qujing/xiaoxitian/lindao7",
        "southeast": "/d/qujing/zhuzi/lin2"
      }
    },
    "/d/qujing/zhuzi/lin2": {
      "type": "ROOM",
      "short": "林中路",
      "exits": {
        "northwest": "/d/qujing/zhuzi/lin1",
        "south": "/d/qujing/zhuzi/lin4"
      }
    },
    "/d/qujing/zhuzi/lin3": {
      "type": "ROOM",
      "short": "林中路",
      "exits": {
        "northwest": "/d/qujing/pansi/ling5",
        "southeast": "/d/qujing/zhuzi/lin5"
      }
    },
    "/d/qujing/zhuzi/lin4": {
      "type": "ROOM",
      "short": "林中路",
      "exits": {
        "north": "/d/qujing/zhuzi/lin2",
        "southwest": "/d/qujing/zhuzi/dalu1"
      }
    },
    "/d/qujing/zhuzi/lin5": {
      "type": "ROOM",
      "short": "林中路",
      "exits": {
        "northwest": "/d/qujing/zhuzi/lin3",
        "east": "/d/qujing/zhuzi/lin6"
      }
    },
    "/d/qujing/zhuzi/lin6": {
      "type": "ROOM",
      "short": "林中路",
      "exits": {
        "west": "/d/qujing/zhuzi/lin5",
        "east": "/d/qujing/zhuzi/dalu1"
      }
    },
    "/d/qujing/zhuzi/mazhan": {
      "type": "ROOM",
      "short": "马栈",
      "exits": {
        "south": "/d/qujing/zhuzi/tian3",
        "north": "/d/qujing/zhuzi/beixia6"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/horse": 1
      }
    },
    "/d/qujing/zhuzi/mianguan": {
      "type": "ROOM",
      "short": "面馆",
      "exits": {
        "east": "/d/qujing/zhuzi/zhuzi3",
        "south": "/d/qujing/zhuzi/xi4"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/liuguang": 1
      }
    },
    "/d/qujing/zhuzi/mipu": {
      "type": "ROOM",
      "short": "米铺",
      "exits": {
        "north": "/d/qujing/zhuzi/xi3"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/mi": 1
      }
    },
    "/d/qujing/zhuzi/nei": {
      "type": "ROOM",
      "short": "内宫",
      "exits": {
        "west": "/d/qujing/zhuzi/neiyuan",
        "southwest": "/d/qujing/zhuzi/housan"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/king": 1
      }
    },
    "/d/qujing/zhuzi/neiyuan": {
      "type": "ROOM",
      "short": "内院",
      "exits": {
        "west": "/d/qujing/zhuzi/zheng",
        "east": "/d/qujing/zhuzi/nei",
        "southeast": "/d/qujing/zhuzi/housan"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/taijian": 2
      }
    },
    "/d/qujing/zhuzi/qian": {
      "type": "ROOM",
      "short": "前宫",
      "exits": {
        "north": "/d/qujing/zhuzi/gongmen",
        "southwest": "/d/qujing/zhuzi/yuhua",
        "south": "/d/qujing/zhuzi/zheng"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/taijian": 2,
        "/d/qujing/zhuzi/npc/girl": 2
      }
    },
    "/d/qujing/zhuzi/tian1": {
      "type": "ROOM",
      "short": "天阳街",
      "exits": {
        "west": "/d/qujing/zhuzi/gulou",
        "east": "/d/qujing/zhuzi/tian2",
        "north": "/d/qujing/zhuzi/yaopu"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/people": 2
      }
    },
    "/d/qujing/zhuzi/tian2": {
      "type": "ROOM",
      "short": "天阳街",
      "exits": {
        "west": "/d/qujing/zhuzi/tian1",
        "east": "/d/qujing/zhuzi/tian3",
        "north": "/d/qujing/zhuzi/douxi",
        "south": "/d/qujing/zhuzi/huitong"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/people": 2
      }
    },
    "/d/qujing/zhuzi/tian3": {
      "type": "ROOM",
      "short": "天阳街",
      "exits": {
        "west": "/d/qujing/zhuzi/tian2",
        "east": "/d/qujing/zhuzi/tian4",
        "north": "/d/qujing/zhuzi/mazhan"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/people": 2
      }
    },
    "/d/qujing/zhuzi/tian4": {
      "type": "ROOM",
      "short": "天阳门",
      "exits": {
        "northeast": "/d/qujing/qilin/polu1",
        "west": "/d/qujing/zhuzi/tian3"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/xiaowei": 2
      }
    },
    "/d/qujing/zhuzi/xi1": {
      "type": "ROOM",
      "short": "夕林门",
      "exits": {
        "east": "/d/qujing/zhuzi/xi2"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/people": 2
      }
    },
    "/d/qujing/zhuzi/xi2": {
      "type": "ROOM",
      "short": "夕林街",
      "exits": {
        "north": "/d/qujing/zhuzi/jiudian",
        "south": "/d/qujing/zhuzi/fanlou",
        "west": "/d/qujing/zhuzi/xi1",
        "east": "/d/qujing/zhuzi/xi3"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/people": 2
      }
    },
    "/d/qujing/zhuzi/xi3": {
      "type": "ROOM",
      "short": "夕林街",
      "exits": {
        "north": "/d/qujing/zhuzi/chafang",
        "south": "/d/qujing/zhuzi/mipu",
        "west": "/d/qujing/zhuzi/xi2",
        "east": "/d/qujing/zhuzi/xi4"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/people": 2
      }
    },
    "/d/qujing/zhuzi/xi4": {
      "type": "ROOM",
      "short": "夕林街",
      "exits": {
        "north": "/d/qujing/zhuzi/mianguan",
        "south": "/d/qujing/zhuzi/zahuo",
        "west": "/d/qujing/zhuzi/xi3",
        "east": "/d/qujing/zhuzi/gulou"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/people": 2
      }
    },
    "/d/qujing/zhuzi/xiang": {
      "type": "ROOM",
      "short": "厢房",
      "exits": {
        "north": "/d/qujing/zhuzi/huitong"
      },
      "objects": {
        "/d/obj/food/chahu": 1
      }
    },
    "/d/qujing/zhuzi/yaopu": {
      "type": "ROOM",
      "short": "药铺",
      "exits": {
        "south": "/d/qujing/zhuzi/tian1"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/laotong": 1
      }
    },
    "/d/qujing/zhuzi/yuhua": {
      "type": "ROOM",
      "short": "御花园",
      "exits": {
        "east": "/d/qujing/zhuzi/zheng",
        "northeast": "/d/qujing/zhuzi/qian"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/girl": 2
      }
    },
    "/d/qujing/zhuzi/zahuo": {
      "type": "ROOM",
      "short": "杂货店",
      "exits": {
        "north": "/d/qujing/zhuzi/xi4"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/pang": 1,
        "/d/qujing/zhuzi/npc/shou": 1
      }
    },
    "/d/qujing/zhuzi/zhaoyang": {
      "type": "ROOM",
      "short": "昭阳宫",
      "exits": {
        "north": "/d/qujing/zhuzi/zheng",
        "east": "/d/qujing/zhuzi/housan"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/taijian": 1,
        "/d/qujing/zhuzi/npc/girl": 2
      }
    },
    "/d/qujing/zhuzi/zheng": {
      "type": "ROOM",
      "short": "正宫",
      "exits": {
        "north": "/d/qujing/zhuzi/qian",
        "west": "/d/qujing/zhuzi/yuhua",
        "east": "/d/qujing/zhuzi/neiyuan",
        "south": "/d/qujing/zhuzi/zhaoyang"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/taijian": 2,
        "/d/qujing/zhuzi/npc/girl": 2
      }
    },
    "/d/qujing/zhuzi/zhuzi1": {
      "type": "ROOM",
      "short": "朱紫门",
      "exits": {
        "north": "/d/qujing/zhuzi/dalu2",
        "south": "/d/qujing/zhuzi/zhuzi2"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/xiaowei": 2
      }
    },
    "/d/qujing/zhuzi/zhuzi2": {
      "type": "ROOM",
      "short": "朱紫街",
      "exits": {
        "north": "/d/qujing/zhuzi/zhuzi1",
        "south": "/d/qujing/zhuzi/jiekou"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/people": 2
      }
    },
    "/d/qujing/zhuzi/zhuzi3": {
      "type": "ROOM",
      "short": "朱紫街",
      "exits": {
        "north": "/d/qujing/zhuzi/jiekou",
        "south": "/d/qujing/zhuzi/gulou",
        "west": "/d/qujing/zhuzi/mianguan"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/people": 2
      }
    },
    "/d/qujing/zhuzi/zhuzi4": {
      "type": "ROOM",
      "short": "朱紫街",
      "exits": {
        "south": "/d/qujing/zhuzi/zhuzi5",
        "north": "/d/qujing/zhuzi/gulou"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/people": 2
      }
    },
    "/d/qujing/zhuzi/zhuzi5": {
      "type": "ROOM",
      "short": "朱紫街",
      "exits": {
        "south": "/d/qujing/zhuzi/gongmen",
        "north": "/d/qujing/zhuzi/zhuzi4",
        "east": "/d/qujing/zhuzi/bingying"
      },
      "objects": {
        "/d/qujing/zhuzi/npc/people": 2
      }
    },
    "/d/sea/boy1": {
      "type": "ROOM",
      "short": "沁玉殿",
      "exits": {
        "southwest": "/d/sea/inside1",
        "northeast": "/d/sea/boy2"
      },
      "objects": {
        "/d/sea/npc/haima": 1
      }
    },
    "/d/sea/boy2": {
      "type": "ROOM",
      "short": "过道",
      "exits": {
        "southwest": "/d/sea/boy1",
        "east": "/d/sea/boy3",
        "north": "/d/sea/boy4"
      },
      "objects": {
        "/d/sea/npc/gongnu": 2
      }
    },
    "/d/sea/boy3": {
      "type": "ROOM",
      "short": "卧龙阁",
      "exits": {
        "west": "/d/sea/boy2"
      },
      "objects": {
        "/d/sea/npc/long2.c": 1,
        "/d/sea/npc/longshao": 1,
        "/d/sea/npc/biaodi": 1
      }
    },
    "/d/sea/boy4": {
      "type": "ROOM",
      "short": "练功堂",
      "exits": {
        "south": "/d/sea/boy2"
      },
      "objects": {
        "/d/sea/npc/long3.c": 1,
        "/d/sea/obj/mucha": 1
      }
    },
    "/d/sea/food": {
      "type": "ROOM",
      "short": "餐房",
      "objects": {
        "/d/sea/npc/long6.c": 1,
        "/d/sea/obj/food": 3,
        "/d/obj/food/niupi-jiudai.c": 1
      },
      "exits": {
        "west": "/d/sea/mulang1.c"
      }
    },
    "/d/sea/gate": {
      "type": "ROOM",
      "short": "龙宫大门",
      "exits": {
        "west": "/d/sea/under4",
        "east": "/d/sea/inside1"
      },
      "objects": {
        "/d/sea/npc/soldier1": 2,
        "/d/sea/npc/soldier2": 2
      }
    },
    "/d/sea/girl1": {
      "type": "ROOM",
      "short": "紫云宫",
      "exits": {
        "northwest": "/d/sea/inside1",
        "southeast": "/d/sea/girl2"
      },
      "objects": {
        "/d/sea/npc/qiupo": 1
      }
    },
    "/d/sea/girl2": {
      "type": "ROOM",
      "short": "花园",
      "exits": {
        "northwest": "/d/sea/girl1",
        "east": "/d/sea/girl3",
        "south": "/d/sea/girl4",
        "north": "/d/sea/wolongrest"
      },
      "objects": {
        "/d/sea/npc/gongnu": 1
      }
    },
    "/d/sea/girl3": {
      "type": "ROOM",
      "short": "绣房",
      "exits": {
        "west": "/d/sea/girl2"
      },
      "objects": {
        "/d/sea/npc/long5": 1,
        "/d/sea/npc/gongnu": 1,
        "/d/sea/npc/longnu": 1
      }
    },
    "/d/sea/girl4": {
      "type": "ROOM",
      "short": "云房",
      "exits": {
        "north": "/d/sea/girl2"
      },
      "objects": {
        "/d/sea/npc/beisao": 1,
        "/d/obj/armor/tenjia": 1
      }
    },
    "/d/sea/huayuan": {
      "type": "ROOM",
      "short": "御花园",
      "exits": {
        "south": "/d/sea/inside4.c",
        "north": "/d/sea/huayuan9"
      }
    },
    "/d/sea/huayuan1": {
      "type": "ROOM",
      "short": "御花园",
      "exits": {
        "south": "/d/sea/huayuan2.c",
        "north": "/d/sea/inside4"
      }
    },
    "/d/sea/huayuan2": {
      "type": "ROOM",
      "short": "御花园",
      "objects": {
        "/d/sea/npc/beinu": 1
      },
      "exits": {
        "north": "/d/sea/huayuan1",
        "west": "/d/sea/huilang7.c",
        "east": "/d/sea/huayuan3.c"
      }
    },
    "/d/sea/huayuan3": {
      "type": "ROOM",
      "short": "御花园",
      "exits": {
        "west": "/d/sea/huayuan2.c",
        "east": "/d/sea/huayuan4.c"
      }
    },
    "/d/sea/huayuan4": {
      "type": "ROOM",
      "short": "御花园",
      "objects": {
        "/d/sea/npc/beinu": 1
      },
      "exits": {
        "north": "/d/sea/huayuan5.c",
        "west": "/d/sea/huayuan3"
      }
    },
    "/d/sea/huayuan5": {
      "type": "ROOM",
      "short": "御花园",
      "exits": {
        "south": "/d/sea/huayuan4.c",
        "north": "/d/sea/shiwu.c"
      }
    },
    "/d/sea/huayuan6": {
      "type": "ROOM",
      "short": "御花园",
      "exits": {
        "south": "/d/sea/shiwu",
        "north": "/d/sea/huayuan7.c"
      }
    },
    "/d/sea/huayuan7": {
      "type": "ROOM",
      "short": "御花园",
      "objects": {
        "/d/sea/npc/beinu": 1
      },
      "exits": {
        "south": "/d/sea/huayuan6",
        "west": "/d/sea/huayuan8.c"
      }
    },
    "/d/sea/huayuan8": {
      "type": "ROOM",
      "short": "御花园",
      "exits": {
        "west": "/d/sea/huayuan9.c",
        "east": "/d/sea/huayuan7"
      }
    },
    "/d/sea/huayuan9": {
      "type": "ROOM",
      "short": "御花园",
      "objects": {
        "/d/sea/npc/beinu": 1
      },
      "exits": {
        "south": "/d/sea/huayuan.c",
        "west": "/d/sea/huilang8.c",
        "east": "/d/sea/huayuan8"
      }
    },
    "/d/sea/huilang1": {
      "type": "ROOM",
      "short": "回廊",
      "exits": {
        "south": "/d/sea/huilang2.c",
        "north": "/d/sea/yujie1"
      }
    },
    "/d/sea/huilang2": {
      "type": "ROOM",
      "short": "回廊",
      "exits": {
        "south": "/d/sea/huilang3.c",
        "north": "/d/sea/huilang1"
      }
    },
    "/d/sea/huilang3": {
      "type": "ROOM",
      "short": "回廊",
      "objects": {
        "/d/sea/npc/shark": 1
      },
      "exits": {
        "north": "/d/sea/huilang2",
        "east": "/d/sea/huilang7.c"
      }
    },
    "/d/sea/huilang4": {
      "type": "ROOM",
      "short": "回廊",
      "exits": {
        "south": "/d/sea/yujie1",
        "north": "/d/sea/huilang5.c"
      }
    },
    "/d/sea/huilang5": {
      "type": "ROOM",
      "short": "回廊",
      "exits": {
        "south": "/d/sea/huilang4",
        "north": "/d/sea/huilang6.c"
      }
    },
    "/d/sea/huilang6": {
      "type": "ROOM",
      "short": "回廊",
      "objects": {
        "/d/sea/npc/shark": 1
      },
      "exits": {
        "south": "/d/sea/huilang5",
        "east": "/d/sea/huilang8.c"
      }
    },
    "/d/sea/huilang7": {
      "type": "ROOM",
      "short": "回廊",
      "exits": {
        "west": "/d/sea/huilang3.c",
        "east": "/d/sea/huayuan2"
      }
    },
    "/d/sea/huilang8": {
      "type": "ROOM",
      "short": "回廊",
      "exits": {
        "west": "/d/sea/huilang6",
        "east": "/d/sea/huayuan9.c"
      }
    },
    "/d/sea/inside1": {
      "type": "ROOM",
      "short": "广场",
      "objects": {
        "/d/sea/npc/soldier1": 1,
        "/d/sea/npc/gonge": 1,
        "/d/sea/npc/zhangmen": 1
      },
      "exits": {
        "eastup": "/d/sea/yujie1.c",
        "southeast": "/d/sea/girl1",
        "west": "/d/sea/gate",
        "northeast": "/d/sea/boy1"
      }
    },
    "/d/sea/inside2": {
      "type": "ROOM",
      "short": "玉阶",
      "exits": {
        "eastup": "/d/sea/inside3.c",
        "westdown": "/d/sea/yujie3.c"
      }
    },
    "/d/sea/inside3": {
      "type": "ROOM",
      "short": "龙宫正殿",
      "exits": {
        "westdown": "/d/sea/inside2.c",
        "east": "/d/sea/inside4"
      },
      "objects": {
        "/d/sea/npc/longwang": 1
      }
    },
    "/d/sea/inside4": {
      "type": "ROOM",
      "short": "内堂",
      "objects": {
        "/d/sea/npc/long9.c": 1,
        "/d/sea/npc/longpo": 1,
        "/d/sea/npc/gonge": 2
      },
      "exits": {
        "south": "/d/sea/huayuan1.c",
        "north": "/d/sea/huayuan.c",
        "west": "/d/sea/inside3",
        "east": "/d/sea/yidao.c"
      }
    },
    "/d/sea/inside5": {
      "type": "ROOM",
      "short": "慎言堂",
      "objects": {
        "/d/sea/npc/gui": 1
      },
      "exits": {
        "south": "/d/sea/qingxin.c",
        "north": "/d/sea/yujie2.c"
      }
    },
    "/d/sea/inside6": {
      "type": "ROOM",
      "short": "明察堂",
      "exits": {
        "south": "/d/sea/yujie2.c",
        "north": "/d/sea/jingxing.c"
      },
      "objects": {
        "/d/sea/npc/jing": 1
      }
    },
    "/d/sea/jiashan1": {
      "type": "ROOM",
      "short": "假山",
      "exits": {
        "south": "/d/sea/yidao"
      }
    },
    "/d/sea/jiashan2": {
      "type": "ROOM",
      "short": "假山",
      "exits": {
        "north": "/d/sea/yidao"
      }
    },
    "/d/sea/jingxing": {
      "type": "ROOM",
      "short": "静性堂",
      "objects": {
        "/d/sea/npc/biantidu": 1,
        "/d/sea/npc/lizongbing": 1
      },
      "exits": {
        "south": "/d/sea/inside6",
        "northeast": "/d/sea/mulang2.c",
        "northwest": "/d/sea/shanhua.c"
      }
    },
    "/d/sea/maze0": {
      "type": "ROOM",
      "short": "海底",
      "objects": {},
      "exits": {
        "northeast": "/d/sea/under3",
        "south": "/d/sea/maze1"
      }
    },
    "/d/sea/maze1": {
      "type": "ROOM",
      "short": "海底莽林",
      "objects": {},
      "exits": {
        "east": "/d/sea/maze+sprintf(%d",
        "north": "/d/sea/maze+sprintf(%d",
        "south": "/d/sea/maze+sprintf(%d",
        "west": "/d/sea/maze+sprintf(%d"
      }
    },
    "/d/sea/maze2": {
      "type": "ROOM",
      "short": "海底莽林",
      "objects": {},
      "exits": {
        "east": "/d/sea/maze+sprintf(%d",
        "north": "/d/sea/maze+sprintf(%d",
        "south": "/d/sea/maze+sprintf(%d",
        "west": "/d/sea/maze+sprintf(%d"
      }
    },
    "/d/sea/maze3": {
      "type": "ROOM",
      "short": "海底莽林",
      "objects": {},
      "exits": {
        "east": "/d/sea/maze+sprintf(%d",
        "north": "/d/sea/maze+sprintf(%d",
        "south": "/d/sea/maze+sprintf(%d",
        "west": "/d/sea/maze+sprintf(%d"
      }
    },
    "/d/sea/maze4": {
      "type": "ROOM",
      "short": "海底莽林",
      "objects": {},
      "exits": {
        "east": "/d/sea/maze+sprintf(%d",
        "north": "/d/sea/maze+sprintf(%d",
        "south": "/d/sea/maze+sprintf(%d",
        "west": "/d/sea/maze+sprintf(%d"
      }
    },
    "/d/sea/maze5": {
      "type": "ROOM",
      "short": "海底莽林",
      "objects": {
        "/d/sea/npc/beast1": 1
      },
      "exits": {
        "east": "/d/sea/maze+sprintf(%d",
        "north": "/d/sea/maze+sprintf(%d",
        "south": "/d/sea/maze+sprintf(%d",
        "west": "/d/sea/maze+sprintf(%d"
      }
    },
    "/d/sea/maze6": {
      "type": "ROOM",
      "short": "海底莽林",
      "objects": {},
      "exits": {
        "east": "/d/sea/maze+sprintf(%d",
        "north": "/d/sea/maze+sprintf(%d",
        "south": "/d/sea/maze+sprintf(%d",
        "west": "/d/sea/maze+sprintf(%d"
      }
    },
    "/d/sea/maze7": {
      "type": "ROOM",
      "short": "海底莽林",
      "objects": {
        "/d/sea/npc/beast2": 1
      },
      "exits": {
        "east": "/d/sea/maze+sprintf(%d",
        "north": "/d/sea/maze+sprintf(%d",
        "south": "/d/sea/maze+sprintf(%d",
        "west": "/d/sea/maze+sprintf(%d"
      }
    },
    "/d/sea/maze8": {
      "type": "ROOM",
      "short": "海底莽林",
      "objects": {},
      "exits": {
        "east": "/d/sea/maze+sprintf(%d",
        "north": "/d/sea/maze+sprintf(%d",
        "south": "/d/sea/maze+sprintf(%d",
        "west": "/d/sea/maze+sprintf(%d"
      }
    },
    "/d/sea/maze9": {
      "type": "ROOM",
      "short": "海底莽林",
      "objects": {},
      "exits": {
        "east": "/d/sea/maze+sprintf(%d",
        "north": "/d/sea/maze+sprintf(%d",
        "south": "/d/sea/maze+sprintf(%d",
        "west": "/d/sea/maze+sprintf(%d"
      }
    },
    "/d/sea/mishi1": {
      "type": [
        "ROOM",
        "ROOM"
      ],
      "short": "密室",
      "objects": {
        "/d/sea/obj/meihuahammer": 1
      }
    },
    "/d/sea/mishi2": {
      "type": [
        "ROOM",
        "ROOM"
      ],
      "short": "密室",
      "objects": {
        "/d/sea/obj/tuotiancha": 1
      }
    },
    "/d/sea/mulang1": {
      "type": "ROOM",
      "short": "幕府",
      "objects": {
        "/d/sea/npc/gonge": 1
      },
      "exits": {
        "northwest": "/d/sea/qingxin",
        "east": "/d/sea/food.c"
      }
    },
    "/d/sea/mulang2": {
      "type": "ROOM",
      "short": "幕府",
      "objects": {
        "/d/sea/npc/gonge": 1
      },
      "exits": {
        "southwest": "/d/sea/jingxing",
        "east": "/d/sea/sleep.c"
      }
    },
    "/d/sea/qingxin": {
      "type": "ROOM",
      "short": "清心堂",
      "objects": {
        "/d/sea/npc/zitaiwei": 1,
        "/d/sea/npc/qingdusi": 1
      },
      "exits": {
        "southeast": "/d/sea/mulang1.c",
        "north": "/d/sea/inside5",
        "southwest": "/d/sea/xizhen.c"
      }
    },
    "/d/sea/shanhua": {
      "type": "ROOM",
      "short": "散华台",
      "exits": {
        "southeast": "/d/sea/jingxing"
      }
    },
    "/d/sea/shiwu": {
      "type": "ROOM",
      "short": "石屋",
      "exits": {
        "south": "/d/sea/huayuan5",
        "north": "/d/sea/huayuan6.c",
        "west": "/d/sea/yidao.c"
      }
    },
    "/d/sea/sleep": {
      "type": "ROOM",
      "short": "睡房",
      "exits": {
        "west": "/d/sea/mulang2.c"
      }
    },
    "/d/sea/under1": {
      "type": "ROOM",
      "short": "海底",
      "objects": {
        "/d/sea/npc/yecha": 2
      },
      "exits": {
        "up": "d/changan/eastseashore",
        "east": "/d/sea/under2"
      }
    },
    "/d/sea/under2": {
      "type": "ROOM",
      "short": "海底",
      "objects": {
        "/d/sea/npc/kid1": 1,
        "/d/sea/npc/kid2": 2
      },
      "exits": {
        "west": "/d/sea/under1",
        "east": "/d/sea/under3"
      }
    },
    "/d/sea/under3": {
      "type": "ROOM",
      "short": "海底",
      "objects": {
        "/d/sea/npc/kid3": 1
      },
      "exits": {
        "west": "/d/sea/under2",
        "northeast": "/d/sea/under4",
        "southwest": "/d/sea/maze0"
      }
    },
    "/d/sea/under4": {
      "type": "ROOM",
      "short": "海底",
      "objects": {
        "/d/sea/npc/long4": 1
      },
      "exits": {
        "east": "/d/sea/gate",
        "southwest": "/d/sea/under3"
      }
    },
    "/d/sea/wolongrest": {
      "type": "ROOM",
      "short": "休息室",
      "exits": {
        "south": "/d/sea/girl2"
      }
    },
    "/d/sea/wunei": {
      "type": "ROOM",
      "short": "石屋内",
      "objects": {
        "/d/sea/npc/beast": 1
      },
      "exits": {}
    },
    "/d/sea/xizhen": {
      "type": "ROOM",
      "short": "吸真台",
      "exits": {
        "northeast": "/d/sea/qingxin"
      }
    },
    "/d/sea/yidao": {
      "type": "ROOM",
      "short": "仪道",
      "exits": {
        "south": "/d/sea/jiashan2.c",
        "north": "/d/sea/jiashan1.c",
        "west": "/d/sea/inside4",
        "east": "/d/sea/shiwu.c"
      }
    },
    "/d/sea/yujie1": {
      "type": "ROOM",
      "short": "玉阶",
      "objects": {
        "/d/sea/npc/lishi": 2
      },
      "exits": {
        "south": "/d/sea/huilang1.c",
        "north": "/d/sea/huilang4.c",
        "westdown": "/d/sea/inside1.c",
        "east": "/d/sea/yujie2.c"
      }
    },
    "/d/sea/yujie2": {
      "type": "ROOM",
      "short": "龙宫前厅",
      "exits": {
        "south": "/d/sea/inside5.c",
        "north": "/d/sea/inside6.c",
        "west": "/d/sea/yujie1",
        "east": "/d/sea/yujie3.c"
      }
    },
    "/d/sea/yujie3": {
      "type": "ROOM",
      "short": "玉阶",
      "exits": {
        "eastup": "/d/sea/inside2.c",
        "west": "/d/sea/yujie2"
      }
    },
    "/d/sky/28xiu-dian": {
      "type": "ROOM",
      "short": "二十八宿殿",
      "exits": {
        "west": "/d/sky/nanmenting.c"
      },
      "objects": {
        "/d/sky/stars/foxer": 1,
        "/d/sky/stars/acer": 1,
        "/d/sky/stars/smallfox": 1
      }
    },
    "/d/sky/beimenting": {
      "type": "ROOM",
      "short": "北门厅",
      "exits": {
        "north": "/d/sky/beitian"
      },
      "objects": {
        "/d/sky/npc/tong-nan": 2
      }
    },
    "/d/sky/beitian": {
      "type": "ROOM",
      "short": "北天门",
      "objects": {
        "/d/sky/npc/hg-tianwang": 1,
        "/d/sky/npc/tian-bing": 4
      },
      "exits": {
        "west": "/d/sky/nw1",
        "south": "/d/sky/beimenting",
        "north": "/d/sky/yun",
        "east": "/d/sky/ne1"
      }
    },
    "/d/sky/dongmenting": {
      "type": "ROOM",
      "short": "东门厅",
      "exits": {
        "east": "/d/sky/dongtian",
        "north": "/d/sky/yumajian"
      },
      "objects": {
        "/d/sky/npc/tong-nan": 2
      }
    },
    "/d/sky/dongtian": {
      "type": "ROOM",
      "short": "东天门",
      "objects": {
        "/d/sky/npc/tian-ding2": 1,
        "/d/sky/npc/tian-ding1": 1
      },
      "exits": {
        "west": "/d/sky/dongmenting",
        "north": "/d/sky/en1",
        "south": "/d/sky/es1",
        "east": "/d/sky/yun1"
      }
    },
    "/d/sky/en1": {
      "type": "ROOM",
      "short": "天宫墙外",
      "exits": {
        "north": "/d/sky/ne",
        "south": "/d/sky/dongtian"
      }
    },
    "/d/sky/es1": {
      "type": "ROOM",
      "short": "天宫墙外",
      "exits": {
        "south": "/d/sky/se",
        "north": "/d/sky/dongtian"
      }
    },
    "/d/sky/nanmenting": {
      "type": "ROOM",
      "short": "南门厅",
      "exits": {
        "south": "/d/sky/nantian.c",
        "east": "/d/sky/28xiu-dian.c"
      },
      "objects": {
        "/d/sky/npc/tong-nan": 2
      }
    },
    "/d/sky/nantian": {
      "type": "ROOM",
      "short": "南天门",
      "objects": {
        "/d/sky/npc/zz-tianwang": 1,
        "/d/sky/npc/tian-bing": 4
      },
      "exits": {
        "west": "/d/sky/sw1",
        "north": "/d/sky/nanmenting",
        "east": "/d/sky/se1"
      }
    },
    "/d/sky/ne": {
      "type": "ROOM",
      "short": "天宫墙外",
      "objects": {
        "/d/sky/npc/autumn-gongcao": 1
      },
      "exits": {
        "south": "/d/sky/en1",
        "west": "/d/sky/ne1"
      }
    },
    "/d/sky/ne1": {
      "type": "ROOM",
      "short": "天宫墙外",
      "exits": {
        "west": "/d/sky/beitian",
        "east": "/d/sky/ne"
      }
    },
    "/d/sky/nw": {
      "type": "ROOM",
      "short": "天宫墙外",
      "objects": {
        "/d/sky/npc/summer-gongcao": 1
      },
      "exits": {
        "south": "/d/sky/wn1",
        "east": "/d/sky/nw1"
      }
    },
    "/d/sky/nw1": {
      "type": "ROOM",
      "short": "天宫墙外",
      "exits": {
        "west": "/d/sky/nw",
        "east": "/d/sky/beitian"
      }
    },
    "/d/sky/se": {
      "type": "ROOM",
      "short": "天宫墙外",
      "objects": {
        "/d/sky/npc/winter-gongcao": 1
      },
      "exits": {
        "north": "/d/sky/es1",
        "west": "/d/sky/se1"
      }
    },
    "/d/sky/se1": {
      "type": "ROOM",
      "short": "天宫墙外",
      "exits": {
        "west": "/d/sky/nantian",
        "east": "/d/sky/se"
      }
    },
    "/d/sky/sw": {
      "type": "ROOM",
      "short": "天宫墙外",
      "objects": {
        "/d/sky/npc/spring-gongcao": 1
      },
      "exits": {
        "north": "/d/sky/ws1",
        "east": "/d/sky/sw1"
      }
    },
    "/d/sky/sw1": {
      "type": "ROOM",
      "short": "天宫墙外",
      "exits": {
        "west": "/d/sky/sw",
        "east": "/d/sky/nantian"
      }
    },
    "/d/sky/taizifu": {
      "type": "ROOM",
      "short": "三太子府",
      "exits": {
        "north": "/d/sky/yongdao"
      }
    },
    "/d/sky/wn1": {
      "type": "ROOM",
      "short": "天宫墙外",
      "exits": {
        "north": "/d/sky/nw",
        "south": "/d/sky/xitian"
      }
    },
    "/d/sky/ws1": {
      "type": "ROOM",
      "short": "天宫墙外",
      "exits": {
        "south": "/d/sky/sw",
        "north": "/d/sky/xitian"
      }
    },
    "/d/sky/ximenting": {
      "type": "ROOM",
      "short": "西门厅",
      "exits": {
        "west": "/d/sky/xitian"
      },
      "objects": {
        "/d/sky/npc/tong-nan": 2
      }
    },
    "/d/sky/xitian": {
      "type": "ROOM",
      "short": "西天门",
      "objects": {
        "/d/sky/npc/tian-ding2": 1,
        "/d/sky/npc/tian-ding1": 1
      },
      "exits": {
        "north": "/d/sky/wn1",
        "south": "/d/sky/ws1",
        "east": "/d/sky/ximenting"
      }
    },
    "/d/sky/yongdao": {
      "type": "ROOM",
      "short": "甬道",
      "exits": {
        "east": "/d/sky/zhanyaotai",
        "west": "/d/sky/yunlougate",
        "south": "/d/sky/taizifu",
        "north": "/d/sky/yunlou"
      },
      "objects": {
        "/d/sky/npc/tong-nan": 1
      }
    },
    "/d/sky/yumajian": {
      "type": "ROOM",
      "short": "御马监",
      "exits": {
        "south": "/d/sky/dongmenting"
      },
      "objects": {
        "/d/sky/npc/jiancheng": 1,
        "/d/sky/npc/dianbu": 1
      }
    },
    "/d/sky/yun": {
      "type": "ROOM",
      "short": "云海",
      "exits": {
        "north": "/d/pantao/fengb",
        "south": "/d/sky/beitian"
      }
    },
    "/d/sky/yun1": {
      "type": "ROOM",
      "short": "云海",
      "exits": {
        "east": "/d/sky/yunlougate",
        "west": "/d/sky/dongtian"
      }
    },
    "/d/sky/yunlou": {
      "type": "ROOM",
      "short": "云楼殿",
      "exits": {
        "up": "/d/sky/yunloutai",
        "south": "/d/sky/yongdao"
      },
      "objects": {
        "/d/sky/npc/julingshen": 1
      }
    },
    "/d/sky/yunlougate": {
      "type": "ROOM",
      "short": "云楼宫门",
      "exits": {
        "east": "/d/sky/yongdao",
        "west": "/d/sky/yun1"
      },
      "objects": {
        "/d/sky/npc/yaocha": 1,
        "/d/sky/npc/yushi": 1
      }
    },
    "/d/sky/yunloutai": {
      "type": "ROOM",
      "short": "云楼台",
      "exits": {
        "down": "/d/sky/yunlou"
      }
    },
    "/d/sky/zhanyaotai": {
      "type": "ROOM",
      "short": "斩妖台",
      "exits": {
        "west": "/d/sky/yongdao"
      },
      "objects": {
        "/d/sky/npc/shenbing": 2
      }
    },
    "/d/suburb/es/canyon/bamboo/bamboo1": {
      "type": "ROOM",
      "short": "竹林道入口",
      "exits": {
        "north": "/d/suburb/es/canyon/bamboo/bamboo2",
        "back": "/d/suburb/es/canyon/fantasy1"
      }
    },
    "/d/suburb/es/canyon/bamboo/bamboo2": {
      "type": "ROOM",
      "short": "竹林道",
      "exits": {
        "north": "/d/suburb/es/canyon/bamboo/bamboo3",
        "south": "/d/suburb/es/canyon/bamboo/bamboo1"
      }
    },
    "/d/suburb/es/canyon/bamboo/bamboo3": {
      "type": "ROOM",
      "short": "竹林道",
      "exits": {
        "south": "/d/suburb/es/canyon/bamboo/bamboo2"
      }
    },
    "/d/suburb/es/canyon/bamboo/train": {
      "type": "ROOM",
      "short": "洞内石室",
      "exits": {
        "out": "/d/suburb/es/canyon/bamboo/bamboo3"
      }
    },
    "/d/suburb/es/canyon/blackmarket": {
      "type": "ROOM",
      "short": "兵器库",
      "exits": {
        "east": "/d/suburb/es/canyon/canyon4"
      },
      "objects": {
        "/d/suburb/es/canyon/npc/seller": 1
      }
    },
    "/d/suburb/es/canyon/camp1": {
      "type": "ROOM",
      "short": "军营入口",
      "exits": {
        "west": "/d/suburb/es/canyon/canyon4",
        "north": "/d/suburb/es/canyon/camp3",
        "south": "/d/suburb/es/canyon/camp4",
        "east": "/d/suburb/es/canyon/camp2"
      },
      "objects": {
        "/d/suburb/es/canyon/npc/door_guard": 2
      }
    },
    "/d/suburb/es/canyon/camp2": {
      "type": "ROOM",
      "short": "营火区",
      "exits": {
        "north": "/d/suburb/es/canyon/camp5",
        "south": "/d/suburb/es/canyon/camp6",
        "east": "/d/suburb/es/canyon/camp7",
        "west": "/d/suburb/es/canyon/camp1"
      }
    },
    "/d/suburb/es/canyon/camp3": {
      "type": "ROOM",
      "short": "小兵营帐",
      "exits": {
        "south": "/d/suburb/es/canyon/camp1"
      },
      "objects": {
        "/d/suburb/es/canyon/npc/guard1": 2
      }
    },
    "/d/suburb/es/canyon/camp4": {
      "type": "ROOM",
      "short": "小兵营帐",
      "exits": {
        "north": "/d/suburb/es/canyon/camp1"
      },
      "objects": {
        "/d/suburb/es/canyon/npc/guard1": 2,
        "/d/suburb/es/canyon/npc/guard2": 1
      }
    },
    "/d/suburb/es/canyon/camp5": {
      "type": "ROOM",
      "short": "小队长营帐",
      "exits": {
        "south": "/d/suburb/es/canyon/camp2"
      },
      "objects": {
        "/d/suburb/es/canyon/npc/leader1": 2
      }
    },
    "/d/suburb/es/canyon/camp6": {
      "type": "ROOM",
      "short": "小队长营帐",
      "exits": {
        "north": "/d/suburb/es/canyon/camp2"
      },
      "objects": {
        "/d/suburb/es/canyon/npc/captain": 1,
        "/d/suburb/es/canyon/npc/leader2": 1
      }
    },
    "/d/suburb/es/canyon/camp7": {
      "type": "ROOM",
      "short": "副将营帐",
      "exits": {
        "east": "/d/suburb/es/canyon/camp8",
        "west": "/d/suburb/es/canyon/camp2"
      },
      "objects": {
        "/d/suburb/es/canyon/npc/vice_general": 1
      }
    },
    "/d/suburb/es/canyon/camp8": {
      "type": "ROOM",
      "short": "将军营帐",
      "exits": {
        "west": "/d/suburb/es/canyon/camp7"
      },
      "objects": {
        "/d/suburb/es/canyon/npc/general": 1,
        "/d/suburb/es/canyon/npc/adviser": 1
      }
    },
    "/d/suburb/es/canyon/canyon1": {
      "type": "ROOM",
      "short": "黄石隘口尾",
      "exits": {
        "southwest": "/d/suburb/es/canyon/canyon2"
      }
    },
    "/d/suburb/es/canyon/canyon2": {
      "type": "ROOM",
      "short": "隘口小路",
      "exits": {
        "northeast": "/d/suburb/es/canyon/canyon1",
        "south": "/d/suburb/es/canyon/canyon3"
      }
    },
    "/d/suburb/es/canyon/canyon3": {
      "type": "ROOM",
      "short": "隘口小路",
      "exits": {
        "north": "/d/suburb/es/canyon/canyon2",
        "south": "/d/suburb/es/canyon/canyon4"
      }
    },
    "/d/suburb/es/canyon/canyon4": {
      "type": "ROOM",
      "short": "隘口中道",
      "exits": {
        "north": "/d/suburb/es/canyon/canyon3",
        "south": "/d/suburb/es/canyon/canyon5",
        "east": "/d/suburb/es/canyon/camp1"
      }
    },
    "/d/suburb/es/canyon/canyon5": {
      "type": "ROOM",
      "short": "关外小路",
      "exits": {
        "south": "/d/suburb/es/canyon/canyon6",
        "north": "/d/suburb/es/canyon/canyon4"
      }
    },
    "/d/suburb/es/canyon/canyon6": {
      "type": "ROOM",
      "short": "天驼关谷地",
      "exits": {
        "south": "/d/suburb/es/canyon/canyon7",
        "north": "/d/suburb/es/canyon/canyon5"
      }
    },
    "/d/suburb/es/canyon/canyon7": {
      "type": "ROOM",
      "short": "天驼关谷地",
      "exits": {
        "south": "/d/suburb/es/village/road1",
        "north": "/d/suburb/es/canyon/canyon6"
      }
    },
    "/d/suburb/es/canyon/dream/tmp": {
      "type": "ROOM",
      "short": "幻影道入口",
      "exits": {
        "down": "/d/suburb/es/canyon/fantasy1"
      }
    },
    "/d/suburb/es/canyon/evil/tmp": {
      "type": "ROOM",
      "short": "妖魔道入口",
      "exits": {
        "up": "/d/suburb/es/canyon/fantasy1"
      }
    },
    "/d/suburb/es/canyon/fantasy1": {
      "type": "ROOM",
      "short": "梦幻迷境通道",
      "exits": {
        "up": "/d/suburb/es/canyon/dream/tmp",
        "down": "/d/suburb/es/canyon/evil/tmp",
        "back": "/d/suburb/es/canyon/stone_forest3",
        "center": "/d/suburb/es/canyon/bamboo/bamboo1"
      }
    },
    "/d/suburb/es/canyon/road": {
      "type": "ROOM",
      "short": "碎石小路",
      "exits": {
        "northeast": "/d/suburb/es/snow/sroad3"
      }
    },
    "/d/suburb/es/canyon/stone_forest1": {
      "type": "ROOM",
      "short": "黄石穿林路路口",
      "exits": {
        "east": "/d/suburb/es/canyon/canyon2",
        "west": "/d/suburb/es/canyon/stone_forest2"
      }
    },
    "/d/suburb/es/canyon/stone_forest2": {
      "type": "ROOM",
      "short": "黄石穿林路",
      "exits": {
        "west": "/d/suburb/es/canyon/stone_forest3",
        "east": "/d/suburb/es/canyon/stone_forest1"
      }
    },
    "/d/suburb/es/canyon/stone_forest3": {
      "type": "ROOM",
      "short": "梦幻迷境入口",
      "exits": {
        "mirror": "/d/suburb/es/canyon/fantasy1",
        "east": "/d/suburb/es/canyon/stone_forest2"
      }
    },
    "/d/suburb/es/choyin/altar": {
      "type": "ROOM",
      "short": "火龙将军庙",
      "exits": {
        "down": "/d/suburb/es/choyin/dragon_temple"
      },
      "objects": {
        "/d/suburb/es/choyin/obj/denotation": 1,
        "/d/suburb/es/choyin/npc/lady": 1
      }
    },
    "/d/suburb/es/choyin/bridge1": {
      "type": "ROOM",
      "short": "曲桥",
      "exits": {
        "north": "/d/suburb/es/choyin/s_street1",
        "east": "/d/suburb/es/choyin/bridge2"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/visitor": 4
      }
    },
    "/d/suburb/es/choyin/bridge2": {
      "type": "ROOM",
      "short": "曲桥",
      "exits": {
        "west": "/d/suburb/es/choyin/bridge1",
        "north": "/d/suburb/es/choyin/bridge3"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/scholar": 2
      }
    },
    "/d/suburb/es/choyin/bridge3": {
      "type": "ROOM",
      "short": "曲桥",
      "exits": {
        "south": "/d/suburb/es/choyin/bridge2",
        "east": "/d/suburb/es/choyin/bridge4"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/visitor": 4
      }
    },
    "/d/suburb/es/choyin/bridge4": {
      "type": "ROOM",
      "short": "曲桥",
      "exits": {
        "south": "/d/suburb/es/choyin/bridge5",
        "west": "/d/suburb/es/choyin/bridge3"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/girl": 1,
        "/d/suburb/es/choyin/npc/maid": 2
      }
    },
    "/d/suburb/es/choyin/bridge5": {
      "type": "ROOM",
      "short": "曲桥",
      "exits": {
        "north": "/d/suburb/es/choyin/bridge4",
        "east": "/daemon/class/scholar/entrance"
      }
    },
    "/d/suburb/es/choyin/cloudpool": {
      "type": "ROOM",
      "short": "云梦大泽",
      "exits": {
        "southwest": "/d/suburb/es/choyin/solidpath2"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/serpent": 4
      }
    },
    "/d/suburb/es/choyin/club": {
      "type": "ROOM",
      "short": "草堂",
      "exits": {
        "west": "/d/suburb/es/choyin/yard.c",
        "east": "/d/suburb/es/choyin/fence.c"
      }
    },
    "/d/suburb/es/choyin/court1": {
      "type": "ROOM",
      "short": "县府衙门",
      "exits": {
        "south": "/d/suburb/es/choyin/crossroad"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/judge_gu.c": 4,
        "/d/suburb/es/choyin/npc/magistra.c": 2
      }
    },
    "/d/suburb/es/choyin/craneroom": {
      "type": "ROOM",
      "short": "树冠",
      "exits": {
        "down": "/d/suburb/es/choyin/guyehill"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/crane": 4
      }
    },
    "/d/suburb/es/choyin/crossroad": {
      "type": "ROOM",
      "short": "十字路口",
      "exits": {
        "south": "/d/suburb/es/choyin/s_gate",
        "north": "/d/suburb/es/choyin/court1",
        "east": "/d/suburb/es/choyin/s_street5"
      }
    },
    "/d/suburb/es/choyin/dragon_temple": {
      "type": "ROOM",
      "short": "火龙将军庙",
      "exits": {
        "up": "/d/suburb/es/choyin/altar",
        "west": "/d/suburb/es/choyin/s_gate",
        "east": "/d/suburb/es/choyin/sw_road1"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/crone": 1
      }
    },
    "/d/suburb/es/choyin/e_gate": {
      "type": "ROOM",
      "short": "东城门",
      "exits": {
        "west": "/d/suburb/es/choyin/e_street1",
        "east": "/d/suburb/es/choyin/solidpath1"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/cityguard": 2,
        "/d/suburb/es/choyin/npc/ghost": 1
      }
    },
    "/d/suburb/es/choyin/e_street1": {
      "type": "ROOM",
      "short": "东大街",
      "exits": {
        "west": "/d/suburb/es/choyin/tree_tomb",
        "east": "/d/suburb/es/choyin/e_gate"
      }
    },
    "/d/suburb/es/choyin/fence": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "west": "/d/suburb/es/choyin/club.c",
        "eastup": "/d/suburb/es/choyin/rockyu.c"
      }
    },
    "/d/suburb/es/choyin/guyehill": {
      "type": "ROOM",
      "short": "绝壁",
      "exits": {
        "northdown": "/d/suburb/es/choyin/rockroad"
      }
    },
    "/d/suburb/es/choyin/halfhole": {
      "type": "ROOM",
      "short": "山洞",
      "exits": {
        "down": "/d/suburb/es/choyin/guyehill"
      },
      "objects": {
        "/d/suburb/es/choyin/obj/goldenrope": 1
      }
    },
    "/d/suburb/es/choyin/hollow": {
      "type": "ROOM",
      "short": "寒谷",
      "exits": {
        "east": "/d/suburb/es/choyin/hollow1"
      }
    },
    "/d/suburb/es/choyin/hollow1": {
      "type": "ROOM",
      "short": "寒谷",
      "exits": {
        "north": "/d/suburb/es/choyin/hollow2",
        "south": "/d/suburb/es/choyin/hollow1",
        "west": "/d/suburb/es/choyin/hollow"
      }
    },
    "/d/suburb/es/choyin/hollow2": {
      "type": "ROOM",
      "short": "寒谷",
      "exits": {
        "west": "/d/suburb/es/choyin/hollow3",
        "south": "/d/suburb/es/choyin/hollow1"
      }
    },
    "/d/suburb/es/choyin/hollow3": {
      "type": "ROOM",
      "short": "寒谷尽头",
      "exits": {
        "east": "/d/suburb/es/choyin/hollow1"
      },
      "objects": {
        "/d/suburb/es/choyin/obj/orchid": 1
      }
    },
    "/d/suburb/es/choyin/hotel1": {
      "type": "ROOM",
      "short": "福林酒楼",
      "exits": {
        "up": "/d/suburb/es/choyin/hotel2",
        "west": "/d/suburb/es/choyin/s_street2"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/boss": 1,
        "/d/suburb/es/choyin/npc/sergeant": 1
      }
    },
    "/d/suburb/es/choyin/hotel2": {
      "type": "ROOM",
      "short": "福林酒楼",
      "exits": {
        "up": "/d/suburb/es/choyin/hotel3",
        "down": "/d/suburb/es/choyin/hotel1"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/youngman": 1,
        "/d/suburb/es/choyin/npc/servant": 3
      }
    },
    "/d/suburb/es/choyin/hotel3": {
      "type": "ROOM",
      "short": "福林酒楼",
      "exits": {
        "down": "/d/suburb/es/choyin/hotel2"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/guard": 3
      }
    },
    "/d/suburb/es/choyin/lionroom": {
      "type": "ROOM",
      "short": "神秘洞穴",
      "objects": {
        "/d/suburb/es/choyin/npc/lion": 1
      }
    },
    "/d/suburb/es/choyin/n_gate": {
      "type": "ROOM",
      "short": "乔阴县城北门",
      "exits": {
        "west": "/u/cloud/sunhill/road1",
        "south": "/d/suburb/es/choyin/n_street1",
        "east": "/d/suburb/es/social_guild/gee/gee_room"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/cityguard": 2,
        "/d/suburb/es/choyin/npc/ghost": 1,
        "/obj/npc/garrison": 2
      }
    },
    "/d/suburb/es/choyin/n_street1": {
      "type": "ROOM",
      "short": "福林大街",
      "exits": {
        "south": "/d/suburb/es/choyin/n_street2",
        "north": "/d/suburb/es/choyin/n_gate"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/cake_vendor": 1,
        "CLASS_D(beggar)+/master": 1
      }
    },
    "/d/suburb/es/choyin/n_street2": {
      "type": "ROOM",
      "short": "福林大街",
      "exits": {
        "south": "/d/suburb/es/choyin/n_street3",
        "north": "/d/suburb/es/choyin/n_street1"
      }
    },
    "/d/suburb/es/choyin/n_street3": {
      "type": "ROOM",
      "short": "福林大街",
      "exits": {
        "west": "/d/suburb/es/choyin/nw_street",
        "north": "/d/suburb/es/choyin/n_street2",
        "south": "/d/suburb/es/choyin/tree_tomb"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/dumpling_seller": 1
      }
    },
    "/d/suburb/es/choyin/nw_street": {
      "type": "ROOM",
      "short": "石板空地",
      "exits": {
        "west": "/d/suburb/es/choyin/w_street4",
        "south": "/d/suburb/es/choyin/w_street3",
        "east": "/d/suburb/es/choyin/n_street3"
      }
    },
    "/d/suburb/es/choyin/platform": {
      "type": "ROOM",
      "short": "云台",
      "objects": {
        "/d/suburb/es/choyin/npc/lboy": 2
      }
    },
    "/d/suburb/es/choyin/rockpath1": {
      "type": "ROOM",
      "short": "青石小路",
      "exits": {
        "northdown": "/d/suburb/es/choyin/rockpath2",
        "southup": "/d/suburb/es/choyin/rockyu"
      }
    },
    "/d/suburb/es/choyin/rockpath2": {
      "type": "ROOM",
      "short": "青石小路",
      "exits": {
        "north": "/d/suburb/es/choyin/solidpath1",
        "southup": "/d/suburb/es/choyin/rockpath1"
      }
    },
    "/d/suburb/es/choyin/rockroad": {
      "type": "ROOM",
      "short": "砾石路",
      "exits": {
        "north": "/d/suburb/es/choyin/spath",
        "southup": "/d/suburb/es/choyin/guyehill"
      }
    },
    "/d/suburb/es/choyin/rockyu": {
      "type": "ROOM",
      "short": "青石峪",
      "exits": {
        "northdown": "/d/suburb/es/choyin/rockpath1",
        "westdown": "/d/suburb/es/choyin/fence",
        "southup": "/d/suburb/es/choyin/tongbhill"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/oldman": 1
      }
    },
    "/d/suburb/es/choyin/s_gate": {
      "type": "ROOM",
      "short": "乔阴县城南门",
      "exits": {
        "north": "/d/suburb/es/choyin/crossroad",
        "east": "/d/suburb/es/choyin/dragon_temple",
        "south": "/d/suburb/es/choyin/spath"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/cityguard": 2
      }
    },
    "/d/suburb/es/choyin/s_street1": {
      "type": "ROOM",
      "short": "南门广场",
      "exits": {
        "south": "/d/suburb/es/choyin/bridge1",
        "north": "/d/suburb/es/choyin/s_street2",
        "west": "/d/suburb/es/choyin/s_street4",
        "southwest": "/d/suburb/es/choyin/sw_road1"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/cucurbit_seller": 1,
        "/d/suburb/es/choyin/npc/dumpling_seller": 1
      }
    },
    "/d/suburb/es/choyin/s_street2": {
      "type": "ROOM",
      "short": "福林大街",
      "exits": {
        "north": "/d/suburb/es/choyin/s_street3",
        "south": "/d/suburb/es/choyin/s_street1",
        "east": "/d/suburb/es/choyin/hotel1"
      }
    },
    "/d/suburb/es/choyin/s_street3": {
      "type": "ROOM",
      "short": "福林大街",
      "exits": {
        "south": "/d/suburb/es/choyin/s_street2",
        "north": "/d/suburb/es/choyin/tree_tomb"
      }
    },
    "/d/suburb/es/choyin/s_street4": {
      "type": "ROOM",
      "short": "承安街",
      "exits": {
        "west": "/d/suburb/es/choyin/s_street5",
        "east": "/d/suburb/es/choyin/s_street1"
      }
    },
    "/d/suburb/es/choyin/s_street5": {
      "type": "ROOM",
      "short": "承安街",
      "exits": {
        "west": "/d/suburb/es/choyin/crossroad",
        "east": "/d/suburb/es/choyin/s_street4"
      }
    },
    "/d/suburb/es/choyin/solidpath1": {
      "type": "ROOM",
      "short": "土路",
      "exits": {
        "west": "/d/suburb/es/choyin/e_gate",
        "south": "/d/suburb/es/choyin/rockpath2",
        "north": "/d/suburb/es/choyin/solidpath2"
      }
    },
    "/d/suburb/es/choyin/solidpath2": {
      "type": "ROOM",
      "short": "荒野小径",
      "exits": {
        "northeast": "/d/suburb/es/choyin/cloudpool",
        "south": "/d/suburb/es/choyin/solidpath1"
      }
    },
    "/d/suburb/es/choyin/spath": {
      "type": "ROOM",
      "short": "土路",
      "exits": {
        "north": "/d/suburb/es/choyin/s_gate",
        "south": "/d/suburb/es/choyin/rockroad"
      }
    },
    "/d/suburb/es/choyin/stonehole": {
      "type": "ROOM",
      "short": "石室"
    },
    "/d/suburb/es/choyin/stove": {
      "type": "ROOM",
      "short": "丹炉",
      "exits": {
        "out": "/d/suburb/es/choyin/tongbhill"
      },
      "objects": {
        "/d/suburb/es/choyin/obj/tablet": 5
      }
    },
    "/d/suburb/es/choyin/sw_road1": {
      "type": "ROOM",
      "short": "街道",
      "exits": {
        "northeast": "/d/suburb/es/choyin/s_street1",
        "west": "/d/suburb/es/choyin/dragon_temple"
      }
    },
    "/d/suburb/es/choyin/tomb1": {
      "type": "ROOM",
      "short": "树王坟",
      "exits": {
        "north": "/d/suburb/es/choyin/tomb3",
        "west": "/d/suburb/es/choyin/tomb2",
        "up": "/d/suburb/es/choyin/tree_tomb"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/shadow": 3
      }
    },
    "/d/suburb/es/choyin/tomb2": {
      "type": "ROOM",
      "short": "树王坟内部",
      "exits": {
        "east": "/d/suburb/es/choyin/tomb1"
      }
    },
    "/d/suburb/es/choyin/tomb3": {
      "type": "ROOM",
      "short": "树王坟内部",
      "exits": {
        "south": "/d/suburb/es/choyin/tomb1"
      },
      "objects": {
        "/d/suburb/es/choyin/obj/chest": 1
      }
    },
    "/d/suburb/es/choyin/tongbhill": {
      "type": "ROOM",
      "short": "桐柏山",
      "exits": {
        "northdown": "/d/suburb/es/choyin/rockyu"
      }
    },
    "/d/suburb/es/choyin/tree_tomb": {
      "type": "ROOM",
      "short": "树王坟",
      "exits": {
        "north": "/d/suburb/es/choyin/n_street3",
        "west": "/d/suburb/es/choyin/w_street3",
        "south": "/d/suburb/es/choyin/s_street3",
        "east": "/d/suburb/es/choyin/e_street1"
      }
    },
    "/d/suburb/es/choyin/w_street1": {
      "type": "ROOM",
      "short": "西大街",
      "exits": {
        "east": "/d/suburb/es/choyin/w_street2"
      }
    },
    "/d/suburb/es/choyin/w_street2": {
      "type": "ROOM",
      "short": "西大街",
      "exits": {
        "west": "/d/suburb/es/choyin/w_street1",
        "east": "/d/suburb/es/choyin/w_street3"
      }
    },
    "/d/suburb/es/choyin/w_street3": {
      "type": "ROOM",
      "short": "西大街",
      "exits": {
        "north": "/d/suburb/es/choyin/nw_street",
        "west": "/d/suburb/es/choyin/w_street2",
        "east": "/d/suburb/es/choyin/tree_tomb"
      }
    },
    "/d/suburb/es/choyin/w_street4": {
      "type": "ROOM",
      "short": "西大街",
      "exits": {
        "south": "/d/suburb/es/choyin/w_street2",
        "east": "/d/suburb/es/choyin/nw_street"
      }
    },
    "/d/suburb/es/choyin/yamen": {
      "type": "ROOM",
      "short": "大堂",
      "exits": {
        "north": "/d/suburb/es/choyin/yamen_iner",
        "south": "/d/suburb/es/choyin/yamen_yard"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/judgeman": 1,
        "/d/suburb/es/choyin/npc/magistra": 2,
        "/d/suburb/es/choyin/npc/yamen_po": 8
      }
    },
    "/d/suburb/es/choyin/yamen_iner": {
      "type": "ROOM",
      "short": "内厅",
      "exits": {
        "south": "/d/suburb/es/choyin/yamen"
      }
    },
    "/d/suburb/es/choyin/yamen_yard": {
      "type": "ROOM",
      "short": "县衙内院",
      "exits": {
        "south": "/d/suburb/es/choyin/court1",
        "north": "/d/suburb/es/choyin/yamen"
      },
      "objects": {
        "/d/suburb/es/choyin/npc/magistra": 4
      }
    },
    "/d/suburb/es/choyin/yard": {
      "type": "ROOM",
      "short": "庭院",
      "exits": {
        "east": "/d/suburb/es/choyin/club"
      }
    },
    "/d/suburb/es/chuenyu/base_b_m": {
      "type": "ROOM",
      "short": "黑松山脚",
      "exits": {
        "south": "/d/suburb/es/chuenyu/sunnyroad",
        "up": "/d/suburb/es/chuenyu/foot_b_mtn"
      }
    },
    "/d/suburb/es/chuenyu/bedroom": {
      "type": "ROOM",
      "short": "卧室",
      "exits": {
        "north": "/d/suburb/es/chuenyu/yiantai",
        "south": "/d/suburb/es/chuenyu/kitchen",
        "westdown": "/d/suburb/es/chuenyu/west_blackge",
        "eastdown": "/d/suburb/es/chuenyu/east_blackge"
      }
    },
    "/d/suburb/es/chuenyu/center": {
      "type": "ROOM",
      "short": "黑松阁正厅",
      "exits": {
        "west": "/d/suburb/es/chuenyu/west_blackge"
      }
    },
    "/d/suburb/es/chuenyu/croad1": {
      "type": "ROOM",
      "short": "黄土大道",
      "exits": {
        "northwest": "/d/suburb/es/village/road2",
        "southeast": "/d/suburb/es/chuenyu/croad2"
      }
    },
    "/d/suburb/es/chuenyu/croad2": {
      "type": "ROOM",
      "short": "路口",
      "exits": {
        "northeast": "/d/suburb/es/chuenyu/sunnyroad",
        "southeast": "/d/suburb/es/chuenyu/croad3",
        "northwest": "/d/suburb/es/chuenyu/croad1"
      }
    },
    "/d/suburb/es/chuenyu/croad3": {
      "type": "ROOM",
      "short": "北驿道",
      "exits": {
        "northwest": "/d/suburb/es/chuenyu/croad2",
        "south": "/d/suburb/es/city/nroad2"
      }
    },
    "/d/suburb/es/chuenyu/dungeon": {
      "type": "ROOM",
      "short": "刑房",
      "exits": {
        "west": "/d/suburb/es/chuenyu/tunnel3",
        "north": "/d/suburb/es/chuenyu/tunnel4"
      },
      "objects": {
        "/d/suburb/es/chuenyu/npc/chuenyu": 1,
        "/d/suburb/es/chuenyu/xiaojuan2": 1
      }
    },
    "/d/suburb/es/chuenyu/dustyroad3": {
      "type": "ROOM",
      "short": "青石小路",
      "exits": {
        "southwest": "/d/suburb/es/chuenyu/croad2",
        "northeast": "/d/suburb/es/chuenyu/home",
        "north": "/d/suburb/es/chuenyu/sunnyroad"
      }
    },
    "/d/suburb/es/chuenyu/east_blackge": {
      "type": "ROOM",
      "short": "黑松阁东厅",
      "exits": {
        "east": "/d/suburb/es/chuenyu/east_garden",
        "south": "/d/suburb/es/chuenyu/south_garden",
        "westup": "/d/suburb/es/chuenyu/bedroom"
      },
      "objects": {
        "/d/suburb/es/chuenyu/npc/cleangirl": 1
      }
    },
    "/d/suburb/es/chuenyu/east_castle": {
      "type": "ROOM",
      "short": "黑松城堡的东侧",
      "exits": {
        "west": "/d/suburb/es/chuenyu/gate_castle"
      }
    },
    "/d/suburb/es/chuenyu/east_garden": {
      "type": "ROOM",
      "short": "东花园",
      "exits": {
        "west": "/d/suburb/es/chuenyu/east_blackge"
      },
      "objects": {
        "/d/suburb/es/chuenyu/npc/wolfdog": 3
      }
    },
    "/d/suburb/es/chuenyu/foot_b_mtn": {
      "type": "ROOM",
      "short": "黑松山腰",
      "exits": {
        "down": "/d/suburb/es/chuenyu/base_b_m",
        "up": "/d/suburb/es/chuenyu/high_b_mtn"
      }
    },
    "/d/suburb/es/chuenyu/gate_castle": {
      "type": "ROOM",
      "short": "黑松淳于",
      "exits": {
        "east": "/d/suburb/es/chuenyu/east_castle",
        "west": "/d/suburb/es/chuenyu/west_castle",
        "north": "/d/suburb/es/chuenyu/trap_castle",
        "down": "/d/suburb/es/chuenyu/high_b_mtn2"
      }
    },
    "/d/suburb/es/chuenyu/high_b_mtn": {
      "type": "ROOM",
      "short": "花岗石街",
      "exits": {
        "up": "/d/suburb/es/chuenyu/gate_castle",
        "east": "/d/suburb/es/chuenyu/rope_bridge"
      }
    },
    "/d/suburb/es/chuenyu/high_b_mtn2": {
      "type": "ROOM",
      "short": "花岗石街",
      "exits": {
        "down": "/d/suburb/es/chuenyu/base_b_m",
        "up": "/d/suburb/es/chuenyu/gate_castle",
        "west": "/d/suburb/es/chuenyu/rope_bridge"
      }
    },
    "/d/suburb/es/chuenyu/home": {
      "type": "ROOM",
      "short": "刘家小房",
      "exits": {
        "south": "/d/suburb/es/chuenyu/smallstorage",
        "north": "/d/suburb/es/chuenyu/littlegarden",
        "west": "/d/suburb/es/chuenyu/smallyard",
        "southwest": "/d/suburb/es/chuenyu/dustyroad3"
      },
      "objects": {
        "/d/suburb/es/chuenyu/npc/oldliu": 1
      }
    },
    "/d/suburb/es/chuenyu/kitchen": {
      "type": "ROOM",
      "short": "膳房",
      "exits": {
        "north": "/d/suburb/es/chuenyu/bedroom"
      },
      "objects": {
        "/d/suburb/es/chuenyu/obj/pigmeat": 3,
        "/d/suburb/es/chuenyu/obj/qiwine": 3,
        "/d/suburb/es/chuenyu/npc/cook": 1
      }
    },
    "/d/suburb/es/chuenyu/littlegarden": {
      "type": "ROOM",
      "short": "花园",
      "exits": {
        "south": "/d/suburb/es/chuenyu/home"
      },
      "objects": {
        "/d/suburb/es/chuenyu/npc/flowergirl": 5
      }
    },
    "/d/suburb/es/chuenyu/north_garden": {
      "type": "ROOM",
      "short": "北花园",
      "exits": {
        "south": "/d/suburb/es/chuenyu/west_blackge"
      },
      "objects": {
        "/d/suburb/es/chuenyu/npc/smallgardener": 2
      }
    },
    "/d/suburb/es/chuenyu/rope_bridge": {
      "type": "ROOM",
      "short": "铁索桥",
      "exits": {
        "west": "/d/suburb/es/chuenyu/high_b_mtn",
        "east": "/d/suburb/es/chuenyu/high_b_mtn2"
      },
      "objects": {
        "/d/suburb/es/chuenyu/npc/jiading3": 2
      }
    },
    "/d/suburb/es/chuenyu/smallstorage": {
      "type": "ROOM",
      "short": "厨房",
      "exits": {
        "north": "/d/suburb/es/chuenyu/home"
      },
      "objects": {
        "/d/suburb/es/chuenyu/npc/rat": 6
      }
    },
    "/d/suburb/es/chuenyu/smallyard": {
      "type": "ROOM",
      "short": "翠绿的小草坪",
      "exits": {
        "east": "/d/suburb/es/chuenyu/home",
        "south": "/d/suburb/es/chuenyu/dustyroad3"
      },
      "objects": {
        "/d/suburb/es/chuenyu/npc/frog": 2,
        "/d/suburb/es/chuenyu/npc/ant": 2,
        "/d/suburb/es/chuenyu/npc/fly": 2
      }
    },
    "/d/suburb/es/chuenyu/south_garden": {
      "type": "ROOM",
      "short": "南花园",
      "exits": {
        "north": "/d/suburb/es/chuenyu/east_blackge"
      },
      "objects": {
        "/d/suburb/es/chuenyu/npc/smallgardener": 2
      }
    },
    "/d/suburb/es/chuenyu/storage": {
      "type": "ROOM",
      "short": "储藏室",
      "exits": {
        "north": "/d/suburb/es/chuenyu/west_blackge"
      },
      "objects": {
        "/obj/longsword": 5
      }
    },
    "/d/suburb/es/chuenyu/sunnyroad": {
      "type": "ROOM",
      "short": "山脚乡田",
      "objects": {
        "/d/suburb/es/chuenyu/npc/flower_seller": 1
      },
      "exits": {
        "north": "/d/suburb/es/chuenyu/base_b_m",
        "southwest": "/d/suburb/es/chuenyu/croad2"
      }
    },
    "/d/suburb/es/chuenyu/tortureroom": {
      "type": "ROOM",
      "short": "刑房",
      "exits": {
        "south": "/d/suburb/es/chuenyu/tunnel6",
        "east": "/d/suburb/es/chuenyu/tunnel4"
      },
      "objects": {
        "/d/suburb/es/chuenyu/npc/highrat": 2,
        "/d/suburb/es/chuenyu/npc/guard2": 2
      }
    },
    "/d/suburb/es/chuenyu/tortureroom2": {
      "type": "ROOM",
      "short": "刑房",
      "exits": {
        "south": "/d/suburb/es/chuenyu/tunnel6",
        "east": "/d/suburb/es/chuenyu/tunnel4"
      },
      "objects": {
        "/d/suburb/es/chuenyu/npc/highrat": 2,
        "/d/suburb/es/chuenyu/npc/guard2": 2
      }
    },
    "/d/suburb/es/chuenyu/trap_castle": {
      "type": "ROOM",
      "short": "夹道",
      "exits": {
        "south": "/d/suburb/es/chuenyu/gate_castle"
      }
    },
    "/d/suburb/es/chuenyu/tunnel1": {
      "type": "ROOM",
      "short": "地牢",
      "exits": {
        "south": "/d/suburb/es/chuenyu/tunnel5",
        "north": "/d/suburb/es/chuenyu/tunnel2"
      },
      "objects": {
        "/d/suburb/es/chuenyu/npc/highrat": 1
      }
    },
    "/d/suburb/es/chuenyu/tunnel2": {
      "type": "ROOM",
      "short": "地牢",
      "exits": {
        "east": "/d/suburb/es/chuenyu/tunnel6",
        "north": "/d/suburb/es/chuenyu/tunnel3",
        "south": "/d/suburb/es/chuenyu/tunnel1"
      }
    },
    "/d/suburb/es/chuenyu/tunnel3": {
      "type": "ROOM",
      "short": "地牢",
      "exits": {
        "east": "/d/suburb/es/chuenyu/dungeon",
        "north": "/d/suburb/es/chuenyu/tunnel5",
        "south": "/d/suburb/es/chuenyu/tunnel2"
      }
    },
    "/d/suburb/es/chuenyu/tunnel4": {
      "type": "ROOM",
      "short": "地牢",
      "exits": {
        "north": "/d/suburb/es/chuenyu/tunnel5",
        "east": "/d/suburb/es/chuenyu/tortureroom",
        "west": "/d/suburb/es/chuenyu/tortureroom2",
        "south": "/d/suburb/es/chuenyu/dungeon"
      }
    },
    "/d/suburb/es/chuenyu/tunnel5": {
      "type": "ROOM",
      "short": "地牢",
      "exits": {
        "north": "/d/suburb/es/chuenyu/tunnel1",
        "west": "/d/suburb/es/chuenyu/tunnel6",
        "east": "/d/suburb/es/chuenyu/tortureroom"
      }
    },
    "/d/suburb/es/chuenyu/tunnel6": {
      "type": "ROOM",
      "short": "地牢",
      "exits": {
        "north": "/d/suburb/es/chuenyu/tortureroom2",
        "east": "/d/suburb/es/chuenyu/tunnel5"
      }
    },
    "/d/suburb/es/chuenyu/west_blackge": {
      "type": "ROOM",
      "short": "黑松阁西厅",
      "exits": {
        "eastup": "/d/suburb/es/chuenyu/bedroom",
        "east": "/d/suburb/es/chuenyu/center",
        "west": "/d/suburb/es/chuenyu/west_garden",
        "south": "/d/suburb/es/chuenyu/storage",
        "north": "/d/suburb/es/chuenyu/north_garden"
      },
      "objects": {
        "/d/suburb/es/chuenyu/npc/guard": 2
      }
    },
    "/d/suburb/es/chuenyu/west_castle": {
      "type": "ROOM",
      "short": "黑松城堡的西侧",
      "exits": {
        "east": "/d/suburb/es/chuenyu/gate_castle"
      }
    },
    "/d/suburb/es/chuenyu/west_garden": {
      "type": "ROOM",
      "short": "西花园",
      "exits": {
        "east": "/d/suburb/es/chuenyu/west_blackge"
      },
      "objects": {
        "/d/suburb/es/chuenyu/npc/gardener": 1,
        "/d/suburb/es/chuenyu/npc/bee": 2
      }
    },
    "/d/suburb/es/chuenyu/yiantai": {
      "type": "ROOM",
      "short": "阳台",
      "exits": {
        "south": "/d/suburb/es/chuenyu/bedroom"
      },
      "objects": {
        "/d/suburb/es/chuenyu/npc/pigeon": 2
      }
    },
    "/d/suburb/es/city/bank": {
      "type": "BANK",
      "short": "旺金钱庄",
      "exits": {
        "south": "/d/suburb/es/city/street8"
      },
      "objects": {
        "/d/suburb/es/city/npc/microsof": 1
      }
    },
    "/d/suburb/es/city/biaoju": {
      "type": "ROOM",
      "short": "振远总局",
      "exits": {
        "south": "/d/suburb/es/city/street1"
      },
      "objects": {
        "/d/suburb/es/city/npc/chen": 1
      }
    },
    "/d/suburb/es/city/boots": {
      "type": "ROOM",
      "short": "李记鞋店",
      "exits": {
        "south": "/d/suburb/es/city/street11"
      },
      "objects": {
        "/d/suburb/es/city/npc/shoer.c": 1
      }
    },
    "/d/suburb/es/city/bridge": {
      "type": "ROOM",
      "short": "天桥",
      "exits": {
        "south": "/d/suburb/es/city/street17",
        "west": "/d/suburb/es/city/street12",
        "east": "/d/suburb/es/city/street11",
        "north": "/d/suburb/es/city/jiaowu"
      },
      "objects": {
        "/d/suburb/es/city/npc/vendor": 1,
        "/d/suburb/es/city/npc/caker": 1,
        "/d/suburb/es/city/npc/dumpling_seller": 1
      }
    },
    "/d/suburb/es/city/cloth": {
      "type": "ROOM",
      "short": "四喜绸缎庄",
      "exits": {
        "east": "/d/suburb/es/city/street6"
      },
      "objects": {
        "/d/suburb/es/city/npc/clother.c": 1
      }
    },
    "/d/suburb/es/city/eastdoor1": {
      "type": "ROOM",
      "short": "京师东一门",
      "exits": {
        "west": "/d/suburb/es/city/street9"
      },
      "objects": {
        "/d/suburb/es/city/npc/guard": 3
      }
    },
    "/d/suburb/es/city/eastdoor2": {
      "type": "ROOM",
      "short": "京师东二门",
      "exits": {
        "west": "/d/suburb/es/city/street10"
      },
      "objects": {
        "/d/suburb/es/city/npc/guard": 3
      }
    },
    "/d/suburb/es/city/feiyuan": {
      "type": "ROOM",
      "short": "废园",
      "exits": {
        "south": "/d/suburb/es/city/street6"
      }
    },
    "/d/suburb/es/city/house1": {
      "type": "ROOM",
      "short": "空房间",
      "exits": {
        "north": "/d/suburb/es/city/street11"
      }
    },
    "/d/suburb/es/city/jiaowu": {
      "type": "ROOM",
      "short": "校武场",
      "exits": {
        "south": "/d/suburb/es/city/bridge",
        "north": "/d/suburb/es/city/wumen"
      }
    },
    "/d/suburb/es/city/jitan": {
      "type": "ROOM",
      "short": "祭坛",
      "exits": {
        "south": "/d/suburb/es/city/shenwumen",
        "north": "/d/suburb/es/city/street7"
      }
    },
    "/d/suburb/es/city/jiulou": {
      "type": "ROOM",
      "short": "太白酒楼",
      "exits": {
        "east": "/d/suburb/es/city/street5",
        "up": "/d/suburb/es/city/jiulou_2"
      },
      "objects": {
        "/d/suburb/es/city/npc/waiter": 1,
        "/d/suburb/es/city/npc/boss": 1
      }
    },
    "/d/suburb/es/city/jiulou_2": {
      "type": "ROOM",
      "short": "太白酒楼二楼",
      "exits": {
        "down": "/d/suburb/es/city/jiulou"
      }
    },
    "/d/suburb/es/city/midao1": {
      "type": "ROOM",
      "short": "地下密室"
    },
    "/d/suburb/es/city/northdoor": {
      "type": "ROOM",
      "short": "京师北门",
      "exits": {
        "out": "/d/suburb/es/city/nroad1",
        "south": "/d/suburb/es/city/street16"
      },
      "objects": {
        "/d/suburb/es/city/npc/guard": 3
      }
    },
    "/d/suburb/es/city/nroad1": {
      "type": "ROOM",
      "short": "北驿道",
      "exits": {
        "north": "/d/suburb/es/city/nroad2",
        "enter": "/d/suburb/es/city/northdoor"
      }
    },
    "/d/suburb/es/city/nroad2": {
      "type": "ROOM",
      "short": "北驿道",
      "exits": {
        "south": "/d/suburb/es/city/nroad1",
        "north": "/d/suburb/es/chuenyu/croad3"
      }
    },
    "/d/suburb/es/city/shangshu/chufang": {
      "type": "ROOM",
      "short": "厨房",
      "exits": {
        "west": "/d/suburb/es/city/shangshu/road3"
      },
      "objects": {
        "/d/suburb/es/city/shangshu/npc/maid": 1
      }
    },
    "/d/suburb/es/city/shangshu/feiwu": {
      "type": "ROOM",
      "short": "废屋",
      "exits": {
        "east": "/d/suburb/es/city/shangshu/road4"
      }
    },
    "/d/suburb/es/city/shangshu/gate": {
      "type": "ROOM",
      "short": "尚书府大门",
      "exits": {
        "west": "/d/suburb/es/city/street3",
        "east": "/d/suburb/es/city/shangshu/yuan"
      },
      "objects": {
        "/d/suburb/es/city/shangshu/npc/guard": 1
      }
    },
    "/d/suburb/es/city/shangshu/huayuan": {
      "type": "ROOM",
      "short": "花园",
      "exits": {
        "north": "/d/suburb/es/city/shangshu/road3",
        "east": "/d/suburb/es/city/shangshu/neizhai",
        "west": "/d/suburb/es/city/shangshu/road4"
      },
      "objects": {
        "/d/suburb/es/city/shangshu/npc/gardener": 1
      }
    },
    "/d/suburb/es/city/shangshu/kefang": {
      "type": "ROOM",
      "short": "客房",
      "exits": {
        "west": "/d/suburb/es/city/shangshu/road2"
      }
    },
    "/d/suburb/es/city/shangshu/keting": {
      "type": "ROOM",
      "short": "尚书府客厅",
      "exits": {
        "west": "/d/suburb/es/city/shangshu/yuan"
      },
      "objects": {
        "/d/suburb/es/city/shangshu/npc/shangshu": 1
      }
    },
    "/d/suburb/es/city/shangshu/neizhai": {
      "type": "ROOM",
      "short": "内宅",
      "exits": {
        "west": "/d/suburb/es/city/shangshu/huayuan"
      },
      "objects": {
        "/d/suburb/es/city/shangshu/npc/qing_chen": 1
      }
    },
    "/d/suburb/es/city/shangshu/road1": {
      "type": "ROOM",
      "short": "小径",
      "exits": {
        "east": "/d/suburb/es/city/shangshu/xiaowu",
        "south": "/d/suburb/es/city/shangshu/road2"
      },
      "objects": {
        "/d/suburb/es/city/shangshu/npc/huyuan": 1
      }
    },
    "/d/suburb/es/city/shangshu/road2": {
      "type": "ROOM",
      "short": "小径",
      "exits": {
        "north": "/d/suburb/es/city/shangshu/road1",
        "east": "/d/suburb/es/city/shangshu/kefang",
        "south": "/d/suburb/es/city/shangshu/yuan"
      },
      "objects": {
        "/d/suburb/es/city/shangshu/npc/huyuan": 1,
        "/d/suburb/es/city/shangshu/npc/huyuan1": 1
      }
    },
    "/d/suburb/es/city/shangshu/road3": {
      "type": "ROOM",
      "short": "花园小径",
      "exits": {
        "north": "/d/suburb/es/city/shangshu/yuan",
        "south": "/d/suburb/es/city/shangshu/huayuan",
        "east": "/d/suburb/es/city/shangshu/chufang"
      }
    },
    "/d/suburb/es/city/shangshu/road4": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "west": "/d/suburb/es/city/shangshu/feiwu",
        "east": "/d/suburb/es/city/shangshu/huayuan"
      }
    },
    "/d/suburb/es/city/shangshu/xiaowu": {
      "type": "ROOM",
      "short": "小屋",
      "exits": {
        "west": "/d/suburb/es/city/shangshu/road1"
      }
    },
    "/d/suburb/es/city/shangshu/yuan": {
      "type": "ROOM",
      "short": "尚书府庭院",
      "exits": {
        "west": "/d/suburb/es/city/shangshu/gate",
        "east": "/d/suburb/es/city/shangshu/keting",
        "south": "/d/suburb/es/city/shangshu/road3",
        "north": "/d/suburb/es/city/shangshu/road2"
      }
    },
    "/d/suburb/es/city/shenwumen": {
      "type": "ROOM",
      "short": "神武门",
      "exits": {
        "north": "/d/suburb/es/city/jitan",
        "east": "/d/suburb/es/city/street1",
        "west": "/d/suburb/es/city/street6"
      }
    },
    "/d/suburb/es/city/southdoor": {
      "type": "ROOM",
      "short": "京师南门",
      "exits": {
        "north": "/d/suburb/es/city/street17"
      },
      "objects": {
        "/d/suburb/es/city/npc/guard": 3
      }
    },
    "/d/suburb/es/city/street1": {
      "type": "ROOM",
      "short": "京师东街",
      "exits": {
        "north": "/d/suburb/es/city/biaoju",
        "south": "/d/suburb/es/city/street2",
        "west": "/d/suburb/es/city/shenwumen"
      }
    },
    "/d/suburb/es/city/street10": {
      "type": "ROOM",
      "short": "京师街道",
      "exits": {
        "east": "/d/suburb/es/city/eastdoor2",
        "west": "/d/suburb/es/city/street11"
      }
    },
    "/d/suburb/es/city/street11": {
      "type": "ROOM",
      "short": "京师街道",
      "exits": {
        "west": "/d/suburb/es/city/bridge",
        "north": "/d/suburb/es/city/boots",
        "east": "/d/suburb/es/city/street10",
        "south": "/d/suburb/es/city/house1"
      }
    },
    "/d/suburb/es/city/street12": {
      "type": "ROOM",
      "short": "京师街道",
      "exits": {
        "east": "/d/suburb/es/city/bridge",
        "west": "/d/suburb/es/city/street13"
      }
    },
    "/d/suburb/es/city/street13": {
      "type": "ROOM",
      "short": "京师街道",
      "exits": {
        "west": "/d/suburb/es/city/westdoor2",
        "east": "/d/suburb/es/city/street12"
      },
      "objects": {
        "/d/suburb/es/snow/npc/scavenger": 1
      }
    },
    "/d/suburb/es/city/street14": {
      "type": "ROOM",
      "short": "京师街道",
      "exits": {
        "west": "/d/suburb/es/city/westdoor1",
        "east": "/d/suburb/es/city/street15"
      }
    },
    "/d/suburb/es/city/street15": {
      "type": "ROOM",
      "short": "京师街道",
      "exits": {
        "west": "/d/suburb/es/city/street14",
        "east": "/d/suburb/es/city/street7"
      }
    },
    "/d/suburb/es/city/street16": {
      "type": "ROOM",
      "short": "大栅栏",
      "exits": {
        "north": "/d/suburb/es/city/northdoor",
        "south": "/d/suburb/es/city/street7"
      }
    },
    "/d/suburb/es/city/street17": {
      "type": "ROOM",
      "short": "京师街道",
      "exits": {
        "north": "/d/suburb/es/city/bridge",
        "south": "/d/suburb/es/city/southdoor"
      },
      "objects": {
        "/d/suburb/es/snow/npc/scavenger": 1
      }
    },
    "/d/suburb/es/city/street2": {
      "type": "ROOM",
      "short": "京师东街",
      "objects": {
        "/d/suburb/es/city/npc/walker": 2
      },
      "exits": {
        "north": "/d/suburb/es/city/street1",
        "south": "/d/suburb/es/city/street3"
      }
    },
    "/d/suburb/es/city/street3": {
      "type": "ROOM",
      "short": "京师东街",
      "exits": {
        "east": "/d/suburb/es/city/shangshu/gate",
        "west": "/d/suburb/es/city/wumen",
        "north": "/d/suburb/es/city/street2"
      }
    },
    "/d/suburb/es/city/street4": {
      "type": "ROOM",
      "short": "京师西街",
      "exits": {
        "east": "/d/suburb/es/city/wumen",
        "west": "/d/suburb/es/city/xiangguo/gate",
        "north": "/d/suburb/es/city/street5"
      },
      "objects": {
        "/d/suburb/es/city/npc/walker": 1,
        "/d/suburb/es/city/npc/trader": 1
      }
    },
    "/d/suburb/es/city/street5": {
      "type": "ROOM",
      "short": "京师西街",
      "exits": {
        "west": "/d/suburb/es/city/jiulou",
        "south": "/d/suburb/es/city/street4",
        "north": "/d/suburb/es/city/street6"
      }
    },
    "/d/suburb/es/city/street6": {
      "type": "ROOM",
      "short": "京师西街",
      "exits": {
        "east": "/d/suburb/es/city/shenwumen",
        "south": "/d/suburb/es/city/street5",
        "west": "/d/suburb/es/city/cloth",
        "north": "/d/suburb/es/city/feiyuan"
      }
    },
    "/d/suburb/es/city/street7": {
      "type": "ROOM",
      "short": "十字路口",
      "exits": {
        "east": "/d/suburb/es/city/street8",
        "west": "/d/suburb/es/city/street15",
        "north": "/d/suburb/es/city/street16",
        "south": "/d/suburb/es/city/jitan"
      }
    },
    "/d/suburb/es/city/street8": {
      "type": "ROOM",
      "short": "京师街道",
      "exits": {
        "east": "/d/suburb/es/city/street9",
        "north": "/d/suburb/es/city/bank",
        "west": "/d/suburb/es/city/street7"
      },
      "objects": {
        "/d/suburb/es/snow/npc/scavenger": 1
      }
    },
    "/d/suburb/es/city/street9": {
      "type": "ROOM",
      "short": "京师街道",
      "exits": {
        "east": "/d/suburb/es/city/eastdoor1",
        "north": "/d/suburb/es/city/weapon",
        "west": "/d/suburb/es/city/street8"
      },
      "objects": {
        "/d/suburb/es/snow/npc/scavenger": 1
      }
    },
    "/d/suburb/es/city/wall": {
      "type": "ROOM",
      "short": "院墙",
      "exits": {},
      "objects": {}
    },
    "/d/suburb/es/city/weapon": {
      "type": "ROOM",
      "short": "京师武器店",
      "exits": {
        "south": "/d/suburb/es/city/street9"
      },
      "objects": {
        "/d/suburb/es/city/npc/weaponor": 1
      }
    },
    "/d/suburb/es/city/westdoor1": {
      "type": "ROOM",
      "short": "京师西一门",
      "exits": {
        "east": "/d/suburb/es/city/street14"
      },
      "objects": {
        "/d/suburb/es/city/npc/guard": 3
      }
    },
    "/d/suburb/es/city/westdoor2": {
      "type": "ROOM",
      "short": "京师西二门",
      "exits": {
        "east": "/d/suburb/es/city/street13"
      },
      "objects": {
        "/d/suburb/es/city/npc/guard": 3
      }
    },
    "/d/suburb/es/city/wumen": {
      "type": "ROOM",
      "short": "午门",
      "exits": {
        "east": "/d/suburb/es/city/street3",
        "west": "/d/suburb/es/city/street4",
        "south": "/d/suburb/es/city/jiaowu"
      }
    },
    "/d/suburb/es/city/xiangguo/gate": {
      "type": "ROOM",
      "short": "相国府大门",
      "exits": {
        "east": "/d/suburb/es/city/street4"
      }
    },
    "/d/suburb/es/death/block": {
      "type": "ROOM",
      "short": "空房间"
    },
    "/d/suburb/es/death/bridge": {
      "type": "ROOM",
      "short": "奈何桥",
      "exits": {
        "north": "/d/suburb/es/death/gate",
        "south": "/d/suburb/es/death/bridge1"
      },
      "objects": {
        "/d/suburb/es/death/npc/hell_guard": 4
      }
    },
    "/d/suburb/es/death/bridge1": {
      "type": "ROOM",
      "short": "奈何桥",
      "exits": {
        "north": "/d/suburb/es/death/bridge"
      }
    },
    "/d/suburb/es/death/gate": {
      "type": "ROOM",
      "exits": {
        "south": "/d/suburb/es/death/bridge",
        "north": "/d/suburb/es/death/gateway"
      },
      "objects": {
        "/d/suburb/es/death/npc/wgargoyle": 1
      }
    },
    "/d/suburb/es/death/gateway": {
      "type": "ROOM",
      "short": "酆都城门",
      "exits": {
        "north": "/d/suburb/es/death/road1",
        "south": "/d/suburb/es/death/gate"
      },
      "objects": {
        "/d/suburb/es/death/npc/bgargoyle": 1
      }
    },
    "/d/suburb/es/death/inn1": {
      "type": "ROOM",
      "short": "小店",
      "exits": {
        "east": "/d/suburb/es/death/road1"
      }
    },
    "/d/suburb/es/death/inn2": {
      "type": "ROOM",
      "short": "黑店",
      "exits": {
        "west": "/d/suburb/es/death/road1"
      }
    },
    "/d/suburb/es/death/jail": {
      "type": "ROOM",
      "short": "绿岛"
    },
    "/d/suburb/es/death/road1": {
      "type": "ROOM",
      "short": "鬼门大道",
      "exits": {
        "north": "/d/suburb/es/death/road2",
        "south": "/d/suburb/es/death/gateway",
        "west": "/d/suburb/es/death/inn1",
        "east": "/d/suburb/es/death/inn2"
      }
    },
    "/d/suburb/es/death/road2": {
      "type": "ROOM",
      "short": "鬼门大道",
      "exits": {
        "north": "/d/suburb/es/death/road3",
        "south": "/d/suburb/es/death/road1"
      }
    },
    "/d/suburb/es/death/road3": {
      "type": "ROOM",
      "short": "路的尽头",
      "exits": {
        "south": "/d/suburb/es/death/road2"
      }
    },
    "/d/suburb/es/death/spath1": {
      "type": "ROOM",
      "short": "墙边小路",
      "exits": {
        "east": "/d/suburb/es/death/gateway"
      }
    },
    "/d/suburb/es/goathill/canyon1": {
      "type": "ROOM",
      "short": "峡谷",
      "exits": {
        "northdown": "/d/suburb/es/goathill/canyon2",
        "south": "/d/suburb/es/goathill/mroad6"
      }
    },
    "/d/suburb/es/goathill/canyon2": {
      "type": "ROOM",
      "short": "峡谷",
      "exits": {
        "northeast": "/d/suburb/es/goathill/canyon3",
        "southup": "/d/suburb/es/goathill/canyon1"
      }
    },
    "/d/suburb/es/goathill/canyon3": {
      "type": "ROOM",
      "short": "峡谷",
      "exits": {
        "east": "/d/suburb/es/goathill/cavern1",
        "southwest": "/d/suburb/es/goathill/canyon2"
      }
    },
    "/d/suburb/es/goathill/cavern1": {
      "type": "ROOM",
      "short": "岩洞",
      "objects": {
        "/d/suburb/es/goathill/npc/worm": 2
      },
      "exits": {
        "southeast": "/d/suburb/es/goathill/cavern4",
        "northeast": "/d/suburb/es/goathill/cavern2",
        "west": "/d/suburb/es/goathill/canyon3"
      }
    },
    "/d/suburb/es/goathill/cavern1.c": {
      "type": "ROOM",
      "short": "空房间"
    },
    "/d/suburb/es/goathill/cavern2": {
      "type": "ROOM",
      "short": "岩洞",
      "exits": {
        "east": "/d/suburb/es/goathill/cavern3",
        "southwest": "/d/suburb/es/goathill/cavern1"
      },
      "objects": {
        "/d/suburb/es/goathill/npc/fat_worm": 1,
        "/d/suburb/es/goathill/npc/worm": 3
      }
    },
    "/d/suburb/es/goathill/cavern3": {
      "type": "ROOM",
      "short": "岩穴",
      "exits": {
        "west": "/d/suburb/es/goathill/cavern2"
      },
      "objects": {
        "/d/suburb/es/goathill/npc/big_worm": 2,
        "/d/suburb/es/goathill/npc/huge_worm": 2
      }
    },
    "/d/suburb/es/goathill/cavern4": {
      "type": "ROOM",
      "short": "岩洞",
      "exits": {
        "northwest": "/d/suburb/es/goathill/cavern1"
      },
      "objects": {
        "/d/suburb/es/goathill/npc/worm": 2,
        "/d/suburb/es/goathill/npc/big_worm": 1
      }
    },
    "/d/suburb/es/goathill/mroad1": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "north": "/d/suburb/es/goathill/mroad2",
        "south": "/d/suburb/es/snow/crossroad"
      }
    },
    "/d/suburb/es/goathill/mroad2": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northeast": "/d/suburb/es/goathill/mroad3",
        "south": "/d/suburb/es/goathill/mroad1"
      }
    },
    "/d/suburb/es/goathill/mroad3": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northup": "/d/suburb/es/goathill/mroad4",
        "east": "/d/suburb/es/goathill/temple1",
        "southwest": "/d/suburb/es/goathill/mroad2"
      }
    },
    "/d/suburb/es/goathill/mroad4": {
      "type": "ROOM",
      "short": "山路转角",
      "exits": {
        "east": "/d/suburb/es/goathill/mroad5",
        "southdown": "/d/suburb/es/goathill/mroad3"
      },
      "objects": {
        "/d/suburb/es/goathill/npc/bandit": 3,
        "/d/suburb/es/goathill/npc/bandit_leader": 1
      }
    },
    "/d/suburb/es/goathill/mroad5": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northeast": "/d/suburb/es/goathill/mroad6",
        "east": "/d/suburb/es/goathill/slope1",
        "west": "/d/suburb/es/goathill/mroad4"
      }
    },
    "/d/suburb/es/goathill/mroad6": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "north": "/d/suburb/es/goathill/canyon1",
        "southwest": "/d/suburb/es/goathill/mroad5",
        "south": "/d/suburb/es/goathill/slope1"
      }
    },
    "/d/suburb/es/goathill/slope1": {
      "type": "ROOM",
      "short": "岩石坡",
      "exits": {
        "north": "/d/suburb/es/goathill/mroad6",
        "west": "/d/suburb/es/goathill/mroad5"
      }
    },
    "/d/suburb/es/goathill/temple1": {
      "type": "ROOM",
      "short": "小土地庙",
      "exits": {
        "west": "/d/suburb/es/goathill/mroad3"
      },
      "objects": {
        "/d/suburb/es/goathill/npc/bandit_hwang": 1
      }
    },
    "/d/suburb/es/graveyard/grave1": {
      "type": "ROOM",
      "short": "乱葬岗",
      "exits": {
        "southeast": "/d/suburb/es/graveyard/road1"
      }
    },
    "/d/suburb/es/graveyard/road1": {
      "type": "ROOM",
      "short": "黄土小径",
      "exits": {
        "northwest": "/d/suburb/es/graveyard/grave1"
      }
    },
    "/d/suburb/es/green/cave0": {
      "type": "ROOM",
      "short": "洞口",
      "exits": {
        "south": "/d/suburb/es/green/path0",
        "north": "/d/suburb/es/green/cave1"
      },
      "objects": {
        "/d/suburb/es/green/npc/kid4": 2
      }
    },
    "/d/suburb/es/green/cave1": {
      "type": "ROOM",
      "short": "黑暗山洞",
      "exits": {
        "south": "/d/suburb/es/green/cave0",
        "north": "/d/suburb/es/green/cave2"
      }
    },
    "/d/suburb/es/green/cave2": {
      "type": "ROOM",
      "short": "黑暗山洞",
      "exits": {
        "south": "/d/suburb/es/green/cave1",
        "north": "/d/suburb/es/green/mpath0"
      }
    },
    "/d/suburb/es/green/cavehall": {
      "type": "ROOM",
      "short": "石室大厅",
      "exits": {
        "south": "/d/suburb/es/green/outdoor"
      },
      "objects": {
        "CLASS_D(juechen)+/master": 1
      }
    },
    "/d/suburb/es/green/eight0": {
      "type": "ROOM",
      "short": "迷阵",
      "exits": {
        "south": "/d/suburb/es/green/entrance",
        "north": "/d/suburb/es/green/closed",
        "west": "/d/suburb/es/green/eight0",
        "east": "/d/suburb/es/green/eight1"
      }
    },
    "/d/suburb/es/green/eight1": {
      "type": "ROOM",
      "short": "迷阵",
      "exits": {
        "south": "/d/suburb/es/green/eight1",
        "north": "/d/suburb/es/green/eight2",
        "west": "/d/suburb/es/green/closed",
        "east": "/d/suburb/es/green/eight0"
      }
    },
    "/d/suburb/es/green/eight2": {
      "type": "ROOM",
      "short": "迷阵",
      "exits": {
        "south": "/d/suburb/es/green/eight2",
        "north": "/d/suburb/es/green/eight1",
        "west": "/d/suburb/es/green/eight3",
        "east": "/d/suburb/es/green/closed"
      }
    },
    "/d/suburb/es/green/eight3": {
      "type": "ROOM",
      "short": "迷阵",
      "exits": {
        "south": "/d/suburb/es/green/eight3",
        "north": "/d/suburb/es/green/closed",
        "west": "/d/suburb/es/green/eight2",
        "east": "/d/suburb/es/green/eight4"
      }
    },
    "/d/suburb/es/green/eight4": {
      "type": "ROOM",
      "short": "迷阵",
      "exits": {
        "south": "/d/suburb/es/green/closed",
        "north": "/d/suburb/es/green/eight5",
        "west": "/d/suburb/es/green/eight4",
        "east": "/d/suburb/es/green/eight3"
      }
    },
    "/d/suburb/es/green/eight5": {
      "type": "ROOM",
      "short": "迷阵",
      "exits": {
        "south": "/d/suburb/es/green/eight5",
        "north": "/d/suburb/es/green/eight4",
        "west": "/d/suburb/es/green/eight6",
        "east": "/d/suburb/es/green/closed"
      }
    },
    "/d/suburb/es/green/eight6": {
      "type": "ROOM",
      "short": "迷阵",
      "exits": {
        "south": "/d/suburb/es/green/eight5",
        "north": "/d/suburb/es/green/eight7",
        "west": "/d/suburb/es/green/closed",
        "east": "/d/suburb/es/green/eight6"
      }
    },
    "/d/suburb/es/green/eight7": {
      "type": "ROOM",
      "short": "迷阵",
      "exits": {
        "south": "/d/suburb/es/green/stoneroom",
        "north": "/d/suburb/es/green/eight7",
        "west": "/d/suburb/es/green/eight6",
        "east": "/d/suburb/es/green/closed"
      }
    },
    "/d/suburb/es/green/entrance": {
      "type": "ROOM",
      "short": "山路尽头",
      "exits": {
        "north": "/d/suburb/es/green/outdoor",
        "east": "/d/suburb/es/green/eight0",
        "south": "/d/suburb/es/green/mpath2"
      }
    },
    "/d/suburb/es/green/field0": {
      "type": "ROOM",
      "short": "小广场",
      "exits": {
        "west": "/d/suburb/es/green/path8",
        "south": "/d/suburb/es/green/house4",
        "north": "/d/suburb/es/green/house2",
        "east": "/d/suburb/es/green/field1"
      }
    },
    "/d/suburb/es/green/field1": {
      "type": "ROOM",
      "short": "采石场的空地",
      "exits": {
        "west": "/d/suburb/es/green/field0",
        "south": "/d/suburb/es/green/station1",
        "north": "/d/suburb/es/green/house3"
      },
      "objects": {
        "/d/suburb/es/green/npc/kid1": 1
      }
    },
    "/d/suburb/es/green/house0": {
      "type": "ROOM",
      "short": "民宅",
      "exits": {
        "east": "/d/suburb/es/green/path3"
      },
      "objects": {
        "/d/suburb/es/green/npc/woman1": 1,
        "/d/suburb/es/green/npc/woman2": 1
      }
    },
    "/d/suburb/es/green/house1": {
      "type": "ROOM",
      "short": "工匠的家",
      "exits": {
        "south": "/d/suburb/es/green/path8"
      },
      "objects": {
        "/d/suburb/es/green/npc/worker1": 1
      }
    },
    "/d/suburb/es/green/house2": {
      "type": "ROOM",
      "short": "民宅",
      "exits": {
        "south": "/d/suburb/es/green/field0"
      },
      "objects": {
        "/d/suburb/es/green/npc/oldman": 1,
        "/d/suburb/es/green/npc/oldwoman": 1
      }
    },
    "/d/suburb/es/green/house3": {
      "type": "ROOM",
      "short": "民宅",
      "exits": {
        "south": "/d/suburb/es/green/field1"
      }
    },
    "/d/suburb/es/green/house4": {
      "type": "ROOM",
      "short": "村长的家",
      "exits": {
        "north": "/d/suburb/es/green/field0"
      },
      "objects": {
        "/d/suburb/es/green/npc/oldman2": 1
      }
    },
    "/d/suburb/es/green/mpath0": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "south": "/d/suburb/es/green/cave2",
        "north": "/d/suburb/es/green/mpath1"
      }
    },
    "/d/suburb/es/green/mpath1": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "south": "/d/suburb/es/green/mpath0",
        "north": "/d/suburb/es/green/mpath2"
      }
    },
    "/d/suburb/es/green/mpath2": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "south": "/d/suburb/es/green/mpath1",
        "north": "/d/suburb/es/green/entrance"
      }
    },
    "/d/suburb/es/green/outdoor": {
      "type": "ROOM",
      "short": "石室",
      "exits": {
        "enter": "/d/suburb/es/green/cavehall",
        "south": "/d/suburb/es/green/entrance"
      }
    },
    "/d/suburb/es/green/path0": {
      "type": "ROOM",
      "short": "小路的尽头",
      "exits": {
        "north": "/d/suburb/es/green/cave0",
        "south": "/d/suburb/es/green/path1"
      }
    },
    "/d/suburb/es/green/path1": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "north": "/d/suburb/es/green/path0",
        "south": "/d/suburb/es/green/path2"
      }
    },
    "/d/suburb/es/green/path2": {
      "type": "ROOM",
      "short": "三叉路口",
      "exits": {
        "south": "/d/suburb/es/green/path3",
        "north": "/d/suburb/es/green/path1",
        "west": "/d/suburb/es/green/temple0"
      },
      "objects": {
        "/d/suburb/es/green/npc/kid2": 2
      }
    },
    "/d/suburb/es/green/path3": {
      "type": "ROOM",
      "short": "三叉路口",
      "exits": {
        "north": "/d/suburb/es/green/path2",
        "south": "/d/suburb/es/green/path4",
        "west": "/d/suburb/es/green/house0",
        "east": "/d/suburb/es/green/path8"
      }
    },
    "/d/suburb/es/green/path4": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "south": "/d/suburb/es/green/path5",
        "north": "/d/suburb/es/green/path3",
        "east": "/d/suburb/es/green/shop0"
      }
    },
    "/d/suburb/es/green/path5": {
      "type": "ROOM",
      "short": "石板路",
      "exits": {
        "west": "/d/suburb/es/green/path6",
        "north": "/d/suburb/es/green/path4",
        "east": "/d/suburb/es/green/station0"
      }
    },
    "/d/suburb/es/green/path6": {
      "type": "ROOM",
      "short": "石板路",
      "exits": {
        "west": "/d/suburb/es/snow/crossroad",
        "east": "/d/suburb/es/green/path5"
      }
    },
    "/d/suburb/es/green/path8": {
      "type": "ROOM",
      "short": "小巷子",
      "exits": {
        "west": "/d/suburb/es/green/path3",
        "north": "/d/suburb/es/green/house1",
        "east": "/d/suburb/es/green/field0"
      },
      "objects": {
        "/d/suburb/es/green/npc/kid3": 2
      }
    },
    "/d/suburb/es/green/shop0": {
      "type": "ROOM",
      "short": "沈记商行",
      "exits": {
        "west": "/d/suburb/es/green/path4"
      },
      "objects": {
        "/d/suburb/es/green/npc/shen": 1,
        "/d/suburb/es/green/npc/woman1": 1
      }
    },
    "/d/suburb/es/green/station0": {
      "type": "ROOM",
      "short": "工作站",
      "exits": {
        "northeast": "/d/suburb/es/green/station1",
        "west": "/d/suburb/es/green/path5"
      },
      "objects": {
        "/d/suburb/es/green/npc/worker2": 3
      }
    },
    "/d/suburb/es/green/station1": {
      "type": "ROOM",
      "short": "工作站",
      "exits": {
        "north": "/d/suburb/es/green/field1",
        "southwest": "/d/suburb/es/green/station0"
      },
      "objects": {
        "/d/suburb/es/green/npc/worker2": 2
      }
    },
    "/d/suburb/es/green/stoneroom": {
      "type": "ROOM",
      "short": "石室",
      "exits": {
        "west": "/d/suburb/es/green/cavehall",
        "south": "/d/suburb/es/green/water"
      }
    },
    "/d/suburb/es/green/temple0": {
      "type": "ROOM",
      "short": "土地庙",
      "exits": {
        "east": "/d/suburb/es/green/path2"
      }
    },
    "/d/suburb/es/green/water": {
      "type": "ROOM",
      "short": "溪水边",
      "exits": {
        "west": "/d/suburb/es/green/outdoor",
        "north": "/d/suburb/es/green/stoneroom"
      }
    },
    "/d/suburb/es/green/work1": {
      "type": "ROOM",
      "short": "工作站",
      "exits": {
        "west": "/d/suburb/es/green/path5",
        "northeast": "/d/suburb/es/green/work2"
      }
    },
    "/d/suburb/es/ice/cave0": {
      "type": "ROOM",
      "short": "洞口",
      "exits": {
        "east": "/d/suburb/es/mine/cave0",
        "west": "/d/suburb/es/ice/path0"
      }
    },
    "/d/suburb/es/ice/path0": {
      "type": "ROOM",
      "short": "空房间"
    },
    "/d/suburb/es/latemoon/bamboo": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "east": "/d/suburb/es/latemoon/bamboo1",
        "west": "/d/suburb/es/latemoon/bamboo2",
        "north": "/d/suburb/es/latemoon/bamboo3",
        "south": "/d/suburb/es/latemoon/sroad4"
      }
    },
    "/d/suburb/es/latemoon/bamboo1": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "east": "/d/suburb/es/latemoon/bamboo",
        "west": "/d/suburb/es/latemoon/bamboo2",
        "north": "/d/suburb/es/latemoon/bamboo3",
        "south": "/d/suburb/es/latemoon/bamboo2"
      }
    },
    "/d/suburb/es/latemoon/bamboo2": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "east": "/d/suburb/es/latemoon/bamboo4",
        "west": "/d/suburb/es/latemoon/bamboo3",
        "north": "/d/suburb/es/latemoon/bamboo3",
        "south": "/d/suburb/es/latemoon/bamboo1"
      }
    },
    "/d/suburb/es/latemoon/bamboo3": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "north": "/d/suburb/es/latemoon/bamboo1",
        "east": "/d/suburb/es/latemoon/bamboo",
        "west": "/d/suburb/es/latemoon/bamboo2",
        "south": "/d/suburb/es/latemoon/bamboo4"
      }
    },
    "/d/suburb/es/latemoon/bamboo4": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "west": "/d/suburb/es/latemoon/bamboo3",
        "east": "/d/suburb/es/latemoon/bamboo",
        "north": "/d/suburb/es/latemoon/bamboo1",
        "south": "/d/suburb/es/latemoon/bamboo2"
      },
      "objects": {
        "/d/suburb/es/latemoon/obj/bamboo": 1
      }
    },
    "/d/suburb/es/latemoon/corridor7": {
      "type": "ROOM",
      "short": "内厅",
      "exits": {
        "south": "/d/suburb/es/latemoon/flower1",
        "east": "/d/suburb/es/latemoon/corridor8",
        "west": "/d/suburb/es/latemoon/corridor6"
      }
    },
    "/d/suburb/es/latemoon/front_yard": {
      "type": "ROOM",
      "short": "晚月庄前庭",
      "exits": {
        "out": "/d/suburb/es/latemoon/gate",
        "west": "/d/suburb/es/latemoon/latemoon1",
        "south": "/d/suburb/es/latemoon/park/yard1"
      }
    },
    "/d/suburb/es/latemoon/gate": {
      "type": "ROOM",
      "short": "晚月庄大门",
      "exits": {
        "northeast": "/d/suburb/es/latemoon/sroad4",
        "enter": "/d/suburb/es/latemoon/front_yard"
      }
    },
    "/d/suburb/es/latemoon/in_room/backroom": {
      "type": "ROOM",
      "short": "内厅",
      "exits": {
        "south": "/d/suburb/es/latemoon/in_room/flower1",
        "east": "/d/suburb/es/latemoon/in_room/corridor8",
        "west": "/d/suburb/es/latemoon/in_room/corridor6"
      }
    },
    "/d/suburb/es/latemoon/in_room/bathroom": {
      "type": "ROOM",
      "short": "小花池",
      "objects": {
        "/d/suburb/es/latemoon/npc/fuyun": 1
      },
      "exits": {
        "west": "/d/suburb/es/latemoon/in_room/bathroom1"
      }
    },
    "/d/suburb/es/latemoon/in_room/bathroom1": {
      "type": "ROOM",
      "short": "沐浴更衣室",
      "objects": {
        "/d/suburb/es/latemoon/npc/shinyu": 1
      },
      "exits": {
        "west": "/d/suburb/es/latemoon/in_room/flower1",
        "east": "/d/suburb/es/latemoon/in_room/bathroom"
      }
    },
    "/d/suburb/es/latemoon/in_room/flower1": {
      "type": "ROOM",
      "short": "内厅穿堂",
      "exits": {
        "north": "/d/suburb/es/latemoon/in_room/corridor7",
        "south": "/d/suburb/es/latemoon/in_room/flowerc",
        "east": "/d/suburb/es/latemoon/in_room/bathroom1"
      }
    },
    "/d/suburb/es/latemoon/latebook": {
      "type": "ROOM",
      "short": "后院书房",
      "exits": {
        "east": "/d/suburb/es/latemoon/latemoon7"
      },
      "objects": {
        "/d/suburb/es/latemoon/npc/girl": 1
      }
    },
    "/d/suburb/es/latemoon/latemoon1": {
      "type": "ROOM",
      "short": "晚月庄大厅",
      "exits": {
        "east": "/d/suburb/es/latemoon/front_yard",
        "north": "/d/suburb/es/latemoon/latemoon3",
        "west": "/d/suburb/es/latemoon/latemoonc"
      },
      "objects": {
        "/d/suburb/es/latemoon/npc/servant": 2,
        "CLASS_D(dancer)+/master": 1
      }
    },
    "/d/suburb/es/latemoon/latemoon2": {
      "type": "ROOM",
      "short": "内厅",
      "exits": {
        "west": "/d/suburb/es/latemoon/latemoon4"
      },
      "objects": {
        "/d/suburb/es/latemoon/npc/zauron": 1
      }
    },
    "/d/suburb/es/latemoon/latemoon3": {
      "type": "ROOM",
      "short": "傍厅",
      "exits": {
        "south": "/d/suburb/es/latemoon/latemoon1"
      },
      "objects": {
        "/d/suburb/es/latemoon/npc/yumay": 1
      }
    },
    "/d/suburb/es/latemoon/latemoon4": {
      "type": "ROOM",
      "short": "内厅穿堂",
      "exits": {
        "north": "/d/suburb/es/latemoon/latemoonc",
        "south": "/d/suburb/es/latemoon/room/twoc",
        "east": "/d/suburb/es/latemoon/latemoon2"
      }
    },
    "/d/suburb/es/latemoon/latemoon5": {
      "type": "ROOM",
      "short": "后院走道",
      "exits": {
        "west": "/d/suburb/es/latemoon/latemoon6",
        "south": "/d/suburb/es/latemoon/latemoonc"
      }
    },
    "/d/suburb/es/latemoon/latemoon6": {
      "type": "ROOM",
      "short": "禁闭房",
      "exits": {
        "east": "/d/suburb/es/latemoon/latemoon5"
      },
      "objects": {
        "/d/suburb/es/latemoon/npc/funlin": 1
      }
    },
    "/d/suburb/es/latemoon/latemoon7": {
      "type": "ROOM",
      "short": "后院走道",
      "exits": {
        "south": "/d/suburb/es/latemoon/latemoon8",
        "east": "/d/suburb/es/latemoon/latemoonc",
        "west": "/d/suburb/es/latemoon/latebook"
      }
    },
    "/d/suburb/es/latemoon/latemoon8": {
      "type": "ROOM",
      "short": "密室",
      "exits": {
        "north": "/d/suburb/es/latemoon/latemoon7"
      }
    },
    "/d/suburb/es/latemoon/latemoonc": {
      "type": "ROOM",
      "short": "大厅后院",
      "exits": {
        "north": "/d/suburb/es/latemoon/latemoon5",
        "west": "/d/suburb/es/latemoon/latemoon7",
        "east": "/d/suburb/es/latemoon/latemoon1",
        "south": "/d/suburb/es/latemoon/latemoon4"
      }
    },
    "/d/suburb/es/latemoon/miroom": {
      "type": "ROOM",
      "short": "set(,HIY \"密室\" NOR);",
      "exits": {
        "north": "/d/suburb/es/latemoon/miroom2"
      },
      "objects": {
        "/d/suburb/es/latemoon/obj/hankie": 1
      }
    },
    "/d/suburb/es/latemoon/miroom2": {
      "type": "ROOM",
      "short": "内厅",
      "exits": {
        "south": "/d/suburb/es/latemoon/miroom"
      },
      "objects": {
        "/d/suburb/es/latemoon/npc/shaowei": 1
      }
    },
    "/d/suburb/es/latemoon/npc/obj/latebook": {
      "type": "ROOM",
      "short": "后院书房",
      "exits": {
        "east": "/d/suburb/es/latemoon/npc/obj/latemoon7"
      },
      "objects": {
        "/d/suburb/es/latemoon/npc/obj/npc/girl": 1
      }
    },
    "/d/suburb/es/latemoon/obj/latebook": {
      "type": "ROOM",
      "short": "后院书房",
      "exits": {
        "east": "/d/suburb/es/latemoon/obj/latemoon7"
      },
      "objects": {
        "/d/suburb/es/latemoon/obj/npc/girl": 1
      }
    },
    "/d/suburb/es/latemoon/park/bridge1": {
      "type": "ROOM",
      "short": "沁芳桥",
      "exits": {
        "north": "/d/suburb/es/latemoon/park/moonc",
        "south": "/d/suburb/es/latemoon/park/pavilion1"
      }
    },
    "/d/suburb/es/latemoon/park/bridge2": {
      "type": "ROOM",
      "short": "翠嫣桥",
      "exits": {
        "north": "/d/suburb/es/latemoon/park/pavilion1",
        "southeast": "/d/suburb/es/latemoon/park/paroad1",
        "west": "/d/suburb/es/latemoon/park/paroad2"
      }
    },
    "/d/suburb/es/latemoon/park/bridge3": {
      "type": "ROOM",
      "short": "朱栏板桥",
      "exits": {
        "south": "/d/suburb/es/latemoon/park/moon4",
        "northwest": "/d/suburb/es/latemoon/park/moon1"
      }
    },
    "/d/suburb/es/latemoon/park/flower2": {
      "type": "ROOM",
      "short": "月洞门",
      "exits": {
        "north": "/d/suburb/es/latemoon/park/yard1",
        "south": "/d/suburb/es/latemoon/park/moonc"
      }
    },
    "/d/suburb/es/latemoon/park/moon1": {
      "type": "ROOM",
      "short": "长廊曲洞",
      "exits": {
        "west": "/d/suburb/es/latemoon/park/moonc",
        "southeast": "/d/suburb/es/latemoon/park/bridge3"
      }
    },
    "/d/suburb/es/latemoon/park/moon2": {
      "type": "ROOM",
      "short": "湘园小径",
      "exits": {
        "south": "/d/suburb/es/latemoon/park/moon5",
        "east": "/d/suburb/es/latemoon/park/moonc"
      }
    },
    "/d/suburb/es/latemoon/park/moon3": {
      "type": "ROOM",
      "short": "甬路",
      "exits": {
        "southeast": "/d/suburb/es/latemoon/park/paroad2",
        "north": "/d/suburb/es/latemoon/park/moon5",
        "west": "/d/suburb/es/latemoon/park/moroom"
      }
    },
    "/d/suburb/es/latemoon/park/moon4": {
      "type": "ROOM",
      "short": "暖香榭",
      "exits": {
        "southwest": "/d/suburb/es/latemoon/park/paroad1",
        "north": "/d/suburb/es/latemoon/park/bridge3"
      },
      "objects": {
        "/d/suburb/es/latemoon/park/npc/bird": 2,
        "/d/suburb/es/latemoon/park/npc/maysan": 1
      }
    },
    "/d/suburb/es/latemoon/park/moon5": {
      "type": "ROOM",
      "short": "桂花园",
      "exits": {
        "south": "/d/suburb/es/latemoon/park/moon3",
        "north": "/d/suburb/es/latemoon/park/moon2"
      },
      "objects": {
        "/d/suburb/es/latemoon/park/npc/flwgirl": 4
      }
    },
    "/d/suburb/es/latemoon/park/moonc": {
      "type": "ROOM",
      "short": "翠嶂",
      "exits": {
        "north": "/d/suburb/es/latemoon/park/flower2",
        "south": "/d/suburb/es/latemoon/park/bridge1",
        "west": "/d/suburb/es/latemoon/park/moon2",
        "east": "/d/suburb/es/latemoon/park/moon1"
      },
      "objects": {}
    },
    "/d/suburb/es/latemoon/park/moondoor": {
      "type": "ROOM",
      "short": "晚月庄后门",
      "exits": {
        "north": "/d/suburb/es/latemoon/park/paroad1"
      }
    },
    "/d/suburb/es/latemoon/park/moroom": {
      "type": "ROOM",
      "short": "紫翎小轩",
      "exits": {
        "east": "/d/suburb/es/latemoon/park/moon3"
      },
      "objects": {
        "/d/suburb/es/latemoon/park/npc/girl_yu": 1,
        "/d/suburb/es/latemoon/park/npc/dodo1": 1
      }
    },
    "/d/suburb/es/latemoon/park/paroad1": {
      "type": "ROOM",
      "short": "甬路",
      "exits": {
        "northwest": "/d/suburb/es/latemoon/park/bridge2",
        "northeast": "/d/suburb/es/latemoon/park/moon4",
        "south": "/d/suburb/es/latemoon/park/moondoor"
      }
    },
    "/d/suburb/es/latemoon/park/paroad2": {
      "type": "ROOM",
      "short": "□香榭",
      "exits": {
        "east": "/d/suburb/es/latemoon/park/bridge2",
        "northwest": "/d/suburb/es/latemoon/park/moon3"
      },
      "objects": {
        "/d/suburb/es/latemoon/park/npc/rabbit": 2
      }
    },
    "/d/suburb/es/latemoon/park/pavilion1": {
      "type": "ROOM",
      "short": "沁芳亭",
      "exits": {
        "north": "/d/suburb/es/latemoon/park/bridge1",
        "south": "/d/suburb/es/latemoon/park/bridge2"
      },
      "objects": {
        "/d/suburb/es/latemoon/park/npc/shiren": 1
      }
    },
    "/d/suburb/es/latemoon/park/yard1": {
      "type": "ROOM",
      "short": "前院",
      "exits": {
        "north": "/d/suburb/es/latemoon/front_yard",
        "south": "/d/suburb/es/latemoon/park/flower2"
      }
    },
    "/d/suburb/es/latemoon/room/bathroom": {
      "type": "ROOM",
      "short": "小花池",
      "objects": {
        "/d/suburb/es/latemoon/room/npc/fireangel": 1,
        "/d/suburb/es/latemoon/room/npc/eton": 1
      },
      "exits": {
        "west": "/d/suburb/es/latemoon/room/bathroom1"
      }
    },
    "/d/suburb/es/latemoon/room/bathroom1": {
      "type": "ROOM",
      "short": "沐浴更衣室",
      "objects": {
        "/d/suburb/es/latemoon/room/npc/shinyu": 1
      },
      "exits": {
        "west": "/d/suburb/es/latemoon/room/flower1",
        "east": "/d/suburb/es/latemoon/room/bathroom"
      }
    },
    "/d/suburb/es/latemoon/room/corridor7": {
      "type": "ROOM",
      "short": "内厅",
      "exits": {
        "south": "/d/suburb/es/latemoon/room/flower1",
        "east": "/d/suburb/es/latemoon/room/eroad1",
        "west": "/d/suburb/es/latemoon/room/wroad2"
      },
      "objects": {
        "/d/suburb/es/latemoon/room/npc/yuchoun": 1
      }
    },
    "/d/suburb/es/latemoon/room/eastroom": {
      "type": "ROOM",
      "short": "东厢房",
      "exits": {
        "west": "/d/suburb/es/latemoon/room/eroad1"
      },
      "objects": {
        "/d/suburb/es/latemoon/room/npc/servant": 1,
        "/d/suburb/es/latemoon/room/npc/elon": 1
      }
    },
    "/d/suburb/es/latemoon/room/eat1": {
      "type": "ROOM",
      "short": "大饭厅",
      "exits": {
        "east": "/d/suburb/es/latemoon/room/eat2",
        "west": "/d/suburb/es/latemoon/room/twoc"
      },
      "objects": {
        "/d/suburb/es/latemoon/obj/food2": 1,
        "/d/suburb/es/latemoon/obj/food3": 2
      }
    },
    "/d/suburb/es/latemoon/room/eat2": {
      "type": "ROOM",
      "short": "膳房",
      "exits": {
        "east": "/d/suburb/es/latemoon/room/kitchen",
        "west": "/d/suburb/es/latemoon/room/eat1"
      },
      "objects": {
        "/d/suburb/es/latemoon/obj/wine": 1,
        "/d/suburb/es/latemoon/obj/food": 1
      }
    },
    "/d/suburb/es/latemoon/room/eroad1": {
      "type": "ROOM",
      "short": "东厢房走道",
      "exits": {
        "east": "/d/suburb/es/latemoon/room/eastroom",
        "west": "/d/suburb/es/latemoon/room/corridor7",
        "north": "/d/suburb/es/latemoon/room/eroad2"
      }
    },
    "/d/suburb/es/latemoon/room/eroad2": {
      "type": "ROOM",
      "short": "东厢房走道",
      "exits": {
        "north": "/d/suburb/es/latemoon/room/lroad1",
        "south": "/d/suburb/es/latemoon/room/eroad1"
      }
    },
    "/d/suburb/es/latemoon/room/flower1": {
      "type": "ROOM",
      "short": "内厅穿堂",
      "exits": {
        "north": "/d/suburb/es/latemoon/room/corridor7",
        "east": "/d/suburb/es/latemoon/room/bathroom1"
      },
      "objects": {
        "/d/suburb/es/latemoon/room/npc/shaoin": 1
      }
    },
    "/d/suburb/es/latemoon/room/guest1": {
      "type": "ROOM",
      "short": "客房",
      "exits": {
        "north": "/d/suburb/es/latemoon/room/two1"
      },
      "objects": {
        "/d/suburb/es/latemoon/room/npc/guest": 1
      }
    },
    "/d/suburb/es/latemoon/room/guest2": {
      "type": "ROOM",
      "short": "上等厢房",
      "exits": {
        "north": "/d/suburb/es/latemoon/room/two2"
      },
      "objects": {
        "/d/suburb/es/latemoon/room/npc/tguest": 1
      }
    },
    "/d/suburb/es/latemoon/room/kitchen": {
      "type": "ROOM",
      "short": "厨房",
      "exits": {
        "west": "/d/suburb/es/latemoon/room/eat2"
      },
      "objects": {
        "/d/suburb/es/latemoon/room/npc/obj/fire": 1,
        "/d/suburb/es/latemoon/room/npc/fochin": 1
      }
    },
    "/d/suburb/es/latemoon/room/lcenter": {
      "type": "ROOM",
      "short": "后厅",
      "exits": {
        "east": "/d/suburb/es/latemoon/room/lroad1",
        "north": "/d/suburb/es/latemoon/room/twoc",
        "west": "/d/suburb/es/latemoon/room/lroad3",
        "south": "/d/suburb/es/latemoon/room/lstudio"
      },
      "objects": {
        "/d/suburb/es/latemoon/room/npc/spring2": 1,
        "/d/suburb/es/latemoon/room/npc/yushou": 1
      }
    },
    "/d/suburb/es/latemoon/room/lroad1": {
      "type": "ROOM",
      "short": "后厅走道",
      "exits": {
        "south": "/d/suburb/es/latemoon/room/eroad2",
        "west": "/d/suburb/es/latemoon/room/lcenter"
      }
    },
    "/d/suburb/es/latemoon/room/lroad3": {
      "type": "ROOM",
      "short": "后厅走道",
      "exits": {
        "east": "/d/suburb/es/latemoon/room/lcenter",
        "west": "/d/suburb/es/latemoon/room/room4",
        "south": "/d/suburb/es/latemoon/room/wroad1",
        "northup": "/d/suburb/es/latemoon/upstar/upstar1"
      }
    },
    "/d/suburb/es/latemoon/room/lstudio": {
      "type": "ROOM",
      "short": "内书房",
      "exits": {
        "north": "/d/suburb/es/latemoon/room/lcenter"
      },
      "objects": {
        "/d/suburb/es/latemoon/room/npc/old": 1,
        "/d/suburb/es/latemoon/room/npc/killer": 1
      }
    },
    "/d/suburb/es/latemoon/room/room4": {
      "type": "ROOM",
      "short": "内书房",
      "exits": {
        "east": "/d/suburb/es/latemoon/room/lroad3"
      },
      "objects": {
        "/d/suburb/es/latemoon/npc/servant2": 1,
        "/d/suburb/es/latemoon/room/npc/spring1": 1
      }
    },
    "/d/suburb/es/latemoon/room/two1": {
      "type": "ROOM",
      "short": "夹道",
      "exits": {
        "south": "/d/suburb/es/latemoon/room/guest1",
        "east": "/d/suburb/es/latemoon/room/twoc",
        "west": "/d/suburb/es/latemoon/room/two2"
      }
    },
    "/d/suburb/es/latemoon/room/two2": {
      "type": "ROOM",
      "short": "夹道",
      "exits": {
        "south": "/d/suburb/es/latemoon/room/guest2",
        "east": "/d/suburb/es/latemoon/room/two1"
      }
    },
    "/d/suburb/es/latemoon/room/twoc": {
      "type": "ROOM",
      "short": "仪门",
      "exits": {
        "north": "/d/suburb/es/latemoon/latemoon4",
        "south": "/d/suburb/es/latemoon/room/lcenter",
        "east": "/d/suburb/es/latemoon/room/eat1",
        "west": "/d/suburb/es/latemoon/room/two1"
      }
    },
    "/d/suburb/es/latemoon/room/westroom": {
      "type": "ROOM",
      "short": "西厢房",
      "exits": {
        "east": "/d/suburb/es/latemoon/room/wroad2"
      },
      "objects": {
        "/d/suburb/es/latemoon/room/npc/servant": 1,
        "/d/suburb/es/latemoon/room/npc/annihi": 1
      }
    },
    "/d/suburb/es/latemoon/room/wroad1": {
      "type": "ROOM",
      "short": "西厢房走道",
      "exits": {
        "north": "/d/suburb/es/latemoon/room/lroad3",
        "south": "/d/suburb/es/latemoon/room/wroad2"
      }
    },
    "/d/suburb/es/latemoon/room/wroad2": {
      "type": "ROOM",
      "short": "西厢房走道",
      "exits": {
        "north": "/d/suburb/es/latemoon/room/wroad1",
        "east": "/d/suburb/es/latemoon/room/corridor7",
        "west": "/d/suburb/es/latemoon/room/westroom",
        "southup": "/d/suburb/es/latemoon/upstar/upstar2"
      }
    },
    "/d/suburb/es/latemoon/sroad1": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "southeast": "/d/suburb/es/latemoon/sroad2",
        "north": "/d/suburb/es/sanyen/gate"
      }
    },
    "/d/suburb/es/latemoon/sroad2": {
      "type": "ROOM",
      "short": "蜿蜒小径\"), set(\"long\", @LONG你走在这条蜿蜒的小径上, 本来向北走的小径被一道峭壁挡住了,因此小径从这弯向东边去, 在你的西边是一片杂草和几棵小树。LONG );",
      "exits": {
        "northwest": "/d/suburb/es/latemoon/sroad1",
        "east": "/d/suburb/es/latemoon/sroad3"
      }
    },
    "/d/suburb/es/latemoon/sroad3": {
      "type": "ROOM",
      "short": "小径",
      "exits": {
        "west": "/d/suburb/es/latemoon/sroad2",
        "southeast": "/d/suburb/es/latemoon/sroad5"
      }
    },
    "/d/suburb/es/latemoon/sroad4": {
      "type": "ROOM",
      "short": "蜿蜒小径",
      "exits": {
        "north": "/d/suburb/es/latemoon/sroad5",
        "southwest": "/d/suburb/es/latemoon/gate"
      },
      "objects": {
        "/d/suburb/es/latemoon/npc/butterfly": 1
      }
    },
    "/d/suburb/es/latemoon/sroad5": {
      "type": "ROOM",
      "short": "小径",
      "exits": {
        "northwest": "/d/suburb/es/latemoon/sroad3",
        "west": "/d/suburb/es/latemoon/bamboo1",
        "south": "/d/suburb/es/latemoon/sroad4"
      },
      "objects": {
        "/d/suburb/es/latemoon/npc/butterfly": 1
      }
    },
    "/d/suburb/es/latemoon/upstar/upcenter": {
      "type": "ROOM",
      "short": "佛堂门前",
      "exits": {
        "west": "/d/suburb/es/latemoon/upstar/uproom",
        "north": "/d/suburb/es/latemoon/upstar/upstar1",
        "south": "/d/suburb/es/latemoon/upstar/upstar2"
      }
    },
    "/d/suburb/es/latemoon/upstar/uplook": {
      "type": "ROOM",
      "short": "观景台",
      "exits": {
        "west": "/d/suburb/es/latemoon/upstar/upstarc",
        "jump": "/d/suburb/es/latemoon/park/yard1"
      },
      "objects": {
        "/d/suburb/es/latemoon/upstar/npc/bird": 2
      }
    },
    "/d/suburb/es/latemoon/upstar/uproom": {
      "type": "ROOM",
      "short": "佛堂",
      "exits": {
        "east": "/d/suburb/es/latemoon/upstar/upcenter"
      },
      "objects": {
        "/d/suburb/es/latemoon/upstar/npc/statue": 1
      }
    },
    "/d/suburb/es/latemoon/upstar/uproom2": {
      "type": "ROOM",
      "short": "翠湘阁",
      "exits": {
        "south": "/d/suburb/es/latemoon/upstar/upstar4"
      },
      "objects": {
        "/d/suburb/es/latemoon/upstar/npc/shinfun": 1
      }
    },
    "/d/suburb/es/latemoon/upstar/uproom3": {
      "type": "ROOM",
      "short": "缀芳阁",
      "exits": {
        "north": "/d/suburb/es/latemoon/upstar/upstar3"
      },
      "objects": {
        "/d/suburb/es/latemoon/upstar/npc/huei": 1,
        "/d/suburb/es/latemoon/obj/cake": 1
      }
    },
    "/d/suburb/es/latemoon/upstar/upstar1": {
      "type": "ROOM",
      "short": "二楼走廊",
      "exits": {
        "east": "/d/suburb/es/latemoon/upstar/upstar4",
        "south": "/d/suburb/es/latemoon/upstar/upcenter",
        "northdown": "/d/suburb/es/latemoon/room/lroad3"
      }
    },
    "/d/suburb/es/latemoon/upstar/upstar2": {
      "type": "ROOM",
      "short": "二楼走廊",
      "exits": {
        "east": "/d/suburb/es/latemoon/upstar/upstar3",
        "north": "/d/suburb/es/latemoon/upstar/upcenter",
        "southdown": "/d/suburb/es/latemoon/room/wroad2"
      }
    },
    "/d/suburb/es/latemoon/upstar/upstar3": {
      "type": "ROOM",
      "short": "二楼走廊",
      "exits": {
        "west": "/d/suburb/es/latemoon/upstar/upstar2",
        "north": "/d/suburb/es/latemoon/upstar/upstarc",
        "south": "/d/suburb/es/latemoon/upstar/uproom3"
      }
    },
    "/d/suburb/es/latemoon/upstar/upstar4": {
      "type": "ROOM",
      "short": "二楼走廊",
      "exits": {
        "west": "/d/suburb/es/latemoon/upstar/upstar1",
        "south": "/d/suburb/es/latemoon/upstar/upstarc",
        "north": "/d/suburb/es/latemoon/upstar/uproom2"
      }
    },
    "/d/suburb/es/latemoon/upstar/upstarc": {
      "type": "ROOM",
      "short": "前堂楼",
      "exits": {
        "east": "/d/suburb/es/latemoon/upstar/uplook",
        "north": "/d/suburb/es/latemoon/upstar/upstar4",
        "south": "/d/suburb/es/latemoon/upstar/upstar3"
      }
    },
    "/d/suburb/es/oldpine/cave1": {
      "type": "ROOM",
      "short": "山洞",
      "exits": {
        "south": "/d/suburb/es/oldpine/cave+(random(4)+1)",
        "north": "/d/suburb/es/oldpine/cave2",
        "west": "/d/suburb/es/oldpine/cave+(random(3)+1)",
        "east": "/d/suburb/es/oldpine/cave+(random(4)+1)"
      }
    },
    "/d/suburb/es/oldpine/cave2": {
      "type": "ROOM",
      "short": "山洞",
      "exits": {
        "south": "/d/suburb/es/oldpine/cave+(random(4)+1)",
        "north": "/d/suburb/es/oldpine/cave+(random(4)+1)",
        "west": "/d/suburb/es/oldpine/cave+(random(3)+1)",
        "east": "/d/suburb/es/oldpine/cave4"
      }
    },
    "/d/suburb/es/oldpine/cave3": {
      "type": "ROOM",
      "short": "山洞",
      "exits": {
        "south": "/d/suburb/es/oldpine/cave+(random(4)+1)",
        "north": "/d/suburb/es/oldpine/cave+(random(4)+1)",
        "west": "/d/suburb/es/oldpine/cave+(random(4)+1)",
        "east": "/d/suburb/es/oldpine/cave+(random(4)+1)"
      }
    },
    "/d/suburb/es/oldpine/cave4": {
      "type": "ROOM",
      "short": "山洞",
      "exits": {
        "south": "/d/suburb/es/oldpine/cave+(random(4)+1)",
        "north": "/d/suburb/es/oldpine/cave+(random(4)+1)",
        "west": "/d/suburb/es/oldpine/cave5",
        "east": "/d/suburb/es/oldpine/cave+(random(4)+1)"
      }
    },
    "/d/suburb/es/oldpine/cave5": {
      "type": "ROOM",
      "short": "山洞",
      "exits": {
        "eastdown": "/d/suburb/es/oldpine/waterfall"
      },
      "objects": {
        "/d/suburb/es/oldpine/npc/skeleton": 1
      }
    },
    "/d/suburb/es/oldpine/clearing": {
      "type": "ROOM",
      "short": "林间空地",
      "exits": {
        "west": "/d/suburb/es/oldpine/npath3",
        "north": "/d/suburb/es/oldpine/spath1",
        "east": "/d/suburb/es/oldpine/epath1"
      }
    },
    "/d/suburb/es/oldpine/cliff1": {
      "type": "ROOM",
      "short": "山壁上的窄穴"
    },
    "/d/suburb/es/oldpine/cliff2": {
      "type": "ROOM",
      "short": "山壁上的窄穴"
    },
    "/d/suburb/es/oldpine/cliffdown": {
      "type": "ROOM",
      "short": "林间....不....悬崖边",
      "exits": {
        "south": "/d/suburb/es/oldpine/pine+(random(6)+1)",
        "north": "/d/suburb/es/oldpine/pine+(random(6)+1)",
        "east": "/d/suburb/es/oldpine/pine+(random(6)+1)",
        "west": "/d/suburb/es/oldpine/pine+(random(6)+1)",
        "northeast": "/d/suburb/es/oldpine/pine7"
      }
    },
    "/d/suburb/es/oldpine/cliffside": {
      "type": "ROOM",
      "short": "林间....不....悬崖边",
      "exits": {
        "north": "/d/suburb/es/oldpine/pine1"
      }
    },
    "/d/suburb/es/oldpine/epath1": {
      "type": "ROOM",
      "short": "林间小路",
      "exits": {
        "west": "/d/suburb/es/oldpine/clearing",
        "east": "/d/suburb/es/oldpine/epath2"
      }
    },
    "/d/suburb/es/oldpine/epath2": {
      "type": "ROOM",
      "short": "小石桥",
      "exits": {
        "west": "/d/suburb/es/oldpine/epath1",
        "east": "/d/suburb/es/oldpine/epath3"
      }
    },
    "/d/suburb/es/oldpine/epath3": {
      "type": "ROOM",
      "short": "林间小路",
      "exits": {
        "west": "/d/suburb/es/oldpine/epath2"
      },
      "objects": {
        "/d/suburb/es/oldpine/npc/maniac": 1
      }
    },
    "/d/suburb/es/oldpine/keep1": {
      "type": "ROOM",
      "short": "老松寨秘密入口",
      "exits": {
        "west": "/d/suburb/es/oldpine/pine2",
        "east": "/d/suburb/es/oldpine/keep2"
      },
      "objects": {
        "/d/suburb/es/oldpine/npc/bandit_guard": 4
      }
    },
    "/d/suburb/es/oldpine/keep2": {
      "type": "ROOM",
      "short": "老松寨",
      "exits": {
        "west": "/d/suburb/es/oldpine/keep1",
        "east": "/d/suburb/es/oldpine/keep3"
      },
      "objects": {
        "/d/suburb/es/oldpine/npc/bandit_guard": 2,
        "/d/suburb/es/oldpine/npc/bandit_leader": 1
      }
    },
    "/d/suburb/es/oldpine/keep3": {
      "type": "ROOM",
      "short": "老松寨",
      "exits": {
        "west": "/d/suburb/es/oldpine/keep2"
      },
      "objects": {
        "/d/suburb/es/oldpine/npc/bandit_leader": 3,
        "/d/suburb/es/oldpine/npc/bandit_commander": 1
      }
    },
    "/d/suburb/es/oldpine/lake": {
      "type": "ROOM",
      "short": "水潭",
      "exits": {
        "north": "/d/suburb/es/oldpine/riverbank1"
      },
      "objects": {
        "/d/suburb/es/oldpine/npc/serpent": 5
      }
    },
    "/d/suburb/es/oldpine/npath1": {
      "type": "ROOM",
      "short": "林间小路",
      "exits": {
        "south": "/d/suburb/es/oldpine/npath2",
        "north": "/d/suburb/es/snow/eroad3"
      }
    },
    "/d/suburb/es/oldpine/npath2": {
      "type": "ROOM",
      "short": "林间小路",
      "exits": {
        "southeast": "/d/suburb/es/oldpine/npath3",
        "north": "/d/suburb/es/oldpine/npath1"
      }
    },
    "/d/suburb/es/oldpine/npath3": {
      "type": "ROOM",
      "short": "林间小路",
      "exits": {
        "east": "/d/suburb/es/oldpine/clearing",
        "northwest": "/d/suburb/es/oldpine/npath2"
      }
    },
    "/d/suburb/es/oldpine/passage": {
      "type": "ROOM",
      "short": "秘密通道入口",
      "exits": {
        "north": "/d/suburb/es/oldpine/secrectpath1",
        "south": "/d/suburb/es/oldpine/waterfall"
      }
    },
    "/d/suburb/es/oldpine/path3": {
      "type": "ROOM",
      "short": "秘密通道",
      "exits": {
        "south": "/d/suburb/es/oldpine/secrectpath1"
      }
    },
    "/d/suburb/es/oldpine/pine1": {
      "type": "ROOM",
      "short": "松树林",
      "objects": {
        "/d/suburb/es/oldpine/npc/tall_bandit": 1,
        "/d/suburb/es/oldpine/npc/fat_bandit": 1
      },
      "exits": {
        "south": "/d/suburb/es/oldpine/pine+(random(5)+2)",
        "north": "/d/suburb/es/oldpine/pine+(random(5)+2)",
        "west": "/d/suburb/es/oldpine/pine4",
        "east": "/d/suburb/es/oldpine/pine+(random(5)+2)"
      }
    },
    "/d/suburb/es/oldpine/pine2": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "south": "/d/suburb/es/oldpine/pine+(random(5)+2)",
        "north": "/d/suburb/es/oldpine/pine+(random(5)+2)",
        "west": "/d/suburb/es/oldpine/pine+(random(5)+2)",
        "east": "/d/suburb/es/oldpine/keep1"
      }
    },
    "/d/suburb/es/oldpine/pine3": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "south": "/d/suburb/es/oldpine/pine+(random(5)+2)",
        "north": "/d/suburb/es/oldpine/pine+(random(5)+2)",
        "west": "/d/suburb/es/oldpine/pine+(random(5)+2)",
        "east": "/d/suburb/es/oldpine/pine+(random(5)+2)"
      }
    },
    "/d/suburb/es/oldpine/pine4": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "south": "/d/suburb/es/oldpine/pine+(random(5)+2)",
        "north": "/d/suburb/es/oldpine/pine5",
        "west": "/d/suburb/es/oldpine/pine+(random(5)+2)",
        "east": "/d/suburb/es/oldpine/pine+(random(5)+2)"
      }
    },
    "/d/suburb/es/oldpine/pine5": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "south": "/d/suburb/es/oldpine/pine+(random(5)+2)",
        "north": "/d/suburb/es/oldpine/pine6",
        "west": "/d/suburb/es/oldpine/pine+(random(5)+2)",
        "east": "/d/suburb/es/oldpine/pine+(random(5)+2)"
      }
    },
    "/d/suburb/es/oldpine/pine6": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "south": "/d/suburb/es/oldpine/pine+(random(5)+2)",
        "north": "/d/suburb/es/oldpine/pine+(random(5)+2)",
        "west": "/d/suburb/es/oldpine/pine7",
        "east": "/d/suburb/es/oldpine/pine+(random(5)+2)"
      }
    },
    "/d/suburb/es/oldpine/pine7": {
      "type": "ROOM",
      "short": "松树林",
      "objects": {
        "/d/suburb/es/oldpine/npc/wolf_dog": 1
      },
      "exits": {
        "south": "/d/suburb/es/oldpine/pine+(random(5)+2)",
        "north": "/d/suburb/es/oldpine/pine+(random(5)+2)",
        "west": "/d/suburb/es/oldpine/pine+(random(5)+2)",
        "east": "/d/suburb/es/oldpine/pine+(random(5)+2)",
        "southwest": "/d/suburb/es/oldpine/cliffdown"
      }
    },
    "/d/suburb/es/oldpine/riverbank1": {
      "type": "ROOM",
      "short": "山涧之中",
      "exits": {
        "north": "/d/suburb/es/oldpine/riverbank2",
        "south": "/d/suburb/es/oldpine/lake"
      }
    },
    "/d/suburb/es/oldpine/riverbank2": {
      "type": "ROOM",
      "short": "山涧之中",
      "exits": {
        "north": "/d/suburb/es/oldpine/waterfall",
        "south": "/d/suburb/es/oldpine/riverbank1"
      }
    },
    "/d/suburb/es/oldpine/secrectpath1": {
      "type": "ROOM",
      "short": "秘密通道",
      "exits": {
        "north": "/d/suburb/es/oldpine/path3",
        "south": "/d/suburb/es/oldpine/passage"
      }
    },
    "/d/suburb/es/oldpine/spath1": {
      "type": "ROOM",
      "short": "林间小路",
      "objects": {
        "/d/suburb/es/oldpine/npc/bandit": 3
      },
      "exits": {
        "south": "/d/suburb/es/oldpine/clearing",
        "north": "/d/suburb/es/oldpine/spath2"
      }
    },
    "/d/suburb/es/oldpine/spath2": {
      "type": "ROOM",
      "short": "下坡道",
      "exits": {
        "south": "/d/suburb/es/oldpine/spath1",
        "north": "/d/suburb/es/oldpine/spath3"
      }
    },
    "/d/suburb/es/oldpine/spath3": {
      "type": "ROOM",
      "short": "下坡道",
      "exits": {
        "north": "/d/suburb/es/oldpine/spath4",
        "south": "/d/suburb/es/oldpine/spath2"
      }
    },
    "/d/suburb/es/oldpine/spath4": {
      "type": "ROOM",
      "short": "下坡道",
      "exits": {
        "south": "/d/suburb/es/oldpine/spath3"
      }
    },
    "/d/suburb/es/oldpine/stone": {
      "type": "ROOM",
      "short": "大青石上",
      "objects": {
        "/d/suburb/es/oldpine/npc/venomsnake": 1
      }
    },
    "/d/suburb/es/oldpine/tree1": {
      "type": "ROOM",
      "short": "大松树上",
      "objects": {
        "/d/suburb/es/oldpine/npc/spy": 1
      },
      "exits": {
        "up": "/d/suburb/es/oldpine/tree2",
        "down": "/d/suburb/es/oldpine/clearing"
      }
    },
    "/d/suburb/es/oldpine/tree2": {
      "type": "ROOM",
      "short": "大松树上",
      "exits": {
        "up": "/d/suburb/es/oldpine/tree3",
        "down": "/d/suburb/es/oldpine/tree1"
      },
      "objects": {
        "/d/suburb/es/oldpine/npc/butterfly": 6
      }
    },
    "/d/suburb/es/oldpine/tree3": {
      "type": "ROOM",
      "short": "大松树顶",
      "exits": {
        "down": "/d/suburb/es/oldpine/tree2"
      }
    },
    "/d/suburb/es/oldpine/waterfall": {
      "type": "ROOM",
      "short": "瀑布前",
      "exits": {
        "south": "/d/suburb/es/oldpine/riverbank2"
      }
    },
    "/d/suburb/es/sanyen/back_temple": {
      "type": "ROOM",
      "short": "后殿",
      "exits": {
        "south": "/d/suburb/es/sanyen/corridor",
        "east": "/d/suburb/es/sanyen/tower"
      },
      "objects": {
        "/d/suburb/es/sanyen/npc/little_bonze": 1
      }
    },
    "/d/suburb/es/sanyen/corridor": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "west": "/d/suburb/es/sanyen/corridor1",
        "north": "/d/suburb/es/sanyen/back_temple",
        "south": "/d/suburb/es/sanyen/temple"
      }
    },
    "/d/suburb/es/sanyen/corridor1": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "west": "/d/suburb/es/sanyen/kitchen",
        "east": "/d/suburb/es/sanyen/corridor"
      }
    },
    "/d/suburb/es/sanyen/door": {
      "type": "ROOM",
      "short": "山烟寺寺门",
      "exits": {
        "north": "/d/suburb/es/sanyen/road1",
        "south": "/d/suburb/es/sanyen/front_yard"
      }
    },
    "/d/suburb/es/sanyen/drag_field": {
      "type": "ROOM",
      "short": "药圃",
      "exits": {
        "west": "/d/suburb/es/sanyen/road2"
      }
    },
    "/d/suburb/es/sanyen/front_yard": {
      "type": "ROOM",
      "short": "山烟寺前广场",
      "exits": {
        "north": "/d/suburb/es/sanyen/door",
        "west": "/d/suburb/es/sanyen/gate"
      },
      "objects": {
        "/d/suburb/es/sanyen/npc/monk_guard": 2
      }
    },
    "/d/suburb/es/sanyen/gate": {
      "type": "ROOM",
      "short": "山烟寺山门",
      "exits": {
        "west": "/d/suburb/es/sanyen/sroad2",
        "east": "/d/suburb/es/sanyen/front_yard"
      },
      "objects": {
        "/d/suburb/es/sanyen/npc/greeting": 2
      }
    },
    "/d/suburb/es/sanyen/heal_room": {
      "type": "ROOM",
      "short": "流云轩",
      "exits": {
        "south": "/d/suburb/es/sanyen/inner_yard"
      },
      "objects": {
        "/d/suburb/es/sanyen/npc/drug_bonze": 1
      }
    },
    "/d/suburb/es/sanyen/inner_yard": {
      "type": "ROOM",
      "short": "庭园",
      "exits": {
        "north": "/d/suburb/es/sanyen/heal_room",
        "east": "/d/suburb/es/sanyen/temple"
      },
      "objects": {
        "/d/suburb/es/sanyen/npc/cripple": 1
      }
    },
    "/d/suburb/es/sanyen/kitchen": {
      "type": "ROOM",
      "short": "香积厨",
      "exits": {
        "east": "/d/suburb/es/sanyen/corridor1"
      },
      "objects": {
        "/d/suburb/es/sanyen/npc/cook_bonze": 1
      }
    },
    "/d/suburb/es/sanyen/road1": {
      "type": "ROOM",
      "short": "石板大道",
      "exits": {
        "north": "/d/suburb/es/sanyen/temple",
        "south": "/d/suburb/es/sanyen/door",
        "east": "/d/suburb/es/sanyen/road2"
      },
      "objects": {
        "/d/suburb/es/sanyen/npc/monk": 1
      }
    },
    "/d/suburb/es/sanyen/road2": {
      "type": "ROOM",
      "short": "石板小径",
      "exits": {
        "west": "/d/suburb/es/sanyen/road1",
        "east": "/d/suburb/es/sanyen/drag_field"
      },
      "objects": {
        "/d/suburb/es/sanyen/npc/bonze": 1
      }
    },
    "/d/suburb/es/sanyen/sroad1": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "west": "/d/suburb/es/sanyen/sroad2",
        "southdown": "/d/suburb/es/snow/eroad3"
      }
    },
    "/d/suburb/es/sanyen/sroad2": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "south": "/d/suburb/es/sanyen/sroad1",
        "east": "/d/suburb/es/sanyen/gate"
      }
    },
    "/d/suburb/es/sanyen/temple": {
      "type": "ROOM",
      "short": "大雄宝殿",
      "exits": {
        "south": "/d/suburb/es/sanyen/road1",
        "west": "/d/suburb/es/sanyen/inner_yard",
        "north": "/d/suburb/es/sanyen/corridor"
      },
      "objects": {
        "CLASS_D(bonze)+/master": 1
      }
    },
    "/d/suburb/es/sanyen/tower": {
      "type": "ROOM",
      "short": "塔林",
      "exits": {
        "west": "/d/suburb/es/sanyen/back_temple"
      },
      "objects": {
        "/d/suburb/es/sanyen/npc/work_bonze": 1
      }
    },
    "/d/suburb/es/sanyen/tunnel": {
      "type": "ROOM",
      "short": "隧道",
      "exits": {
        "west": "/d/suburb/es/sanyen/sroad2",
        "east": "/d/suburb/es/sanyen/tunnele"
      }
    },
    "/d/suburb/es/sanyen/tunnele": {
      "type": "ROOM",
      "short": "隧道口",
      "exits": {
        "west": "/d/suburb/es/sanyen/tunnel",
        "east": "/d/suburb/es/sanyen/gate"
      }
    },
    "/d/suburb/es/snow/bank": {
      "type": "BANK",
      "short": "安记钱庄",
      "exits": {
        "east": "/d/suburb/es/snow/mstreet1"
      },
      "objects": {
        "/d/suburb/es/snow/npc/annihir": 1
      }
    },
    "/d/suburb/es/snow/crossroad": {
      "type": "ROOM",
      "short": "山坳",
      "exits": {
        "north": "/d/suburb/es/goathill/mroad1",
        "east": "/d/suburb/es/green/path6",
        "south": "/d/suburb/es/snow/mstreet4"
      }
    },
    "/d/suburb/es/snow/danceroom": {
      "type": "ROOM",
      "short": "晚月庄",
      "exits": {
        "south": "/d/suburb/es/snow/crossroad"
      },
      "objects": {
        "CLASS_D(dancer)+/master": 1
      }
    },
    "/d/suburb/es/snow/e_room": {
      "type": "ROOM",
      "short": "客房",
      "exits": {
        "west": "/d/suburb/es/snow/inn_2f"
      }
    },
    "/d/suburb/es/snow/eroad1": {
      "type": "ROOM",
      "short": "黄土小径",
      "exits": {
        "northeast": "/d/suburb/es/snow/eroad2",
        "north": "/d/suburb/es/snow/temple",
        "west": "/d/suburb/es/snow/sroad1"
      }
    },
    "/d/suburb/es/snow/eroad2": {
      "type": "ROOM",
      "short": "黄土小径",
      "exits": {
        "northeast": "/d/suburb/es/snow/eroad3",
        "southwest": "/d/suburb/es/snow/eroad1"
      },
      "objects": {
        "/d/suburb/es/snow/npc/dog": 2
      }
    },
    "/d/suburb/es/snow/eroad3": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "south": "/d/suburb/es/oldpine/npath1",
        "west": "/d/suburb/es/temple/sroad",
        "southwest": "/d/suburb/es/snow/eroad2"
      }
    },
    "/d/suburb/es/snow/guestroom": {
      "type": "ROOM",
      "short": "客房",
      "exits": {
        "north": "/d/suburb/es/snow/inneryard"
      }
    },
    "/d/suburb/es/snow/herbshop": {
      "type": "ROOM",
      "short": "桑邻药铺",
      "exits": {
        "east": "/d/suburb/es/snow/mstreet3"
      },
      "objects": {
        "/d/suburb/es/snow/npc/herbalist": 1,
        "/d/suburb/es/snow/npc/woodcutter": 1
      }
    },
    "/d/suburb/es/snow/herbshop1": {
      "type": "ROOM",
      "short": "药铺密室"
    },
    "/d/suburb/es/snow/hockshop": {
      "type": "HOCKSHOP",
      "short": "丰登当铺",
      "exits": {
        "west": "/d/suburb/es/snow/mstreet3",
        "east": "/d/suburb/es/snow/hockshop2"
      }
    },
    "/d/suburb/es/snow/hockshop2": {
      "type": "ROOM",
      "short": "储藏室",
      "exits": {
        "west": "/d/suburb/es/snow/hockshop"
      }
    },
    "/d/suburb/es/snow/inn": {
      "type": "ROOM",
      "short": "饮风客栈",
      "exits": {
        "east": "/d/suburb/es/snow/square",
        "up": "/d/suburb/es/snow/inn_2f",
        "northwest": "/d/suburb/es/wiz/entrance"
      },
      "objects": {
        "/d/suburb/es/npc/sungoku": 1,
        "/d/suburb/es/snow/npc/traveller": 3,
        "/d/suburb/es/snow/npc/waiter": 1
      }
    },
    "/d/suburb/es/snow/inn_2f": {
      "type": "ROOM",
      "short": "饮风客栈二楼",
      "exits": {
        "west": "/d/suburb/es/snow/w_room",
        "north": "/d/suburb/es/snow/n_room",
        "down": "/d/suburb/es/snow/inn",
        "east": "/d/suburb/es/snow/e_room"
      },
      "objects": {}
    },
    "/d/suburb/es/snow/innerhall": {
      "type": "ROOM",
      "short": "武馆内院",
      "exits": {
        "west": "/d/suburb/es/snow/inneryard"
      }
    },
    "/d/suburb/es/snow/inneryard": {
      "type": "ROOM",
      "short": "天井",
      "exits": {
        "south": "/d/suburb/es/snow/guestroom",
        "north": "/d/suburb/es/snow/nyard",
        "west": "/d/suburb/es/snow/schoolhall",
        "east": "/d/suburb/es/snow/innerhall"
      }
    },
    "/d/suburb/es/snow/mstreet1": {
      "type": "ROOM",
      "short": "雪亭镇街道",
      "exits": {
        "west": "/d/suburb/es/snow/bank",
        "south": "/d/suburb/es/snow/square",
        "north": "/d/suburb/es/snow/mstreet2",
        "east": "/d/suburb/es/snow/school1"
      }
    },
    "/d/suburb/es/snow/mstreet2": {
      "type": "ROOM",
      "short": "雪亭镇街道",
      "exits": {
        "north": "/d/suburb/es/snow/mstreet3",
        "south": "/d/suburb/es/snow/mstreet1",
        "west": "/d/suburb/es/snow/smithy",
        "east": "/d/suburb/es/snow/workplace"
      },
      "objects": {
        "/d/suburb/es/snow/npc/drunk": 1,
        "/d/suburb/es/snow/npc/scavenger": 1
      }
    },
    "/d/suburb/es/snow/mstreet3": {
      "type": "ROOM",
      "short": "雪亭镇街道",
      "exits": {
        "south": "/d/suburb/es/snow/mstreet2",
        "north": "/d/suburb/es/snow/mstreet4",
        "east": "/d/suburb/es/snow/hockshop",
        "west": "/d/suburb/es/snow/herbshop"
      }
    },
    "/d/suburb/es/snow/mstreet4": {
      "type": "ROOM",
      "short": "雪亭镇街道",
      "exits": {
        "north": "/d/suburb/es/snow/crossroad",
        "south": "/d/suburb/es/snow/mstreet3",
        "west": "/d/suburb/es/snow/postoffice"
      }
    },
    "/d/suburb/es/snow/n_room": {
      "type": "ROOM",
      "short": "客房",
      "exits": {
        "south": "/d/suburb/es/snow/inn_2f"
      }
    },
    "/d/suburb/es/snow/nyard": {
      "type": "ROOM",
      "short": "书房",
      "exits": {
        "south": "/d/suburb/es/snow/inneryard"
      },
      "objects": {
        "/d/suburb/es/snow/npc/girl": 1
      }
    },
    "/d/suburb/es/snow/postoffice": {
      "type": "ROOM",
      "short": "雪亭驿",
      "exits": {
        "east": "/d/suburb/es/snow/mstreet4"
      },
      "objects": {
        "/d/suburb/es/snow/npc/post_officer": 5
      }
    },
    "/d/suburb/es/snow/school": {
      "type": "ROOM",
      "short": "书院",
      "exits": {
        "north": "/d/suburb/es/snow/sroad2"
      },
      "objects": {
        "/d/suburb/es/snow/npc/teacher": 1
      }
    },
    "/d/suburb/es/snow/school1": {
      "type": "ROOM",
      "short": "淳风武馆大门",
      "exits": {
        "west": "/d/suburb/es/snow/mstreet1",
        "east": "/d/suburb/es/snow/school2"
      },
      "objects": {
        "/d/suburb/es/snow/npc/guard": 1
      }
    },
    "/d/suburb/es/snow/school2": {
      "type": "ROOM",
      "short": "淳风武馆教练场",
      "exits": {
        "north": "/d/suburb/es/snow/weapon_storage",
        "west": "/d/suburb/es/snow/school1",
        "east": "/d/suburb/es/snow/schoolhall"
      },
      "objects": {
        "/d/suburb/es/snow/npc/trainee": 6,
        "/d/suburb/es/snow/npc/fist_trainer": 1
      }
    },
    "/d/suburb/es/snow/schoolhall": {
      "type": "ROOM",
      "short": "淳风武馆大厅",
      "exits": {
        "west": "/d/suburb/es/snow/school2",
        "east": "/d/suburb/es/snow/inneryard"
      },
      "objects": {
        "CLASS_D(swordsman)+/master": 1
      }
    },
    "/d/suburb/es/snow/secrect_storage": {
      "type": "ROOM",
      "short": "地下密室",
      "objects": {
        "/d/suburb/es/snow/obj/shield": 1
      }
    },
    "/d/suburb/es/snow/smithy": {
      "type": "ROOM",
      "short": "打铁铺子",
      "exits": {
        "east": "/d/suburb/es/snow/mstreet2"
      },
      "objects": {
        "/d/suburb/es/snow/npc/smith": 1
      }
    },
    "/d/suburb/es/snow/square": {
      "type": "ROOM",
      "short": "广场",
      "exits": {
        "north": "/d/suburb/es/snow/mstreet1",
        "west": "/d/suburb/es/snow/inn",
        "south": "/d/suburb/es/snow/sroad1",
        "east": "/d/suburb/es/snow/temple"
      },
      "objects": {
        "/d/suburb/es/snow/npc/trav_blade": 8
      }
    },
    "/d/suburb/es/snow/sroad1": {
      "type": "ROOM",
      "short": "雪亭镇街道",
      "exits": {
        "west": "/d/suburb/es/snow/sroad2",
        "north": "/d/suburb/es/snow/square",
        "south": "/u/cloud/dragonhill/nroad",
        "east": "/d/suburb/es/snow/eroad1"
      }
    },
    "/d/suburb/es/snow/sroad2": {
      "type": "ROOM",
      "short": "雪亭镇街道",
      "exits": {
        "west": "/d/suburb/es/snow/sroad3",
        "south": "/d/suburb/es/snow/school",
        "east": "/d/suburb/es/snow/sroad1"
      },
      "objects": {
        "/d/suburb/es/snow/npc/farmer": 2
      }
    },
    "/d/suburb/es/snow/sroad3": {
      "type": "ROOM",
      "short": "青石官道",
      "exits": {
        "southwest": "/d/suburb/es/canyon/road",
        "north": "/d/suburb/es/snow/sroad4",
        "east": "/d/suburb/es/snow/sroad2"
      },
      "objects": {
        "/d/suburb/es/snow/npc/crazy_dog": 1
      }
    },
    "/d/suburb/es/snow/sroad4": {
      "type": "ROOM",
      "short": "青石官道",
      "exits": {
        "north": "/d/suburb/es/waterfog/sroad1",
        "south": "/d/suburb/es/snow/sroad3"
      }
    },
    "/d/suburb/es/snow/tao": {
      "type": "ROOM",
      "short": "茅山道观",
      "exits": {
        "southdown": "/d/suburb/es/snow/eroad3"
      },
      "objects": {
        "CLASS_D(taoist)+/taolord": 1,
        "/d/suburb/es/snow/npc/tao_first": 1,
        "/d/suburb/es/snow/npc/tao_2": 1
      }
    },
    "/d/suburb/es/snow/temple": {
      "type": "ROOM",
      "short": "城隍庙",
      "exits": {
        "south": "/d/suburb/es/snow/eroad1",
        "west": "/d/suburb/es/snow/square"
      },
      "objects": {
        "OBJ_PAPER_SEAL": 2,
        "/d/suburb/es/snow/npc/keeper": 1,
        "/d/suburb/es/snow/obj/denotation": 1
      }
    },
    "/d/suburb/es/snow/w_room": {
      "type": "ROOM",
      "short": "客房",
      "exits": {
        "east": "/d/suburb/es/snow/inn_2f"
      }
    },
    "/d/suburb/es/snow/weapon_storage": {
      "type": "ROOM",
      "short": "兵器储藏室",
      "exits": {
        "south": "/d/suburb/es/snow/school2"
      },
      "objects": {
        "/d/suburb/es/snow/npc/obj/bamboo_sword": 1
      }
    },
    "/d/suburb/es/snow/work": {
      "type": "ROOM",
      "short": "谷物加工厂",
      "exits": {
        "west": "/d/suburb/es/snow/mstreet2"
      }
    },
    "/d/suburb/es/snow/workplace": {
      "type": "ROOM",
      "short": "谷物加工厂",
      "exits": {
        "west": "/d/suburb/es/snow/mstreet2"
      }
    },
    "/d/suburb/es/temple/book_room1": {
      "type": "ROOM",
      "short": "经楼",
      "exits": {
        "up": "/d/suburb/es/temple/book_room2",
        "out": "/d/suburb/es/temple/road2"
      }
    },
    "/d/suburb/es/temple/book_room2": {
      "type": "ROOM",
      "short": "经楼",
      "exits": {
        "down": "/d/suburb/es/temple/book_room1"
      }
    },
    "/d/suburb/es/temple/broom1": {
      "type": "ROOM",
      "short": "经楼",
      "exits": {
        "up": "/d/suburb/es/temple/broom2",
        "out": "/d/suburb/es/temple/road2"
      }
    },
    "/d/suburb/es/temple/broom2": {
      "type": "ROOM",
      "short": "书库",
      "exits": {
        "down": "/d/suburb/es/temple/broom1"
      }
    },
    "/d/suburb/es/temple/corridor1": {
      "type": "ROOM",
      "short": "回廊",
      "exits": {
        "west": "/d/suburb/es/temple/temple1",
        "north": "/d/suburb/es/temple/corridor7"
      }
    },
    "/d/suburb/es/temple/corridor2": {
      "type": "ROOM",
      "short": "回廊",
      "exits": {
        "north": "/d/suburb/es/temple/corridor6",
        "east": "/d/suburb/es/temple/temple1"
      }
    },
    "/d/suburb/es/temple/corridor3": {
      "type": "ROOM",
      "short": "回廊",
      "exits": {
        "north": "/d/suburb/es/temple/road1",
        "south": "/d/suburb/es/temple/corridor7",
        "west": "/d/suburb/es/temple/corridor5",
        "east": "/d/suburb/es/temple/restroom2"
      }
    },
    "/d/suburb/es/temple/corridor4": {
      "type": "ROOM",
      "short": "回廊",
      "exits": {
        "north": "/d/suburb/es/temple/trainroom",
        "south": "/d/suburb/es/temple/corridor6",
        "east": "/d/suburb/es/temple/corridor5"
      }
    },
    "/d/suburb/es/temple/corridor5": {
      "type": "ROOM",
      "short": "回廊",
      "exits": {
        "west": "/d/suburb/es/temple/corridor4",
        "east": "/d/suburb/es/temple/corridor3",
        "south": "/d/suburb/es/temple/inneryard",
        "north": "/d/suburb/es/temple/temple2"
      }
    },
    "/d/suburb/es/temple/corridor6": {
      "type": "ROOM",
      "short": "回廊",
      "exits": {
        "south": "/d/suburb/es/temple/corridor2",
        "north": "/d/suburb/es/temple/corridor4",
        "east": "/d/suburb/es/temple/inneryard"
      }
    },
    "/d/suburb/es/temple/corridor7": {
      "type": "ROOM",
      "short": "回廊",
      "exits": {
        "north": "/d/suburb/es/temple/corridor3",
        "south": "/d/suburb/es/temple/corridor1",
        "west": "/d/suburb/es/temple/inneryard",
        "east": "/d/suburb/es/temple/restroom1"
      }
    },
    "/d/suburb/es/temple/entrance": {
      "type": "ROOM",
      "short": "灵心观前",
      "exits": {
        "north": "/d/suburb/es/temple/square",
        "eastdown": "/d/suburb/es/temple/ladder1"
      }
    },
    "/d/suburb/es/temple/inneryard": {
      "type": "ROOM",
      "short": "天井",
      "exits": {
        "north": "/d/suburb/es/temple/corridor5",
        "west": "/d/suburb/es/temple/corridor6",
        "east": "/d/suburb/es/temple/corridor7"
      },
      "objects": {
        "/d/suburb/es/temple/npc/little_taoist2": 1
      }
    },
    "/d/suburb/es/temple/ladder1": {
      "type": "ROOM",
      "short": "石英岩石阶",
      "objects": {
        "/d/suburb/es/temple/npc/little_taoist1": 1
      },
      "exits": {
        "westup": "/d/suburb/es/temple/entrance",
        "eastdown": "/d/suburb/es/temple/ladder2"
      }
    },
    "/d/suburb/es/temple/ladder2": {
      "type": "ROOM",
      "short": "石英岩石阶",
      "objects": {
        "/d/suburb/es/temple/npc/guest": 1
      },
      "exits": {
        "westup": "/d/suburb/es/temple/ladder1",
        "northdown": "/d/suburb/es/temple/ladder3"
      }
    },
    "/d/suburb/es/temple/ladder3": {
      "type": "ROOM",
      "short": "石英岩石阶",
      "exits": {
        "southup": "/d/suburb/es/temple/ladder2",
        "eastdown": "/d/suburb/es/temple/ladder4"
      }
    },
    "/d/suburb/es/temple/ladder4": {
      "type": "ROOM",
      "short": "石英岩石阶",
      "exits": {
        "westup": "/d/suburb/es/temple/ladder3",
        "eastdown": "/d/suburb/es/temple/ladder5"
      }
    },
    "/d/suburb/es/temple/ladder5": {
      "type": "ROOM",
      "short": "石英岩石阶",
      "exits": {
        "westup": "/d/suburb/es/temple/ladder4",
        "eastdown": "/d/suburb/es/temple/sroad"
      }
    },
    "/d/suburb/es/temple/restroom1": {
      "type": "ROOM",
      "short": "厢房",
      "exits": {
        "west": "/d/suburb/es/temple/corridor7"
      },
      "objects": {
        "/d/suburb/es/temple/npc/old_taoist": 1
      }
    },
    "/d/suburb/es/temple/restroom2": {
      "type": "ROOM",
      "short": "厢房",
      "exits": {
        "west": "/d/suburb/es/temple/corridor3"
      }
    },
    "/d/suburb/es/temple/road1": {
      "type": "ROOM",
      "short": "青石小径",
      "exits": {
        "south": "/d/suburb/es/temple/corridor3",
        "northwest": "/d/suburb/es/temple/road2"
      }
    },
    "/d/suburb/es/temple/road2": {
      "type": "ROOM",
      "short": "青石小径",
      "exits": {
        "southeast": "/d/suburb/es/temple/road1",
        "enter": "/d/suburb/es/temple/book_room1"
      },
      "objects": {
        "/d/suburb/es/temple/npc/guard_taoist+(random(3)+1)": 1,
        "/d/suburb/es/temple/npc/taoist_guard+(random(3)+1)": 1
      }
    },
    "/d/suburb/es/temple/square": {
      "type": "ROOM",
      "short": "灵心观广场",
      "exits": {
        "north": "/d/suburb/es/temple/temple1",
        "south": "/d/suburb/es/temple/entrance"
      }
    },
    "/d/suburb/es/temple/sroad": {
      "type": "ROOM",
      "short": "青石官道",
      "exits": {
        "westup": "/d/suburb/es/temple/ladder5",
        "east": "/d/suburb/es/snow/eroad3"
      }
    },
    "/d/suburb/es/temple/temple1": {
      "type": "ROOM",
      "short": "灵心观大殿",
      "exits": {
        "west": "/d/suburb/es/temple/corridor2",
        "south": "/d/suburb/es/temple/square",
        "east": "/d/suburb/es/temple/corridor1"
      },
      "objects": {
        "CLASS_D(taoist)+/taolord": 1,
        "/d/suburb/es/temple/npc/trainer": 1,
        "/d/suburb/es/temple/npc/tfighter": 1
      }
    },
    "/d/suburb/es/temple/temple2": {
      "type": "ROOM",
      "short": "后殿",
      "exits": {
        "south": "/d/suburb/es/temple/corridor5"
      }
    },
    "/d/suburb/es/temple/trainroom": {
      "type": "ROOM",
      "short": "练功\\房",
      "exits": {
        "south": "/d/suburb/es/temple/corridor4"
      },
      "objects": {
        "/d/suburb/es/temple/npc/taoist": 1,
        "/d/suburb/es/temple/npc/taoist2": 1
      }
    },
    "/d/suburb/es/village/farmhouse1": {
      "type": "ROOM",
      "short": "农舍",
      "exits": {
        "north": "/d/suburb/es/village/fmhousback.c",
        "south": "/d/suburb/es/village/road4"
      }
    },
    "/d/suburb/es/village/field": {
      "type": "ROOM",
      "short": "稻田",
      "exits": {
        "east": "/d/suburb/es/village/road9"
      }
    },
    "/d/suburb/es/village/fmhousback": {
      "type": "ROOM",
      "short": "农舍后院",
      "exits": {
        "south": "/d/suburb/es/village/farmhouse1"
      },
      "objects": {
        "/d/suburb/es/village/npc/woman1": 1
      }
    },
    "/d/suburb/es/village/home": {
      "type": "ROOM",
      "short": "刘家小房",
      "exits": {
        "northwest": "/d/suburb/es/village/smallstorage",
        "south": "/d/suburb/es/village/littlegarden"
      },
      "objects": {
        "/d/suburb/es/village/npc/oldliu": 1
      }
    },
    "/d/suburb/es/village/jitan": {
      "type": "ROOM",
      "short": "祭坛",
      "exits": {
        "south": "/d/suburb/es/city/shenwumen",
        "north": "/d/suburb/es/city/street7"
      }
    },
    "/d/suburb/es/village/lake": {
      "type": "ROOM",
      "short": "玉螺湖",
      "exits": {
        "east": "/d/suburb/es/village/lakeside"
      }
    },
    "/d/suburb/es/village/lakebottom1": {
      "type": "ROOM",
      "short": "水下岩洞",
      "exits": {
        "westup": "/d/suburb/es/village/lakebottom2"
      }
    },
    "/d/suburb/es/village/lakebottom2": {
      "type": "ROOM",
      "short": "水下岩洞",
      "exits": {
        "westup": "/d/suburb/es/village/valley1",
        "eastdown": "/d/suburb/es/village/lakebottom1"
      },
      "objects": {
        "/d/suburb/es/village/npc/dragon": 6
      }
    },
    "/d/suburb/es/village/lakeside": {
      "type": "ROOM",
      "short": "玉螺湖畔",
      "exits": {
        "west": "/d/suburb/es/village/lake",
        "east": "/d/suburb/es/village/road7"
      },
      "objects": {
        "/d/suburb/es/village/npc/fisher": 3
      }
    },
    "/d/suburb/es/village/littlegarden": {
      "type": "ROOM",
      "short": "花园",
      "exits": {
        "south": "/d/suburb/es/village/road5",
        "north": "/d/suburb/es/village/home"
      },
      "objects": {
        "/d/suburb/es/village/npc/flowergirl": 5
      }
    },
    "/d/suburb/es/village/lordhouse1": {
      "type": "ROOM",
      "short": "财主家前院",
      "exits": {
        "south": "/d/suburb/es/village/lordhouse3",
        "west": "/d/suburb/es/village/road9",
        "east": "/d/suburb/es/village/lordhouse2"
      }
    },
    "/d/suburb/es/village/lordhouse2": {
      "type": "ROOM",
      "short": "财主家东房",
      "exits": {
        "west": "/d/suburb/es/village/lordhouse1"
      }
    },
    "/d/suburb/es/village/lordhouse3": {
      "type": "ROOM",
      "short": "财主家南房",
      "exits": {
        "north": "/d/suburb/es/village/lordhouse1"
      }
    },
    "/d/suburb/es/village/melonfarm": {
      "type": "ROOM",
      "short": "瓜地",
      "exits": {
        "south": "/d/suburb/es/village/melonguard",
        "northup": "/d/suburb/es/village/road4"
      }
    },
    "/d/suburb/es/village/melonguard": {
      "type": "ROOM",
      "short": "瓜棚",
      "exits": {
        "north": "/d/suburb/es/village/melonfarm",
        "northwest": "/d/suburb/es/village/road7"
      },
      "objects": {
        "/d/suburb/es/village/npc/meloner": 3
      }
    },
    "/d/suburb/es/village/road1": {
      "type": "ROOM",
      "short": "黄土大道",
      "exits": {
        "south": "/d/suburb/es/village/road2",
        "north": "/d/suburb/es/canyon/canyon7"
      }
    },
    "/d/suburb/es/village/road2": {
      "type": "ROOM",
      "short": "三叉路口",
      "exits": {
        "southeast": "/d/suburb/es/chuenyu/croad1",
        "north": "/d/suburb/es/village/road1",
        "west": "/d/suburb/es/village/road3"
      },
      "objects": {
        "/d/suburb/es/village/npc/trader1": 2
      }
    },
    "/d/suburb/es/village/road3": {
      "type": "ROOM",
      "short": "青石小路",
      "exits": {
        "west": "/d/suburb/es/village/road4",
        "east": "/d/suburb/es/village/road2"
      }
    },
    "/d/suburb/es/village/road4": {
      "type": "ROOM",
      "short": "青石小路",
      "exits": {
        "north": "/d/suburb/es/village/farmhouse1",
        "west": "/d/suburb/es/village/road5",
        "southdown": "/d/suburb/es/village/melonfarm",
        "east": "/d/suburb/es/village/road3"
      }
    },
    "/d/suburb/es/village/road5": {
      "type": "ROOM",
      "short": "青石小路",
      "exits": {
        "west": "/d/suburb/es/village/road6",
        "north": "/d/suburb/es/village/littlegarden",
        "southdown": "/d/suburb/es/village/road7",
        "east": "/d/suburb/es/village/road4"
      }
    },
    "/d/suburb/es/village/road6": {
      "type": "ROOM",
      "short": "青石小路",
      "exits": {
        "east": "/d/suburb/es/village/road5"
      }
    },
    "/d/suburb/es/village/road7": {
      "type": "ROOM",
      "short": "青石小路",
      "exits": {
        "southeast": "/d/suburb/es/village/melonguard",
        "south": "/d/suburb/es/village/road8",
        "west": "/d/suburb/es/village/lakeside",
        "northup": "/d/suburb/es/village/road5"
      }
    },
    "/d/suburb/es/village/road8": {
      "type": "ROOM",
      "short": "青石小路",
      "exits": {
        "south": "/d/suburb/es/village/road9",
        "north": "/d/suburb/es/village/road7"
      }
    },
    "/d/suburb/es/village/road9": {
      "type": "ROOM",
      "short": "青石小路",
      "exits": {
        "north": "/d/suburb/es/village/road8",
        "west": "/d/suburb/es/village/field",
        "east": "/d/suburb/es/village/lordhouse1"
      }
    },
    "/d/suburb/es/village/smallstorage": {
      "type": "ROOM",
      "short": "厨房",
      "exits": {
        "southeast": "/d/suburb/es/village/home"
      },
      "objects": {
        "/d/suburb/es/village/npc/rat": 6
      }
    },
    "/d/suburb/es/village/valley1": {
      "type": "ROOM",
      "short": "忘情谷外",
      "exits": {
        "north": "/d/suburb/es/village/valley2",
        "eastdown": "/d/suburb/es/village/lakebottom2"
      }
    },
    "/d/suburb/es/village/valley2": {
      "type": "ROOM",
      "short": "忘情谷外",
      "exits": {
        "south": "/d/suburb/es/village/valley1",
        "east": "/d/suburb/es/village/road6"
      }
    },
    "/d/suburb/es/waterfog/clifftop": {
      "type": "ROOM",
      "short": "水烟阁半山亭",
      "exits": {
        "westup": "/d/suburb/es/waterfog/stair5",
        "southdown": "/d/suburb/es/waterfog/stair4"
      },
      "objects": {
        "/d/suburb/es/waterfog/npc/watcher": 1,
        "/d/suburb/es/waterfog/npc/celes_tiger": 1
      }
    },
    "/d/suburb/es/waterfog/east_2f": {
      "type": "ROOM",
      "short": "东侧厅",
      "exits": {
        "west": "/d/suburb/es/waterfog/forehall",
        "down": "/d/suburb/es/waterfog/eaststair"
      },
      "objects": {
        "/d/suburb/es/waterfog/npc/elite_guard": 2
      }
    },
    "/d/suburb/es/waterfog/easthall": {
      "type": "ROOM",
      "short": "水烟阁东侧花厅",
      "exits": {
        "north": "/d/suburb/es/waterfog/eaststair",
        "west": "/d/suburb/es/waterfog/entrance"
      }
    },
    "/d/suburb/es/waterfog/eaststair": {
      "type": "ROOM",
      "short": "东侧厅",
      "exits": {
        "up": "/d/suburb/es/waterfog/east_2f",
        "south": "/d/suburb/es/waterfog/easthall",
        "north": "/d/suburb/es/waterfog/kitchen"
      }
    },
    "/d/suburb/es/waterfog/entrance": {
      "type": "ROOM",
      "short": "水烟阁正门",
      "exits": {
        "south": "/d/suburb/es/waterfog/frontyard",
        "west": "/d/suburb/es/waterfog/westhall",
        "east": "/d/suburb/es/waterfog/easthall",
        "north": "CLASS_D(fighter)+/guildhall"
      },
      "objects": {
        "/d/suburb/es/waterfog/npc/guard": 2
      }
    },
    "/d/suburb/es/waterfog/forehall": {
      "type": "ROOM",
      "short": "聆啸厅",
      "exits": {
        "west": "/d/suburb/es/waterfog/west_2f",
        "east": "/d/suburb/es/waterfog/east_2f"
      },
      "objects": {
        "/d/suburb/es/waterfog/npc/elder5": 1,
        "/d/suburb/es/waterfog/npc/elder6": 1,
        "/d/suburb/es/waterfog/npc/elder7": 1
      }
    },
    "/d/suburb/es/waterfog/frontyard": {
      "type": "ROOM",
      "short": "水烟阁前",
      "exits": {
        "west": "/d/suburb/es/waterfog/wpath1",
        "north": "/d/suburb/es/waterfog/entrance",
        "southdown": "/d/suburb/es/waterfog/stair5"
      }
    },
    "/d/suburb/es/waterfog/kitchen": {
      "type": "ROOM",
      "short": "厨房",
      "exits": {
        "south": "/d/suburb/es/waterfog/eaststair"
      }
    },
    "/d/suburb/es/waterfog/servant_room": {
      "type": "ROOM",
      "short": "仆役卧室",
      "exits": {
        "west": "/d/suburb/es/waterfog/storage"
      }
    },
    "/d/suburb/es/waterfog/sroad1": {
      "type": "ROOM",
      "short": "青石官道",
      "exits": {
        "south": "/d/suburb/es/snow/sroad4",
        "northwest": "/d/suburb/es/waterfog/sroad2"
      }
    },
    "/d/suburb/es/waterfog/sroad2": {
      "type": "ROOM",
      "short": "青石官道",
      "exits": {
        "southeast": "/d/suburb/es/waterfog/sroad1",
        "west": "/d/suburb/es/waterfog/sroad3"
      }
    },
    "/d/suburb/es/waterfog/sroad3": {
      "type": "ROOM",
      "short": "青石官道",
      "exits": {
        "northup": "/d/suburb/es/waterfog/stair1",
        "east": "/d/suburb/es/waterfog/sroad2"
      },
      "objects": {
        "/d/suburb/es/waterfog/npc/guard": 2
      }
    },
    "/d/suburb/es/waterfog/stair1": {
      "type": "ROOM",
      "short": "白石阶梯",
      "exits": {
        "northup": "/d/suburb/es/waterfog/stair2",
        "southdown": "/d/suburb/es/waterfog/sroad3"
      }
    },
    "/d/suburb/es/waterfog/stair2": {
      "type": "ROOM",
      "short": "白石阶梯",
      "exits": {
        "southdown": "/d/suburb/es/waterfog/stair1",
        "eastup": "/d/suburb/es/waterfog/stair3"
      }
    },
    "/d/suburb/es/waterfog/stair3": {
      "type": "ROOM",
      "short": "白石阶梯",
      "exits": {
        "northup": "/d/suburb/es/waterfog/stair4",
        "westdown": "/d/suburb/es/waterfog/stair2"
      }
    },
    "/d/suburb/es/waterfog/stair4": {
      "type": "ROOM",
      "short": "白石阶梯",
      "exits": {
        "northup": "/d/suburb/es/waterfog/clifftop",
        "southdown": "/d/suburb/es/waterfog/stair3"
      }
    },
    "/d/suburb/es/waterfog/stair5": {
      "type": "ROOM",
      "short": "白石阶梯",
      "exits": {
        "northup": "/d/suburb/es/waterfog/frontyard",
        "eastdown": "/d/suburb/es/waterfog/clifftop"
      }
    },
    "/d/suburb/es/waterfog/storage": {
      "type": "ROOM",
      "short": "柴房",
      "exits": {
        "south": "/d/suburb/es/waterfog/weststair",
        "east": "/d/suburb/es/waterfog/servant_room"
      },
      "objects": {
        "/d/suburb/es/waterfog/npc/servant": 2
      }
    },
    "/d/suburb/es/waterfog/swordtomb": {
      "type": "ROOM",
      "short": "葬剑亭",
      "exits": {
        "east": "/d/suburb/es/waterfog/wpath5"
      }
    },
    "/d/suburb/es/waterfog/west_2f": {
      "type": "ROOM",
      "short": "西侧厅",
      "exits": {
        "down": "/d/suburb/es/waterfog/weststair",
        "east": "/d/suburb/es/waterfog/forehall"
      },
      "objects": {
        "/d/suburb/es/waterfog/npc/elite_guard": 2
      }
    },
    "/d/suburb/es/waterfog/westhall": {
      "type": "ROOM",
      "short": "水烟阁西侧花厅",
      "exits": {
        "north": "/d/suburb/es/waterfog/weststair",
        "east": "/d/suburb/es/waterfog/entrance"
      }
    },
    "/d/suburb/es/waterfog/weststair": {
      "type": "ROOM",
      "short": "西侧厅",
      "exits": {
        "up": "/d/suburb/es/waterfog/west_2f",
        "north": "/d/suburb/es/waterfog/storage",
        "south": "/d/suburb/es/waterfog/westhall"
      }
    },
    "/d/suburb/es/waterfog/wpath1": {
      "type": "ROOM",
      "short": "山坡小径",
      "exits": {
        "west": "/d/suburb/es/waterfog/wpath2",
        "east": "/d/suburb/es/waterfog/frontyard"
      }
    },
    "/d/suburb/es/waterfog/wpath2": {
      "type": "ROOM",
      "short": "山坡小径",
      "exits": {
        "northeast": "/d/suburb/es/waterfog/wpath3",
        "east": "/d/suburb/es/waterfog/wpath1"
      }
    },
    "/d/suburb/es/waterfog/wpath3": {
      "type": "ROOM",
      "short": "白石阶梯",
      "exits": {
        "north": "/d/suburb/es/waterfog/wpath4",
        "southwest": "/d/suburb/es/waterfog/wpath2"
      }
    },
    "/d/suburb/es/waterfog/wpath4": {
      "type": "ROOM",
      "short": "白石阶梯",
      "exits": {
        "south": "/d/suburb/es/waterfog/wpath3",
        "northwest": "/d/suburb/es/waterfog/wpath5"
      }
    },
    "/d/suburb/es/waterfog/wpath5": {
      "type": "ROOM",
      "short": "白石阶梯",
      "exits": {
        "southeast": "/d/suburb/es/waterfog/wpath4",
        "west": "/d/suburb/es/waterfog/swordtomb"
      }
    },
    "/d/suburb/es/wiz/courthouse": {
      "type": "ROOM",
      "short": "法院",
      "objects": {
        "/d/suburb/es/wiz/npc/judge": 1
      }
    },
    "/d/suburb/es/wiz/entrance": {
      "type": "ROOM",
      "short": "巫师会客室",
      "exits": {
        "west": "/d/suburb/es/wiz/hall1",
        "southeast": "/d/suburb/es/snow/inn"
      },
      "objects": {
        "/d/suburb/es/wiz/npc/chpn": 1
      }
    },
    "/d/suburb/es/wiz/hall1": {
      "type": "ROOM",
      "short": "巫师交谊厅",
      "exits": {
        "north": "/d/suburb/es/wiz/jobroom",
        "east": "/d/suburb/es/wiz/entrance"
      }
    },
    "/d/suburb/es/wiz/jobroom": {
      "type": "ROOM",
      "short": "工作进度简报室",
      "exits": {
        "south": "/d/suburb/es/wiz/hall1"
      }
    },
    "/d/suburb/fy/chenxiang/chenxiang3": {
      "type": "ROOM",
      "short": "绿山坡",
      "exits": {
        "northdown": "/d/suburb/fy/chenxiang/road",
        "southwest": "/d/suburb/fy/chenxiang/cx1"
      }
    },
    "/d/suburb/fy/chenxiang/cx1": {
      "type": "ROOM",
      "short": "沉香镇北街",
      "exits": {
        "northeast": "/d/suburb/fy/chenxiang/chenxiang3",
        "southeast": "/d/suburb/fy/chenxiang/cx2",
        "west": "/d/suburb/fy/chenxiang/mian"
      },
      "objects": {
        "/d/suburb/fy/chenxiang/npc/moo": 1
      }
    },
    "/d/suburb/fy/chenxiang/cx2": {
      "type": "ROOM",
      "short": "沉香镇石桥",
      "exits": {
        "northwest": "/d/suburb/fy/chenxiang/cx1",
        "southwest": "/d/suburb/fy/chenxiang/cx3"
      },
      "objects": {
        "/d/suburb/fy/chenxiang/npc/boy": 2
      }
    },
    "/d/suburb/fy/chenxiang/cx3": {
      "type": "ROOM",
      "short": "沉香镇北街",
      "exits": {
        "northeast": "/d/suburb/fy/chenxiang/cx2",
        "southeast": "/d/suburb/fy/chenxiang/cx4",
        "west": "/d/suburb/fy/chenxiang/yao"
      }
    },
    "/d/suburb/fy/chenxiang/cx4": {
      "type": "ROOM",
      "short": "沉香镇石桥",
      "exits": {
        "northwest": "/d/suburb/fy/chenxiang/cx3",
        "south": "/d/suburb/fy/chenxiang/cxcenter"
      }
    },
    "/d/suburb/fy/chenxiang/cxcenter": {
      "type": "ROOM",
      "short": "沉香镇中心",
      "exits": {
        "north": "/d/suburb/fy/chenxiang/cx4",
        "south": "/d/suburb/fy/chenxiang/cxs1",
        "east": "/d/suburb/fy/chenxiang/cxe1",
        "west": "/d/suburb/fy/chenxiang/nanbank"
      },
      "objects": {
        "/d/suburb/fy/chenxiang/npc/fishseller": 1,
        "/d/suburb/fy/chenxiang/npc/fishbuyer": 1,
        "/d/suburb/fy/chenxiang/npc/ditou": 2
      }
    },
    "/d/suburb/fy/chenxiang/cxe1": {
      "type": "ROOM",
      "short": "沉香镇东街",
      "exits": {
        "east": "/d/suburb/fy/chenxiang/cxe2",
        "west": "/d/suburb/fy/chenxiang/cxcenter"
      }
    },
    "/d/suburb/fy/chenxiang/cxe2": {
      "type": "ROOM",
      "short": "沉香镇东街",
      "exits": {
        "east": "/d/suburb/fy/chenxiang/cxe3",
        "west": "/d/suburb/fy/chenxiang/cxe1"
      }
    },
    "/d/suburb/fy/chenxiang/cxe3": {
      "type": "ROOM",
      "short": "沉香镇东首",
      "exits": {
        "east": "/d/suburb/fy/manglin/edge1",
        "west": "/d/suburb/fy/chenxiang/cxe2",
        "south": "/d/suburb/fy/chenxiang/dangpu"
      },
      "objects": {
        "/d/suburb/fy/chenxiang/npc/girl": 2
      }
    },
    "/d/suburb/fy/chenxiang/cxs1": {
      "type": "ROOM",
      "short": "沉香镇南街",
      "exits": {
        "north": "/d/suburb/fy/chenxiang/cxcenter",
        "south": "/d/suburb/fy/chenxiang/farmershop"
      },
      "objects": {
        "/d/suburb/fy/chenxiang/npc/farmer": 2
      }
    },
    "/d/suburb/fy/chenxiang/dangpu": {
      "type": "ROOM",
      "short": "胡家当铺",
      "exits": {
        "north": "/d/suburb/fy/chenxiang/cxe3"
      },
      "objects": {
        "/d/suburb/fy/chenxiang/npc/pawnowner": 1
      }
    },
    "/d/suburb/fy/chenxiang/farmershop": {
      "type": "ROOM",
      "short": "农具店",
      "exits": {
        "north": "/d/suburb/fy/chenxiang/cxs1"
      },
      "objects": {
        "/d/suburb/fy/chenxiang/npc/farmowner": 1,
        "/d/suburb/fy/chenxiang/npc/haojie1": 1,
        "/d/suburb/fy/chenxiang/npc/haojie": 1
      }
    },
    "/d/suburb/fy/chenxiang/mian": {
      "type": "ROOM",
      "short": "小面馆",
      "exits": {
        "east": "/d/suburb/fy/chenxiang/cx1"
      },
      "objects": {
        "/d/suburb/fy/chenxiang/npc/oldman": 1
      }
    },
    "/d/suburb/fy/chenxiang/nanbank": {
      "type": "ROOM",
      "short": "沉香南宫",
      "exits": {
        "east": "/d/suburb/fy/chenxiang/cxcenter"
      },
      "objects": {
        "/d/suburb/fy/chenxiang/npc/bankowner": 1
      }
    },
    "/d/suburb/fy/chenxiang/road": {
      "type": "ROOM",
      "short": "荒野",
      "exits": {
        "northwest": "/d/suburb/fy/chenxiang/roadp",
        "southup": "/d/suburb/fy/chenxiang/chenxiang3",
        "northeast": "/d/suburb/fy/daimiao/yaocan"
      }
    },
    "/d/suburb/fy/chenxiang/roadp": {
      "type": "ROOM",
      "short": "荒野",
      "exits": {
        "northwest": "/u/quicksand/desert2",
        "southeast": "/d/suburb/fy/chenxiang/road"
      }
    },
    "/d/suburb/fy/chenxiang/yao": {
      "type": "ROOM",
      "short": "中药店",
      "exits": {
        "east": "/d/suburb/fy/chenxiang/cx3"
      },
      "objects": {
        "/d/suburb/fy/chenxiang/npc/medman": 1
      }
    },
    "/d/suburb/fy/daimiao/chuxun": {
      "type": "ROOM",
      "short": "出巡阁",
      "exits": {
        "east": "/d/suburb/fy/daimiao/renan.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/npc/di": 1
      }
    },
    "/d/suburb/fy/daimiao/daimiao": {
      "type": "ROOM",
      "short": "岱庙坊",
      "exits": {
        "north": "/d/suburb/fy/daimiao/zhengyan.c",
        "south": "/d/suburb/fy/daimiao/yaocan.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/npc/yin": 1
      }
    },
    "/d/suburb/fy/daimiao/dongbei": {
      "type": "ROOM",
      "short": "东碑廊",
      "exits": {
        "west": "/d/suburb/fy/daimiao/zhengyuan.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/npc/tian": 1
      }
    },
    "/d/suburb/fy/daimiao/dongyu": {
      "type": "ROOM",
      "short": "东御座",
      "exits": {
        "west": "/d/suburb/fy/daimiao/renan.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/npc/daoshi": 1
      }
    },
    "/d/suburb/fy/daimiao/hanbai": {
      "type": "ROOM",
      "short": "汉柏院",
      "exits": {
        "west": "/d/suburb/fy/daimiao/peitian.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/npc/ren": 1
      }
    },
    "/d/suburb/fy/daimiao/houqing": {
      "type": "ROOM",
      "short": "后寝宫",
      "exits": {
        "north": "/d/suburb/fy/daimiao/tongting.c",
        "south": "/d/suburb/fy/daimiao/tiankuang.c",
        "east": "/d/suburb/fy/daimiao/peiqing1.c",
        "west": "/d/suburb/fy/daimiao/peiqing2.c"
      }
    },
    "/d/suburb/fy/daimiao/houzai": {
      "type": "ROOM",
      "short": "厚载门",
      "exits": {
        "south": "/d/suburb/fy/daimiao/tongting.c",
        "west": "/d/suburb/fy/daimiao/jiaolou3.c",
        "east": "/d/suburb/fy/daimiao/jiaolou4.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/npc/tie": 1
      }
    },
    "/d/suburb/fy/daimiao/jiaolou1": {
      "type": "ROOM",
      "short": "坤角楼",
      "exits": {
        "north": "/d/suburb/fy/daimiao/jiaolou3.c",
        "east": "/d/suburb/fy/daimiao/zhengyan.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/npc/gang1": 1
      }
    },
    "/d/suburb/fy/daimiao/jiaolou2": {
      "type": "ROOM",
      "short": "乾角楼",
      "exits": {
        "north": "/d/suburb/fy/daimiao/jiaolou4.c",
        "west": "/d/suburb/fy/daimiao/zhengyan.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/npc/gang2": 1
      }
    },
    "/d/suburb/fy/daimiao/jiaolou3": {
      "type": "ROOM",
      "short": "坎角楼",
      "exits": {
        "south": "/d/suburb/fy/daimiao/jiaolou1.c",
        "east": "/d/suburb/fy/daimiao/houzai.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/npc/gang3": 1
      }
    },
    "/d/suburb/fy/daimiao/jiaolou4": {
      "type": "ROOM",
      "short": "哏角楼",
      "exits": {
        "south": "/d/suburb/fy/daimiao/jiaolou2.c",
        "west": "/d/suburb/fy/daimiao/houzai.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/npc/gang4": 1
      }
    },
    "/d/suburb/fy/daimiao/peiqing1": {
      "type": "ROOM",
      "short": "配寝殿",
      "exits": {
        "west": "/d/suburb/fy/daimiao/houqing.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/obj/huabei": 1,
        "/d/suburb/fy/daimiao/obj/shenji": 1
      }
    },
    "/d/suburb/fy/daimiao/peiqing2": {
      "type": "ROOM",
      "short": "配寝殿",
      "exits": {
        "east": "/d/suburb/fy/daimiao/houqing.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/obj/huabei": 1,
        "/d/suburb/fy/daimiao/obj/shenji": 1
      }
    },
    "/d/suburb/fy/daimiao/peitian": {
      "type": "ROOM",
      "short": "配天门",
      "exits": {
        "north": "/d/suburb/fy/daimiao/renan.c",
        "south": "/d/suburb/fy/daimiao/zhengyan.c",
        "east": "/d/suburb/fy/daimiao/hanbai.c",
        "west": "/d/suburb/fy/daimiao/yuhua.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/npc/daoshi": 1
      }
    },
    "/d/suburb/fy/daimiao/renan": {
      "type": "ROOM",
      "short": "仁安门",
      "exits": {
        "north": "/d/suburb/fy/daimiao/zhengyuan.c",
        "south": "/d/suburb/fy/daimiao/peitian.c",
        "east": "/d/suburb/fy/daimiao/dongyu.c",
        "west": "/d/suburb/fy/daimiao/chuxun.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/npc/daoshi": 1
      }
    },
    "/d/suburb/fy/daimiao/tiankuang": {
      "type": "ROOM",
      "short": "天贶殿",
      "exits": {
        "north": "/d/suburb/fy/daimiao/houqing.c",
        "south": "/d/suburb/fy/daimiao/zhengyuan.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/npc/xi": 1
      }
    },
    "/d/suburb/fy/daimiao/tongting": {
      "type": "ROOM",
      "short": "铜亭铁塔",
      "exits": {
        "north": "/d/suburb/fy/daimiao/houzai.c",
        "south": "/d/suburb/fy/daimiao/houqing.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/npc/master": 1
      }
    },
    "/d/suburb/fy/daimiao/xibei": {
      "type": "ROOM",
      "short": "西碑廊",
      "exits": {
        "east": "/d/suburb/fy/daimiao/zhengyuan.c"
      }
    },
    "/d/suburb/fy/daimiao/yaocan": {
      "type": "ROOM",
      "short": "遥参亭",
      "exits": {
        "north": "/d/suburb/fy/daimiao/daimiao.c",
        "southwest": "/d/suburb/fy/chenxiang/road"
      },
      "objects": {
        "/d/suburb/fy/daimiao/npc/jin": 1,
        "/d/suburb/fy/daimiao/npc/tiao": 2
      }
    },
    "/d/suburb/fy/daimiao/yuhua": {
      "type": "ROOM",
      "short": "雨花道院",
      "exits": {
        "east": "/d/suburb/fy/daimiao/peitian.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/npc/daoshi": 1
      }
    },
    "/d/suburb/fy/daimiao/zhengyan": {
      "type": "ROOM",
      "short": "正阳门",
      "exits": {
        "north": "/d/suburb/fy/daimiao/peitian.c",
        "south": "/d/suburb/fy/daimiao/daimiao.c",
        "west": "/d/suburb/fy/daimiao/jiaolou1.c",
        "east": "/d/suburb/fy/daimiao/jiaolou2.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/npc/tong": 1
      }
    },
    "/d/suburb/fy/daimiao/zhengyuan": {
      "type": "ROOM",
      "short": "正院",
      "exits": {
        "north": "/d/suburb/fy/daimiao/tiankuang.c",
        "south": "/d/suburb/fy/daimiao/renan.c",
        "east": "/d/suburb/fy/daimiao/dongbei.c",
        "west": "/d/suburb/fy/daimiao/xibei.c"
      },
      "objects": {
        "/d/suburb/fy/daimiao/npc/daoshi": 1
      }
    },
    "/d/suburb/fy/death/block": {
      "type": "ROOM",
      "short": "空房间"
    },
    "/d/suburb/fy/death/gate": {
      "type": "ROOM",
      "short": "set(, HIW \"鬼门关\" NOR);",
      "exits": {
        "north": "/d/suburb/fy/death/gateway"
      },
      "objects": {
        "/d/suburb/fy/death/npc/wgargoyle": 1
      }
    },
    "/d/suburb/fy/death/gateway": {
      "type": "ROOM",
      "short": "酆都城门",
      "exits": {
        "north": "/d/suburb/fy/death/road1",
        "south": "/d/suburb/fy/death/gate"
      },
      "objects": {
        "/d/suburb/fy/death/npc/bgargoyle": 1
      }
    },
    "/d/suburb/fy/death/inn1": {
      "type": "ROOM",
      "short": "小店",
      "exits": {
        "east": "/d/suburb/fy/death/road1"
      }
    },
    "/d/suburb/fy/death/inn2": {
      "type": "ROOM",
      "short": "黑店",
      "exits": {
        "west": "/d/suburb/fy/death/road1"
      }
    },
    "/d/suburb/fy/death/road1": {
      "type": "ROOM",
      "short": "鬼门大道",
      "exits": {
        "north": "/d/suburb/fy/death/road2",
        "south": "/d/suburb/fy/death/gateway",
        "west": "/d/suburb/fy/death/inn1",
        "east": "/d/suburb/fy/death/inn2"
      }
    },
    "/d/suburb/fy/death/road2": {
      "type": "ROOM",
      "short": "鬼门大道",
      "exits": {
        "north": "/d/suburb/fy/death/road3",
        "south": "/d/suburb/fy/death/road1"
      }
    },
    "/d/suburb/fy/death/road3": {
      "type": "ROOM",
      "short": "路的尽头",
      "exits": {
        "south": "/d/suburb/fy/death/road2"
      }
    },
    "/d/suburb/fy/fy/afa": {
      "type": "ROOM",
      "short": "阿发木器店",
      "exits": {
        "south": "/d/suburb/fy/fy/wcloud4"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/afa": 1
      }
    },
    "/d/suburb/fy/fy/ansheng": {
      "type": "ROOM",
      "short": "安生棺材店",
      "exits": {
        "north": "/d/suburb/fy/fy/wcloud4"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/cafen": 1
      }
    },
    "/d/suburb/fy/fy/baozipu": {
      "type": "ROOM",
      "short": "薛记包子",
      "exits": {
        "east": "/d/suburb/fy/fy/nwind5"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/lifeseller": 1
      }
    },
    "/d/suburb/fy/fy/bupu": {
      "type": "ROOM",
      "short": "风云布铺",
      "exits": {
        "south": "/d/suburb/fy/fy/ecloud2"
      },
      "objects": {
        "/d/suburb/fy/fengyun/npc/caifeng": 1
      }
    },
    "/d/suburb/fy/fy/cheaph": {
      "type": "ROOM",
      "short": "土嫖馆",
      "exits": {
        "north": "/d/suburb/fy/fy/wcloud3"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/chick": 1
      }
    },
    "/d/suburb/fy/fy/chjian": {
      "type": "ROOM",
      "short": "忏悔间",
      "exits": {
        "south": "/d/suburb/fy/fy/church"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/chantou": 1
      }
    },
    "/d/suburb/fy/fy/church": {
      "type": "ROOM",
      "short": "天主教堂",
      "exits": {
        "west": "/d/suburb/fy/fy/swind2",
        "north": "/d/suburb/fy/fy/chjian"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/priest": 1
      }
    },
    "/d/suburb/fy/fy/ecloud1": {
      "type": "ROOM",
      "short": "东云大路",
      "exits": {
        "east": "/d/suburb/fy/fy/ecloud2",
        "west": "/d/suburb/fy/fy/fysquare",
        "south": "/d/suburb/fy/fy/marry_room",
        "north": "/d/suburb/fy/stone/stone1"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/caifan": 1
      }
    },
    "/d/suburb/fy/fy/ecloud2": {
      "type": "ROOM",
      "short": "东云大路",
      "exits": {
        "east": "/d/suburb/fy/fy/ecloud3",
        "west": "/d/suburb/fy/fy/ecloud1",
        "north": "/d/suburb/fy/fy/bupu",
        "south": "/d/suburb/fy/fy/jijian"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/fatman": 1
      }
    },
    "/d/suburb/fy/fy/ecloud3": {
      "type": "ROOM",
      "short": "东云大路",
      "exits": {
        "east": "/d/suburb/fy/fy/ecloud4",
        "west": "/d/suburb/fy/fy/ecloud2",
        "north": "/d/suburb/fy/fy/smithy",
        "south": "/d/suburb/fy/fy/washroom"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/wanfan": 1
      }
    },
    "/d/suburb/fy/fy/ecloud4": {
      "type": "ROOM",
      "short": "东云大路",
      "exits": {
        "east": "/d/suburb/fy/fy/ecloud5",
        "west": "/d/suburb/fy/fy/ecloud3",
        "north": "/d/suburb/fy/fy/mianhua",
        "south": "/d/suburb/fy/fy/ponder"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/drugseller": 1
      }
    },
    "/d/suburb/fy/fy/ecloud5": {
      "type": "ROOM",
      "short": "东云大路",
      "exits": {
        "east": "/d/suburb/fy/fy/egate",
        "west": "/d/suburb/fy/fy/ecloud4",
        "north": "/d/suburb/fy/fy/hall"
      }
    },
    "/d/suburb/fy/fy/egate": {
      "type": "ROOM",
      "short": "风云东城门",
      "exits": {
        "east": "/u/palace/palace_path1",
        "west": "/d/suburb/fy/fy/ecloud5",
        "up": "/d/suburb/fy/fywall/eupgate"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/wind_solider": 2,
        "/d/suburb/fy/fy/npc/cloud_solider": 2
      }
    },
    "/d/suburb/fy/fy/examp": {
      "type": "ROOM",
      "short": "考场",
      "exits": {
        "north": "/d/suburb/fy/fy/wcloud1"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/kaoguan": 1,
        "/d/suburb/fy/fy/npc/student": 3
      }
    },
    "/d/suburb/fy/fy/fqkhotel": {
      "type": "ROOM",
      "short": "凤求凰客栈",
      "exits": {
        "west": "/d/suburb/fy/fy/swind1"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/waiter": 1
      }
    },
    "/d/suburb/fy/fy/futhur": {
      "type": "ROOM",
      "short": "红屋",
      "exits": {
        "south": "/d/suburb/fy/fy/wcloud3"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/dashi": 1
      }
    },
    "/d/suburb/fy/fy/fyge": {
      "type": "ROOM",
      "short": "风云阁",
      "exits": {
        "west": "/d/suburb/fy/fy/nwind1",
        "up": "/d/suburb/fy/fy/fyyage"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/fywaiter": 1
      }
    },
    "/d/suburb/fy/fy/fysecret": {
      "type": "ROOM",
      "short": "风云雅阁密室",
      "exits": {
        "south": "/d/suburb/fy/fy/fyyage"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/lixunhuan": 1,
        "/d/suburb/fy/fy/obj/muou": 1
      }
    },
    "/d/suburb/fy/fy/fysf": {
      "type": "ROOM",
      "short": "风云书房",
      "exits": {
        "west": "/d/suburb/fy/fy/fyyage"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/bookgirl": 1,
        "/d/suburb/fy/fy/obj/vase": 1,
        "/d/suburb/fy/fy/obj/flower": 1
      }
    },
    "/d/suburb/fy/fy/fysquare": {
      "type": "ROOM",
      "short": "风云广场",
      "exits": {
        "north": "/d/suburb/fy/fy/nwind1",
        "south": "/d/suburb/fy/fy/swind1",
        "east": "/d/suburb/fy/fy/ecloud1",
        "west": "/d/suburb/fy/fy/wcloud1"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/half_god": 1
      }
    },
    "/d/suburb/fy/fy/fyyage": {
      "type": "ROOM",
      "short": "风云雅阁",
      "exits": {
        "down": "/d/suburb/fy/fy/fyge",
        "east": "/d/suburb/fy/fy/fysf"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/servent": 1,
        "/obj/npc/champion": 1
      }
    },
    "/d/suburb/fy/fy/gcang": {
      "type": "ROOM",
      "short": "镖局货仓",
      "exits": {
        "south": "/d/suburb/fy/fy/goldlion"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/huoji": 3
      }
    },
    "/d/suburb/fy/fy/ghall": {
      "type": "ROOM",
      "short": "金狮镖局大厅",
      "exits": {
        "west": "/d/suburb/fy/fy/goldlion",
        "east": "/d/suburb/fy/fy/ginhall",
        "north": "/d/suburb/fy/fy/gmoney"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/gmaster": 1
      }
    },
    "/d/suburb/fy/fy/ginhall": {
      "type": "ROOM",
      "short": "镖局内院",
      "exits": {
        "west": "/d/suburb/fy/fy/ghall",
        "east": "/d/suburb/fy/fy/gke1",
        "north": "/d/suburb/fy/fy/gke2",
        "south": "/d/suburb/fy/fy/gke3"
      }
    },
    "/d/suburb/fy/fy/gke1": {
      "type": "ROOM",
      "short": "镖局厢房",
      "exits": {
        "west": "/d/suburb/fy/fy/ginhall"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/resting_biao": 2
      }
    },
    "/d/suburb/fy/fy/gke2": {
      "type": "ROOM",
      "short": "镖局厢房",
      "exits": {
        "south": "/d/suburb/fy/fy/ginhall"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/resting_biao": 2
      }
    },
    "/d/suburb/fy/fy/gke3": {
      "type": "ROOM",
      "short": "镖局厢房",
      "exits": {
        "north": "/d/suburb/fy/fy/ginhall"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/resting_biao": 2
      }
    },
    "/d/suburb/fy/fy/gkitchen": {
      "type": "ROOM",
      "short": "镖局厨房",
      "exits": {
        "north": "/d/suburb/fy/fy/goldlion"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/goldcook": 1
      }
    },
    "/d/suburb/fy/fy/gmoney": {
      "type": "ROOM",
      "short": "镖局账房",
      "exits": {
        "south": "/d/suburb/fy/fy/ghall"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/xiansheng": 1
      }
    },
    "/d/suburb/fy/fy/goldlion": {
      "type": "ROOM",
      "short": "金狮镖局大院",
      "exits": {
        "west": "/d/suburb/fy/fy/nwind4",
        "east": "/d/suburb/fy/fy/ghall",
        "north": "/d/suburb/fy/fy/gcang",
        "south": "/d/suburb/fy/fy/gkitchen"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/biaoshi": 1,
        "/d/suburb/fy/fy/npc/biaoshi1": 1
      }
    },
    "/d/suburb/fy/fy/govern": {
      "type": "ROOM",
      "short": "风云衙门",
      "exits": {
        "north": "/d/suburb/fy/fy/wcloud2",
        "east": "/d/suburb/fy/fy/shufang"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/yayi1": 3,
        "/d/suburb/fy/fy/npc/yayi": 3,
        "/d/suburb/fy/fy/npc/yayi2": 3
      }
    },
    "/d/suburb/fy/fy/hall": {
      "type": "ROOM",
      "short": "风云天骄门",
      "exits": {
        "south": "/d/suburb/fy/fy/ecloud5"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/player1": 1,
        "/d/suburb/fy/fy/npc/player2": 1,
        "/d/suburb/fy/fy/npc/player3": 1,
        "/d/suburb/fy/fy/npc/player4": 1,
        "/d/suburb/fy/fy/npc/player5": 1,
        "/d/suburb/fy/fy/npc/player6": 1,
        "/d/suburb/fy/fy/npc/player7": 1,
        "/d/suburb/fy/fy/npc/player8": 1,
        "/d/suburb/fy/fy/npc/player9": 1
      }
    },
    "/d/suburb/fy/fy/hfeng": {
      "type": "ROOM",
      "short": "浣凰堂",
      "exits": {
        "west": "/d/suburb/fy/fy/nwind3",
        "east": "/d/suburb/fy/fy/hfenglang1"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/showerboy": 1
      }
    },
    "/d/suburb/fy/fy/hfenglang1": {
      "type": "ROOM",
      "short": "长廊",
      "exits": {
        "west": "/d/suburb/fy/fy/hfeng",
        "north": "/d/suburb/fy/fy/hfenglang2"
      }
    },
    "/d/suburb/fy/fy/hfenglang2": {
      "type": "ROOM",
      "short": "长廊",
      "exits": {
        "south": "/d/suburb/fy/fy/hfenglang1",
        "east": "/d/suburb/fy/fy/hfenglang3"
      }
    },
    "/d/suburb/fy/fy/hfenglang3": {
      "type": "ROOM",
      "short": "长廊",
      "exits": {
        "west": "/d/suburb/fy/fy/hfenglang2",
        "east": "/d/suburb/fy/fy/hfengpool"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/smileboy": 1
      }
    },
    "/d/suburb/fy/fy/hfengpool": {
      "type": "ROOM",
      "short": "枫叶泉",
      "exits": {
        "west": "/d/suburb/fy/fy/hfenglang3"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/xianu": 2
      }
    },
    "/d/suburb/fy/fy/hiretem": {
      "type": "ROOM",
      "short": "城隍庙",
      "exits": {
        "west": "/d/suburb/fy/fy/nwind5"
      }
    },
    "/d/suburb/fy/fy/jbang": {
      "type": "ROOM",
      "short": "帮主堂",
      "exits": {
        "north": "/d/suburb/fy/fy/jhuang1"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/jinwuming": 1,
        "/d/suburb/fy/fy/npc/shangguan": 1
      }
    },
    "/d/suburb/fy/fy/jhuang": {
      "type": "ROOM",
      "short": "黄衣室",
      "exits": {
        "south": "/d/suburb/fy/fy/jting",
        "east": "/d/suburb/fy/fy/tang1",
        "west": "/d/suburb/fy/fy/tang2",
        "north": "/d/suburb/fy/fy/tang3"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/huangyi": 3
      }
    },
    "/d/suburb/fy/fy/jhuang1": {
      "type": "ROOM",
      "short": "黄衣室",
      "exits": {
        "north": "/d/suburb/fy/fy/jting",
        "south": "/d/suburb/fy/fy/jbang"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/huangyi": 3
      }
    },
    "/d/suburb/fy/fy/jijian": {
      "type": "ROOM",
      "short": "祭剑亭",
      "exits": {
        "north": "/d/suburb/fy/fy/ecloud2"
      },
      "objects": {
        "/d/suburb/fy/fengyun/npc/wangfuren": 1
      }
    },
    "/d/suburb/fy/fy/jinqian": {
      "type": "ROOM",
      "short": "金钱帮大院",
      "exits": {
        "east": "/d/suburb/fy/fy/swind2",
        "west": "/d/suburb/fy/fy/jting"
      }
    },
    "/d/suburb/fy/fy/jlong": {
      "type": "ROOM",
      "short": "浸龙前厅",
      "exits": {
        "east": "/d/suburb/fy/fy/nwind3",
        "west": "/d/suburb/fy/fy/jlonglang1"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/showergirl": 2
      }
    },
    "/d/suburb/fy/fy/jlonglang1": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "east": "/d/suburb/fy/fy/jlong",
        "north": "/d/suburb/fy/fy/jlonglang2"
      }
    },
    "/d/suburb/fy/fy/jlonglang2": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "south": "/d/suburb/fy/fy/jlonglang1",
        "west": "/d/suburb/fy/fy/jlonglang3"
      }
    },
    "/d/suburb/fy/fy/jlonglang3": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "east": "/d/suburb/fy/fy/jlonglang2",
        "west": "/d/suburb/fy/fy/jlongpool"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/smilegirl": 1
      }
    },
    "/d/suburb/fy/fy/jlongpool": {
      "type": "ROOM",
      "short": "浸龙浴池",
      "exits": {
        "east": "/d/suburb/fy/fy/jlonglang3"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/troublemaker": 2
      }
    },
    "/d/suburb/fy/fy/jsecret": {
      "type": "ROOM",
      "short": "水牢",
      "exits": {
        "up": "/d/suburb/fy/fy/tang3"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/xongyang": 1
      }
    },
    "/d/suburb/fy/fy/jssju": {
      "type": "ROOM",
      "short": "警世书局",
      "exits": {
        "east": "/d/suburb/fy/fy/nwind1"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/bookseller": 1
      }
    },
    "/d/suburb/fy/fy/jting": {
      "type": "ROOM",
      "short": "会客厅",
      "exits": {
        "east": "/d/suburb/fy/fy/jinqian",
        "north": "/d/suburb/fy/fy/jhuang",
        "south": "/d/suburb/fy/fy/jhuang1"
      }
    },
    "/d/suburb/fy/fy/mailst": {
      "type": "ROOM",
      "short": "风云绎站",
      "exits": {
        "south": "/d/suburb/fy/fy/wcloud2"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/officer": 1
      }
    },
    "/d/suburb/fy/fy/marry_room": {
      "type": "ROOM",
      "short": "鸳鸯亭",
      "exits": {
        "north": "/d/suburb/fy/fy/ecloud1"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/mei_po": 1
      }
    },
    "/d/suburb/fy/fy/mianhua": {
      "type": "ROOM",
      "short": "棉花坊",
      "exits": {
        "south": "/d/suburb/fy/fy/ecloud4"
      },
      "objects": {
        "/d/suburb/fy/fengyun/npc/mianhua": 1
      }
    },
    "/d/suburb/fy/fy/nanbank": {
      "type": "ROOM",
      "short": "南宫钱庄",
      "exits": {
        "west": "/d/suburb/fy/fy/swind5"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/bankowner": 1
      }
    },
    "/d/suburb/fy/fy/ngate": {
      "type": "ROOM",
      "short": "风云北城门",
      "exits": {
        "north": "/d/suburb/fy/laowu/road0",
        "south": "/d/suburb/fy/fy/nwind5",
        "up": "/d/suburb/fy/fywall/nupgate"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/wind_solider": 2,
        "/d/suburb/fy/fy/npc/cloud_solider": 2
      }
    },
    "/d/suburb/fy/fy/nwind1": {
      "type": "ROOM",
      "short": "北风大街",
      "exits": {
        "south": "/d/suburb/fy/fy/fysquare",
        "north": "/d/suburb/fy/fy/nwind2",
        "east": "/d/suburb/fy/fy/fyge",
        "west": "/d/suburb/fy/fy/jssju"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/zhu": 1
      }
    },
    "/d/suburb/fy/fy/nwind2": {
      "type": "ROOM",
      "short": "北风大街",
      "exits": {
        "south": "/d/suburb/fy/fy/nwind1",
        "north": "/d/suburb/fy/fy/nwind3",
        "east": "/d/suburb/fy/fy/pxhdian",
        "west": "/d/suburb/fy/fy/qcyzdian"
      }
    },
    "/d/suburb/fy/fy/nwind3": {
      "type": "ROOM",
      "short": "北风大街",
      "exits": {
        "south": "/d/suburb/fy/fy/nwind2",
        "north": "/d/suburb/fy/fy/nwind4",
        "east": "/d/suburb/fy/fy/hfeng",
        "west": "/d/suburb/fy/fy/jlong"
      }
    },
    "/d/suburb/fy/fy/nwind4": {
      "type": "ROOM",
      "short": "北风大街",
      "exits": {
        "south": "/d/suburb/fy/fy/nwind3",
        "north": "/d/suburb/fy/fy/nwind5",
        "east": "/d/suburb/fy/fy/goldlion",
        "west": "/d/suburb/fy/fy/stopwin"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/dtz": 5
      }
    },
    "/d/suburb/fy/fy/nwind5": {
      "type": "ROOM",
      "short": "北风大街",
      "exits": {
        "south": "/d/suburb/fy/fy/nwind4",
        "north": "/d/suburb/fy/fy/ngate",
        "east": "/d/suburb/fy/fy/hiretem",
        "west": "/d/suburb/fy/fy/baozipu"
      }
    },
    "/d/suburb/fy/fy/poemp": {
      "type": "ROOM",
      "short": "探花诗台",
      "exits": {
        "south": "/d/suburb/fy/fy/wcloud1"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/yaren": 1
      }
    },
    "/d/suburb/fy/fy/ponder": {
      "type": "ROOM",
      "short": "洗礼池",
      "exits": {
        "north": "/d/suburb/fy/fy/ecloud4"
      }
    },
    "/d/suburb/fy/fy/pusheng": {
      "type": "ROOM",
      "short": "普生堂",
      "exits": {
        "east": "/d/suburb/fy/fy/swind5",
        "north": "/d/suburb/fy/fy/yangsheng"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/hosowner": 1
      }
    },
    "/d/suburb/fy/fy/pxhdian": {
      "type": "ROOM",
      "short": "飘香花店",
      "exits": {
        "west": "/d/suburb/fy/fy/nwind2"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/flowerseller": 1,
        "/d/suburb/fy/fy/npc/youngman": 2
      }
    },
    "/d/suburb/fy/fy/qcyzdian": {
      "type": "ROOM",
      "short": "倾城胭脂店",
      "exits": {
        "east": "/d/suburb/fy/fy/nwind2"
      },
      "objects": {
        "/d/suburb/fy/fengyun/npc/makeupseller": 1,
        "/d/suburb/fy/fy/npc/younggirl": 2
      }
    },
    "/d/suburb/fy/fy/qianyin": {
      "type": "ROOM",
      "short": "千银当铺",
      "exits": {
        "west": "/d/suburb/fy/fy/swind4"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/hockowner": 1
      }
    },
    "/d/suburb/fy/fy/road0": {
      "type": "ROOM",
      "short": "南北大道",
      "exits": {
        "north": "/d/suburb/fy/fy/sgate",
        "south": "/d/suburb/fy/fy/sroad1"
      }
    },
    "/d/suburb/fy/fy/secret_room": {
      "type": "ROOM",
      "short": "地下密室",
      "objects": {
        "/obj/money/silver": 1
      }
    },
    "/d/suburb/fy/fy/sgate": {
      "type": "ROOM",
      "short": "风云南城门",
      "exits": {
        "north": "/d/suburb/fy/fy/swind5",
        "up": "/d/suburb/fy/fywall/supgate",
        "south": "/d/suburb/fy/fy/road0"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/wind_solider": 2,
        "/d/suburb/fy/fy/npc/cloud_solider": 2
      }
    },
    "/d/suburb/fy/fy/shufang": {
      "type": "ROOM",
      "short": "知府书房",
      "exits": {
        "west": "/d/suburb/fy/fy/govern"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/governor": 1
      }
    },
    "/d/suburb/fy/fy/smithy": {
      "type": "ROOM",
      "short": "张家铁铺",
      "exits": {
        "south": "/d/suburb/fy/fy/ecloud3"
      },
      "objects": {
        "/d/suburb/fy/fengyun/npc/smith": 1
      }
    },
    "/d/suburb/fy/fy/sroad1": {
      "type": "ROOM",
      "short": "小山坡西面",
      "exits": {
        "eastup": "/d/suburb/fy/fy/sroad2",
        "north": "/d/suburb/fy/fy/road0",
        "south": "/d/suburb/fy/manglin/edge2"
      },
      "objects": {
        "/d/suburb/fy/fy/obj/grass": 1
      }
    },
    "/d/suburb/fy/fy/sroad2": {
      "type": "ROOM",
      "short": "小山坡顶",
      "exits": {
        "westdown": "/d/suburb/fy/fy/sroad1"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/shiren": 1
      }
    },
    "/d/suburb/fy/fy/stopwin": {
      "type": "ROOM",
      "short": "镇风兵器铺",
      "exits": {
        "east": "/d/suburb/fy/fy/nwind4"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/weaponer": 1
      }
    },
    "/d/suburb/fy/fy/swind1": {
      "type": "ROOM",
      "short": "南风大街",
      "exits": {
        "south": "/d/suburb/fy/fy/swind2",
        "north": "/d/suburb/fy/fy/fysquare",
        "east": "/d/suburb/fy/fy/fqkhotel",
        "west": "/d/suburb/fy/fy/yuljade"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/mei": 1
      }
    },
    "/d/suburb/fy/fy/swind2": {
      "type": "ROOM",
      "short": "南风大街",
      "exits": {
        "south": "/d/suburb/fy/fy/swind3",
        "north": "/d/suburb/fy/fy/swind1",
        "east": "/d/suburb/fy/fy/church",
        "west": "/d/suburb/fy/fy/jinqian"
      }
    },
    "/d/suburb/fy/fy/swind3": {
      "type": "ROOM",
      "short": "南风大街",
      "exits": {
        "south": "/d/suburb/fy/fy/swind4",
        "north": "/d/suburb/fy/fy/swind2",
        "east": "/d/suburb/fy/fy/yitea",
        "west": "/d/suburb/fy/yingou/yingou"
      }
    },
    "/d/suburb/fy/fy/swind4": {
      "type": "ROOM",
      "short": "南风大街",
      "exits": {
        "south": "/d/suburb/fy/fy/swind5",
        "north": "/d/suburb/fy/fy/swind3",
        "east": "/d/suburb/fy/fy/qianyin",
        "west": "/d/suburb/fy/qianjin/qianjin"
      }
    },
    "/d/suburb/fy/fy/swind5": {
      "type": "ROOM",
      "short": "南风大街",
      "exits": {
        "south": "/d/suburb/fy/fy/sgate",
        "north": "/d/suburb/fy/fy/swind4",
        "east": "/d/suburb/fy/fy/nanbank",
        "west": "/d/suburb/fy/fy/pusheng"
      }
    },
    "/d/suburb/fy/fy/tang1": {
      "type": "ROOM",
      "short": "恩怨堂",
      "exits": {
        "west": "/d/suburb/fy/fy/jhuang"
      }
    },
    "/d/suburb/fy/fy/tang2": {
      "type": "ROOM",
      "short": "赏罚堂",
      "exits": {
        "east": "/d/suburb/fy/fy/jhuang"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/tiemian": 1
      }
    },
    "/d/suburb/fy/fy/tang3": {
      "type": "ROOM",
      "short": "化尸堂",
      "exits": {
        "south": "/d/suburb/fy/fy/jhuang"
      }
    },
    "/d/suburb/fy/fy/tuji": {
      "type": "ROOM",
      "short": "屠记肉铺",
      "exits": {
        "south": "/d/suburb/fy/fy/wcloud5"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/butcher": 1
      }
    },
    "/d/suburb/fy/fy/washroom": {
      "type": "ROOM",
      "short": "洗衣店",
      "exits": {
        "north": "/d/suburb/fy/fy/ecloud3"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/taipo": 1
      }
    },
    "/d/suburb/fy/fy/wcloud1": {
      "type": "ROOM",
      "short": "西云大路",
      "exits": {
        "north": "/d/suburb/fy/fy/poemp",
        "south": "/d/suburb/fy/fy/examp",
        "west": "/d/suburb/fy/fy/wcloud2",
        "east": "/d/suburb/fy/fy/fysquare"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/song": 1
      }
    },
    "/d/suburb/fy/fy/wcloud2": {
      "type": "ROOM",
      "short": "西云大路",
      "exits": {
        "north": "/d/suburb/fy/fy/mailst",
        "south": "/d/suburb/fy/fy/govern",
        "west": "/d/suburb/fy/fy/wcloud3",
        "east": "/d/suburb/fy/fy/wcloud1"
      }
    },
    "/d/suburb/fy/fy/wcloud3": {
      "type": "ROOM",
      "short": "西云大路",
      "exits": {
        "north": "/d/suburb/fy/fy/futhur",
        "south": "/d/suburb/fy/fy/cheaph",
        "west": "/d/suburb/fy/fy/wcloud4",
        "east": "/d/suburb/fy/fy/wcloud2"
      }
    },
    "/d/suburb/fy/fy/wcloud4": {
      "type": "ROOM",
      "short": "西云大路",
      "exits": {
        "north": "/d/suburb/fy/fy/afa",
        "south": "/d/suburb/fy/fy/ansheng",
        "west": "/d/suburb/fy/fy/wcloud5",
        "east": "/d/suburb/fy/fy/wcloud3"
      }
    },
    "/d/suburb/fy/fy/wcloud5": {
      "type": "ROOM",
      "short": "西云大路",
      "exits": {
        "north": "/d/suburb/fy/fy/tuji",
        "south": "/d/suburb/fy/fy/zuisheng",
        "west": "/d/suburb/fy/fy/wgate",
        "east": "/d/suburb/fy/fy/wcloud4"
      }
    },
    "/d/suburb/fy/fy/wgate": {
      "type": "ROOM",
      "short": "风云西城门",
      "exits": {
        "west": "/u/quicksand/huangyie0",
        "east": "/d/suburb/fy/fy/wcloud5",
        "up": "/d/suburb/fy/fywall/wupgate"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/wind_solider": 2
      }
    },
    "/d/suburb/fy/fy/yangsheng": {
      "type": "ROOM",
      "short": "养生舍",
      "exits": {
        "south": "/d/suburb/fy/fy/pusheng"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/huofe": 1
      }
    },
    "/d/suburb/fy/fy/yitea": {
      "type": "ROOM",
      "short": "一品居",
      "exits": {
        "west": "/d/suburb/fy/fy/swind3",
        "up": "/d/suburb/fy/fy/yitea2"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/teawaiter": 1
      }
    },
    "/d/suburb/fy/fy/yitea2": {
      "type": "ROOM",
      "short": "一品居二楼",
      "exits": {
        "down": "/d/suburb/fy/fy/yitea"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/lson": 1
      }
    },
    "/d/suburb/fy/fy/yuljade": {
      "type": "ROOM",
      "short": "玉龙珠宝店",
      "exits": {
        "east": "/d/suburb/fy/fy/swind1"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/jadeowner": 1
      }
    },
    "/d/suburb/fy/fy/zuisheng": {
      "type": "ROOM",
      "short": "醉生小馆",
      "exits": {
        "north": "/d/suburb/fy/fy/wcloud5"
      },
      "objects": {
        "/d/suburb/fy/fy/npc/wineowner": 1
      }
    },
    "/d/suburb/fy/fywall/eupgate": {
      "type": "ROOM",
      "short": "东城门楼",
      "exits": {
        "down": "/d/suburb/fy/fy/egate",
        "north": "/d/suburb/fy/fywall/ewall1",
        "south": "/d/suburb/fy/fywall/ewall10"
      }
    },
    "/d/suburb/fy/fywall/ewall1": {
      "type": "ROOM",
      "short": "东城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/necorner",
        "south": "/d/suburb/fy/fywall/eupgate"
      }
    },
    "/d/suburb/fy/fywall/ewall10": {
      "type": "ROOM",
      "short": "东城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/eupgate",
        "south": "/d/suburb/fy/fywall/secorner"
      }
    },
    "/d/suburb/fy/fywall/ewall2": {
      "type": "ROOM",
      "short": "东城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/ewall1",
        "south": "/d/suburb/fy/fywall/ewall3"
      }
    },
    "/d/suburb/fy/fywall/ewall3": {
      "type": "ROOM",
      "short": "东城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/ewall2",
        "south": "/d/suburb/fy/fywall/ewall4"
      }
    },
    "/d/suburb/fy/fywall/ewall4": {
      "type": "ROOM",
      "short": "东城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/ewall3",
        "south": "/d/suburb/fy/fywall/ewall5"
      }
    },
    "/d/suburb/fy/fywall/ewall5": {
      "type": "ROOM",
      "short": "东城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/ewall4",
        "south": "/d/suburb/fy/fywall/eupgate"
      }
    },
    "/d/suburb/fy/fywall/ewall6": {
      "type": "ROOM",
      "short": "东城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/eupgate",
        "south": "/d/suburb/fy/fywall/ewall7"
      }
    },
    "/d/suburb/fy/fywall/ewall7": {
      "type": "ROOM",
      "short": "东城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/ewall6",
        "south": "/d/suburb/fy/fywall/ewall8"
      }
    },
    "/d/suburb/fy/fywall/ewall8": {
      "type": "ROOM",
      "short": "东城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/ewall7",
        "south": "/d/suburb/fy/fywall/ewall9"
      }
    },
    "/d/suburb/fy/fywall/ewall9": {
      "type": "ROOM",
      "short": "东城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/ewall8",
        "south": "/d/suburb/fy/fywall/ewall10"
      }
    },
    "/d/suburb/fy/fywall/necorner": {
      "type": "ROOM",
      "short": "东北角楼",
      "exits": {
        "south": "/d/suburb/fy/fywall/ewall1",
        "west": "/d/suburb/fy/fywall/nwall10"
      },
      "objects": {
        "/d/suburb/fy/fywall/npc/wall_solider": 3,
        "/d/suburb/fy/fywall/obj/corner": 1,
        "/d/suburb/fy/fywall/obj/bomb": 1
      }
    },
    "/d/suburb/fy/fywall/nupgate": {
      "type": "ROOM",
      "short": "北城门楼",
      "exits": {
        "down": "/d/suburb/fy/fy/ngate",
        "west": "/d/suburb/fy/fywall/nwall1",
        "east": "/d/suburb/fy/fywall/nwall10"
      }
    },
    "/d/suburb/fy/fywall/nwall1": {
      "type": "ROOM",
      "short": "北城墙",
      "exits": {
        "west": "/d/suburb/fy/fywall/nwcorner",
        "east": "/d/suburb/fy/fywall/nupgate"
      }
    },
    "/d/suburb/fy/fywall/nwall10": {
      "type": "ROOM",
      "short": "北城墙",
      "exits": {
        "west": "/d/suburb/fy/fywall/nupgate",
        "east": "/d/suburb/fy/fywall/necorner"
      }
    },
    "/d/suburb/fy/fywall/nwall2": {
      "type": "ROOM",
      "short": "北城墙",
      "exits": {
        "west": "/d/suburb/fy/fywall/nwall1",
        "east": "/d/suburb/fy/fywall/nwall3"
      }
    },
    "/d/suburb/fy/fywall/nwall3": {
      "type": "ROOM",
      "short": "北城墙",
      "exits": {
        "west": "/d/suburb/fy/fywall/nwall2",
        "east": "/d/suburb/fy/fywall/nwall4"
      }
    },
    "/d/suburb/fy/fywall/nwall4": {
      "type": "ROOM",
      "short": "北城墙",
      "exits": {
        "west": "/d/suburb/fy/fywall/nwall3",
        "east": "/d/suburb/fy/fywall/nwall5"
      }
    },
    "/d/suburb/fy/fywall/nwall5": {
      "type": "ROOM",
      "short": "北城墙",
      "exits": {
        "west": "/d/suburb/fy/fywall/nwall4",
        "east": "/d/suburb/fy/fywall/nupgate"
      }
    },
    "/d/suburb/fy/fywall/nwall6": {
      "type": "ROOM",
      "short": "北城墙",
      "exits": {
        "west": "/d/suburb/fy/fywall/nupgate",
        "east": "/d/suburb/fy/fywall/nwall7"
      }
    },
    "/d/suburb/fy/fywall/nwall7": {
      "type": "ROOM",
      "short": "北城墙",
      "exits": {
        "west": "/d/suburb/fy/fywall/nwall6",
        "east": "/d/suburb/fy/fywall/nwall8"
      }
    },
    "/d/suburb/fy/fywall/nwall8": {
      "type": "ROOM",
      "short": "北城墙",
      "exits": {
        "west": "/d/suburb/fy/fywall/nwall7",
        "east": "/d/suburb/fy/fywall/nwall9"
      }
    },
    "/d/suburb/fy/fywall/nwall9": {
      "type": "ROOM",
      "short": "北城墙",
      "exits": {
        "west": "/d/suburb/fy/fywall/nwall8",
        "east": "/d/suburb/fy/fywall/nwall10"
      }
    },
    "/d/suburb/fy/fywall/nwcorner": {
      "type": "ROOM",
      "short": "西北角楼",
      "exits": {
        "south": "/d/suburb/fy/fywall/wwall1",
        "east": "/d/suburb/fy/fywall/nwall1"
      },
      "objects": {
        "/d/suburb/fy/fywall/npc/wall_solider": 3,
        "/d/suburb/fy/fywall/obj/corner": 1,
        "/d/suburb/fy/fywall/obj/bomb": 1
      }
    },
    "/d/suburb/fy/fywall/secorner": {
      "type": "ROOM",
      "short": "东南角楼",
      "exits": {
        "north": "/d/suburb/fy/fywall/ewall10",
        "west": "/d/suburb/fy/fywall/swall1"
      },
      "objects": {
        "/d/suburb/fy/fywall/npc/wall_solider": 3,
        "/d/suburb/fy/fywall/obj/corner": 1,
        "/d/suburb/fy/fywall/obj/bomb": 1
      }
    },
    "/d/suburb/fy/fywall/supgate": {
      "type": "ROOM",
      "short": "南城门楼",
      "exits": {
        "down": "/d/suburb/fy/fy/sgate",
        "east": "/d/suburb/fy/fywall/swall1",
        "west": "/d/suburb/fy/fywall/swall10"
      }
    },
    "/d/suburb/fy/fywall/swall1": {
      "type": "ROOM",
      "short": "南城墙",
      "exits": {
        "east": "/d/suburb/fy/fywall/secorner",
        "west": "/d/suburb/fy/fywall/supgate"
      }
    },
    "/d/suburb/fy/fywall/swall10": {
      "type": "ROOM",
      "short": "南城墙",
      "exits": {
        "east": "/d/suburb/fy/fywall/supgate",
        "west": "/d/suburb/fy/fywall/swcorner"
      }
    },
    "/d/suburb/fy/fywall/swall2": {
      "type": "ROOM",
      "short": "南城墙",
      "exits": {
        "east": "/d/suburb/fy/fywall/swall1",
        "west": "/d/suburb/fy/fywall/swall3"
      }
    },
    "/d/suburb/fy/fywall/swall3": {
      "type": "ROOM",
      "short": "南城墙",
      "exits": {
        "east": "/d/suburb/fy/fywall/swall2",
        "west": "/d/suburb/fy/fywall/swall4"
      }
    },
    "/d/suburb/fy/fywall/swall4": {
      "type": "ROOM",
      "short": "南城墙",
      "exits": {
        "east": "/d/suburb/fy/fywall/swall3",
        "west": "/d/suburb/fy/fywall/swall5"
      }
    },
    "/d/suburb/fy/fywall/swall5": {
      "type": "ROOM",
      "short": "南城墙",
      "exits": {
        "east": "/d/suburb/fy/fywall/swall4",
        "west": "/d/suburb/fy/fywall/supgate"
      }
    },
    "/d/suburb/fy/fywall/swall6": {
      "type": "ROOM",
      "short": "南城墙",
      "exits": {
        "east": "/d/suburb/fy/fywall/supgate",
        "west": "/d/suburb/fy/fywall/swall7"
      }
    },
    "/d/suburb/fy/fywall/swall7": {
      "type": "ROOM",
      "short": "南城墙",
      "exits": {
        "east": "/d/suburb/fy/fywall/swall6",
        "west": "/d/suburb/fy/fywall/swall8"
      }
    },
    "/d/suburb/fy/fywall/swall8": {
      "type": "ROOM",
      "short": "南城墙",
      "exits": {
        "east": "/d/suburb/fy/fywall/swall7",
        "west": "/d/suburb/fy/fywall/swall9"
      }
    },
    "/d/suburb/fy/fywall/swall9": {
      "type": "ROOM",
      "short": "南城墙",
      "exits": {
        "east": "/d/suburb/fy/fywall/swall8",
        "west": "/d/suburb/fy/fywall/swall10"
      }
    },
    "/d/suburb/fy/fywall/swcorner": {
      "type": "ROOM",
      "short": "西南角楼",
      "exits": {
        "north": "/d/suburb/fy/fywall/wwall10",
        "east": "/d/suburb/fy/fywall/swall10"
      },
      "objects": {
        "/d/suburb/fy/fywall/npc/wall_solider": 3,
        "/d/suburb/fy/fywall/obj/corner": 1,
        "/d/suburb/fy/fywall/obj/bomb": 1
      }
    },
    "/d/suburb/fy/fywall/wupgate": {
      "type": "ROOM",
      "short": "西城门楼",
      "exits": {
        "down": "/d/suburb/fy/fy/wgate",
        "north": "/d/suburb/fy/fywall/wwall1",
        "south": "/d/suburb/fy/fywall/wwall10"
      }
    },
    "/d/suburb/fy/fywall/wwall1": {
      "type": "ROOM",
      "short": "西城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/nwcorner",
        "south": "/d/suburb/fy/fywall/wupgate"
      }
    },
    "/d/suburb/fy/fywall/wwall10": {
      "type": "ROOM",
      "short": "西城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/wupgate",
        "south": "/d/suburb/fy/fywall/swcorner"
      }
    },
    "/d/suburb/fy/fywall/wwall2": {
      "type": "ROOM",
      "short": "西城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/wwall1",
        "south": "/d/suburb/fy/fywall/wwall3"
      }
    },
    "/d/suburb/fy/fywall/wwall3": {
      "type": "ROOM",
      "short": "西城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/wwall2",
        "south": "/d/suburb/fy/fywall/wwall4"
      }
    },
    "/d/suburb/fy/fywall/wwall4": {
      "type": "ROOM",
      "short": "西城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/wwall3",
        "south": "/d/suburb/fy/fywall/wwall5"
      }
    },
    "/d/suburb/fy/fywall/wwall5": {
      "type": "ROOM",
      "short": "西城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/wwall4",
        "south": "/d/suburb/fy/fywall/wupgate"
      }
    },
    "/d/suburb/fy/fywall/wwall6": {
      "type": "ROOM",
      "short": "西城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/wupgate",
        "south": "/d/suburb/fy/fywall/wwall7"
      }
    },
    "/d/suburb/fy/fywall/wwall7": {
      "type": "ROOM",
      "short": "西城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/wwall6",
        "south": "/d/suburb/fy/fywall/wwall8"
      }
    },
    "/d/suburb/fy/fywall/wwall8": {
      "type": "ROOM",
      "short": "西城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/wwall7",
        "south": "/d/suburb/fy/fywall/wwall9"
      }
    },
    "/d/suburb/fy/fywall/wwall9": {
      "type": "ROOM",
      "short": "西城墙",
      "exits": {
        "north": "/d/suburb/fy/fywall/wwall8",
        "south": "/d/suburb/fy/fywall/wwall10"
      }
    },
    "/d/suburb/fy/guanyin/bedroom": {
      "type": "ROOM",
      "short": "精致卧房",
      "exits": {
        "southdown": "/d/suburb/fy/guanyin/mirror"
      },
      "objects": {
        "/d/suburb/fy/guanyin/npc/master": 1
      }
    },
    "/d/suburb/fy/guanyin/deep": {
      "type": "ROOM",
      "short": "石峰深处",
      "exits": {
        "southeast": "/d/suburb/fy/guanyin/road3",
        "south": "/d/suburb/fy/guanyin/road4",
        "west": "/d/suburb/fy/guanyin/narrow"
      }
    },
    "/d/suburb/fy/guanyin/deep2": {
      "type": "ROOM",
      "short": "石峰深处",
      "exits": {
        "east": "/d/suburb/fy/guanyin/road4",
        "north": "/d/suburb/fy/guanyin/narrow"
      }
    },
    "/d/suburb/fy/guanyin/entrance": {
      "type": "ROOM",
      "short": "石峰边缘",
      "exits": {
        "south": "/u/quicksand/desert2",
        "north": "/d/suburb/fy/guanyin/road1"
      }
    },
    "/d/suburb/fy/guanyin/flower": {
      "type": "ROOM",
      "short": "花香中",
      "exits": {
        "south": "/d/suburb/fy/guanyin/sand",
        "north": "/d/suburb/fy/guanyin/valley"
      }
    },
    "/d/suburb/fy/guanyin/flower2": {
      "type": "ROOM",
      "short": "花海",
      "exits": {
        "south": "/d/suburb/fy/guanyin/valley"
      },
      "objects": {
        "/d/suburb/fy/guanyin/npc/qu": 1,
        "/d/suburb/fy/guanyin/npc/ji": 1
      }
    },
    "/d/suburb/fy/guanyin/mirror": {
      "type": "ROOM",
      "short": "巨大的镜子",
      "exits": {
        "northup": "/d/suburb/fy/guanyin/bedroom",
        "southup": "/d/suburb/fy/guanyin/flower2"
      },
      "objects": {
        "/d/suburb/fy/guanyin/npc/mirror_soul": 1
      }
    },
    "/d/suburb/fy/guanyin/narrow": {
      "type": "ROOM",
      "short": "石峰狭道",
      "exits": {
        "north": "/d/suburb/fy/guanyin/sand",
        "south": "/d/suburb/fy/guanyin/deep2",
        "east": "/d/suburb/fy/guanyin/deep"
      }
    },
    "/d/suburb/fy/guanyin/road1": {
      "type": "ROOM",
      "short": "石峰群",
      "exits": {
        "south": "/d/suburb/fy/guanyin/entrance",
        "east": "/d/suburb/fy/guanyin/road2"
      }
    },
    "/d/suburb/fy/guanyin/road2": {
      "type": "ROOM",
      "short": "石峰入口",
      "exits": {
        "north": "/d/suburb/fy/guanyin/road3",
        "west": "/d/suburb/fy/guanyin/road1"
      }
    },
    "/d/suburb/fy/guanyin/road3": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "south": "/d/suburb/fy/guanyin/road2",
        "west": "/d/suburb/fy/guanyin/road4",
        "northwest": "/d/suburb/fy/guanyin/deep"
      }
    },
    "/d/suburb/fy/guanyin/road4": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "west": "/d/suburb/fy/guanyin/deep2",
        "east": "/d/suburb/fy/guanyin/road3",
        "north": "/d/suburb/fy/guanyin/deep"
      }
    },
    "/d/suburb/fy/guanyin/sand": {
      "type": "ROOM",
      "short": "迷漫的黄沙中",
      "exits": {
        "north": "/d/suburb/fy/guanyin/flower",
        "south": "/d/suburb/fy/guanyin/narrow"
      },
      "objects": {
        "/d/suburb/fy/guanyin/npc/ghost": 3
      }
    },
    "/d/suburb/fy/guanyin/valley": {
      "type": "ROOM",
      "short": "山谷口",
      "exits": {
        "south": "/d/suburb/fy/guanyin/flower",
        "north": "/d/suburb/fy/guanyin/flower2"
      }
    },
    "/d/suburb/fy/laowu/bar": {
      "type": "ROOM",
      "short": "不醉无归小酒家",
      "exits": {
        "south": "/d/suburb/fy/laowu/street1"
      },
      "objects": {
        "/d/suburb/fy/laowu/npc/dang": 1
      }
    },
    "/d/suburb/fy/laowu/daroad": {
      "type": "ROOM",
      "short": "水晶大道",
      "exits": {
        "northwest": "/d/suburb/fy/laowu/downtown",
        "south": "/d/suburb/fy/laowu/town"
      }
    },
    "/d/suburb/fy/laowu/downtown": {
      "type": "ROOM",
      "short": "闹市",
      "exits": {
        "east": "/d/suburb/fy/laowu/street",
        "southeast": "/d/suburb/fy/laowu/daroad"
      },
      "objects": {
        "/d/suburb/fy/laowu/npc/beggar": 2,
        "/d/suburb/fy/laowu/npc/farmer": 2,
        "/d/suburb/fy/laowu/npc/drunk": 2,
        "/d/suburb/fy/laowu/npc/scavenger": 2
      }
    },
    "/d/suburb/fy/laowu/inn": {
      "type": "ROOM",
      "short": "小客栈",
      "exits": {
        "south": "/d/suburb/fy/laowu/street2",
        "east": "/d/suburb/fy/laowu/pofang"
      },
      "objects": {
        "/d/suburb/fy/laowu/npc/waiter": 1
      }
    },
    "/d/suburb/fy/laowu/laowu": {
      "type": "ROOM",
      "short": "拉哈苏",
      "exits": {
        "north": "/d/suburb/fy/laowu/town",
        "south": "/d/suburb/fy/laowu/road5"
      }
    },
    "/d/suburb/fy/laowu/pofang": {
      "type": "ROOM",
      "short": "破房间",
      "exits": {
        "west": "/d/suburb/fy/laowu/inn"
      },
      "objects": {
        "/obj/xiaotong": 3
      }
    },
    "/d/suburb/fy/laowu/road0": {
      "type": "ROOM",
      "short": "南北大道",
      "exits": {
        "north": "/d/suburb/fy/laowu/road1",
        "south": "/d/suburb/fy/fy/ngate"
      }
    },
    "/d/suburb/fy/laowu/road1": {
      "type": "ROOM",
      "short": "南北大道",
      "exits": {
        "north": "/d/suburb/fy/laowu/road5",
        "south": "/d/suburb/fy/laowu/road0",
        "east": "/d/suburb/fy/qianfo/road1",
        "westup": "/u/taoguan/sroad"
      }
    },
    "/d/suburb/fy/laowu/road5": {
      "type": "ROOM",
      "short": "南北大道",
      "exits": {
        "north": "/d/suburb/fy/laowu/laowu",
        "south": "/d/suburb/fy/laowu/road1"
      },
      "objects": {
        "/d/suburb/fy/laowu/npc/trader": 3
      }
    },
    "/d/suburb/fy/laowu/secret": {
      "type": "ROOM",
      "short": "冰下水缸",
      "exits": {
        "up": "/d/suburb/fy/laowu/xiao"
      },
      "objects": {
        "/d/suburb/fy/laowu/npc/lixia": 1
      }
    },
    "/d/suburb/fy/laowu/shop": {
      "type": "ROOM",
      "short": "草药店",
      "exits": {
        "north": "/d/suburb/fy/laowu/street1"
      },
      "objects": {
        "/d/suburb/fy/laowu/npc/leng": 1
      }
    },
    "/d/suburb/fy/laowu/street": {
      "type": "ROOM",
      "short": "闹市街",
      "exits": {
        "east": "/d/suburb/fy/laowu/street1",
        "west": "/d/suburb/fy/laowu/downtown"
      }
    },
    "/d/suburb/fy/laowu/street1": {
      "type": "ROOM",
      "short": "闹市街",
      "exits": {
        "east": "/d/suburb/fy/laowu/street2",
        "west": "/d/suburb/fy/laowu/street",
        "north": "/d/suburb/fy/laowu/bar",
        "south": "/d/suburb/fy/laowu/shop"
      }
    },
    "/d/suburb/fy/laowu/street2": {
      "type": "ROOM",
      "short": "闹市街",
      "exits": {
        "east": "/d/suburb/fy/laowu/street3",
        "west": "/d/suburb/fy/laowu/street1",
        "north": "/d/suburb/fy/laowu/inn",
        "south": "/d/suburb/fy/laowu/yingou"
      }
    },
    "/d/suburb/fy/laowu/street3": {
      "type": "ROOM",
      "short": "神秘冰河",
      "exits": {
        "west": "/d/suburb/fy/laowu/street2",
        "east": "/d/suburb/fy/laowu/street4",
        "north": "/d/suburb/fy/laowu/street5",
        "south": "/d/suburb/fy/laowu/street6",
        "southwest": "/d/suburb/fy/laowu/street7",
        "northwest": "/d/suburb/fy/laowu/street8"
      }
    },
    "/d/suburb/fy/laowu/street4": {
      "type": "ROOM",
      "short": "神秘冰河",
      "exits": {
        "west": "/d/suburb/fy/laowu/street3"
      }
    },
    "/d/suburb/fy/laowu/street5": {
      "type": "ROOM",
      "short": "神秘冰河",
      "exits": {
        "south": "/d/suburb/fy/laowu/street3"
      }
    },
    "/d/suburb/fy/laowu/street6": {
      "type": "ROOM",
      "short": "神秘冰河",
      "exits": {
        "north": "/d/suburb/fy/laowu/street3"
      }
    },
    "/d/suburb/fy/laowu/street7": {
      "type": "ROOM",
      "short": "神秘冰河",
      "exits": {
        "northeast": "/d/suburb/fy/laowu/street3"
      }
    },
    "/d/suburb/fy/laowu/street8": {
      "type": "ROOM",
      "short": "神秘冰河",
      "exits": {
        "southeast": "/d/suburb/fy/laowu/street3"
      }
    },
    "/d/suburb/fy/laowu/town": {
      "type": "ROOM",
      "short": "冰上之镇",
      "exits": {
        "north": "/d/suburb/fy/laowu/daroad",
        "south": "/d/suburb/fy/laowu/laowu",
        "east": "/d/suburb/fy/laowu/town1",
        "west": "/d/suburb/fy/laowu/town2"
      }
    },
    "/d/suburb/fy/laowu/town1": {
      "type": "ROOM",
      "short": "冰上之镇",
      "exits": {
        "west": "/d/suburb/fy/laowu/town"
      },
      "objects": {
        "/d/suburb/fy/laowu/npc/guan": 1
      }
    },
    "/d/suburb/fy/laowu/town2": {
      "type": "ROOM",
      "short": "冰上之镇",
      "exits": {
        "east": "/d/suburb/fy/laowu/town"
      },
      "objects": {
        "/d/suburb/fy/laowu/npc/guan": 2
      }
    },
    "/d/suburb/fy/laowu/xiao": {
      "type": "ROOM",
      "short": "小屋",
      "exits": {
        "west": "/d/suburb/fy/laowu/yingou"
      }
    },
    "/d/suburb/fy/laowu/yingou": {
      "type": "ROOM",
      "short": "银钩赌坊分店",
      "exits": {
        "north": "/d/suburb/fy/laowu/street2",
        "east": "/d/suburb/fy/laowu/xiao"
      },
      "objects": {
        "/d/suburb/fy/laowu/npc/laoshan": 1,
        "/d/suburb/fy/laowu/npc/li": 1
      }
    },
    "/d/suburb/fy/manglin/center1": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "east": "/d/suburb/fy/manglin/groupe1",
        "west": "/d/suburb/fy/manglin/groupw1",
        "north": "/d/suburb/fy/manglin/groupn1",
        "south": "/d/suburb/fy/manglin/groups1"
      }
    },
    "/d/suburb/fy/manglin/center2": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "east": "/d/suburb/fy/manglin/groupe2",
        "west": "/d/suburb/fy/manglin/groupw2",
        "north": "/d/suburb/fy/manglin/groupn2",
        "south": "/d/suburb/fy/manglin/groups2"
      }
    },
    "/d/suburb/fy/manglin/center3": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "east": "/d/suburb/fy/manglin/groupe3",
        "west": "/d/suburb/fy/manglin/groupw3",
        "north": "/d/suburb/fy/manglin/groupn3",
        "south": "/d/suburb/fy/manglin/groups3"
      }
    },
    "/d/suburb/fy/manglin/center4": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "east": "/d/suburb/fy/manglin/groupe4",
        "west": "/d/suburb/fy/manglin/groupw4",
        "north": "/d/suburb/fy/manglin/groupn4",
        "south": "/d/suburb/fy/manglin/groups4"
      }
    },
    "/d/suburb/fy/manglin/dummy1": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "north": "/d/suburb/fy/manglin/groupn1",
        "south": "/d/suburb/fy/manglin/groups1",
        "east": "/d/suburb/fy/manglin/groupe1",
        "west": "/d/suburb/fy/manglin/groupw1"
      }
    },
    "/d/suburb/fy/manglin/dummy2": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "north": "/d/suburb/fy/manglin/groupn2",
        "south": "/d/suburb/fy/manglin/groups2",
        "east": "/d/suburb/fy/manglin/groupe2",
        "west": "/d/suburb/fy/manglin/groupw2"
      }
    },
    "/d/suburb/fy/manglin/dummy3": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "north": "/d/suburb/fy/manglin/groupn3",
        "south": "/d/suburb/fy/manglin/groups3",
        "east": "/d/suburb/fy/manglin/groupe3",
        "west": "/d/suburb/fy/manglin/groupw3"
      }
    },
    "/d/suburb/fy/manglin/dummy4": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "north": "/d/suburb/fy/manglin/groupn4",
        "south": "/d/suburb/fy/manglin/groups4",
        "east": "/d/suburb/fy/manglin/groupe4",
        "west": "/d/suburb/fy/manglin/groupw4"
      }
    },
    "/d/suburb/fy/manglin/edge1": {
      "type": "ROOM",
      "short": "莽林边缘",
      "exits": {
        "east": "/d/suburb/fy/manglin/groupw1",
        "west": "/d/suburb/fy/chenxiang/cxe3"
      }
    },
    "/d/suburb/fy/manglin/edge2": {
      "type": "ROOM",
      "short": "莽林边缘",
      "exits": {
        "south": "/d/suburb/fy/manglin/groupn2",
        "north": "/d/suburb/fy/fy/sroad1"
      }
    },
    "/d/suburb/fy/manglin/edge3": {
      "type": "ROOM",
      "short": "莽林边缘",
      "exits": {
        "west": "/d/suburb/fy/manglin/groupe3",
        "east": "/d/suburb/fy/wanmei/entrance_road"
      }
    },
    "/d/suburb/fy/manglin/edge4": {
      "type": "ROOM",
      "short": "莽林边缘",
      "exits": {
        "north": "/d/suburb/fy/manglin/groups4",
        "south": "/d/suburb/fy/zhaoze/edge"
      }
    },
    "/d/suburb/fy/manglin/groupe1": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "west": "/d/suburb/fy/manglin/center1",
        "north": "/d/suburb/fy/manglin/dummy1",
        "south": "/d/suburb/fy/manglin/dummy1"
      },
      "objects": {
        "/d/suburb/fy/manglin/npc/tiger": 2,
        "/d/suburb/fy/manglin/npc/wolf": 1,
        "/d/suburb/fy/manglin/npc/snake": 1,
        "/d/suburb/fy/manglin/npc/bear": 1
      }
    },
    "/d/suburb/fy/manglin/groupe2": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "west": "/d/suburb/fy/manglin/center2",
        "north": "/d/suburb/fy/manglin/dummy2",
        "south": "/d/suburb/fy/manglin/dummy2"
      }
    },
    "/d/suburb/fy/manglin/groupe3": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "west": "/d/suburb/fy/manglin/center3",
        "north": "/d/suburb/fy/manglin/dummy3",
        "south": "/d/suburb/fy/manglin/dummy3"
      }
    },
    "/d/suburb/fy/manglin/groupe4": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "west": "/d/suburb/fy/manglin/center4",
        "north": "/d/suburb/fy/manglin/dummy4",
        "south": "/d/suburb/fy/manglin/dummy4"
      }
    },
    "/d/suburb/fy/manglin/groupn1": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "east": "/d/suburb/fy/manglin/dummy1",
        "west": "/d/suburb/fy/manglin/dummy1",
        "south": "/d/suburb/fy/manglin/center1"
      }
    },
    "/d/suburb/fy/manglin/groupn2": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "east": "/d/suburb/fy/manglin/dummy2",
        "west": "/d/suburb/fy/manglin/dummy2",
        "south": "/d/suburb/fy/manglin/center2"
      },
      "objects": {
        "/d/suburb/fy/manglin/npc/master": 1
      }
    },
    "/d/suburb/fy/manglin/groupn3": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "east": "/d/suburb/fy/manglin/dummy3",
        "west": "/d/suburb/fy/manglin/dummy3",
        "south": "/d/suburb/fy/manglin/center3"
      }
    },
    "/d/suburb/fy/manglin/groupn4": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "east": "/d/suburb/fy/manglin/dummy4",
        "west": "/d/suburb/fy/manglin/dummy4",
        "south": "/d/suburb/fy/manglin/center4"
      },
      "objects": {
        "/d/suburb/fy/manglin/npc/tiger": 1,
        "/d/suburb/fy/manglin/npc/wolf": 1,
        "/d/suburb/fy/manglin/npc/snake": 1,
        "/d/suburb/fy/manglin/npc/bear": 2
      }
    },
    "/d/suburb/fy/manglin/groups1": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "east": "/d/suburb/fy/manglin/dummy1",
        "west": "/d/suburb/fy/manglin/dummy1",
        "north": "/d/suburb/fy/manglin/center1"
      }
    },
    "/d/suburb/fy/manglin/groups2": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "east": "/d/suburb/fy/manglin/dummy2",
        "west": "/d/suburb/fy/manglin/dummy2",
        "north": "/d/suburb/fy/manglin/center2"
      },
      "objects": {
        "/d/suburb/fy/manglin/npc/tiger": 1,
        "/d/suburb/fy/manglin/npc/wolf": 2,
        "/d/suburb/fy/manglin/npc/snake": 1,
        "/d/suburb/fy/manglin/npc/bear": 1
      }
    },
    "/d/suburb/fy/manglin/groups3": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "east": "/d/suburb/fy/manglin/dummy3",
        "west": "/d/suburb/fy/manglin/dummy3",
        "north": "/d/suburb/fy/manglin/center3"
      }
    },
    "/d/suburb/fy/manglin/groups4": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "east": "/d/suburb/fy/manglin/dummy4",
        "west": "/d/suburb/fy/manglin/dummy4",
        "north": "/d/suburb/fy/manglin/center4"
      }
    },
    "/d/suburb/fy/manglin/groupw1": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "east": "/d/suburb/fy/manglin/center1",
        "north": "/d/suburb/fy/manglin/dummy1",
        "south": "/d/suburb/fy/manglin/dummy1"
      }
    },
    "/d/suburb/fy/manglin/groupw2": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "east": "/d/suburb/fy/manglin/center2",
        "north": "/d/suburb/fy/manglin/dummy2",
        "south": "/d/suburb/fy/manglin/dummy2"
      }
    },
    "/d/suburb/fy/manglin/groupw3": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "east": "/d/suburb/fy/manglin/center3",
        "north": "/d/suburb/fy/manglin/dummy3",
        "south": "/d/suburb/fy/manglin/dummy3"
      },
      "objects": {
        "/d/suburb/fy/manglin/npc/tiger": 1,
        "/d/suburb/fy/manglin/npc/wolf": 1,
        "/d/suburb/fy/manglin/npc/snake": 2,
        "/d/suburb/fy/manglin/npc/bear": 1
      }
    },
    "/d/suburb/fy/manglin/groupw4": {
      "type": "ROOM",
      "short": "莽林之中",
      "exits": {
        "east": "/d/suburb/fy/manglin/center4",
        "north": "/d/suburb/fy/manglin/dummy4",
        "south": "/d/suburb/fy/manglin/dummy4"
      }
    },
    "/d/suburb/fy/manglin/top1": {
      "type": "ROOM",
      "short": "古树顶",
      "exits": {
        "down": "/d/suburb/fy/manglin/center1"
      }
    },
    "/d/suburb/fy/manglin/top2": {
      "type": "ROOM",
      "short": "古树顶",
      "exits": {
        "down": "/d/suburb/fy/manglin/center2"
      }
    },
    "/d/suburb/fy/manglin/top3": {
      "type": "ROOM",
      "short": "古树顶",
      "exits": {
        "down": "/d/suburb/fy/manglin/center2"
      }
    },
    "/d/suburb/fy/manglin/top4": {
      "type": "ROOM",
      "short": "古树顶",
      "exits": {
        "down": "/d/suburb/fy/manglin/center2"
      }
    },
    "/d/suburb/fy/npc/m_weapon/lianbianshi": {
      "type": "ROOM",
      "short": "造鞭潭",
      "exits": {
        "north": "/d/suburb/fy/xingxiu/nanjiang3"
      },
      "objects": {
        "/d/suburb/fy/npc/m_weapon/npc/shibian": 1
      }
    },
    "/d/suburb/fy/npc/m_weapon/liandaoshi": {
      "type": "ROOM",
      "short": "炼刀场",
      "exits": {
        "eastup": "/d/suburb/fy/xingxiu/tianroad6"
      },
      "objects": {
        "/d/suburb/fy/npc/m_weapon/npc/shidao": 1
      }
    },
    "/d/suburb/fy/npc/m_weapon/liangunshi": {
      "type": "ROOM",
      "short": "棍窠",
      "exits": {
        "east": "/d/suburb/fy/xueshan/shenghu"
      },
      "objects": {
        "/d/suburb/fy/npc/m_weapon/npc/shigun": 1
      }
    },
    "/d/suburb/fy/npc/m_weapon/lianjianshi": {
      "type": "ROOM",
      "short": "炼剑场",
      "exits": {
        "south": "/d/suburb/fy/xingxiu/shamo3"
      },
      "objects": {
        "/d/suburb/fy/npc/m_weapon/npc/shijian": 1
      }
    },
    "/d/suburb/fy/npc/m_weapon/lianzhangshi": {
      "type": "ROOM",
      "short": "杖场",
      "exits": {
        "east": "/d/suburb/fy/baituo/xiaolu2"
      },
      "objects": {
        "/d/suburb/fy/npc/m_weapon/npc/shizhang": 1
      }
    },
    "/d/suburb/fy/npc/m_weapon/m_room1": {
      "type": "ROOM",
      "short": "沙漠绿洲",
      "exits": {
        "east": "/d/suburb/fy/xingxiu/nanjiang2",
        "south": "/d/suburb/fy/npc/m_weapon/xuanbing"
      }
    },
    "/d/suburb/fy/npc/m_weapon/tan/cave": {
      "type": "ROOM",
      "short": "湖心小洞"
    },
    "/d/suburb/fy/npc/m_weapon/tan/tan1": {
      "type": "ROOM",
      "short": "嘉兴南湖 ",
      "exits": {
        "up": "/d/suburb/fy/quanzhou/nanhu",
        "down": "/d/suburb/fy/npc/m_weapon/tan/tan2"
      }
    },
    "/d/suburb/fy/npc/m_weapon/tan/tan2": {
      "type": "ROOM",
      "short": "嘉兴南湖 ",
      "exits": {
        "up": "/d/suburb/fy/npc/m_weapon/tan/tan1",
        "down": "/d/suburb/fy/npc/m_weapon/tan/tan3"
      }
    },
    "/d/suburb/fy/npc/m_weapon/tan/tan3": {
      "type": "ROOM",
      "short": "嘉兴南湖 ",
      "exits": {
        "up": "/d/suburb/fy/npc/m_weapon/tan/tan2",
        "east": "/d/suburb/fy/npc/m_weapon/tan/tan4",
        "west": "/d/suburb/fy/npc/m_weapon/tan/tan6",
        "south": "/d/suburb/fy/npc/m_weapon/tan/tan6",
        "north": "/d/suburb/fy/npc/m_weapon/tan/tan6"
      }
    },
    "/d/suburb/fy/npc/m_weapon/tan/tan4": {
      "type": "ROOM",
      "short": "嘉兴南湖 ",
      "exits": {
        "up": "/d/suburb/fy/npc/m_weapon/tan/tan2",
        "down": "/d/suburb/fy/npc/m_weapon/tan/tan5",
        "southwest": "/d/suburb/fy/npc/m_weapon/tan/tan6",
        "northwest": "/d/suburb/fy/npc/m_weapon/tan/tan6"
      }
    },
    "/d/suburb/fy/npc/m_weapon/tan/tan5": {
      "type": "ROOM",
      "short": "嘉兴南湖 ",
      "exits": {
        "up": "/d/suburb/fy/npc/m_weapon/tan/tan6",
        "west": "/d/suburb/fy/npc/m_weapon/tan/tan7",
        "south": "/d/suburb/fy/npc/m_weapon/tan/tan7",
        "north": "/d/suburb/fy/npc/m_weapon/tan/tan7"
      }
    },
    "/d/suburb/fy/npc/m_weapon/tan/tan6": {
      "type": "ROOM",
      "short": "嘉兴南湖 ",
      "exits": {
        "up": "/d/suburb/fy/npc/m_weapon/tan/tan2",
        "down": "/d/suburb/fy/npc/m_weapon/tan/tan7",
        "east": "/d/suburb/fy/npc/m_weapon/tan/tan3",
        "north": "/d/suburb/fy/npc/m_weapon/tan/tan3",
        "south": "/d/suburb/fy/npc/m_weapon/tan/tan3"
      }
    },
    "/d/suburb/fy/npc/m_weapon/tan/tan7": {
      "type": "ROOM",
      "short": "嘉兴南湖 ",
      "exits": {
        "up": "/d/suburb/fy/npc/m_weapon/tan/tan6",
        "east": "/d/suburb/fy/npc/m_weapon/tan/tan5",
        "west": "/d/suburb/fy/npc/m_weapon/tan/tan7",
        "south": "/d/suburb/fy/npc/m_weapon/tan/tan7",
        "north": "/d/suburb/fy/npc/m_weapon/tan/tan7"
      }
    },
    "/d/suburb/fy/npc/m_weapon/xuanbing": {
      "type": "ROOM",
      "short": "玄兵古洞",
      "exits": {
        "east": "/d/suburb/fy/xingxiu/nanjiang2",
        "enter": "/d/suburb/fy/npc/m_weapon/xuanbing1"
      }
    },
    "/d/suburb/fy/npc/m_weapon/xuanbing1": {
      "type": "ROOM",
      "short": "玄兵古洞",
      "exits": {
        "out": "/d/suburb/fy/npc/m_weapon/xuanbing"
      }
    },
    "/d/suburb/fy/qianfo/chanfang": {
      "type": "ROOM",
      "short": "禅房",
      "exits": {
        "northeast": "/d/suburb/fy/qianfo/houshan.c",
        "south": "/d/suburb/fy/qianfo/changlang3.c",
        "east": "/d/suburb/fy/qianfo/yezhang.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/bigmonk": 5
      }
    },
    "/d/suburb/fy/qianfo/chanfang2": {
      "type": "ROOM",
      "short": "禅房",
      "exits": {
        "south": "/d/suburb/fy/qianfo/changlang4.c",
        "northwest": "/d/suburb/fy/qianfo/houshan.c",
        "west": "/d/suburb/fy/qianfo/yezhang.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/bigmonk": 1
      }
    },
    "/d/suburb/fy/qianfo/changlang": {
      "type": "ROOM",
      "short": "长廊",
      "exits": {
        "east": "/d/suburb/fy/qianfo/qianyuan.c",
        "south": "/d/suburb/fy/qianfo/fangsheng.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/monk": 1
      }
    },
    "/d/suburb/fy/qianfo/changlang2": {
      "type": "ROOM",
      "short": "长廊",
      "exits": {
        "west": "/d/suburb/fy/qianfo/qianyuan.c",
        "south": "/d/suburb/fy/qianfo/fudong.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/monk": 1
      }
    },
    "/d/suburb/fy/qianfo/changlang3": {
      "type": "ROOM",
      "short": "长廊",
      "exits": {
        "north": "/d/suburb/fy/qianfo/chanfang.c",
        "east": "/d/suburb/fy/qianfo/houyuan.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/bigmonk": 1
      }
    },
    "/d/suburb/fy/qianfo/changlang4": {
      "type": "ROOM",
      "short": "长廊",
      "exits": {
        "north": "/d/suburb/fy/qianfo/chanfang2.c",
        "west": "/d/suburb/fy/qianfo/houyuan.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/bigmonk": 1
      }
    },
    "/d/suburb/fy/qianfo/chansi": {
      "type": "ROOM",
      "short": "兴国禅寺",
      "objects": {
        "/d/suburb/fy/qianfo/npc/bonze2": 2
      },
      "exits": {
        "southdown": "/d/suburb/fy/qianfo/fudi.c",
        "north": "/d/suburb/fy/qianfo/jinggang.c"
      }
    },
    "/d/suburb/fy/qianfo/chantang": {
      "type": "ROOM",
      "short": "禅堂",
      "exits": {
        "west": "/d/suburb/fy/qianfo/mile.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/bonze3": 1
      }
    },
    "/d/suburb/fy/qianfo/dadian": {
      "type": "ROOM",
      "short": "大雄宝殿",
      "exits": {
        "south": "/d/suburb/fy/qianfo/qianyuan.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/obj/copperman": 1,
        "/d/suburb/fy/qianfo/obj/heart": 1,
        "/d/suburb/fy/qianfo/obj/liver": 1,
        "/d/suburb/fy/qianfo/obj/stomach": 1,
        "/d/suburb/fy/qianfo/obj/lung": 1,
        "/d/suburb/fy/qianfo/obj/kidney": 1
      }
    },
    "/d/suburb/fy/qianfo/damo": {
      "type": "ROOM",
      "short": "达摩堂",
      "exits": {
        "west": "/d/suburb/fy/qianfo/tianwang.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/obj/damo": 1
      }
    },
    "/d/suburb/fy/qianfo/fangsheng": {
      "type": "ROOM",
      "short": "放生池",
      "exits": {
        "east": "/d/suburb/fy/qianfo/jinggang.c",
        "north": "/d/suburb/fy/qianfo/changlang.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/lady": 1,
        "/d/suburb/fy/qianfo/npc/badguy": 1
      }
    },
    "/d/suburb/fy/qianfo/fatang": {
      "type": "ROOM",
      "short": "法堂",
      "exits": {
        "east": "/d/suburb/fy/qianfo/mile.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/bonze4": 1
      }
    },
    "/d/suburb/fy/qianfo/fudi": {
      "type": "ROOM",
      "short": "洞天福地",
      "exits": {
        "westdown": "/d/suburb/fy/qianfo/qiyan.c",
        "northup": "/d/suburb/fy/qianfo/chansi.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/laoshi": 1
      }
    },
    "/d/suburb/fy/qianfo/fudong": {
      "type": "ROOM",
      "short": "千佛洞",
      "exits": {
        "west": "/d/suburb/fy/qianfo/jinggang.c",
        "north": "/d/suburb/fy/qianfo/changlang2.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/master3": 1
      }
    },
    "/d/suburb/fy/qianfo/guanyin": {
      "type": "ROOM",
      "short": "观音殿",
      "exits": {
        "south": "/d/suburb/fy/qianfo/weituo.c",
        "north": "/d/suburb/fy/qianfo/luohan.c",
        "west": "/d/suburb/fy/qianfo/zhaitang.c",
        "east": "/d/suburb/fy/qianfo/xiangji.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/bonze8": 1
      }
    },
    "/d/suburb/fy/qianfo/houshan": {
      "type": "ROOM",
      "short": "後山平地",
      "exits": {
        "southwest": "/d/suburb/fy/qianfo/chanfang.c",
        "southeast": "/d/suburb/fy/qianfo/chanfang2.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/obj/bigstone": 1
      }
    },
    "/d/suburb/fy/qianfo/houyuan": {
      "type": "ROOM",
      "short": "后院",
      "exits": {
        "east": "/d/suburb/fy/qianfo/changlang4.c",
        "west": "/d/suburb/fy/qianfo/changlang3.c",
        "north": "/d/suburb/fy/qianfo/yezhang.c"
      }
    },
    "/d/suburb/fy/qianfo/jialan": {
      "type": "ROOM",
      "short": "伽蓝殿",
      "exits": {
        "east": "/d/suburb/fy/qianfo/tianwang.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/bonze1": 1
      }
    },
    "/d/suburb/fy/qianfo/jinggang": {
      "type": "ROOM",
      "short": "金刚殿",
      "exits": {
        "south": "/d/suburb/fy/qianfo/chansi.c",
        "west": "/d/suburb/fy/qianfo/fangsheng.c",
        "north": "/d/suburb/fy/qianfo/qianyuan.c",
        "east": "/d/suburb/fy/qianfo/fudong.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/lishi": 2
      }
    },
    "/d/suburb/fy/qianfo/luohan": {
      "type": "ROOM",
      "short": "罗汉堂",
      "exits": {
        "south": "/d/suburb/fy/qianfo/guanyin.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/bonze9": 1
      }
    },
    "/d/suburb/fy/qianfo/mile": {
      "type": "ROOM",
      "short": "弥勒殿",
      "exits": {
        "south": "/d/suburb/fy/qianfo/tianwang.c",
        "west": "/d/suburb/fy/qianfo/fatang.c",
        "east": "/d/suburb/fy/qianfo/chantang.c"
      }
    },
    "/d/suburb/fy/qianfo/mishi1": {
      "type": "ROOM",
      "short": "藏经阁",
      "exits": {
        "south": "/d/suburb/fy/qianfo/yezhang.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/obj/book1": 1,
        "/d/suburb/fy/qianfo/obj/book2": 1,
        "/d/suburb/fy/qianfo/obj/book3": 1,
        "/d/suburb/fy/qianfo/obj/book4": 1,
        "/d/suburb/fy/qianfo/obj/book5": 1
      }
    },
    "/d/suburb/fy/qianfo/private": {
      "type": "ROOM",
      "short": "私房"
    },
    "/d/suburb/fy/qianfo/private0": {
      "type": "ROOM",
      "short": "私房"
    },
    "/d/suburb/fy/qianfo/private1": {
      "type": "ROOM",
      "short": "私房"
    },
    "/d/suburb/fy/qianfo/private2": {
      "type": "ROOM",
      "short": "私房"
    },
    "/d/suburb/fy/qianfo/private3": {
      "type": "ROOM",
      "short": "私房"
    },
    "/d/suburb/fy/qianfo/private4": {
      "type": "ROOM",
      "short": "私房"
    },
    "/d/suburb/fy/qianfo/private5": {
      "type": "ROOM",
      "short": "私房"
    },
    "/d/suburb/fy/qianfo/qianyuan": {
      "type": "ROOM",
      "short": "前院",
      "exits": {
        "north": "/d/suburb/fy/qianfo/dadian.c",
        "west": "/d/suburb/fy/qianfo/changlang.c",
        "east": "/d/suburb/fy/qianfo/changlang2.c",
        "south": "/d/suburb/fy/qianfo/jinggang.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/monk": 1
      }
    },
    "/d/suburb/fy/qianfo/qiyan": {
      "type": "ROOM",
      "short": "齐烟九点",
      "exits": {
        "westdown": "/d/suburb/fy/qianfo/tanghuai.c",
        "eastup": "/d/suburb/fy/qianfo/fudi.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/monk": 1
      }
    },
    "/d/suburb/fy/qianfo/road1": {
      "type": "ROOM",
      "short": "阳关大道",
      "exits": {
        "west": "/d/suburb/fy/laowu/road1",
        "east": "/d/suburb/fy/qianfo/shanjiao"
      }
    },
    "/d/suburb/fy/qianfo/shanjiao": {
      "type": "ROOM",
      "short": "千佛山角",
      "exits": {
        "east": "/d/suburb/fy/qianfo/tanghuai.c",
        "west": "/d/suburb/fy/qianfo/road1.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/bonze": 1
      }
    },
    "/d/suburb/fy/qianfo/shungeng": {
      "type": "ROOM",
      "short": "舜耕山庄",
      "exits": {
        "south": "/d/suburb/fy/qianfo/shanjiao.c"
      }
    },
    "/d/suburb/fy/qianfo/tanghuai": {
      "type": "ROOM",
      "short": "唐槐亭",
      "exits": {
        "west": "/d/suburb/fy/qianfo/shanjiao.c",
        "eastup": "/d/suburb/fy/qianfo/qiyan.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/horse": 1,
        "/d/suburb/fy/qianfo/npc/climber": 2
      }
    },
    "/d/suburb/fy/qianfo/tianwang": {
      "type": "ROOM",
      "short": "天王殿",
      "exits": {
        "south": "/d/suburb/fy/qianfo/dadian.c",
        "north": "/d/suburb/fy/qianfo/mile.c",
        "west": "/d/suburb/fy/qianfo/jialan.c",
        "east": "/d/suburb/fy/qianfo/damo.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/master2": 1,
        "/d/suburb/fy/qianfo/npc/tianwang1": 1,
        "/d/suburb/fy/qianfo/npc/tianwang2": 1,
        "/d/suburb/fy/qianfo/npc/tianwang3": 1,
        "/d/suburb/fy/qianfo/npc/tianwang4": 1
      }
    },
    "/d/suburb/fy/qianfo/tree1": {
      "type": "ROOM",
      "short": "大槐树上",
      "objects": {
        "/d/suburb/fy/qianfo/npc/spy": 1,
        "/d/suburb/fy/qianfo/npc/maque": 2
      },
      "exits": {
        "down": "/d/suburb/fy/qianfo/tanghuai"
      }
    },
    "/d/suburb/fy/qianfo/weituo": {
      "type": "ROOM",
      "short": "韦驮殿",
      "exits": {
        "south": "/d/suburb/fy/qianfo/mile.c",
        "north": "/d/suburb/fy/qianfo/guanyin.c",
        "westup": "/d/suburb/fy/qianfo/zhonggu.c",
        "eastup": "/d/suburb/fy/qianfo/zhonggu2.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/bonze5": 1
      }
    },
    "/d/suburb/fy/qianfo/xiangji": {
      "type": "ROOM",
      "short": "香积厨",
      "exits": {
        "west": "/d/suburb/fy/qianfo/guanyin.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/monk": 1
      }
    },
    "/d/suburb/fy/qianfo/yezhang": {
      "type": "ROOM",
      "short": "耶丈室",
      "exits": {
        "south": "/d/suburb/fy/qianfo/houyuan.c",
        "north": "/d/suburb/fy/qianfo/mishi1.c",
        "east": "/d/suburb/fy/qianfo/chanfang2.c",
        "west": "/d/suburb/fy/qianfo/chanfang.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/master": 1
      }
    },
    "/d/suburb/fy/qianfo/zhaitang": {
      "type": "ROOM",
      "short": "斋堂",
      "exits": {
        "east": "/d/suburb/fy/qianfo/guanyin.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/monk": 1
      }
    },
    "/d/suburb/fy/qianfo/zhonggu": {
      "type": "ROOM",
      "short": "钟鼓楼",
      "exits": {
        "eastdown": "/d/suburb/fy/qianfo/weituo.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/bonze6": 1
      }
    },
    "/d/suburb/fy/qianfo/zhonggu2": {
      "type": "ROOM",
      "short": "钟鼓楼",
      "exits": {
        "westdown": "/d/suburb/fy/qianfo/weituo.c"
      },
      "objects": {
        "/d/suburb/fy/qianfo/npc/bonze7": 1
      }
    },
    "/d/suburb/fy/qianjin/bamboo_bridge1": {
      "type": "ROOM",
      "short": "花海竹桥",
      "exits": {
        "northeast": "/d/suburb/fy/qianjin/garden",
        "northwest": "/d/suburb/fy/qianjin/bamboo_bridge2"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/gongzi": 1
      }
    },
    "/d/suburb/fy/qianjin/bamboo_bridge2": {
      "type": "ROOM",
      "short": "花海竹桥",
      "exits": {
        "southeast": "/d/suburb/fy/qianjin/bamboo_bridge1",
        "southwest": "/d/suburb/fy/qianjin/bamboo_bridge3"
      }
    },
    "/d/suburb/fy/qianjin/bamboo_bridge3": {
      "type": "ROOM",
      "short": "花海竹桥",
      "exits": {
        "west": "/d/suburb/fy/qianjin/hehuadang",
        "northeast": "/d/suburb/fy/qianjin/bamboo_bridge2"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/yahuan": 2
      }
    },
    "/d/suburb/fy/qianjin/boat": {
      "type": "ROOM",
      "short": "云雨舟甲板",
      "exits": {
        "east": "/d/suburb/fy/qianjin/taban",
        "north": "/d/suburb/fy/qianjin/boat1"
      }
    },
    "/d/suburb/fy/qianjin/boat1": {
      "type": "ROOM",
      "short": "云雨舟甲板",
      "exits": {
        "south": "/d/suburb/fy/qianjin/boat",
        "north": "/d/suburb/fy/qianjin/boat2"
      }
    },
    "/d/suburb/fy/qianjin/boat2": {
      "type": "ROOM",
      "short": "云雨舟甲板",
      "exits": {
        "south": "/d/suburb/fy/qianjin/boat1",
        "west": "/d/suburb/fy/qianjin/boat3"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/shuishou": 2,
        "/d/suburb/fy/qianjin/npc/mother": 2
      }
    },
    "/d/suburb/fy/qianjin/boat3": {
      "type": "ROOM",
      "short": "云雨舟甲板",
      "exits": {
        "east": "/d/suburb/fy/qianjin/boat2",
        "south": "/d/suburb/fy/qianjin/tading"
      }
    },
    "/d/suburb/fy/qianjin/bridge": {
      "type": "ROOM",
      "short": "荡上曲桥",
      "exits": {
        "southeast": "/d/suburb/fy/qianjin/hehuadang2",
        "west": "/d/suburb/fy/qianjin/bridge1"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/chong": 3
      }
    },
    "/d/suburb/fy/qianjin/bridge1": {
      "type": "ROOM",
      "short": "荡上曲桥",
      "exits": {
        "east": "/d/suburb/fy/qianjin/bridge",
        "west": "/d/suburb/fy/qianjin/grassroom"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/piaoke": 1,
        "/d/suburb/fy/qianjin/npc/piaoke2": 1
      }
    },
    "/d/suburb/fy/qianjin/bridge2": {
      "type": "ROOM",
      "short": "荡上曲桥",
      "exits": {
        "east": "/d/suburb/fy/qianjin/grassroom",
        "west": "/d/suburb/fy/qianjin/lastbridge"
      }
    },
    "/d/suburb/fy/qianjin/cao": {
      "type": "ROOM",
      "short": "湖上草",
      "exits": {
        "north": "/d/suburb/fy/qianjin/lastbridge",
        "southeast": "/d/suburb/fy/qianjin/hua"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/cao": 1
      }
    },
    "/d/suburb/fy/qianjin/corror": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "east": "/d/suburb/fy/qianjin/wting",
        "west": "/d/suburb/fy/qianjin/corror1"
      }
    },
    "/d/suburb/fy/qianjin/corror1": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "east": "/d/suburb/fy/qianjin/corror",
        "west": "/d/suburb/fy/qianjin/corror2"
      }
    },
    "/d/suburb/fy/qianjin/corror2": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "east": "/d/suburb/fy/qianjin/corror1",
        "south": "/d/suburb/fy/qianjin/hotel1",
        "west": "/d/suburb/fy/qianjin/corror3"
      }
    },
    "/d/suburb/fy/qianjin/corror3": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "east": "/d/suburb/fy/qianjin/corror2",
        "north": "/d/suburb/fy/qianjin/hotel2"
      }
    },
    "/d/suburb/fy/qianjin/eting": {
      "type": "ROOM",
      "short": "东偏厅",
      "exits": {
        "west": "/d/suburb/fy/qianjin/tading"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/guard": 1
      }
    },
    "/d/suburb/fy/qianjin/garden": {
      "type": "ROOM",
      "short": "前花园",
      "exits": {
        "east": "/d/suburb/fy/qianjin/pingfeng",
        "southwest": "/d/suburb/fy/qianjin/bamboo_bridge1",
        "north": "/d/suburb/fy/qianjin/garden1",
        "south": "/d/suburb/fy/qianjin/garden2"
      }
    },
    "/d/suburb/fy/qianjin/garden1": {
      "type": "ROOM",
      "short": "前花园",
      "exits": {
        "south": "/d/suburb/fy/qianjin/garden"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/huajiang": 1
      }
    },
    "/d/suburb/fy/qianjin/garden2": {
      "type": "ROOM",
      "short": "前花园",
      "exits": {
        "north": "/d/suburb/fy/qianjin/garden"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/huajiang": 1
      }
    },
    "/d/suburb/fy/qianjin/grassroom": {
      "type": "ROOM",
      "short": "草堂",
      "exits": {
        "north": "/d/suburb/fy/qianjin/yue",
        "south": "/d/suburb/fy/qianjin/shui",
        "east": "/d/suburb/fy/qianjin/bridge1",
        "west": "/d/suburb/fy/qianjin/bridge2"
      },
      "objects": {
        "/d/suburb/fy/qianjin/obj/flower": 1,
        "/d/suburb/fy/qianjin/obj/pin": 1,
        "/d/suburb/fy/qianjin/npc/qianjinwaiter": 1
      }
    },
    "/d/suburb/fy/qianjin/hehuadang": {
      "type": "ROOM",
      "short": "荷花荡",
      "exits": {
        "north": "/d/suburb/fy/qianjin/hehuadang1",
        "east": "/d/suburb/fy/qianjin/bamboo_bridge3"
      }
    },
    "/d/suburb/fy/qianjin/hehuadang1": {
      "type": "ROOM",
      "short": "荷花荡",
      "exits": {
        "north": "/d/suburb/fy/qianjin/hehuadang2",
        "south": "/d/suburb/fy/qianjin/hehuadang"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/dayan": 2
      }
    },
    "/d/suburb/fy/qianjin/hehuadang2": {
      "type": "ROOM",
      "short": "荷花荡",
      "exits": {
        "northwest": "/d/suburb/fy/qianjin/bridge",
        "south": "/d/suburb/fy/qianjin/hehuadang1"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/ouseller": 1
      }
    },
    "/d/suburb/fy/qianjin/hotel1": {
      "type": "ROOM",
      "short": "厢房",
      "exits": {
        "north": "/d/suburb/fy/qianjin/corror2"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/chick1": 1
      }
    },
    "/d/suburb/fy/qianjin/hotel2": {
      "type": "ROOM",
      "short": "厢房",
      "exits": {
        "south": "/d/suburb/fy/qianjin/corror3"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/chick2": 1
      }
    },
    "/d/suburb/fy/qianjin/hua": {
      "type": "ROOM",
      "short": "湖上花",
      "exits": {
        "northwest": "/d/suburb/fy/qianjin/cao",
        "east": "/d/suburb/fy/qianjin/jiu"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/hua": 1
      }
    },
    "/d/suburb/fy/qianjin/jinge": {
      "type": "ROOM",
      "short": "不眠阁",
      "exits": {
        "southdown": "/d/suburb/fy/qianjin/secfloor"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/lin": 1,
        "/d/suburb/fy/qianjin/npc/afei": 1
      }
    },
    "/d/suburb/fy/qianjin/jiu": {
      "type": "ROOM",
      "short": "湖上酒",
      "exits": {
        "west": "/d/suburb/fy/qianjin/hua",
        "northeast": "/d/suburb/fy/qianjin/shui"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/jiu": 1
      }
    },
    "/d/suburb/fy/qianjin/lastbridge": {
      "type": "ROOM",
      "short": "荡上曲桥",
      "exits": {
        "north": "/d/suburb/fy/qianjin/nu",
        "south": "/d/suburb/fy/qianjin/cao",
        "east": "/d/suburb/fy/qianjin/bridge2",
        "west": "/d/suburb/fy/qianjin/taban"
      }
    },
    "/d/suburb/fy/qianjin/liu": {
      "type": "ROOM",
      "short": "湖上柳",
      "exits": {
        "southeast": "/d/suburb/fy/qianjin/yue",
        "west": "/d/suburb/fy/qianjin/xue"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/liu": 1
      }
    },
    "/d/suburb/fy/qianjin/nu": {
      "type": "ROOM",
      "short": "湖上女",
      "exits": {
        "northeast": "/d/suburb/fy/qianjin/xue",
        "south": "/d/suburb/fy/qianjin/lastbridge"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/nu": 1
      }
    },
    "/d/suburb/fy/qianjin/pingfeng": {
      "type": "ROOM",
      "short": "翠玉屏风",
      "exits": {
        "east": "/d/suburb/fy/qianjin/qianjin",
        "west": "/d/suburb/fy/qianjin/garden"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/laohan": 1
      }
    },
    "/d/suburb/fy/qianjin/qianjin": {
      "type": "ROOM",
      "short": "千金楼外",
      "exits": {
        "east": "/d/suburb/fy/fy/swind4",
        "west": "/d/suburb/fy/qianjin/pingfeng"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/guinu": 2
      }
    },
    "/d/suburb/fy/qianjin/secfloor": {
      "type": "ROOM",
      "short": "云雨舟二层",
      "exits": {
        "northdown": "/d/suburb/fy/qianjin/stairs2",
        "northup": "/d/suburb/fy/qianjin/jinge"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/dapiaoke": 1,
        "/d/suburb/fy/qianjin/npc/dachick": 1
      }
    },
    "/d/suburb/fy/qianjin/secret_room": {
      "type": "ROOM",
      "short": "底舱",
      "exits": {
        "west": "/d/suburb/fy/qianjin/sr1",
        "east": "/d/suburb/fy/qianjin/sr2"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/prisoner": 3
      }
    },
    "/d/suburb/fy/qianjin/shui": {
      "type": "ROOM",
      "short": "湖上水",
      "exits": {
        "southwest": "/d/suburb/fy/qianjin/jiu",
        "north": "/d/suburb/fy/qianjin/grassroom"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/shui": 1
      }
    },
    "/d/suburb/fy/qianjin/sr1": {
      "type": "ROOM",
      "short": "底舱",
      "exits": {
        "east": "/d/suburb/fy/qianjin/secret_room",
        "west": "/d/suburb/fy/qianjin/sr3"
      }
    },
    "/d/suburb/fy/qianjin/sr2": {
      "type": "ROOM",
      "short": "底舱",
      "exits": {
        "west": "/d/suburb/fy/qianjin/secret_room",
        "east": "/d/suburb/fy/qianjin/troom"
      }
    },
    "/d/suburb/fy/qianjin/sr3": {
      "type": "ROOM",
      "short": "底舱",
      "exits": {
        "east": "/d/suburb/fy/qianjin/sr1"
      }
    },
    "/d/suburb/fy/qianjin/stairs": {
      "type": "ROOM",
      "short": "镂金扶梯",
      "exits": {
        "northdown": "/d/suburb/fy/qianjin/tading",
        "northup": "/d/suburb/fy/qianjin/stairs2"
      }
    },
    "/d/suburb/fy/qianjin/stairs2": {
      "type": "ROOM",
      "short": "镂金扶梯",
      "exits": {
        "southdown": "/d/suburb/fy/qianjin/stairs",
        "southup": "/d/suburb/fy/qianjin/secfloor"
      }
    },
    "/d/suburb/fy/qianjin/taban": {
      "type": "ROOM",
      "short": "断桥踏板",
      "exits": {
        "east": "/d/suburb/fy/qianjin/lastbridge",
        "west": "/d/suburb/fy/qianjin/boat"
      }
    },
    "/d/suburb/fy/qianjin/tading": {
      "type": "ROOM",
      "short": "云雨舟大厅",
      "exits": {
        "north": "/d/suburb/fy/qianjin/boat3",
        "west": "/d/suburb/fy/qianjin/wting",
        "east": "/d/suburb/fy/qianjin/eting",
        "southup": "/d/suburb/fy/qianjin/stairs"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/dancer": 3
      }
    },
    "/d/suburb/fy/qianjin/troom": {
      "type": "ROOM",
      "short": "私刑房",
      "exits": {
        "west": "/d/suburb/fy/qianjin/sr2"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/funu": 2,
        "/d/suburb/fy/qianjin/obj/broken_cloth": 2
      }
    },
    "/d/suburb/fy/qianjin/wting": {
      "type": "ROOM",
      "short": "西偏厅",
      "exits": {
        "west": "/d/suburb/fy/qianjin/corror",
        "east": "/d/suburb/fy/qianjin/tading"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/haoke": 2,
        "/d/suburb/fy/qianjin/npc/peijiunu": 4
      }
    },
    "/d/suburb/fy/qianjin/xue": {
      "type": "ROOM",
      "short": "湖上雪",
      "exits": {
        "east": "/d/suburb/fy/qianjin/liu",
        "southwest": "/d/suburb/fy/qianjin/nu"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/xue": 1
      }
    },
    "/d/suburb/fy/qianjin/yue": {
      "type": "ROOM",
      "short": "湖上月",
      "exits": {
        "south": "/d/suburb/fy/qianjin/grassroom",
        "northwest": "/d/suburb/fy/qianjin/liu"
      },
      "objects": {
        "/d/suburb/fy/qianjin/npc/yue": 1
      }
    },
    "/d/suburb/fy/stone/sroom": {
      "type": "ROOM",
      "short": "堂屋",
      "exits": {
        "south": "/d/suburb/fy/stone/stone2"
      },
      "objects": {
        "/d/suburb/fy/stone/npc/master": 1
      }
    },
    "/d/suburb/fy/stone/stone1": {
      "type": "ROOM",
      "short": "阴暗石巷",
      "exits": {
        "south": "/d/suburb/fy/fy/ecloud1",
        "north": "/d/suburb/fy/stone/stone2"
      },
      "objects": {
        "/d/suburb/fy/stone/npc/scavenger": 1
      }
    },
    "/d/suburb/fy/stone/stone2": {
      "type": "ROOM",
      "short": "石巷尽头",
      "exits": {
        "south": "/d/suburb/fy/stone/stone1",
        "north": "/d/suburb/fy/stone/sroom"
      }
    },
    "/d/suburb/fy/wanmei/backyard": {
      "type": "ROOM",
      "short": "山庄后院",
      "exits": {
        "west": "/d/suburb/fy/wanmei/center",
        "east": "/d/suburb/fy/wanmei/playground",
        "north": "/d/suburb/fy/wanmei/kitchen",
        "south": "/d/suburb/fy/wanmei/bathroom"
      }
    },
    "/d/suburb/fy/wanmei/bathroom": {
      "type": "ROOM",
      "short": "小茅厕",
      "exits": {
        "north": "/d/suburb/fy/wanmei/backyard"
      },
      "objects": {
        "/d/suburb/fy/wanmei/obj/matong": 2,
        "/d/suburb/fy/wanmei/obj/brush": 1
      }
    },
    "/d/suburb/fy/wanmei/center": {
      "type": "ROOM",
      "short": "白梅阁",
      "exits": {
        "west": "/d/suburb/fy/wanmei/yard",
        "east": "/d/suburb/fy/wanmei/backyard"
      },
      "objects": {
        "/d/suburb/fy/wanmei/npc/master": 1
      }
    },
    "/d/suburb/fy/wanmei/centercave": {
      "type": "ROOM",
      "short": "中间小洞",
      "objects": {
        "/d/suburb/fy/wanmei/obj/blackthorn": 1,
        "/d/suburb/fy/wanmei/obj/silk_cloth": 1
      }
    },
    "/d/suburb/fy/wanmei/cleft": {
      "type": "ROOM",
      "short": "左偏院",
      "exits": {
        "south": "/d/suburb/fy/wanmei/yard"
      }
    },
    "/d/suburb/fy/wanmei/cright": {
      "type": "ROOM",
      "short": "右偏院",
      "exits": {
        "north": "/d/suburb/fy/wanmei/yard"
      },
      "objects": {
        "/d/suburb/fy/wanmei/obj/book1": 1
      }
    },
    "/d/suburb/fy/wanmei/entrance_road": {
      "type": "ROOM",
      "short": "梅林小路",
      "exits": {
        "west": "/d/suburb/fy/manglin/edge3",
        "east": "/d/suburb/fy/wanmei/road2"
      }
    },
    "/d/suburb/fy/wanmei/frontyard": {
      "type": "ROOM",
      "short": "山庄前院",
      "exits": {
        "west": "/d/suburb/fy/wanmei/gate",
        "east": "/d/suburb/fy/wanmei/meidang",
        "north": "/d/suburb/fy/wanmei/woodroom",
        "south": "/d/suburb/fy/wanmei/woodhouse",
        "northeast": "/d/suburb/fy/wanmei/left",
        "southeast": "/d/suburb/fy/wanmei/right"
      }
    },
    "/d/suburb/fy/wanmei/gate": {
      "type": "ROOM",
      "short": "风铃梅枝门",
      "exits": {
        "west": "/d/suburb/fy/wanmei/village",
        "east": "/d/suburb/fy/wanmei/frontyard"
      }
    },
    "/d/suburb/fy/wanmei/jungle": {
      "type": "ROOM",
      "short": "灌木丛",
      "exits": {
        "east": "/d/suburb/fy/wanmei/lake",
        "south": "/d/suburb/fy/wanmei/upriver"
      },
      "objects": {
        "/d/suburb/fy/wanmei/npc/bihu": 1
      }
    },
    "/d/suburb/fy/wanmei/kitchen": {
      "type": "ROOM",
      "short": "后厨房",
      "exits": {
        "south": "/d/suburb/fy/wanmei/backyard"
      }
    },
    "/d/suburb/fy/wanmei/lake": {
      "type": "ROOM",
      "short": "山中巨湖",
      "exits": {
        "west": "/d/suburb/fy/wanmei/jungle",
        "east": "/d/suburb/fy/wanmei/waterfall"
      }
    },
    "/d/suburb/fy/wanmei/left": {
      "type": "ROOM",
      "short": "左弄堂",
      "exits": {
        "southwest": "/d/suburb/fy/wanmei/frontyard",
        "southeast": "/d/suburb/fy/wanmei/yard"
      },
      "objects": {
        "/d/suburb/fy/wanmei/npc/cat": 1,
        "/d/suburb/fy/wanmei/npc/ass": 2
      }
    },
    "/d/suburb/fy/wanmei/leftcave": {
      "type": "ROOM",
      "short": "左边小洞",
      "objects": {
        "/d/suburb/fy/wanmei/obj/icy_boot": 1,
        "/d/suburb/fy/wanmei/obj/icy_cloth": 1,
        "/d/suburb/fy/wanmei/obj/icy_girth": 1,
        "/d/suburb/fy/wanmei/obj/icy_ribbon": 1
      }
    },
    "/d/suburb/fy/wanmei/lowriver": {
      "type": "ROOM",
      "short": "小河流下游",
      "exits": {
        "west": "/d/suburb/fy/wanmei/playground"
      },
      "objects": {
        "/d/suburb/fy/wanmei/npc/cor": 2
      }
    },
    "/d/suburb/fy/wanmei/meidang": {
      "type": "ROOM",
      "short": "枯梅堂",
      "exits": {
        "west": "/d/suburb/fy/wanmei/frontyard",
        "east": "/d/suburb/fy/wanmei/yard"
      },
      "objects": {
        "/d/suburb/fy/wanmei/npc/oldman": 1
      }
    },
    "/d/suburb/fy/wanmei/outcave": {
      "type": "ROOM",
      "short": "瀑后山洞",
      "exits": {
        "west": "/d/suburb/fy/wanmei/waterfall"
      },
      "objects": {
        "/obj/money/thousand-cash": 1
      }
    },
    "/d/suburb/fy/wanmei/playground": {
      "type": "ROOM",
      "short": "后山坡",
      "exits": {
        "west": "/d/suburb/fy/wanmei/backyard"
      },
      "objects": {
        "/d/suburb/fy/wanmei/npc/child": 1,
        "/d/suburb/fy/wanmei/obj/river": 1
      }
    },
    "/d/suburb/fy/wanmei/right": {
      "type": "ROOM",
      "short": "右弄堂",
      "exits": {
        "northwest": "/d/suburb/fy/wanmei/frontyard",
        "northeast": "/d/suburb/fy/wanmei/yard"
      },
      "objects": {
        "/d/suburb/fy/wanmei/npc/cat": 1,
        "/d/suburb/fy/wanmei/npc/ass": 2
      }
    },
    "/d/suburb/fy/wanmei/rightcave": {
      "type": "ROOM",
      "short": "右边小洞",
      "objects": {
        "/d/suburb/fy/wanmei/npc/luxiaofeng": 1
      }
    },
    "/d/suburb/fy/wanmei/river": {
      "type": "ROOM",
      "short": "小河流",
      "exits": {
        "west": "/d/suburb/fy/wanmei/playground"
      },
      "objects": {
        "/d/suburb/fy/wanmei/npc/snake": 3
      }
    },
    "/d/suburb/fy/wanmei/road2": {
      "type": "ROOM",
      "short": "梅林之中",
      "exits": {
        "west": "/d/suburb/fy/wanmei/entrance_road",
        "east": "/d/suburb/fy/wanmei/village"
      }
    },
    "/d/suburb/fy/wanmei/roof": {
      "type": "ROOM",
      "short": "小木屋顶",
      "exits": {
        "down": "/d/suburb/fy/wanmei/woodhouse"
      },
      "objects": {
        "/d/suburb/fy/wanmei/npc/dodo": 1
      }
    },
    "/d/suburb/fy/wanmei/upriver": {
      "type": "ROOM",
      "short": "小河流上游",
      "exits": {
        "north": "/d/suburb/fy/wanmei/jungle",
        "south": "/d/suburb/fy/wanmei/playground"
      }
    },
    "/d/suburb/fy/wanmei/village": {
      "type": "ROOM",
      "short": "万梅山庄",
      "exits": {
        "west": "/d/suburb/fy/wanmei/road2",
        "east": "/d/suburb/fy/wanmei/gate"
      }
    },
    "/d/suburb/fy/wanmei/waterfall": {
      "type": "ROOM",
      "short": "万梅瀑布",
      "exits": {
        "west": "/d/suburb/fy/wanmei/lake"
      }
    },
    "/d/suburb/fy/wanmei/woodhouse": {
      "type": "ROOM",
      "short": "小木屋",
      "exits": {
        "north": "/d/suburb/fy/wanmei/frontyard"
      },
      "objects": {
        "/d/suburb/fy/wanmei/obj/towel": 1
      }
    },
    "/d/suburb/fy/wanmei/woodroom": {
      "type": "ROOM",
      "short": "小柴房",
      "exits": {
        "south": "/d/suburb/fy/wanmei/frontyard"
      },
      "objects": {
        "/d/suburb/fy/wanmei/obj/chair": 1,
        "/d/suburb/fy/wanmei/obj/rope": 1,
        "/d/suburb/fy/wanmei/obj/drywoods": 1
      }
    },
    "/d/suburb/fy/wanmei/yard": {
      "type": "ROOM",
      "short": "山庄正院",
      "exits": {
        "west": "/d/suburb/fy/wanmei/meidang",
        "southwest": "/d/suburb/fy/wanmei/right",
        "northwest": "/d/suburb/fy/wanmei/left",
        "east": "/d/suburb/fy/wanmei/center",
        "north": "/d/suburb/fy/wanmei/cleft",
        "south": "/d/suburb/fy/wanmei/cright"
      }
    },
    "/d/suburb/fy/wiz/courthouse": {
      "type": "ROOM",
      "short": "法院",
      "objects": {
        "/d/suburb/fy/wiz/npc/judge": 1
      }
    },
    "/d/suburb/fy/wiz/entrance": {
      "type": "ROOM",
      "short": "巫师会客室",
      "exits": {
        "southeast": "/d/suburb/fy/snow/inn",
        "west": "/d/suburb/fy/wiz/hall1"
      }
    },
    "/d/suburb/fy/wiz/hall1": {
      "type": "ROOM",
      "short": "巫师交谊厅",
      "exits": {
        "north": "/d/suburb/fy/wiz/jobroom",
        "down": "/d/suburb/fy/fy/fysquare"
      }
    },
    "/d/suburb/fy/wiz/jobroom": {
      "type": "ROOM",
      "short": "工作进度简报室",
      "exits": {
        "south": "/d/suburb/fy/wiz/hall1"
      }
    },
    "/d/suburb/fy/yingou/dating": {
      "type": "ROOM",
      "short": "银钩赌坊大厅",
      "exits": {
        "north": "/d/suburb/fy/yingou/pianting",
        "east": "/d/suburb/fy/yingou/yingou"
      },
      "objects": {
        "/d/suburb/fy/yingou/npc/dice_thrower": 1,
        "/d/suburb/fy/yingou/obj/stealingbook": 1
      }
    },
    "/d/suburb/fy/yingou/pianting": {
      "type": "ROOM",
      "short": "银钩赌坊偏厅",
      "exits": {
        "south": "/d/suburb/fy/yingou/dating"
      },
      "objects": {
        "/d/suburb/fy/yingou/npc/leng": 1,
        "/d/suburb/fy/yingou/npc/fangyufei": 1
      }
    },
    "/d/suburb/fy/yingou/secret": {
      "type": "ROOM",
      "short": "秘室",
      "exits": {
        "south": "/d/suburb/fy/yingou/zhoulang"
      },
      "objects": {
        "/d/suburb/fy/yingou/npc/blue": 1,
        "/d/suburb/fy/yingou/npc/fangyuxiang": 1
      }
    },
    "/d/suburb/fy/yingou/yingou": {
      "type": "ROOM",
      "short": "银钩赌坊",
      "exits": {
        "east": "/d/suburb/fy/fy/swind3",
        "west": "/d/suburb/fy/yingou/dating"
      },
      "objects": {
        "/d/suburb/fy/yingou/npc/xiazi": 1,
        "/d/suburb/fy/yingou/npc/daniu": 1
      }
    },
    "/d/suburb/fy/yingou/zhoulang": {
      "type": "ROOM",
      "short": "石级甬道",
      "exits": {
        "north": "/d/suburb/fy/yingou/secret",
        "east": "/d/suburb/fy/yingou/pianting"
      }
    },
    "/d/suburb/fy/zhaoze/center": {
      "type": "ROOM",
      "short": "火沼中心",
      "exits": {
        "west": "/d/suburb/fy/zhaoze/zhaoze4"
      },
      "objects": {
        "/d/suburb/fy/zhaoze/npc/dragon": 1
      }
    },
    "/d/suburb/fy/zhaoze/edge": {
      "type": "ROOM",
      "short": "沼泽边缘",
      "exits": {
        "north": "/d/suburb/fy/manglin/edge4"
      }
    },
    "/d/suburb/fy/zhaoze/zhaoze1": {
      "type": "ROOM",
      "short": "火沼死域",
      "exits": {
        "north": "/d/suburb/fy/zhaoze/edge"
      },
      "objects": {
        "/d/suburb/fy/zhaoze/npc/monster1": 1
      }
    },
    "/d/suburb/fy/zhaoze/zhaoze2": {
      "type": "ROOM",
      "short": "火沼死域",
      "exits": {
        "west": "/d/suburb/fy/zhaoze/zhaoze1"
      }
    },
    "/d/suburb/fy/zhaoze/zhaoze3": {
      "type": "ROOM",
      "short": "火沼死域",
      "exits": {
        "north": "/d/suburb/fy/zhaoze/zhaoze2"
      },
      "objects": {
        "/d/suburb/fy/zhaoze/npc/monster2": 1
      }
    },
    "/d/suburb/fy/zhaoze/zhaoze4": {
      "type": "ROOM",
      "short": "火沼死域",
      "exits": {
        "east": "/d/suburb/fy/zhaoze/zhaoze3"
      }
    },
    "/d/suburb/fy/zhaoze/zhaoze5": {
      "type": "ROOM",
      "short": "火沼深处",
      "exits": {
        "east": "/d/suburb/fy/zhaoze/zhaoze4"
      },
      "objects": {
        "/d/suburb/fy/zhaoze/npc/monster3": 1
      }
    },
    "/d/suburb/fy/zhaoze/zhaoze6": {
      "type": "ROOM",
      "short": "火沼深处",
      "exits": {
        "north": "/d/suburb/fy/zhaoze/zhaoze5"
      }
    },
    "/d/suburb/fy/zhaoze/zhaoze7": {
      "type": "ROOM",
      "short": "火沼深处",
      "exits": {
        "north": "/d/suburb/fy/zhaoze/zhaoze6"
      },
      "objects": {
        "/d/suburb/fy/zhaoze/npc/monster4": 1
      }
    },
    "/d/suburb/xkx/city/beidajie1": {
      "type": "ROOM",
      "short": "北大街",
      "exits": {
        "east": "/d/suburb/xkx/city/kedian",
        "south": "/d/suburb/xkx/city/guangchang",
        "west": "/d/suburb/xkx/city/qianzhuang",
        "north": "/d/suburb/xkx/city/beidajie2"
      }
    },
    "/d/suburb/xkx/city/beidajie2": {
      "type": "ROOM",
      "short": "北大街",
      "exits": {
        "east": "/d/suburb/xkx/city/zuixianlou",
        "south": "/d/suburb/xkx/city/beidajie1",
        "west": "/d/suburb/xkx/city/wumiao",
        "north": "/d/suburb/xkx/city/beimen"
      }
    },
    "/d/suburb/xkx/city/beimen": {
      "type": "ROOM",
      "short": "北门",
      "exits": {
        "south": "/d/suburb/xkx/city/beidajie2",
        "north": "/d/suburb/xkx/village/hsroad1"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/wujiang": 1,
        "/d/suburb/xkx/city/npc/bing": 2
      }
    },
    "/d/suburb/xkx/city/biaoju": {
      "type": "ROOM",
      "short": "福威镖局",
      "exits": {
        "south": "/d/suburb/xkx/city/zhengting",
        "north": "/d/suburb/xkx/city/xidajie2"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/linpingzhi": 1,
        "/d/suburb/xkx/city/npc/biaotou": 2
      }
    },
    "/d/suburb/xkx/city/bingqiku": {
      "type": "ROOM",
      "short": "兵器库",
      "exits": {
        "north": "/d/suburb/xkx/city/bingyin"
      }
    },
    "/d/suburb/xkx/city/bingyin": {
      "type": "ROOM",
      "short": "兵营",
      "exits": {
        "south": "/d/suburb/xkx/city/bingqiku",
        "north": "/d/suburb/xkx/city/bingyindamen"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/shi": 1,
        "/d/suburb/xkx/city/npc/wujiang": 2,
        "/d/suburb/xkx/city/npc/bing": 6
      }
    },
    "/d/suburb/xkx/city/bingyindamen": {
      "type": "ROOM",
      "short": "兵营大门",
      "exits": {
        "south": "/d/suburb/xkx/city/bingyin",
        "north": "/d/suburb/xkx/city/xidajie1"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/bing": 4
      }
    },
    "/d/suburb/xkx/city/caizhu": {
      "type": "ROOM",
      "short": "财主大门",
      "exits": {
        "south": "/d/suburb/xkx/city/xidajie2",
        "north": "/d/suburb/xkx/city/dayuan"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/wolfdog": 2
      }
    },
    "/d/suburb/xkx/city/chaguan": {
      "type": "ROOM",
      "short": "春来茶馆",
      "exits": {
        "east": "/d/suburb/xkx/city/nandajie2"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/aqingsao": 1
      }
    },
    "/d/suburb/xkx/city/damo": {
      "type": "ROOM",
      "short": "大漠",
      "exits": {
        "east": "/d/suburb/xkx/city/road1"
      }
    },
    "/d/suburb/xkx/city/dangpu": {
      "type": "ROOM",
      "short": "当铺",
      "objects": {
        "/d/suburb/xkx/city/npc/tang": 1
      },
      "exits": {
        "west": "/d/suburb/xkx/city/nandajie1"
      }
    },
    "/d/suburb/xkx/city/datiepu": {
      "type": "ROOM",
      "short": "打铁铺",
      "exits": {
        "north": "/d/suburb/xkx/city/dongdajie2"
      }
    },
    "/d/suburb/xkx/city/dayuan": {
      "type": "ROOM",
      "short": "财主大院",
      "exits": {
        "north": "/d/suburb/xkx/city/houyuan",
        "south": "/d/suburb/xkx/city/caizhu"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/guanjia": 1,
        "/d/suburb/xkx/city/npc/jiading": 2
      }
    },
    "/d/suburb/xkx/city/dongdajie1": {
      "type": "ROOM",
      "short": "东大街",
      "exits": {
        "east": "/d/suburb/xkx/city/dongdajie2",
        "south": "/d/suburb/xkx/city/zahuopu",
        "west": "/d/suburb/xkx/city/guangchang",
        "north": "/d/suburb/xkx/city/shuyuan"
      }
    },
    "/d/suburb/xkx/city/dongdajie2": {
      "type": "ROOM",
      "short": "东大街",
      "exits": {
        "east": "/d/suburb/xkx/city/dongmen",
        "south": "/d/suburb/xkx/city/datiepu",
        "west": "/d/suburb/xkx/city/dongdajie1",
        "north": "/d/suburb/xkx/city/yaopu"
      }
    },
    "/d/suburb/xkx/city/dongmen": {
      "type": "ROOM",
      "short": "东门",
      "exits": {
        "east": "/d/suburb/xkx/taishan/yidao",
        "north": "/d/suburb/xkx/city/ml1",
        "west": "/d/suburb/xkx/city/dongdajie2"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/wujiang": 1,
        "/d/suburb/xkx/city/npc/bing": 2
      }
    },
    "/d/suburb/xkx/city/dongting": {
      "type": "ROOM",
      "short": "东厅",
      "exits": {
        "west": "/d/suburb/xkx/city/ymzhengting"
      }
    },
    "/d/suburb/xkx/city/dongxiang": {
      "type": "ROOM",
      "short": "财主东厢",
      "exits": {
        "west": "/d/suburb/xkx/city/houyuan"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/hongniang": 1
      }
    },
    "/d/suburb/xkx/city/duchang": {
      "type": "ROOM",
      "short": "赌场",
      "exits": {
        "west": "/u/ding/daxiao",
        "up": "/d/suburb/xkx/city/duchang2",
        "east": "/d/suburb/xkx/city/nandajie1"
      }
    },
    "/d/suburb/xkx/city/duchang2": {
      "type": "ROOM",
      "short": "赌场",
      "exits": {
        "east": "/d/obj/inherit/room/eproom",
        "west": "/d/obj/inherit/room/wproom",
        "south": "/d/obj/inherit/room/sproom",
        "north": "/d/obj/inherit/room/nproom",
        "down": "/d/suburb/xkx/city/duchang"
      }
    },
    "/d/suburb/xkx/city/gbandao": {
      "type": "ROOM",
      "short": "暗道",
      "exits": {
        "east": "/d/suburb/xkx/city/gbxiaowu",
        "out": "/d/suburb/xkx/city/pomiao"
      },
      "objects": {
        "CLASS_D(gaibang)+/jian": 1
      }
    },
    "/d/suburb/xkx/city/gbxiaowu": {
      "type": "ROOM",
      "short": "林间小屋",
      "exits": {
        "west": "/d/suburb/xkx/city/gbandao"
      },
      "objects": {
        "CLASS_D(gaibang)+/hong": 1,
        "/d/suburb/xkx/city/obj/zhubang": 1,
        "/d/suburb/xkx/city/obj/gourou": 1,
        "/d/suburb/xkx/city/obj/jitui": 1
      }
    },
    "/d/suburb/xkx/city/guangchang": {
      "type": "ROOM",
      "short": "中央广场",
      "exits": {
        "east": "/d/suburb/xkx/city/dongdajie1",
        "south": "/d/suburb/xkx/city/nandajie1",
        "west": "/d/suburb/xkx/city/xidajie1",
        "north": "/d/suburb/xkx/city/beidajie1"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/liumang": 1,
        "/d/suburb/xkx/city/npc/liumangtou": 1
      }
    },
    "/d/suburb/xkx/city/houyuan": {
      "type": "ROOM",
      "short": "财主后院",
      "exits": {
        "south": "/d/suburb/xkx/city/dayuan",
        "west": "/d/suburb/xkx/city/xixiang"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/cui": 1
      }
    },
    "/d/suburb/xkx/city/kedian": {
      "type": "ROOM",
      "short": "客店",
      "objects": {
        "/d/suburb/xkx/city/npc/xiaoer": 1
      },
      "exits": {
        "west": "/d/suburb/xkx/city/beidajie1",
        "up": "/d/suburb/xkx/city/kedian2"
      }
    },
    "/d/suburb/xkx/city/kedian2": {
      "type": "ROOM",
      "short": "客店二楼",
      "exits": {
        "down": "/d/suburb/xkx/city/kedian",
        "enter": "/d/suburb/xkx/city/kedian3"
      },
      "objects": {
        "CLASS_D(shaolin)+/xingzhe": 1
      }
    },
    "/d/suburb/xkx/city/kedian3": {
      "type": "ROOM",
      "short": "客店二楼",
      "exits": {
        "out": "/d/suburb/xkx/city/kedian2"
      }
    },
    "/d/suburb/xkx/city/library": {
      "type": "ROOM",
      "short": "性文学图书馆",
      "exits": {
        "south": "/d/suburb/xkx/city/lichunyuan"
      }
    },
    "/d/suburb/xkx/city/lichunyuan": {
      "type": "ROOM",
      "short": "丽春院",
      "objects": {
        "CLASS_D(gaibang)+/kongkong": 1,
        "/d/suburb/xkx/city/npc/wei": 1
      },
      "exits": {
        "west": "/d/suburb/xkx/city/nandajie2",
        "north": "/d/suburb/xkx/city/library"
      }
    },
    "/d/suburb/xkx/city/ml1": {
      "type": "ROOM",
      "short": "青竹林",
      "exits": {
        "east": "/d/suburb/xkx/city/ml2",
        "west": "__FILE__",
        "south": "/d/suburb/xkx/city/dongmen",
        "north": "__FILE__"
      }
    },
    "/d/suburb/xkx/city/ml2": {
      "type": "ROOM",
      "short": "青竹林",
      "exits": {
        "east": "__FILE__",
        "west": "__FILE__",
        "south": "/d/suburb/xkx/city/dongmen",
        "north": "/d/suburb/xkx/city/ml3"
      }
    },
    "/d/suburb/xkx/city/ml3": {
      "type": "ROOM",
      "short": "青竹林",
      "exits": {
        "east": "__FILE__",
        "west": "/d/suburb/xkx/city/ml4",
        "south": "/d/suburb/xkx/city/dongmen",
        "north": "__FILE__"
      }
    },
    "/d/suburb/xkx/city/ml4": {
      "type": "ROOM",
      "short": "青竹林",
      "exits": {
        "east": "__FILE__",
        "west": "__FILE__",
        "south": "/d/suburb/xkx/city/dongmen",
        "north": "/d/suburb/xkx/city/ml5"
      }
    },
    "/d/suburb/xkx/city/ml5": {
      "type": "ROOM",
      "short": "青竹林",
      "exits": {
        "east": "/d/suburb/xkx/city/ml6",
        "west": "__FILE__",
        "south": "/d/suburb/xkx/city/dongmen",
        "north": "__FILE__"
      }
    },
    "/d/suburb/xkx/city/ml6": {
      "type": "ROOM",
      "short": "青竹林",
      "exits": {
        "east": "__FILE__",
        "west": "/d/suburb/xkx/city/ml7",
        "south": "/d/suburb/xkx/city/dongmen",
        "north": "__FILE__"
      }
    },
    "/d/suburb/xkx/city/ml7": {
      "type": "ROOM",
      "short": "青竹林",
      "exits": {
        "east": "__FILE__",
        "west": "__FILE__",
        "south": "/d/suburb/xkx/city/dongmen",
        "north": "/d/suburb/xkx/city/pomiao"
      }
    },
    "/d/suburb/xkx/city/nandajie1": {
      "type": "ROOM",
      "short": "南大街",
      "exits": {
        "east": "/d/suburb/xkx/city/dangpu",
        "south": "/d/suburb/xkx/city/nandajie2",
        "west": "/d/suburb/xkx/city/duchang",
        "north": "/d/suburb/xkx/city/guangchang"
      }
    },
    "/d/suburb/xkx/city/nandajie2": {
      "type": "ROOM",
      "short": "南大街",
      "exits": {
        "east": "/d/suburb/xkx/city/lichunyuan",
        "south": "/d/suburb/xkx/city/nanmen",
        "west": "/d/suburb/xkx/city/chaguan",
        "north": "/d/suburb/xkx/city/nandajie1"
      },
      "objects": {
        "CLASS_D(shaolin)+/tuoboseng": 1
      }
    },
    "/d/suburb/xkx/city/nanmen": {
      "type": "ROOM",
      "short": "南门",
      "exits": {
        "south": "/d/suburb/xkx/wudang/wdroad1",
        "north": "/d/suburb/xkx/city/nandajie2"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/wujiang": 1,
        "/d/suburb/xkx/city/npc/bing": 2
      }
    },
    "/d/suburb/xkx/city/neizhai": {
      "type": "ROOM",
      "short": "内宅",
      "exits": {
        "south": "/d/suburb/xkx/city/ymzhengting"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/yuhuan": 1
      }
    },
    "/d/suburb/xkx/city/pomiao": {
      "type": "ROOM",
      "short": "土地庙",
      "exits": {
        "south": "/d/suburb/xkx/city/ml4",
        "enter": "/d/suburb/xkx/city/gbandao"
      },
      "objects": {
        "CLASS_D(gaibang)+/lu": 1,
        "CLASS_D(gaibang)+/peng": 1
      }
    },
    "/d/suburb/xkx/city/qianzhuang": {
      "type": "ROOM",
      "short": "钱庄",
      "exits": {
        "east": "/d/suburb/xkx/city/beidajie1"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/qian": 1
      }
    },
    "/d/suburb/xkx/city/quanzhou": {
      "type": "ROOM",
      "short": "泉州港口",
      "exits": {
        "west": "/d/suburb/xkx/city/road10"
      }
    },
    "/d/suburb/xkx/city/shaolin": {
      "type": "ROOM",
      "short": "少林",
      "exits": {
        "east": "/d/suburb/xkx/city/road8"
      }
    },
    "/d/suburb/xkx/city/shenlong": {
      "type": "ROOM",
      "short": "神龙教",
      "exits": {
        "west": "/d/suburb/xkx/city/road7"
      }
    },
    "/d/suburb/xkx/city/shuyuan": {
      "type": "ROOM",
      "short": "书院",
      "exits": {
        "south": "/d/suburb/xkx/city/dongdajie1"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/zhu": 1
      }
    },
    "/d/suburb/xkx/city/tianshan": {
      "type": "ROOM",
      "short": "天山",
      "exits": {
        "east": "/d/suburb/xkx/city/road2"
      }
    },
    "/d/suburb/xkx/city/wudang": {
      "type": "ROOM",
      "short": "武当",
      "exits": {
        "east": "/d/suburb/xkx/city/road9",
        "north": "/d/suburb/xkx/city/road6"
      }
    },
    "/d/suburb/xkx/city/wumiao": {
      "type": "ROOM",
      "short": "武庙",
      "objects": {
        "/d/suburb/xkx/city/obj/box": 1
      },
      "exits": {
        "east": "/d/suburb/xkx/city/beidajie2",
        "northwest": "/d/suburb/xkx/wizard/guest_room"
      }
    },
    "/d/suburb/xkx/city/xidajie1": {
      "type": "ROOM",
      "short": "西大街",
      "exits": {
        "east": "/d/suburb/xkx/city/guangchang",
        "south": "/d/suburb/xkx/city/bingyindamen",
        "west": "/d/suburb/xkx/city/xidajie2",
        "north": "/d/suburb/xkx/city/yamen"
      }
    },
    "/d/suburb/xkx/city/xidajie2": {
      "type": "ROOM",
      "short": "西大街",
      "exits": {
        "east": "/d/suburb/xkx/city/xidajie1",
        "south": "/d/suburb/xkx/city/biaoju",
        "west": "/d/suburb/xkx/city/ximen",
        "north": "/d/suburb/xkx/city/caizhu"
      }
    },
    "/d/suburb/xkx/city/ximen": {
      "type": "ROOM",
      "short": "西门",
      "exits": {
        "east": "/d/suburb/xkx/city/xidajie2",
        "west": "/d/suburb/xkx/xingxiu/xxroad1"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/wujiang": 1,
        "/d/suburb/xkx/city/npc/bing": 2
      }
    },
    "/d/suburb/xkx/city/xinsu": {
      "type": "ROOM",
      "short": "星宿",
      "exits": {
        "east": "/d/suburb/xkx/city/road4"
      }
    },
    "/d/suburb/xkx/city/xiting": {
      "type": "ROOM",
      "short": "西厅",
      "exits": {
        "east": "/d/suburb/xkx/city/ymzhengting"
      }
    },
    "/d/suburb/xkx/city/xixiang": {
      "type": "ROOM",
      "short": "财主西厢",
      "exits": {
        "east": "/d/suburb/xkx/city/houyuan"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/yingying": 1
      }
    },
    "/d/suburb/xkx/city/yamen": {
      "type": "ROOM",
      "short": "衙门大门",
      "exits": {
        "south": "/d/suburb/xkx/city/xidajie1",
        "north": "/d/suburb/xkx/city/ymzhengting"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/yayi": 4
      }
    },
    "/d/suburb/xkx/city/yaopu": {
      "type": "ROOM",
      "short": "药铺",
      "objects": {
        "/d/suburb/xkx/city/npc/ping": 1,
        "/d/suburb/xkx/city/npc/huoji": 1
      },
      "exits": {
        "south": "/d/suburb/xkx/city/dongdajie2"
      }
    },
    "/d/suburb/xkx/city/ymzhengting": {
      "type": "ROOM",
      "short": "衙门正厅",
      "exits": {
        "east": "/d/suburb/xkx/city/dongting",
        "west": "/d/suburb/xkx/city/xiting",
        "north": "/d/suburb/xkx/city/neizhai",
        "south": "/d/suburb/xkx/city/yamen"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/cheng": 1,
        "/d/suburb/xkx/city/npc/shiye": 1
      }
    },
    "/d/suburb/xkx/city/zahuopu": {
      "type": "ROOM",
      "short": "杂货铺",
      "exits": {
        "north": "/d/suburb/xkx/city/dongdajie1"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/yang": 1
      }
    },
    "/d/suburb/xkx/city/zhengting": {
      "type": "ROOM",
      "short": "正厅",
      "exits": {
        "north": "/d/suburb/xkx/city/biaoju"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/linzhennan": 1
      }
    },
    "/d/suburb/xkx/city/zuixianlou": {
      "type": "ROOM",
      "short": "醉仙楼",
      "exits": {
        "west": "/d/suburb/xkx/city/beidajie2",
        "up": "/d/suburb/xkx/city/zuixianlou2"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/xiaoer2": 1
      }
    },
    "/d/suburb/xkx/city/zuixianlou2": {
      "type": [
        "ROOM",
        "F_DEALER"
      ],
      "short": "醉仙楼二楼",
      "objects": {
        "/d/suburb/xkx/city/npc/xian": 1,
        "/d/suburb/xkx/city/npc/guidao": 1
      },
      "exits": {
        "down": "/d/suburb/xkx/city/zuixianlou"
      }
    },
    "/d/suburb/xkx/death/block": {
      "type": "ROOM",
      "short": "空房间"
    },
    "/d/suburb/xkx/death/gate": {
      "type": "ROOM",
      "short": "set(, HIW \"鬼门关\" NOR);",
      "exits": {
        "north": "/d/suburb/xkx/death/gateway"
      },
      "objects": {
        "/d/suburb/xkx/death/npc/wgargoyle": 1
      }
    },
    "/d/suburb/xkx/death/gateway": {
      "type": "ROOM",
      "short": "酆都城门",
      "exits": {
        "north": "/d/suburb/xkx/death/road1",
        "south": "/d/suburb/xkx/death/gate"
      },
      "objects": {
        "/d/suburb/xkx/death/npc/bgargoyle": 1
      }
    },
    "/d/suburb/xkx/death/inn1": {
      "type": "ROOM",
      "short": "小店",
      "exits": {
        "east": "/d/suburb/xkx/death/road1"
      }
    },
    "/d/suburb/xkx/death/inn2": {
      "type": "ROOM",
      "short": "黑店",
      "exits": {
        "west": "/d/suburb/xkx/death/road1"
      }
    },
    "/d/suburb/xkx/death/road1": {
      "type": "ROOM",
      "short": "鬼门大道",
      "exits": {
        "north": "/d/suburb/xkx/death/road2",
        "south": "/d/suburb/xkx/death/gateway",
        "west": "/d/suburb/xkx/death/inn1",
        "east": "/d/suburb/xkx/death/inn2"
      }
    },
    "/d/suburb/xkx/death/road2": {
      "type": "ROOM",
      "short": "鬼门大道",
      "exits": {
        "north": "/d/suburb/xkx/death/road3",
        "south": "/d/suburb/xkx/death/road1"
      }
    },
    "/d/suburb/xkx/death/road3": {
      "type": "ROOM",
      "short": "路的尽头",
      "exits": {
        "south": "/d/suburb/xkx/death/road2"
      }
    },
    "/d/suburb/xkx/gaibang/chuchang": {
      "type": "ROOM",
      "short": "储藏室",
      "exits": {
        "west": "/d/suburb/xkx/gaibang/mishi",
        "up": "/d/suburb/xkx/gaibang/undertre"
      }
    },
    "/d/suburb/xkx/gaibang/inhole": {
      "type": "ROOM",
      "short": "树洞内部",
      "exits": {
        "out": "/d/suburb/xkx/city/guangchang"
      },
      "objects": {
        "CLASS_D(gaibang)+/zuo-qu": 1
      }
    },
    "/d/suburb/xkx/gaibang/mishi": {
      "type": "ROOM",
      "short": "密室",
      "exits": {
        "east": "/d/suburb/xkx/gaibang/chuchang"
      }
    },
    "/d/suburb/xkx/gaibang/slandao1": {
      "type": "ROOM",
      "short": "暗道",
      "exits": {
        "northeast": "/d/suburb/xkx/gaibang/slandao2",
        "southwest": "/d/suburb/xkx/gaibang/undertre"
      }
    },
    "/d/suburb/xkx/gaibang/slandao2": {
      "type": "ROOM",
      "short": "暗道",
      "exits": {
        "northeast": "/d/suburb/xkx/gaibang/undersl",
        "southwest": "/d/suburb/xkx/gaibang/slandao1"
      }
    },
    "/d/suburb/xkx/gaibang/undergb": {
      "type": "ROOM",
      "short": "破庙密室",
      "exits": {
        "up": "/d/suburb/xkx/city/pomiao",
        "southwest": "/d/suburb/xkx/gaibang/zlandao2"
      }
    },
    "/d/suburb/xkx/gaibang/undersl": {
      "type": "ROOM",
      "short": "屋角边",
      "exits": {
        "up": "/d/suburb/xkx/shaolin/chufang2",
        "southwest": "/d/suburb/xkx/gaibang/slandao2"
      },
      "objects": {
        "CLASS_D(gaibang)+/he-bj": 1
      }
    },
    "/d/suburb/xkx/gaibang/undertre": {
      "type": "ROOM",
      "short": "树洞下",
      "exits": {
        "1": "/d/suburb/xkx/gaibang/xcandao1",
        "2": "/d/suburb/xkx/gaibang/zlandao1",
        "3": "/d/suburb/xkx/gaibang/slandao1",
        "4": "/d/suburb/xkx/gaibang/xxandao1",
        "5": "/d/suburb/xkx/gaibang/wdandao1",
        "up": "/d/suburb/xkx/gaibang/inhole"
      },
      "objects": {
        "CLASS_D(gaibang)+/liang": 1
      }
    },
    "/d/suburb/xkx/gaibang/underwd": {
      "type": "ROOM",
      "short": "土匪窝边",
      "exits": {
        "out": "/d/suburb/xkx/wudang/tufeiwo1",
        "northeast": "/d/suburb/xkx/gaibang/wdandao2"
      },
      "objects": {
        "CLASS_D(gaibang)+/li-sh": 1
      }
    },
    "/d/suburb/xkx/gaibang/underxc": {
      "type": "ROOM",
      "short": "谷场槐树边",
      "exits": {
        "up": "/d/suburb/xkx/village/square",
        "south": "/d/suburb/xkx/gaibang/xcandao2"
      },
      "objects": {
        "CLASS_D(gaibang)+/ma-jw": 1
      }
    },
    "/d/suburb/xkx/gaibang/underxx": {
      "type": "ROOM",
      "short": "沙丘小洞",
      "exits": {
        "west": "/d/suburb/xkx/xingxiu/silk4",
        "east": "/d/suburb/xkx/gaibang/xxandao2"
      },
      "objects": {
        "CLASS_D(gaibang)+/yu-hx": 1
      }
    },
    "/d/suburb/xkx/gaibang/wdandao1": {
      "type": "ROOM",
      "short": "暗道",
      "exits": {
        "southwest": "/d/suburb/xkx/gaibang/wdandao2",
        "northeast": "/d/suburb/xkx/gaibang/undertre"
      }
    },
    "/d/suburb/xkx/gaibang/wdandao2": {
      "type": "ROOM",
      "short": "暗道",
      "exits": {
        "southwest": "/d/suburb/xkx/gaibang/underwd",
        "northeast": "/d/suburb/xkx/gaibang/wdandao1"
      }
    },
    "/d/suburb/xkx/gaibang/xcandao1": {
      "type": "ROOM",
      "short": "暗道",
      "exits": {
        "north": "/d/suburb/xkx/gaibang/xcandao2",
        "south": "/d/suburb/xkx/gaibang/undertre"
      }
    },
    "/d/suburb/xkx/gaibang/xcandao2": {
      "type": "ROOM",
      "short": "暗道",
      "exits": {
        "north": "/d/suburb/xkx/gaibang/underxc",
        "south": "/d/suburb/xkx/gaibang/xcandao1"
      }
    },
    "/d/suburb/xkx/gaibang/xxandao1": {
      "type": "ROOM",
      "short": "暗道",
      "exits": {
        "west": "/d/suburb/xkx/gaibang/xxandao2",
        "east": "/d/suburb/xkx/gaibang/undertre"
      }
    },
    "/d/suburb/xkx/gaibang/xxandao2": {
      "type": "ROOM",
      "short": "暗道",
      "exits": {
        "west": "/d/suburb/xkx/gaibang/underxx",
        "east": "/d/suburb/xkx/gaibang/xxandao1"
      }
    },
    "/d/suburb/xkx/gaibang/zlandao1": {
      "type": "ROOM",
      "short": "暗道",
      "exits": {
        "northeast": "/d/suburb/xkx/gaibang/zlandao2",
        "southwest": "/d/suburb/xkx/gaibang/undertre"
      }
    },
    "/d/suburb/xkx/gaibang/zlandao2": {
      "type": "ROOM",
      "short": "暗道",
      "exits": {
        "northeast": "/d/suburb/xkx/gaibang/undergb",
        "southwest": "/d/suburb/xkx/gaibang/zlandao1"
      }
    },
    "/d/suburb/xkx/huashan/baichi": {
      "type": "ROOM",
      "short": "百尺峡",
      "exits": {
        "northdown": "/d/suburb/xkx/huashan/qianchi",
        "eastup": "/d/suburb/xkx/huashan/laojun"
      }
    },
    "/d/suburb/xkx/huashan/buwei1": {
      "type": "ROOM",
      "short": "客厅",
      "exits": {
        "north": "/d/suburb/xkx/huashan/square",
        "south": "/d/suburb/xkx/huashan/buwei2"
      },
      "objects": {
        "/d/suburb/xkx/huashan/npc/dayou": 1
      }
    },
    "/d/suburb/xkx/huashan/buwei2": {
      "type": "ROOM",
      "short": "寝室",
      "exits": {
        "north": "/d/suburb/xkx/huashan/buwei1"
      }
    },
    "/d/suburb/xkx/huashan/canglong": {
      "type": "ROOM",
      "short": "苍龙岭",
      "exits": {
        "northdown": "/d/suburb/xkx/huashan/husun",
        "southdown": "/d/suburb/xkx/huashan/zhenyue",
        "westup": "/d/suburb/xkx/huashan/sheshen"
      }
    },
    "/d/suburb/xkx/huashan/chaoyang": {
      "type": "ROOM",
      "short": "朝阳峰",
      "exits": {
        "westdown": "/d/suburb/xkx/huashan/zhenyue"
      }
    },
    "/d/suburb/xkx/huashan/husun": {
      "type": "ROOM",
      "short": "猢狲愁",
      "exits": {
        "northdown": "/d/suburb/xkx/huashan/laojun",
        "southup": "/d/suburb/xkx/huashan/canglong"
      }
    },
    "/d/suburb/xkx/huashan/laojun": {
      "type": "ROOM",
      "short": "老君沟",
      "exits": {
        "westdown": "/d/suburb/xkx/huashan/baichi",
        "southup": "/d/suburb/xkx/huashan/husun"
      }
    },
    "/d/suburb/xkx/huashan/path1": {
      "type": "ROOM",
      "short": "华山脚下",
      "exits": {
        "west": "/d/suburb/xkx/village/eexit",
        "north": "/d/suburb/xkx/huashan/yuquan",
        "southeast": "/d/suburb/xkx/huashan/shaluo"
      }
    },
    "/d/suburb/xkx/huashan/qianchi": {
      "type": "ROOM",
      "short": "千尺幢",
      "exits": {
        "westdown": "/d/suburb/xkx/huashan/qingke",
        "southup": "/d/suburb/xkx/huashan/baichi"
      }
    },
    "/d/suburb/xkx/huashan/qingke": {
      "type": "ROOM",
      "short": "青柯坪",
      "exits": {
        "northdown": "/d/suburb/xkx/huashan/shaluo",
        "eastup": "/d/suburb/xkx/huashan/qianchi"
      }
    },
    "/d/suburb/xkx/huashan/shaluo": {
      "type": "ROOM",
      "short": "莎萝坪",
      "exits": {
        "northwest": "/d/suburb/xkx/huashan/path1",
        "southup": "/d/suburb/xkx/huashan/qingke"
      }
    },
    "/d/suburb/xkx/huashan/sheshen": {
      "type": "ROOM",
      "short": "舍身崖",
      "exits": {
        "eastdown": "/d/suburb/xkx/huashan/canglong"
      },
      "objects": {
        "/d/suburb/xkx/huashan/npc/referee": 1
      }
    },
    "/d/suburb/xkx/huashan/square": {
      "type": "ROOM",
      "short": "练武场",
      "exits": {
        "north": "/d/suburb/xkx/huashan/yunu",
        "south": "/d/suburb/xkx/huashan/buwei1"
      }
    },
    "/d/suburb/xkx/huashan/yunu": {
      "type": "ROOM",
      "short": "玉女峰",
      "exits": {
        "northdown": "/d/suburb/xkx/huashan/zhenyue",
        "east": "/d/suburb/xkx/huashan/yunuci",
        "south": "/d/suburb/xkx/huashan/square"
      }
    },
    "/d/suburb/xkx/huashan/yunuci": {
      "type": "ROOM",
      "short": "玉女祠",
      "exits": {
        "west": "/d/suburb/xkx/huashan/yunu"
      }
    },
    "/d/suburb/xkx/huashan/yuquan": {
      "type": "ROOM",
      "short": "玉泉院",
      "exits": {
        "south": "/d/suburb/xkx/huashan/path1"
      },
      "objects": {
        "/d/suburb/xkx/huashan/npc/teller": 1
      }
    },
    "/d/suburb/xkx/huashan/zhenyue": {
      "type": "ROOM",
      "short": "镇岳宫",
      "exits": {
        "northup": "/d/suburb/xkx/huashan/canglong",
        "eastup": "/d/suburb/xkx/huashan/chaoyang",
        "southup": "/d/suburb/xkx/huashan/yunu"
      }
    },
    "/d/suburb/xkx/quanzhou/beimen": {
      "type": "ROOM",
      "short": "泉州北门",
      "exits": {
        "north": "/d/suburb/xkx/quanzhou/qzroad5",
        "south": "/d/suburb/xkx/quanzhou/zhongxin"
      }
    },
    "/d/suburb/xkx/quanzhou/haigang": {
      "type": "ROOM",
      "short": "海港",
      "exits": {
        "west": "/d/suburb/xkx/quanzhou/zhongxin"
      },
      "objects": {
        "/d/suburb/xkx/quanzhou/npc/boy": 2,
        "/d/suburb/xkx/quanzhou/npc/girl": 1
      }
    },
    "/d/suburb/xkx/quanzhou/houyuan": {
      "type": "ROOM",
      "short": "老宅后院",
      "exits": {
        "down": "/d/suburb/xkx/quanzhou/well"
      }
    },
    "/d/suburb/xkx/quanzhou/jiaxing": {
      "type": "ROOM",
      "short": "嘉兴城",
      "exits": {
        "west": "/d/suburb/xkx/quanzhou/qzroad2",
        "east": "/d/suburb/xkx/quanzhou/nanhu",
        "south": "/d/suburb/xkx/quanzhou/jxnanmen"
      }
    },
    "/d/suburb/xkx/quanzhou/jxnanmen": {
      "type": "ROOM",
      "short": "嘉兴南门",
      "exits": {
        "north": "/d/suburb/xkx/quanzhou/jiaxing",
        "east": "/d/suburb/xkx/quanzhou/tieqiang",
        "south": "/d/suburb/xkx/quanzhou/qzroad4"
      }
    },
    "/d/suburb/xkx/quanzhou/laozhai": {
      "type": "ROOM",
      "short": "向阳老宅",
      "exits": {
        "south": "/d/suburb/xkx/quanzhou/xijie"
      }
    },
    "/d/suburb/xkx/quanzhou/liang": {
      "type": "ROOM",
      "short": "密室房梁",
      "exits": {
        "down": "/d/suburb/xkx/quanzhou/mishi"
      },
      "objects": {
        "/d/suburb/xkx/quanzhou/obj/jiasha": 1,
        "/d/suburb/xkx/xingxiu/npc/snake": 1
      }
    },
    "/d/suburb/xkx/quanzhou/midao": {
      "type": "ROOM",
      "short": "密道",
      "exits": {
        "out": "/d/suburb/xkx/quanzhou/well"
      }
    },
    "/d/suburb/xkx/quanzhou/mishi": {
      "type": "ROOM",
      "short": "密室",
      "exits": {
        "out": "/d/suburb/xkx/quanzhou/midao"
      },
      "objects": {
        "/d/suburb/xkx/quanzhou/obj/tiexiang": 1
      }
    },
    "/d/suburb/xkx/quanzhou/nanhu": {
      "type": "ROOM",
      "short": "嘉兴南湖",
      "exits": {
        "west": "/d/suburb/xkx/quanzhou/jiaxing",
        "south": "/d/suburb/xkx/quanzhou/tieqiang",
        "southeast": "/d/suburb/xkx/quanzhou/nanhu1"
      },
      "objects": {
        "/d/suburb/xkx/quanzhou/npc/limochou": 1
      }
    },
    "/d/suburb/xkx/quanzhou/nanhu1": {
      "type": "ROOM",
      "short": "嘉兴南湖",
      "exits": {
        "south": "/d/suburb/xkx/quanzhou/yanyu",
        "northwest": "/d/suburb/xkx/quanzhou/nanhu"
      }
    },
    "/d/suburb/xkx/quanzhou/nanmen": {
      "type": "ROOM",
      "short": "泉州南门",
      "exits": {
        "north": "/d/suburb/xkx/quanzhou/zhongxin"
      }
    },
    "/d/suburb/xkx/quanzhou/pig/gong": {
      "type": "ROOM",
      "short": "拱猪王宫",
      "exits": {
        "sl": "/d/suburb/xkx/shaolin/guangchang1",
        "wn": "/d/suburb/xkx/wudang/sanqingdian",
        "xx": "/d/suburb/xkx/xingxiu/xxh2",
        "gb": "/d/suburb/xkx/city/gbxiaowu",
        "kd": "/d/suburb/xkx/city/kedian",
        "qz": "/d/suburb/xkx/quanzhou/zhongxin"
      },
      "objects": {
        "/d/suburb/xkx/quanzhou/pig/obj/cleansword": 1,
        "/d/suburb/xkx/quanzhou/pig/obj/marz": 1,
        "/d/suburb/xkx/quanzhou/pig/obj/rover": 1,
        "/d/suburb/xkx/quanzhou/pig/obj/xiang": 1
      }
    },
    "/d/suburb/xkx/quanzhou/qzroad1": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "northwest": "/d/suburb/xkx/taishan/yidao1",
        "south": "/d/suburb/xkx/quanzhou/qzroad2"
      }
    },
    "/d/suburb/xkx/quanzhou/qzroad2": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "north": "/d/suburb/xkx/quanzhou/qzroad1",
        "east": "/d/suburb/xkx/quanzhou/jiaxing",
        "south": "/d/suburb/xkx/quanzhou/qzroad3"
      }
    },
    "/d/suburb/xkx/quanzhou/qzroad3": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "north": "/d/suburb/xkx/quanzhou/qzroad2",
        "east": "/d/suburb/xkx/quanzhou/qzroad4"
      }
    },
    "/d/suburb/xkx/quanzhou/qzroad4": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "north": "/d/suburb/xkx/quanzhou/jxnanmen",
        "west": "/d/suburb/xkx/quanzhou/qzroad3",
        "south": "/d/suburb/xkx/quanzhou/qzroad5"
      }
    },
    "/d/suburb/xkx/quanzhou/qzroad5": {
      "type": "ROOM",
      "short": "武夷山路",
      "exits": {
        "north": "/d/suburb/xkx/quanzhou/qzroad4",
        "south": "/d/suburb/xkx/quanzhou/beimen"
      },
      "objects": {
        "/d/suburb/xkx/wudang/npc/yetu": 2
      }
    },
    "/d/suburb/xkx/quanzhou/tieqiang": {
      "type": "ROOM",
      "short": "铁枪庙",
      "exits": {
        "west": "/d/suburb/xkx/quanzhou/jxnanmen",
        "north": "/d/suburb/xkx/quanzhou/nanhu"
      },
      "objects": {
        "/d/suburb/xkx/quanzhou/npc/wuya": 4
      }
    },
    "/d/suburb/xkx/quanzhou/well": {
      "type": "ROOM",
      "short": "井中",
      "exits": {
        "up": "/d/suburb/xkx/quanzhou/houyuan",
        "down": "/d/suburb/xkx/quanzhou/well1"
      }
    },
    "/d/suburb/xkx/quanzhou/well1": {
      "type": "ROOM",
      "short": "井底",
      "exits": {
        "up": "/d/suburb/xkx/quanzhou/well"
      }
    },
    "/d/suburb/xkx/quanzhou/xijie": {
      "type": "ROOM",
      "short": "西街",
      "exits": {
        "east": "/d/suburb/xkx/quanzhou/zhongxin",
        "north": "/d/suburb/xkx/quanzhou/laozhai",
        "west": "/d/suburb/xkx/quanzhou/zahuopu"
      }
    },
    "/d/suburb/xkx/quanzhou/yanyu": {
      "type": "ROOM",
      "short": "烟雨楼",
      "exits": {
        "up": "/d/suburb/xkx/quanzhou/yanyu",
        "north": "/d/suburb/xkx/quanzhou/nanhu1"
      },
      "objects": {
        "/d/suburb/xkx/quanzhou/npc/xiaoer": 1
      }
    },
    "/d/suburb/xkx/quanzhou/zahuopu": {
      "type": "ROOM",
      "short": "杂货铺",
      "exits": {
        "east": "/d/suburb/xkx/quanzhou/xijie"
      },
      "objects": {
        "/d/suburb/xkx/quanzhou/npc/chen": 1
      }
    },
    "/d/suburb/xkx/quanzhou/zhongxin": {
      "type": "ROOM",
      "short": "城中心",
      "exits": {
        "north": "/d/suburb/xkx/quanzhou/beimen",
        "south": "/d/suburb/xkx/quanzhou/nanmen",
        "east": "/d/suburb/xkx/quanzhou/haigang",
        "west": "/d/suburb/xkx/quanzhou/xijie"
      }
    },
    "/d/suburb/xkx/shaolin/andao1": {
      "type": "ROOM",
      "short": "暗道",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/rukou",
        "north": "/d/suburb/xkx/shaolin/jianyu1"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/npc/ad-laoshu": 1
      }
    },
    "/d/suburb/xkx/shaolin/andao2": {
      "type": "ROOM",
      "short": "暗道",
      "exits": {
        "up": "/d/suburb/xkx/shaolin/gulou1"
      }
    },
    "/d/suburb/xkx/shaolin/andao3": {
      "type": "ROOM",
      "short": "暗道",
      "exits": {
        "up": "/d/suburb/xkx/shaolin/zhonglou1",
        "enter": "/d/suburb/xkx/shaolin/bagua0"
      }
    },
    "/d/suburb/xkx/shaolin/bagua": {
      "type": "ROOM",
      "short": "八卦阵阵心",
      "exits": {
        "up": "/d/suburb/xkx/shaolin/andao3"
      }
    },
    "/d/suburb/xkx/shaolin/bagua0": {
      "type": "ROOM",
      "short": "八卦阵",
      "exits": {
        "乾": "/d/suburb/xkx/shaolin/bagua7",
        "巽": "/d/suburb/xkx/shaolin/bagua6",
        "离": "/d/suburb/xkx/shaolin/bagua5",
        "艮": "/d/suburb/xkx/shaolin/bagua4",
        "兑": "/d/suburb/xkx/shaolin/bagua3",
        "坎": "/d/suburb/xkx/shaolin/bagua2",
        "震": "/d/suburb/xkx/shaolin/bagua1",
        "坤": "/d/suburb/xkx/shaolin/bagua0"
      }
    },
    "/d/suburb/xkx/shaolin/bagua1": {
      "type": "ROOM",
      "short": "八卦阵",
      "exits": {
        "乾": "/d/suburb/xkx/shaolin/bagua7",
        "巽": "/d/suburb/xkx/shaolin/bagua6",
        "离": "/d/suburb/xkx/shaolin/bagua5",
        "艮": "/d/suburb/xkx/shaolin/bagua4",
        "兑": "/d/suburb/xkx/shaolin/bagua3",
        "坎": "/d/suburb/xkx/shaolin/bagua2",
        "震": "/d/suburb/xkx/shaolin/bagua1",
        "坤": "/d/suburb/xkx/shaolin/bagua0"
      }
    },
    "/d/suburb/xkx/shaolin/bagua2": {
      "type": "ROOM",
      "short": "八卦阵",
      "exits": {
        "乾": "/d/suburb/xkx/shaolin/bagua7",
        "巽": "/d/suburb/xkx/shaolin/bagua6",
        "离": "/d/suburb/xkx/shaolin/bagua5",
        "艮": "/d/suburb/xkx/shaolin/bagua4",
        "兑": "/d/suburb/xkx/shaolin/bagua3",
        "坎": "/d/suburb/xkx/shaolin/bagua2",
        "震": "/d/suburb/xkx/shaolin/bagua1",
        "坤": "/d/suburb/xkx/shaolin/bagua0"
      }
    },
    "/d/suburb/xkx/shaolin/bagua3": {
      "type": "ROOM",
      "short": "八卦阵",
      "exits": {
        "乾": "/d/suburb/xkx/shaolin/bagua7",
        "巽": "/d/suburb/xkx/shaolin/bagua6",
        "离": "/d/suburb/xkx/shaolin/bagua5",
        "艮": "/d/suburb/xkx/shaolin/bagua4",
        "兑": "/d/suburb/xkx/shaolin/bagua3",
        "坎": "/d/suburb/xkx/shaolin/bagua2",
        "震": "/d/suburb/xkx/shaolin/bagua1",
        "坤": "/d/suburb/xkx/shaolin/bagua0"
      }
    },
    "/d/suburb/xkx/shaolin/bagua4": {
      "type": "ROOM",
      "short": "八卦阵",
      "exits": {
        "乾": "/d/suburb/xkx/shaolin/bagua7",
        "巽": "/d/suburb/xkx/shaolin/bagua6",
        "离": "/d/suburb/xkx/shaolin/bagua5",
        "艮": "/d/suburb/xkx/shaolin/bagua4",
        "兑": "/d/suburb/xkx/shaolin/bagua3",
        "坎": "/d/suburb/xkx/shaolin/bagua2",
        "震": "/d/suburb/xkx/shaolin/bagua1",
        "坤": "/d/suburb/xkx/shaolin/bagua0"
      }
    },
    "/d/suburb/xkx/shaolin/bagua5": {
      "type": "ROOM",
      "short": "八卦阵",
      "exits": {
        "乾": "/d/suburb/xkx/shaolin/bagua7",
        "巽": "/d/suburb/xkx/shaolin/bagua6",
        "离": "/d/suburb/xkx/shaolin/bagua5",
        "艮": "/d/suburb/xkx/shaolin/bagua4",
        "兑": "/d/suburb/xkx/shaolin/bagua3",
        "坎": "/d/suburb/xkx/shaolin/bagua2",
        "震": "/d/suburb/xkx/shaolin/bagua1",
        "坤": "/d/suburb/xkx/shaolin/bagua0"
      }
    },
    "/d/suburb/xkx/shaolin/bagua6": {
      "type": "ROOM",
      "short": "八卦阵",
      "exits": {
        "乾": "/d/suburb/xkx/shaolin/bagua7",
        "巽": "/d/suburb/xkx/shaolin/bagua6",
        "离": "/d/suburb/xkx/shaolin/bagua5",
        "艮": "/d/suburb/xkx/shaolin/bagua4",
        "兑": "/d/suburb/xkx/shaolin/bagua3",
        "坎": "/d/suburb/xkx/shaolin/bagua2",
        "震": "/d/suburb/xkx/shaolin/bagua1",
        "坤": "/d/suburb/xkx/shaolin/bagua0"
      }
    },
    "/d/suburb/xkx/shaolin/bagua7": {
      "type": "ROOM",
      "short": "八卦阵",
      "exits": {
        "乾": "/d/suburb/xkx/shaolin/bagua7",
        "巽": "/d/suburb/xkx/shaolin/bagua6",
        "离": "/d/suburb/xkx/shaolin/bagua5",
        "艮": "/d/suburb/xkx/shaolin/bagua4",
        "兑": "/d/suburb/xkx/shaolin/bagua3",
        "坎": "/d/suburb/xkx/shaolin/bagua2",
        "震": "/d/suburb/xkx/shaolin/bagua1",
        "坤": "/d/suburb/xkx/shaolin/bagua0"
      }
    },
    "/d/suburb/xkx/shaolin/bamboo1": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "northeast": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "southwest": "/d/suburb/xkx/shaolin/bamboo2",
        "northwest": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "southeast": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "south": "/d/suburb/xkx/shaolin/qfdian"
      }
    },
    "/d/suburb/xkx/shaolin/bamboo10": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "north": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "south": "/d/suburb/xkx/shaolin/bamboo11",
        "east": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "west": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)"
      }
    },
    "/d/suburb/xkx/shaolin/bamboo11": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "west": "/d/suburb/xkx/shaolin/bamboo12",
        "south": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "north": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)"
      }
    },
    "/d/suburb/xkx/shaolin/bamboo12": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "north": "/d/suburb/xkx/shaolin/bamboo13",
        "east": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "west": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)"
      }
    },
    "/d/suburb/xkx/shaolin/bamboo13": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "northeast": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "northwest": "/d/suburb/xkx/shaolin/bamboo14",
        "southeast": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "southwest": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)"
      }
    },
    "/d/suburb/xkx/shaolin/bamboo14": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "north": "/d/suburb/xkx/shaolin/damodong",
        "east": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "west": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)"
      }
    },
    "/d/suburb/xkx/shaolin/bamboo2": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "northeast": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "southeast": "/d/suburb/xkx/shaolin/bamboo3",
        "northwest": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "southwest": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)"
      }
    },
    "/d/suburb/xkx/shaolin/bamboo3": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "north": "/d/suburb/xkx/shaolin/bamboo4",
        "east": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "west": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)"
      }
    },
    "/d/suburb/xkx/shaolin/bamboo4": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "north": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "south": "/d/suburb/xkx/shaolin/bamboo5",
        "east": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "west": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)"
      }
    },
    "/d/suburb/xkx/shaolin/bamboo5": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "west": "/d/suburb/xkx/shaolin/bamboo6",
        "south": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "north": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)"
      }
    },
    "/d/suburb/xkx/shaolin/bamboo6": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "east": "/d/suburb/xkx/shaolin/bamboo7",
        "south": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "north": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)"
      }
    },
    "/d/suburb/xkx/shaolin/bamboo7": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "west": "/d/suburb/xkx/shaolin/bamboo8",
        "south": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "north": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)"
      }
    },
    "/d/suburb/xkx/shaolin/bamboo8": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "east": "/d/suburb/xkx/shaolin/bamboo9",
        "south": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "north": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)"
      }
    },
    "/d/suburb/xkx/shaolin/bamboo9": {
      "type": "ROOM",
      "short": "竹林",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "east": "/d/suburb/xkx/shaolin/bamboo10",
        "south": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)",
        "north": "/d/suburb/xkx/shaolin/bamboo+(random(13)+1)"
      }
    },
    "/d/suburb/xkx/shaolin/banruo1": {
      "type": "ROOM",
      "short": "般若堂一部",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/zoulang1",
        "north": "/d/suburb/xkx/shaolin/banruo2"
      },
      "objects": {
        "CLASS_D(shaolin)+/cheng-xin": 1
      }
    },
    "/d/suburb/xkx/shaolin/banruo2": {
      "type": "ROOM",
      "short": "般若堂二部",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/banruo1",
        "north": "/d/suburb/xkx/shaolin/banruo3"
      },
      "objects": {
        "CLASS_D(shaolin)+/cheng-yi": 1
      }
    },
    "/d/suburb/xkx/shaolin/banruo3": {
      "type": "ROOM",
      "short": "般若堂三部",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/banruo2",
        "north": "/d/suburb/xkx/shaolin/banruo4"
      },
      "objects": {
        "CLASS_D(shaolin)+/cheng-si": 1
      }
    },
    "/d/suburb/xkx/shaolin/banruo4": {
      "type": "ROOM",
      "short": "般若堂四部",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/banruo3",
        "north": "/d/suburb/xkx/shaolin/banruo5"
      },
      "objects": {
        "CLASS_D(shaolin)+/cheng-shi": 1
      }
    },
    "/d/suburb/xkx/shaolin/banruo5": {
      "type": "ROOM",
      "short": "般若堂五部",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/wuchang1",
        "south": "/d/suburb/xkx/shaolin/banruo4",
        "north": "/d/suburb/xkx/shaolin/banruo6"
      },
      "objects": {
        "CLASS_D(shaolin)+/xuan-nan": 1,
        "CLASS_D(shaolin)+/cheng-zhi2": 1,
        "/d/suburb/xkx/shaolin/npc/xiao-nan": 1
      }
    },
    "/d/suburb/xkx/shaolin/banruo6": {
      "type": "ROOM",
      "short": "般若堂六部",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/banruo5",
        "north": "/d/suburb/xkx/shaolin/banruo7"
      },
      "objects": {
        "CLASS_D(shaolin)+/cheng-xin2": 1
      }
    },
    "/d/suburb/xkx/shaolin/banruo7": {
      "type": "ROOM",
      "short": "般若堂七部",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/banruo6",
        "north": "/d/suburb/xkx/shaolin/banruo8"
      },
      "objects": {
        "CLASS_D(shaolin)+/cheng-ling": 1
      }
    },
    "/d/suburb/xkx/shaolin/banruo8": {
      "type": "ROOM",
      "short": "般若堂八部",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/banruo7",
        "north": "/d/suburb/xkx/shaolin/banruo9"
      },
      "objects": {
        "CLASS_D(shaolin)+/cheng-yu": 1
      }
    },
    "/d/suburb/xkx/shaolin/banruo9": {
      "type": "ROOM",
      "short": "般若堂九部",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/banruo8",
        "northup": "/d/suburb/xkx/shaolin/zoulang5"
      },
      "objects": {
        "CLASS_D(shaolin)+/cheng-shang": 1
      }
    },
    "/d/suburb/xkx/shaolin/beilin1": {
      "type": "ROOM",
      "short": "东碑林",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/taijie"
      }
    },
    "/d/suburb/xkx/shaolin/beilin2": {
      "type": "ROOM",
      "short": "西碑林",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/taijie"
      }
    },
    "/d/suburb/xkx/shaolin/beilin3": {
      "type": "ROOM",
      "short": "地下室",
      "objects": {
        "/d/suburb/xkx/shaolin/obj/book-stone": 1
      }
    },
    "/d/suburb/xkx/shaolin/bydian": {
      "type": "ROOM",
      "short": "白衣殿",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/guangchang5"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/npc/mu-ren": 1
      }
    },
    "/d/suburb/xkx/shaolin/chufang": {
      "type": "ROOM",
      "short": "厨房",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/fanting1"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/npc/shaofan-seng": 2
      }
    },
    "/d/suburb/xkx/shaolin/chufang2": {
      "type": "ROOM",
      "short": "厨房",
      "exits": {
        "southwest": "/d/suburb/xkx/shaolin/houshan"
      }
    },
    "/d/suburb/xkx/shaolin/cjlou": {
      "type": "ROOM",
      "short": "藏经阁一楼",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/zhulin5",
        "up": "/d/suburb/xkx/shaolin/cjlou1"
      },
      "objects": {
        "CLASS_D(shaolin)+/dao-yi": 1,
        "/d/suburb/xkx/shaolin/obj/fojing1+random(2)": 1,
        "/d/suburb/xkx/shaolin/obj/fojing2+random(2)": 1
      }
    },
    "/d/suburb/xkx/shaolin/cjlou1": {
      "type": "ROOM",
      "short": "藏经阁二楼",
      "exits": {
        "down": "/d/suburb/xkx/shaolin/cjlou"
      },
      "objects": {
        "CLASS_D(shaolin)+/hui-zhen": 1,
        "/d/suburb/xkx/shaolin/obj/wuji1": 1,
        "/d/suburb/xkx/shaolin/obj/wuji2": 1,
        "/d/suburb/xkx/shaolin/obj/wuji3": 1
      }
    },
    "/d/suburb/xkx/shaolin/damodong": {
      "type": "ROOM",
      "short": "达摩洞",
      "exits": {
        "out": "/d/suburb/xkx/shaolin/bamboo1"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/obj/book-bamboo": 1
      }
    },
    "/d/suburb/xkx/shaolin/dmyuan": {
      "type": "ROOM",
      "short": "达摩院",
      "exits": {
        "southdown": "/d/suburb/xkx/shaolin/wuchang3",
        "north": "/d/suburb/xkx/shaolin/guangchang5",
        "up": "/d/suburb/xkx/shaolin/dmyuan2"
      }
    },
    "/d/suburb/xkx/shaolin/dmyuan2": {
      "type": "ROOM",
      "short": "达摩院二楼",
      "exits": {
        "down": "/d/suburb/xkx/shaolin/dmyuan"
      },
      "objects": {
        "CLASS_D(shaolin)+/xuan-bei": 1,
        "/d/suburb/xkx/shaolin/npc/xiao-bei": 1
      }
    },
    "/d/suburb/xkx/shaolin/duchuan": {
      "type": "ROOM",
      "short": "渡船"
    },
    "/d/suburb/xkx/shaolin/dxbdian": {
      "type": "ROOM",
      "short": "大雄宝殿",
      "exits": {
        "southdown": "/d/suburb/xkx/shaolin/guangchang2"
      },
      "objects": {
        "CLASS_D(shaolin)+/dao-zheng": 1,
        "/d/suburb/xkx/shaolin/npc/xiang-ke": 1
      }
    },
    "/d/suburb/xkx/shaolin/dzdian": {
      "type": "ROOM",
      "short": "地藏殿",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/guangchang5"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/npc/mu-ren": 1
      }
    },
    "/d/suburb/xkx/shaolin/fangjuku": {
      "type": "ROOM",
      "short": "防具库",
      "exits": {
        "north": "/d/suburb/xkx/shaolin/yaopinku",
        "south": "/d/suburb/xkx/shaolin/wuqiku"
      },
      "objects": {
        "CLASS_D(shaolin)+/dao-xiang": 1
      }
    },
    "/d/suburb/xkx/shaolin/fanting": {
      "type": "ROOM",
      "short": "斋厅",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/guangchang3",
        "north": "/d/suburb/xkx/shaolin/fanting1"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/obj/qingshui-hulu": 1,
        "names[random(sizeof(names))]": 1
      }
    },
    "/d/suburb/xkx/shaolin/fanting1": {
      "type": "ROOM",
      "short": "斋厅",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/fanting",
        "north": "/d/suburb/xkx/shaolin/chufang"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/obj/qingshui-hulu": 1,
        "names[random(sizeof(names))]": 1
      }
    },
    "/d/suburb/xkx/shaolin/fumoquan": {
      "type": "ROOM",
      "short": "金刚伏魔圈",
      "exits": {
        "out": "/d/suburb/xkx/shaolin/qyping"
      },
      "objects": {
        "CLASS_D(shaolin)+/du-nan": 1,
        "CLASS_D(shaolin)+/du-e": 1,
        "CLASS_D(shaolin)+/du-jie": 1
      }
    },
    "/d/suburb/xkx/shaolin/fzlou": {
      "type": "ROOM",
      "short": "方丈楼",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/wuchang",
        "up": "/d/suburb/xkx/shaolin/fzlou1",
        "north": "/d/suburb/xkx/shaolin/wuchang3",
        "east": "/d/suburb/xkx/shaolin/zoulang7",
        "west": "/d/suburb/xkx/shaolin/zoulang6"
      }
    },
    "/d/suburb/xkx/shaolin/fzlou1": {
      "type": "ROOM",
      "short": "茶室",
      "exits": {
        "north": "/d/suburb/xkx/shaolin/fzlou2",
        "down": "/d/suburb/xkx/shaolin/fzlou"
      },
      "objects": {
        "CLASS_D(shaolin)+/qing-le": 1
      }
    },
    "/d/suburb/xkx/shaolin/fzlou2": {
      "type": "ROOM",
      "short": "方丈室",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/fzlou1"
      },
      "objects": {
        "CLASS_D(shaolin)+/xuan-ci": 1
      }
    },
    "/d/suburb/xkx/shaolin/guangchang1": {
      "type": "ROOM",
      "short": "广场",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/guangchang1e",
        "south": "/d/suburb/xkx/shaolin/shijie11",
        "west": "/d/suburb/xkx/shaolin/guangchang1w"
      },
      "objects": {
        "CLASS_D(shaolin)+/qing-fa": 1
      }
    },
    "/d/suburb/xkx/shaolin/guangchang1e": {
      "type": "ROOM",
      "short": "广场",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/shulin1",
        "southdown": "/d/suburb/xkx/shaolin/shijie11",
        "west": "/d/suburb/xkx/shaolin/guangchang1"
      },
      "objects": {
        "CLASS_D(shaolin)+/qing-wu": 1
      }
    },
    "/d/suburb/xkx/shaolin/guangchang1w": {
      "type": "ROOM",
      "short": "广场",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/shulin1",
        "southdown": "/d/suburb/xkx/shaolin/shijie11",
        "east": "/d/suburb/xkx/shaolin/guangchang1"
      },
      "objects": {
        "CLASS_D(shaolin)+/qing-wei": 1
      }
    },
    "/d/suburb/xkx/shaolin/guangchang2": {
      "type": "ROOM",
      "short": "广场",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/twdian",
        "north": "/d/suburb/xkx/shaolin/guangchang3",
        "northup": "/d/suburb/xkx/shaolin/dxbdian",
        "east": "/d/suburb/xkx/shaolin/zhonglou",
        "west": "/d/suburb/xkx/shaolin/gulou"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/npc/xiang-ke": 1,
        "/d/suburb/xkx/shaolin/npc/seng-bing3": 2,
        "CLASS_D(shaolin)+/qing-shan": 1
      }
    },
    "/d/suburb/xkx/shaolin/guangchang3": {
      "type": "ROOM",
      "short": "勤修场",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/guangchang2",
        "north": "/d/suburb/xkx/shaolin/guangchang4",
        "northup": "/d/suburb/xkx/shaolin/jlyuan",
        "west": "/d/suburb/xkx/shaolin/fanting"
      }
    },
    "/d/suburb/xkx/shaolin/guangchang4": {
      "type": "ROOM",
      "short": "精进场",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/guangchang3",
        "northup": "/d/suburb/xkx/shaolin/houdian"
      },
      "objects": {
        "CLASS_D(shaolin)+/hui-kong": 1,
        "/d/suburb/xkx/shaolin/npc/seng-bing3": 2
      }
    },
    "/d/suburb/xkx/shaolin/guangchang5": {
      "type": "ROOM",
      "short": "广场",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/bydian",
        "west": "/d/suburb/xkx/shaolin/dzdian",
        "south": "/d/suburb/xkx/shaolin/wuchang3",
        "northup": "/d/suburb/xkx/shaolin/qfdian",
        "southup": "/d/suburb/xkx/shaolin/dmyuan"
      }
    },
    "/d/suburb/xkx/shaolin/gulou": {
      "type": "ROOM",
      "short": "鼓楼小院",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/guangchang2",
        "enter": "/d/suburb/xkx/shaolin/gulou1"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/npc/seng-bing3": 2
      }
    },
    "/d/suburb/xkx/shaolin/gulou1": {
      "type": "ROOM",
      "short": "鼓楼一层",
      "exits": {
        "up": "/d/suburb/xkx/shaolin/gulou2",
        "out": "/d/suburb/xkx/shaolin/gulou"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/npc/saodi-seng": 1
      }
    },
    "/d/suburb/xkx/shaolin/gulou2": {
      "type": "ROOM",
      "short": "鼓楼二层",
      "exits": {
        "up": "/d/suburb/xkx/shaolin/gulou3",
        "down": "/d/suburb/xkx/shaolin/gulou1"
      }
    },
    "/d/suburb/xkx/shaolin/gulou3": {
      "type": "ROOM",
      "short": "鼓楼三层",
      "exits": {
        "up": "/d/suburb/xkx/shaolin/gulou4",
        "down": "/d/suburb/xkx/shaolin/gulou2"
      }
    },
    "/d/suburb/xkx/shaolin/gulou4": {
      "type": "ROOM",
      "short": "鼓楼四层",
      "exits": {
        "up": "/d/suburb/xkx/shaolin/gulou5",
        "down": "/d/suburb/xkx/shaolin/gulou3"
      }
    },
    "/d/suburb/xkx/shaolin/gulou5": {
      "type": "ROOM",
      "short": "鼓楼五层",
      "exits": {
        "up": "/d/suburb/xkx/shaolin/gulou6",
        "down": "/d/suburb/xkx/shaolin/gulou4"
      }
    },
    "/d/suburb/xkx/shaolin/gulou6": {
      "type": "ROOM",
      "short": "鼓楼六层",
      "exits": {
        "up": "/d/suburb/xkx/shaolin/gulou7",
        "down": "/d/suburb/xkx/shaolin/gulou5"
      }
    },
    "/d/suburb/xkx/shaolin/gulou7": {
      "type": "ROOM",
      "short": "鼓楼七层",
      "exits": {
        "down": "/d/suburb/xkx/shaolin/gulou6"
      },
      "objects": {
        "CLASS_D(shaolin)+/qing-wen": 1
      }
    },
    "/d/suburb/xkx/shaolin/hanshui1": {
      "type": "ROOM",
      "short": "汉水南岸",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/yidao2"
      }
    },
    "/d/suburb/xkx/shaolin/hanshui2": {
      "type": "ROOM",
      "short": "汉水北岸",
      "exits": {
        "north": "/d/suburb/xkx/shaolin/nanyang"
      }
    },
    "/d/suburb/xkx/shaolin/hantan1": {
      "type": "ROOM",
      "short": "万古寒潭"
    },
    "/d/suburb/xkx/shaolin/hantan2": {
      "type": "ROOM",
      "short": "万古寒潭"
    },
    "/d/suburb/xkx/shaolin/hantan3": {
      "type": "ROOM",
      "short": "万古寒潭"
    },
    "/d/suburb/xkx/shaolin/houdian": {
      "type": "ROOM",
      "short": "后殿",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/zoulang2",
        "east": "/d/suburb/xkx/shaolin/zoulang3",
        "southdown": "/d/suburb/xkx/shaolin/guangchang4",
        "north": "/d/suburb/xkx/shaolin/wuchang"
      },
      "objects": {
        "CLASS_D(shaolin)+/hui-ru": 1,
        "/d/suburb/xkx/shaolin/npc/seng-bing3": 2
      }
    },
    "/d/suburb/xkx/shaolin/houshan": {
      "type": "ROOM",
      "short": "小院",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/xiaojing2",
        "north": "/d/suburb/xkx/shaolin/xiaowu",
        "northeast": "/d/suburb/xkx/shaolin/chufang2",
        "northwest": "/d/suburb/xkx/shaolin/zhushe"
      }
    },
    "/d/suburb/xkx/shaolin/hsyuan1": {
      "type": "ROOM",
      "short": "和尚院一部",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/wuchang3",
        "east": "/d/suburb/xkx/shaolin/zhulin1",
        "south": "/d/suburb/xkx/shaolin/zoulang7",
        "north": "/d/suburb/xkx/shaolin/hsyuan2"
      },
      "objects": {
        "CLASS_D(shaolin)+/hui-he": 1
      }
    },
    "/d/suburb/xkx/shaolin/hsyuan2": {
      "type": "ROOM",
      "short": "和尚院二部",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/zhulin2",
        "south": "/d/suburb/xkx/shaolin/hsyuan1",
        "north": "/d/suburb/xkx/shaolin/hsyuan3"
      },
      "objects": {
        "CLASS_D(shaolin)+/hui-xiu": 1
      }
    },
    "/d/suburb/xkx/shaolin/hsyuan3": {
      "type": "ROOM",
      "short": "和尚院三部",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/zhulin3",
        "south": "/d/suburb/xkx/shaolin/hsyuan2"
      },
      "objects": {
        "CLASS_D(shaolin)+/hui-se": 1
      }
    },
    "/d/suburb/xkx/shaolin/hsyuan4": {
      "type": "ROOM",
      "short": "和尚院四部",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/wuchang3",
        "west": "/d/suburb/xkx/shaolin/zhulin4",
        "south": "/d/suburb/xkx/shaolin/zoulang6",
        "north": "/d/suburb/xkx/shaolin/hsyuan5"
      },
      "objects": {
        "CLASS_D(shaolin)+/hui-xu": 1
      }
    },
    "/d/suburb/xkx/shaolin/hsyuan5": {
      "type": "ROOM",
      "short": "和尚院五部",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/zhulin5",
        "south": "/d/suburb/xkx/shaolin/hsyuan4",
        "north": "/d/suburb/xkx/shaolin/hsyuan6"
      },
      "objects": {
        "CLASS_D(shaolin)+/hui-ming": 1
      }
    },
    "/d/suburb/xkx/shaolin/hsyuan6": {
      "type": "ROOM",
      "short": "和尚院六部",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/zhulin6",
        "south": "/d/suburb/xkx/shaolin/hsyuan5"
      },
      "objects": {
        "CLASS_D(shaolin)+/hui-jie": 1
      }
    },
    "/d/suburb/xkx/shaolin/jianyu": {
      "type": "ROOM",
      "short": "监狱",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/jianyu1"
      },
      "objects": {
        "CLASS_D(shaolin)+/qing-yuan": 1,
        "/d/suburb/xkx/shaolin/obj/fojing1+random(2)": 1
      }
    },
    "/d/suburb/xkx/shaolin/jianyu1": {
      "type": "ROOM",
      "short": "监狱",
      "exits": {
        "north": "/d/suburb/xkx/shaolin/jianyu"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/npc/yu-zu": 1
      }
    },
    "/d/suburb/xkx/shaolin/jiebei": {
      "type": "ROOM",
      "short": "界碑",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/shulin14",
        "northup": "/d/suburb/xkx/shaolin/qyping"
      }
    },
    "/d/suburb/xkx/shaolin/jiulou1": {
      "type": "ROOM",
      "short": "迎宾楼",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/nanyang",
        "up": "/d/suburb/xkx/shaolin/jiulou2"
      }
    },
    "/d/suburb/xkx/shaolin/jiulou2": {
      "type": [
        "ROOM",
        "F_DEALER"
      ],
      "short": "迎宾楼二楼",
      "exits": {
        "down": "/d/suburb/xkx/shaolin/jiulou1"
      }
    },
    "/d/suburb/xkx/shaolin/jlyuan": {
      "type": "ROOM",
      "short": "戒律院",
      "exits": {
        "southdown": "/d/suburb/xkx/shaolin/guangchang3"
      },
      "objects": {
        "CLASS_D(shaolin)+/xuan-tong": 1,
        "/d/suburb/xkx/shaolin/npc/seng-bing2": 3,
        "/d/suburb/xkx/shaolin/npc/xiao-tong": 1
      }
    },
    "/d/suburb/xkx/shaolin/kedian1": {
      "type": "ROOM",
      "short": "悦来客栈",
      "objects": {
        "/d/suburb/xkx/shaolin/npc/xiao-er": 1
      },
      "exits": {
        "west": "/d/suburb/xkx/shaolin/nanyang",
        "up": "/d/suburb/xkx/shaolin/kedian2"
      }
    },
    "/d/suburb/xkx/shaolin/kedian2": {
      "type": "ROOM",
      "short": "客店二楼",
      "exits": {
        "down": "/d/suburb/xkx/shaolin/kedian1"
      }
    },
    "/d/suburb/xkx/shaolin/luohan1": {
      "type": "ROOM",
      "short": "罗汉堂一部",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/zoulang4",
        "north": "/d/suburb/xkx/shaolin/luohan2"
      },
      "objects": {
        "CLASS_D(shaolin)+/cheng-guan": 1
      }
    },
    "/d/suburb/xkx/shaolin/luohan2": {
      "type": "ROOM",
      "short": "罗汉堂二部",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/luohan1",
        "north": "/d/suburb/xkx/shaolin/luohan3"
      },
      "objects": {
        "CLASS_D(shaolin)+/cheng-zhi": 1
      }
    },
    "/d/suburb/xkx/shaolin/luohan3": {
      "type": "ROOM",
      "short": "罗汉堂三部",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/luohan2",
        "north": "/d/suburb/xkx/shaolin/luohan4"
      },
      "objects": {
        "CLASS_D(shaolin)+/cheng-ming": 1
      }
    },
    "/d/suburb/xkx/shaolin/luohan4": {
      "type": "ROOM",
      "short": "罗汉堂四部",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/luohan3",
        "north": "/d/suburb/xkx/shaolin/luohan5"
      },
      "objects": {
        "CLASS_D(shaolin)+/cheng-jing": 1
      }
    },
    "/d/suburb/xkx/shaolin/luohan5": {
      "type": "ROOM",
      "short": "罗汉堂五部",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/wuchang2",
        "south": "/d/suburb/xkx/shaolin/luohan4",
        "north": "/d/suburb/xkx/shaolin/luohan6"
      },
      "objects": {
        "CLASS_D(shaolin)+/xuan-ku": 1,
        "CLASS_D(shaolin)+/cheng-jian": 1,
        "/d/suburb/xkx/shaolin/npc/xiao-ku": 1
      }
    },
    "/d/suburb/xkx/shaolin/luohan6": {
      "type": "ROOM",
      "short": "罗汉堂六部",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/luohan5",
        "north": "/d/suburb/xkx/shaolin/luohan7"
      },
      "objects": {
        "CLASS_D(shaolin)+/cheng-xing": 1
      }
    },
    "/d/suburb/xkx/shaolin/luohan7": {
      "type": "ROOM",
      "short": "罗汉堂七部",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/luohan6",
        "north": "/d/suburb/xkx/shaolin/luohan8"
      },
      "objects": {
        "CLASS_D(shaolin)+/cheng-ji": 1
      }
    },
    "/d/suburb/xkx/shaolin/luohan8": {
      "type": "ROOM",
      "short": "罗汉堂八部",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/luohan7",
        "north": "/d/suburb/xkx/shaolin/luohan9"
      },
      "objects": {
        "CLASS_D(shaolin)+/cheng-mie": 1
      }
    },
    "/d/suburb/xkx/shaolin/luohan9": {
      "type": "ROOM",
      "short": "罗汉堂九部",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/luohan8",
        "northup": "/d/suburb/xkx/shaolin/zoulang8"
      },
      "objects": {
        "CLASS_D(shaolin)+/cheng-he": 1
      }
    },
    "/d/suburb/xkx/shaolin/nanyang": {
      "type": "ROOM",
      "short": "南阳城",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/hanshui2",
        "north": "/d/suburb/xkx/shaolin/yidao3",
        "east": "/d/suburb/xkx/shaolin/kedian1",
        "west": "/d/suburb/xkx/shaolin/jiulou1"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/npc/xiao-fan": 1
      }
    },
    "/d/suburb/xkx/shaolin/qfdian": {
      "type": "ROOM",
      "short": "千佛殿",
      "exits": {
        "southdown": "/d/suburb/xkx/shaolin/guangchang5",
        "north": "/d/suburb/xkx/shaolin/bamboo1"
      },
      "objects": {
        "CLASS_D(shaolin)+/qing-guan": 1
      }
    },
    "/d/suburb/xkx/shaolin/qyping": {
      "type": "ROOM",
      "short": "青云坪",
      "exits": {
        "southdown": "/d/suburb/xkx/shaolin/shulin14",
        "enter": "/d/suburb/xkx/shaolin/fumoquan"
      }
    },
    "/d/suburb/xkx/shaolin/rukou": {
      "type": "ROOM",
      "short": "五行洞入口",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/wuxing+random(5)",
        "north": "/d/suburb/xkx/shaolin/andao1"
      }
    },
    "/d/suburb/xkx/shaolin/ruzhou": {
      "type": "ROOM",
      "short": "汝州城",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/yidao3",
        "west": "/d/suburb/xkx/shaolin/shijie1"
      },
      "objects": {
        "/d/suburb/xkx/city/npc/wujiang": 1,
        "/d/suburb/xkx/city/npc/bing": 3
      }
    },
    "/d/suburb/xkx/shaolin/shanmen": {
      "type": "ROOM",
      "short": "少林寺",
      "exits": {
        "eastup": "/d/suburb/xkx/shaolin/shijie8",
        "west": "/d/suburb/xkx/shaolin/shijie7"
      },
      "objects": {
        "CLASS_D(shaolin)+/xu-tong": 1,
        "CLASS_D(shaolin)+/xu-ming": 1
      }
    },
    "/d/suburb/xkx/shaolin/shijie1": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/ruzhou",
        "west": "/d/suburb/xkx/shaolin/xiaojing1",
        "northup": "/d/suburb/xkx/shaolin/shijie2"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/npc/xiao-fan": 1,
        "/d/suburb/xkx/shaolin/npc/tiao-fu": 2
      }
    },
    "/d/suburb/xkx/shaolin/shijie10": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "southdown": "/d/suburb/xkx/shaolin/shijie9",
        "northup": "/d/suburb/xkx/shaolin/shijie11"
      }
    },
    "/d/suburb/xkx/shaolin/shijie11": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "southdown": "/d/suburb/xkx/shaolin/shijie10",
        "north": "/d/suburb/xkx/shaolin/guangchang1"
      }
    },
    "/d/suburb/xkx/shaolin/shijie2": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "southdown": "/d/suburb/xkx/shaolin/shijie1",
        "northup": "/d/suburb/xkx/shaolin/shijie3"
      }
    },
    "/d/suburb/xkx/shaolin/shijie3": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "southdown": "/d/suburb/xkx/shaolin/shijie2",
        "westup": "/d/suburb/xkx/shaolin/shijie4"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/npc/xiao-hai": 1
      }
    },
    "/d/suburb/xkx/shaolin/shijie4": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "northup": "/d/suburb/xkx/shaolin/shijie5",
        "eastdown": "/d/suburb/xkx/shaolin/shijie3"
      }
    },
    "/d/suburb/xkx/shaolin/shijie5": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "southdown": "/d/suburb/xkx/shaolin/shijie4",
        "northup": "/d/suburb/xkx/shaolin/shijie6"
      }
    },
    "/d/suburb/xkx/shaolin/shijie6": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "southdown": "/d/suburb/xkx/shaolin/shijie5",
        "northup": "/d/suburb/xkx/shaolin/shijie7"
      }
    },
    "/d/suburb/xkx/shaolin/shijie7": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "southdown": "/d/suburb/xkx/shaolin/shijie6",
        "east": "/d/suburb/xkx/shaolin/shanmen"
      }
    },
    "/d/suburb/xkx/shaolin/shijie8": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "westdown": "/d/suburb/xkx/shaolin/shanmen",
        "northup": "/d/suburb/xkx/shaolin/shijie9"
      }
    },
    "/d/suburb/xkx/shaolin/shijie9": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "southdown": "/d/suburb/xkx/shaolin/shijie8",
        "northup": "/d/suburb/xkx/shaolin/shijie10"
      }
    },
    "/d/suburb/xkx/shaolin/shikong": {
      "type": "ROOM",
      "short": "时空",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/shulin1"
      },
      "objects": {
        "CLASS_D(shaolin)+/shikong": 1
      }
    },
    "/d/suburb/xkx/shaolin/shulin1": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/shulin+(random(10)+2)",
        "south": "/d/suburb/xkx/shaolin/shulin2",
        "west": "/d/suburb/xkx/shaolin/shulin2",
        "north": "/d/suburb/xkx/shaolin/shulin+(random(10)+2)"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/obj/fake-gold": 1
      }
    },
    "/d/suburb/xkx/shaolin/shulin10": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)",
        "south": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)",
        "west": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)",
        "north": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/npc/seng-bing1": 3
      }
    },
    "/d/suburb/xkx/shaolin/shulin11": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)",
        "south": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)",
        "west": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)",
        "north": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)"
      }
    },
    "/d/suburb/xkx/shaolin/shulin12": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)",
        "south": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)",
        "west": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)",
        "north": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)"
      }
    },
    "/d/suburb/xkx/shaolin/shulin13": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)",
        "south": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)",
        "west": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)",
        "north": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)"
      }
    },
    "/d/suburb/xkx/shaolin/shulin14": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/shulin+(random(10)+2)",
        "south": "/d/suburb/xkx/shaolin/qyping",
        "west": "/d/suburb/xkx/shaolin/shulin8",
        "north": "/d/suburb/xkx/shaolin/shulin+(random(10)+2)"
      }
    },
    "/d/suburb/xkx/shaolin/shulin2": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/shulin3",
        "south": "/d/suburb/xkx/shaolin/shulin+(random(10)+2)",
        "west": "/d/suburb/xkx/shaolin/shulin1",
        "north": "/d/suburb/xkx/shaolin/shulin+(random(10)+2)"
      }
    },
    "/d/suburb/xkx/shaolin/shulin3": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/shulin2",
        "south": "/d/suburb/xkx/shaolin/shulin4",
        "west": "/d/suburb/xkx/shaolin/shulin+(random(10)+2)",
        "north": "/d/suburb/xkx/shaolin/shulin+(random(10)+2)"
      }
    },
    "/d/suburb/xkx/shaolin/shulin4": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/shulin5",
        "south": "/d/suburb/xkx/shaolin/shulin+(random(10)+2)",
        "west": "/d/suburb/xkx/shaolin/shulin+(random(10)+2)",
        "north": "/d/suburb/xkx/shaolin/shulin3"
      }
    },
    "/d/suburb/xkx/shaolin/shulin5": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/shulin+(random(10)+2)",
        "south": "/d/suburb/xkx/shaolin/shulin4",
        "west": "/d/suburb/xkx/shaolin/shulin+(random(10)+2)",
        "north": "/d/suburb/xkx/shaolin/shulin6"
      }
    },
    "/d/suburb/xkx/shaolin/shulin6": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/shulin5",
        "south": "/d/suburb/xkx/shaolin/shulin+(random(10)+2)",
        "west": "/d/suburb/xkx/shaolin/shulin+(random(10)+2)",
        "north": "/d/suburb/xkx/shaolin/shulin7"
      }
    },
    "/d/suburb/xkx/shaolin/shulin7": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/shulin8",
        "south": "/d/suburb/xkx/shaolin/shulin+(random(10)+2)",
        "west": "/d/suburb/xkx/shaolin/shulin+(random(10)+2)",
        "north": "/d/suburb/xkx/shaolin/shulin6"
      }
    },
    "/d/suburb/xkx/shaolin/shulin8": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/shulin7",
        "south": "/d/suburb/xkx/shaolin/shulin+(random(10)+2)",
        "west": "/d/suburb/xkx/shaolin/shulin14",
        "north": "/d/suburb/xkx/shaolin/shulin+(random(10)+2)"
      }
    },
    "/d/suburb/xkx/shaolin/shulin9": {
      "type": "ROOM",
      "short": "松树林",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)",
        "south": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)",
        "west": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)",
        "north": "/d/suburb/xkx/shaolin/shulin+(random(8)+6)"
      }
    },
    "/d/suburb/xkx/shaolin/smdian": {
      "type": "ROOM",
      "short": "山门殿",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/smdian1",
        "west": "/d/suburb/xkx/shaolin/smdian2",
        "north": "/d/suburb/xkx/shaolin/taijie"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/npc/seng-bing3": 2,
        "/d/suburb/xkx/shaolin/npc/xiang-ke": 1
      }
    },
    "/d/suburb/xkx/shaolin/smdian1": {
      "type": "ROOM",
      "short": "东侧殿",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/smdian"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/obj/muchui": 1
      }
    },
    "/d/suburb/xkx/shaolin/smdian2": {
      "type": "ROOM",
      "short": "西侧殿",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/smdian"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/obj/muchui": 1
      }
    },
    "/d/suburb/xkx/shaolin/taijie": {
      "type": "ROOM",
      "short": "台阶",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/beilin1",
        "south": "/d/suburb/xkx/shaolin/smdian",
        "west": "/d/suburb/xkx/shaolin/beilin2",
        "northup": "/d/suburb/xkx/shaolin/twdian"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/npc/xiang-ke": 1
      }
    },
    "/d/suburb/xkx/shaolin/twdian": {
      "type": "ROOM",
      "short": "天王殿",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/twdian1",
        "west": "/d/suburb/xkx/shaolin/twdian2",
        "southdown": "/d/suburb/xkx/shaolin/taijie",
        "north": "/d/suburb/xkx/shaolin/guangchang2"
      },
      "objects": {
        "CLASS_D(shaolin)+/dao-guo": 1,
        "/d/suburb/xkx/shaolin/npc/xiang-ke": 1
      }
    },
    "/d/suburb/xkx/shaolin/twdian1": {
      "type": "ROOM",
      "short": "东侧殿",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/twdian"
      }
    },
    "/d/suburb/xkx/shaolin/twdian2": {
      "type": "ROOM",
      "short": "西侧殿",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/twdian"
      }
    },
    "/d/suburb/xkx/shaolin/woshi": {
      "type": "ROOM",
      "short": "卧室",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/xiaowu"
      }
    },
    "/d/suburb/xkx/shaolin/wuchang": {
      "type": "ROOM",
      "short": "练武场",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/houdian",
        "east": "/d/suburb/xkx/shaolin/wuchang2",
        "west": "/d/suburb/xkx/shaolin/wuchang1",
        "north": "/d/suburb/xkx/shaolin/fzlou"
      },
      "objects": {
        "CLASS_D(shaolin)+/dao-jue": 1
      }
    },
    "/d/suburb/xkx/shaolin/wuchang1": {
      "type": "ROOM",
      "short": "练武场",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/zoulang2",
        "west": "/d/suburb/xkx/shaolin/banruo5",
        "east": "/d/suburb/xkx/shaolin/wuchang",
        "north": "/d/suburb/xkx/shaolin/zoulang6"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/npc/mu-ren": 1
      }
    },
    "/d/suburb/xkx/shaolin/wuchang2": {
      "type": "ROOM",
      "short": "练武场",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/zoulang3",
        "west": "/d/suburb/xkx/shaolin/wuchang",
        "east": "/d/suburb/xkx/shaolin/luohan5",
        "north": "/d/suburb/xkx/shaolin/zoulang7"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/npc/mu-ren": 1
      }
    },
    "/d/suburb/xkx/shaolin/wuchang3": {
      "type": "ROOM",
      "short": "练武场",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/fzlou",
        "east": "/d/suburb/xkx/shaolin/hsyuan1",
        "west": "/d/suburb/xkx/shaolin/hsyuan4",
        "north": "/d/suburb/xkx/shaolin/guangchang5",
        "northup": "/d/suburb/xkx/shaolin/dmyuan"
      },
      "objects": {
        "CLASS_D(shaolin)+/dao-cheng": 1,
        "/d/suburb/xkx/shaolin/npc/mu-ren": 1
      }
    },
    "/d/suburb/xkx/shaolin/wuqiku": {
      "type": "ROOM",
      "short": "武器库",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/zhulin2",
        "north": "/d/suburb/xkx/shaolin/fangjuku"
      },
      "objects": {
        "CLASS_D(shaolin)+/dao-chen": 1,
        "/d/suburb/xkx/shaolin/npc/datie-seng": 1,
        "/d/suburb/xkx/shaolin/obj/zhujian": 1,
        "/d/suburb/xkx/shaolin/obj/mudao": 1
      }
    },
    "/d/suburb/xkx/shaolin/wuxing0": {
      "type": "ROOM",
      "short": "set(,HIY \"五行洞\" NOR);",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/wuxing4",
        "south": "/d/suburb/xkx/shaolin/wuxing3",
        "west": "/d/suburb/xkx/shaolin/wuxing1",
        "north": "/d/suburb/xkx/shaolin/wuxing2"
      }
    },
    "/d/suburb/xkx/shaolin/wuxing1": {
      "type": "ROOM",
      "short": "set(, HIG \"五行洞\" NOR);",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/wuxing0",
        "south": "/d/suburb/xkx/shaolin/wuxing3",
        "west": "/d/suburb/xkx/shaolin/wuxing4",
        "north": "/d/suburb/xkx/shaolin/wuxing2"
      }
    },
    "/d/suburb/xkx/shaolin/wuxing2": {
      "type": "ROOM",
      "short": "set(, HIB \"五行洞\" NOR);",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/wuxing1",
        "south": "/d/suburb/xkx/shaolin/wuxing4",
        "west": "/d/suburb/xkx/shaolin/wuxing0",
        "north": "/d/suburb/xkx/shaolin/wuxing3"
      }
    },
    "/d/suburb/xkx/shaolin/wuxing3": {
      "type": "ROOM",
      "short": "set(, HIR \"五行洞\" NOR);",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/wuxing1",
        "south": "/d/suburb/xkx/shaolin/wuxing2",
        "west": "/d/suburb/xkx/shaolin/wuxing0",
        "north": "/d/suburb/xkx/shaolin/wuxing4"
      }
    },
    "/d/suburb/xkx/shaolin/wuxing4": {
      "type": "ROOM",
      "short": "set(, HIW \"五行洞\" NOR);",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/wuxing1",
        "south": "/d/suburb/xkx/shaolin/wuxing3",
        "west": "/d/suburb/xkx/shaolin/wuxing0",
        "north": "/d/suburb/xkx/shaolin/wuxing2"
      }
    },
    "/d/suburb/xkx/shaolin/xiaojing1": {
      "type": "ROOM",
      "short": "山坡",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/shijie1",
        "northup": "/d/suburb/xkx/shaolin/xiaojing2"
      }
    },
    "/d/suburb/xkx/shaolin/xiaojing2": {
      "type": "ROOM",
      "short": "田埂边",
      "exits": {
        "southdown": "/d/suburb/xkx/shaolin/xiaojing1",
        "west": "/d/suburb/xkx/shaolin/houshan"
      }
    },
    "/d/suburb/xkx/shaolin/xiaowu": {
      "type": "ROOM",
      "short": "小土屋",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/houshan",
        "north": "/d/suburb/xkx/shaolin/woshi"
      }
    },
    "/d/suburb/xkx/shaolin/yaopinku": {
      "type": "ROOM",
      "short": "药品库",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/fangjuku"
      },
      "objects": {
        "CLASS_D(shaolin)+/dao-xiang2": 1
      }
    },
    "/d/suburb/xkx/shaolin/yidao": {
      "type": "ROOM",
      "short": "大驿道",
      "exits": {
        "south": "/d/suburb/xkx/village/hsroad2",
        "north": "/d/suburb/xkx/shaolin/yidao1"
      }
    },
    "/d/suburb/xkx/shaolin/yidao1": {
      "type": "ROOM",
      "short": "大驿道",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/yidao",
        "north": "/d/suburb/xkx/shaolin/yidao2"
      }
    },
    "/d/suburb/xkx/shaolin/yidao2": {
      "type": "ROOM",
      "short": "大驿道",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/yidao1",
        "north": "/d/suburb/xkx/shaolin/hanshui1"
      }
    },
    "/d/suburb/xkx/shaolin/yidao3": {
      "type": "ROOM",
      "short": "大驿道",
      "exits": {
        "south": "/d/suburb/xkx/shaolin/nanyang",
        "north": "/d/suburb/xkx/shaolin/ruzhou"
      }
    },
    "/d/suburb/xkx/shaolin/zhonglou": {
      "type": "ROOM",
      "short": "钟楼小院",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/guangchang2",
        "enter": "/d/suburb/xkx/shaolin/zhonglou1"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/npc/seng-bing3": 2
      }
    },
    "/d/suburb/xkx/shaolin/zhonglou1": {
      "type": "ROOM",
      "short": "钟楼一层",
      "exits": {
        "up": "/d/suburb/xkx/shaolin/zhonglou2",
        "out": "/d/suburb/xkx/shaolin/zhonglou"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/npc/saodi-seng": 1
      }
    },
    "/d/suburb/xkx/shaolin/zhonglou2": {
      "type": "ROOM",
      "short": "钟楼二层",
      "exits": {
        "up": "/d/suburb/xkx/shaolin/zhonglou3",
        "down": "/d/suburb/xkx/shaolin/zhonglou1"
      }
    },
    "/d/suburb/xkx/shaolin/zhonglou3": {
      "type": "ROOM",
      "short": "钟楼三层",
      "exits": {
        "up": "/d/suburb/xkx/shaolin/zhonglou4",
        "down": "/d/suburb/xkx/shaolin/zhonglou2"
      }
    },
    "/d/suburb/xkx/shaolin/zhonglou4": {
      "type": "ROOM",
      "short": "钟楼四层",
      "exits": {
        "up": "/d/suburb/xkx/shaolin/zhonglou5",
        "down": "/d/suburb/xkx/shaolin/zhonglou3"
      }
    },
    "/d/suburb/xkx/shaolin/zhonglou5": {
      "type": "ROOM",
      "short": "钟楼五层",
      "exits": {
        "up": "/d/suburb/xkx/shaolin/zhonglou6",
        "down": "/d/suburb/xkx/shaolin/zhonglou4"
      }
    },
    "/d/suburb/xkx/shaolin/zhonglou6": {
      "type": "ROOM",
      "short": "钟楼六层",
      "exits": {
        "up": "/d/suburb/xkx/shaolin/zhonglou7",
        "down": "/d/suburb/xkx/shaolin/zhonglou5"
      }
    },
    "/d/suburb/xkx/shaolin/zhonglou7": {
      "type": "ROOM",
      "short": "钟楼七层",
      "exits": {
        "down": "/d/suburb/xkx/shaolin/zhonglou6"
      },
      "objects": {
        "CLASS_D(shaolin)+/qing-xiao": 1
      }
    },
    "/d/suburb/xkx/shaolin/zhulin1": {
      "type": "ROOM",
      "short": "竹林小道",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/hsyuan1",
        "north": "/d/suburb/xkx/shaolin/zhulin2",
        "south": "/d/suburb/xkx/shaolin/zoulang8"
      }
    },
    "/d/suburb/xkx/shaolin/zhulin2": {
      "type": "ROOM",
      "short": "竹林小道",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/wuqiku",
        "west": "/d/suburb/xkx/shaolin/hsyuan2",
        "south": "/d/suburb/xkx/shaolin/zhulin1",
        "north": "/d/suburb/xkx/shaolin/zhulin3"
      }
    },
    "/d/suburb/xkx/shaolin/zhulin3": {
      "type": "ROOM",
      "short": "竹林小道",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/hsyuan3",
        "south": "/d/suburb/xkx/shaolin/zhulin2"
      }
    },
    "/d/suburb/xkx/shaolin/zhulin4": {
      "type": "ROOM",
      "short": "竹林小道",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/hsyuan4",
        "north": "/d/suburb/xkx/shaolin/zhulin5",
        "south": "/d/suburb/xkx/shaolin/zoulang5"
      }
    },
    "/d/suburb/xkx/shaolin/zhulin5": {
      "type": "ROOM",
      "short": "竹林小道",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/hsyuan5",
        "south": "/d/suburb/xkx/shaolin/zhulin4",
        "west": "/d/suburb/xkx/shaolin/cjlou",
        "north": "/d/suburb/xkx/shaolin/zhulin6"
      }
    },
    "/d/suburb/xkx/shaolin/zhulin6": {
      "type": "ROOM",
      "short": "竹林小道",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/hsyuan6",
        "south": "/d/suburb/xkx/shaolin/zhulin5"
      }
    },
    "/d/suburb/xkx/shaolin/zhushe": {
      "type": "ROOM",
      "short": "猪舍",
      "exits": {
        "southeast": "/d/suburb/xkx/shaolin/houshan"
      }
    },
    "/d/suburb/xkx/shaolin/zoulang1": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/zoulang2",
        "north": "/d/suburb/xkx/shaolin/banruo1"
      }
    },
    "/d/suburb/xkx/shaolin/zoulang2": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/zoulang1",
        "east": "/d/suburb/xkx/shaolin/houdian",
        "north": "/d/suburb/xkx/shaolin/wuchang1"
      }
    },
    "/d/suburb/xkx/shaolin/zoulang3": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/zoulang4",
        "west": "/d/suburb/xkx/shaolin/houdian",
        "north": "/d/suburb/xkx/shaolin/wuchang2"
      },
      "objects": {
        "CLASS_D(shaolin)+/dao-pin": 1
      }
    },
    "/d/suburb/xkx/shaolin/zoulang4": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/zoulang3",
        "north": "/d/suburb/xkx/shaolin/luohan1"
      }
    },
    "/d/suburb/xkx/shaolin/zoulang5": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/zoulang6",
        "north": "/d/suburb/xkx/shaolin/zhulin4",
        "southdown": "/d/suburb/xkx/shaolin/banruo9"
      }
    },
    "/d/suburb/xkx/shaolin/zoulang6": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/zoulang5",
        "east": "/d/suburb/xkx/shaolin/fzlou",
        "north": "/d/suburb/xkx/shaolin/hsyuan4",
        "south": "/d/suburb/xkx/shaolin/wuchang1"
      }
    },
    "/d/suburb/xkx/shaolin/zoulang7": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "east": "/d/suburb/xkx/shaolin/zoulang8",
        "west": "/d/suburb/xkx/shaolin/fzlou",
        "north": "/d/suburb/xkx/shaolin/hsyuan1",
        "south": "/d/suburb/xkx/shaolin/wuchang2"
      }
    },
    "/d/suburb/xkx/shaolin/zoulang8": {
      "type": "ROOM",
      "short": "走廊",
      "exits": {
        "west": "/d/suburb/xkx/shaolin/zoulang7",
        "north": "/d/suburb/xkx/shaolin/zhulin1",
        "southdown": "/d/suburb/xkx/shaolin/luohan9"
      }
    },
    "/d/suburb/xkx/taishan/baihe": {
      "type": "ROOM",
      "short": "白鹤泉",
      "exits": {
        "northup": "/d/suburb/xkx/taishan/yitian",
        "southdown": "/d/suburb/xkx/taishan/daizong"
      }
    },
    "/d/suburb/xkx/taishan/baozang": {
      "type": "ROOM",
      "short": "宝藏岭",
      "exits": {
        "westup": "/d/suburb/xkx/taishan/weipin"
      }
    },
    "/d/suburb/xkx/taishan/beitian": {
      "type": "ROOM",
      "short": "北天门",
      "exits": {
        "southdown": "/d/suburb/xkx/taishan/zhangren"
      }
    },
    "/d/suburb/xkx/taishan/bixia": {
      "type": "ROOM",
      "short": "碧霞祠",
      "exits": {
        "west": "/d/suburb/xkx/taishan/weipin",
        "eastdown": "/d/suburb/xkx/taishan/baozang"
      }
    },
    "/d/suburb/xkx/taishan/daizong": {
      "type": "ROOM",
      "short": "岱宗坊",
      "exits": {
        "northup": "/d/suburb/xkx/taishan/baihe",
        "south": "/d/suburb/xkx/taishan/yidao3"
      }
    },
    "/d/suburb/xkx/taishan/dongtian": {
      "type": "ROOM",
      "short": "东天门",
      "exits": {
        "west": "/d/suburb/xkx/taishan/tanhai"
      }
    },
    "/d/suburb/xkx/taishan/doumo": {
      "type": "ROOM",
      "short": "斗母宫",
      "exits": {
        "eastup": "/d/suburb/xkx/taishan/shijin",
        "southdown": "/d/suburb/xkx/taishan/yitian"
      },
      "objects": {
        "/d/suburb/xkx/taishan/npc/jian-ke": 1
      }
    },
    "/d/suburb/xkx/taishan/ertian": {
      "type": "ROOM",
      "short": "二天门",
      "exits": {
        "northup": "/d/suburb/xkx/taishan/wudafu",
        "southdown": "/d/suburb/xkx/taishan/huima"
      },
      "objects": {
        "/d/suburb/xkx/taishan/npc/tiao-fu": 1
      }
    },
    "/d/suburb/xkx/taishan/fengchan": {
      "type": "ROOM",
      "short": "封禅台",
      "exits": {
        "down": "/d/suburb/xkx/taishan/yuhuang",
        "east": "/d/suburb/xkx/taishan/xiayi",
        "west": "/d/suburb/xkx/taishan/zhengqi"
      },
      "objects": {
        "/d/obj/clone/npc/meng-zhu": 1,
        "/d/suburb/xkx/taishan/npc/wei-shi1": 4
      }
    },
    "/d/suburb/xkx/taishan/huima": {
      "type": "ROOM",
      "short": "回马岭",
      "exits": {
        "northup": "/d/suburb/xkx/taishan/ertian",
        "southdown": "/d/suburb/xkx/taishan/shijin"
      },
      "objects": {
        "/d/suburb/xkx/taishan/npc/tiao-fu": 1,
        "/d/suburb/xkx/taishan/npc/jian-ke": 1
      }
    },
    "/d/suburb/xkx/taishan/lianhua": {
      "type": "ROOM",
      "short": "莲花峰",
      "exits": {
        "westup": "/d/suburb/xkx/taishan/tianjie",
        "northup": "/d/suburb/xkx/taishan/shixin"
      }
    },
    "/d/suburb/xkx/taishan/longmen": {
      "type": "ROOM",
      "short": "龙门",
      "exits": {
        "northup": "/d/suburb/xkx/taishan/shengxian",
        "southdown": "/d/suburb/xkx/taishan/wudafu"
      }
    },
    "/d/suburb/xkx/taishan/nantian": {
      "type": "ROOM",
      "short": "南天门",
      "exits": {
        "northup": "/d/suburb/xkx/taishan/yuhuang",
        "southdown": "/d/suburb/xkx/taishan/shengxian"
      },
      "objects": {
        "/d/suburb/xkx/taishan/npc/jiang": 1,
        "/d/suburb/xkx/taishan/npc/wei-shi3": 2
      }
    },
    "/d/suburb/xkx/taishan/riguan": {
      "type": "ROOM",
      "short": "月观峰",
      "exits": {
        "westup": "/d/suburb/xkx/taishan/yuhuang",
        "eastup": "/d/suburb/xkx/taishan/tanhai"
      }
    },
    "/d/suburb/xkx/taishan/shengxian": {
      "type": "ROOM",
      "short": "升仙坊",
      "exits": {
        "northup": "/d/suburb/xkx/taishan/nantian",
        "southdown": "/d/suburb/xkx/taishan/longmen"
      }
    },
    "/d/suburb/xkx/taishan/shijin": {
      "type": "ROOM",
      "short": "石经峪",
      "exits": {
        "northup": "/d/suburb/xkx/taishan/huima",
        "westdown": "/d/suburb/xkx/taishan/doumo"
      },
      "objects": {
        "/d/suburb/xkx/taishan/npc/seng-ren": 1
      }
    },
    "/d/suburb/xkx/taishan/shixin": {
      "type": "ROOM",
      "short": "试心石",
      "exits": {
        "southdown": "/d/suburb/xkx/taishan/lianhua"
      }
    },
    "/d/suburb/xkx/taishan/tanhai": {
      "type": "ROOM",
      "short": "探海石",
      "exits": {
        "westdown": "/d/suburb/xkx/taishan/riguan",
        "east": "/d/suburb/xkx/taishan/dongtian"
      }
    },
    "/d/suburb/xkx/taishan/tianjie": {
      "type": "ROOM",
      "short": "天街",
      "exits": {
        "westdown": "/d/suburb/xkx/taishan/nantian",
        "eastup": "/d/suburb/xkx/taishan/weipin",
        "eastdown": "/d/suburb/xkx/taishan/lianhua"
      },
      "objects": {
        "/d/suburb/xkx/taishan/npc/xiao-fan": 2,
        "/d/suburb/xkx/taishan/npc/tiao-fu": 1
      }
    },
    "/d/suburb/xkx/taishan/weipin": {
      "type": "ROOM",
      "short": "围屏山",
      "exits": {
        "westdown": "/d/suburb/xkx/taishan/tianjie",
        "east": "/d/suburb/xkx/taishan/bixia"
      }
    },
    "/d/suburb/xkx/taishan/wudafu": {
      "type": "ROOM",
      "short": "五大夫松",
      "exits": {
        "northup": "/d/suburb/xkx/taishan/longmen",
        "southdown": "/d/suburb/xkx/taishan/ertian"
      }
    },
    "/d/suburb/xkx/taishan/xiayi": {
      "type": "ROOM",
      "short": "侠义厅",
      "exits": {
        "west": "/d/suburb/xkx/taishan/fengchan"
      },
      "objects": {
        "/d/obj/clone/npc/shang-shan": 1,
        "/d/suburb/xkx/taishan/npc/wei-shi2": 3
      }
    },
    "/d/suburb/xkx/taishan/xitian": {
      "type": "ROOM",
      "short": "西天门",
      "exits": {
        "southdown": "/d/suburb/xkx/taishan/yueguan"
      }
    },
    "/d/suburb/xkx/taishan/yidao": {
      "type": "ROOM",
      "short": "大驿道",
      "exits": {
        "west": "/d/suburb/xkx/city/dongmen",
        "east": "/d/suburb/xkx/taishan/yidao1"
      },
      "objects": {
        "/d/suburb/xkx/taishan/npc/tiao-fu": 1
      }
    },
    "/d/suburb/xkx/taishan/yidao1": {
      "type": "ROOM",
      "short": "大驿道",
      "exits": {
        "west": "/d/suburb/xkx/taishan/yidao",
        "northeast": "/d/suburb/xkx/taishan/yidao2",
        "southeast": "/d/suburb/xkx/quanzhou/qzroad1"
      },
      "objects": {
        "/d/suburb/xkx/taishan/npc/tangzi": 2,
        "/d/suburb/xkx/quanzhou/npc/hai": 1
      }
    },
    "/d/suburb/xkx/taishan/yidao2": {
      "type": "ROOM",
      "short": "大驿道",
      "exits": {
        "southwest": "/d/suburb/xkx/taishan/yidao1",
        "north": "/d/suburb/xkx/taishan/yidao3"
      },
      "objects": {
        "/d/suburb/xkx/taishan/npc/shu-sheng": 1
      }
    },
    "/d/suburb/xkx/taishan/yidao3": {
      "type": "ROOM",
      "short": "大驿道",
      "exits": {
        "south": "/d/suburb/xkx/taishan/yidao2",
        "north": "/d/suburb/xkx/taishan/daizong"
      },
      "objects": {
        "/d/suburb/xkx/taishan/npc/dao-ke": 1
      }
    },
    "/d/suburb/xkx/taishan/yitian": {
      "type": "ROOM",
      "short": "一天门",
      "exits": {
        "northup": "/d/suburb/xkx/taishan/doumo",
        "southdown": "/d/suburb/xkx/taishan/baihe"
      },
      "objects": {
        "/d/suburb/xkx/taishan/npc/dao-ke": 1
      }
    },
    "/d/suburb/xkx/taishan/yueguan": {
      "type": "ROOM",
      "short": "月观峰",
      "exits": {
        "east": "/d/suburb/xkx/taishan/nantian",
        "northup": "/d/suburb/xkx/taishan/xitian"
      }
    },
    "/d/suburb/xkx/taishan/yuhuang": {
      "type": "ROOM",
      "short": "玉皇顶",
      "exits": {
        "southdown": "/d/suburb/xkx/taishan/nantian",
        "eastdown": "/d/suburb/xkx/taishan/riguan",
        "west": "/d/suburb/xkx/taishan/zhangren",
        "up": "/d/suburb/xkx/taishan/fengchan"
      },
      "objects": {
        "/d/suburb/xkx/taishan/npc/wei-shi2": 3
      }
    },
    "/d/suburb/xkx/taishan/zhangren": {
      "type": "ROOM",
      "short": "丈人峰",
      "exits": {
        "east": "/d/suburb/xkx/taishan/yuhuang",
        "northup": "/d/suburb/xkx/taishan/beitian"
      },
      "objects": {
        "/d/suburb/xkx/taishan/npc/wei-shi1": 2
      }
    },
    "/d/suburb/xkx/taishan/zhengqi": {
      "type": "ROOM",
      "short": "正气厅",
      "exits": {
        "east": "/d/suburb/xkx/taishan/fengchan"
      },
      "objects": {
        "/d/obj/clone/npc/fa-e": 1,
        "/d/suburb/xkx/taishan/npc/wei-shi2": 3
      }
    },
    "/d/suburb/xkx/test/damodong": {
      "type": "ROOM",
      "short": "废井",
      "exits": {
        "out": "/d/suburb/xkx/wizard/wizard_room"
      },
      "objects": {
        "/d/suburb/xkx/shaolin/obj/book-bamboo": 1
      }
    },
    "/d/suburb/xkx/village/alley1": {
      "type": "ROOM",
      "short": "小巷",
      "exits": {
        "east": "/d/suburb/xkx/village/sroad3",
        "northwest": "/d/suburb/xkx/village/alley2"
      }
    },
    "/d/suburb/xkx/village/alley2": {
      "type": "ROOM",
      "short": "小巷尽头",
      "exits": {
        "southeast": "/d/suburb/xkx/village/alley1"
      },
      "objects": {
        "/d/suburb/xkx/village/npc/punk": 1,
        "/d/suburb/xkx/village/npc/dipi": 1
      }
    },
    "/d/suburb/xkx/village/bighouse1": {
      "type": "ROOM",
      "short": "前厅",
      "exits": {
        "west": "/d/suburb/xkx/village/sroad4",
        "east": "/d/suburb/xkx/village/bighouse2"
      }
    },
    "/d/suburb/xkx/village/bighouse2": {
      "type": "ROOM",
      "short": "内室",
      "exits": {
        "west": "/d/suburb/xkx/village/bighouse1"
      }
    },
    "/d/suburb/xkx/village/eexit": {
      "type": "ROOM",
      "short": "东村口",
      "exits": {
        "west": "/d/suburb/xkx/village/eroad1",
        "east": "/d/suburb/xkx/huashan/path1"
      },
      "objects": {
        "/d/suburb/xkx/village/npc/boy": 1
      }
    },
    "/d/suburb/xkx/village/ehouse1": {
      "type": "ROOM",
      "short": "草棚",
      "exits": {
        "north": "/d/suburb/xkx/village/eroad1"
      },
      "objects": {
        "/d/suburb/xkx/village/npc/seller": 1
      }
    },
    "/d/suburb/xkx/village/ehouse2": {
      "type": "ROOM",
      "short": "民宅",
      "exits": {
        "south": "/d/suburb/xkx/village/eroad2"
      },
      "objects": {
        "/d/suburb/xkx/village/npc/dibao": 1
      }
    },
    "/d/suburb/xkx/village/eroad1": {
      "type": "ROOM",
      "short": "碎石路",
      "exits": {
        "south": "/d/suburb/xkx/village/ehouse1",
        "east": "/d/suburb/xkx/village/eexit",
        "west": "/d/suburb/xkx/village/eroad2"
      }
    },
    "/d/suburb/xkx/village/eroad2": {
      "type": "ROOM",
      "short": "碎石路",
      "exits": {
        "east": "/d/suburb/xkx/village/eroad1",
        "west": "/d/suburb/xkx/village/eroad3",
        "north": "/d/suburb/xkx/village/ehouse2"
      }
    },
    "/d/suburb/xkx/village/eroad3": {
      "type": "ROOM",
      "short": "碎石路",
      "exits": {
        "north": "/d/suburb/xkx/village/shop",
        "south": "/d/suburb/xkx/village/smithy1",
        "east": "/d/suburb/xkx/village/eroad2.c",
        "west": "/d/suburb/xkx/village/square"
      },
      "objects": {
        "/d/suburb/xkx/village/npc/girl": 1
      }
    },
    "/d/suburb/xkx/village/hsroad1": {
      "type": "ROOM",
      "short": "青石大道",
      "exits": {
        "north": "/d/suburb/xkx/village/hsroad2",
        "south": "/d/suburb/xkx/city/beimen"
      }
    },
    "/d/suburb/xkx/village/hsroad2": {
      "type": "ROOM",
      "short": "青石大道",
      "exits": {
        "south": "/d/suburb/xkx/village/hsroad1",
        "north": "/d/suburb/xkx/shaolin/yidao",
        "northwest": "/d/suburb/xkx/village/hsroad3"
      }
    },
    "/d/suburb/xkx/village/hsroad3": {
      "type": "ROOM",
      "short": "黄土路",
      "exits": {
        "southeast": "/d/suburb/xkx/village/hsroad2",
        "north": "/d/suburb/xkx/village/sexit"
      }
    },
    "/d/suburb/xkx/village/nwhouse": {
      "type": "ROOM",
      "short": "民房",
      "exits": {
        "northeast": "/d/suburb/xkx/village/nwroad2"
      },
      "objects": {
        "/d/suburb/xkx/village/npc/cuihua": 1
      }
    },
    "/d/suburb/xkx/village/nwroad1": {
      "type": "ROOM",
      "short": "碎石路",
      "exits": {
        "west": "/d/suburb/xkx/village/wexit",
        "southeast": "/d/suburb/xkx/village/nwroad2",
        "northeast": "/d/suburb/xkx/village/temple1"
      }
    },
    "/d/suburb/xkx/village/nwroad2": {
      "type": "ROOM",
      "short": "碎石路",
      "exits": {
        "northwest": "/d/suburb/xkx/village/nwroad1",
        "southeast": "/d/suburb/xkx/village/square",
        "southwest": "/d/suburb/xkx/village/nwhouse"
      }
    },
    "/d/suburb/xkx/village/sexit": {
      "type": "ROOM",
      "short": "南村口",
      "exits": {
        "north": "/d/suburb/xkx/village/sroad1",
        "south": "/d/suburb/xkx/village/hsroad3"
      },
      "objects": {
        "/d/suburb/xkx/village/npc/dog": 1
      }
    },
    "/d/suburb/xkx/village/shack": {
      "type": "ROOM",
      "short": "民宅",
      "exits": {
        "south": "/d/suburb/xkx/village/wexit"
      },
      "objects": {
        "/d/suburb/xkx/village/npc/poorman": 1
      }
    },
    "/d/suburb/xkx/village/shop": {
      "type": "ROOM",
      "short": "杂货店",
      "exits": {
        "south": "/d/suburb/xkx/village/eroad3"
      },
      "objects": {
        "/d/suburb/xkx/village/npc/xiejian": 1
      }
    },
    "/d/suburb/xkx/village/shouse": {
      "type": "ROOM",
      "short": "小土房",
      "exits": {
        "west": "/d/suburb/xkx/village/sroad2"
      },
      "objects": {
        "/d/suburb/xkx/village/npc/oldwoman": 1
      }
    },
    "/d/suburb/xkx/village/smithy1": {
      "type": "ROOM",
      "short": "铁匠铺",
      "exits": {
        "east": "/d/suburb/xkx/village/smithy2",
        "north": "/d/suburb/xkx/village/eroad3"
      },
      "objects": {
        "/d/suburb/xkx/village/npc/smith": 1
      }
    },
    "/d/suburb/xkx/village/smithy2": {
      "type": "ROOM",
      "short": "小房间",
      "exits": {
        "west": "/d/suburb/xkx/village/smithy1"
      }
    },
    "/d/suburb/xkx/village/square": {
      "type": "ROOM",
      "short": "打谷场",
      "exits": {
        "northwest": "/d/suburb/xkx/village/nwroad2",
        "south": "/d/suburb/xkx/village/sroad4",
        "east": "/d/suburb/xkx/village/eroad3"
      },
      "objects": {
        "/d/suburb/xkx/village/npc/kid": 2
      }
    },
    "/d/suburb/xkx/village/sroad1": {
      "type": "ROOM",
      "short": "碎石路",
      "exits": {
        "north": "/d/suburb/xkx/village/sroad2",
        "south": "/d/suburb/xkx/village/sexit"
      },
      "objects": {
        "/d/suburb/xkx/village/npc/girl": 1,
        "/d/suburb/xkx/village/npc/boy": 1
      }
    },
    "/d/suburb/xkx/village/sroad2": {
      "type": "ROOM",
      "short": "碎石路",
      "exits": {
        "north": "/d/suburb/xkx/village/sroad3",
        "south": "/d/suburb/xkx/village/sroad1",
        "east": "/d/suburb/xkx/village/shouse"
      }
    },
    "/d/suburb/xkx/village/sroad3": {
      "type": "ROOM",
      "short": "碎石路",
      "exits": {
        "north": "/d/suburb/xkx/village/sroad4",
        "south": "/d/suburb/xkx/village/sroad2",
        "west": "/d/suburb/xkx/village/alley1"
      }
    },
    "/d/suburb/xkx/village/sroad4": {
      "type": "ROOM",
      "short": "碎石路",
      "exits": {
        "north": "/d/suburb/xkx/village/square",
        "south": "/d/suburb/xkx/village/sroad3",
        "east": "/d/suburb/xkx/village/bighouse1"
      }
    },
    "/d/suburb/xkx/village/temple1": {
      "type": "ROOM",
      "short": "玄坛庙",
      "exits": {
        "southwest": "/d/suburb/xkx/village/nwroad1"
      }
    },
    "/d/suburb/xkx/village/temple2": {
      "type": "ROOM",
      "short": "小棚子",
      "exits": {
        "west": "/d/suburb/xkx/village/temple1"
      },
      "objects": {
        "/d/suburb/xkx/village/npc/wang": 1
      }
    },
    "/d/suburb/xkx/village/wexit": {
      "type": "ROOM",
      "short": "西村口",
      "exits": {
        "east": "/d/suburb/xkx/village/nwroad1",
        "north": "/d/suburb/xkx/village/shack"
      },
      "objects": {
        "/d/suburb/xkx/village/npc/kid": 2
      }
    },
    "/d/suburb/xkx/wizard/guest_room": {
      "type": "ROOM",
      "short": "巫师会客室",
      "exits": {
        "up": "/d/suburb/xkx/wizard/wizard_room",
        "southeast": "/d/suburb/xkx/city/wumiao"
      }
    },
    "/d/suburb/xkx/wizard/wizard_room": {
      "type": "ROOM",
      "short": "巫师休息室",
      "exits": {
        "down": "/d/suburb/xkx/wizard/guest_room"
      }
    },
    "/d/suburb/xkx/wudang/cangjingge": {
      "type": "ROOM",
      "short": "藏经阁",
      "exits": {
        "southdown": "/d/suburb/xkx/wudang/xilang"
      },
      "objects": {
        "CLASS_D(wudang)+/daotong": 1,
        "/d/suburb/xkx/wudang/obj/+books[random(sizeof(books))]": 1
      }
    },
    "/d/suburb/xkx/wudang/chashi": {
      "type": "ROOM",
      "short": "茶室",
      "exits": {
        "north": "/d/suburb/xkx/wudang/donglang2"
      },
      "objects": {
        "/d/suburb/xkx/wudang/npc/xiaocui": 1,
        "/d/suburb/xkx/wudang/obj/mitao": 2,
        "/d/suburb/xkx/wudang/obj/xiangcha": 1
      }
    },
    "/d/suburb/xkx/wudang/donglang1": {
      "type": "ROOM",
      "short": "东厢走廊",
      "exits": {
        "east": "/d/suburb/xkx/wudang/donglang2",
        "west": "/d/suburb/xkx/wudang/sanqingdian"
      },
      "objects": {
        "CLASS_D(wudang)+/xi": 1
      }
    },
    "/d/suburb/xkx/wudang/donglang2": {
      "type": "ROOM",
      "short": "东厢走廊",
      "exits": {
        "east": "/d/suburb/xkx/wudang/liangongfang",
        "south": "/d/suburb/xkx/wudang/chashi",
        "west": "/d/suburb/xkx/wudang/donglang1"
      }
    },
    "/d/suburb/xkx/wudang/guangchang": {
      "type": "ROOM",
      "short": "武当广场",
      "exits": {
        "southdown": "/d/suburb/xkx/wudang/xuanwumen",
        "north": "/d/suburb/xkx/wudang/sanqingdian"
      },
      "objects": {
        "CLASS_D(wudang)+/daotong": 2
      }
    },
    "/d/suburb/xkx/wudang/houyuan": {
      "type": "ROOM",
      "short": "后院",
      "exits": {
        "north": "/d/suburb/xkx/wudang/xiaolu1",
        "south": "/d/suburb/xkx/wudang/sanqingdian"
      },
      "objects": {
        "CLASS_D(wudang)+/yu": 1
      }
    },
    "/d/suburb/xkx/wudang/liangongfang": {
      "type": "ROOM",
      "short": "练功房",
      "exits": {
        "west": "/d/suburb/xkx/wudang/donglang2"
      },
      "objects": {
        "/d/suburb/xkx/village/obj/zhujian": 1
      }
    },
    "/d/suburb/xkx/wudang/sanqingdian": {
      "type": "ROOM",
      "short": "三清殿",
      "exits": {
        "south": "/d/suburb/xkx/wudang/guangchang",
        "north": "/d/suburb/xkx/wudang/houyuan",
        "east": "/d/suburb/xkx/wudang/donglang1",
        "west": "/d/suburb/xkx/wudang/xilang"
      },
      "objects": {
        "CLASS_D(wudang)+/guxu": 1,
        "CLASS_D(wudang)+/song": 1
      }
    },
    "/d/suburb/xkx/wudang/shanmen": {
      "type": "ROOM",
      "short": "武当山门",
      "exits": {
        "east": "/d/suburb/xkx/wudang/wdroad8",
        "westup": "/d/suburb/xkx/wudang/shijie1"
      },
      "objects": {
        "/d/suburb/xkx/wudang/npc/guest": 1
      }
    },
    "/d/suburb/xkx/wudang/shijie1": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "eastdown": "/d/suburb/xkx/wudang/shanmen",
        "northup": "/d/suburb/xkx/wudang/shijie2"
      }
    },
    "/d/suburb/xkx/wudang/shijie2": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "southdown": "/d/suburb/xkx/wudang/shijie1",
        "northup": "/d/suburb/xkx/wudang/shijie3"
      },
      "objects": {
        "/d/suburb/xkx/wudang/npc/guest": 1
      }
    },
    "/d/suburb/xkx/wudang/shijie3": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "southdown": "/d/suburb/xkx/wudang/shijie2",
        "northup": "/d/suburb/xkx/wudang/xuanwumen"
      }
    },
    "/d/suburb/xkx/wudang/taoyuan/tyroad1": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "westup": "/d/suburb/xkx/wudang/taoyuan/guangchang",
        "east": "/d/suburb/xkx/wudang/taoyuan/tyroad2"
      }
    },
    "/d/suburb/xkx/wudang/taoyuan/tyroad2": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "west": "/d/suburb/xkx/wudang/taoyuan/tyroad1",
        "east": "/d/suburb/xkx/wudang/taoyuan/tyroad3"
      }
    },
    "/d/suburb/xkx/wudang/taoyuan/tyroad3": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "west": "/d/suburb/xkx/wudang/taoyuan/tyroad2",
        "eastdown": "/d/suburb/xkx/wudang/taoyuan/tyroad4"
      }
    },
    "/d/suburb/xkx/wudang/taoyuan/tyroad4": {
      "type": "ROOM",
      "short": "山路",
      "exits": {
        "westup": "/d/suburb/xkx/wudang/taoyuan/tyroad3",
        "southdown": "/d/suburb/xkx/wudang/taoyuan/tyroad5"
      }
    },
    "/d/suburb/xkx/wudang/taoyuan/tyroad5": {
      "type": "ROOM",
      "short": "崎岖山路",
      "exits": {
        "northtup": "/d/suburb/xkx/wudang/taoyuan/tyroad4",
        "westdown": "/d/suburb/xkx/wudang/taoyuan/tyroad6"
      }
    },
    "/d/suburb/xkx/wudang/taoyuan/tyroad6": {
      "type": "ROOM",
      "short": "崎岖山路",
      "exits": {
        "eastup": "/d/suburb/xkx/wudang/taoyuan/tyroad5",
        "southdown": "/d/suburb/xkx/wudang/taoyuan/tyroad7"
      }
    },
    "/d/suburb/xkx/wudang/taoyuan/tyroad7": {
      "type": "ROOM",
      "short": "崎岖山路",
      "exits": {
        "northup": "/d/suburb/xkx/wudang/taoyuan/tyroad6",
        "westdown": "/d/suburb/xkx/wudang/taoyuan/tyroad8"
      }
    },
    "/d/suburb/xkx/wudang/tufeiwo1": {
      "type": "ROOM",
      "short": "林中小路",
      "exits": {
        "south": "/d/suburb/xkx/wudang/tufeiwo2",
        "northdown": "/d/suburb/xkx/wudang/wdroad7"
      },
      "objects": {
        "/d/suburb/xkx/wudang/npc/tufei2": 2
      }
    },
    "/d/suburb/xkx/wudang/tufeiwo2": {
      "type": "ROOM",
      "short": "林中小路",
      "exits": {
        "east": "/d/suburb/xkx/wudang/tufeiwo3",
        "north": "/d/suburb/xkx/wudang/tufeiwo1"
      },
      "objects": {
        "/d/suburb/xkx/wudang/npc/tufei1": 3,
        "/d/suburb/xkx/wudang/npc/baibian": 1
      }
    },
    "/d/suburb/xkx/wudang/tufeiwo3": {
      "type": "ROOM",
      "short": "林中小路",
      "exits": {
        "west": "/d/suburb/xkx/wudang/tufeiwo2"
      },
      "objects": {
        "/d/suburb/xkx/wudang/npc/tufei1": 2,
        "/d/suburb/xkx/wudang/npc/tufeitou": 1
      }
    },
    "/d/suburb/xkx/wudang/tygate1": {
      "type": "ROOM",
      "short": "桃园篱笆",
      "exits": {
        "south": "/d/suburb/xkx/wudang/tyroad10"
      }
    },
    "/d/suburb/xkx/wudang/tygate2": {
      "type": "ROOM",
      "short": "桃园木门",
      "exits": {
        "north": "/d/suburb/xkx/wudang/tyroad10"
      }
    },
    "/d/suburb/xkx/wudang/tynroad": {
      "type": "ROOM",
      "short": "桃园小路",
      "exits": {
        "south": "/d/suburb/xkx/wudang/tyroad8"
      },
      "objects": {
        "/d/suburb/xkx/wudang/npc/+npcs[i]": 1
      }
    },
    "/d/suburb/xkx/wudang/tyroad1": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "westup": "/d/suburb/xkx/wudang/guangchang",
        "east": "/d/suburb/xkx/wudang/tyroad2"
      }
    },
    "/d/suburb/xkx/wudang/tyroad10": {
      "type": "ROOM",
      "short": "桃园小路",
      "exits": {
        "east": "/d/suburb/xkx/wudang/tyroad11",
        "west": "/d/suburb/xkx/wudang/tyroad9",
        "north": "/d/suburb/xkx/wudang/tygate1",
        "south": "/d/suburb/xkx/wudang/tygate2"
      }
    },
    "/d/suburb/xkx/wudang/tyroad11": {
      "type": "ROOM",
      "short": "桃园小路",
      "exits": {
        "west": "/d/suburb/xkx/wudang/tyroad10"
      },
      "objects": {
        "/d/suburb/xkx/wudang/npc/+npcs[i]": 1
      }
    },
    "/d/suburb/xkx/wudang/tyroad12": {
      "type": "ROOM",
      "short": "桃园小路",
      "exits": {
        "west": "/d/suburb/xkx/wudang/tyroad9"
      },
      "objects": {
        "/d/suburb/xkx/wudang/npc/+npcs[i]": 1
      }
    },
    "/d/suburb/xkx/wudang/tyroad2": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "west": "/d/suburb/xkx/wudang/tyroad1",
        "east": "/d/suburb/xkx/wudang/tyroad3"
      },
      "objects": {
        "/d/suburb/xkx/wudang/npc/guest": 1
      }
    },
    "/d/suburb/xkx/wudang/tyroad3": {
      "type": "ROOM",
      "short": "石阶",
      "exits": {
        "west": "/d/suburb/xkx/wudang/tyroad2",
        "eastdown": "/d/suburb/xkx/wudang/tyroad4"
      }
    },
    "/d/suburb/xkx/wudang/tyroad4": {
      "type": "ROOM",
      "short": "崎岖山路",
      "exits": {
        "westup": "/d/suburb/xkx/wudang/tyroad3",
        "southdown": "/d/suburb/xkx/wudang/tyroad5"
      },
      "objects": {
        "/d/suburb/xkx/wudang/npc/+npcs[i]": 1
      }
    },
    "/d/suburb/xkx/wudang/tyroad5": {
      "type": "ROOM",
      "short": "崎岖山路",
      "exits": {
        "northup": "/d/suburb/xkx/wudang/tyroad4",
        "eastdown": "/d/suburb/xkx/wudang/tyroad6"
      }
    },
    "/d/suburb/xkx/wudang/tyroad6": {
      "type": "ROOM",
      "short": "崎岖山路",
      "exits": {
        "westup": "/d/suburb/xkx/wudang/tyroad5",
        "southdown": "/d/suburb/xkx/wudang/tyroad7"
      },
      "objects": {
        "/d/suburb/xkx/wudang/npc/+npcs[i]": 1
      }
    },
    "/d/suburb/xkx/wudang/tyroad7": {
      "type": "ROOM",
      "short": "崎岖山路",
      "exits": {
        "northup": "/d/suburb/xkx/wudang/tyroad6",
        "eastdown": "/d/suburb/xkx/wudang/tyroad8"
      }
    },
    "/d/suburb/xkx/wudang/tyroad8": {
      "type": "ROOM",
      "short": "桃园小路",
      "exits": {
        "westup": "/d/suburb/xkx/wudang/tyroad7",
        "east": "/d/suburb/xkx/wudang/tyroad9",
        "north": "/d/suburb/xkx/wudang/tynroad",
        "south": "/d/suburb/xkx/wudang/tysroad"
      }
    },
    "/d/suburb/xkx/wudang/tyroad9": {
      "type": "ROOM",
      "short": "桃园小路",
      "exits": {
        "east": "/d/suburb/xkx/wudang/tyroad10",
        "west": "/d/suburb/xkx/wudang/tyroad8"
      }
    },
    "/d/suburb/xkx/wudang/tysroad": {
      "type": "ROOM",
      "short": "桃园小路",
      "exits": {
        "north": "/d/suburb/xkx/wudang/tyroad8"
      },
      "objects": {
        "/d/suburb/xkx/wudang/npc/+npcs[i]": 1
      }
    },
    "/d/suburb/xkx/wudang/wdroad1": {
      "type": "ROOM",
      "short": "青石大道",
      "exits": {
        "south": "/d/suburb/xkx/wudang/wdroad2",
        "north": "/d/suburb/xkx/city/nanmen"
      }
    },
    "/d/suburb/xkx/wudang/wdroad2": {
      "type": "ROOM",
      "short": "青石大道",
      "exits": {
        "south": "/d/suburb/xkx/wudang/wdroad3",
        "north": "/d/suburb/xkx/wudang/wdroad1"
      }
    },
    "/d/suburb/xkx/wudang/wdroad3": {
      "type": "ROOM",
      "short": "青石大道",
      "exits": {
        "south": "/d/suburb/xkx/wudang/wdroad4",
        "north": "/d/suburb/xkx/wudang/wdroad2"
      }
    },
    "/d/suburb/xkx/wudang/wdroad4": {
      "type": "ROOM",
      "short": "青石大道",
      "exits": {
        "south": "/d/suburb/xkx/wudang/wdroad5",
        "north": "/d/suburb/xkx/wudang/wdroad3"
      }
    },
    "/d/suburb/xkx/wudang/wdroad5": {
      "type": "ROOM",
      "short": "青石大道",
      "exits": {
        "southwest": "/d/suburb/xkx/wudang/wdroad6",
        "north": "/d/suburb/xkx/wudang/wdroad4"
      }
    },
    "/d/suburb/xkx/wudang/wdroad6": {
      "type": "ROOM",
      "short": "黄土路",
      "exits": {
        "northeast": "/d/suburb/xkx/wudang/wdroad5",
        "west": "/d/suburb/xkx/wudang/wdroad7"
      }
    },
    "/d/suburb/xkx/wudang/wdroad7": {
      "type": "ROOM",
      "short": "黄土路",
      "exits": {
        "east": "/d/suburb/xkx/wudang/wdroad6",
        "west": "/d/suburb/xkx/wudang/wdroad8",
        "southup": "/d/suburb/xkx/wudang/tufeiwo1"
      }
    },
    "/d/suburb/xkx/wudang/wdroad8": {
      "type": "ROOM",
      "short": "黄土路",
      "exits": {
        "east": "/d/suburb/xkx/wudang/wdroad7",
        "west": "/d/suburb/xkx/wudang/shanmen"
      },
      "objects": {
        "/d/suburb/xkx/wudang/npc/yetu": 2
      }
    },
    "/d/suburb/xkx/wudang/xiaolu1": {
      "type": "ROOM",
      "short": "林间小径",
      "exits": {
        "north": "/d/suburb/xkx/wudang/xiaolu2",
        "south": "/d/suburb/xkx/wudang/houyuan"
      }
    },
    "/d/suburb/xkx/wudang/xiaolu2": {
      "type": "ROOM",
      "short": "林间小径",
      "exits": {
        "north": "/d/suburb/xkx/wudang/xiaoyuan.c",
        "south": "/d/suburb/xkx/wudang/xiaolu1"
      }
    },
    "/d/suburb/xkx/wudang/xiaoyuan": {
      "type": "ROOM",
      "short": "后山小院",
      "exits": {
        "south": "/d/suburb/xkx/wudang/xiaolu2"
      },
      "objects": {
        "CLASS_D(wudang)+/zhang": 1
      }
    },
    "/d/suburb/xkx/wudang/xilang": {
      "type": "ROOM",
      "short": "西厢走廊",
      "exits": {
        "northup": "/d/suburb/xkx/wudang/cangjingge",
        "east": "/d/suburb/xkx/wudang/sanqingdian"
      }
    },
    "/d/suburb/xkx/wudang/xiuxishi": {
      "type": "ROOM",
      "short": "休息室"
    },
    "/d/suburb/xkx/wudang/xuanwumen": {
      "type": "ROOM",
      "short": "玄武门",
      "exits": {
        "southdown": "/d/suburb/xkx/wudang/shijie3",
        "northup": "/d/suburb/xkx/wudang/guangchang"
      },
      "objects": {
        "CLASS_D(wudang)+/zhike": 1
      }
    },
    "/d/suburb/xkx/xingxiu/beijiang": {
      "type": "ROOM",
      "short": "北疆小镇",
      "exits": {
        "west": "/d/suburb/xkx/xingxiu/store",
        "east": "/d/suburb/xkx/xingxiu/house",
        "northwest": "/d/suburb/xkx/xingxiu/saimachang",
        "southeast": "/d/suburb/xkx/xingxiu/shanjiao"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/woman": 2
      }
    },
    "/d/suburb/xkx/xingxiu/btshan": {
      "type": "ROOM",
      "short": "白驼山",
      "exits": {
        "east": "/d/suburb/xkx/xingxiu/shamo4",
        "westup": "/d/suburb/xkx/xingxiu/btshan1"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/ke": 1,
        "/d/suburb/xkx/xingxiu/npc/snake": 3
      }
    },
    "/d/suburb/xkx/xingxiu/btshan1": {
      "type": "ROOM",
      "short": "白驼山庄",
      "exits": {
        "eastdown": "/d/suburb/xkx/xingxiu/btshan"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/feng": 1,
        "/d/suburb/xkx/xingxiu/npc/snake": 5
      }
    },
    "/d/suburb/xkx/xingxiu/cangku": {
      "type": "ROOM",
      "short": "星宿派储藏室",
      "exits": {
        "out": "/d/suburb/xkx/xingxiu/xxroad5"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/obj/hulu": 2,
        "/d/suburb/xkx/xingxiu/obj/menghan_yao": 1,
        "/d/suburb/xkx/xingxiu/obj/dujing_1": 1,
        "/d/suburb/xkx/xingxiu/obj/xxqingxin-san": 1
      }
    },
    "/d/suburb/xkx/xingxiu/cave": {
      "type": "ROOM",
      "short": "山洞",
      "exits": {
        "out": "/d/suburb/xkx/xingxiu/tianroad5"
      }
    },
    "/d/suburb/xkx/xingxiu/house": {
      "type": "ROOM",
      "short": "巴依家院",
      "exits": {
        "west": "/d/suburb/xkx/xingxiu/beijiang",
        "east": "/d/suburb/xkx/xingxiu/house1"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/kid": 1,
        "/d/suburb/xkx/xingxiu/npc/bayi": 1
      }
    },
    "/d/suburb/xkx/xingxiu/house1": {
      "type": "ROOM",
      "short": "巴依家客厅",
      "exits": {
        "west": "/d/suburb/xkx/xingxiu/house"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/afanti": 1
      }
    },
    "/d/suburb/xkx/xingxiu/jiayuguan": {
      "type": "ROOM",
      "short": "嘉峪关",
      "exits": {
        "eastup": "/d/suburb/xkx/xingxiu/xxroad3.c",
        "west": "/d/suburb/xkx/xingxiu/silk1.c"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/wujiang": 1,
        "/d/suburb/xkx/xingxiu/npc/bing": 2
      }
    },
    "/d/suburb/xkx/xingxiu/luzhou": {
      "type": "ROOM",
      "short": "沙漠绿洲",
      "exits": {
        "northeast": "/d/suburb/xkx/xingxiu/shanjiao",
        "southwest": "/d/suburb/xkx/xingxiu/nanjiang3"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/obj/donkey": 1,
        "/d/suburb/xkx/xingxiu/npc/obj/hamigua": 2
      }
    },
    "/d/suburb/xkx/xingxiu/mogaoku": {
      "type": "ROOM",
      "short": "莫高窟",
      "exits": {
        "north": "/d/suburb/xkx/xingxiu/yueerquan"
      }
    },
    "/d/suburb/xkx/xingxiu/nanjiang": {
      "type": "ROOM",
      "short": "南疆沙漠",
      "exits": {
        "northeast": "/d/suburb/xkx/xingxiu/shanjiao",
        "southeast": "__FILE__",
        "southwest": "__FILE__",
        "northwest": "/d/suburb/xkx/xingxiu/nanjiang1",
        "north": "__FILE__",
        "west": "__FILE__",
        "south": "__FILE__",
        "east": "__FILE__"
      }
    },
    "/d/suburb/xkx/xingxiu/nanjiang1": {
      "type": "ROOM",
      "short": "南疆沙漠",
      "exits": {
        "northeast": "/d/suburb/xkx/xingxiu/nanjiang",
        "southeast": "__FILE__",
        "southwest": "/d/suburb/xkx/xingxiu/nanjiang2",
        "northwest": "__FILE__",
        "north": "__FILE__",
        "west": "__FILE__",
        "south": "__FILE__",
        "east": "__FILE__"
      }
    },
    "/d/suburb/xkx/xingxiu/nanjiang2": {
      "type": "ROOM",
      "short": "南疆沙漠",
      "exits": {
        "northeast": "/d/suburb/xkx/xingxiu/nanjiang",
        "southeast": "/d/suburb/xkx/xingxiu/nanjiang3",
        "southwest": "__FILE__",
        "northwest": "__FILE__",
        "north": "__FILE__",
        "west": "__FILE__",
        "south": "__FILE__",
        "east": "__FILE__"
      }
    },
    "/d/suburb/xkx/xingxiu/nanjiang3": {
      "type": "ROOM",
      "short": "南疆沙漠",
      "exits": {
        "northeast": "/d/suburb/xkx/xingxiu/luzhou",
        "southeast": "__FILE__",
        "southwest": "__FILE__",
        "northwest": "__FILE__",
        "north": "__FILE__",
        "west": "__FILE__",
        "south": "__FILE__",
        "east": "__FILE__"
      }
    },
    "/d/suburb/xkx/xingxiu/npc/btshan": {
      "type": "ROOM",
      "short": "白驼山",
      "exits": {
        "east": "/d/suburb/xkx/xingxiu/npc/shamo4",
        "west": "/d/suburb/xkx/xingxiu/npc/btshan1"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/npc/ke": 1,
        "/d/suburb/xkx/xingxiu/npc/npc/snake": 3
      }
    },
    "/d/suburb/xkx/xingxiu/riyuedong": {
      "type": "ROOM",
      "short": "日月洞",
      "exits": {
        "south": "/d/suburb/xkx/xingxiu/xxh2"
      },
      "objects": {
        "/daemon/class/xingxiu/ding": 1,
        "/d/suburb/xkx/xingxiu/npc/obj/tiegun": 1
      }
    },
    "/d/suburb/xkx/xingxiu/saimachang": {
      "type": "ROOM",
      "short": "赛马场",
      "exits": {
        "southeast": "/d/suburb/xkx/xingxiu/beijiang"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/alamuhan": 1
      }
    },
    "/d/suburb/xkx/xingxiu/shamo1": {
      "type": "ROOM",
      "short": "大沙漠",
      "exits": {
        "east": "__FILE__",
        "west": "/d/suburb/xkx/xingxiu/shamo2",
        "south": "/d/suburb/xkx/xingxiu/shamo3",
        "north": "/d/suburb/xkx/xingxiu/shamo4"
      }
    },
    "/d/suburb/xkx/xingxiu/shamo2": {
      "type": "ROOM",
      "short": "大沙漠",
      "exits": {
        "east": "__FILE__",
        "west": "/d/suburb/xkx/xingxiu/shamo3",
        "south": "/d/suburb/xkx/xingxiu/shamo4",
        "north": "/d/suburb/xkx/xingxiu/shamo1"
      }
    },
    "/d/suburb/xkx/xingxiu/shamo3": {
      "type": "ROOM",
      "short": "大沙漠",
      "exits": {
        "east": "__FILE__",
        "west": "/d/suburb/xkx/xingxiu/shamo4",
        "south": "/d/suburb/xkx/xingxiu/shamo1",
        "north": "/d/suburb/xkx/xingxiu/shamo2"
      }
    },
    "/d/suburb/xkx/xingxiu/shamo4": {
      "type": "ROOM",
      "short": "大沙漠",
      "exits": {
        "east": "__FILE__",
        "west": "/d/suburb/xkx/xingxiu/shamo1",
        "south": "/d/suburb/xkx/xingxiu/shamo2",
        "north": "/d/suburb/xkx/xingxiu/shamo3"
      }
    },
    "/d/suburb/xkx/xingxiu/shanjiao": {
      "type": "ROOM",
      "short": "天山脚下",
      "exits": {
        "westup": "/d/suburb/xkx/xingxiu/tianroad1",
        "northwest": "/d/suburb/xkx/xingxiu/beijiang",
        "southwest": "/d/suburb/xkx/xingxiu/nanjiang",
        "southeast": "/d/suburb/xkx/xingxiu/silk4"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/trader": 1
      }
    },
    "/d/suburb/xkx/xingxiu/shashan": {
      "type": "ROOM",
      "short": "鸣沙山",
      "exits": {
        "west": "/d/suburb/xkx/xingxiu/yueerquan",
        "northeast": "/d/suburb/xkx/xingxiu/silk3"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/shachong": 1
      }
    },
    "/d/suburb/xkx/xingxiu/silk1": {
      "type": "ROOM",
      "short": "丝绸之路",
      "exits": {
        "east": "/d/suburb/xkx/xingxiu/jiayuguan",
        "west": "/d/suburb/xkx/xingxiu/silk2"
      }
    },
    "/d/suburb/xkx/xingxiu/silk2": {
      "type": "ROOM",
      "short": "丝绸之路",
      "exits": {
        "east": "/d/suburb/xkx/xingxiu/silk1",
        "northwest": "/d/suburb/xkx/xingxiu/silk3"
      }
    },
    "/d/suburb/xkx/xingxiu/silk3": {
      "type": "ROOM",
      "short": "丝绸之路",
      "exits": {
        "southeast": "/d/suburb/xkx/xingxiu/silk2",
        "west": "/d/suburb/xkx/xingxiu/silk4"
      }
    },
    "/d/suburb/xkx/xingxiu/silk4": {
      "type": "ROOM",
      "short": "丝绸之路",
      "exits": {
        "east": "/d/suburb/xkx/xingxiu/silk3",
        "west": "/d/suburb/xkx/xingxiu/shamo1",
        "northwest": "/d/suburb/xkx/xingxiu/shanjiao"
      }
    },
    "/d/suburb/xkx/xingxiu/store": {
      "type": "ROOM",
      "short": "杂货铺",
      "exits": {
        "east": "/d/suburb/xkx/xingxiu/beijiang"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/maimaiti": 1
      }
    },
    "/d/suburb/xkx/xingxiu/tianroad1": {
      "type": "ROOM",
      "short": "天山山路",
      "exits": {
        "eastdown": "/d/suburb/xkx/xingxiu/shanjiao",
        "north": "/d/suburb/xkx/xingxiu/tianroad2",
        "westup": "/d/suburb/xkx/xingxiu/tianroad3"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/herdsman": 1
      }
    },
    "/d/suburb/xkx/xingxiu/tianroad2": {
      "type": "ROOM",
      "short": "天山山路",
      "exits": {
        "northdown": "/d/suburb/xkx/xingxiu/xxh1",
        "south": "/d/suburb/xkx/xingxiu/tianroad1"
      },
      "objects": {
        "/daemon/class/xingxiu/shihou": 1,
        "/d/suburb/xkx/xingxiu/npc/gushou": 1,
        "/d/suburb/xkx/xingxiu/npc/haoshou": 1,
        "/d/suburb/xkx/xingxiu/npc/boshou": 1
      }
    },
    "/d/suburb/xkx/xingxiu/tianroad3": {
      "type": "ROOM",
      "short": "天山山路",
      "exits": {
        "northup": "/d/suburb/xkx/xingxiu/xxroad4",
        "eastdown": "/d/suburb/xkx/xingxiu/tianroad1"
      },
      "objects": {
        "/daemon/class/xingxiu/azi": 1
      }
    },
    "/d/suburb/xkx/xingxiu/tianroad4": {
      "type": "ROOM",
      "short": "天山山路",
      "exits": {
        "westup": "/d/suburb/xkx/xingxiu/tianroad5"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/caiyaoren": 1,
        "/d/suburb/xkx/xingxiu/npc/obj/xuelian": 1
      }
    },
    "/d/suburb/xkx/xingxiu/tianroad5": {
      "type": "ROOM",
      "short": "天山山路",
      "exits": {
        "westup": "/d/suburb/xkx/xingxiu/tianroad6",
        "eastdown": "/d/suburb/xkx/xingxiu/tianroad4",
        "enter": "/d/suburb/xkx/xingxiu/cave"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/caiyaoren": 1
      }
    },
    "/d/suburb/xkx/xingxiu/tianroad6": {
      "type": "ROOM",
      "short": "天山顶峰",
      "exits": {
        "eastdown": "/d/suburb/xkx/xingxiu/tianroad5"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/snake": 2
      }
    },
    "/d/suburb/xkx/xingxiu/xiaoyao": {
      "type": "ROOM",
      "short": "逍遥洞",
      "exits": {
        "out": "/d/suburb/xkx/xingxiu/xxh6"
      }
    },
    "/d/suburb/xkx/xingxiu/xxh1": {
      "type": "ROOM",
      "short": "星宿海",
      "exits": {
        "north": "/d/suburb/xkx/xingxiu/xxh2",
        "southup": "/d/suburb/xkx/xingxiu/tianroad2"
      },
      "objects": {
        "/daemon/class/xingxiu/zhaixing": 1,
        "/d/suburb/xkx/xingxiu/npc/gushou": 1,
        "/d/suburb/xkx/xingxiu/npc/haoshou": 1,
        "/d/suburb/xkx/xingxiu/npc/boshou": 1
      }
    },
    "/d/suburb/xkx/xingxiu/xxh2": {
      "type": "ROOM",
      "short": "星宿海",
      "exits": {
        "north": "/d/suburb/xkx/xingxiu/riyuedong",
        "south": "/d/suburb/xkx/xingxiu/xxh1",
        "northeast": "/d/suburb/xkx/xingxiu/xxh3",
        "northwest": "/d/suburb/xkx/xingxiu/xxh4"
      }
    },
    "/d/suburb/xkx/xingxiu/xxh3": {
      "type": "ROOM",
      "short": "星宿海",
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/gushou": 1
      },
      "exits": {
        "southwest": "/d/suburb/xkx/xingxiu/xxh2",
        "northwest": "/d/suburb/xkx/xingxiu/xxh5"
      }
    },
    "/d/suburb/xkx/xingxiu/xxh4": {
      "type": "ROOM",
      "short": "星宿海",
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/haoshou": 1
      },
      "exits": {
        "southeast": "/d/suburb/xkx/xingxiu/xxh2",
        "northeast": "/d/suburb/xkx/xingxiu/xxh5",
        "west": "/d/suburb/xkx/xingxiu/xxh6"
      }
    },
    "/d/suburb/xkx/xingxiu/xxh5": {
      "type": "ROOM",
      "short": "星宿海",
      "exits": {
        "southeast": "/d/suburb/xkx/xingxiu/xxh3",
        "southwest": "/d/suburb/xkx/xingxiu/xxh4"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/boshou": 1,
        "/d/suburb/xkx/xingxiu/npc/obj/yangrou.c": 2
      }
    },
    "/d/suburb/xkx/xingxiu/xxh6": {
      "type": "ROOM",
      "short": "石道",
      "exits": {
        "east": "/d/suburb/xkx/xingxiu/xxh4",
        "enter": "/d/suburb/xkx/xingxiu/xiaoyao"
      },
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/caihua": 1
      }
    },
    "/d/suburb/xkx/xingxiu/xxroad1": {
      "type": "ROOM",
      "short": "大道",
      "exits": {
        "east": "/d/suburb/xkx/city/ximen",
        "west": "/d/suburb/xkx/xingxiu/xxroad2"
      }
    },
    "/d/suburb/xkx/xingxiu/xxroad2": {
      "type": "ROOM",
      "short": "大道",
      "exits": {
        "east": "/d/suburb/xkx/xingxiu/xxroad1",
        "northup": "/d/suburb/xkx/xingxiu/xxroad3"
      }
    },
    "/d/suburb/xkx/xingxiu/xxroad3": {
      "type": "ROOM",
      "short": "六盘山",
      "exits": {
        "westdown": "/d/suburb/xkx/xingxiu/jiayuguan",
        "southdown": "/d/suburb/xkx/xingxiu/xxroad2"
      }
    },
    "/d/suburb/xkx/xingxiu/xxroad4": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "southdown": "/d/suburb/xkx/xingxiu/tianroad3",
        "north": "/d/suburb/xkx/xingxiu/xxroad5"
      }
    },
    "/d/suburb/xkx/xingxiu/xxroad5": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "south": "/d/suburb/xkx/xingxiu/xxroad4",
        "enter": "/d/suburb/xkx/xingxiu/cangku",
        "north": "/d/suburb/xkx/xingxiu/xxroad6"
      },
      "objects": {
        "/daemon/class/xingxiu/chuchen": 1
      }
    },
    "/d/suburb/xkx/xingxiu/xxroad6": {
      "type": "ROOM",
      "short": "山间平地",
      "objects": {
        "/d/suburb/xkx/xingxiu/npc/obj/yangrou.c": 3
      },
      "exits": {
        "south": "/d/suburb/xkx/xingxiu/xxroad5"
      }
    },
    "/d/suburb/xkx/xingxiu/xxroad7": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "southeast": "/d/suburb/xkx/xingxiu/xxroad6",
        "west": "/d/suburb/xkx/xingxiu/xxroad8"
      }
    },
    "/d/suburb/xkx/xingxiu/xxroad8": {
      "type": "ROOM",
      "short": "小路",
      "exits": {
        "east": "/d/suburb/xkx/xingxiu/xxroad7",
        "west": "/d/suburb/xkx/xingxiu/xxh1"
      }
    },
    "/d/suburb/xkx/xingxiu/yueerquan": {
      "type": "ROOM",
      "short": "月儿泉",
      "exits": {
        "east": "/d/suburb/xkx/xingxiu/shashan"
      }
    },
    "/d/westway/dadao": {
      "type": "ROOM",
      "short": "大道",
      "exits": {
        "east": "/d/westway/jincheng",
        "west": "/d/westway/yongjing"
      }
    },
    "/d/westway/fenghuo": {
      "type": "ROOM",
      "short": "烽火台",
      "exits": {
        "northdown": "/d/westway/jiayu"
      }
    },
    "/d/westway/jiayu": {
      "type": "ROOM",
      "short": "嘉峪关",
      "exits": {
        "east": "/d/westway/shizhan",
        "west": "dir+baoxiang/yelu8",
        "southup": "/d/westway/fenghuo"
      },
      "objects": {
        "/d/westway/npc/wujiang": 2
      }
    },
    "/d/westway/jincheng": {
      "type": "ROOM",
      "short": "金城郡南",
      "exits": {
        "west": "/d/westway/dadao",
        "southeast": "/d/westway/west3",
        "northeast": "/d/moon/xiaolu3"
      },
      "objects": {
        "/d/westway/npc/tanfan": 1
      }
    },
    "/d/westway/jiuquan": {
      "type": "ROOM",
      "short": "酒泉郊外",
      "exits": {
        "east": "/d/westway/madao",
        "west": "/d/westway/shizhan",
        "northup": "/d/westway/yunti"
      }
    },
    "/d/westway/lu1": {
      "type": "ROOM",
      "short": "山洞内",
      "exits": {
        "south": "/d/westway/shizhan",
        "north": "/d/westway/lu2"
      },
      "objects": {
        "/d/westway/obj/tielong": 1
      }
    },
    "/d/westway/lu2": {
      "type": "ROOM",
      "short": "山洞内",
      "exits": {
        "south": "/d/westway/lu1",
        "north": "/d/westway/lu3"
      }
    },
    "/d/westway/lu3": {
      "type": "ROOM",
      "short": "大厅",
      "exits": {
        "south": "/d/westway/lu2"
      },
      "objects": {
        "/d/westway/npc/yin": 1,
        "/d/westway/npc/xiong": 1,
        "/d/westway/npc/niu": 1
      }
    },
    "/d/westway/madao": {
      "type": "ROOM",
      "short": "马道",
      "exits": {
        "southeast": "/d/westway/yinma",
        "west": "/d/westway/jiuquan"
      }
    },
    "/d/westway/pingyang": {
      "type": "ROOM",
      "short": "平阳道",
      "exits": {
        "northeast": "/d/westway/yongjing",
        "west": "/d/westway/yinma"
      }
    },
    "/d/westway/shandong": {
      "type": "ROOM",
      "short": "山洞里",
      "exits": {
        "out": "/d/westway/yunti"
      },
      "objects": {
        "/d/westway/npc/laoren": 1
      }
    },
    "/d/westway/shizhan": {
      "type": "ROOM",
      "short": "石栈道",
      "exits": {
        "east": "/d/westway/jiuquan",
        "west": "/d/westway/jiayu"
      }
    },
    "/d/westway/tielong": {
      "type": "ROOM",
      "short": "铁笼中",
      "exits": {}
    },
    "/d/westway/west1": {
      "type": "ROOM",
      "short": "大官道",
      "exits": {
        "east": "/d/city/ximen",
        "west": "/d/westway/west2"
      }
    },
    "/d/westway/west2": {
      "type": "ROOM",
      "short": "大官道",
      "exits": {
        "east": "/d/westway/west1",
        "west": "/d/westway/west3"
      }
    },
    "/d/westway/west3": {
      "type": "ROOM",
      "short": "大官道",
      "exits": {
        "east": "/d/westway/west2",
        "northwest": "/d/westway/jincheng"
      }
    },
    "/d/westway/yinma": {
      "type": "ROOM",
      "short": "饮马峪",
      "exits": {
        "east": "/d/westway/pingyang",
        "northwest": "/d/westway/madao"
      },
      "objects": {
        "/d/westway/npc/madao": 1
      }
    },
    "/d/westway/yongjing": {
      "type": "ROOM",
      "short": "永靖",
      "exits": {
        "east": "/d/westway/dadao",
        "southwest": "/d/westway/pingyang"
      }
    },
    "/d/westway/yunti": {
      "type": "ROOM",
      "short": "云梯冈",
      "exits": {
        "enter": "/d/westway/shandong",
        "southdown": "/d/westway/jiuquan",
        "north": "/d/qujing/wuzhuang/shanlu1"
      }
    },
    "/d/wiz/courthouse": {
      "type": "ROOM",
      "short": "法院",
      "objects": {
        "/d/wiz/npc/judge": 1
      }
    },
    "/d/wiz/entrance": {
      "type": "ROOM",
      "short": "国宾馆大厅",
      "exits": {
        "north": "/d/wiz/system",
        "east": "/d/city/xuanwu-n3"
      }
    },
    "/d/wiz/gongtang": {
      "type": "ROOM",
      "short": "公堂",
      "objects": {
        "/d/wiz/npc/baogong": 1
      }
    },
    "/d/wiz/guest": {
      "type": "ROOM",
      "short": "迎客厅",
      "objects": {
        "/d/wiz/npc/guest": 1
      }
    },
    "/d/wiz/jobroom": {
      "type": "ROOM",
      "short": "工作进度简报室",
      "exits": {
        "south": "/d/wiz/wizroom.c",
        "west": "/d/wiz/menpai_room"
      }
    },
    "/d/wiz/menpai_room": {
      "type": "ROOM",
      "short": "门派讨论室",
      "exits": {
        "east": "/d/wiz/jobroom"
      }
    },
    "/d/wiz/punish": {
      "type": "ROOM",
      "short": "死牢"
    },
    "/d/wiz/sleeveroom": {
      "type": "ROOM",
      "short": "Sleeve Room",
      "exits": {
        "north": "/d/wiz/wizroom"
      }
    },
    "/d/wiz/system": {
      "type": "ROOM",
      "short": "系统公告室",
      "exits": {
        "east": "/d/wiz/wizroom",
        "south": "/d/wiz/entrance"
      }
    },
    "/d/wiz/wizroom": {
      "type": "ROOM",
      "short": "巫师会议厅",
      "exits": {
        "west": "/d/wiz/system",
        "north": "/d/wiz/jobroom",
        "sleeve": "/d/wiz/sleeveroom",
        "guest": "/d/wiz/guest",
        "jail": "/d/wiz/punish",
        "kz": "/d/city/kezhan"
      }
    },
    "/d/xueshan/bingchuan": {
      "type": "ROOM",
      "short": "冰川",
      "exits": {
        "south": "/d/xueshan/xueshan6",
        "north": "/d/xueshan/binggukou",
        "west": "/d/xueshan/bingchuan",
        "east": "/d/xueshan/bingchuan"
      },
      "objects": {}
    },
    "/d/xueshan/binggu": {
      "type": "ROOM",
      "short": "冰谷",
      "exits": {
        "north": "/d/xueshan/wuchang-s",
        "west": "/d/xueshan/wroad1",
        "east": "/d/xueshan/eroad1"
      },
      "objects": {
        "/d/xueshan/npc/zhangmen": 1
      }
    },
    "/d/xueshan/binggukou": {
      "type": "ROOM",
      "short": "冰谷口",
      "exits": {
        "south": "/d/xueshan/bingchuan",
        "north": "/d/xueshan/bingya-up7",
        "west": "/d/xueshan/bingchuan",
        "east": "/d/xueshan/bingchuan"
      },
      "objects": {}
    },
    "/d/xueshan/bingya-up1": {
      "type": "ROOM",
      "short": "冰崖上",
      "exits": {},
      "objects": {}
    },
    "/d/xueshan/bingya-up2": {
      "type": "ROOM",
      "short": "冰崖上",
      "exits": {},
      "objects": {}
    },
    "/d/xueshan/bingya-up3": {
      "type": "ROOM",
      "short": "冰崖上",
      "exits": {},
      "objects": {}
    },
    "/d/xueshan/bingya-up4": {
      "type": "ROOM",
      "short": "冰崖上",
      "exits": {},
      "objects": {}
    },
    "/d/xueshan/bingya-up5": {
      "type": "ROOM",
      "short": "冰崖上",
      "exits": {},
      "objects": {}
    },
    "/d/xueshan/bingya-up6": {
      "type": "ROOM",
      "short": "冰崖上",
      "exits": {},
      "objects": {}
    },
    "/d/xueshan/bingya-up7": {
      "type": "ROOM",
      "short": "冰崖上",
      "exits": {},
      "objects": {}
    },
    "/d/xueshan/boyroom": {
      "type": "ROOM",
      "short": "男弟子卧房",
      "exits": {
        "south": "/d/xueshan/restroom"
      },
      "objects": {}
    },
    "/d/xueshan/chufang": {
      "type": "ROOM",
      "short": "厨房",
      "exits": {
        "south": "/d/xueshan/eroad3",
        "west": "/d/xueshan/wuchang-e"
      },
      "objects": {
        "/d/xueshan/npc/xiaozuanfeng": 1
      }
    },
    "/d/xueshan/dixiashi": {
      "type": "ROOM",
      "short": "地下室",
      "exits": {},
      "objects": {
        "/d/xueshan/npc/dapeng": 1
      }
    },
    "/d/xueshan/eroad1": {
      "type": "ROOM",
      "short": "冰崖底",
      "exits": {
        "west": "/d/xueshan/binggu",
        "east": "/d/xueshan/eroad2"
      },
      "objects": {
        "/d/obj/misc/ice": 2
      }
    },
    "/d/xueshan/eroad2": {
      "type": "ROOM",
      "short": "小木屋外",
      "exits": {
        "south": "/d/xueshan/xiaomuwu",
        "west": "/d/xueshan/eroad1",
        "east": "/d/xueshan/eroad3"
      },
      "objects": {
        "/d/xueshan/npc/xunshi": 1
      }
    },
    "/d/xueshan/eroad3": {
      "type": "ROOM",
      "short": "冰崖底",
      "exits": {
        "north": "/d/xueshan/chufang",
        "west": "/d/xueshan/eroad2"
      },
      "objects": {}
    },
    "/d/xueshan/girlbed": {
      "type": "ROOM",
      "short": "床上",
      "exits": {
        "out": "/d/xueshan/girlroom"
      },
      "objects": {}
    },
    "/d/xueshan/girlroom": {
      "type": "ROOM",
      "short": "女弟子卧房",
      "exits": {
        "north": "/d/xueshan/restroom"
      },
      "objects": {
        "/d/xueshan/npc/huanhua": 1
      }
    },
    "/d/xueshan/icegate": {
      "type": "ROOM",
      "short": "冰宫大门",
      "exits": {
        "south": "/d/xueshan/wuchang-n"
      },
      "objects": {
        "/d/xueshan/npc/tuying-zunzhe": 1,
        "/d/xueshan/npc/baixiang-zunzhe": 1
      }
    },
    "/d/xueshan/restroom": {
      "type": "ROOM",
      "short": "休息室",
      "exits": {
        "south": "/d/xueshan/girlroom",
        "north": "/d/xueshan/boyroom",
        "east": "/d/xueshan/wuchang-w"
      },
      "objects": {
        "/d/obj/misc/seat": 2,
        "/d/obj/misc/table": 1,
        "/d/obj/food/xueli": 3,
        "/d/obj/food/zongzi": 1
      }
    },
    "/d/xueshan/snowmaze1": {
      "type": "ROOM",
      "short": "雪海孤旅",
      "exits": {
        "north": "/d/xueshan/snowmaze5",
        "south": "/d/xueshan/snowmaze9",
        "west": "/d/xueshan/snowmaze6",
        "east": "/d/xueshan/snowmaze8"
      },
      "objects": {}
    },
    "/d/xueshan/snowmaze2": {
      "type": "ROOM",
      "short": "雪海孤旅",
      "exits": {
        "north": "/d/xueshan/snowmaze6",
        "south": "/d/xueshan/snowmaze7",
        "west": "/d/xueshan/snowmaze4",
        "east": "/d/xueshan/snowmaze9"
      },
      "objects": {}
    },
    "/d/xueshan/snowmaze3": {
      "type": "ROOM",
      "short": "雪海孤旅",
      "exits": {
        "north": "/d/xueshan/snowmaze4",
        "south": "/d/xueshan/snowmaze8",
        "west": "/d/xueshan/snowmaze5",
        "east": "/d/xueshan/snowmaze7"
      },
      "objects": {}
    },
    "/d/xueshan/snowmaze4": {
      "type": "ROOM",
      "short": "雪海孤旅",
      "exits": {
        "north": "/d/xueshan/snowmaze8",
        "south": "/d/xueshan/snowmaze3",
        "west": "/d/xueshan/snowmaze9",
        "east": "/d/xueshan/snowmaze2"
      },
      "objects": {}
    },
    "/d/xueshan/snowmaze5": {
      "type": "ROOM",
      "short": "雪海孤旅",
      "exits": {
        "north": "/d/xueshan/snowmaze9",
        "south": "/d/xueshan/snowmaze1",
        "west": "/d/xueshan/snowmaze7",
        "east": "/d/xueshan/snowmaze3"
      },
      "objects": {}
    },
    "/d/xueshan/snowmaze6": {
      "type": "ROOM",
      "short": "雪海孤旅",
      "exits": {
        "north": "/d/xueshan/snowmaze7",
        "south": "/d/xueshan/snowmaze2",
        "west": "/d/xueshan/snowmaze8",
        "east": "/d/xueshan/snowmaze1"
      },
      "objects": {}
    },
    "/d/xueshan/snowmaze7": {
      "type": "ROOM",
      "short": "雪海孤旅",
      "exits": {
        "north": "/d/xueshan/snowmaze2",
        "south": "/d/xueshan/snowmaze6",
        "west": "/d/xueshan/snowmaze3",
        "east": "/d/xueshan/snowmaze5"
      },
      "objects": {}
    },
    "/d/xueshan/snowmaze8": {
      "type": "ROOM",
      "short": "雪海孤旅",
      "exits": {
        "north": "/d/xueshan/snowmaze3",
        "south": "/d/xueshan/snowmaze4",
        "west": "/d/xueshan/snowmaze1",
        "east": "/d/xueshan/snowmaze6"
      },
      "objects": {}
    },
    "/d/xueshan/snowmaze9": {
      "type": "ROOM",
      "short": "雪海孤旅",
      "exits": {
        "north": "/d/xueshan/snowmaze1",
        "south": "/d/xueshan/snowmaze5",
        "west": "/d/xueshan/snowmaze2",
        "east": "/d/xueshan/snowmaze4"
      },
      "objects": {}
    },
    "/d/xueshan/wroad1": {
      "type": "ROOM",
      "short": "冰崖底",
      "exits": {
        "east": "/d/xueshan/binggu"
      },
      "objects": {}
    },
    "/d/xueshan/wuchang-c": {
      "type": "ROOM",
      "short": "中心武场",
      "exits": {
        "south": "/d/xueshan/wuchang-s",
        "north": "/d/xueshan/wuchang-n",
        "west": "/d/xueshan/wuchang-w",
        "east": "/d/xueshan/wuchang-e"
      },
      "objects": {
        "/d/xueshan/npc/xunshi": 2,
        "/d/xueshan/npc/yingwu-guai": 1,
        "/d/obj/misc/ice.c": 1
      }
    },
    "/d/xueshan/wuchang-e": {
      "type": "ROOM",
      "short": "东武场",
      "exits": {
        "south": "/d/xueshan/wuchang-se",
        "north": "/d/xueshan/wuchang-ne",
        "west": "/d/xueshan/wuchang-c",
        "east": "/d/xueshan/chufang"
      },
      "objects": {}
    },
    "/d/xueshan/wuchang-n": {
      "type": "ROOM",
      "short": "北武场",
      "exits": {
        "south": "/d/xueshan/wuchang-c",
        "north": "/d/xueshan/icegate",
        "west": "/d/xueshan/wuchang-nw",
        "east": "/d/xueshan/wuchang-ne"
      },
      "objects": {}
    },
    "/d/xueshan/wuchang-ne": {
      "type": "ROOM",
      "short": "东北武场",
      "exits": {
        "south": "/d/xueshan/wuchang-e",
        "west": "/d/xueshan/wuchang-n"
      },
      "objects": {}
    },
    "/d/xueshan/wuchang-nw": {
      "type": "ROOM",
      "short": "西北武场",
      "exits": {
        "south": "/d/xueshan/wuchang-w",
        "east": "/d/xueshan/wuchang-n"
      },
      "objects": {
        "/d/obj/misc/ice": 2
      }
    },
    "/d/xueshan/wuchang-s": {
      "type": "ROOM",
      "short": "南武场",
      "exits": {
        "south": "/d/xueshan/binggu",
        "north": "/d/xueshan/wuchang-c",
        "west": "/d/xueshan/wuchang-sw",
        "east": "/d/xueshan/wuchang-se"
      },
      "objects": {}
    },
    "/d/xueshan/wuchang-se": {
      "type": "ROOM",
      "short": "东南武场",
      "exits": {
        "north": "/d/xueshan/wuchang-e",
        "west": "/d/xueshan/wuchang-s"
      },
      "objects": {}
    },
    "/d/xueshan/wuchang-sw": {
      "type": "ROOM",
      "short": "西南武场",
      "exits": {
        "north": "/d/xueshan/wuchang-w",
        "east": "/d/xueshan/wuchang-s"
      },
      "objects": {}
    },
    "/d/xueshan/wuchang-w": {
      "type": "ROOM",
      "short": "西武场",
      "exits": {
        "south": "/d/xueshan/wuchang-sw",
        "north": "/d/xueshan/wuchang-nw",
        "west": "/d/xueshan/restroom",
        "east": "/d/xueshan/wuchang-c"
      },
      "objects": {}
    },
    "/d/xueshan/xiaomuwu": {
      "type": "ROOM",
      "short": "小木屋",
      "exits": {
        "north": "/d/xueshan/eroad2"
      },
      "objects": {
        "/d/xueshan/npc/kongque-gongzhu": 1
      }
    },
    "/d/xueshan/xihai": {
      "type": "ROOM",
      "short": "西海之畔",
      "exits": {
        "east": "/d/xueshan/xueshan5"
      },
      "objects": {}
    },
    "/d/xueshan/xueshan1": {
      "type": "ROOM",
      "short": "茫茫雪峰",
      "exits": {
        "north": "/d/xueshan/xueshan2",
        "south": "/d/moon/kunlun"
      }
    },
    "/d/xueshan/xueshan2": {
      "type": "ROOM",
      "short": "茫茫雪峰",
      "exits": {
        "south": "/d/xueshan/xueshan1",
        "northwest": "/d/xueshan/xueshan3"
      },
      "objects": {}
    },
    "/d/xueshan/xueshan3": {
      "type": "ROOM",
      "short": "茫茫雪峰",
      "exits": {
        "southeast": "/d/xueshan/xueshan2",
        "north": "/d/xueshan/snowmaze1"
      },
      "objects": {}
    },
    "/d/xueshan/xueshan4": {
      "type": "ROOM",
      "short": "茫茫雪峰",
      "exits": {
        "south": "/d/xueshan/snowmaze9",
        "north": "/d/xueshan/xueshan5"
      },
      "objects": {}
    },
    "/d/xueshan/xueshan5": {
      "type": "ROOM",
      "short": "茫茫雪峰",
      "exits": {
        "south": "/d/xueshan/xueshan4",
        "north": "/d/xueshan/xueshan6",
        "west": "/d/xueshan/xihai"
      },
      "objects": {}
    },
    "/d/xueshan/xueshan6": {
      "type": "ROOM",
      "short": "茫茫雪峰",
      "exits": {
        "south": "/d/xueshan/xueshan5",
        "north": "/d/xueshan/bingchuan"
      },
      "objects": {}
    }
  }
};
