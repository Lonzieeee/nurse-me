import React, { useEffect } from "react";
import "./Audience.css";

const Audience = () => {
  useEffect(() => {
    const container = document.querySelector('.audience-right');
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.audience-mini-card'));
    cards.forEach((el) => el.classList.add('is-hidden'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const index = Number(el.getAttribute('data-index') || 0);
            
            el.style.setProperty('--stagger-delay', `${index * 90}ms`);
            el.classList.add('reveal');
            el.classList.remove('is-hidden');
            observer.unobserve(el);
          }
        });
      },
      { root: null, threshold: 0.1 }
    );

    cards.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  
  const audiences = [
    {
      title: "Elderly People",
      desc:
        "Personalized home-based support that promotes independence, dignity, and comfort. We help with activities of daily living, medication reminders, mobility and fall prevention, and regular wellness check‑ins so families have peace of mind.",
      icon:
        "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/elderly.png",
    },
    {
      title: "People with Disabilities",
      desc:
        "Specialized assistance focused on accessibility and daily living. Our team supports adaptive equipment use, safe transfers, personal care, and practical coaching tailored to each person's goals at home and in their community.",
      icon:
        "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/assistant.png",
    },
    {
      title: "Individuals with Chronic Illness",
      desc:
        "Continuous monitoring and support for diabetes, hypertension, and other long‑term conditions. We coordinate with providers, track symptoms and vitals, and help clients follow care plans to reduce complications.",
      icon:
        "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/chronic-disease.png",
    },
    {
      title: "Post‑Surgery Recovery",
      desc:
        "Professional after‑surgery care at home. We assist with wound care, pain management, mobility and exercise, and medication schedules to support safe recovery and reduce the risk of readmission.",
      icon:
        "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/surgery.png",
    },
    {
      title: "Children with Chronic Illness",
      desc:
        "Compassionate pediatric support for conditions like asthma, epilepsy, or congenital disorders. We partner with families on routines, symptom tracking, school coordination, and emotional well‑being at home.",
      icon:
        "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/pediatrics.png",
    },
    {
      title: "Mental Health Support",
      desc:
        "Professional in‑home support for stress, anxiety, and depression. We provide structured routines, coping strategies, medication reminders, and warm, consistent encouragement to improve day‑to‑day stability.",
      icon:
        "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/depressed.png",
    },
  ];

  return (
    <section className="audience-hero">
      <div className="audience-hero-card">
        <span className="audience-circle c1" />
        <span className="audience-circle c2" />
        <span className="audience-circle c3" />
        <div className="audience-left">
          <h2 className="audience-hero-title">WHO WE CARE FOR</h2>
          <p className="audience-hero-desc">World‑Class Home Care, Tailored to Your Needs</p>
          <ul className="audience-points">
            <li>Licensed, vetted professionals</li>
            <li>Personalized in‑home plans</li>
            <li>Flexible scheduling</li>
            <li>Family updates and support</li>
          </ul>
          <a className="audience-btn" href="#contact">Learn More</a>

          <img
            className="audience-hero-img"
            src="https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/audiencedoctor.png"
            alt="Healthcare professional"
            loading="lazy"
          />
        </div>

        <div className="audience-right">
          {audiences.map((s, i) => (
            <div className="audience-mini-card" key={i} data-index={i}>
              {s.icon && (
                <img className="audience-mini-icon" src={s.icon} alt="" width={40} height={40} />
              )}
              <h3 className="audience-mini-title">{s.title}</h3>
              <div className="audience-mini-content">
                <p className="audience-mini-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
