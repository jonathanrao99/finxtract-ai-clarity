
import { useEffect, useState } from "react";

export const LiveStats = () => {
  const [counts, setCounts] = useState({
    documents: 0,
    users: 0,
    timeSaved: 0,
    accuracy: 0
  });

  const targets = {
    documents: 120000,
    users: 5500,
    timeSaved: 3.2,
    accuracy: 99.2
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounts({
          documents: Math.floor(targets.documents * progress),
          users: Math.floor(targets.users * progress),
          timeSaved: Math.floor((targets.timeSaved * progress) * 10) / 10,
          accuracy: Math.floor((targets.accuracy * progress) * 10) / 10
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounts(targets);
        }
      }, stepDuration);
    };

    animateCounters();
  }, []);

  const stats = [
    {
      value: `${counts.documents.toLocaleString()}+`,
      label: "Documents Processed"
    },
    {
      value: `${counts.users.toLocaleString()}+`,
      label: "Active Users"
    },
    {
      value: `${counts.timeSaved} Minutes`,
      label: "Saved Per File"
    },
    {
      value: `${counts.accuracy}%`,
      label: "Extraction Accuracy"
    }
  ];

  return (
    <section className="py-20 bg-[#111221] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#84CC16]">
                {stat.value}
              </div>
              <div className="text-lg text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            Real-time updates coming soon.
          </p>
        </div>
      </div>
    </section>
  );
};
