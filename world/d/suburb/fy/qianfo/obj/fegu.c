// 
// 

#include <weapon.h>
inherit HAMMER;
void create()
{
	set_name("铜佛鼓", ({ "fegu" }) );
	set_weight(40000);
	if( clonep() )
		set_default_object(__FILE__);
	else {
		set("unit", "个");
		set("value", 500);
		set("material", "wood");
		set("long", "一个绿斑斑的铜佛鼓\n");
		set("weapon_prop/karma",1);
	}
	init_hammer(5);
	setup();
}
