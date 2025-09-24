import React from "react";
import "./Team.css";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Dr. Theophilus Juma",
    role: "Co-Founder",
    bio: "I'm passionate about making healthcare compassionate,accessible,and affordable for every family in Kenya. At NurseMe, my goal is to help people receive quality care right in their homes.",
    img: "https://via.placeholder.com/150",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Allan Mulanda",
    role: "Co-Founder",
    bio: "I believe technology should break barriers in healthcare. With NurseMe, I'm building solutions that connect families to professionals they can trust, wherever they are.",
    img: "https://via.placeholder.com/150",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Dr. Lance Nadeau",
    role: "Advisor",
    bio: "I support NurseMe because I've seen the power of ethical , community-centered healthcare. Together, we're making a difference for vulnerable populations.",
    img: "https://via.placeholder.com/150",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
];

const TeamCard = ({ member }) => {
  return (
    <div className="team-card-horizontal">
      <div className="avatar-wrap">
        <img src={member.img} alt={member.name} />
      </div>
      <div className="member-content">
        <div className="member-header">
          <h3 className="member-name">{member.name}</h3>
          <span className="member-role">{member.role}</span>
        </div>
        <p className="member-bio">{member.bio}</p>
        <div className="member-socials" aria-label="social links">
          <a href={member.socials.twitter} className="social-btn" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href={member.socials.instagram} className="social-btn" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href={member.socials.linkedin} className="social-btn" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const rows = [];
  for (let i = 0; i < teamMembers.length; i += 2) {
    rows.push(teamMembers.slice(i, i + 2));
  }

  return (
    <section className="team-section">
      <h2 className="team-title">Meet the Brains</h2>
      <p className="team-subtitle">These are the people working to make NurseMe’s vision a reality.</p>

      <div className="team-rows">
        {rows.map((row, rowIndex) => (
          <div className="team-row" key={`row-${rowIndex}`}>
            {row.map((member, idx) => (
              <TeamCard member={member} key={`${member.name}-${idx}`} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
