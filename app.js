const lessons = [
  {
    id: 7,
    title: "Ganz schön mobil",
    arTitle: "التنقّل والمواصلات",
    summary: "Unterwegs sein, nach Informationen fragen und sicher den Weg erklären.",
    arSummary: "تتحدث عن وسائل المواصلات، تسأل عن المعلومات وتشرح الطريق بثقة.",
    topics: ["Verkehr", "Wegbeschreibung", "Arbeitsweg"],
    vocab: [
      ["der öffentliche Verkehr", "—", "المواصلات العامة", "Der öffentliche Verkehr ist in meiner Stadt gut ausgebaut."],
      ["das Verkehrsmittel", "-n", "وسيلة المواصلات", "Mein liebstes Verkehrsmittel ist die U-Bahn."],
      ["die Haltestelle", "-n", "المحطّة", "Die nächste Haltestelle ist direkt vor dem Bahnhof."],
      ["umsteigen", "ist umgestiegen", "يغيّر وسيلة المواصلات", "In Nürnberg müssen Sie in den ICE umsteigen."],
      ["sich verspäten", "hat sich verspätet", "يتأخر", "Der Zug hat sich um zwanzig Minuten verspätet."],
      ["die Verbindung", "-en", "خط أو وصلة المواصلات", "Gibt es eine direkte Verbindung nach Berlin?"],
      ["der Fahrplan", "Fahrpläne", "جدول المواعيد", "Ich sehe schnell im Fahrplan nach."],
      ["die Verspätung", "-en", "التأخير", "Wegen einer Verspätung komme ich später an."],
      ["abbiegen", "ist abgebogen", "ينعطف", "An der Ampel biegen Sie links ab."],
      ["geradeaus", "—", "إلى الأمام مباشرة", "Gehen Sie ungefähr zweihundert Meter geradeaus."],
      ["die Kreuzung", "-en", "التقاطع", "Nach der Kreuzung sehen Sie die Apotheke."],
      ["der Vorteil", "-e", "الميزة", "Ein Vorteil des Fahrrads ist die Flexibilität."],
      ["der Nachteil", "-e", "العيب", "Der größte Nachteil ist der starke Verkehr."],
      ["zuverlässig", "Adjektiv", "موثوق / منتظم", "Die Straßenbahn ist meistens zuverlässig."]
    ],
    intro: "Mobilität gehört zum Alltag. In dieser Lektion lernst du, eine passende Verbindung zu finden, höflich nachzufragen, Vor- und Nachteile zu vergleichen und deinen täglichen Arbeitsweg klar zu beschreiben.",
    arIntro: "التنقّل جزء من الحياة اليومية. في هذا الدرس ستتعلم اختيار خط مناسب، السؤال بأدب، مقارنة المميزات والعيوب، ووصف طريقك اليومي بوضوح.",
    points: [
      "Nenne zuerst das Verkehrsmittel und danach Dauer oder Häufigkeit.",
      "Bei einer Wegbeschreibung helfen klare Schritte: zuerst, dann, danach, schließlich.",
      "Begründe deine Meinung mit weil oder nenne eine Folge mit deshalb."
    ],
    phrases: [
      ["Können Sie mir sagen, wann der Zug abfährt?", "هل يمكن أن تخبرني متى ينطلق القطار؟"],
      ["Wissen Sie, ob ich umsteigen muss?", "هل تعرف إن كنت أحتاج إلى تغيير القطار؟"],
      ["Gehen Sie bis zur nächsten Kreuzung.", "اذهب حتى التقاطع التالي."],
      ["Auf der rechten Seite sehen Sie ...", "على الجانب الأيمن سترى..."],
      ["Für mich hat das Fahrrad den Vorteil, dass ...", "بالنسبة لي ميزة الدراجة هي أن..."],
      ["Normalerweise brauche ich etwa ... Minuten.", "عادة أحتاج حوالي ... دقيقة."]
    ],
    speech: "Ich wohne nicht weit vom Stadtzentrum entfernt. Normalerweise fahre ich mit der U-Bahn zur Arbeit, weil sie schnell und zuverlässig ist. Zuerst gehe ich fünf Minuten zur Haltestelle. Dann fahre ich vier Stationen und steige am Hauptbahnhof um. Insgesamt brauche ich ungefähr dreißig Minuten. Wenn das Wetter schön ist, nehme ich manchmal das Fahrrad. Das ist gesund und günstig, aber bei Regen ist es ziemlich unpraktisch.",
    arSpeech: "أسكن على مسافة غير بعيدة من وسط المدينة. عادة أذهب إلى العمل بالمترو لأنه سريع ومنتظم. أولًا أمشي خمس دقائق إلى المحطة، ثم أركب أربع محطات وأغيّر في المحطة الرئيسية. أحتاج إجمالًا إلى نحو ثلاثين دقيقة. عندما يكون الطقس جميلًا أستخدم الدراجة أحيانًا؛ فهي صحية ورخيصة، لكنها غير عملية عند المطر.",
    grammar: {
      title: "Indirekte Fragen",
      explanation: "Eine direkte Frage wird nach einer Einleitung zum Nebensatz. Das konjugierte Verb steht am Ende. Bei Ja-/Nein-Fragen benutzt du ob.",
      ar: "السؤال المباشر يتحول بعد جملة تمهيدية إلى جملة فرعية، ويأتي الفعل المصرف في النهاية. مع أسئلة نعم/لا نستخدم ob.",
      formula: "Einleitung + <mark>W-Fragewort / ob</mark> + Subjekt + ... + Verb.",
      examples: [
        "Wann fährt der Zug ab? → Wissen Sie, wann der Zug abfährt?",
        "Muss ich umsteigen? → Können Sie mir sagen, ob ich umsteigen muss?",
        "Wo ist die Haltestelle? → Ich weiß nicht, wo die Haltestelle ist."
      ]
    },
    dialogue: [
      ["A", "Entschuldigung, können Sie mir sagen, wie ich zum Rathaus komme?", "عذرًا، هل يمكنك إخباري كيف أصل إلى البلدية؟"],
      ["B", "Gern. Gehen Sie zuerst geradeaus und biegen Sie an der Ampel rechts ab.", "بكل سرور. اذهب أولًا مباشرة ثم انعطف يمينًا عند الإشارة."],
      ["A", "Ist es weit? Wissen Sie, ob ich auch den Bus nehmen kann?", "هل المكان بعيد؟ وهل يمكنني ركوب الحافلة؟"],
      ["B", "Zu Fuß sind es zehn Minuten. Der Bus lohnt sich also nicht.", "يستغرق المشي عشر دقائق، لذلك لا تستحق الحافلة."]
    ],
    quiz: [
      ["Welche Form ist richtig?", ["Wissen Sie, wann fährt der Zug?", "Wissen Sie, wann der Zug abfährt?", "Wissen Sie, der Zug wann abfährt?"], 1],
      ["Was bedeutet „umsteigen“?", ["das Verkehrsmittel wechseln", "zu spät kommen", "eine Fahrkarte kaufen"], 0],
      ["Ergänze: Können Sie mir sagen, ___ der Bus pünktlich kommt?", ["wann", "dass", "denn"], 0]
    ]
  },
  {
    id: 8,
    title: "Gelernt ist gelernt!",
    arTitle: "التعلّم والامتحانات",
    summary: "Lernprobleme lösen, Ratschläge geben und eine Präsentation souverän halten.",
    arSummary: "تصف مشكلات التعلّم، تقدم نصائح، وتلقي عرضًا قصيرًا بطريقة منظمة.",
    topics: ["Lernen", "Prüfungen", "Präsentationen"],
    vocab: [
      ["die Prüfung", "-en", "الامتحان", "Nächste Woche schreibe ich eine wichtige Prüfung."],
      ["sich vorbereiten auf", "hat sich vorbereitet", "يستعد لـ", "Ich bereite mich gründlich auf die Prüfung vor."],
      ["bestehen", "hat bestanden", "ينجح في الامتحان", "Sie hat die Sprachprüfung beim ersten Mal bestanden."],
      ["durchfallen", "ist durchgefallen", "يرسب", "Er ist leider durch die Fahrprüfung gefallen."],
      ["sich konzentrieren", "hat sich konzentriert", "يركّز", "In der Bibliothek kann ich mich besser konzentrieren."],
      ["auswendig lernen", "hat gelernt", "يحفظ عن ظهر قلب", "Neue Wörter lerne ich nicht nur auswendig."],
      ["wiederholen", "hat wiederholt", "يراجع / يكرر", "Am Abend wiederhole ich den Stoff vom Vormittag."],
      ["der Lernstoff", "—", "المادة الدراسية", "Ich teile den Lernstoff in kleine Portionen."],
      ["die Notiz", "-en", "الملاحظة", "Beim Lesen mache ich kurze Notizen."],
      ["der Vortrag", "Vorträge", "المحاضرة / العرض", "Sein Vortrag war klar und interessant."],
      ["die Folie", "-n", "شريحة العرض", "Auf jeder Folie steht nur eine Hauptidee."],
      ["der Ratschlag", "Ratschläge", "النصيحة", "Dein Ratschlag hat mir wirklich geholfen."],
      ["nervös", "Adjektiv", "متوتر", "Vor Prüfungen bin ich manchmal nervös."],
      ["Fortschritte machen", "hat gemacht", "يحرز تقدمًا", "Mit täglicher Übung mache ich schnell Fortschritte."]
    ],
    intro: "Erfolgreiches Lernen bedeutet nicht, stundenlang auf ein Buch zu schauen. Du brauchst ein klares Ziel, aktive Wiederholung und Pausen. Außerdem lernst du hier, Ratschläge freundlich zu formulieren und eine kurze Präsentation sinnvoll aufzubauen.",
    arIntro: "التعلّم الناجح لا يعني النظر في الكتاب لساعات. أنت تحتاج إلى هدف واضح، مراجعة نشطة، وفترات راحة. وستتعلم أيضًا صياغة النصيحة بلطف وبناء عرض قصير بشكل منطقي.",
    points: [
      "Formuliere ein konkretes Lernziel: Was willst du heute können?",
      "Erkläre den Stoff mit eigenen Worten, statt ihn nur noch einmal zu lesen.",
      "Eine Präsentation braucht Einleitung, zwei oder drei Hauptpunkte und einen klaren Schluss."
    ],
    phrases: [
      ["Du solltest regelmäßige Pausen machen.", "ينبغي أن تأخذ فترات راحة منتظمة."],
      ["An deiner Stelle würde ich früher anfangen.", "لو كنت مكانك لبدأت مبكرًا."],
      ["Was für eine Prüfung musst du machen?", "أي نوع من الامتحانات عليك أن تؤدي؟"],
      ["Heute möchte ich über ... sprechen.", "أود اليوم أن أتحدث عن..."],
      ["Mein Vortrag besteht aus drei Teilen.", "يتكون عرضي من ثلاثة أجزاء."],
      ["Zum Schluss fasse ich die wichtigsten Punkte zusammen.", "في النهاية ألخص أهم النقاط."]
    ],
    speech: "Beim Lernen ist für mich ein guter Plan besonders wichtig. Zuerst überlege ich, was ich genau können muss. Dann teile ich den Lernstoff in kleine Teile und arbeite ungefähr fünfundzwanzig Minuten konzentriert. Danach mache ich eine kurze Pause. Neue Wörter schreibe ich mit einem Beispielsatz auf und wiederhole sie regelmäßig. Vor einer Prüfung erkläre ich einem Freund die wichtigsten Regeln. So merke ich schnell, was ich schon verstanden habe und was ich noch üben muss.",
    arSpeech: "بالنسبة لي الخطة الجيدة مهمة جدًا عند التعلّم. أفكر أولًا فيما يجب أن أتقنه بالضبط، ثم أقسم المادة إلى أجزاء صغيرة وأعمل بتركيز نحو خمس وعشرين دقيقة، وبعدها آخذ استراحة قصيرة. أكتب الكلمات الجديدة مع جملة مثال وأراجعها بانتظام. قبل الامتحان أشرح أهم القواعد لصديق، وهكذا أعرف سريعًا ما فهمته وما زلت بحاجة إلى تدريبه.",
    grammar: {
      title: "Konjunktiv II mit sollte",
      explanation: "Mit sollte gibst du einen freundlichen Ratschlag. Das Vollverb bleibt im Infinitiv und steht am Satzende.",
      ar: "نستخدم sollte لتقديم نصيحة بطريقة لطيفة. يبقى الفعل الأساسي في المصدر ويأتي في نهاية الجملة.",
      formula: "Subjekt + <mark>sollte / solltest</mark> + ... + Infinitiv.",
      examples: [
        "Du solltest jeden Tag zehn Minuten wiederholen.",
        "Ihr solltet vor der Präsentation laut üben.",
        "Sie sollten sich nicht zu viel Stress machen."
      ]
    },
    dialogue: [
      ["A", "Ich kann mich beim Lernen überhaupt nicht konzentrieren.", "لا أستطيع التركيز أثناء المذاكرة إطلاقًا."],
      ["B", "Du solltest dein Handy ausschalten und einen ruhigen Platz suchen.", "ينبغي أن تغلق هاتفك وتبحث عن مكان هادئ."],
      ["A", "Und wie kann ich mir die neuen Wörter besser merken?", "وكيف أستطيع تذكّر الكلمات الجديدة بشكل أفضل؟"],
      ["B", "Schreib Beispielsätze und wiederhole die Wörter nach einem Tag noch einmal.", "اكتب جملًا وأعد مراجعة الكلمات بعد يوم."]
    ],
    quiz: [
      ["Du bist müde. Welcher Ratschlag passt?", ["Du solltest früher schlafen gehen.", "Du sollst gegangen.", "Du solltest früher geschlafen."], 0],
      ["Was bedeutet „eine Prüfung bestehen“?", ["bei einer Prüfung Erfolg haben", "eine Prüfung vergessen", "zu einer Prüfung kommen"], 0],
      ["Was gehört an den Anfang einer Präsentation?", ["eine Begrüßung und das Thema", "nur die Quellen", "sofort der letzte Punkt"], 0]
    ]
  },
  {
    id: 9,
    title: "Sportlich, sportlich",
    arTitle: "الرياضة والمشاعر",
    summary: "Über Sport sprechen, Gefühle ausdrücken und sich mit anderen verabreden.",
    arSummary: "تتحدث عن الرياضة، تعبّر عن الحماس والأمل وخيبة الأمل، وتتفق على موعد.",
    topics: ["Sport", "Fans", "Verabredungen"],
    vocab: [
      ["der Wettkampf", "Wettkämpfe", "المنافسة الرياضية", "Der Wettkampf beginnt am Samstag um zehn Uhr."],
      ["die Mannschaft", "-en", "الفريق", "Unsere Mannschaft hat sehr gut gespielt."],
      ["der Verein", "-e", "النادي / الجمعية", "Seit zwei Jahren bin ich Mitglied in einem Sportverein."],
      ["trainieren", "hat trainiert", "يتدرّب", "Wir trainieren dreimal pro Woche."],
      ["gewinnen", "hat gewonnen", "يفوز", "Die Mannschaft hat das Finale gewonnen."],
      ["verlieren", "hat verloren", "يخسر", "Trotz einer guten Leistung haben sie verloren."],
      ["der Fan", "-s", "المشجّع", "Die Fans feiern den Sieg auf der Straße."],
      ["der Sieg", "-e", "الفوز", "Der Sieg war für alle eine Überraschung."],
      ["die Niederlage", "-n", "الهزيمة", "Nach der Niederlage waren die Spieler enttäuscht."],
      ["sich verabreden", "hat sich verabredet", "يتفق على موعد", "Wir haben uns für Sonntag zum Joggen verabredet."],
      ["absagen", "hat abgesagt", "يلغي", "Ich muss unser Training leider absagen."],
      ["fit bleiben", "ist geblieben", "يحافظ على لياقته", "Ich fahre Rad, um fit zu bleiben."],
      ["begeistert", "Adjektiv", "متحمّس جدًا", "Die Zuschauer waren von dem Spiel begeistert."],
      ["enttäuscht", "Adjektiv", "محبط", "Nach dem Ergebnis war ich etwas enttäuscht."]
    ],
    intro: "Sport ist mehr als Bewegung: Er schafft Gemeinschaft und starke Gefühle. Du übst, von Erfolgen und Niederlagen zu erzählen, Vorschläge zu machen, Termine auszuhandeln und deine Meinung zu einer Sportart zu begründen.",
    arIntro: "الرياضة أكثر من مجرد حركة؛ فهي تصنع مجتمعًا ومشاعر قوية. ستتدرب على الحديث عن الفوز والهزيمة، اقتراح الأنشطة، الاتفاق على المواعيد، وتبرير رأيك في رياضة ما.",
    points: [
      "Beschreibe zuerst die Sportart, dann deine Erfahrung und schließlich deine Meinung.",
      "Reagiere emotional: Das war großartig! / Das ist wirklich schade.",
      "Bei einer Verabredung müssen Aktivität, Zeit und Treffpunkt klar sein."
    ],
    phrases: [
      ["Ich bin von dieser Sportart total begeistert.", "أنا متحمس جدًا لهذه الرياضة."],
      ["Hoffentlich gewinnen wir das nächste Spiel.", "أتمنى أن نفوز بالمباراة القادمة."],
      ["Das kann doch nicht wahr sein!", "لا يمكن أن يكون هذا صحيحًا!"],
      ["Darf ich etwas vorschlagen?", "هل يمكنني أن أقترح شيئًا؟"],
      ["Ja, das passt mir gut.", "نعم، هذا الموعد مناسب لي."],
      ["Am Freitag kann ich leider nicht.", "للأسف لا أستطيع يوم الجمعة."]
    ],
    speech: "Meine Lieblingssportart ist Schwimmen. Ich schwimme zweimal pro Woche, meistens am frühen Morgen. Dafür brauche ich nur eine Badehose, eine Brille und natürlich ein Schwimmbad. Schwimmen gefällt mir, weil dabei der ganze Körper arbeitet und die Gelenke nicht stark belastet werden. Außerdem kann ich beim Schwimmen gut abschalten. Manchmal ist es schwierig, früh aufzustehen, trotzdem fühle ich mich nach dem Training immer besser.",
    arSpeech: "رياضتي المفضلة هي السباحة. أسبح مرتين أسبوعيًا وغالبًا في الصباح الباكر. أحتاج فقط إلى ملابس سباحة ونظارة ومسبح. أحب السباحة لأنها تحرك الجسم كله ولا تضغط كثيرًا على المفاصل، كما أنها تساعدني على تصفية ذهني. أحيانًا يكون الاستيقاظ مبكرًا صعبًا، ومع ذلك أشعر دائمًا بتحسن بعد التدريب.",
    grammar: {
      title: "deshalb und trotzdem",
      explanation: "Beide Wörter verbinden zwei Hauptsätze und stehen oft auf Position 1. Deshalb zeigt eine Folge, trotzdem einen überraschenden Gegensatz. Das Verb folgt direkt danach.",
      ar: "تربط الكلمتان بين جملتين رئيسيتين وغالبًا تأتيان في الموقع الأول. deshalb تعبّر عن نتيجة، وtrotzdem عن تناقض غير متوقع، ويأتي الفعل بعدهما مباشرة.",
      formula: "Satz 1. <mark>Deshalb / Trotzdem + Verb</mark> + Subjekt + ...",
      examples: [
        "Ich möchte fit bleiben. Deshalb trainiere ich regelmäßig.",
        "Es hat stark geregnet. Trotzdem haben wir Fußball gespielt.",
        "Alle waren müde, trotzdem haben sie gewonnen."
      ]
    },
    dialogue: [
      ["A", "Darf ich etwas vorschlagen? Wir könnten am Samstag klettern gehen.", "هل يمكنني اقتراح شيء؟ يمكننا الذهاب للتسلق يوم السبت."],
      ["B", "Gute Idee, aber am Vormittag habe ich keine Zeit.", "فكرة جيدة، لكن ليس لدي وقت في الصباح."],
      ["A", "Wie wäre es dann um vier Uhr?", "ما رأيك إذن في الساعة الرابعة؟"],
      ["B", "Ja, das passt. Treffen wir uns direkt vor der Kletterhalle?", "نعم مناسب. هل نلتقي أمام صالة التسلق؟"]
    ],
    quiz: [
      ["Ich war krank. ___ konnte ich nicht trainieren.", ["Trotzdem", "Deshalb", "Ob"], 1],
      ["Es regnet. ___ gehen wir joggen.", ["Trotzdem", "Deshalb", "Weil"], 0],
      ["Was ist das Gegenteil von „der Sieg“?", ["der Fan", "die Niederlage", "der Verein"], 1]
    ]
  },
  {
    id: 10,
    title: "Zusammen leben",
    arTitle: "السكن والجيران",
    summary: "Über Wohnen sprechen, Konflikte lösen und Orte präzise beschreiben.",
    arSummary: "تتحدث عن السكن والجيران، تحل الخلافات، وتصف الأماكن بدقة.",
    topics: ["Wohnen", "Nachbarn", "Umziehen"],
    vocab: [
      ["die Nachbarschaft", "-en", "الحي / الجيرة", "In unserer Nachbarschaft kennen sich viele Leute."],
      ["der Nachbar", "-n", "الجار", "Unser neuer Nachbar ist sehr hilfsbereit."],
      ["sich beschweren über", "hat sich beschwert", "يشتكي من", "Die Mieterin beschwert sich über den Lärm."],
      ["Rücksicht nehmen auf", "hat genommen", "يراعي", "Bitte nehmen Sie Rücksicht auf die anderen Bewohner."],
      ["die Hausordnung", "-en", "قواعد المبنى", "In der Hausordnung stehen die Ruhezeiten."],
      ["der Umzug", "Umzüge", "الانتقال إلى منزل", "Der Umzug in die neue Wohnung war anstrengend."],
      ["einziehen", "ist eingezogen", "ينتقل للسكن", "Wir sind am ersten Mai eingezogen."],
      ["ausziehen", "ist ausgezogen", "يترك السكن", "Unsere Mitbewohnerin zieht nächsten Monat aus."],
      ["der Gefallen", "—", "الخدمة / المعروف", "Könnten Sie mir einen Gefallen tun?"],
      ["gießen", "hat gegossen", "يسقي", "Kannst du im Urlaub meine Pflanzen gießen?"],
      ["der Lärm", "—", "الضوضاء", "Wegen des Lärms konnte ich nicht schlafen."],
      ["das Haustier", "-e", "الحيوان الأليف", "Sind Haustiere in dieser Wohnung erlaubt?"],
      ["aufhängen", "hat aufgehängt", "يعلّق", "Er hängt das Bild über dem Sofa auf."],
      ["liegen", "hat gelegen", "يكون موضوعًا أفقيًا", "Der Schlüssel liegt neben der Tür."]
    ],
    intro: "Gutes Zusammenleben braucht klare Kommunikation und Rücksicht. In diesem Thema bittest du höflich um einen Gefallen, formulierst Beschwerden ohne Angriff, entschuldigst dich und beschreibst genau, wo sich Dinge befinden oder wohin sie bewegt werden.",
    arIntro: "العيش الجيد مع الآخرين يحتاج إلى تواصل واضح ومراعاة. في هذا الموضوع ستطلب خدمة بأدب، تصوغ شكوى دون هجوم، تعتذر، وتصف بدقة مكان الأشياء أو اتجاه حركتها.",
    points: [
      "Beginne eine Beschwerde sachlich: Entschuldigung, ich wollte kurz mit Ihnen sprechen.",
      "Beschreibe das konkrete Problem und schlage danach eine Lösung vor.",
      "Wo? verlangt den Dativ. Wohin? verlangt bei Wechselpräpositionen den Akkusativ."
    ],
    phrases: [
      ["Könnten Sie mir bitte einen Gefallen tun?", "هل يمكنك أن تسدي لي معروفًا من فضلك؟"],
      ["Ich wollte mich wegen des Lärms beschweren.", "أردت أن أشتكي من الضوضاء."],
      ["Das tut mir leid. Das kommt nicht wieder vor.", "أنا آسف، لن يتكرر ذلك."],
      ["Wären Sie so freundlich und ...?", "هل تتكرم وتفعل...؟"],
      ["Das Bild hängt über dem Sofa.", "الصورة معلقة فوق الأريكة."],
      ["Ich stelle die Kisten neben die Tür.", "أضع الصناديق بجانب الباب."]
    ],
    speech: "Ich wohne in einem Mehrfamilienhaus in einer ruhigen Straße. Meine Wohnung liegt im zweiten Stock und hat zwei Zimmer und einen kleinen Balkon. Mit den meisten Nachbarn verstehe ich mich gut. Wir grüßen uns und helfen einander, zum Beispiel beim Tragen schwerer Einkäufe. Natürlich gibt es manchmal Probleme, besonders wegen Lärm oder Müll. Dann finde ich es wichtig, ruhig miteinander zu sprechen und gemeinsam eine praktische Lösung zu suchen.",
    arSpeech: "أسكن في مبنى متعدد الشقق في شارع هادئ. تقع شقتي في الطابق الثاني وبها غرفتان وشرفة صغيرة. علاقتي جيدة بمعظم الجيران؛ نحيي بعضنا ونساعد بعضًا، مثل حمل المشتريات الثقيلة. بالطبع تحدث مشكلات أحيانًا، خاصة بسبب الضوضاء أو القمامة. عندها أرى أنه من المهم التحدث بهدوء والبحث معًا عن حل عملي.",
    grammar: {
      title: "Wechselpräpositionen: Wo oder wohin?",
      explanation: "an, auf, hinter, in, neben, über, unter, vor und zwischen können Dativ oder Akkusativ haben. Position ohne Bewegung: Dativ. Ziel oder Richtungsänderung: Akkusativ.",
      ar: "حروف الجر التسعة قد تأتي مع الداتيف أو الأكوزاتيف. المكان الثابت يأخذ الداتيف، أما الاتجاه أو نقل الشيء إلى هدف فيأخذ الأكوزاتيف.",
      formula: "<mark>Wo? + Dativ</mark> · <mark>Wohin? + Akkusativ</mark>",
      examples: [
        "Das Buch liegt auf dem Tisch. → Wo?",
        "Ich lege das Buch auf den Tisch. → Wohin?",
        "Die Lampe hängt über dem Sofa. / Ich hänge sie über das Sofa."
      ]
    },
    dialogue: [
      ["A", "Entschuldigung, ich wollte kurz wegen der Musik mit Ihnen sprechen.", "عذرًا، أردت التحدث معك سريعًا بخصوص الموسيقى."],
      ["B", "War sie gestern Abend zu laut?", "هل كانت مرتفعة جدًا مساء أمس؟"],
      ["A", "Ja, ich konnte nach elf Uhr nicht schlafen.", "نعم، لم أستطع النوم بعد الحادية عشرة."],
      ["B", "Das tut mir leid. Ich werde in Zukunft besser darauf achten.", "أنا آسف. سأنتبه إلى ذلك أكثر مستقبلًا."]
    ],
    quiz: [
      ["Das Bild hängt ___ Wand.", ["an der", "an die", "auf den"], 0],
      ["Ich hänge das Bild ___ Wand.", ["an der", "an die", "in dem"], 1],
      ["Welche Bitte ist besonders höflich?", ["Mach die Tür zu!", "Wären Sie so freundlich und schließen die Tür?", "Du Tür schließen."], 1]
    ]
  },
  {
    id: 11,
    title: "Wie die Zeit vergeht!",
    arTitle: "الوقت والأمنيات",
    summary: "Zeitprobleme beschreiben, Wünsche äußern und gemeinsame Pläne machen.",
    arSummary: "تصف مشكلة الوقت، تعبّر عن الأمنيات، وتخطط مع الآخرين.",
    topics: ["Zeit", "Freizeit", "Wünsche & Pläne"],
    vocab: [
      ["die Zeit vergeht", "ist vergangen", "يمرّ الوقت", "Beim Lesen vergeht die Zeit sehr schnell."],
      ["Zeit verbringen", "hat verbracht", "يقضي وقتًا", "Am Wochenende verbringe ich Zeit mit meiner Familie."],
      ["sich Zeit nehmen", "hat genommen", "يخصص وقتًا", "Ich möchte mir mehr Zeit für Sport nehmen."],
      ["Zeit verschwenden", "hat verschwendet", "يهدر الوقت", "Mit unnötigen Meetings verschwenden wir viel Zeit."],
      ["erledigen", "hat erledigt", "ينجز", "Am Vormittag erledige ich die wichtigsten Aufgaben."],
      ["verschieben", "hat verschoben", "يؤجّل", "Können wir den Termin auf Freitag verschieben?"],
      ["die Gewohnheit", "-en", "العادة", "Frühes Aufstehen ist für mich eine gute Gewohnheit."],
      ["der Wunsch", "Wünsche", "الأمنية", "Mein größter Wunsch ist eine lange Reise."],
      ["der Plan", "Pläne", "الخطة", "Für nächstes Jahr habe ich viele Pläne."],
      ["sich entscheiden für", "hat sich entschieden", "يقرر اختيار", "Wir haben uns für einen Ausflug entschieden."],
      ["sich erinnern an", "hat sich erinnert", "يتذكّر", "Ich erinnere mich gern an meine Schulzeit."],
      ["warten auf", "hat gewartet", "ينتظر", "Ich warte schon seit zehn Minuten auf den Bus."],
      ["rechtzeitig", "Adverb", "في الوقت المناسب", "Wir müssen rechtzeitig am Bahnhof sein."],
      ["stressig", "Adjektiv", "مليء بالضغط", "Diese Woche war besonders stressig."]
    ],
    intro: "Zeit kann objektiv gemessen werden, aber wir erleben sie sehr unterschiedlich. Hier beschreibst du deinen Umgang mit Zeit, formulierst Wünsche, gibst Ratschläge und planst mit anderen eine Aktivität, ohne dass wichtige Details fehlen.",
    arIntro: "يمكن قياس الوقت بموضوعية، لكننا نعيشه بطرق مختلفة. هنا ستصف تعاملك مع الوقت، تصوغ أمنياتك، تقدم نصائح، وتخطط لنشاط مع الآخرين دون نسيان التفاصيل المهمة.",
    points: [
      "Unterscheide zwischen festen Terminen, wichtigen Aufgaben und freien Wünschen.",
      "Für Wünsche benutzt du häufig hätte, wäre, würde oder könnte.",
      "Bei gemeinsamen Plänen klärst du: Was? Wann? Wo? Wie? Wer bringt was mit?"
    ],
    phrases: [
      ["Ich habe im Moment kaum Zeit für mich.", "ليس لدي حاليًا وقت لنفسي تقريبًا."],
      ["Ich wünschte, ich hätte mehr Freizeit.", "ليت لدي وقت فراغ أكثر."],
      ["Wir könnten am Wochenende einen Ausflug machen.", "يمكننا القيام برحلة في نهاية الأسبوع."],
      ["Worauf wartest du?", "ماذا تنتظر؟"],
      ["An wen erinnerst du dich besonders gern?", "من الشخص الذي تحب أن تتذكره؟"],
      ["Lass uns zuerst einen Termin finden.", "دعنا نجد موعدًا أولًا."]
    ],
    speech: "Unter der Woche habe ich oft das Gefühl, dass die Zeit zu schnell vergeht. Deshalb plane ich meinen Tag am Abend vorher. Ich schreibe drei wichtige Aufgaben auf und erledige die schwierigste Aufgabe zuerst. Für E-Mails und Nachrichten reserviere ich feste Zeiten. Trotzdem möchte ich nicht jede Minute verplanen. Am Abend nehme ich mir bewusst Zeit für meine Familie oder für ein Buch. Ich wünschte nur, das Wochenende wäre manchmal einen Tag länger.",
    arSpeech: "خلال الأسبوع أشعر غالبًا أن الوقت يمر بسرعة كبيرة، لذلك أخطط ليومي في الليلة السابقة. أكتب ثلاث مهام مهمة وأنجز الأصعب أولًا، وأخصص أوقاتًا ثابتة للبريد والرسائل. ومع ذلك لا أريد أن أخطط لكل دقيقة. في المساء أخصص وقتًا عن قصد لعائلتي أو لكتاب. أتمنى فقط لو كانت عطلة نهاية الأسبوع أطول بيوم أحيانًا.",
    grammar: {
      title: "Wünsche mit Konjunktiv II",
      explanation: "Nicht reale oder schwer erreichbare Wünsche stehen im Konjunktiv II. Häufig sind hätte, wäre, könnte und würde + Infinitiv.",
      ar: "الأمنيات غير الواقعية أو صعبة التحقيق تأتي في صيغة Konjunktiv II. أكثر الصيغ استخدامًا: hätte وwäre وkönnte وwürde مع المصدر.",
      formula: "Ich wünschte, ich <mark>hätte / wäre / könnte / würde</mark> ...",
      examples: [
        "Ich wünschte, ich hätte mehr Zeit.",
        "Wenn ich frei hätte, würde ich ans Meer fahren.",
        "Es wäre schön, wenn wir uns öfter sehen könnten."
      ]
    },
    dialogue: [
      ["A", "Wir wollten doch gemeinsam etwas am Wochenende machen.", "كنا نريد أن نفعل شيئًا معًا في نهاية الأسبوع."],
      ["B", "Stimmt. Wir könnten am Samstag an den See fahren.", "صحيح. يمكننا الذهاب إلى البحيرة يوم السبت."],
      ["A", "Gute Idee. Um wie viel Uhr wollen wir losfahren?", "فكرة جيدة. في أي ساعة نريد الانطلاق؟"],
      ["B", "Am besten um neun. Dann haben wir den ganzen Tag Zeit.", "الأفضل الساعة التاسعة، وعندها يكون لدينا اليوم كله."]
    ],
    quiz: [
      ["Ich wünschte, ich ___ mehr Zeit.", ["habe", "hätte", "hatte"], 1],
      ["Welche Frage passt zu „Ich warte auf den Bus“?", ["Worauf wartest du?", "Auf was du wartest?", "Womit wartest du?"], 0],
      ["Was bedeutet „einen Termin verschieben“?", ["ihn später oder früher legen", "ihn sofort erledigen", "ihn vergessen"], 0]
    ]
  },
  {
    id: 12,
    title: "Gute Unterhaltung!",
    arTitle: "الموسيقى والفن",
    summary: "Über Musik und Kunst sprechen, Personen vorstellen und Bilder beschreiben.",
    arSummary: "تتحدث عن الموسيقى والفن، تقدم شخصية، وتصف لوحة أو صورة.",
    topics: ["Musik", "Kultur", "Bildbeschreibung"],
    vocab: [
      ["die Unterhaltung", "—", "الترفيه", "Das Festival bietet Unterhaltung für die ganze Familie."],
      ["die Veranstaltung", "-en", "الفعالية", "Welche Veranstaltungen finden am Wochenende statt?"],
      ["auftreten", "ist aufgetreten", "يظهر على المسرح", "Die Band tritt heute Abend auf der Hauptbühne auf."],
      ["das Konzert", "-e", "الحفل الموسيقي", "Für das Konzert gibt es noch einige Karten."],
      ["die Bühne", "-n", "المسرح", "Vor der Bühne stehen schon viele Fans."],
      ["die Band", "-s", "الفرقة الموسيقية", "Die Band wurde vor fünf Jahren gegründet."],
      ["der Musiker", "—", "الموسيقي", "Der Musiker spielt mehrere Instrumente."],
      ["die Ausstellung", "-en", "المعرض", "Die Ausstellung zeigt moderne Fotografie."],
      ["das Gemälde", "—", "اللوحة الفنية", "Dieses Gemälde stammt aus dem neunzehnten Jahrhundert."],
      ["der Vordergrund", "—", "مقدمة الصورة", "Im Vordergrund sieht man zwei Kinder."],
      ["der Hintergrund", "—", "خلفية الصورة", "Im Hintergrund stehen hohe Berge."],
      ["darstellen", "hat dargestellt", "يمثّل / يصوّر", "Das Bild stellt eine Alltagsszene dar."],
      ["wirken", "hat gewirkt", "يبدو / يترك انطباعًا", "Die Farben wirken warm und freundlich."],
      ["die Stimmung", "-en", "الأجواء / الحالة", "Auf dem Festival war die Stimmung großartig."]
    ],
    intro: "Kunst und Musik werden interessant, wenn du nicht nur sagst, dass etwas gut ist. Du lernst, genauer zu beschreiben: Was hörst oder siehst du? Wie wirkt es? Welche Stimmung entsteht? Außerdem kannst du eine Person oder Band strukturiert vorstellen.",
    arIntro: "يصبح الحديث عن الفن والموسيقى ممتعًا عندما لا تكتفي بقول إن الشيء جيد. ستتعلم الوصف الدقيق: ماذا تسمع أو ترى؟ ما الانطباع؟ وما الأجواء؟ كما ستقدم شخصًا أو فرقة بطريقة منظمة.",
    points: [
      "Bei einer Vorstellung: Name, Herkunft, Stil, wichtige Stationen und persönliche Meinung.",
      "Bei einem Bild gehst du vom Allgemeinen zum Detail und vom Vordergrund zum Hintergrund.",
      "Trenne Beobachtung und Meinung: Ich sehe ... / Auf mich wirkt das Bild ..."
    ],
    phrases: [
      ["Welche Band tritt heute Abend auf?", "أي فرقة ستظهر على المسرح مساء اليوم؟"],
      ["Ich höre am liebsten Musik, die ...", "أفضل الاستماع إلى الموسيقى التي..."],
      ["Im Vordergrund befindet sich ...", "يوجد في مقدمة الصورة..."],
      ["Links daneben sieht man ...", "إلى اليسار بجواره نرى..."],
      ["Das Bild wirkt auf mich ruhig und harmonisch.", "تبدو لي الصورة هادئة ومنسجمة."],
      ["Besonders interessant finde ich ...", "أجد ... مثيرًا للاهتمام بشكل خاص."]
    ],
    speech: "Ich möchte eine Band vorstellen, die ich besonders gern höre. Sie kommt aus Deutschland und macht eine Mischung aus Pop und elektronischer Musik. Die Texte handeln oft vom Alltag, von Beziehungen und von persönlichen Veränderungen. Mir gefällt vor allem, dass die Melodien modern wirken, aber trotzdem leicht im Kopf bleiben. Ich habe die Band vor zwei Jahren zum ersten Mal live gesehen. Die Stimmung beim Konzert war fantastisch, deshalb würde ich sie gern noch einmal erleben.",
    arSpeech: "أود أن أقدم فرقة أحب الاستماع إليها. تأتي من ألمانيا وتقدم مزيجًا من البوب والموسيقى الإلكترونية. تتناول الكلمات غالبًا الحياة اليومية والعلاقات والتغيرات الشخصية. يعجبني خصوصًا أن الألحان تبدو حديثة، لكنها تبقى سهلة في الذاكرة. شاهدت الفرقة مباشرة لأول مرة قبل عامين، وكانت أجواء الحفل رائعة، لذلك أود رؤيتها مرة أخرى.",
    grammar: {
      title: "Relativsätze im Nominativ und Akkusativ",
      explanation: "Ein Relativsatz erklärt ein Nomen genauer. Das Relativpronomen richtet sich in Genus und Numerus nach dem Nomen, sein Kasus kommt aber aus seiner Funktion im Relativsatz.",
      ar: "الجملة الموصولة تشرح اسمًا بدقة. يطابق ضمير الوصل الاسم في النوع والعدد، لكن حالته الإعرابية تتحدد بوظيفته داخل الجملة الموصولة.",
      formula: "Nomen, <mark>der / die / das / den</mark> + ... + Verb am Ende",
      examples: [
        "Das ist der Musiker, der heute auftritt. (Nominativ)",
        "Das ist der Musiker, den ich gern höre. (Akkusativ)",
        "Ich mag Lieder, die eine klare Botschaft haben."
      ]
    },
    dialogue: [
      ["A", "Wie findest du das Bild, das dort an der Wand hängt?", "ما رأيك في الصورة المعلقة هناك على الحائط؟"],
      ["B", "Die Farben gefallen mir. Sie wirken sehr warm.", "تعجبني الألوان، فهي تبدو دافئة جدًا."],
      ["A", "Wer ist die Frau, die im Vordergrund sitzt?", "من المرأة التي تجلس في مقدمة الصورة؟"],
      ["B", "Das weiß ich nicht, aber sie sieht nachdenklich aus.", "لا أعرف، لكنها تبدو غارقة في التفكير."]
    ],
    quiz: [
      ["Das ist die Band, ___ heute auftritt.", ["die", "der", "den"], 0],
      ["Das ist der Musiker, ___ ich gestern gehört habe.", ["der", "den", "das"], 1],
      ["Wo sieht man Dinge, die weit hinten sind?", ["im Vordergrund", "im Hintergrund", "auf der Bühne"], 1]
    ]
  }
];

const state = {
  view: "home",
  currentLesson: 7,
  translation: JSON.parse(localStorage.getItem("translation") ?? "true"),
  saved: JSON.parse(localStorage.getItem("savedWords") ?? "[]"),
  completed: JSON.parse(localStorage.getItem("completedLessons") ?? "[]")
};

const app = document.querySelector("#app");
const translationToggle = document.querySelector("#translationToggle");
const searchDialog = document.querySelector("#searchDialog");
const searchInput = document.querySelector("#searchInput");
const searchResults = document.querySelector("#searchResults");
const speakerSvg = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 10v4h3l4 3V7L8 10Z"/><path d="M15 9.5a4 4 0 0 1 0 5M17.5 7a7 7 0 0 1 0 10"/></svg>`;
const bookmarkSvg = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10v16l-5-3-5 3Z"/></svg>`;

function lessonCards(list = lessons) {
  return list.map(lesson => `
    <article class="lesson-card" data-lesson="${lesson.id}" role="button" tabindex="0">
      <span class="card-number">LEKTION ${lesson.id}</span>
      <h3>${lesson.title}</h3>
      <p>${lesson.summary}</p>
      <p class="arabic">${lesson.arTitle}</p>
      <div class="card-footer">
        <span>${lesson.vocab.length} WÖRTER · ${lesson.topics.length} THEMEN</span>
        <span class="card-arrow">↗</span>
      </div>
    </article>
  `).join("");
}

function homeView() {
  const progress = Math.round((state.completed.length / lessons.length) * 100);
  return `
    <div class="view">
      <section class="hero">
        <div>
          <span class="eyebrow">Dein Deutsch. Klarer. Stärker.</span>
          <h1>SPRICH <em>MEHR.</em><br>DENK WENIGER.</h1>
          <p class="hero-copy">Sechs starke A2-Themen. Wortschatz im Kontext, verständliche Grammatik und fertige Sprechmodelle, mit denen du sofort üben kannst.</p>
          <p class="arabic">ستة موضوعات قوية لمستوى A2: مفردات داخل سياق، قواعد واضحة، ونماذج كلام تساعدك على التحدث فورًا.</p>
          <div class="hero-actions">
            <button class="primary-button" data-open-lesson="${state.currentLesson}">Weiterlernen →</button>
            <button class="secondary-button" data-view="lessons">Alle Lektionen</button>
          </div>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="orbit">
            <span class="orbit-word one">SPRECHEN</span>
            <span class="orbit-word two">VERSTEHEN</span>
            <span class="orbit-word three">A2</span>
          </div>
        </div>
      </section>
      <section class="stats-strip">
        <div class="stat"><strong>06</strong><span>alltagsnahe Lektionen</span></div>
        <div class="stat"><strong>${lessons.reduce((n, l) => n + l.vocab.length, 0)}</strong><span>aktive Wörter</span></div>
        <div class="stat"><strong>36</strong><span>Redemittel</span></div>
        <div class="stat"><strong>${progress}%</strong><span>dein Fortschritt</span></div>
      </section>
      <section class="section">
        <div class="section-head">
          <div><span class="section-kicker">Kursinhalt</span><h2>Deine Lektionen</h2></div>
          <button class="text-button" data-view="lessons">Alle ansehen</button>
        </div>
        <div class="lesson-grid">${lessonCards(lessons.slice(0, 3))}</div>
      </section>
    </div>`;
}

function lessonsView() {
  return `
    <div class="view">
      <section class="page-hero">
        <span class="section-kicker">Netzwerk neu A2.2 · Lektionen 7–12</span>
        <h1 class="page-title">Alle Lektionen</h1>
        <p>Arbeite eine Lektion komplett durch oder springe direkt zu dem Thema, das du heute für dein Sprechen brauchst.</p>
        <p class="arabic">ادرس الوحدة كاملة أو انتقل مباشرة إلى الموضوع الذي تحتاجه في كلامك اليوم.</p>
      </section>
      <section class="section"><div class="lesson-grid">${lessonCards()}</div></section>
    </div>`;
}

function lessonView(id) {
  const lesson = lessons.find(item => item.id === Number(id));
  if (!lesson) return lessonsView();
  state.currentLesson = lesson.id;
  const isDone = state.completed.includes(lesson.id);
  return `
    <div class="view lesson-view">
      <header class="lesson-header" data-number="${lesson.id}">
        <button class="back-button" data-view="lessons">← Alle Lektionen</button>
        <h1>${lesson.title}</h1>
        <p>${lesson.summary}</p>
        <p class="arabic">${lesson.arTitle} · ${lesson.arSummary}</p>
        <div class="lesson-meta"><span>LEKTION ${lesson.id}</span><span>${lesson.vocab.length} WÖRTER</span><span>CA. 35 MIN.</span></div>
        <div class="lesson-progress"><i style="width:${isDone ? 100 : 20}%"></i></div>
      </header>
      <nav class="lesson-tabs">
        <button data-scroll="wortschatz" class="active">Wortschatz</button>
        <button data-scroll="thema">Thema</button>
        <button data-scroll="redemittel">Redemittel</button>
        <button data-scroll="grammatik">Grammatik</button>
        <button data-scroll="dialog">Dialog</button>
        <button data-scroll="training">Training</button>
      </nav>

      <section id="wortschatz" class="content-section">
        <header><span class="section-kicker">01 · Wortschatz</span><h2>Wörter, die du wirklich brauchst</h2><p>Tippe auf den Lautsprecher, höre die deutsche Aussprache und sprich den ganzen Beispielsatz laut nach.</p></header>
        <div class="vocab-grid">
          ${lesson.vocab.map((word, index) => vocabCard(lesson, word, index)).join("")}
        </div>
      </section>

      <section id="thema" class="content-section">
        <header><span class="section-kicker">02 · Thema verstehen</span><h2>So baust du das Thema auf</h2></header>
        <div class="topic-layout">
          <article class="explain-card">
            <h3>${lesson.title}</h3>
            <p>${lesson.intro}</p>
            <p class="arabic">${lesson.arIntro}</p>
            <div class="key-points">${lesson.points.map((point, i) => `<div class="key-point"><i>${i + 1}</i><span>${point}</span></div>`).join("")}</div>
          </article>
          <article class="speech-card">
            <h3>Dein Sprechmodell</h3>
            <span class="section-kicker">60–90 Sekunden</span>
            <blockquote>${lesson.speech}</blockquote>
            <p class="arabic">${lesson.arSpeech}</p>
            <div class="speech-actions">
              <button data-speak="${escapeAttr(lesson.speech)}">▶ Anhören</button>
            </div>
          </article>
        </div>
      </section>

      <section id="redemittel" class="content-section">
        <header><span class="section-kicker">03 · Redemittel</span><h2>Sätze für echte Gespräche</h2><p>Lerne nicht nur einzelne Wörter. Diese Satzanfänge geben deinem Sprechen Struktur.</p></header>
        <div class="phrase-list">${lesson.phrases.map(item => `<article class="phrase-item"><strong>${item[0]}</strong><p class="arabic">${item[1]}</p></article>`).join("")}</div>
      </section>

      <section id="grammatik" class="content-section">
        <header><span class="section-kicker">04 · Grammatik</span><h2>${lesson.grammar.title}</h2></header>
        <article class="grammar-card">
          <h3>Die Idee</h3>
          <p>${lesson.grammar.explanation}</p>
          <p class="arabic">${lesson.grammar.ar}</p>
          <div class="formula">${lesson.grammar.formula}</div>
          <div class="grammar-examples">${lesson.grammar.examples.map(ex => `<div class="grammar-example">${ex}</div>`).join("")}</div>
        </article>
      </section>

      <section id="dialog" class="content-section">
        <header><span class="section-kicker">05 · Dialog</span><h2>So klingt es im Alltag</h2></header>
        <article class="dialogue-card">
          ${lesson.dialogue.map(line => `<div class="dialogue-line"><span class="speaker">${line[0]}</span><div><p>${line[1]}</p><p class="arabic">${line[2]}</p></div></div>`).join("")}
          <button class="secondary-button" data-speak="${escapeAttr(lesson.dialogue.map(line => line[1]).join(" "))}">Dialog anhören</button>
        </article>
      </section>

      <section id="training" class="content-section">
        <header><span class="section-kicker">06 · Mini-Training</span><h2>Prüfe dich selbst</h2></header>
        <div id="lessonQuiz">${quizMarkup(lesson, 0)}</div>
      </section>
    </div>`;
}

function vocabCard(lesson, word, index) {
  const key = `${lesson.id}-${index}`;
  const saved = state.saved.includes(key);
  return `
    <article class="vocab-card ${saved ? "saved" : ""}">
      <div class="card-tools">
        <button class="mini-button" data-speak="${escapeAttr(`${word[0]}. ${word[3]}`)}" aria-label="Anhören">${speakerSvg}</button>
        <button class="mini-button" data-save="${key}" aria-label="Speichern">${bookmarkSvg}</button>
      </div>
      <div class="word-line"><strong>${word[0]}</strong><small>${word[1]}</small></div>
      <p class="arabic">${word[2]}</p>
      <p class="example">${word[3]}</p>
    </article>`;
}

function quizMarkup(lesson, index) {
  const question = lesson.quiz[index];
  if (!question) {
    return `<article class="quiz-card"><h3>Stark gemacht.</h3><p>Du hast das Mini-Training abgeschlossen.</p><p class="arabic">أحسنت، لقد أكملت التدريب القصير.</p><button class="primary-button" data-complete="${lesson.id}">Lektion abschließen ✓</button></article>`;
  }
  return `
    <article class="quiz-card" data-quiz-lesson="${lesson.id}" data-quiz-index="${index}">
      <div class="quiz-progress">FRAGE ${index + 1} / ${lesson.quiz.length}</div>
      <h3>${question[0]}</h3>
      <div class="quiz-options">${question[1].map((option, i) => `<button class="quiz-option" data-answer="${i}">${option}</button>`).join("")}</div>
      <div class="quiz-feedback"></div>
    </article>`;
}

function practiceView() {
  return `
    <div class="view">
      <section class="page-hero">
        <span class="section-kicker">Aktiv üben</span>
        <h1 class="page-title">Training</h1>
        <p>Wähle einen Trainingsmodus. Für nachhaltiges Lernen solltest du laut antworten, bevor du die Lösung prüfst.</p>
        <p class="arabic">اختر نوع التدريب. حاول الإجابة بصوت مرتفع قبل فحص الحل لكي تثبت المعلومة.</p>
      </section>
      <section class="section">
        <div class="practice-grid">
          <button class="practice-card" data-random-lesson><span class="section-kicker">Sprechen</span><h3>Zufälliges Thema</h3><p>Öffne ein Sprechmodell und erzähle danach mit deinen eigenen Informationen.</p></button>
          <button class="practice-card" data-training="words"><span class="section-kicker">Wortschatz</span><h3>Wörter entdecken</h3><p>Springe zu einem zufälligen Wortfeld und trainiere mit Beispielsätzen.</p></button>
          <button class="practice-card" data-training="grammar"><span class="section-kicker">Grammatik</span><h3>Regel im Kontext</h3><p>Wiederhole eine Regel und bilde danach drei eigene Beispiele.</p></button>
          <button class="practice-card" data-training="dialog"><span class="section-kicker">Hören</span><h3>Dialog nachsprechen</h3><p>Höre beide Rollen, stoppe und übernimm danach eine Rolle selbst.</p></button>
        </div>
      </section>
    </div>`;
}

function savedView() {
  const savedItems = state.saved.map(key => {
    const [lessonId, index] = key.split("-").map(Number);
    const lesson = lessons.find(l => l.id === lessonId);
    return lesson && lesson.vocab[index] ? { lesson, word: lesson.vocab[index], index } : null;
  }).filter(Boolean);
  return `
    <div class="view">
      <section class="page-hero">
        <span class="section-kicker">Deine Sammlung</span>
        <h1 class="page-title">Merkliste</h1>
        <p>Hier landen alle Wörter, die du noch einmal sehen und laut wiederholen möchtest.</p>
        <p class="arabic">هنا تجد كل الكلمات التي حفظتها لتراجعها وتنطقها مرة أخرى.</p>
      </section>
      <section class="section">
        ${savedItems.length
          ? `<div class="vocab-grid">${savedItems.map(({ lesson, word, index }) => vocabCard(lesson, word, index)).join("")}</div>`
          : `<div class="empty-state"><div class="empty-icon">☆</div><h2>Noch nichts gespeichert</h2><p>Tippe bei einem Wort auf das Lesezeichen.</p><p class="arabic">اضغط على علامة الحفظ بجوار أي كلمة.</p></div>`}
      </section>
    </div>`;
}

function escapeAttr(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function render(view = state.view, payload) {
  state.view = view;
  document.body.classList.toggle("hidden-translation", !state.translation);
  translationToggle.setAttribute("aria-pressed", String(state.translation));
  if (view === "home") app.innerHTML = homeView();
  if (view === "lessons") app.innerHTML = lessonsView();
  if (view === "lesson") app.innerHTML = lessonView(payload ?? state.currentLesson);
  if (view === "practice") app.innerHTML = practiceView();
  if (view === "saved") app.innerHTML = savedView();
  document.querySelectorAll(".bottom-nav button").forEach(button => {
    const target = button.dataset.view;
    button.classList.toggle("active", target === view || (view === "lesson" && target === "lessons"));
  });
  window.scrollTo({ top: 0, behavior: "instant" });
}

function speak(text) {
  if (!("speechSynthesis" in window)) return toast("Sprachausgabe wird hier nicht unterstützt.");
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = .88;
  const germanVoice = speechSynthesis.getVoices().find(voice => voice.lang.startsWith("de"));
  if (germanVoice) utterance.voice = germanVoice;
  speechSynthesis.speak(utterance);
}

function toast(message) {
  const element = document.querySelector("#toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => element.classList.remove("show"), 1800);
}

function openSearch() {
  searchDialog.showModal();
  searchInput.value = "";
  searchResults.innerHTML = `<div class="empty-state"><p>Suche nach Verkehr, Prüfung, Nachbar, Musik ...</p></div>`;
  setTimeout(() => searchInput.focus(), 50);
}

function searchContent(query) {
  const q = query.trim().toLocaleLowerCase("de");
  if (!q) return [];
  const results = [];
  lessons.forEach(lesson => {
    if ([lesson.title, lesson.arTitle, lesson.summary, ...lesson.topics].join(" ").toLowerCase().includes(q)) {
      results.push({ lesson, label: lesson.title, detail: "Lektion", ar: lesson.arTitle });
    }
    lesson.vocab.forEach(word => {
      if (word.join(" ").toLowerCase().includes(q)) {
        results.push({ lesson, label: word[0], detail: word[3], ar: word[2] });
      }
    });
  });
  return results.slice(0, 20);
}

document.addEventListener("click", event => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    const view = viewButton.dataset.view;
    render(view);
    return;
  }

  const lessonButton = event.target.closest("[data-lesson], [data-open-lesson]");
  if (lessonButton) {
    render("lesson", lessonButton.dataset.lesson ?? lessonButton.dataset.openLesson);
    return;
  }

  const speakButton = event.target.closest("[data-speak]");
  if (speakButton) {
    speak(speakButton.dataset.speak);
    return;
  }

  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    const key = saveButton.dataset.save;
    state.saved = state.saved.includes(key) ? state.saved.filter(item => item !== key) : [...state.saved, key];
    localStorage.setItem("savedWords", JSON.stringify(state.saved));
    saveButton.closest(".vocab-card")?.classList.toggle("saved", state.saved.includes(key));
    toast(state.saved.includes(key) ? "Wort gespeichert." : "Aus der Merkliste entfernt.");
    return;
  }

  const tab = event.target.closest("[data-scroll]");
  if (tab) {
    document.querySelectorAll(".lesson-tabs button").forEach(button => button.classList.remove("active"));
    tab.classList.add("active");
    document.querySelector(`#${tab.dataset.scroll}`)?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  const answer = event.target.closest("[data-answer]");
  if (answer) {
    const card = answer.closest("[data-quiz-lesson]");
    if (card.dataset.answered) return;
    card.dataset.answered = "true";
    const lesson = lessons.find(l => l.id === Number(card.dataset.quizLesson));
    const index = Number(card.dataset.quizIndex);
    const correct = lesson.quiz[index][2];
    const chosen = Number(answer.dataset.answer);
    card.querySelectorAll("[data-answer]").forEach((option, i) => {
      if (i === correct) option.classList.add("correct");
      if (i === chosen && chosen !== correct) option.classList.add("wrong");
    });
    const feedback = card.querySelector(".quiz-feedback");
    feedback.textContent = chosen === correct ? "Richtig. Sehr gut!" : "Noch nicht. Sieh dir die grüne Lösung an.";
    setTimeout(() => {
      document.querySelector("#lessonQuiz").innerHTML = quizMarkup(lesson, index + 1);
    }, 1200);
    return;
  }

  const complete = event.target.closest("[data-complete]");
  if (complete) {
    const id = Number(complete.dataset.complete);
    if (!state.completed.includes(id)) state.completed.push(id);
    localStorage.setItem("completedLessons", JSON.stringify(state.completed));
    toast("Lektion abgeschlossen. Stark!");
    setTimeout(() => render("lessons"), 800);
    return;
  }

  const random = event.target.closest("[data-random-lesson], [data-training]");
  if (random) {
    const lesson = lessons[Math.floor(Math.random() * lessons.length)];
    render("lesson", lesson.id);
    const target = random.dataset.training;
    if (target) setTimeout(() => document.querySelector(`#${target === "words" ? "wortschatz" : target === "grammar" ? "grammatik" : "dialog"}`)?.scrollIntoView(), 50);
  }
});

translationToggle.addEventListener("click", () => {
  state.translation = !state.translation;
  localStorage.setItem("translation", JSON.stringify(state.translation));
  document.body.classList.toggle("hidden-translation", !state.translation);
  translationToggle.setAttribute("aria-pressed", String(state.translation));
});

document.querySelector("#searchButton").addEventListener("click", openSearch);
document.querySelector("#closeSearch").addEventListener("click", () => searchDialog.close());
searchInput.addEventListener("input", () => {
  const results = searchContent(searchInput.value);
  searchResults.innerHTML = results.length
    ? results.map(item => `<button class="search-result" data-search-lesson="${item.lesson.id}"><strong>${item.label}</strong><br><small>${item.detail}</small><p class="arabic">${item.ar}</p></button>`).join("")
    : `<div class="empty-state"><p>Keine Treffer gefunden.</p></div>`;
});
searchResults.addEventListener("click", event => {
  const result = event.target.closest("[data-search-lesson]");
  if (!result) return;
  searchDialog.close();
  render("lesson", result.dataset.searchLesson);
});

render();
