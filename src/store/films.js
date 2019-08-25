export default { // films.js
  state: {
    films: [
      {
        id: 1,
        title: 'Темный рыцарь',
        description: 'Фантастический боевик «Темный рыцарь» является второй частью трилогии гениального режиссера Кристофера Нолана о супер-герое Бэтмене. Герой фильма Брюс Уэйн, он же Бэтмен, собирается покончить с тайной жизнью, понимая, что город на самом деле нуждается не в «Темном рыцаре», находящемся по ту сторону закона, а в настоящем, явном герое, которым, по его мнению, может стать непоколебимый, и жаждущий расправы с преступностью прокурор Харви Дент. В это время над Готэмом нависает очередная угроза в лице преступника по прозвищу Джокер. Жизнь Уэйна и Дента меняется кардинальным образом, ведь новый враг очень хитер и умен, и способен выпустить наружу темное нутро обоих героев.',
        poster: 'https://rezka.ag/i/2013/11/7/pbcd3c26d5b8ehw12h24m.jpg',
        type: 'фильм',
        completed: false,
        editing: false
      },
      {
        id: 2,
        title: 'Игры престолов',
        description: 'В средневековом мире, созданном в жанре фэнтези, люди борются за власть и ищут мести. Основано на цикле романов Песнь льда и пламени Джорджа Р. Р. Мартина',
        poster: 'https://i.pinimg.com/originals/af/30/c1/af30c1eac349025e9454460b237df9dd.jpg',
        type: 'сериал',
        completed: false,
        editing: false
      },
      {
        id: 3,
        title: 'Мир дикого запада',
        description: 'Фантастический сериал, снятый при участии Джонатана Нолана («Интерстеллар», «Престиж») и Джей Джей Абрамса («Остаться в живых», «Звездные войны: Пробуждение силы»). Недалекое будущее. Гениальный конструктор и изобретатель Роберт Форд (Энтони Хопкинс) создает необычный парк развлечений, стилизованный под эпоху Дикого Запада. Однако люди едут сюда не столько за тем, чтобы на некоторое время перенестись в прошлое, сколько за новыми ощущениями: свой парк доктор Форд заселил человекоподобными роботами, с которыми посетители могут делать, все что захотят. Бояться им нечего: несмотря на то, что у некоторых андроидов есть оружие, они никогда не применят его против человека, поскольку запрограммированы угождать гостям парка. Но все меняется после поломки системы: один за другим роботы начинают нарушать заданный сценарий. Основную идею создатели сериала заимствовали из одноименного научно-фантастического фильма 1973 года писателя и режиссера Майкла Крайтона. Произведения Крайтона неоднократно привлекали внимание кинематографистов еще до публикации: за право экранизировать его роман «Парк Юрского периода» боролись сразу несколько студий, в итоге права приобрел Стивен Спилберг. Сериал «Мир Дикого Запада» вы можете посмотреть онлайн на нашем сайте.',
        poster: 'https://media.kg-portal.ru/tv/w/westworld/posters/westworld_8.jpg',
        type: 'сериал',
        completed: false,
        editing: false
      },
      {
        id: 4,
        title: 'Чернобыль',
        description: 'Ужасные события, случившиеся в окрестностях Чернобыля в 1986 году, волновать продолжают умы современников. Незадолго до произошедшей трагедии большой, многолюдный город имел развитую инфраструктуру. Благоприятные условия жизни делали населенный пункт перспективным местом, жители которого не обирались покидать родные места, имели возможность здесь реализовать свои способности, строить успешное будущее. АЭС была крупным предприятием, способствующим экономическому развитию региона, обеспечивающим основную часть горожан рабочими местами. Не предполагал никто, что высокотехнологичное, современное сооружение станет причиной огромной беды, разрушившей судьбы тысяч людей, о надвигающейся катастрофе не подозревающих. Густонаселенные, близлежащие районы превратятся в безлюдные места, не пригодные для проживания граждан. Развитый экономический центр был безвозвратно разрушен, превратившись в «Зону отчуждения», посещение которой было строго запрещено, а все население незамедлительно эвакуировано в отдаленные города. Смертельная опасность внезапно нависла над работниками АЭС, мирными горожанами и ликвидаторами аварии, из разных областей прибывающими Советского Союза. На фоне всенародного горя происходят интригующие события, касающиеся деятельности американской разведки. Выяснилось, что иностранцы повышенный интерес проявляют к работе атомной станции. Руководство КГБ оперативно реагирует на полученную информацию и поручает сотрудникам незамедлительно секретную разработать операцию по выявлению шпионов. Членам контрразведки необходимо в короткие сроки обезвредить вражеского агента и выяснить истинные намерения ЦРУ.',
        poster: 'https://miro.medium.com/max/1200/1*EvN-uoizTUSh56gjeWx36g.jpeg',
        type: 'минисериал',
        completed: false,
        editing: false
      },
      {
        id: 5,
        title: 'Кремниевая долина',
        description: 'Производственный ситком канала HBO о превратностях пути к успеху в хай-тек-индустрии. Сюжет сконцентрирован вокруг шести неординарных программистов из Сан-Франциско, решивших основать собственный бизнес в Кремниевой долине. Но на пути к заветным миллионам героям придется столкнуться с трудностями, невероятными взлетами, падениями и пережить массу нелепых ситуаций. «Кремниевая долина» была удостоена нескольких номинаций на премию «Эмми» и «Золотой глобус» в категории «Лучший комедийный сериал».',
        poster: 'https://mediamikes.com/wp-content/uploads/2015/07/silicon-s2.jpg',
        type: 'сериал',
        completed: false,
        editing: false
      },
      {
        id: 6,
        title: 'Настоящий детектив',
        description: 'Сложная и запутанная история, в которой перемешиваются и зависят друг от друга сразу три временных промежутка: 1995-й год, когда в Луизианне происходит страшное убийство, и полиция бросает все свои силы на его раскрытие, 2002-й год, когда расследование продолжается, и 2012-й, когда происходит второе убийство, чертовски похожее на первое. Неужели преступник все еще на свободе? Неужели городу нужно опасаться новых жертв? Загадку пытаются разгадать детективы Растин Коул и Мартин Харт.',
        poster: 'https://upload.wikimedia.org/wikipedia/ru/b/bd/%D0%9D%D0%B0%D1%81%D1%82%D0%BE%D1%8F%D1%89%D0%B8%D0%B9_%D0%B4%D0%B5%D1%82%D0%B5%D0%BA%D1%82%D0%B8%D0%B2_%282_%D1%81%D0%B5%D0%B7%D0%BE%D0%BD%29.jpg',
        type: 'сериал',
        completed: false,
        editing: false
      },
      {
        id: 7,
        title: 'Спартак',
        description: 'Исторический телесериал «Спартак: Кровь и песок» рассказывает об известном римском рабе - Спартаке, ставшем гладиатором, и впоследствии возглавившем одно из самых крупных восстаний за всю историю Римской Империи. Действие сериала разворачивается в те далекие древние времена, когда Римская Империя вела жестокие и кровопролитные войны за расширение своих земель. Римское войско объединяет свои силы с фракийскими племенами, чтобы противостоять воинственному народу гетов. Однако тщеславный и очень амбициозный посланник Рима Гай Клавдий Глабр в самый последний момент перебрасывает свое войско на борьбу с понтийским царем Митридатом. Восприняв это как прямое нарушение союзного договора, фракийцы принимают решение вернуться домой, и организовать оборону там. Такой поворот событий очень сильно разозлил Глабра, и он объявляет бывших союзников дезертирами, и берет одно из их предводителей, Спартака, вместе с семьей в плен. Вскоре после этого самого Спартака отправляют в Капую, а его жену продают в рабство сирийскому работорговцу. Вместе с другими плененными фракийцами Спартак оказывает на гладиаторской арене, чтобы погибнуть на потеху толпы. Однако случается непредвиденное, он побеждает в бою, и это навсегда меняет его дальнейшую судьбу…',
        poster: 'http://www.obnovi.com/uploads/posts/2015-01/1422447005_poster.jpg',
        type: 'сериал',
        completed: false,
        editing: false
      },
      {
        id: 8,
        title: 'Голодные игры',
        description: 'События происходят в постапокалиптическом будущем, где в деспотическом государстве, расположенном на руинах Северной Америки, ежегодно проводятся Голодные игры. От каждого из двенадцати дистриктов по жребию выбираются по одному юноше и девушке от 12 до 18 лет, которые будут принимать участие в Голодных играх. Участникам предстоит бороться друг с другом на выживание, пока в живых не останется только один победитель, который получит славу и богатство. 16-летняя Китнисс Эвердин добровольно соглашается участвовать в Голодных играх, чтобы спасти свою младшую сестру. Вместе с Китнисс от ее дистрикта будет участвовать Пит Мелларк, тайно влюбленный в девушку. Теперь они вместе проходят обучение под руководством бывшего чемпиона игр Хеймитча Эбернети.',
        poster: 'http://www.kinokadr.ru/filmzimg/h/hungergames/hungergames_poster37.jpg',
        type: 'минисериал',
        completed: false,
        editing: false
      },
      {
        id: 9,
        title: 'Бегущий в лабиринте',
        description: 'Что может быть страшнее незнания того, кто ты есть? Также и главный герой фильма "Бегущий в лабиринте (The Maze Runner)" - Томас. После того, как он проснулся, его сердце охватил ужас. Он не знал, где он и кто он. В скором времени парень знакомится с подростками, такими же, как и он, да прибывает в некое место, где все пытаются выжить. Никто в этом месте не был способен ответить на вопросы, которые тревожили Тома. Главному герою нужно попытаться понять причину его пребывания в этом таинственном месте.',
        poster: 'https://ovideo.ru/images/posters/0004/0215/0002.jpg',
        type: 'фильм',
        completed: false,
        editing: false
      }
    ]
  },
  mutations: {
    createdFilm (state, payload) {
      state.films.push(payload)
    }
  },
  actions: {
    createdFilm ({ commit }, payload) {
      payload.id = parseInt(Math.random() * 1000)
      payload.completed = false
      payload.editing = false
      commit('createdFilm', payload)
    }
  },

  getters: {
    films (state) {
      return state.films
    },
    film (state) {
      return filmId => {
        return state.films.find(film => film.id == filmId)
      }
    }
  }
}
