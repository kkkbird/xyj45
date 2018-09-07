// 神话世界·西游记·版本４．５０
/* <SecCrypt CPL V3R05> */
 
int utf8_is_chinese(string str);

string chinese_number(int i)
{
   return CHINESE_D->chinese_number(i);
}

string to_chinese(string str)
{
   return CHINESE_D->chinese(str);
}

int is_chinese(string str)
{
	// if (strlen(str) >= 2 && str[0] > 160 && str[0] < 255)
	// 	return 1;
	// return 0;

	return utf8_is_chinese(str);
}

int utf8_length(string str)
{
	int c;
	int i, q;
	int l = strlen(str);
	
	for (q = 0, i = 0; i < l; i++, q++)
	{
		c = str[i];
		if (c >= 0 && c <= 127)
			i += 0;
		else if ((c & 0xE0) == 0xC0)
			i += 1;
		else if ((c & 0xF0) == 0xE0)
			i += 2;
		else if ((c & 0xF8) == 0xF0)
			i += 3;
		//else if (($c & 0xFC) == 0xF8) i+=4; // 111110bb //byte 5, unnecessary in 4 byte UTF-8
		//else if (($c & 0xFE) == 0xFC) i+=5; // 1111110b //byte 6, unnecessary in 4 byte UTF-8
		else
			return 0; //invalid utf8
	}
	return q;
}

int utf8_is_chinese(string str)
{
	int c;
	int i, l = strlen(str);
	if (l < 2)
	{
		return 0;
	}
	for (i = 0; i < l; i++)
	{
		c = str[i];
		if (c >= 0 && c <= 127)
		{
			return 0;
		}
		else if ((c & 0xE0) == 0xC0)
		{
			c = c & ~0xE0;
			c = c << 6;
			c |= (str[++i] & ~0xC0);
		}
		else if ((c & 0xF0) == 0xE0)
		{
			c = c & ~0xF0;
			c = c << 6;
			c |= (str[++i] & ~0xC0);
			c = c << 6;
			c |= (str[++i] & ~0xC0);
		}
		else if ((c & 0xF8) == 0xF0)
		{
			return 0;
		}
		else
			return 0; //invalid utf8

		if (c < 0x4e00 || c > 0x9FA5)
		{
			return 0;
		}
	}
	return 1;
}
