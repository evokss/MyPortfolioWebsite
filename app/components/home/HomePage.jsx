import React from "react";
import ProfileSection from "./ProfileSection";

const HomePage = () => {
  return (
    <div className="flex min-h-screen items-center bg-slate-50 lg:-mt-10 dark:bg-gray-900 dark:text-white">
      <ProfileSection />
    </div>
  );
};

export default HomePage;
