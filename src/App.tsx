import { useState } from 'react';
import { useKV } from '@github/spark/hooks';
import { jobsData } from './data/jobsData';
import { JobRow } from './components/JobRow';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from '@phosphor-icons/react';

function App() {
  const [expandedJobs, setExpandedJobs] = useKV<string[]>('expandedJobs', []);

  const toggleJob = (jobTitle: string) => {
    setExpandedJobs((currentExpanded) => {
      const current = currentExpanded || [];
      return current.includes(jobTitle)
        ? current.filter(title => title !== jobTitle)
        : [...current, jobTitle];
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">ChatGPT به درد کیا میخوره؟</h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            آموزش استفاده از ChatGPT برای تخصص‌های مختلف و بهبود بهره‌وری کاری
          </p>
        </div>

        {/* Jobs List */}
        <div className="max-w-4xl mx-auto">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-center text-xl">مشاغل و تخصص‌ها</CardTitle>
            </CardHeader>
          </Card>
          
          <div className="space-y-4">
            {jobsData.map((job) => (
              <JobRow
                key={job.title}
                job={job}
                isExpanded={(expandedJobs || []).includes(job.title)}
                onToggle={() => toggleJob(job.title)}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 py-6 border-t border-border">
          <p className="text-muted-foreground">
            پلتفرم آموزش استفاده حرفه‌ای از هوش مصنوعی در محیط کار
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;