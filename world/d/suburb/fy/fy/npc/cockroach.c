inherit NPC;

void create()
{
	if( random(2))
        set_name("大蟑螂", ({ "cockroach" }) );
	else
	set_name("小蟑螂", ({ "cockroach" }) );
        set("race", "野兽");
        set("age", 1);
        set("long", "一只非常恶心的蟑螂。 \n");

        set("combat_exp",7000);
        set("score", 200);
        set("force", 200);
         set("max_force", 200);
        set_skill("dodge", 100);


        set("limbs", ({ "头部", "身体"}) );
         set("verbs", ({ "bite" }) );
        set_temp("armor", 50);

    set("chat_chance", 25);
    set("chat_msg", ({
            (: this_object(), "random_move" :),
            (: this_object(), "hide" :)
    }) );

        setup();
}

void hide()
{
        if( !environment() ) return;
        message("vision", "蟑螂爬著爬著钻进墙边的裂缝了。\n", environment());
        call_out("disappear", 1);
}

void disappear()
{
        destruct(this_object());
}

