import React, { useEffect } from "react";
import "./Story.css";

const Story = () => {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.story-section'));
    sections.forEach((s) => s.classList.add('visible'));
  }, []);

  return (
    <section className="story-container">
      <h2 className="story-heading">Why NurseMe Was Born:</h2>
     
      <div className="story-grid">
        <aside className="story-left">
          <img
            className="story-sticky-img"
            src="https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/aboutstory-min(1).png"
            alt="Nurse caring for patient at home"
            loading="lazy"
          />
        </aside>
        <div className="story-right">
          <img
            className="story-top-right-img"
            src="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/pills-removebg-preview.png"
            alt="Pills illustration"
            loading="lazy"
          />
          
          <div className="story-section">
            <h2 className="story-title underline">The Challenge</h2>
            <p>
              In Kenya, over <strong>6 million people</strong> live with chronic
              illnesses like hypertension, diabetes, and cancer. The elderly
              population is projected to surpass <strong>4 million by 2030</strong>.
              Access to specialized care for persons with disabilities and those
              with long-term conditions remains limited. Families face high
              transport costs, hospital-acquired infection risks, and overstretched
              facilities.
            </p>
          </div>

          
          <div className="story-section">
            <h2 className="story-title underline">The Inspiration</h2>
            <p>
              NurseMe was born out of the urgent need to make quality healthcare
              more accessible and dignified. Witnessing the growing burden of
              non-communicable diseases, the limited palliative care systems, and
              the struggles of families caring for loved ones at home inspired our
              founders to act. Our belief: healthcare should meet people where they
              are — in their homes.
            </p>
          </div>

        
          <div className="story-section">
            <h2 className="story-title underline">The Solution</h2>
            <p>
              NurseMe is a scalable, technology-enabled platform that connects
              families with licensed professionals — nurses, doctors,
              physiotherapists, and more. We provide home visits, medication
              delivery, palliative support, and maternal care. Our goal is to ease
              the burden on hospitals while giving families compassionate,
              affordable, and secure care in the comfort of home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
