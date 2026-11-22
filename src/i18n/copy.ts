export type Lang = 'he' | 'en' | 'fr'

export const LANGS: readonly Lang[] = ['he', 'en', 'fr']

export const isRtl = (lang: Lang) => lang === 'he'
export const PAYBOX_URL = 'https://links.payboxapp.com/t841uJfZg8b'

export const PRICE = 649
export const LIST_PRICE = 990

const he = {
  meta: {
    title: 'KitchenTablet | טאבלט המתכונים המשפחתי',
    description:
      'טאבלט ייעודי למתכונים בלי הסחות דעת, שהופך למסגרת תמונות חיה של המשפחה. 649 ₪ כולל מעמד מגנטי, 50 מתכוני בסיס ומשלוח חינם.',
  },
  brand: 'טאבלט המתכונים',
  langSwitch: { label: 'שפת האתר', he: 'עברית', en: 'English', fr: 'Français' },
  nav: {
    demo: 'התנסות חיה',
    features: 'למה זה משנה הכל',
    order: 'מה בקופסה',
    faq: 'שאלות נפוצות',
  },
  cta: {
    orderFor: (p: string) => `להזמנה ב-${p}`,
    orderShort: 'להזמנה',
    why: 'למה זה עובד כל כך טוב?',
    newTab: '(נפתח בלשונית חדשה)',
  },
  hero: {
    badge: 'טאבלט המתכונים והמשפחה • מוכן לעבודה מהקופסה',
    titleA: 'המטבח חוזר להיות',
    titleB: 'הלב של הבית.',
    lead: 'טאבלט ייעודי למתכונים בלי הסחות דעת, שהופך למסגרת תמונות חיה של המשפחה כשהידיים נקיות.',
    priceNote: 'כולל משלוח חינם עד הבית ואחריות מלאה',
  },
  demo: {
    cookTab: 'מצב בישול',
    cookHint: '(לחצו לניסיון)',
    frameTab: 'מצב מסגרת משפחתית',
    kitchenName: 'המטבח של משפחת כהן',
    alwaysOn: 'מסך נשאר דלוק תמיד',
    recipeTag: 'מתכון משפחתי ❤️',
    recipeTitle: 'חלת שבת של אמא',
    recipeDesc: 'רכה כמו ענן, מתקתקה במידה המדויקת, עם ציפוי שומשום קלוי.',
    recipeAlt: 'חלת שבת קלועה עם שומשום',
    checklistTag: 'חלת שבת של אמא • סמנו מצרכים',
    progress: (done: number, total: number) => `${done}/${total} הושלמו`,
    autoReset: 'יתאפס לבד בסיום',
    reset: 'איפוס',
    ingredients: [
      '1 ק״ג קמח חלה מנופה היטב',
      '2 כפות שמרים יבשים + ½ כוס סוכר',
      '2.5 כוסות מים פושרים + ½ כוס שמן',
      'כף מלח שטוחה (בסוף הלישה)',
      'אפייה ב-180° ל-28 דקות עד להזהבה',
    ],
    birthdayLabel: 'לוח ימי הולדת משפחתי',
    birthday: 'יום הולדת לדוד בעוד 3 ימים!',
    photoCaption: 'ארוחת שישי אצל סבתא',
    photoSync: 'התמונות מתעדכנות אוטומטית מהמשפחה',
    familyAlt: 'משפחה סביב שולחן ארוחת שישי',
    dateLocale: 'he-IL-u-ca-hebrew',
    library: {
      title: 'ספריית הבית',
      offline: '100% אופליין',
      categories: [
        { emoji: '🍞', name: 'אפייה וחלות', count: '14 מתכונים' },
        { emoji: '🍲', name: 'ארוחות שישי', count: '22 מתכונים' },
        { emoji: '🍰', name: 'קינוחים', count: '18 מתכונים' },
        { emoji: '🥗', name: 'סלטים', count: '11 מתכונים' },
      ],
      noAds: 'בלי פרסומות וקופצים',
      view: 'לחצו להצגה',
    },
    frameCard: {
      upcoming: 'תזכורת קרובה',
      birthday: 'יום הולדת לדוד בעוד 3 ימים 🎂',
      title: 'מצב מסגרת משפחתית',
      view: 'לחצו לתצוגה מלאה',
    },
  },
  trust: [
    { title: 'משלוח חינם עד הבית', sub: 'שליח תוך 2-4 ימי עסקים' },
    { title: 'אחריות מלאה', sub: 'על הטאבלט והמעמד' },
    { title: 'תשלום מאובטח ב-PayBox', sub: 'קישור תשלום מהיר ובטוח' },
    { title: 'תמיכה מלאה בוואטסאפ', sub: 'נבנה למטבחים ישראליים' },
  ],
  features: {
    eyebrow: 'פשוט, חכם וביתי',
    titleA: 'בנוי בדיוק למטבח.',
    titleB: 'לא לעוד גלילה ברשתות.',
    familyTitle: 'המתכונים של המשפחה, במקום אחד.',
    familyBody: 'אפשר להוסיף את המתכונים המשפחתיים שלכם — החלה של אמא, העוגה של סבתא — לצד 50 מתכוני הבסיס.',
    items: [
      {
        title: 'אפס הסחות דעת',
        body: 'אין התראות, אין פרסומות ואין מסך שנכבה באמצע הלישה. עובד חלק גם בלי חיבור לאינטרנט.',
        note: 'מצב מסך ער תמיד בזמן בישול',
      },
      {
        title: 'מתעורר לחיים כשנחים',
        body: 'כשהבישול נגמר, המסך מציג את תמונות המשפחה, השעה וימי ההולדת הקרובים — תכשיט חמים על השיש.',
        note: 'שיתוף תמונות קל מכל בני המשפחה',
      },
      {
        title: 'מוכן מהקופסה (Plug & Play)',
        body: 'מגיע עם מעמד טעינה מגנטי. מחברים לחשמל והוא עובד מיד עם 50 מתכוני בסיס מוכנים.',
        note: 'תמיד טעון ב-100% ונשלף בשנייה',
      },
    ],
  },
  order: {
    gift: 'מתנה מרגשת לבית, לחג או להורים',
    title: 'ערכת KitchenTablet מלאה.',
    lead: 'אנחנו מכינים עבורכם את הכל מראש. פותחים את הקופסה, מניחים על המעמד המגנטי על השיש — ומתחילים לבשל.',
    boxTitle: 'מה מחכה לכם בקופסה:',
    box: [
      'הטאבלט (10.1 אינץ׳ בהיר המותאם לתאורת מטבח)',
      'מעמד טעינה מגנטי יוקרתי + כבל חשמל',
      '50 מתכוני בסיס מוכנים + מצב מסגרת משפחתית',
      'אפשרות להוסיף את המתכונים המשפחתיים שלכם',
    ],
    kit: 'ערכה מלאה מוכנה להפעלה',
    save: (amount: string) => `חוסכים ${amount}`,
    was: 'במקום',
    included: 'כולל משלוח חינם עד הבית ואחריות מלאה',
    button: 'להזמנה ותשלום ב-PayBox',
    payNote: 'תשלום מאובטח ב-PayBox • נפתח בלשונית חדשה',
  },
  faq: {
    eyebrow: 'שאלות נפוצות',
    title: 'כל מה שרציתם לדעת לפני שמזמינים',
    items: [
      {
        q: 'יש פרסומות בטאבלט?',
        a: 'ממש לא. אפס פרסומות, אפס תוכן ממומן, אפס שיתופי פעולה, אפס מותגים ואפס קישורי שותפים. כלום. רק המתכונים שלכם והתמונות של המשפחה.',
      },
      {
        q: 'צריך חיבור לאינטרנט כדי לבשל?',
        a: 'לא. ספריית המתכונים ומצב הבישול עובדים 100% אופליין — בלי התראות, בלי פרסומות ובלי קופצים.',
      },
      {
        q: 'המסך לא ייכבה לי באמצע הלישה?',
        a: 'לא. בזמן בישול המסך נשאר דלוק תמיד. כשמסיימים, הוא עובר למצב מסגרת משפחתית עם תמונות, השעה וימי ההולדת הקרובים.',
      },
      {
        q: 'מה יש בקופסה?',
        a: 'טאבלט 10.1 אינץ׳ בהיר המותאם לתאורת מטבח, מעמד טעינה מגנטי + כבל חשמל, 50 מתכוני בסיס מוכנים ומצב מסגרת משפחתית. מחברים לחשמל וזה עובד.',
      },
      {
        q: 'אפשר להוסיף את המתכונים המשפחתיים שלנו?',
        a: 'כן. משפחות יכולות להוסיף את המתכונים שלהן, והם נשמרים בספריית הבית לצד 50 מתכוני הבסיס.',
      },
      {
        q: 'איך משלמים?',
        a: 'כל כפתור הזמנה בעמוד מעביר אתכם לדף תשלום מאובטח של PayBox. מיד לאחר אישור התשלום נתחיל בהכנת הטאבלט שלכם.',
      },
      {
        q: 'תוך כמה זמן זה מגיע?',
        a: 'שליח עד הבית תוך 2-4 ימי עסקים, חינם. הערכה כוללת אחריות מלאה ותמיכה מלאה בוואטסאפ.',
      },
    ],
  },
  finalCta: {
    title: 'המטבח חוזר להיות הלב של הבית.',
    sub: 'טאבלט + מעמד מגנטי + 50 מתכוני בסיס, עם משלוח חינם עד הבית.',
  },
  footer: {
    name: 'KitchenTablet • טאבלט המתכונים של המשפחה',
    note: 'נבנה באהבה למטבחים ישראליים • תמיכה מלאה בוואטסאפ',
  },
  floating: 'להזמנת ערכת KitchenTablet',
}

export type Copy = typeof he

const en: Copy = {
  meta: {
    title: 'KitchenTablet | The family recipe tablet',
    description:
      'A distraction-free recipe tablet that turns into a living family photo frame. ₪649 with a magnetic stand, 50 starter recipes and free delivery.',
  },
  brand: 'KitchenTablet',
  langSwitch: { label: 'Site language', he: 'עברית', en: 'English', fr: 'Français' },
  nav: {
    demo: 'Try it live',
    features: 'Why it changes everything',
    order: "What's in the box",
    faq: 'FAQ',
  },
  cta: {
    orderFor: (p) => `Order for ${p}`,
    orderShort: 'Order',
    why: 'Why does it work so well?',
    newTab: '(opens in a new tab)',
  },
  hero: {
    badge: 'The family recipe tablet • Ready out of the box',
    titleA: 'Make the kitchen',
    titleB: 'the heart of the home again.',
    lead: 'A dedicated, distraction-free recipe tablet that becomes a living family photo frame the moment your hands are clean.',
    priceNote: 'Free home delivery and full warranty included',
  },
  demo: {
    cookTab: 'Cooking mode',
    cookHint: '(tap to try)',
    frameTab: 'Family frame mode',
    kitchenName: "The Cohen family's kitchen",
    alwaysOn: 'Screen always on',
    recipeTag: 'Family recipe ❤️',
    recipeTitle: "Mom's Shabbat challah",
    recipeDesc: 'Soft as a cloud, just sweet enough, with a toasted sesame crust.',
    recipeAlt: 'Braided challah topped with sesame seeds',
    checklistTag: "Mom's Shabbat challah • Tick off ingredients",
    progress: (done, total) => `${done}/${total} done`,
    autoReset: 'Resets itself when you finish',
    reset: 'Reset',
    ingredients: [
      '1 kg challah flour, well sifted',
      '2 tbsp dry yeast + ½ cup sugar',
      '2.5 cups lukewarm water + ½ cup oil',
      '1 level tbsp salt (at the end of kneading)',
      'Bake at 180°C for 28 minutes until golden',
    ],
    birthdayLabel: 'Family birthday calendar',
    birthday: "David's birthday is in 3 days!",
    photoCaption: "Friday dinner at Grandma's",
    photoSync: 'Photos update automatically from the family',
    familyAlt: 'A family gathered around a Friday night dinner table',
    dateLocale: 'en-US',
    library: {
      title: 'Home library',
      offline: '100% offline',
      categories: [
        { emoji: '🍞', name: 'Baking & challah', count: '14 recipes' },
        { emoji: '🍲', name: 'Friday dinners', count: '22 recipes' },
        { emoji: '🍰', name: 'Desserts', count: '18 recipes' },
        { emoji: '🥗', name: 'Salads', count: '11 recipes' },
      ],
      noAds: 'No ads, no pop-ups',
      view: 'Tap to view',
    },
    frameCard: {
      upcoming: 'Coming up',
      birthday: "David's birthday in 3 days 🎂",
      title: 'Family frame mode',
      view: 'Tap for full view',
    },
  },
  trust: [
    { title: 'Free home delivery', sub: 'By courier in 2–4 business days' },
    { title: 'Full warranty', sub: 'On the tablet and the stand' },
    { title: 'Secure payment with PayBox', sub: 'A fast, safe payment link' },
    { title: 'Full WhatsApp support', sub: 'Built for Israeli kitchens' },
  ],
  features: {
    eyebrow: 'Simple, smart and homey',
    titleA: 'Built for the kitchen.',
    titleB: 'Not for more scrolling.',
    familyTitle: 'Your family’s recipes, all in one place.',
    familyBody: 'Add your own family recipes — Mom’s challah, Grandma’s cake — right alongside the 50 starter recipes.',
    items: [
      {
        title: 'Zero distractions',
        body: 'No notifications, no ads, and no screen going dark halfway through kneading. Runs smoothly even without an internet connection.',
        note: 'Always-on screen while you cook',
      },
      {
        title: 'Comes alive when you rest',
        body: 'When the cooking is done, the screen shows family photos, the time and upcoming birthdays — a warm keepsake on the counter.',
        note: 'Easy photo sharing from every family member',
      },
      {
        title: 'Ready out of the box (Plug & Play)',
        body: 'Comes with a magnetic charging stand. Plug it in and it works right away, with 50 ready-made starter recipes.',
        note: 'Always at 100% and off the stand in a second',
      },
    ],
  },
  order: {
    gift: 'A heartwarming gift for the home, the holidays or your parents',
    title: 'The complete KitchenTablet kit.',
    lead: 'We set everything up for you in advance. Open the box, place it on the magnetic stand on your counter — and start cooking.',
    boxTitle: "What's waiting in the box:",
    box: [
      'The tablet (bright 10.1″ screen tuned for kitchen lighting)',
      'Premium magnetic charging stand + power cable',
      '50 ready-made starter recipes + family frame mode',
      'Room to add your own family recipes',
    ],
    kit: 'Complete kit, ready to go',
    save: (amount) => `Save ${amount}`,
    was: 'Was',
    included: 'Free home delivery and full warranty included',
    button: 'Order & pay with PayBox',
    payNote: 'Secure payment with PayBox • Opens in a new tab',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Everything you want to know before ordering',
    items: [
      {
        q: 'Are there advertisements on the tablet?',
        a: 'Absolutely not. Zero ads, zero sponsored content or co-ops, zero brands, zero affiliate links. Nothing. Just your recipes and your family photos.',
      },
      {
        q: 'Do I need an internet connection to cook?',
        a: 'No. The recipe library and cooking mode work 100% offline — no notifications, no ads and no pop-ups.',
      },
      {
        q: 'Will the screen turn off while I’m kneading?',
        a: 'No. In cooking mode the screen stays on the whole time. When you’re done, it switches to family frame mode with photos, the time and upcoming birthdays.',
      },
      {
        q: "What's in the box?",
        a: 'A bright 10.1″ tablet tuned for kitchen lighting, a magnetic charging stand with power cable, 50 ready-made starter recipes and family frame mode. Plug it in and it just works.',
      },
      {
        q: 'Can we add our own family recipes?',
        a: 'Yes. Families can add their own recipes, and they sit in the home library right alongside the 50 starter recipes.',
      },
      {
        q: 'How do I pay?',
        a: 'Every order button on this page takes you to a secure PayBox payment page. As soon as your payment is approved, we start preparing your tablet.',
      },
      {
        q: 'How fast does it arrive?',
        a: 'Free courier delivery to your door within 2–4 business days. Every kit includes a full warranty and full support on WhatsApp.',
      },
    ],
  },
  finalCta: {
    title: 'Make the kitchen the heart of the home again.',
    sub: 'Tablet + magnetic stand + 50 starter recipes, with free delivery to your door.',
  },
  footer: {
    name: 'KitchenTablet • The family recipe tablet',
    note: 'Built with love for Israeli kitchens • Full support on WhatsApp',
  },
  floating: 'Order the KitchenTablet kit',
}

// French typography: narrow no-break space before ? ! and a no-break space before : and %.
const fr: Copy = {
  meta: {
    title: 'KitchenTablet | La tablette à recettes de la famille',
    description:
      'Une tablette dédiée aux recettes, sans distractions, qui devient un cadre photo vivant pour toute la famille. 649\u00A0₪ avec support magnétique, 50 recettes de base et livraison offerte.',
  },
  brand: 'KitchenTablet',
  langSwitch: { label: 'Langue du site', he: 'עברית', en: 'English', fr: 'Français' },
  nav: {
    demo: 'Essayer en direct',
    features: 'Pourquoi ça change tout',
    order: 'Dans la boîte',
    faq: 'FAQ',
  },
  cta: {
    orderFor: (p) => `Commander pour ${p}`,
    orderShort: 'Commander',
    why: 'Pourquoi ça marche si bien\u202F?',
    newTab: '(s’ouvre dans un nouvel onglet)',
  },
  hero: {
    badge: 'La tablette à recettes de la famille • Prête à l’emploi',
    titleA: 'La cuisine redevient',
    titleB: 'le cœur de la maison.',
    lead: 'Une tablette dédiée aux recettes, sans aucune distraction, qui se transforme en cadre photo vivant de la famille dès que vous avez les mains propres.',
    priceNote: 'Livraison à domicile offerte et garantie complète',
  },
  demo: {
    cookTab: 'Mode cuisine',
    cookHint: '(touchez pour essayer)',
    frameTab: 'Mode cadre familial',
    kitchenName: 'La cuisine des Cohen',
    alwaysOn: 'Écran toujours allumé',
    recipeTag: 'Recette de famille ❤️',
    recipeTitle: 'La challah du shabbat de maman',
    recipeDesc: 'Moelleuse comme un nuage, juste assez sucrée, avec une croûte de sésame grillé.',
    recipeAlt: 'Challah tressée parsemée de sésame',
    checklistTag: 'La challah de maman • Cochez les ingrédients',
    progress: (done, total) => `${done}/${total} faits`,
    autoReset: 'Se remet à zéro tout seul à la fin',
    reset: 'Effacer',
    ingredients: [
      '1\u00A0kg de farine à challah, bien tamisée',
      '2 c. à soupe de levure sèche + ½ tasse de sucre',
      '2,5 tasses d’eau tiède + ½ tasse d’huile',
      '1 c. à soupe rase de sel (en fin de pétrissage)',
      'Cuire à 180\u00A0°C pendant 28 minutes, jusqu’à ce qu’elle soit dorée',
    ],
    birthdayLabel: 'Calendrier des anniversaires',
    birthday: 'L’anniversaire de David dans 3 jours\u202F!',
    photoCaption: 'Dîner du vendredi soir chez mamie',
    photoSync: 'Les photos se mettent à jour automatiquement depuis la famille',
    familyAlt: 'Une famille réunie autour de la table du dîner du vendredi soir',
    dateLocale: 'fr-FR',
    library: {
      title: 'Bibliothèque maison',
      offline: '100\u00A0% hors ligne',
      categories: [
        { emoji: '🍞', name: 'Pains et challahs', count: '14 recettes' },
        { emoji: '🍲', name: 'Dîners du vendredi', count: '22 recettes' },
        { emoji: '🍰', name: 'Desserts', count: '18 recettes' },
        { emoji: '🥗', name: 'Salades', count: '11 recettes' },
      ],
      noAds: 'Sans pubs ni pop-ups',
      view: 'Voir',
    },
    frameCard: {
      upcoming: 'Bientôt',
      birthday: 'Anniversaire de David dans 3 jours 🎂',
      title: 'Mode cadre familial',
      view: 'Afficher en grand',
    },
  },
  trust: [
    { title: 'Livraison offerte à domicile', sub: 'Par coursier en 2 à 4 jours ouvrés' },
    { title: 'Garantie complète', sub: 'Sur la tablette et le support' },
    { title: 'Paiement sécurisé via PayBox', sub: 'Un lien de paiement rapide et sûr' },
    { title: 'Assistance complète sur WhatsApp', sub: 'Conçue pour les cuisines israéliennes' },
  ],
  features: {
    eyebrow: 'Simple, malin et chaleureux',
    titleA: 'Pensée pour la cuisine.',
    titleB: 'Pas pour scroller sans fin.',
    familyTitle: 'Les recettes de la famille, au même endroit.',
    familyBody: 'Ajoutez vos propres recettes de famille — la challah de maman, le gâteau de mamie — à côté des 50 recettes de base.',
    items: [
      {
        title: 'Zéro distraction',
        body: 'Pas de notifications, pas de pubs, et pas d’écran qui s’éteint en plein pétrissage. Fonctionne parfaitement, même sans connexion Internet.',
        note: 'Écran toujours allumé pendant la cuisine',
      },
      {
        title: 'Elle s’anime quand vous faites une pause',
        body: 'Une fois le repas prêt, l’écran affiche les photos de famille, l’heure et les prochains anniversaires — un joli bijou sur le plan de travail.',
        note: 'Partage de photos facile pour toute la famille',
      },
      {
        title: 'Prête à l’emploi (Plug & Play)',
        body: 'Livrée avec un support de charge magnétique. On la branche et elle fonctionne aussitôt, avec 50 recettes de base prêtes.',
        note: 'Toujours chargée à 100\u00A0% et détachable en une seconde',
      },
    ],
  },
  order: {
    gift: 'Un cadeau touchant pour la maison, les fêtes ou vos parents',
    title: 'Le kit KitchenTablet complet.',
    lead: 'Nous préparons tout pour vous à l’avance. Ouvrez la boîte, posez la tablette sur son support magnétique sur le plan de travail — et à vos fourneaux.',
    boxTitle: 'Ce qui vous attend dans la boîte\u00A0:',
    box: [
      'La tablette (écran lumineux de 10,1″ adapté à l’éclairage de la cuisine)',
      'Support de charge magnétique haut de gamme + câble d’alimentation',
      '50 recettes de base prêtes + mode cadre familial',
      'La possibilité d’ajouter vos propres recettes de famille',
    ],
    kit: 'Kit complet, prêt à l’emploi',
    save: (amount) => `${amount} d’économie`,
    was: 'Au lieu de',
    included: 'Livraison à domicile offerte et garantie complète incluses',
    button: 'Commander et payer avec PayBox',
    payNote: 'Paiement sécurisé via PayBox • S’ouvre dans un nouvel onglet',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Tout ce qu’il faut savoir avant de commander',
    items: [
      {
        q: 'Y a-t-il de la publicité sur la tablette\u202F?',
        a: 'Absolument pas. Zéro pub, zéro contenu sponsorisé, zéro partenariat, zéro marque, zéro lien affilié. Rien. Juste vos recettes et vos photos de famille.',
      },
      {
        q: 'Faut-il une connexion Internet pour cuisiner\u202F?',
        a: 'Non. La bibliothèque de recettes et le mode cuisine fonctionnent 100\u00A0% hors ligne — sans notifications, sans pubs et sans pop-ups.',
      },
      {
        q: 'L’écran va-t-il s’éteindre pendant que je pétris\u202F?',
        a: 'Non. En mode cuisine, l’écran reste allumé en permanence. Une fois terminé, il passe en mode cadre familial avec les photos, l’heure et les prochains anniversaires.',
      },
      {
        q: 'Que contient la boîte\u202F?',
        a: 'Une tablette lumineuse de 10,1″ adaptée à l’éclairage de la cuisine, un support de charge magnétique avec câble d’alimentation, 50 recettes de base prêtes et le mode cadre familial. On branche, et ça marche.',
      },
      {
        q: 'Peut-on ajouter nos propres recettes de famille\u202F?',
        a: 'Oui. Les familles peuvent ajouter leurs propres recettes, qui rejoignent la bibliothèque maison à côté des 50 recettes de base.',
      },
      {
        q: 'Comment payer\u202F?',
        a: 'Chaque bouton de commande de cette page vous mène vers une page de paiement PayBox sécurisée. Dès la validation du paiement, nous commençons à préparer votre tablette.',
      },
      {
        q: 'Sous combien de temps est-elle livrée\u202F?',
        a: 'Livraison offerte par coursier jusqu’à votre porte sous 2 à 4 jours ouvrés. Chaque kit comprend une garantie complète et une assistance complète sur WhatsApp.',
      },
    ],
  },
  finalCta: {
    title: 'La cuisine redevient le cœur de la maison.',
    sub: 'Tablette + support magnétique + 50 recettes de base, livrés gratuitement chez vous.',
  },
  footer: {
    name: 'KitchenTablet • La tablette à recettes de la famille',
    note: 'Conçue avec amour pour les cuisines israéliennes • Assistance complète sur WhatsApp',
  },
  floating: 'Commander le kit KitchenTablet',
}

export const copy: Record<Lang, Copy> = { he, en, fr }

export function formatPrice(amount: number, lang: Lang) {
  if (lang === 'he') return `${amount} ₪`
  if (lang === 'fr') return `${amount}\u00A0₪`
  return `₪${amount}`
}
