// Event listener for window load to apply fade-in effect to elements
window.addEventListener('load', () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, index * 500); // Delay of 0.5s between elements
  });
});

// Script for opening/closing the language selection menu
const languageButton = document.getElementById('language-button');
const languageDropdown = document.getElementById('language-dropdown');
const languageSwitcher = document.querySelector('.language-switcher');

languageButton.addEventListener('click', () => {
  languageSwitcher.classList.toggle('active');
});

// Logic for changing language when a language is selected
const languageLinks = document.querySelectorAll('.language-dropdown a');

languageLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedLanguage = e.target.closest('a').dataset.lang;

    // Example: load text in the selected language
    changeLanguage(selectedLanguage);

    // Update the button with the flag
    languageButton.innerHTML = e.target.closest('a').innerHTML;

    // Close the menu after selection
    languageSwitcher.classList.remove('active');
  });
});

// Texts for different languages
const texts = {
  ru: {
    headerTitle: 'Автоматизация бюрократии в Германии',
    headerSubtitle: 'Перевод писем, заполнение документов, напоминания о сроках',
    ctaButton: 'Получить ранний доступ',
    featuresTitle: 'Почему это удобно?',
    feature1: '✅ Автозаполнение документов',
    feature2: '✅ Перевод писем',
    feature3: '✅ Напоминания о сроках',
    howItWorksTitle: 'Как это работает?',
    step1: '📄 Загружаете документ',
    step2: '📝 Получаете перевод и разъяснение',
    step3: '📬 Отправляете без ошибок',
    ctaTitle: 'Попробуйте бесплатно',
    ctaInputPlaceholder: 'Введите e-mail',
    ctaButtonSend: 'Отправить',
    footerText: '© 2025 Bureaucracy Helper',
  },
  de: {
    headerTitle: 'Automatisierung der Bürokratie in Deutschland',
    headerSubtitle: 'Übersetzung von Briefen, Ausfüllen von Dokumenten, Erinnerungen an Fristen',
    ctaButton: 'Frühen Zugang erhalten',
    featuresTitle: 'Warum ist das praktisch?',
    feature1: '✅ Automatische Ausfüllung von Dokumenten',
    feature2: '✅ Übersetzung von Briefen',
    feature3: '✅ Erinnerungen an Fristen',
    howItWorksTitle: 'Wie funktioniert es?',
    step1: '📄 Dokument hochladen',
    step2: '📝 Übersetzung und Erläuterung erhalten',
    step3: '📬 Fehlerfrei absenden',
    ctaTitle: 'Kostenlos testen',
    ctaInputPlaceholder: 'E-Mail eingeben',
    ctaButtonSend: 'Absenden',
    footerText: '© 2025 Bureaucracy Helper',
  },
  en: {
    headerTitle: 'Automation of bureaucracy in Germany',
    headerSubtitle: 'Translation of letters, filling out documents, reminders of deadlines',
    ctaButton: 'Get early access',
    featuresTitle: 'Why is it convenient?',
    feature1: '✅ Automatic document filling',
    feature2: '✅ Letter translation',
    feature3: '✅ Deadline reminders',
    howItWorksTitle: 'How does it work?',
    step1: '📄 Upload document',
    step2: '📝 Get translation and explanation',
    step3: '📬 Send without errors',
    ctaTitle: 'Try for free',
    ctaInputPlaceholder: 'Enter e-mail',
    ctaButtonSend: 'Send',
    footerText: '© 2025 Bureaucracy Helper',
  },
  ua: {
    headerTitle: 'Автоматизація бюрократії в Німеччині',
    headerSubtitle: 'Переклад листів, заповнення документів, нагадування про терміни',
    ctaButton: 'Отримати ранній доступ',
    featuresTitle: 'Чому це зручно?',
    feature1: '✅ Автозаповнення документів',
    feature2: '✅ Переклад листів',
    feature3: '✅ Нагадування про терміни',
    howItWorksTitle: 'Як це працює?',
    step1: '📄 Завантажуєте документ',
    step2: '📝 Отримуєте переклад і пояснення',
    step3: '📬 Відправляєте без помилок',
    ctaTitle: 'Спробуйте безкоштовно',
    ctaInputPlaceholder: 'Введіть e-mail',
    ctaButtonSend: 'Відправити',
    footerText: '© 2025 Bureaucracy Helper',
  },
  tr: {
    headerTitle: "Almanya'daki bürokrasinin otomasyonu",
    headerSubtitle: 'Mektup çevirisi, belge doldurma, son tarih hatırlatıcıları',
    ctaButton: 'Erken erişim alın',
    featuresTitle: 'Neden bu uygun?',
    feature1: '✅ Otomatik belge doldurma',
    feature2: '✅ Mektup çevirisi',
    feature3: '✅ Son tarih hatırlatıcıları',
    howItWorksTitle: 'Nasıl çalışır?',
    step1: '📄 Belge yükleyin',
    step2: '📝 Çeviri ve açıklama alın',
    step3: '📬 Hatalı olmadan gönderin',
    ctaTitle: 'Ücretsiz deneyin',
    ctaInputPlaceholder: 'E-posta girin',
    ctaButtonSend: 'Gönder',
    footerText: '© 2025 Bureaucracy Helper',
  },
};

// Function to change the language
function changeLanguage(language) {
  document.querySelector('header h1').textContent = texts[language].headerTitle;
  document.querySelector('header p').textContent = texts[language].headerSubtitle;
  document.getElementById('cta-button').textContent = texts[language].ctaButton;

  document.querySelector('.features h2').textContent = texts[language].featuresTitle;
  document.querySelectorAll('.feature')[0].textContent = texts[language].feature1;
  document.querySelectorAll('.feature')[1].textContent = texts[language].feature2;
  document.querySelectorAll('.feature')[2].textContent = texts[language].feature3;

  document.querySelector('.how-it-works h2').textContent = texts[language].howItWorksTitle;
  document.querySelectorAll('.how-it-works ol li')[0].textContent = texts[language].step1;
  document.querySelectorAll('.how-it-works ol li')[1].textContent = texts[language].step2;
  document.querySelectorAll('.how-it-works ol li')[2].textContent = texts[language].step3;

  document.querySelector('.cta h2').textContent = texts[language].ctaTitle;
  document.getElementById('email').setAttribute('placeholder', texts[language].ctaInputPlaceholder);
  document.getElementById('submit-button').textContent = texts[language].ctaButtonSend;

  document.querySelector('footer p').textContent = texts[language].footerText;
}

// Set default language
changeLanguage('en');
