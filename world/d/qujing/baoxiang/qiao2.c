// 神话世界·西游记·版本４．５０
/* <SecCrypt CPL V3R05> */
 
// by snowcat 10/15/1997
// room: /d/qujing/baoxiang/qiao2.c

inherit ROOM;

void create ()
{
  set ("short", "云头桥");
  set ("long", @LONG

一条河东西方向横在面前，两岸泥泞，沼泽连片。走进去怕是会
陷在里面人马无归，河心更是急流滚滚。

河面上有一串用船搭成的简易浮桥(qiao)。

LONG);

  set("exits", ([
        "north"      : __DIR__"qiao1",
        "southeast"  : __DIR__"xi1",
      ]));
  set("item_desc",([
      "qiao" : "\n几只船连成一座浮桥通向对岸。\n\n",
     ]));
  set("outdoors","/d/qujing/baoxiang");

  setup();
}

void open_bridge(int tell);
void close_bridge(int tell);

void initialize (int bool)
{
  if (this_object()->query("initialized") == 0)
  {
    this_object()->set("initialized",1);
    if (bool)
    {
      close_bridge(0);
      remove_call_out ("open_bridge");
      call_out ("open_bridge",20,1);
    }
    else
    {
      open_bridge(0);
      remove_call_out ("close_bridge");
      call_out ("close_bridge",20,1);
    }
    if (! find_object(__DIR__"qiao1"))
    {
      object room = load_object(__DIR__"qiao1");
      room->initialize(bool);
    }
  }
}

void init ()
{
  initialize (random(2));
}

void open_bridge (int tell)
{
  object room = this_object();

  if (tell)
    tell_room (room,"河面上的浮桥慢慢散开。\n");

  room->set("long", @LONG

一条河东西方向横在面前，两岸泥泞，沼泽连片。走进去怕是会
陷在里面人马无归，河心更是急流滚滚。

河面上用船搭成的简易浮桥(qiao)已被拆开。

LONG);

  room->set("exits", ([
                        "southeast"  : __DIR__"xi1",
                      ]));

  room->set("item_desc",([
               "qiao" : "\n几只船浮在河上。\n\n",
            ]));

  remove_call_out ("close_bridge");
  call_out ("close_bridge",20,1);
}

void close_bridge (int tell)
{
  object room = this_object();

  if (tell)
    tell_room (room,"河面上的船慢慢聚在一起。\n");

  room->set("long", @LONG

一条河东西方向横在面前，两岸泥泞，沼泽连片。走进去怕是会
陷在里面人马无归，河心更是急流滚滚。

河面上有一串用船搭成的简易浮桥(qiao)。

LONG);

  set("item_desc",([
      "qiao" : "\n几只船连成一座浮桥通向对岸。\n\n",
     ]));

  room->set("exits", ([
                        "southeast"  : __DIR__"xi1",
                        "north"      : __DIR__"qiao1",
                      ]));

  room->set("item_desc",([
               "qiao" : "\n几只船连成一座浮桥通向对岸。\n\n",
            ]));

  remove_call_out ("open_bridge");
  call_out ("open_bridge",20,1);
}
