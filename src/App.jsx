function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-blue-50 to-green-50">
      
      {/* Шапка с солнцем */}
      <header className="bg-yellow-300/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🎨</span>
            <h1 className="text-2xl md:text-3xl font-bold text-orange-600">
              Творческий Английский
            </h1>
          </div>
          <a 
            href="#signup" 
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 shadow-md"
          >
            Записаться 🌟
          </a>
        </div>
      </header>

      {/* Герой-секция */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-4 border-yellow-300">
          <span className="text-6xl md:text-8xl mb-4 block">🌈</span>
          <h2 className="text-3xl md:text-5xl font-bold text-orange-600 mb-4">
            Путешествие в мир красок и звуков
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-2">
            (Английский для самых маленьких)
          </p>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Ваш ребенок еще не умеет читать, но уже готов говорить? 
            Мы не зубрим правила! Мы учим английский через игру, творчество и движение!
          </p>
        </div>
      </section>

      {/* Для кого */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-blue-100/70 rounded-3xl p-6 md:p-8 shadow-lg border-4 border-blue-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">📌</span>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-700">Для кого этот курс</h3>
          </div>
          <p className="text-lg text-gray-700">
            <strong className="text-blue-600">Возрастная группа: 4–7 лет</strong> (дошкольники и будущие первоклассики)
          </p>
          <p className="text-gray-600 mt-2">Группы формируются по возрасту и уровню подготовки</p>
        </div>
      </section>

      {/* Методы обучения */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🎨</span>
          <h3 className="text-2xl md:text-3xl font-bold text-green-700">Как мы учимся?</h3>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          Мы используем подход <strong>Total Physical Response</strong> и арт-терапию. Никакой скучной парты!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Art & Craft */}
          <div className="bg-yellow-100/70 rounded-2xl p-6 shadow-lg border-4 border-yellow-300 transform hover:scale-105 transition-transform">
            <span className="text-5xl block mb-3">🖌️</span>
            <h4 className="text-xl font-bold text-yellow-700 mb-3">Art & Craft</h4>
            <p className="text-gray-700 text-sm">Творим руками:</p>
            <ul className="text-gray-600 text-sm mt-2 space-y-1">
              <li>• Рисуем красками (акварель, гуашь, пальчиковые)</li>
              <li>• Лепим из пластилина</li>
              <li>• Делаем аппликации</li>
            </ul>
          </div>

          {/* Music & Motion */}
          <div className="bg-blue-100/70 rounded-2xl p-6 shadow-lg border-4 border-blue-300 transform hover:scale-105 transition-transform">
            <span className="text-5xl block mb-3">🎵</span>
            <h4 className="text-xl font-bold text-blue-700 mb-3">Music & Motion</h4>
            <p className="text-gray-700 text-sm">Поём и движемся:</p>
            <ul className="text-gray-600 text-sm mt-2 space-y-1">
              <li>• Поём песенки на английском</li>
              <li>• Играем на маракасах и бубнах</li>
              <li>• Танцуем под детские хиты</li>
            </ul>
          </div>

          {/* Play & Learn */}
          <div className="bg-green-100/70 rounded-2xl p-6 shadow-lg border-4 border-green-300 transform hover:scale-105 transition-transform">
            <span className="text-5xl block mb-3">🎮</span>
            <h4 className="text-xl font-bold text-green-700 mb-3">Play & Learn</h4>
            <p className="text-gray-700 text-sm">Играем:</p>
            <ul className="text-gray-600 text-sm mt-2 space-y-1">
              <li>• Подвижные игры на английском</li>
              <li>• Ролевые игры («Магазин», «Зоопарк»)</li>
              <li>• Учимся через веселье!</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Модули курса */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">📚</span>
          <h3 className="text-2xl md:text-3xl font-bold text-purple-700">Что мы изучим за курс?</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { emoji: '👶', title: 'Модуль 1: Я и мое тело', desc: 'Части тела, эмоции, действия' },
            { emoji: '🌈', title: 'Модуль 2: Цветной мир', desc: 'Цвета и оттенки' },
            { emoji: '🦁', title: 'Модуль 3: Ферма и зоопарк', desc: 'Животные и звуки' },
            { emoji: '🍕', title: 'Модуль 4: Вкусняшки', desc: 'Фрукты, овощи, еда' },
            { emoji: '👨‍‍👧', title: 'Модуль 5: Семья и друзья', desc: 'Члены семьи, приветствия' },
            { emoji: '🌸', title: 'Модуль 6: Природа вокруг', desc: 'Погода, времена года' },
          ].map((module, index) => (
            <div key={index} className="bg-white/70 rounded-xl p-4 shadow-md border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <span className="text-3xl block mb-2">{module.emoji}</span>
              <h4 className="font-bold text-purple-700 text-sm">{module.title}</h4>
              <p className="text-gray-600 text-xs mt-1">{module.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-orange-100/70 rounded-2xl p-6 mt-6 border-4 border-orange-300 text-center">
          <span className="text-4xl block mb-2">🏆</span>
          <h4 className="font-bold text-orange-700 text-lg">Финал курса: «Моя первая выставка»</h4>
          <p className="text-gray-600 mt-2">Ребенок показывает свои поделки и рассказывает о них 2-3 простыми фразами на английском!</p>
        </div>
      </section>

      {/* Преимущества */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-green-100/70 rounded-3xl p-6 md:p-8 shadow-lg border-4 border-green-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">✨</span>
            <h3 className="text-2xl md:text-3xl font-bold text-green-700">Почему родителям стоит выбрать нас?</h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              '🎈 Без стресса — ребенку просто весело!',
              ' Развитие моторики помогает речи',
              '🎤 Правильное произношение через песни',
              '👫 Социализация — учимся играть вместе',
              '🎨 Материалы включены в стоимость',
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Формат и расписание */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-100/70 rounded-2xl p-6 shadow-lg border-4 border-blue-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💻</span>
              <h4 className="text-xl font-bold text-blue-700">Формат занятий</h4>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• Онлайн (Zoom) или Офлайн</li>
              <li>• Длительность: 40–45 минут</li>
              <li>• Для онлайн: планшет/ноутбук + материалы</li>
            </ul>
          </div>

          <div className="bg-yellow-100/70 rounded-2xl p-6 shadow-lg border-4 border-yellow-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🕒</span>
              <h4 className="text-xl font-bold text-yellow-700">Расписание</h4>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Малыши (4-5 лет):</strong> Вт и Чт, 10:00</li>
              <li>• <strong>Дошколята (6-7 лет):</strong> Ср и Пт, 16:00</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Стоимость */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-orange-100/70 rounded-3xl p-6 md:p-8 shadow-lg border-4 border-orange-300 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">💳</span>
            <h3 className="text-2xl md:text-3xl font-bold text-orange-700">Стоимость</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/70 rounded-xl p-4">
              <p className="text-green-600 font-bold text-lg">Пробный урок</p>
              <p className="text-3xl font-bold text-orange-600">Бесплатно</p>
              <p className="text-gray-600 text-sm">20 минут знакомства</p>
            </div>
            <div className="bg-white/70 rounded-xl p-4 border-4 border-orange-300">
              <p className="text-orange-600 font-bold text-lg">Абонемент</p>
              <p className="text-3xl font-bold text-orange-600">6 400 ₽</p>
              <p className="text-gray-600 text-sm">8 занятий в месяц</p>
            </div>
            <div className="bg-white/70 rounded-xl p-4">
              <p className="text-blue-600 font-bold text-lg">Разовое</p>
              <p className="text-3xl font-bold text-orange-600">900 ₽</p>
              <p className="text-gray-600 text-sm">1 занятие</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section id="signup" className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-white text-center">
          <span className="text-6xl md:text-8xl block mb-4">🎉</span>
          <h3 className="text-3xl md:text-5xl font-bold text-orange-700 mb-4">
            Места в группах ограничены!
          </h3>
          <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
            Мы берем максимум 5-6 человек в группу, чтобы уделить внимание каждому маленькому художнику и музыканту!
          </p>
          <p className="text-lg text-orange-600 font-bold mb-8">
            👉 Запишитесь сейчас — подарите ребенку любовь к языку с самого детства!
          </p>
          <a 
            href="https://wa.me/79000000000" 
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-2xl py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl animate-bounce"
          >
             Записаться на курс! 
          </a>
          <p className="text-gray-600 mt-4 text-sm">Нажмите на кнопку, чтобы связаться с нами</p>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-blue-200/70 py-6 text-center">
        <p className="text-gray-700">© 2026 Творческий Английский 🎨</p>
        <p className="text-gray-600 text-sm mt-2">С любовью к детям и языкам 💕</p>
      </footer>

    </div>
  )
}

export default App