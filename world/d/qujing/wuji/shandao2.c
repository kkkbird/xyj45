// 神话世界·西游记·版本４．５０
/* <SecCrypt CPL V3R05> */
 
// snowcat moved to /d/qujing/wuji

inherit ROOM;

void create ()
{
  set ("short", "山道");
  set ("long", @LONG

山道崎岖不平，沿着山势上下左右盘绕，地形十分险恶。群
峦环绕，难辨东西南北。大风吹来，有点令人寒颤。

LONG);

  set("exits", ([ /* sizeof() == 2 */
    "northeast" : __DIR__"shandao1",
    "southwest" : __DIR__"street1",
  ]));
  set("outdoors", __DIR__"");

  setup();
}
