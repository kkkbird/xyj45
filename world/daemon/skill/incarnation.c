// iron-cloth.c

inherit SKILL;
#include <ansi.h>
void skill_improved(object me)
{
        int s;

        s = me->query_skill("incarnation", 1);
        if( (int)me->query("spi") < s/5) {
                tell_object(me, HIW "鐢辨柤浣犲嫟缁冧慨浠欐湳锛屼綘鐨勭伒鎬ф彁楂樹簡銆俓n" NOR);
                me->add("spi", 1);
        }
}
int learn_bonus()
{
	return 0;
}
int practice_bonus()
{
	return 0;
}
int black_white_ness()
{
	return 0;
}

