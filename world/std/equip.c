// 神话世界·西游记·版本４．５０
/* <SecCrypt CPL V3R05> */
 
// equip.c

inherit ITEM;
inherit F_EQUIP;

void setup()
{
   if( !query("armor_prop/dodge") && (weight() >= 3000) )
     set("armor_prop/dodge", - weight() / 3000 );
   if( !query("weapon_prop/dodge") && (weight() >= 3000) )
     set("weapon_prop/dodge", - weight() / 3000 );
}
int query_autoload() { return 0; }      
