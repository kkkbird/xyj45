// tao-mystery.c

inherit SKILL;

void create() { seteuid(getuid()); }

string type() { return "knowledge"; }

void skill_improved(object me)
{
	me->add("bellicosity", 100); 
}

int practice_skill(object me)
{       
        return notify_fail("娉曟湳绫绘妧鑳藉繀椤荤敤瀛︾殑鎴栨槸浠庡疄鎴樹腑鑾峰彇缁忛獙銆俓n");
}
