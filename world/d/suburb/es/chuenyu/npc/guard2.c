#include <ansi.h>

inherit NPC;

void create()
{
        set_name("鐙卞崚", ({ "prison guard", "guard" }) );
        set("long", "杩欐槸榛戞澗鍫＄殑鐙卞崚\n");
        set("attitude", "heroism");

        set("str", 27);
        set("cor", 26);
        set("cps", 25);

        set("combat_exp", 5000);

        set("chat_chance", 30);
        set("chat_msg", ({
                (: random_move :),
        }) );

        set("chat_chance_combat", 15);
        set("chat_msg_combat", ({
               (: random_move :),
        }) );

        set_skill("unarmed", 20);
        set_skill("sword", 30);
        set_skill("parry", 80); 
               setup();
        set_skill("dodge", 80);
                set_skill("move", 100);
               setup();
                               
        carry_object("/obj/cloth")->wear();
        carry_object("/obj/longsword")->wield();
}

void init()
{
        object ob;

        ::init();
        if( interactive(ob = this_player()) && !is_fighting() ) {
                kill_ob(ob);
        }
}

