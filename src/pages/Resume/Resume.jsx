import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
         
          <TimelineItem
            title="Bahir Dar University"
            date="2022 — 2024"
            description="Masters in Artificial Intelligence and Data Science"
          />
      

          <TimelineItem
            title="Adigrat University"
            date="2014 — 2018"
            description="Bachelor in Computer Science Department"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
        <TimelineItem
            title="Web designer"
            date="2018 — 2024"
            description="Personal Web developer"
          />
        <TimelineItem

            title="SART COnsult "
            date="2023 — Now"
            description="JUnier Data Analyst"
          />
        <TimelineItem
            title="Mekdela Amba University"
            date="2020 — 2022"
            description="Assistant Lecturer in computer science Department"
          />
          <TimelineItem
            title="Wollo University"
            date="2018 — 2020"
            description="Senior technical Assistant in computer science Department"
          />

        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web design" value={80} />
          <SkillItem title="Lecturing and training" value={70} />
          <SkillItem title="MERN Stack" value={90} />
          <SkillItem title="Data Analysis and Dashboarding" value={90} />
          <SkillItem title="Machine learning and Deep Learning" value={70} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
