import React from "react";
import "./Trust.css";
import { Clock, DollarSign, ShieldCheck, BadgeCheck } from "lucide-react";

const trustPoints = [
  {
    icon: <Clock />,
    title: "Available 24/7",
    desc: "Round-the-clock care whenever you need us."
  },
  {
    icon: <DollarSign />,
    title: "Affordable Rates",
    desc: "Quality healthcare at fair and transparent prices."
  },
  {
    icon: <ShieldCheck />,
    title: "Secure & Confidential",
    desc: "Your health information is always protected."
  },
  {
    icon: <BadgeCheck />,
    title: "Licensed Professionals",
    desc: "Trusted, certified, and experienced caregivers."
  }
];

export default function Trust() {
  return (
    <section className="trust">
      <div className="trust-container">
        <h2 className="trust-title">Why Trust Nurse Me?</h2>
        <div className="trust-timeline">
          {trustPoints.map((point, index) => (
            <div className="trust-step" key={index}>
              <div className="trust-icon">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.desc}</p>
            </div>
          ))}
          <div className="trust-line"></div>
        </div>
      </div>
    </section>
  );
}
