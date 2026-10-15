import { useState, type FormEvent } from "react";

const instagramUrl = "https://www.instagram.com/baxtiyarov.dew/";

const services = [
  {
    number: "01",
    title: "Veb-sayt yaratish",
    description:
      "Biznesingizni internetda professional namoyish etadigan, zamonaviy va barcha qurilmalarga mos saytlar.",
    items: [
      "Biznes saytlari",
      "Taqdimot sahifalari",
      "Mahsulot kataloglari",
      "Onlayn do‘konlar va savdo maydonchalari",
      "Mobil qurilmalarga mos dizayn",
    ],
    action: "Sayt buyurtma qilish",
    value: "Veb-sayt",
  },
  {
    number: "02",
    title: "Telegram botlar",
    description:
      "Takroriy vazifalarni avtomatlashtiradigan, mijozlar bilan ishlashni osonlashtiradigan va biznes jarayonlarini soddalashtiradigan botlar.",
    items: [
      "Buyurtma qabul qilish botlari",
      "Mahsulot sotish botlari",
      "Mijozlar bilan ishlash botlari",
      "Savol-javob botlari",
      "Maxsus biznes avtomatlashtirish",
    ],
    action: "Bot buyurtma qilish",
    value: "Telegram bot",
  },
  {
    number: "03",
    title: "AI va avtomatlashtirish",
    description:
      "Sun’iy intellekt va avtomatlashtirish yordamida biznesingizdagi jarayonlarni tezlashtirishga mo‘ljallangan aqlli tizimlar.",
    items: [
      "AI yordamchilar",
      "Mijozlar uchun aqlli yordamchi tizimlar",
      "Avtomatik ish jarayonlari",
      "Ma’lumotlarni qayta ishlash",
      "Turli xizmatlarni o‘zaro bog‘lash",
    ],
    action: "AI yechim buyurtma qilish",
    value: "AI agent",
  },
];

const benefits = [
  {
    number: "01",
    title: "Individual yondashuv",
    description: "Har bir loyiha mijozning ehtiyojlari asosida rejalashtiriladi.",
  },
  {
    number: "02",
    title: "Aniq muloqot",
    description:
      "Talablar, imkoniyatlar va loyiha tafsilotlari oldindan muhokama qilinadi.",
  },
  {
    number: "03",
    title: "Zamonaviy texnologiyalar",
    description:
      "Maqsadga mos texnologiyalar va qulay yechimlardan foydalaniladi.",
  },
  {
    number: "04",
    title: "Amaliy natijaga yo‘nalish",
    description:
      "Asosiy e’tibor biznes uchun foydali va ishlatishga qulay mahsulot yaratishga qaratiladi.",
  },
];

const steps = [
  {
    number: "01",
    title: "Muhokama",
    description: "Mijozning g‘oyasi, maqsadi va talablari bilan tanishaman.",
  },
  {
    number: "02",
    title: "Rejalashtirish",
    description:
      "Loyiha imkoniyatlari, funksiyalari va bajarish tartibini belgilaymiz.",
  },
  {
    number: "03",
    title: "Ishlab chiqish",
    description:
      "Kelishilgan talablar asosida loyiha yaratiladi va tekshiriladi.",
  },
  {
    number: "04",
    title: "Topshirish",
    description:
      "Tayyor loyiha taqdim etiladi va undan foydalanish bo‘yicha tushuntirish beriladi.",
  },
];

const questions = [
  {
    question: "Qanday loyihalar yaratasiz?",
    answer:
      "Veb-saytlar, Telegram botlar, AI agentlar va biznesni avtomatlashtirish yechimlarini ishlab chiqaman.",
  },
  {
    question: "Loyiha narxi qancha?",
    answer:
      "Narx loyiha murakkabligi, funksiyalari va talablariga bog‘liq. Batafsil ma’lumot olish uchun Instagram orqali murojaat qiling.",
  },
  {
    question: "Loyiha qancha vaqtda tayyor bo‘ladi?",
    answer:
      "Muddat loyiha hajmi va funksiyalariga qarab belgilanadi. Ish boshlashdan oldin kelishib olinadi.",
  },
  {
    question: "O‘z biznesim uchun maxsus yechim buyurtma qilsam bo‘ladimi?",
    answer:
      "Ha. Biznesingiz va ehtiyojlaringizni tushuntiring, sizga mos yechimni muhokama qilamiz.",
  },
  {
    question: "Buyurtmani qanday boshlayman?",
    answer:
      "Saytdagi formani to‘ldiring yoki Instagram orqali bevosita yozing.",
  },
];

const navItems = [
  { href: "#bosh-sahifa", label: "Bosh sahifa" },
  { href: "#xizmatlar", label: "Xizmatlar" },
  { href: "#jarayon", label: "Ish jarayoni" },
  { href: "#savol-javob", label: "Savol-javob" },
  { href: "#boglanish", label: "Bog‘lanish" },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

function Logo() {
  return (
    <a className="logo" href="#bosh-sahifa" aria-label="BAKHTIYAROV.DEV — bosh sahifa">
      <span className="logo-mark" aria-hidden="true">
        B
      </span>
      <span>BAKHTIYAROV.DEV</span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [preparedMessage, setPreparedMessage] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  function chooseService(service: string) {
    setSelectedService(service);
    setPreparedMessage("");
    setCopyStatus("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const fields = [
      `Ism: ${formData.get("name")}`,
      `Bog‘lanish usuli: ${formData.get("contact")}`,
      formData.get("business")
        ? `Biznes yo‘nalishi: ${formData.get("business")}`
        : "",
      `Xizmat: ${formData.get("service")}`,
      `Loyiha haqida: ${formData.get("details")}`,
      formData.get("budget") ? `Taxminiy budjet: ${formData.get("budget")}` : "",
    ].filter(Boolean);

    setPreparedMessage(fields.join("\n"));
    setCopyStatus("");
  }

  async function copyMessage() {
    if (!preparedMessage) return;
    try {
      await navigator.clipboard.writeText(preparedMessage);
      setCopyStatus("Murojaat matni nusxalandi. Endi Instagram orqali yuborishingiz mumkin.");
    } catch {
      setCopyStatus(
        "Matnni nusxalab bo‘lmadi. Instagram orqali yozing yoki murojaat matnini belgilang.",
      );
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav
            className={`main-nav${menuOpen ? " is-open" : ""}`}
            id="mobile-menu"
            aria-label="Asosiy menyu"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="button button-small nav-cta" href="#boglanish" onClick={closeMenu}>
              Loyiha boshlash <ArrowIcon />
            </a>
          </nav>
          <a className="button button-small header-cta" href="#boglanish">
            Loyiha boshlash <ArrowIcon />
          </a>
          <button
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero section" id="bosh-sahifa">
          <div className="container hero-layout">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="status-dot" />
                Veb-dasturlash <span>·</span> Telegram botlar <span>·</span> Sun’iy intellekt
              </div>
              <h1>
                Biznesingiz uchun <span>zamonaviy</span> raqamli yechimlar.
              </h1>
              <p className="hero-description">
                Biznesingizni rivojlantirish uchun zamonaviy veb-saytlar, aqlli Telegram botlar va
                sun’iy intellekt asosidagi avtomatlashtirish tizimlarini yarataman.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#boglanish">
                  Loyihamni muhokama qilish <ArrowIcon />
                </a>
                <a className="button button-secondary" href="#xizmatlar">
                  Xizmatlarni ko‘rish
                </a>
              </div>
              <div className="hero-specialties" aria-label="Asosiy yo‘nalishlar">
                <span>Veb-saytlar</span>
                <span>Telegram botlar</span>
                <span>AI agentlar</span>
              </div>
            </div>

            <div className="system-visual" role="img" aria-label="Veb-sayt, Telegram bot va AI yordamchi o‘zaro bog‘langan raqamli tizim tasviri">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-line line-one" />
              <div className="visual-line line-two" />
              <div className="visual-line line-three" />
              <div className="visual-node node-web">
                <span className="node-icon web-icon">W</span>
                <span><strong>Veb-sayt</strong><small>Raqamli makon</small></span>
                <span className="node-check">✓</span>
              </div>
              <div className="visual-node node-bot">
                <span className="node-icon bot-icon">T</span>
                <span><strong>Telegram bot</strong><small>Aqlli muloqot</small></span>
                <span className="node-check">✓</span>
              </div>
              <div className="visual-node node-ai">
                <span className="node-icon ai-icon">AI</span>
                <span><strong>AI yordamchi</strong><small>Jarayonlar tizimi</small></span>
                <span className="node-check">✓</span>
              </div>
              <div className="visual-core">
                <div className="core-rings"><span /></div>
                <span className="core-label">Yagona tizim</span>
              </div>
              <div className="visual-caption"><span /> O‘zaro bog‘langan yechimlar</div>
            </div>
          </div>
          <div className="container hero-bottom">
            <span>Biznesingiz uchun ishlab chiqilgan</span>
            <a href="#xizmatlar">Xizmatlar bilan tanishing <ArrowIcon /></a>
          </div>
        </section>

        <section className="section services-section" id="xizmatlar">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">Xizmatlar</span>
                <h2>Biznesingizga mos yechimlar.</h2>
              </div>
              <p>Har bir loyiha aniq maqsad va haqiqiy ehtiyojlar asosida ishlab chiqiladi.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="card-topline">
                    <span className="card-number">{service.number}</span>
                    <span className="card-symbol" aria-hidden="true">
                      {service.number === "01" ? "⌘" : service.number === "02" ? "↗" : "✳"}
                    </span>
                  </div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}><span aria-hidden="true" />{item}</li>
                    ))}
                  </ul>
                  <a
                    className="text-link"
                    href="#boglanish"
                    onClick={() => chooseService(service.value)}
                  >
                    {service.action} <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
            <p className="custom-service">
              Boshqa turdagi yechim kerakmi? <a href="#boglanish" onClick={() => chooseService("Boshqa loyiha")}>Loyihangizni muhokama qilamiz <ArrowIcon /></a>
            </p>
          </div>
        </section>

        <section className="section benefits-section" id="afzalliklar">
          <div className="container benefits-layout">
            <div className="benefits-intro">
              <span className="section-kicker">Yondashuv</span>
              <h2>Har bir loyiha — aniq maqsad bilan.</h2>
              <p>
                Yaxshi yechim to‘g‘ri savollardan boshlanadi. Avval biznesingizga nima kerakligini
                tushunaman, so‘ng maqsadga mos loyiha ustida ishlayman.
              </p>
              <a className="text-link" href="#jarayon">Ish jarayonini ko‘rish <ArrowIcon /></a>
            </div>
            <div className="benefit-list">
              {benefits.map((benefit) => (
                <article className="benefit-item" key={benefit.number}>
                  <span className="benefit-number">{benefit.number}</span>
                  <div><h3>{benefit.title}</h3><p>{benefit.description}</p></div>
                  <span className="benefit-mark" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="jarayon">
          <div className="container">
            <div className="section-heading process-heading">
              <div>
                <span className="section-kicker">Ish jarayoni</span>
                <h2>G‘oyadan tayyor loyihagacha.</h2>
              </div>
              <p>Shaffof, tushunarli va hamkorlikka asoslangan ish tartibi.</p>
            </div>
            <div className="process-grid">
              {steps.map((step, index) => (
                <article className="process-step" key={step.number}>
                  <div className="step-top"><span>{step.number}</span>{index < steps.length - 1 && <i />}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="savol-javob">
          <div className="container faq-layout">
            <div className="faq-intro">
              <span className="section-kicker">Savol-javob</span>
              <h2>Ko‘p so‘raladigan savollar.</h2>
              <p>Yana savolingiz bormi? Instagram orqali bemalol yozing.</p>
              <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">
                Instagram orqali so‘rash <ArrowIcon diagonal />
              </a>
            </div>
            <div className="faq-list">
              {questions.map((item, index) => {
                const isOpen = openQuestion === index;
                return (
                  <article className={`faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        onClick={() => setOpenQuestion(isOpen ? null : index)}
                      >
                        {item.question}<span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                      </button>
                    </h3>
                    <div className="faq-answer" id={`faq-answer-${index}`} hidden={!isOpen}>
                      <p>{item.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="boglanish">
          <div className="container">
            <div className="contact-banner">
              <div className="contact-banner-copy">
                <span className="section-kicker">Bog‘lanish</span>
                <h2>Loyihangiz haqida gaplashamiz.</h2>
                <p>
                  Savolingiz yoki biznesingiz uchun g‘oyangiz bormi? Instagram orqali yozing,
                  talablaringizni birgalikda muhokama qilamiz.
                </p>
                <a className="button button-primary" href={instagramUrl} target="_blank" rel="noreferrer">
                  Instagram orqali yozish <ArrowIcon diagonal />
                </a>
              </div>
              <div className="instagram-card">
                <span className="instagram-label">Instagram</span>
                <a href={instagramUrl} target="_blank" rel="noreferrer">
                  @baxtiyarov.dew <ArrowIcon diagonal />
                </a>
                <span className="instagram-note">Bevosita murojaat uchun</span>
                <div className="instagram-decoration" aria-hidden="true"><span>in</span></div>
              </div>
            </div>

            <div className="form-layout">
              <div className="form-intro">
                <span className="section-kicker">Loyiha so‘rovi</span>
                <h2>G‘oyangizni qisqacha yozing.</h2>
                <p>
                  Ma’lumotlaringiz yuborilmaydi yoki saqlanmaydi. To‘ldirilgan ma’lumotlardan
                  Instagram orqali yuborish uchun murojaat matni tayyorlanadi.
                </p>
                <div className="form-note"><span className="status-dot" /> Javobni Instagram orqali olasiz</div>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    Ismingiz <span>*</span>
                    <input name="name" type="text" placeholder="Ismingizni kiriting" required minLength={2} maxLength={80} />
                  </label>
                  <label>
                    Bog‘lanish usuli <span>*</span>
                    <input name="contact" type="text" placeholder="@foydalanuvchi yoki telefon" required minLength={3} maxLength={100} />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Biznes yo‘nalishi <span className="optional">(ixtiyoriy)</span>
                    <input name="business" type="text" placeholder="Masalan, ta’lim yoki savdo" maxLength={100} />
                  </label>
                  <label>
                    Qaysi xizmat kerak? <span>*</span>
                    <select
                      name="service"
                      required
                      value={selectedService}
                      onChange={(event) => chooseService(event.target.value)}
                    >
                      <option value="" disabled>Xizmatni tanlang</option>
                      <option value="Veb-sayt">Veb-sayt</option>
                      <option value="Telegram bot">Telegram bot</option>
                      <option value="AI agent">AI agent</option>
                      <option value="Boshqa loyiha">Boshqa loyiha</option>
                    </select>
                  </label>
                </div>
                <label>
                  Loyiha haqida batafsil ma’lumot <span>*</span>
                  <textarea name="details" placeholder="Loyihangiz qanday muammoni hal qiladi?" required minLength={10} maxLength={2000} rows={5} />
                </label>
                <label className="budget-field">
                  Taxminiy budjet <span className="optional">(ixtiyoriy)</span>
                  <input name="budget" type="text" placeholder="Masalan, 5 000 000 so‘m" maxLength={100} />
                </label>
                <button className="button button-primary form-submit" type="submit">
                  Loyihani muhokama qilish <ArrowIcon />
                </button>
                {preparedMessage && (
                  <div className="prepared-message" aria-live="polite">
                    <p>Murojaat matni tayyor. Uni nusxalab, Instagram orqali yuboring.</p>
                    <pre>{preparedMessage}</pre>
                    <div className="prepared-actions">
                      <button className="button button-secondary" type="button" onClick={copyMessage}>
                        Matnni nusxalash
                      </button>
                      <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">
                        Instagramni ochish <ArrowIcon diagonal />
                      </a>
                    </div>
                    {copyStatus && <p className="form-status" role="status">{copyStatus}</p>}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <Logo />
              <p>Veb-saytlar, Telegram botlar va aqlli avtomatlashtirish yechimlari.</p>
            </div>
            <div className="footer-nav">
              <span className="footer-title">Bo‘limlar</span>
              <div>{navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div>
            </div>
            <div className="footer-social">
              <span className="footer-title">Ijtimoiy tarmoq</span>
              <a href={instagramUrl} target="_blank" rel="noreferrer">@baxtiyarov.dew <ArrowIcon diagonal /></a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} BAKHTIYAROV.DEV</span>
            <span>Haqiqiy biznes ehtiyojlari uchun puxta ishlab chiqilgan.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
