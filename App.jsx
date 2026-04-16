import { useState, useEffect } from "react";

const FONT_URL = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap";

/* ─── TRANSLATIONS ─────────────────────────────────────────────────── */
const T = {
  en: {
    logo_sub: "RE/MAX Leading Edge · Laurent LLC",
    nav: ["Services","Team","Concierge","Testimonials","Blog","Contact"],
    nav_concierge: "Concierge",
    nav_cta: "Get Started",
    lang_toggle: "ES",

    hero_eyebrow: "Detroit · Ann Arbor Metro",
    hero_h1_1: "Most People Leave",
    hero_h1_2: "Hundreds of Thousands",
    hero_h1_em: "On the Table.",
    hero_mirror: '"You work too hard for your money to have someone negotiate it away."',
    hero_sub: "The Laurent Team combines licensed brokerage authority with Wall Street-caliber negotiation — because in real estate, the difference between a good agent and a great one isn't service. It's outcomes.",
    hero_remax_pre: "Operating under",
    hero_remax_strong: "RE/MAX Leading Edge · Laurent LLC Brokerage",
    hero_cta1: "See What You Could Be Losing",
    hero_cta2: "Meet the Team",
    hero_stats: [
      { n:"$10M+", l:"Closed every year" },
      { n:"150+", l:"Homes sold" },
      { n:"RE/MAX", l:"Leading Edge" },
      { n:"Bilingual", l:"English & Spanish" },
    ],

    loss_text: "<strong>The average unrepresented buyer overpays by $18,000–$41,000</strong> on a Metro Detroit home — not because the market is unfair, but because negotiation is a skill. You wouldn't go to court without a lawyer. Don't go to the table without Laurent.",

    mirror_ey: "We Hear You",
    mirror_h2_1: "You Have Questions.",
    mirror_h2_em: "We've Heard Them All.",
    mirror_lead: "The best negotiators listen before they speak. Here's what our clients are usually thinking — and what we tell them.",
    mirrors: [
      { q: '"I don\'t know if now is the right time to buy..."', a: 'That\'s the most common thing we hear — and the most costly belief. <strong>The buyers who waited "for the right time" in 2020 paid 34% more in 2022.</strong> The right time is defined by your position, not the market.' },
      { q: '"I\'m worried I\'ll overpay or miss something..."', a: 'That fear is valid. Most buyers do overpay — because they\'re represented by someone who doesn\'t negotiate for a living. <strong>Paris Laurent spent years as an investment banker. That table is familiar territory.</strong>' },
      { q: '"I\'m not sure I can compete in this market..."', a: 'The clients who win aren\'t always the highest bidders. <strong>They\'re the ones whose offers are structured to be irresistible.</strong> That\'s a craft — not a budget. We\'ll show you how.' },
    ],

    team_ey: "The Laurent Team",
    team_h2_1: "A Broker and a Banker.",
    team_h2_em: "Built to Win for You.",
    team_lead: "Most teams have realtors. We have a licensed broker who oversees every transaction's legal integrity — and a former investment banker who treats every deal like a capital markets negotiation.",
    henry_title: "Broker · The Laurent Team",
    henry_bio1: "Henry Laurent didn't learn real estate in a classroom. He grew up in a household where 1031 exchanges were dinner table conversation — at 12 years old, he already understood how capital moves through property. That foundation never left him.",
    henry_bio2: "What separates Henry from every other broker in the Metro Detroit market is what he learned on the other side of the table. He didn't just study real estate — he studied title law, loan structures, and the mechanics of deals that fall apart. That means when a transaction looks broken, Henry doesn't call for help. He fixes it.",
    henry_authority: "<strong>Why it matters to you:</strong> Most brokers hand off the hard problems. Henry solves them. Whether it's a clouded title, a loan condition that seems impossible, or a negotiation on the verge of collapsing — he has sat in every seat in that room and knows exactly which lever to pull. Your deal closes because he refuses to let it not.",
    henry_tags: ["Licensed Broker","Title & Loan Expert","Deal Closer","Detroit Metro Native","Investor Since Childhood"],
    paris_title: "Realtor & Co-Owner · The Laurent Team",
    paris_bio1: "Before real estate, Paris Laurent sat across negotiating tables as an investment banker — where the stakes were eight figures and the margin for error was zero. He brought that discipline here.",
    paris_bio2: "Where most realtors ask \"how much do you want to offer?\", Paris asks \"what structure makes this offer irresistible?\" That shift in framing has saved clients hundreds of thousands of dollars.",
    paris_authority: "<strong>Why it matters to you:</strong> Negotiation isn't instinct — it's science. Chris Voss called it \"tactical empathy.\" Graham called it \"margin of safety.\" Paris calls it Tuesday.",
    paris_tags: ["Former Investment Banker","Calibrated Negotiator","Offer Engineering","Portfolio Strategy"],

    remax_title: "RE/MAX Leading Edge · Laurent LLC",
    remax_desc: "Laurent LLC is a licensed brokerage operating under RE/MAX Leading Edge — combining the global reach and tools of the world's most recognized real estate brand with the personal accountability of a principal-led boutique team.",

    proof: [
      { n:"$10M+", l:"Closed in volume every year" },
      { n:"150+", l:"Homes sold" },
      { n:"98%", l:"Clients who would refer us" },
      { n:"Bilingual", l:"English & Spanish service" },
    ],

    svc_ey: "What We Do",
    svc_h2_1: "Services That Protect",
    svc_h2_em: "Your Position at Every Turn",
    svc_lead: "Every service we offer is designed around one question: what does this client stand to lose without the right expertise — and how do we make sure they never find out?",
    services: [
      { n:"01", t:"Residential Sales", d:"Precision pricing, strategic staging, and a buyer network built over two decades in the Metro Detroit market.", loss:"Homes priced without expert guidance sell for 7–11% less. That's real money left on the table." },
      { n:"02", t:"Luxury & Investment Properties", d:"Access to off-market listings and high-value opportunities across Oakland, Washtenaw, and Wayne Counties.", loss:"Off-market deals close before they're listed. Without the right relationships, you never knew they existed." },
      { n:"03", t:"Strategic Negotiation", d:"Paris Laurent's investment banking background means your offer is engineered — not just submitted. Every contingency, every term, every dollar is a lever.", loss:"Most realtors accept the first counter. Ours doesn't — and that difference has saved clients tens of thousands." },
      { n:"04", t:"First-Time Buyers", d:"Clear, jargon-free guidance from pre-approval to keys. We translate everything and advocate for you at every step.", loss:"First-time buyers without a dedicated advocate overpay and under-negotiate on the largest purchase of their lives." },
      { n:"05", t:"Portfolio & Investment Advisory", d:"ROI modeling, cap rate analysis, and long-term value positioning for investors treating real estate like the asset class it is.", loss:"Emotional buying destroys returns. We bring investment-bank discipline to your real estate decisions." },
      { n:"06", t:"Relocation Services", d:"Seamless moves into the Detroit–Ann Arbor Metro with neighborhood expertise, school district analysis, and concierge coordination.", loss:"Relocating without a local expert means making a life-changing decision with incomplete information." },
    ],

    invest_ey: "The Intelligent Investor Framework",
    invest_h2_1: "Real Estate Is Not",
    invest_h2_em: "Emotion. It's Capital.",
    invest_lead: "Benjamin Graham taught us that the intelligent investor doesn't speculate — they analyze, they wait for value, and they never pay more than an asset is worth. That principle drives everything we do.",
    invest_quote: '"The investor\'s chief problem — and even his worst enemy — is likely to be himself."',
    invest_quote_attr: "— Benjamin Graham",
    invest_sub: "We bring discipline to your most emotional purchase. You don't have to be rational — that's what we're here for.",
    invest_cards: [
      { label:"The Intelligent Investor Principle", title:"Every Home Is an Asset — Treat It Like One", desc:"Whether you're buying your first home or your fifteenth, understand the asset before you commit. We model every purchase for appreciation, carrying cost, and exit strategy." },
      { label:"Margin of Safety", title:"We Don't Chase. We Position.", desc:"Graham's margin of safety applies here. We never advise clients to stretch beyond value. Our job is to find the deal — not celebrate the win for its own sake." },
      { label:"Negotiation Science", title:"Never Split the Difference — We Don't", desc:"Chris Voss didn't negotiate by meeting in the middle. Neither does Paris. Calibrated questions, tactical empathy, and loss-framed offers consistently outperform conventional tactics." },
    ],

    conc_ey: "Always Available",
    conc_h2_1: "The Laurent",
    conc_h2_em: "Concierge",
    conc_lead: "Most clients don't know what they don't know. That's what the concierge is for — to make sure no question goes unanswered and no detail slips through.",
    conc_items: [
      ["Instant, Clear Answers","No callbacks. No waiting. Questions about listings, timelines, or the process get answered — clearly and quickly, without jargon."],
      ["End-to-End Guidance","From the first conversation to closing day, the concierge ensures you always know exactly where you are and what comes next."],
      ["Transaction Coordination","Paperwork, lender communication, inspection scheduling — all tracked and managed so nothing surprises you."],
      ["Vetted Referral Network","Need a mortgage advisor, inspector, or attorney? We connect you to trusted Metro Detroit professionals immediately."],
    ],
    conc_email_pre: "Reach us",

    test_ey: "Proof in Outcomes",
    test_h2_1: "Don't Take Our Word",
    test_h2_em: "for It. Take Theirs.",
    test_lead: "Social proof isn't a nice-to-have. It's the clearest signal of what you can expect — and what you'd be giving up by working with someone else.",
    testimonials: [
      { av:"KM", name:"Karen M.", role:"Sold — Grosse Pointe", outcome:"Sold 12% Over Asking", text:"I was nervous the market had peaked. Henry showed me exactly why that thinking would have cost me. We listed at the right moment, had 6 offers in 4 days, and closed above ask." },
      { av:"DR", name:"David R.", role:"Investment Portfolio — Ann Arbor", outcome:"3 Properties, 0 Overpays", text:"Paris thinks like a banker, not a salesperson. He told me which properties to walk away from. That discipline is rare — and it's exactly what an investor needs at the table." },
      { av:"TC", name:"Tanya C.", role:"First-Time Buyer — Detroit Metro", outcome:"Keys in 38 Days", text:"I came in terrified I couldn't compete. The concierge walked me through everything, Paris structured our offer brilliantly, and we beat out four other buyers — without being the highest price." },
    ],

    blog_ey: "Market Intelligence",
    blog_h2_1: "What You Should Know",
    blog_h2_em: "Before You Decide Anything",
    blog_all: "All Articles →",
    posts: [
      { tag:"Market Intelligence", bg:"#F7F0E0", emoji:"📊", hook:"What if waiting costs you more than buying?", title:"The Detroit Metro Inventory Squeeze: What It Really Means for Buyers in 2025", excerpt:"AI analysis of active listings across Wayne, Oakland & Washtenaw Counties reveals a trend most buyers won't see until it's too late.", date:"Oct 2024", ai:true },
      { tag:"Negotiation", bg:"#EEF0F5", emoji:"🤝", hook:"The highest offer doesn't always win.", title:"How Paris Laurent's Investment Banking Playbook Wins Deals in Competitive Markets", excerpt:"Inside the calibrated offer strategy that has helped Laurent clients win in multiple-offer situations without overpaying.", date:"Sep 2024", ai:false },
      { tag:"Intelligent Investing", bg:"#EFF5EE", emoji:"📐", hook:"Is your home working for you — or against you?", title:"Cap Rates, Appreciation & Exit Strategy: The Framework Every Detroit Buyer Should Use", excerpt:"A margin-of-safety framework, applied to Metro Detroit real estate. Treat your home purchase the way Graham treated securities.", date:"Sep 2024", ai:true },
    ],

    contact_ey: "Start the Conversation",
    contact_h2_1: "The Clients Who Win",
    contact_h2_em: "Are the Ones Who Ask First.",
    contact_mirror: '"It seems like you\'re trying to figure out if this is the right move. What would make you feel completely confident about taking the next step?"',
    contact_lead: "That's the question we'll help you answer — without pressure, without spin. Just a real conversation about what you want, what's realistic, and how we get you there.",
    contact_details: [
      ["📍","Address","25050 Ford Rd, Dearborn Heights, MI 48127"],
      ["📞","Phone","(313) 335-6217"],
      ["✉️","Concierge","concierge@thelaurenteam.com"],
      ["🕐","Availability","Mon–Sat 9AM–7PM · Concierge Always On"],
    ],
    form_first: "First Name", form_last: "Last Name", form_email: "Email Address",
    form_phone: "Phone Number", form_interest_default: "What brings you here?",
    form_interests: ["I'm looking to buy","I want to sell","I'm building an investment portfolio","I'm relocating to the Detroit–Ann Arbor area","I just want to understand my options"],
    form_message: "What's on your mind? There are no wrong answers here.",
    form_note: "No pressure. No sales pitch. Just a conversation with people who've seen every situation and know how to help.",
    form_submit: "Start the Conversation",
    sent_title: "You've taken the first step.",
    sent_body: "A member of The Laurent Team — or our concierge — will be in touch shortly. The clients who act early always have more options.",

    foot_sub: "RE/MAX Leading Edge · Laurent LLC · Detroit–Ann Arbor Metro",
    foot_copy: "© 2025 The Laurent Team. All rights reserved.",
    foot_links: ["Privacy","Terms","Careers","Concierge"],
  },

  es: {
    logo_sub: "RE/MAX Leading Edge · Laurent LLC",
    nav: ["Servicios","Equipo","Concierge","Testimonios","Blog","Contacto"],
    nav_concierge: "Concierge",
    nav_cta: "Empezar",
    lang_toggle: "EN",

    hero_eyebrow: "Detroit · Ann Arbor Metro",
    hero_h1_1: "La mayoría de compradores",
    hero_h1_2: "dejan miles de dólares",
    hero_h1_em: "en la mesa.",
    hero_mirror: '"Trabajaste demasiado para que alguien negocie tu dinero a la baja."',
    hero_sub: "El equipo Laurent combina la autoridad de un corredor con licencia y la precisión negociadora de Wall Street — porque en bienes raíces, la diferencia entre un buen agente y uno excelente no es el servicio. Son los resultados.",
    hero_remax_pre: "Operamos bajo",
    hero_remax_strong: "RE/MAX Leading Edge · Laurent LLC Brokerage",
    hero_cta1: "Descubre lo que podrías perder",
    hero_cta2: "Conoce al equipo",
    hero_stats: [
      { n:"$10M+", l:"Cerrado cada año" },
      { n:"150+", l:"Casas vendidas" },
      { n:"RE/MAX", l:"Leading Edge" },
      { n:"Bilingüe", l:"Inglés y Español" },
    ],

    loss_text: "<strong>El comprador promedio sin representación paga de $18,000 a $41,000 de más</strong> en el Metro de Detroit — no porque el mercado sea injusto, sino porque negociar es una habilidad. No irías a un tribunal sin abogado. No vayas a la mesa sin Laurent.",

    mirror_ey: "Te Escuchamos",
    mirror_h2_1: "Tienes preguntas.",
    mirror_h2_em: "Las hemos escuchado todas.",
    mirror_lead: "Los mejores negociadores escuchan antes de hablar. Esto es lo que nuestros clientes suelen pensar — y lo que les decimos.",
    mirrors: [
      { q: '"No sé si es el momento correcto para comprar..."', a: 'Eso es lo más común que escuchamos — y la creencia más costosa. <strong>Los compradores que esperaron "el momento correcto" en 2020 pagaron 34% más en 2022.</strong> El momento correcto lo define tu situación, no el mercado.' },
      { q: '"Me preocupa pagar de más o perderme algo..."', a: 'Ese miedo es válido. La mayoría sí paga de más — porque su representante no negocia de manera profesional. <strong>Paris Laurent pasó años como banquero de inversión. Esa mesa es territorio conocido para él.</strong>' },
      { q: '"No sé si puedo competir en este mercado..."', a: 'Los clientes que ganan no siempre ofrecen más dinero. <strong>Son aquellos cuyas ofertas están estructuradas para ser irresistibles.</strong> Eso es un arte — no un presupuesto. Te mostraremos cómo.' },
    ],

    team_ey: "El Equipo Laurent",
    team_h2_1: "Un Corredor y un Banquero.",
    team_h2_em: "Aquí para que tú ganes.",
    team_lead: "La mayoría de los equipos tienen agentes. Nosotros tenemos un corredor con licencia que supervisa la integridad legal de cada transacción — y un ex banquero de inversión que trata cada negocio como una operación de capital.",
    henry_title: "Corredor · El Equipo Laurent",
    henry_bio1: "Henry Laurent no aprendió bienes raíces en un salón de clases. Creció en un hogar donde los intercambios 1031 eran conversación de mesa — a los 12 años ya entendía cómo se mueve el capital a través de la propiedad. Esa base nunca lo abandonó.",
    henry_bio2: "Lo que distingue a Henry de cualquier otro corredor en el Metro Detroit es lo que aprendió del otro lado de la mesa. No solo estudió bienes raíces — estudió derecho de títulos, estructuras de préstamos y la mecánica de los negocios que se caen. Eso significa que cuando una transacción parece rota, Henry no pide ayuda. La arregla.",
    henry_authority: "<strong>Por qué importa para ti:</strong> La mayoría de los corredores transfieren los problemas difíciles. Henry los resuelve. Ya sea un título complicado, una condición de préstamo que parece imposible, o una negociación a punto de colapsar — él ha estado en cada asiento de esa sala y sabe exactamente qué palanca mover. Tu negocio cierra porque él se niega a dejar que no suceda.",
    henry_tags: ["Corredor con Licencia","Experto en Títulos y Préstamos","Cierra Negocios","Nativo del Metro Detroit","Inversor desde la Infancia"],
    paris_title: "Agente y Co-propietario · El Equipo Laurent",
    paris_bio1: "Antes de los bienes raíces, Paris Laurent negociaba en mesas de alto riesgo como banquero de inversión — donde las apuestas eran de ocho cifras y el margen de error era cero. Trajo esa disciplina aquí.",
    paris_bio2: "Donde la mayoría de los agentes pregunta \"¿cuánto quieres ofrecer?\", Paris pregunta \"¿qué estructura hace que esta oferta sea irresistible?\" Ese cambio de enfoque ha ahorrado cientos de miles de dólares a nuestros clientes.",
    paris_authority: "<strong>Por qué importa para ti:</strong> Negociar no es instinto — es ciencia. Chris Voss lo llamó \"empatía táctica\". Graham lo llamó \"margen de seguridad\". Paris lo llama martes.",
    paris_tags: ["Ex Banquero de Inversión","Negociador Calibrado","Ingeniería de Ofertas","Estrategia de Portafolio"],

    remax_title: "RE/MAX Leading Edge · Laurent LLC",
    remax_desc: "Laurent LLC es una correduría con licencia propia que opera bajo RE/MAX Leading Edge — combinando el alcance global de la marca inmobiliaria más reconocida del mundo con la responsabilidad personal de un equipo boutique dirigido por sus propietarios.",

    proof: [
      { n:"$10M+", l:"Cerrado en volumen cada año" },
      { n:"150+", l:"Casas vendidas" },
      { n:"98%", l:"Clientes que nos recomendarían" },
      { n:"Bilingüe", l:"Servicio en inglés y español" },
    ],

    svc_ey: "Lo Que Hacemos",
    svc_h2_1: "Servicios que protegen",
    svc_h2_em: "tu posición en cada paso",
    svc_lead: "Cada servicio que ofrecemos está diseñado alrededor de una pregunta: ¿qué pierde este cliente sin la experiencia adecuada — y cómo nos aseguramos de que nunca lo descubra de la peor manera?",
    services: [
      { n:"01", t:"Compra de Vivienda", d:"Orientación clara y sin jerga desde la pre-aprobación hasta las llaves. Te explicamos todo y te defendemos en cada paso.", loss:"Los compradores sin un representante dedicado pagan de más en la compra más grande de sus vidas." },
      { n:"02", t:"Venta Residencial", d:"Precios precisos, presentación estratégica y una red de compradores construida durante dos décadas en el Metro Detroit.", loss:"Las casas sin orientación experta se venden un 7–11% menos. Es dinero real que se queda sobre la mesa." },
      { n:"03", t:"Propiedades de Lujo e Inversión", d:"Acceso a listados fuera del mercado y oportunidades de alto valor en los condados de Oakland, Washtenaw y Wayne.", loss:"Los acuerdos fuera del mercado cierran antes de aparecer en los listados públicos. Sin los contactos correctos, nunca sabrías que existieron." },
      { n:"04", t:"Negociación Estratégica", d:"La experiencia bancaria de Paris Laurent significa que tu oferta está diseñada, no solo enviada. Cada contingencia, cada término, cada dólar es una palanca.", loss:"La mayoría de los agentes acepta la primera contra-oferta. El nuestro no — y esa diferencia ha ahorrado decenas de miles a nuestros clientes." },
      { n:"05", t:"Asesoría de Inversión", d:"Modelado de ROI, análisis de tasas de capitalización y posicionamiento de valor a largo plazo para inversores serios.", loss:"Comprar con emoción destruye los rendimientos. Traemos disciplina de banca de inversión a tus decisiones inmobiliarias." },
      { n:"06", t:"Servicios de Reubicación", d:"Transiciones fluidas al Metro Detroit–Ann Arbor con experiencia en vecindarios, análisis de distritos escolares y coordinación concierge.", loss:"Reubicarse sin un experto local significa tomar una decisión que cambia tu vida con información incompleta." },
    ],

    invest_ey: "El Marco del Inversor Inteligente",
    invest_h2_1: "Los Bienes Raíces No Son",
    invest_h2_em: "Emoción. Son Capital.",
    invest_lead: "Benjamin Graham nos enseñó que el inversor inteligente no especula — analiza, espera el valor y nunca paga más de lo que vale un activo. Ese principio guía todo lo que hacemos.",
    invest_quote: '"El principal problema del inversor — e incluso su peor enemigo — es probable que sea él mismo."',
    invest_quote_attr: "— Benjamin Graham",
    invest_sub: "Traemos disciplina a tu compra más emocional. No tienes que ser racional — para eso estamos nosotros.",
    invest_cards: [
      { label:"El Principio del Inversor Inteligente", title:"Cada Casa Es un Activo — Trátala Como Tal", desc:"Ya sea tu primera casa o tu decimoquinta, entiende el activo antes de comprometerte. Analizamos cada compra por apreciación, costo de mantenimiento y estrategia de salida." },
      { label:"Margen de Seguridad", title:"No Perseguimos. Posicionamos.", desc:"El margen de seguridad de Graham aplica aquí. Nunca aconsejamos a los clientes ir más allá del valor. Nuestro trabajo es encontrar el trato — no celebrar la victoria por sí misma." },
      { label:"La Ciencia de Negociar", title:"Nunca Dividir la Diferencia — Nosotros No Lo Hacemos", desc:"Chris Voss no negociaba llegando a un punto medio. Paris tampoco. Preguntas calibradas y ofertas enmarcadas en pérdidas consistentemente superan las tácticas convencionales." },
    ],

    conc_ey: "Siempre Disponible",
    conc_h2_1: "El Concierge",
    conc_h2_em: "Laurent",
    conc_lead: "La mayoría de los clientes no saben lo que no saben. Para eso existe el concierge — para asegurarse de que ninguna pregunta quede sin respuesta y ningún detalle se escape.",
    conc_items: [
      ["Respuestas Inmediatas y Claras","Sin esperas. Las preguntas sobre listados, plazos o el proceso se responden rápido y en español, sin jerga técnica."],
      ["Orientación de Principio a Fin","Desde la primera conversación hasta el día del cierre, el concierge se asegura de que siempre sepas exactamente dónde estás y qué sigue."],
      ["Coordinación de Transacciones","Documentos, comunicación con prestamistas, programación de inspecciones — todo rastreado y gestionado para que nada te sorprenda."],
      ["Red de Profesionales de Confianza","¿Necesitas un asesor hipotecario, inspector o abogado? Te conectamos de inmediato con profesionales de confianza en el Metro Detroit."],
    ],
    conc_email_pre: "Escríbenos",

    test_ey: "Prueba en Resultados",
    test_h2_1: "No Tomes Nuestra Palabra.",
    test_h2_em: "Toma la de Ellos.",
    test_lead: "La prueba social no es un lujo. Es la señal más clara de lo que puedes esperar — y de lo que perderías al trabajar con alguien más.",
    testimonials: [
      { av:"KM", name:"Karen M.", role:"Vendió — Grosse Pointe", outcome:"Vendió 12% Sobre el Precio", text:"Estaba nerviosa porque pensé que el mercado había llegado a su pico. Henry me mostró exactamente por qué ese pensamiento me habría costado dinero. Tuvimos 6 ofertas en 4 días y cerramos por encima del precio." },
      { av:"DR", name:"David R.", role:"Portafolio de Inversión — Ann Arbor", outcome:"3 Propiedades, 0 Sobrepagos", text:"Paris piensa como banquero, no como vendedor. Me dijo qué propiedades rechazar. Esa disciplina es rara — y es exactamente lo que un inversor necesita en la mesa." },
      { av:"TC", name:"Tanya C.", role:"Compradora Primera Vez — Detroit Metro", outcome:"Llaves en 38 Días", text:"Llegué aterrada de no poder competir. El concierge me explicó todo en español, Paris estructuró nuestra oferta brillantemente y ganamos ante cuatro compradores — sin ser la oferta más alta." },
    ],

    blog_ey: "Inteligencia de Mercado",
    blog_h2_1: "Lo que debes saber",
    blog_h2_em: "antes de tomar cualquier decisión",
    blog_all: "Todos los artículos →",
    posts: [
      { tag:"Inteligencia de Mercado", bg:"#F7F0E0", emoji:"📊", hook:"¿Y si esperar te cuesta más que comprar ahora?", title:"La Escasez de Inventario en Detroit: Lo que Realmente Significa para los Compradores en 2025", excerpt:"Análisis de listados activos en los condados Wayne, Oakland y Washtenaw revela una tendencia que la mayoría de compradores no verá hasta que sea tarde.", date:"Oct 2024", ai:true },
      { tag:"Negociación", bg:"#EEF0F5", emoji:"🤝", hook:"La oferta más alta no siempre gana.", title:"Cómo el Enfoque Bancario de Paris Laurent Gana Negociaciones en Mercados Competitivos", excerpt:"Dentro de la estrategia de oferta calibrada que ha ayudado a los clientes Laurent a ganar en situaciones de múltiples ofertas sin sobrepagar.", date:"Sep 2024", ai:false },
      { tag:"Inversión Inteligente", bg:"#EFF5EE", emoji:"📐", hook:"¿Tu casa trabaja para ti — o en tu contra?", title:"Tasas de Capitalización, Apreciación y Estrategia de Salida: El Marco que Todo Comprador en Detroit Debe Usar", excerpt:"El principio del margen de seguridad de Graham, aplicado al mercado inmobiliario del Metro Detroit. Trata tu compra como una inversión.", date:"Sep 2024", ai:true },
    ],

    contact_ey: "Inicia la Conversación",
    contact_h2_1: "Los clientes que ganan",
    contact_h2_em: "son los que preguntan primero.",
    contact_mirror: '"Parece que estás intentando descubrir si este es el movimiento correcto. ¿Qué necesitarías para sentirte completamente seguro de dar el siguiente paso?"',
    contact_lead: "Esa es la pregunta que te ayudaremos a responder — sin presión, sin discurso de ventas. Solo una conversación real sobre lo que quieres, lo que es realista y cómo llegar ahí.",
    contact_details: [
      ["📍","Dirección","25050 Ford Rd, Dearborn Heights, MI 48127"],
      ["📞","Teléfono","(313) 335-6217"],
      ["✉️","Concierge","concierge@thelaurenteam.com"],
      ["🕐","Disponibilidad","Lun–Sáb 9AM–7PM · Concierge Siempre Disponible"],
    ],
    form_first: "Nombre", form_last: "Apellido", form_email: "Correo Electrónico",
    form_phone: "Número de Teléfono", form_interest_default: "¿Qué te trae aquí?",
    form_interests: ["Quiero comprar una casa","Quiero vender","Estoy construyendo un portafolio de inversión","Me estoy mudando al área Detroit–Ann Arbor","Solo quiero entender mis opciones"],
    form_message: "¿Qué tienes en mente? Aquí no hay respuestas incorrectas.",
    form_note: "Sin presión. Sin discurso de ventas. Solo una conversación con personas que han visto cada situación y saben cómo ayudar.",
    form_submit: "Iniciar la Conversación",
    sent_title: "Has dado el primer paso.",
    sent_body: "Un miembro del Equipo Laurent — o nuestro concierge — se comunicará contigo pronto. Los clientes que actúan temprano siempre tienen más opciones.",

    foot_sub: "RE/MAX Leading Edge · Laurent LLC · Metro Detroit–Ann Arbor",
    foot_copy: "© 2025 El Equipo Laurent. Todos los derechos reservados.",
    foot_links: ["Privacidad","Términos","Carreras","Concierge"],
  }
};

/* ─── STYLES ─────────────────────────────────────────────────────────── */
const css = `
@import url('${FONT_URL}');
:root{
  --gold:#B8963E;--gold-light:#D4AF6A;--gold-pale:#F7F0E0;
  --dark:#17140F;--dark2:#232019;--dark3:#2C2720;
  --charcoal:#4A453C;--stone:#8C8478;--warm:#C4BAA8;
  --cream:#F8F4EE;--off:#FDFAF5;--white:#FFFFFF;
}
*{box-sizing:border-box;margin:0;padding:0;}
.lr{font-family:'Jost',sans-serif;background:var(--cream);color:var(--dark);overflow-x:hidden;}

.lr-nav{position:fixed;top:0;left:0;right:0;z-index:200;display:flex;align-items:center;justify-content:space-between;padding:20px 56px;background:rgba(23,20,15,.95);backdrop-filter:blur(16px);border-bottom:1px solid rgba(184,150,62,.18);}
.lr-logo-main{font-family:'Playfair Display',serif;font-size:20px;letter-spacing:.12em;color:var(--gold-light);}
.lr-logo-sub{font-size:9px;font-weight:500;letter-spacing:.28em;text-transform:uppercase;color:rgba(255,255,255,.28);margin-top:3px;}
.lr-nav-links{display:flex;gap:28px;list-style:none;}
.lr-nav-links a{font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.45);text-decoration:none;transition:color .2s;}
.lr-nav-links a:hover{color:var(--gold-light);}
.lr-nav-right{display:flex;align-items:center;gap:10px;}
.lr-lang-toggle{font-size:11px;font-weight:600;letter-spacing:.2em;color:rgba(255,255,255,.5);background:transparent;border:1px solid rgba(255,255,255,.18);padding:8px 14px;cursor:pointer;transition:all .2s;}
.lr-lang-toggle:hover{border-color:var(--gold);color:var(--gold-light);}
.lr-concierge-btn{font-size:11px;font-weight:400;letter-spacing:.14em;text-transform:uppercase;color:var(--gold-light);background:transparent;border:1px solid rgba(184,150,62,.32);padding:8px 18px;cursor:pointer;transition:all .2s;}
.lr-concierge-btn:hover{border-color:var(--gold);}
.lr-nav-cta{font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--dark);background:var(--gold);border:none;padding:10px 20px;cursor:pointer;transition:background .2s;}
.lr-nav-cta:hover{background:var(--gold-light);}
.lr-lang-bar{background:rgba(184,150,62,.12);border-bottom:1px solid rgba(184,150,62,.2);padding:10px 56px;display:flex;align-items:center;gap:12px;}
.lr-lang-bar span{font-size:11px;color:rgba(255,255,255,.45);letter-spacing:.1em;}
.lr-lang-bar button{font-size:11px;font-weight:600;letter-spacing:.15em;text-transform:uppercase;padding:5px 14px;border:none;cursor:pointer;transition:all .2s;}
.lr-lang-btn-active{background:var(--gold);color:var(--dark);}
.lr-lang-btn-inactive{background:transparent;border:1px solid rgba(184,150,62,.3)!important;color:var(--gold-light);}

.lr-hero{min-height:100vh;background:var(--dark);position:relative;display:flex;align-items:center;overflow:hidden;}
.lr-hero-lines{position:absolute;inset:0;opacity:.04;background:repeating-linear-gradient(90deg,var(--gold) 0,var(--gold) 1px,transparent 0,transparent 80px);}
.lr-hero-glow{position:absolute;top:-200px;right:-100px;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,rgba(184,150,62,.07) 0%,transparent 70%);pointer-events:none;}
.lr-hero-content{position:relative;z-index:2;padding:130px 56px 140px;max-width:860px;}
.lr-eyebrow-line{display:flex;align-items:center;gap:14px;margin-bottom:28px;}
.lr-eyebrow-line span{font-size:10px;font-weight:600;letter-spacing:.32em;text-transform:uppercase;color:var(--gold);}
.lr-eyebrow-line::after{content:'';display:block;width:44px;height:1px;background:var(--gold);}
.lr-hero-h1{font-family:'Playfair Display',serif;font-size:clamp(42px,5.4vw,80px);font-weight:400;line-height:1.07;color:var(--white);margin-bottom:26px;}
.lr-hero-h1 em{font-style:italic;color:var(--gold-light);}
.lr-hero-mirror{font-family:'Cormorant Garamond',serif;font-size:19px;font-weight:300;font-style:italic;line-height:1.75;color:rgba(255,255,255,.42);max-width:560px;margin-bottom:16px;border-left:2px solid rgba(184,150,62,.35);padding-left:20px;}
.lr-hero-sub{font-size:14px;font-weight:300;line-height:1.9;color:rgba(255,255,255,.36);max-width:540px;margin-bottom:18px;}
.lr-hero-remax{display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);padding:8px 16px;margin-bottom:40px;}
.lr-hero-remax span{font-size:11px;font-weight:400;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.3);}
.lr-hero-remax strong{font-size:11px;font-weight:600;letter-spacing:.1em;color:var(--gold-light);}
.lr-hero-actions{display:flex;gap:12px;flex-wrap:wrap;}
.lr-btn-gold{font-family:'Jost',sans-serif;font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;background:var(--gold);color:var(--dark);border:none;padding:14px 30px;cursor:pointer;transition:background .2s,transform .15s;}
.lr-btn-gold:hover{background:var(--gold-light);transform:translateY(-1px);}
.lr-btn-outline{font-family:'Jost',sans-serif;font-size:11px;font-weight:400;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.42);background:transparent;border:1px solid rgba(255,255,255,.16);padding:14px 30px;cursor:pointer;transition:all .2s;}
.lr-btn-outline:hover{border-color:var(--gold);color:var(--gold-light);}
.lr-hero-stats{position:absolute;bottom:0;right:0;display:flex;border-top:1px solid rgba(184,150,62,.14);border-left:1px solid rgba(184,150,62,.1);}
.lr-hstat{padding:24px 34px;border-right:1px solid rgba(184,150,62,.1);text-align:center;}
.lr-hstat:last-child{border-right:none;}
.lr-hstat-n{font-family:'Playfair Display',serif;font-size:26px;color:var(--gold-light);line-height:1;}
.lr-hstat-l{font-size:10px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.24);margin-top:5px;}

.lr-sec{padding:92px 56px;}
.lr-ey{font-size:10px;font-weight:600;letter-spacing:.32em;text-transform:uppercase;color:var(--gold);margin-bottom:13px;}
.lr-h2{font-family:'Playfair Display',serif;font-size:clamp(28px,2.9vw,43px);font-weight:400;line-height:1.2;color:var(--dark);}
.lr-h2 em{font-style:italic;color:var(--charcoal);}
.lr-h2-light{color:var(--white);}
.lr-div{width:44px;height:2px;background:var(--gold);margin:18px 0 26px;}
.lr-lead{font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:300;line-height:1.85;color:var(--charcoal);}

.lr-loss-banner{background:var(--dark2);border-top:1px solid rgba(139,46,46,.28);border-bottom:1px solid rgba(139,46,46,.28);padding:20px 56px;display:flex;align-items:center;gap:18px;}
.lr-loss-icon{width:34px;height:34px;border:1px solid rgba(139,46,46,.5);display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;color:#C0392B;}
.lr-loss-text{font-size:13px;font-weight:300;color:rgba(255,255,255,.42);line-height:1.75;}
.lr-loss-text strong{color:rgba(255,255,255,.72);font-weight:500;}

.lr-mirror-strip{background:var(--dark3);padding:80px 56px;}
.lr-mirror-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(184,150,62,.07);margin-top:48px;}
.lr-mirror-card{background:var(--dark3);padding:38px 30px;}
.lr-mirror-q{font-family:'Playfair Display',serif;font-size:17px;font-weight:400;font-style:italic;color:rgba(255,255,255,.68);line-height:1.5;margin-bottom:16px;}
.lr-mirror-a{font-size:13px;font-weight:300;line-height:1.85;color:rgba(255,255,255,.36);}
.lr-mirror-a strong{color:var(--gold-light);font-weight:500;}

.lr-about-bg{background:var(--off);}
.lr-team-grid{display:grid;grid-template-columns:1fr 1fr;gap:2px;background:rgba(140,132,120,.12);margin-top:52px;}
.lr-team-card{background:var(--off);padding:48px 42px;position:relative;overflow:hidden;}
.lr-team-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--gold);transform:scaleX(0);transform-origin:left;transition:transform .4s;}
.lr-team-card:hover::before{transform:scaleX(1);}
.lr-team-initial{font-family:'Playfair Display',serif;font-size:50px;font-weight:400;color:var(--gold-pale);line-height:1;margin-bottom:20px;font-style:italic;}
.lr-team-name{font-family:'Playfair Display',serif;font-size:25px;font-weight:500;color:var(--dark);margin-bottom:5px;}
.lr-team-title{font-size:10px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);margin-bottom:20px;}
.lr-team-bio{font-family:'Cormorant Garamond',serif;font-size:17px;font-weight:300;line-height:1.88;color:var(--charcoal);margin-bottom:12px;}
.lr-team-authority{margin-top:18px;padding:16px 18px;background:rgba(184,150,62,.05);border-left:2px solid var(--gold);}
.lr-team-authority p{font-size:13px;font-weight:400;line-height:1.75;color:var(--charcoal);}
.lr-team-authority strong{color:var(--dark);font-weight:600;}
.lr-team-tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:20px;}
.lr-tag{font-size:10px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--charcoal);border:1px solid rgba(140,132,120,.26);padding:4px 11px;}

.lr-remax-strip{background:var(--dark2);padding:24px 56px;display:flex;align-items:center;gap:26px;border-top:1px solid rgba(184,150,62,.1);border-bottom:1px solid rgba(184,150,62,.1);}
.lr-remax-badge{width:48px;height:48px;background:var(--gold);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.lr-remax-badge span{font-family:'Playfair Display',serif;font-size:12px;font-weight:600;color:var(--dark);}
.lr-remax-text strong{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--gold-light);display:block;margin-bottom:4px;}
.lr-remax-text p{font-size:13px;color:rgba(255,255,255,.32);font-weight:300;line-height:1.65;}

.lr-proof-bar{background:var(--cream);padding:0 56px;}
.lr-proof-inner{border-top:1px solid rgba(140,132,120,.18);border-bottom:1px solid rgba(140,132,120,.18);display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(140,132,120,.14);}
.lr-proof-item{background:var(--cream);padding:30px 26px;text-align:center;}
.lr-proof-n{font-family:'Playfair Display',serif;font-size:32px;font-weight:400;color:var(--dark);line-height:1;}
.lr-proof-l{font-size:10px;font-weight:400;letter-spacing:.15em;text-transform:uppercase;color:var(--stone);margin-top:6px;line-height:1.5;}

.lr-services-bg{background:var(--white);}
.lr-svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(140,132,120,.1);}
.lr-svc{background:var(--white);padding:40px 32px 54px;position:relative;transition:background .25s;}
.lr-svc:hover{background:var(--cream);}
.lr-svc-n{font-family:'Playfair Display',serif;font-size:11px;color:var(--gold);letter-spacing:.1em;margin-bottom:18px;}
.lr-svc-t{font-family:'Playfair Display',serif;font-size:18px;font-weight:500;color:var(--dark);margin-bottom:10px;line-height:1.3;}
.lr-svc-d{font-size:13px;line-height:1.82;color:var(--stone);font-weight:300;margin-bottom:12px;}
.lr-svc-loss{font-size:12px;font-style:italic;color:rgba(139,46,46,.65);line-height:1.65;border-top:1px solid rgba(139,46,46,.1);padding-top:11px;}
.lr-svc-arr{position:absolute;bottom:28px;right:28px;width:28px;height:28px;border:1px solid rgba(184,150,62,.2);display:flex;align-items:center;justify-content:center;color:var(--gold);font-size:12px;transition:all .2s;}
.lr-svc:hover .lr-svc-arr{background:var(--gold);border-color:var(--gold);color:var(--dark);}

.lr-invest-bg{background:var(--dark);}
.lr-invest-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-top:52px;}
.lr-invest-pull{font-family:'Playfair Display',serif;font-size:20px;font-style:italic;font-weight:400;color:var(--gold-light);line-height:1.55;border-left:2px solid var(--gold);padding-left:22px;margin:28px 0;}
.lr-invest-cards{display:flex;flex-direction:column;gap:14px;}
.lr-invest-card{border:1px solid rgba(184,150,62,.13);padding:26px 24px;transition:border-color .25s;}
.lr-invest-card:hover{border-color:rgba(184,150,62,.32);}
.lr-invest-card-label{font-size:10px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);margin-bottom:7px;}
.lr-invest-card-title{font-family:'Playfair Display',serif;font-size:16px;color:var(--white);margin-bottom:8px;}
.lr-invest-card-desc{font-size:13px;color:rgba(255,255,255,.33);line-height:1.75;font-weight:300;}

.lr-concierge-sec{background:var(--dark3);}
.lr-concierge-inner{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;}
.lr-concierge-vis{position:relative;height:340px;display:flex;align-items:center;justify-content:center;}
.lr-c-ring{position:absolute;border-radius:50%;}
.lr-c-ring1{width:290px;height:290px;border:1px solid rgba(184,150,62,.13);}
.lr-c-ring2{width:205px;height:205px;border:1px solid rgba(184,150,62,.22);}
.lr-c-ring3{width:126px;height:126px;background:rgba(184,150,62,.06);border:1px solid rgba(184,150,62,.36);display:flex;align-items:center;justify-content:center;font-size:26px;}
.lr-c-dot{position:absolute;width:8px;height:8px;border-radius:50%;background:var(--gold);opacity:.48;}
.lr-c-list{margin-top:28px;display:flex;flex-direction:column;gap:16px;}
.lr-c-item{display:flex;align-items:flex-start;gap:13px;}
.lr-c-check{width:21px;height:21px;border:1px solid var(--gold);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:10px;color:var(--gold);margin-top:1px;}
.lr-c-text strong{font-size:13px;font-weight:600;color:var(--white);display:block;margin-bottom:3px;}
.lr-c-text span{font-size:12px;color:rgba(255,255,255,.34);line-height:1.7;}
.lr-c-email{margin-top:32px;display:inline-flex;align-items:center;gap:12px;background:rgba(184,150,62,.06);border:1px solid rgba(184,150,62,.18);padding:13px 20px;}
.lr-c-email span{font-size:10px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.26);}
.lr-c-email a{font-size:13px;font-weight:500;color:var(--gold-light);text-decoration:none;}

.lr-test-bg{background:var(--dark2);}
.lr-test-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:52px;}
.lr-test-card{border:1px solid rgba(184,150,62,.1);padding:38px 30px;transition:border-color .3s;}
.lr-test-card:hover{border-color:rgba(184,150,62,.28);}
.lr-test-stars{display:flex;gap:3px;margin-bottom:14px;}
.lr-star{color:var(--gold);font-size:12px;}
.lr-quote{font-family:'Playfair Display',serif;font-size:54px;line-height:.7;color:var(--gold);opacity:.2;margin-bottom:12px;display:block;}
.lr-test-outcome{font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);background:rgba(184,150,62,.07);padding:5px 11px;display:inline-block;margin-bottom:18px;}
.lr-test-text{font-family:'Cormorant Garamond',serif;font-size:16px;font-weight:300;line-height:1.85;color:rgba(255,255,255,.58);font-style:italic;margin-bottom:22px;}
.lr-test-author{display:flex;align-items:center;gap:12px;border-top:1px solid rgba(255,255,255,.06);padding-top:16px;}
.lr-av{width:37px;height:37px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:13px;color:var(--dark);flex-shrink:0;}
.lr-av-name{font-size:13px;font-weight:500;color:var(--white);}
.lr-av-role{font-size:11px;color:rgba(255,255,255,.25);margin-top:1px;}

.lr-blog-bg{background:var(--cream);}
.lr-blog-top{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:48px;}
.lr-blog-all{font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);text-decoration:none;}
.lr-blog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.lr-bcard{background:var(--white);overflow:hidden;transition:transform .25s;cursor:pointer;}
.lr-bcard:hover{transform:translateY(-4px);}
.lr-bcard-img{height:180px;display:flex;align-items:center;justify-content:center;font-size:40px;}
.lr-bcard-body{padding:24px;}
.lr-bcard-tag{font-size:10px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:9px;}
.lr-bcard-title{font-family:'Playfair Display',serif;font-size:17px;font-weight:500;line-height:1.35;color:var(--dark);margin-bottom:9px;}
.lr-bcard-hook{font-size:13px;font-weight:400;font-style:italic;color:var(--charcoal);margin-bottom:7px;line-height:1.6;}
.lr-bcard-excerpt{font-size:12px;line-height:1.78;color:var(--stone);margin-bottom:14px;}
.lr-bcard-foot{display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--gold-pale);padding-top:11px;font-size:11px;color:rgba(140,132,120,.52);}
.lr-ai-tag{background:var(--gold-pale);color:var(--gold);font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;padding:3px 7px;}

.lr-contact-bg{background:var(--dark);}
.lr-contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;margin-top:56px;}
.lr-contact-mirror{font-family:'Playfair Display',serif;font-size:18px;font-style:italic;color:rgba(255,255,255,.4);line-height:1.75;border-left:2px solid rgba(184,150,62,.28);padding-left:20px;margin-bottom:32px;}
.lr-contact-details{display:flex;flex-direction:column;gap:15px;}
.lr-ci{display:flex;align-items:flex-start;gap:13px;}
.lr-ci-icon{width:32px;height:32px;border:1px solid rgba(184,150,62,.2);display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;}
.lr-ci-text strong{display:block;font-size:10px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--gold-light);margin-bottom:2px;}
.lr-ci-text span{font-size:13px;color:rgba(255,255,255,.33);}
.lr-form{display:flex;flex-direction:column;gap:12px;}
.lr-input{font-family:'Jost',sans-serif;font-size:13px;color:var(--white);background:rgba(255,255,255,.04);border:1px solid rgba(184,150,62,.14);padding:13px 17px;outline:none;transition:border-color .2s;width:100%;}
.lr-input::placeholder{color:rgba(255,255,255,.18);}
.lr-input:focus{border-color:rgba(184,150,62,.48);}
.lr-textarea{resize:vertical;min-height:104px;}
.lr-select{font-family:'Jost',sans-serif;font-size:13px;color:rgba(255,255,255,.48);background:rgba(255,255,255,.04);border:1px solid rgba(184,150,62,.14);padding:13px 17px;outline:none;cursor:pointer;width:100%;appearance:none;}
.lr-select option{background:#232019;color:#fff;}
.lr-form-row{display:grid;grid-template-columns:1fr 1fr;gap:11px;}
.lr-form-note{font-size:11px;color:rgba(255,255,255,.2);line-height:1.65;}
.lr-submitted{text-align:center;padding:56px 28px;border:1px solid rgba(184,150,62,.15);}
.lr-submitted p{font-family:'Playfair Display',serif;font-size:20px;font-style:italic;color:var(--gold-light);margin-bottom:10px;}
.lr-submitted span{font-size:13px;color:rgba(255,255,255,.27);}

.lr-footer{background:var(--dark2);padding:40px 56px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid rgba(184,150,62,.08);}
.lr-foot-logo-main{font-family:'Playfair Display',serif;font-size:18px;color:var(--gold-light);letter-spacing:.1em;}
.lr-foot-logo-sub{font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.17);margin-top:3px;}
.lr-foot-copy{font-size:11px;color:rgba(255,255,255,.14);}
.lr-foot-links{display:flex;gap:22px;list-style:none;}
.lr-foot-links a{font-size:10px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.2);text-decoration:none;transition:color .2s;}
.lr-foot-links a:hover{color:var(--gold-light);}

@media(max-width:960px){
  .lr-nav{padding:14px 20px;}.lr-nav-links{display:none;}
  .lr-sec{padding:60px 22px;}
  .lr-hero-content{padding:100px 22px 210px;}
  .lr-hero-stats{position:absolute;bottom:0;left:0;right:0;flex-wrap:wrap;border-left:none;}
  .lr-hstat{flex:1;min-width:100px;border-right:none;border-top:1px solid rgba(184,150,62,.08);}
  .lr-team-grid,.lr-concierge-inner,.lr-contact-grid,.lr-invest-grid{grid-template-columns:1fr;}
  .lr-svc-grid,.lr-mirror-grid{grid-template-columns:1fr 1fr;}
  .lr-test-grid,.lr-blog-grid{grid-template-columns:1fr;}
  .lr-proof-inner{grid-template-columns:1fr 1fr;}
  .lr-concierge-vis{height:180px;}
  .lr-footer{flex-direction:column;gap:18px;text-align:center;}
  .lr-form-row{grid-template-columns:1fr;}
  .lr-blog-top{flex-direction:column;align-items:flex-start;gap:12px;}
  .lr-loss-banner,.lr-remax-strip,.lr-lang-bar{padding:18px 22px;}
  .lr-proof-bar{padding:0 22px;}
}
`;

function fadeStyle(v, d = 0) {
  return { opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(20px)", transition: `opacity .6s ease ${d}s, transform .6s ease ${d}s` };
}

export default function LaurentTeam() {
  const [lang, setLang] = useState("en");
  const [form, setForm] = useState({ first:"", last:"", email:"", phone:"", interest:"", message:"" });
  const [sent, setSent] = useState(false);
  const [vis, setVis] = useState({});

  // Auto-detect language
  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage || "";
    if (browserLang.toLowerCase().startsWith("es")) setLang("es");
  }, []);

  useEffect(() => {
    const link = document.createElement("link"); link.rel = "stylesheet"; link.href = FONT_URL;
    document.head.appendChild(link);
    const style = document.createElement("style"); style.textContent = css;
    document.head.appendChild(style);
    return () => { document.head.removeChild(link); document.head.removeChild(style); };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setVis(v => ({ ...v, [e.target.dataset.id]: true })); }),
      { threshold: 0.07 }
    );
    document.querySelectorAll("[data-id]").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const t = T[lang];
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const f = (id, d = 0) => fadeStyle(vis[id], d);
  const upd = k => e => setForm(p => ({ ...p, [k]: e.target.value }));
  const toggleLang = () => setLang(l => l === "en" ? "es" : "en");

  const sectionIds = ["services","team","concierge","testimonials","blog","contact"];

  return (
    <div className="lr">
      {/* ── NAV ── */}
      <nav className="lr-nav">
        <div>
          <div className="lr-logo-main">LAURENT</div>
          <div className="lr-logo-sub">{t.logo_sub}</div>
        </div>
        <ul className="lr-nav-links">
          {t.nav.map((l, i) => (
            <li key={l}><a href="#" onClick={e => { e.preventDefault(); go(sectionIds[i]); }}>{l}</a></li>
          ))}
        </ul>
        <div className="lr-nav-right">
          <button className="lr-lang-toggle" onClick={toggleLang} title="Switch language">{t.lang_toggle}</button>
          <button className="lr-concierge-btn" onClick={() => go("concierge")}>{t.nav_concierge}</button>
          <button className="lr-nav-cta" onClick={() => go("contact")}>{t.nav_cta}</button>
        </div>
      </nav>

      {/* ── LANGUAGE BAR ── */}
      <div className="lr-lang-bar" style={{ marginTop: 64 }}>
        <span>{lang === "en" ? "Language / Idioma:" : "Idioma / Language:"}</span>
        <button className={`lr-lang-btn-${lang === "en" ? "active" : "inactive"}`} onClick={() => setLang("en")}>English</button>
        <button className={`lr-lang-btn-${lang === "es" ? "active" : "inactive"}`} onClick={() => setLang("es")}>Español</button>
      </div>

      {/* ── HERO ── */}
      <section className="lr-hero" id="hero">
        <div className="lr-hero-lines" />
        <div className="lr-hero-glow" />
        <div className="lr-hero-content">
          <div className="lr-eyebrow-line"><span>{t.hero_eyebrow}</span></div>
          <h1 className="lr-hero-h1">
            {t.hero_h1_1}<br />{t.hero_h1_2}<br /><em>{t.hero_h1_em}</em>
          </h1>
          <p className="lr-hero-mirror">{t.hero_mirror}</p>
          <p className="lr-hero-sub">{t.hero_sub}</p>
          <div className="lr-hero-remax">
            <span>{t.hero_remax_pre}</span>
            <strong>{t.hero_remax_strong}</strong>
          </div>
          <div className="lr-hero-actions">
            <button className="lr-btn-gold" onClick={() => go("contact")}>{t.hero_cta1}</button>
            <button className="lr-btn-outline" onClick={() => go("team")}>{t.hero_cta2}</button>
          </div>
        </div>
        <div className="lr-hero-stats">
          {t.hero_stats.map(({ n, l }) => (
            <div className="lr-hstat" key={l}>
              <div className="lr-hstat-n">{n}</div>
              <div className="lr-hstat-l">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LOSS BANNER ── */}
      <div className="lr-loss-banner">
        <div className="lr-loss-icon">⚠</div>
        <p className="lr-loss-text" dangerouslySetInnerHTML={{ __html: t.loss_text }} />
      </div>

      {/* ── MIRROR ── */}
      <section className="lr-mirror-strip">
        <div data-id="mh" style={f("mh")}>
          <div className="lr-ey">{t.mirror_ey}</div>
          <h2 className="lr-h2 lr-h2-light">{t.mirror_h2_1}<br /><em style={{ color: "var(--gold-light)" }}>{t.mirror_h2_em}</em></h2>
          <div className="lr-div" />
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 300, color: "rgba(255,255,255,.38)", maxWidth: 500, lineHeight: 1.8 }}>{t.mirror_lead}</p>
        </div>
        <div className="lr-mirror-grid">
          {t.mirrors.map((c, i) => (
            <div className="lr-mirror-card" key={i} data-id={`mc${i}`} style={f(`mc${i}`, i * .1)}>
              <p className="lr-mirror-q">{c.q}</p>
              <p className="lr-mirror-a" dangerouslySetInnerHTML={{ __html: c.a }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="lr-sec lr-about-bg" id="team">
        <div data-id="th" style={f("th")}>
          <div className="lr-ey">{t.team_ey}</div>
          <h2 className="lr-h2">{t.team_h2_1}<br /><em>{t.team_h2_em}</em></h2>
          <div className="lr-div" />
          <p className="lr-lead" style={{ color: "var(--stone)", maxWidth: 540 }}>{t.team_lead}</p>
        </div>
        <div className="lr-team-grid">
          {[
            { id:"henry", initial:"H.", name:"Henry Laurent", title: t.henry_title, bio1: t.henry_bio1, bio2: t.henry_bio2, auth: t.henry_authority, tags: t.henry_tags },
            { id:"paris", initial:"P.", name:"Paris Laurent", title: t.paris_title, bio1: t.paris_bio1, bio2: t.paris_bio2, auth: t.paris_authority, tags: t.paris_tags },
          ].map((m, i) => (
            <div className="lr-team-card" key={m.id} data-id={m.id} style={f(m.id, i * .1)}>
              <div className="lr-team-initial">{m.initial}</div>
              <div className="lr-team-name">{m.name}</div>
              <div className="lr-team-title">{m.title}</div>
              <p className="lr-team-bio">{m.bio1}</p>
              <p className="lr-team-bio">{m.bio2}</p>
              <div className="lr-team-authority"><p dangerouslySetInnerHTML={{ __html: m.auth }} /></div>
              <div className="lr-team-tags">{m.tags.map(tag => <span className="lr-tag" key={tag}>{tag}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── REMAX ── */}
      <div className="lr-remax-strip">
        <div className="lr-remax-badge"><span>R/M</span></div>
        <div className="lr-remax-text">
          <strong>{t.remax_title}</strong>
          <p>{t.remax_desc}</p>
        </div>
      </div>

      {/* ── PROOF BAR ── */}
      <div className="lr-proof-bar" data-id="pb" style={f("pb")}>
        <div className="lr-proof-inner">
          {t.proof.map(({ n, l }) => (
            <div className="lr-proof-item" key={l}>
              <div className="lr-proof-n">{n}</div>
              <div className="lr-proof-l">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="lr-sec lr-services-bg" id="services">
        <div data-id="sh" style={f("sh")}>
          <div className="lr-ey">{t.svc_ey}</div>
          <h2 className="lr-h2">{t.svc_h2_1}<br /><em>{t.svc_h2_em}</em></h2>
          <div className="lr-div" />
          <p className="lr-lead" style={{ color: "var(--stone)", maxWidth: 540, marginBottom: 48 }}>{t.svc_lead}</p>
        </div>
        <div className="lr-svc-grid">
          {t.services.map((s, i) => (
            <div className="lr-svc" key={s.n} data-id={`sv${i}`} style={f(`sv${i}`, i * .05)}>
              <div className="lr-svc-n">{s.n}</div>
              <div className="lr-svc-t">{s.t}</div>
              <p className="lr-svc-d">{s.d}</p>
              <p className="lr-svc-loss">{s.loss}</p>
              <div className="lr-svc-arr">→</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTELLIGENT INVESTOR ── */}
      <section className="lr-sec lr-invest-bg">
        <div className="lr-invest-grid">
          <div data-id="il" style={f("il")}>
            <div className="lr-ey">{t.invest_ey}</div>
            <h2 className="lr-h2 lr-h2-light">{t.invest_h2_1}<br /><em style={{ color: "var(--gold-light)" }}>{t.invest_h2_em}</em></h2>
            <div className="lr-div" />
            <p className="lr-lead" style={{ color: "rgba(255,255,255,.42)", fontSize: 17 }}>{t.invest_lead}</p>
            <div className="lr-invest-pull">
              {t.invest_quote}<br />
              <span style={{ fontSize: 12, color: "rgba(255,255,255,.28)", fontStyle: "normal", fontFamily: "'Jost',sans-serif", letterSpacing: ".1em" }}>{t.invest_quote_attr}</span>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,.35)", lineHeight: 1.85 }}>{t.invest_sub}</p>
          </div>
          <div className="lr-invest-cards" data-id="ic" style={f("ic", .15)}>
            {t.invest_cards.map((c, i) => (
              <div className="lr-invest-card" key={i}>
                <div className="lr-invest-card-label">{c.label}</div>
                <div className="lr-invest-card-title">{c.title}</div>
                <p className="lr-invest-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONCIERGE ── */}
      <section className="lr-sec lr-concierge-sec" id="concierge">
        <div className="lr-concierge-inner">
          <div className="lr-concierge-vis" data-id="cv" style={f("cv")}>
            <div className="lr-c-ring lr-c-ring1" />
            <div className="lr-c-ring lr-c-ring2" />
            <div className="lr-c-ring lr-c-ring3">✦</div>
            {[["-110px","48px"],["100px","-80px"],["115px","100px"],["-88px","108px"]].map(([top, left], i) => (
              <div className="lr-c-dot" key={i} style={{ top, left }} />
            ))}
          </div>
          <div data-id="ct" style={f("ct", .15)}>
            <div className="lr-ey">{t.conc_ey}</div>
            <h2 className="lr-h2 lr-h2-light">{t.conc_h2_1}<br /><em style={{ color: "var(--gold-light)" }}>{t.conc_h2_em}</em></h2>
            <div className="lr-div" />
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 300, color: "rgba(255,255,255,.36)", lineHeight: 1.8, marginBottom: 0 }}>{t.conc_lead}</p>
            <div className="lr-c-list">
              {t.conc_items.map(([title, desc]) => (
                <div className="lr-c-item" key={title}>
                  <div className="lr-c-check">✓</div>
                  <div className="lr-c-text"><strong>{title}</strong><span>{desc}</span></div>
                </div>
              ))}
            </div>
            <div className="lr-c-email">
              <span>{t.conc_email_pre}</span>
              <a href="mailto:concierge@thelaurenteam.com">concierge@thelaurenteam.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="lr-sec lr-test-bg" id="testimonials">
        <div data-id="tsh" style={f("tsh")}>
          <div className="lr-ey">{t.test_ey}</div>
          <h2 className="lr-h2 lr-h2-light">{t.test_h2_1}<br /><em style={{ color: "var(--warm)" }}>{t.test_h2_em}</em></h2>
          <div className="lr-div" />
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 300, color: "rgba(255,255,255,.33)", maxWidth: 500, lineHeight: 1.8 }}>{t.test_lead}</p>
        </div>
        <div className="lr-test-grid">
          {t.testimonials.map((tm, i) => (
            <div className="lr-test-card" key={i} data-id={`tc${i}`} style={f(`tc${i}`, i * .1)}>
              <div className="lr-test-stars">{[...Array(5)].map((_, j) => <span className="lr-star" key={j}>★</span>)}</div>
              <div className="lr-test-outcome">{tm.outcome}</div>
              <span className="lr-quote">"</span>
              <p className="lr-test-text">{tm.text}</p>
              <div className="lr-test-author">
                <div className="lr-av">{tm.av}</div>
                <div>
                  <div className="lr-av-name">{tm.name}</div>
                  <div className="lr-av-role">{tm.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="lr-sec lr-blog-bg" id="blog">
        <div className="lr-blog-top" data-id="bh" style={f("bh")}>
          <div>
            <div className="lr-ey">{t.blog_ey}</div>
            <h2 className="lr-h2">{t.blog_h2_1}<br /><em>{t.blog_h2_em}</em></h2>
            <div className="lr-div" />
          </div>
          <a href="#" className="lr-blog-all">{t.blog_all}</a>
        </div>
        <div className="lr-blog-grid">
          {t.posts.map((p, i) => (
            <div className="lr-bcard" key={i} data-id={`bc${i}`} style={f(`bc${i}`, i * .08)}>
              <div className="lr-bcard-img" style={{ background: p.bg }}>{p.emoji}</div>
              <div className="lr-bcard-body">
                <div className="lr-bcard-tag">{p.tag}</div>
                <div className="lr-bcard-title">{p.title}</div>
                <p className="lr-bcard-hook">{p.hook}</p>
                <p className="lr-bcard-excerpt">{p.excerpt}</p>
                <div className="lr-bcard-foot">
                  <span>{p.date}</span>
                  {p.ai && <span className="lr-ai-tag">{lang === "es" ? "Análisis IA" : "AI-Assisted"}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="lr-sec lr-contact-bg" id="contact">
        <div data-id="cnh" style={f("cnh")}>
          <div className="lr-ey">{t.contact_ey}</div>
          <h2 className="lr-h2 lr-h2-light">{t.contact_h2_1}<br /><em style={{ color: "var(--gold-light)" }}>{t.contact_h2_em}</em></h2>
          <div className="lr-div" />
        </div>
        <div className="lr-contact-grid">
          <div data-id="ci" style={f("ci", .1)}>
            <p className="lr-contact-mirror">{t.contact_mirror}</p>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 300, color: "rgba(255,255,255,.36)", lineHeight: 1.8, marginBottom: 32 }}>{t.contact_lead}</p>
            <div className="lr-contact-details">
              {t.contact_details.map(([icon, label, val]) => (
                <div className="lr-ci" key={label}>
                  <div className="lr-ci-icon">{icon}</div>
                  <div className="lr-ci-text"><strong>{label}</strong><span>{val}</span></div>
                </div>
              ))}
            </div>
          </div>
          <div data-id="cf" style={f("cf", .2)}>
            {sent ? (
              <div className="lr-submitted">
                <p>{t.sent_title}</p>
                <span>{t.sent_body}</span>
              </div>
            ) : (
              <form className="lr-form" onSubmit={async e => { e.preventDefault(); try { await fetch("https://formspree.io/f/YOUR_FORM_ID", { method:"POST", headers:{"Content-Type":"application/json","Accept":"application/json"}, body: JSON.stringify({...form, _subject:"New Laurent Team Inquiry"}) }); } catch(err) {} setSent(true); }}>
                <div className="lr-form-row">
                  <input className="lr-input" placeholder={t.form_first} value={form.first} onChange={upd("first")} required />
                  <input className="lr-input" placeholder={t.form_last} value={form.last} onChange={upd("last")} required />
                </div>
                <input className="lr-input" type="email" placeholder={t.form_email} value={form.email} onChange={upd("email")} required />
                <input className="lr-input" placeholder={t.form_phone} value={form.phone} onChange={upd("phone")} />
                <select className="lr-select" value={form.interest} onChange={upd("interest")}>
                  <option value="">{t.form_interest_default}</option>
                  {t.form_interests.map(o => <option key={o}>{o}</option>)}
                </select>
                <textarea className="lr-input lr-textarea" placeholder={t.form_message} value={form.message} onChange={upd("message")} />
                <p className="lr-form-note">{t.form_note}</p>
                <button type="submit" className="lr-btn-gold" style={{ alignSelf: "flex-start" }}>{t.form_submit}</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="lr-footer">
        <div>
          <div className="lr-foot-logo-main">LAURENT</div>
          <div className="lr-foot-logo-sub">{t.foot_sub}</div>
        </div>
        <p className="lr-foot-copy">{t.foot_copy}</p>
        <ul className="lr-foot-links">
          {t.foot_links.map((l, i) => (
            <li key={l}><a href={i === 3 ? "mailto:concierge@thelaurenteam.com" : "#"}>{l}</a></li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
