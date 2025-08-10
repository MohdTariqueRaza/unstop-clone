"use client";
import React from "react";
import Hero from "../components/Hero";
import WhoUsesUnstop from "../components/WhoUsesUnstop";
import CompetitionsCards from "../components/CompetitionsCards";
import JobCard from "../components/JobCards";
import IntershipCards from "../components/InternshipCards";
import HiringAssessments from "../components/HiringAssessments";
import HomeBanner from "../components/HomeBanner";
import IndustryVeterans from "../components/IndustryVeterans";
import AIPoweredMockTests from "../components/AIPoweredMockTests";
import LevelUpSkills from "../components/LevelUpSkills";
import Opportunity from "../components/Opportunity";
import DownloadRefer from "../components/DownloadRefer";
import Numbers from "../components/Numbers";

const HomeClient = () => {
  return (
    <div className="bg-white">
      <Hero />
      <WhoUsesUnstop />
      <IndustryVeterans />
      <HomeBanner />
      <CompetitionsCards />
      <IntershipCards />
      <JobCard />
      <AIPoweredMockTests />
      <HiringAssessments />
      <LevelUpSkills />
      <Opportunity />
      <DownloadRefer />
      <Numbers />
    </div>
  );
};

export default HomeClient;
