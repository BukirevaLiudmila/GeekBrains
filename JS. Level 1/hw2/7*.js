null > 0; // false
null < 0; // false
null == 0; // false
null >= 0; // true
null <= 0; // true

/* Алгоритмы проверки равенства == и сравнения >= > < <= работают по-разному.
При сравнении null преобразуется в число (становится 0).
А при проверке равенства значения null и undefined обрабатываются особым образом:
они равны друг другу, но не равны чему-то ещё. */
