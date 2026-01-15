import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

interface QuickQuestion {
  id: number
  question: string
  answer: string
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Често задавани въпроси и отговори
  const quickQuestions: QuickQuestion[] = [
    // 🐶 Общи въпроси
    {
      id: 1,
      question: "Как да направя резервация?",
      answer: "За резервация моля свържете се с нас в Instagram (@rozis_luxury_dog_hotel). Там ще можете да ни напишете съобщение с детайлите за вашия любимец и желаните дати. Препоръчваме да резервирате поне 3-5 дни предварително! 📅"
    },
    {
      id: 2,
      question: "Приемате ли всички породи?",
      answer: "Да! Приемаме кучета от всички породи и размери. Всеки гост получава индивидуална грижа според нуждите си. Имаме опит с различни породи и знаем как да се грижим за всеки един! 🐕🐩"
    },
    {
      id: 3,
      question: "Колко дни предварително да резервирам?",
      answer: "Препоръчваме да резервирате поне 3-5 дни предварително, особено за уикендите и празниците. За спешни случаи се опитваме да намерим място, но не можем да гарантираме. Най-добре е да се свържете възможно най-рано! ⏰"
    },
    {
      id: 4,
      question: "Имате ли свободни места за уикенда?",
      answer: "За да проверя наличността за конкретен уикенд, моля свържете се с нас в Instagram или на телефона +359 882 739 396. Ще ви отговорим веднага с актуалната информация! 📞"
    },
    {
      id: 5,
      question: "Какво включва престоят?",
      answer: "Престоят включва: луксозно настаняване, 3 хранения на ден, ежедневни игри и упражнения, 24/7 наблюдение, професионална грижа, социализация с други кучета и много любов! Всичко за щастлив престой! 🏠✨"
    },

    // 🍖 Хранене и грижа
    {
      id: 6,
      question: "Мога ли да донеса собствена храна?",
      answer: "Разбира се! Добре е да донесете обичайната храна на кучето си за по-лесно адаптиране. Имаме и собствена висококачествена храна. Важно е да ни уведомите за специални хранителни нужди! 🍖"
    },
    {
      id: 7,
      question: "Колко пъти на ден ги храните?",
      answer: "Храним кучетата 3 пъти на ден - сутрин, обяд и вечер. За кученца и възрастни кучета можем да адаптираме графика според нуждите им. Винаги следваме указанията на собствениците! 🕐"
    },
    {
      id: 8,
      question: "Следите ли специални режими?",
      answer: "Да! Следим строго всички специални хранителни режими - диетични храни, алергии, медицински диети. Имаме опит с различни здравословни нужди и работим с ветеринари при нужда! 🏥"
    },
    {
      id: 9,
      question: "Предлагате ли къпане и груминг?",
      answer: "Да! Предлагаме професионални груминг услуги - къпане и ресане. Цените започват от 20€ за ресане на малки кучета (до 5кг). Къпане на малки кучета е 25€, а за гигантски кучета (над 40кг) къпане е 45€. Всички услуги се извършват от опитни майстори! ✂️"
    },
    {
      id: 10,
      question: "Може ли да давате лекарства?",
      answer: "Да! Можем да даваме лекарства по указания на собственика или ветеринар. Имаме опит с различни медикаменти и следим строго графика. Важно е да ни предоставите всички инструкции! 💊"

    },

    // 🏠 Условия и сигурност
    {
      id: 11,
      question: "Къде спят кучетата?",
      answer: "Кучетата спят в индивидуални луксозни стаи с удобни легла, климатизация и постоянна температура. Всяка стая е оборудвана с видеонаблюдение за сигурност. Осигуряваме спокойна и комфортна атмосфера! 🛏️"
    },
    {
      id: 12,
      question: "Има ли видеонаблюдение?",
      answer: "Да! Имаме видеонаблюдение в общите зони и можем да ви изпращаме снимки и видеа на кучето ви по заявка. Винаги можете да се свържете с нас за информация как се чувства вашият любимец! 📹"
    },
    {
      id: 13,
      question: "Има ли двор за игри?",
      answer: "Да! Имаме голям, безопасен двор с различни игри и оборудване. Кучетата играят ежедневно под наблюдение на нашия екип. Дворът е ограден и напълно сигурен! 🏃‍♂️"
    },
    {
      id: 14,
      question: "Колко често ги извеждате навън?",
      answer: "Извеждаме кучетата навън минимум 4-5 пъти на ден за нужда и игри. За активни кучета можем да увеличаваме честотата. Всяко излизане е под наблюдение на нашия екип! 🚶‍♂️"
    },
    {
      id: 15,
      question: "Приемате ли несоциални кучета?",
      answer: "Да! Приемаме и кучета, които не са социални с други. Осигуряваме индивидуални игри и грижа. Нашият екип има опит с различни темпераменти и знае как да се грижи за всеки гост! 🤝"
    },

    // 💸 Цени и престой
    {
      id: 16,
      question: "Колко струва престоят на ден?",
      answer: "Луксозното настаняване струва 60€ на нощ. Това включва всички основни услуги. Груминг услугите започват от 20€ за ресане на малки кучета, а за къпане цените са от 25€ (малки) до 45€ (гигантски). Транспортът е 30€ в една посока, само за София и София област. 💰"
    },
    {
      id: 17,
      question: "Имате ли отстъпки за дълъг престой?",
      answer: "Да! За престои над 7 дни имаме 10% отстъпка, а за престои над 14 дни - 15% отстъпка. За много дълги престои (месец+) имаме още по-добри условия! Свържете се за персонализирана оферта! 💸"
    },
    {
      id: 18,
      question: "Какви методи на плащане приемате?",
      answer: "Приемаме плащане в брой, с карта, банков превод и чрез мобилни приложения. Плащането се извършва при предаване на кучето. Имаме и възможност за частично плащане при дълги престои! 💳"
    },
    {
      id: 19,
      question: "Какво се случва ако закъснея?",
      answer: "Ако закъснеете, моля уведомете ни веднага! При закъснение над 2 часа се начислява допълнителна такса от 15€. При спешни случаи винаги се опитваме да бъдем разбиращи! ⏰"
    },

    // 📍 Местоположение и контакти
    {
      id: 20,
      question: "Къде се намирате точно?",
      answer: "Намираме се в Сапарева баня, България на адрес: ул. 'Германея' 60. Имаме лесен достъп с кола и удобно паркиране. Можете да ни намерите в Google Maps! 📍"
    },
    {
      id: 21,
      question: "Работите ли през уикендите?",
      answer: "Да! Работим 7 дни в седмицата, 24 часа на ден. Уикендите са наши най-натоварени дни, затова препоръчваме предварителна резервация! Нашият екип е винаги на разположение! 📅"
    },
    {
      id: 22,
      question: "Какъв е телефонът за връзка?",
      answer: "Нашият телефон за връзка е +359 882 739 396. Можете да ни се обадите на Viber на същия номер. Отговаряме на всички обаждания и съобщения! 📞"
    },
    {
      id: 23,
      question: "Мога ли да разгледам хотела преди престоя?",
      answer: "Разбира се! Препоръчваме визита преди първия престой. Можете да се запознаете с условията, екипа и да зададете всички въпроси. Свържете се с нас за уговорка на час! 👀"
    },

    // 🎉 Допълнителни въпроси
    {
      id: 24,
      question: "Кой е любимият гост в хотела?",
      answer: "Всички наши гости са любими! 😄 Всеки кученце получава индивидуално внимание и любов. Не можем да изберем фаворит - всеки е особен по свой начин! 🐕💕"
    },
    {
      id: 25,
      question: "Може ли кучето ми да си доведе приятел?",
      answer: "Разбира се! Приемаме групи от кучета, които са приятели. Важно е да ни уведомите предварително и да се уверяваме, че всички са социални помежду си. Приятелството между кучетата е прекрасно! 🐕🐕"
    },
    {
      id: 26,
      question: "Имате ли басейн за кучета?",
      answer: "В момента нямаме басейн, но имаме голям двор с игри и оборудване. Планираме да добавим басейн в бъдеще! Засега кучетата се наслаждават на игри в двора и разходки. 🏊‍♂️"
    },
    {
      id: 27,
      question: "Как празнувате рождените дни?",
      answer: "Празнуваме рождените дни с специални лакомства, играчки и много внимание! Можем да направим малка парти с други кучета или индивидуално празненство. Свържете се с нас за специални пожелания! 🎂🎉"
    },
    {
      id: 28,
      question: "Приемате ли само кучета или и котки?",
      answer: "В момента приемаме само кучета, но планираме да разширим услугите си и за котки в бъдеще! Нашият екип има опит с различни животни. Следете ни за актуализации! 🐱"
    },
    {
      id: 29,
      question: "Приемате ли малки кученца (под 6 месеца)?",
      answer: "Да! Приемаме кученца от 3 месеца нагоре. За малките кученца осигуряваме специална грижа, по-чести хранения и индивидуално внимание. Имаме опит с кученца! 🐶"
    },
    {
      id: 30,
      question: "Има ли ограничение в килограмите?",
      answer: "Нямаме ограничения по размер или тегло! Приемаме кучета от всички размери - от малки чихуахуа до големи доги. Всяко куче получава подходяща грижа според нуждите си! 📏"
    },
    {
      id: 31,
      question: "Колко животни приемате максимум на ден?",
      answer: "Приемаме максимум 15 кучета на ден, за да можем да осигурим индивидуално внимание на всеки гост. Това ни позволява да поддържаме високо качество на услугите! 👥"
    },
    {
      id: 32,
      question: "Колко служители се грижат за животните?",
      answer: "Нашият екип включва 8 професионални служители, които работят на смени за 24/7 грижа. Всеки служител е сертифициран и има опит с кучета! 👨‍⚕️👩‍⚕️"
    },
    {
      id: 33,
      question: "Кучето ми не е кастрирано - това проблем ли е?",
      answer: "Не е проблем! Приемаме и некастрирани кучета. Важно е да ни уведомите за това предварително, за да можем да осигурим подходящи условия и грижа. Имаме опит с различни ситуации! 🐕"
    },
    {
      id: 34,
      question: "Трябва ли кучето да има паспорт?",
      answer: "Да, нужно е кучето да има ветеринарен паспорт с всички ваксини и обезпаразитяване. Това е важно за сигурността на всички гости. Моля принесете всички документи! 📋"
    },
    {
      id: 35,
      question: "Изисквате ли ваксини и обезпаразитяване?",
      answer: "Да! Изискваме всички стандартни ваксини да са навременни и обезпаразитяване да е направено максимум 3 месеца преди престоя. Това е за сигурността на всички! 💉"
    },
    {
      id: 36,
      question: "Какво меню предлагате за хранене?",
      answer: "Предлагаме висококачествена храна от водещи марки, както и домашна храна. Менюто включва месо, зеленчуци, зърнени храни и специални лакомства. Можем да адаптираме според нуждите! 🍖🥕"
    },
    {
      id: 37,
      question: "Мога ли да донеса собствена храна и купички?",
      answer: "Разбира се! Добре е да донесете обичайната храна и купички на кучето си. Това помага за по-лесно адаптиране. Имаме и собствени купички за резерв! 🥣"
    },
    {
      id: 38,
      question: "Предлагате ли храна за чувствителни кучета?",
      answer: "Да! Имаме специална храна за кучета с алергии, чувствителни стомаси и специални нужди. Работим с ветеринари за най-подходящия хранителен режим! 🏥"
    },
    {
      id: 39,
      question: "Какво става ако кучето не иска да яде?",
      answer: "Ако кучето не яде, веднага се свързваме с вас и консултираме с ветеринар при нужда. Често е нормално в първите дни поради стреса от новата среда. Следим внимателно! 👀"
    },
    {
      id: 40,
      question: "Може ли персоналът да дава лекарства по график?",
      answer: "Да! Нашият персонал може да дава лекарства по строг график по указания на собственика или ветеринар. Имаме опит с различни медикаменти и следим внимателно! 💊"
    },
    {
      id: 41,
      question: "Имате ли ветеринар на място?",
      answer: "Нямаме постоянен ветеринар на място, но работим с местни ветеринари и можем да се свържем с тях при нужда. При спешни случаи имаме договор с 24/7 ветеринарна клиника! 🏥"
    },
    {
      id: 42,
      question: "Животните спят заедно или поотделно?",
      answer: "Всяко куче има своя индивидуална стая за почивка. При желание на собствениците и ако кучетата са социални, могат да играят заедно през деня! 🛏️"
    },
    {
      id: 43,
      question: "Как изглеждат стаите?",
      answer: "Стаите са луксозни с удобни легла, климатизация, видеонаблюдение и достатъчно място за движение. Всяка стая е оборудвана с чиста вода и подходящо осветление! 🏠"
    },
    {
      id: 44,
      question: "Температурата се регулира ли?",
      answer: "Да! Всички стаи имат климатизация и отопление. Поддържаме постоянна температура от 20-22°C през цялата година за максимален комфорт! 🌡️"
    },
    {
      id: 45,
      question: "Колко често се извеждат навън?",
      answer: "Извеждаме кучетата навън минимум 4-5 пъти на ден за нужда и игри. За активни кучета можем да увеличаваме честотата. Всяко излизане е под наблюдение! 🚶‍♂️"
    },
    {
      id: 46,
      question: "Има ли разходки извън двора?",
      answer: "В момента не предлагаме разходки извън двора поради сигурността, но имаме голям двор с различни игри. Планираме да добавим разходки в бъдеще! 🚶‍♂️"
    },
    {
      id: 47,
      question: "Предлагате ли индивидуално внимание?",
      answer: "Да! Всеки гост получава индивидуално внимание - игри, галене, разходки и много любов. Нашият екип знае как да се грижи за всеки темперамент! 💕"
    },
    {
      id: 48,
      question: "Кучето ми е страхливо - ще се чувства ли добре?",
      answer: "Разбира се! Имаме опит със страхливи кучета и знаем как да ги успокояваме. Осигуряваме тиха среда, индивидуално внимание и постепенно запознаване с другите гости! 🤗"
    },
    {
      id: 49,
      question: "Как следите дали кучетата се разбират?",
      answer: "Нашият опитен екип внимателно следи взаимодействието между кучетата. При първи признаци на проблеми веднага разделяме кучетата и осигуряваме безопасност! 👀"
    },
    {
      id: 50,
      question: "Ще получавам ли снимки всеки ден?",
      answer: "Да! Изпращаме ежедневни снимки и видеа на кучето ви по заявка. Можете да се свържете с нас по всяко време за информация как се чувства вашият любимец! 📸"
    },
    {
      id: 51,
      question: "Мога ли да се обаждам да питам как е кучето?",
      answer: "Разбира се! Можете да се обаждате по всяко време на +359 882 739 396. Нашият екип винаги е готов да ви отговори и да ви разкаже как се чувства кучето ви! 📞"
    },
    {
      id: 52,
      question: "Изпращате ли актуализации по Viber?",
      answer: "Да! Изпращаме актуализации по Viber и WhatsApp по заявка. Можете да получите ежедневни съобщения за състоянието на кучето ви! 💬"
    },
    {
      id: 53,
      question: "Може ли да направя видеоразговор с кучето?",
      answer: "Да! Можем да организираме видеоразговор с кучето ви по заявка. Това е прекрасен начин да се видите и да се уверявате, че всичко е наред! 📹💕"
    },
    {
      id: 54,
      question: "Каква е цената на нощувката?",
      answer: "Цената е 60€ на нощувка и включва всички основни услуги - настаняване, хранене, игри, наблюдение и грижа. Груминг услугите са допълнителни: къпане от 25-45€, ресане от 20-35€ в зависимост от размера на кучето! 💰"
    },
    {
      id: 55,
      question: "Какво включва цената?",
      answer: "Цената включва: луксозно настаняване, 3 хранения на ден, ежедневни игри, 24/7 наблюдение, професионална грижа и много любов! Всичко за щастлив престой! ✨"
    },
    {
      id: 56,
      question: "Има ли различни пакети?",
      answer: "В момента предлагаме основен пакет, но планираме да добавим VIP пакет с допълнителни услуги. За дълги престои имаме отстъпки! Свържете се за детайли! 📦"
    },
    {
      id: 57,
      question: "Колко струва къпането и подстригването?",
      answer: "Имаме детайлни цени за груминг услуги: КЪПАНЕ - малки кучета (до 5кг) 25€, средни (до 15кг) 30€, големи (до 40кг) 35€, гигантски (над 40кг) 45€. РЕСАНЕ - малки 20€, средни 25€, големи 30€, гигантски 35€. ✂️"
    },
    {
      id: 58,
      question: "Как се заплаща - при оставяне или при взимане?",
      answer: "Плащането се извършва при предаване на кучето. Приемаме плащане в брой, с карта или банков превод. За дълги престои имаме възможност за частично плащане! 💳"
    },
    {
      id: 59,
      question: "Предлагате ли отстъпки за повече от едно куче?",
      answer: "Да! За 2 кучета имаме 10% отстъпка, а за 3 или повече кучета - 15% отстъпка. Приятелството между кучетата е прекрасно и го насърчаваме! 🐕🐕"
    },
    {
      id: 60,
      question: "Колко струва транспортът?",
      answer: "Транспортът струва 30€ в една посока. Работим само за София и София област. Имаме безопасни клетки и климатизация! 🚗"
    },
    {
      id: 61,
      question: "Как се приема кучето?",
      answer: "При приемане попълваме формуляр с информация за кучето, неговите нужди и контактни данни. Проверяваме документите и правим кратък преглед на здравословното състояние! 📋"
    },
    {
      id: 62,
      question: "Трябва ли да го доведа лично?",
      answer: "Можете да доведете кучето лично или да използвате нашите транспорт услуги. Препоръчваме лично предаване за първи път, за да се запознаете с екипа! 🚗"
    },
    {
      id: 63,
      question: "Какви са часовете за приемане?",
      answer: "Приемаме кучета от 8:00 до 18:00 всеки ден. За спешни случаи можем да направим изключение. Взимането е до 20:00. При закъснение се начислява допълнителна такса! ⏰"
    },
    {
      id: 64,
      question: "Какво трябва да донеса?",
      answer: "Добре е да донесете: каишка, любима играчка, обичайна храна (ако е необходимо), лекарства (ако приема такива) и всички документи. Одеялото не е задължително! 🎒"
    },
    {
      id: 65,
      question: "Какво става ако закъснея с прибирането?",
      answer: "Ако закъснеете, моля уведомете ни веднага! При закъснение над 2 часа се начислява допълнителна такса от 15€. При спешни случаи винаги се опитваме да бъдем разбиращи! ⏰"
    },
    {
      id: 66,
      question: "Кучето ми не се разбира с други - ще го приемете ли?",
      answer: "Да! Приемаме и несоциални кучета. Осигуряваме индивидуални игри и грижа. Нашият екип има опит с различни темпераменти и знае как да се грижи за всеки гост! 🤝"
    },
    {
      id: 67,
      question: "Има ли обучение за социализация?",
      answer: "Не предлагаме професионално обучение, но нашият екип насърчава положителното взаимодействие между кучетата. Имаме опит с различни темпераменти! 🎓"
    },
    {
      id: 68,
      question: "Какво става ако се сбие с друго куче?",
      answer: "Нашият екип внимателно следи взаимодействието и при първи признаци на проблеми веднага разделя кучетата. Имаме протоколи за безопасност и ветеринарна помощ при нужда! 🚨"
    },
    {
      id: 69,
      question: "Кучето ми лае много - това проблем ли е?",
      answer: "Не е проблем! Разбираме, че лайето е нормално поведение за кучетата. Нашият екип знае как да се справя с различни темпераменти и осигурява спокойна среда! 🐕"
    },
    {
      id: 70,
      question: "Предлагате ли тестов престой?",
      answer: "Да! Препоръчваме тестов престой от 1-2 дни за първи път. Това помага на кучето да се адаптира и на вас да се уверявате, че всичко е наред! 🧪"
    },
    {
      id: 71,
      question: "Имате ли груминг услуги?",
      answer: "Да! Предлагаме пълни груминг услуги - къпане, сушене, стрижка, почистване на нокти и уши. Всички услуги се извършват от опитни майстори! ✂️"
    },
    {
      id: 72,
      question: "Може ли кучето да бъде снимано професионално?",
      answer: "Да! Можем да организираме професионална фотосесия за кучето ви. Имаме връзки с фотографи, специализирани в снимане на животни! 📸✨"
    },
    {
      id: 73,
      question: "Организирате ли кучешки рожден ден?",
      answer: "Да! Организираме специални рожден дни с лакомства, играчки, парти с други кучета и много внимание! Свържете се с нас за персонализирано празненство! 🎂🎉"
    },
    {
      id: 74,
      question: "Имате ли транспорт от/до София?",
      answer: "Да! Предлагаме транспорт услуги за София и София област. Цената е 50лв в една посока. Имаме безопасни клетки и климатизация! 🚗"
    },
    {
      id: 75,
      question: "Предлагате ли дневна грижа (dog daycare)?",
      answer: "В момента не предлагаме дневна грижа, но планираме да добавим тази услуга в бъдеще! Засега предлагаме само нощувки. Следете ни за актуализации! 🌅"
    }
  ]

  // Филтриране на въпросите според търсенето
  const filteredQuestions = quickQuestions.filter(question =>
    question.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    question.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const topQuestions = [quickQuestions[0], quickQuestions[5], quickQuestions[10], quickQuestions[15]]
  const otherQuestions = quickQuestions.filter(q => !topQuestions.includes(q))
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 1,
        text: "Здравейте! 🐕 Аз съм виртуалният асистент на Rozi's Luxury Dog Hotel. Как мога да ви помогна днес?",
        isBot: true,
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, messages.length])

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Симулиране на отговор от бота
    setTimeout(() => {
      const botResponse = getBotResponse(inputText.toLowerCase())
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (userInput: string): string => {
    // Търсене на ключови думи в въпроса
    if (userInput.includes('резервация') || userInput.includes('резервирам') || userInput.includes('запиша') || userInput.includes('как да направя резервация')) {
      return quickQuestions[0].answer
    }
    if (userInput.includes('породи') || userInput.includes('порода') || userInput.includes('приемате ли всички') || userInput.includes('всички породи')) {
      return quickQuestions[1].answer
    }
    if (userInput.includes('предварително') || userInput.includes('колко дни') || userInput.includes('кога да резервирам') || userInput.includes('запазя')) {
      return quickQuestions[2].answer
    }
    if (userInput.includes('свободни места') || userInput.includes('уикенд') || userInput.includes('наличност') || userInput.includes('имате ли място')) {
      return quickQuestions[3].answer
    }
    if (userInput.includes('включва') || userInput.includes('какво включва') || userInput.includes('престоят') || userInput.includes('услугите включват')) {
      return quickQuestions[4].answer
    }
    if (userInput.includes('собствена храна') || userInput.includes('донеса храна') || userInput.includes('храна за кучето') || userInput.includes('моята храна')) {
      return quickQuestions[5].answer
    }
    if (userInput.includes('колко пъти') || userInput.includes('храните') || userInput.includes('хранене') || userInput.includes('честота на хранене')) {
      return quickQuestions[6].answer
    }
    if (userInput.includes('специални режими') || userInput.includes('диета') || userInput.includes('алергии') || userInput.includes('медицински')) {
      return quickQuestions[7].answer
    }
    if (userInput.includes('къпане') || userInput.includes('груминг') || userInput.includes('фризьор') || userInput.includes('стрижка')) {
      return quickQuestions[8].answer
    }
    if (userInput.includes('лекарства') || userInput.includes('медикаменти') || userInput.includes('давате лекарства') || userInput.includes('приема лекарства')) {
      return quickQuestions[9].answer
    }
    if (userInput.includes('къде спят') || userInput.includes('спят кучетата') || userInput.includes('стаи') || userInput.includes('настаняване')) {
      return quickQuestions[10].answer
    }
    if (userInput.includes('видеонаблюдение') || userInput.includes('снимки') || userInput.includes('видеа') || userInput.includes('наблюдение')) {
      return quickQuestions[11].answer
    }
    if (userInput.includes('двор') || userInput.includes('игри') || userInput.includes('играят') || userInput.includes('двор за игри')) {
      return quickQuestions[12].answer
    }
    if (userInput.includes('извеждате') || userInput.includes('колко често') || userInput.includes('навън') || userInput.includes('разходка')) {
      return quickQuestions[13].answer
    }
    if (userInput.includes('несоциални') || userInput.includes('не са социални') || userInput.includes('агресивни') || userInput.includes('темперамент')) {
      return quickQuestions[14].answer
    }
    if (userInput.includes('цена') || userInput.includes('колко струва') || userInput.includes('цена на ден') || userInput.includes('престоят струва')) {
      return quickQuestions[15].answer
    }
    if (userInput.includes('отстъпки') || userInput.includes('дълъг престой') || userInput.includes('повече дни') || userInput.includes('дългосрочно')) {
      return quickQuestions[16].answer
    }
    if (userInput.includes('плащане') || userInput.includes('методи на плащане') || userInput.includes('карта') || userInput.includes('в брой')) {
      return quickQuestions[17].answer
    }
    if (userInput.includes('закъснея') || userInput.includes('закъснение') || userInput.includes('закъснявам') || userInput.includes('взема кучето')) {
      return quickQuestions[18].answer
    }
    if (userInput.includes('къде се намирате') || userInput.includes('адрес') || userInput.includes('местоположение') || userInput.includes('къде сте')) {
      return quickQuestions[19].answer
    }
    if (userInput.includes('уикенд') || userInput.includes('работно време') || userInput.includes('работите ли') || userInput.includes('седмица')) {
      return quickQuestions[20].answer
    }
    if (userInput.includes('телефон') || userInput.includes('контакт') || userInput.includes('връзка') || userInput.includes('номер')) {
      return quickQuestions[21].answer
    }
    if (userInput.includes('разгледам') || userInput.includes('визита') || userInput.includes('преди престоя') || userInput.includes('оглед')) {
      return quickQuestions[22].answer
    }
    if (userInput.includes('любимият гост') || userInput.includes('любим гост') || userInput.includes('фаворит') || userInput.includes('кой е любимият')) {
      return quickQuestions[23].answer
    }
    if (userInput.includes('доведе приятел') || userInput.includes('приятел') || userInput.includes('група') || userInput.includes('друго куче')) {
      return quickQuestions[24].answer
    }
    if (userInput.includes('басейн') || userInput.includes('плуване') || userInput.includes('вода')) {
      return quickQuestions[25].answer
    }
    if (userInput.includes('рожден ден') || userInput.includes('рождени дни') || userInput.includes('празнувате') || userInput.includes('парти')) {
      return quickQuestions[26].answer
    }
    if (userInput.includes('котки') || userInput.includes('котка') || userInput.includes('само кучета') || userInput.includes('други животни')) {
      return quickQuestions[27].answer
    }
    if (userInput.includes('малки кученца') || userInput.includes('кученца') || userInput.includes('под 6 месеца') || userInput.includes('малки')) {
      return quickQuestions[28].answer
    }
    if (userInput.includes('ограничение') || userInput.includes('килограми') || userInput.includes('размер') || userInput.includes('тегло')) {
      return quickQuestions[29].answer
    }
    if (userInput.includes('максимум') || userInput.includes('колко животни') || userInput.includes('капацитет') || userInput.includes('лимит')) {
      return quickQuestions[30].answer
    }
    if (userInput.includes('служители') || userInput.includes('персонал') || userInput.includes('екип') || userInput.includes('колко хора')) {
      return quickQuestions[31].answer
    }
    if (userInput.includes('кастрирано') || userInput.includes('кастрация') || userInput.includes('некастрирано')) {
      return quickQuestions[32].answer
    }
    if (userInput.includes('паспорт') || userInput.includes('документи') || userInput.includes('документ')) {
      return quickQuestions[33].answer
    }
    if (userInput.includes('ваксини') || userInput.includes('ваксина') || userInput.includes('обезпаразитяване') || userInput.includes('паразити')) {
      return quickQuestions[34].answer
    }
    if (userInput.includes('меню') || userInput.includes('храна') || userInput.includes('ястия') || userInput.includes('хранителни')) {
      return quickQuestions[35].answer
    }
    if (userInput.includes('купички') || userInput.includes('собствена храна') || userInput.includes('донеса храна')) {
      return quickQuestions[36].answer
    }
    if (userInput.includes('чувствителни') || userInput.includes('алергии') || userInput.includes('специална храна')) {
      return quickQuestions[37].answer
    }
    if (userInput.includes('не иска да яде') || userInput.includes('не яде') || userInput.includes('отказва от храна')) {
      return quickQuestions[38].answer
    }
    if (userInput.includes('лекарства по график') || userInput.includes('медикаменти') || userInput.includes('дава лекарства')) {
      return quickQuestions[39].answer
    }
    if (userInput.includes('ветеринар на място') || userInput.includes('дежурен ветеринар') || userInput.includes('ветеринарна клиника')) {
      return quickQuestions[40].answer
    }
    if (userInput.includes('спят заедно') || userInput.includes('поотделно') || userInput.includes('индивидуални стаи')) {
      return quickQuestions[41].answer
    }
    if (userInput.includes('как изглеждат стаите') || userInput.includes('стаите') || userInput.includes('настаняване')) {
      return quickQuestions[42].answer
    }
    if (userInput.includes('температура') || userInput.includes('климатизация') || userInput.includes('отопление') || userInput.includes('регулира')) {
      return quickQuestions[43].answer
    }
    if (userInput.includes('разходки извън двора') || userInput.includes('извън двора') || userInput.includes('външни разходки')) {
      return quickQuestions[45].answer
    }
    if (userInput.includes('индивидуално внимание') || userInput.includes('галене') || userInput.includes('игри')) {
      return quickQuestions[46].answer
    }
    if (userInput.includes('страхливо') || userInput.includes('страхлив') || userInput.includes('бои се')) {
      return quickQuestions[47].answer
    }
    if (userInput.includes('се разбират') || userInput.includes('взаимодействие') || userInput.includes('социализация')) {
      return quickQuestions[48].answer
    }
    if (userInput.includes('снимки всеки ден') || userInput.includes('ежедневни снимки') || userInput.includes('видеа')) {
      return quickQuestions[49].answer
    }
    if (userInput.includes('обаждам') || userInput.includes('питам как е') || userInput.includes('контакт')) {
      return quickQuestions[50].answer
    }
    if (userInput.includes('viber') || userInput.includes('whatsapp') || userInput.includes('актуализации')) {
      return quickQuestions[51].answer
    }
    if (userInput.includes('видеоразговор') || userInput.includes('видео чат') || userInput.includes('видео обаждане')) {
      return quickQuestions[52].answer
    }
    if (userInput.includes('цена на нощувката') || userInput.includes('нощувка') || userInput.includes('цена за ден')) {
      return quickQuestions[53].answer
    }
    if (userInput.includes('какво включва цената') || userInput.includes('включва цената') || userInput.includes('какво включва')) {
      return quickQuestions[54].answer
    }
    if (userInput.includes('различни пакети') || userInput.includes('пакети') || userInput.includes('vip') || userInput.includes('стандарт')) {
      return quickQuestions[55].answer
    }
    if (userInput.includes('къпане и подстригване') || userInput.includes('груминг') || userInput.includes('стрижка')) {
      return quickQuestions[56].answer
    }
    if (userInput.includes('заплаща') || userInput.includes('плащане') || userInput.includes('при оставяне') || userInput.includes('при взимане')) {
      return quickQuestions[57].answer
    }
    if (userInput.includes('отстъпки за повече кучета') || userInput.includes('повече от едно куче') || userInput.includes('група кучета')) {
      return quickQuestions[58].answer
    }
    if (userInput.includes('транспорт') || userInput.includes('доставка') || userInput.includes('превоз')) {
      return quickQuestions[59].answer
    }
    if (userInput.includes('как се приема') || userInput.includes('приемане') || userInput.includes('попълване')) {
      return quickQuestions[60].answer
    }
    if (userInput.includes('доведа лично') || userInput.includes('лично') || userInput.includes('сам')) {
      return quickQuestions[61].answer
    }
    if (userInput.includes('часове за приемане') || userInput.includes('работно време') || userInput.includes('кога приемате')) {
      return quickQuestions[62].answer
    }
    if (userInput.includes('какво трябва да донеса') || userInput.includes('донеса') || userInput.includes('необходими неща')) {
      return quickQuestions[63].answer
    }
    if (userInput.includes('закъснея с прибирането') || userInput.includes('прибирането') || userInput.includes('взимане')) {
      return quickQuestions[64].answer
    }
    if (userInput.includes('не се разбира с други') || userInput.includes('агресивно') || userInput.includes('несоциално')) {
      return quickQuestions[65].answer
    }
    if (userInput.includes('обучение за социализация') || userInput.includes('социализация') || userInput.includes('обучение')) {
      return quickQuestions[66].answer
    }
    if (userInput.includes('се сбие') || userInput.includes('сбиване') || userInput.includes('агресия')) {
      return quickQuestions[67].answer
    }
    if (userInput.includes('лае много') || userInput.includes('лай') || userInput.includes('шумно')) {
      return quickQuestions[68].answer
    }
    if (userInput.includes('тестов престой') || userInput.includes('пробен престой') || userInput.includes('първи път')) {
      return quickQuestions[69].answer
    }
    if (userInput.includes('груминг услуги') || userInput.includes('къпане') || userInput.includes('подстригване')) {
      return quickQuestions[70].answer
    }
    if (userInput.includes('снимано професионално') || userInput.includes('фотосесия') || userInput.includes('професионални снимки')) {
      return quickQuestions[71].answer
    }
    if (userInput.includes('кучешки рожден ден') || userInput.includes('рожден ден') || userInput.includes('парти за кучета')) {
      return quickQuestions[72].answer
    }
    if (userInput.includes('транспорт от софия') || userInput.includes('до софия') || userInput.includes('софия')) {
      return quickQuestions[73].answer
    }
    if (userInput.includes('дневна грижа') || userInput.includes('dog daycare') || userInput.includes('дневно настаняване')) {
      return quickQuestions[74].answer
    }
    if (userInput.includes('здравей') || userInput.includes('привет') || userInput.includes('добър ден')) {
      return "Здравейте! 🐾 Радвам се, че сте тук! Как мога да ви помогна с въпросите за нашия луксозен хотел за кучета?"
    }
    if (userInput.includes('благодаря') || userInput.includes('мерси') || userInput.includes('благодар')) {
      return "Моля! 😊 Винаги съм тук да ви помогна. Ако имате други въпроси, не се колебайте да питате!"
    }

    // Общ отговор за неизвестни въпроси
    return "Интересен въпрос! 🤔 За по-подробна информация моля свържете се с нас в Instagram (@rozis_luxury_dog_hotel) или на телефона +359 882 739 396. Нашият екип ще ви помогне с всичко!"
  }

  const handleQuickQuestion = (question: QuickQuestion) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: question.question,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: question.answer,
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 sm:w-16 sm:h-16 bg-gradient-to-br from-soft-pink to-luxury-purple rounded-full shadow-2xl flex items-center justify-center z-40 hover:shadow-3xl transition-all duration-300 chatbot-button"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="text-3xl"
        >
          🐕
        </motion.div>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
          >
            <span className="text-white text-xs font-bold">!</span>
          </motion.div>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 sm:h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden chatbot-window"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-soft-pink to-luxury-purple p-4 text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">🐕</div>
                <div>
                  <h3 className="font-bold text-lg">Rozi's Assistant</h3>
                  <p className="text-sm opacity-90">Онлайн</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-gradient-to-r from-soft-pink to-luxury-purple text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString('bg-BG', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Questions */}
              {messages.length <= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <p className="text-xs text-gray-500 text-center mb-2">Често задавани въпроси:</p>
                  
                  {/* Поле за търсене */}
                  <div className="mb-3 relative">
                    <input
                      type="text"
                      placeholder="Търсете въпрос..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-3 py-2 pr-8 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-pink focus:border-transparent"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  {/* Първи ред - най-важните въпроси (винаги видими) */}
                  <div className="space-y-2 mb-3">
                    <p className="text-xs text-gray-400 font-medium">Популярни въпроси:</p>
                    {topQuestions.map((question) => (
                      <button
                        key={question.id}
                        onClick={() => handleQuickQuestion(question)}
                        className="w-full text-left p-2 bg-gradient-to-r from-soft-pink/20 to-luxury-purple/20 hover:from-soft-pink/30 hover:to-luxury-purple/30 rounded-lg text-sm text-gray-700 transition-all duration-200 border border-soft-pink/30"
                      >
                        {question.question}
                      </button>
                    ))}
                  </div>

                  {/* Филтриран списък с всички въпроси */}
                  <div className="max-h-32 overflow-y-auto space-y-1">
                    <p className="text-xs text-gray-400 font-medium">
                      {searchQuery ? `Резултати за "${searchQuery}":` : "Всички въпроси:"}
                    </p>
                    {(searchQuery ? filteredQuestions : otherQuestions).map((question) => (
                      <button
                        key={question.id}
                        onClick={() => handleQuickQuestion(question)}
                        className="w-full text-left p-1.5 bg-gray-50 hover:bg-gray-100 rounded text-xs text-gray-600 transition-colors"
                      >
                        {question.question}
                      </button>
                    ))}
                    {searchQuery && filteredQuestions.length === 0 && (
                      <p className="text-xs text-gray-400 text-center py-2">
                        Няма намерени въпроси за "{searchQuery}"
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Напишете въпрос..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-soft-pink focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="w-10 h-10 bg-gradient-to-r from-soft-pink to-luxury-purple rounded-lg flex items-center justify-center text-white hover:opacity-80 disabled:opacity-50 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot
