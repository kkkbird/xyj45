#include <armor.h>
inherit HEAD;
void create()
{
	set_name("宝冠", ({ "hat","宝冠" }) );
	set_weight(1000);
	if( clonep() )
		set_default_object(__FILE__);
	else {
		set("unit", "顶");
		set("material", "cloth");
		set("armor_prop/armor", 10);
	}
	setup();
}
