import { useState } from 'react';
import { JobData } from '../data/jobsData';
import { CaretDown, CaretRight, Target, ChatCircle, Lightning, ChartBar } from '@phosphor-icons/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface JobRowProps {
  job: JobData;
  isExpanded: boolean;
  onToggle: () => void;
}

export function JobRow({ job, isExpanded, onToggle }: JobRowProps) {
  return (
    <div className="border border-border rounded-lg bg-card">
      <div 
        className="p-4 cursor-pointer hover:bg-muted/50 transition-colors flex items-center justify-between"
        onClick={onToggle}
      >
        <h3 className="font-semibold text-lg text-card-foreground">{job.title}</h3>
        {isExpanded ? (
          <CaretDown className="h-5 w-5 text-muted-foreground" />
        ) : (
          <CaretRight className="h-5 w-5 text-muted-foreground" />
        )}
      </div>
      
      {isExpanded && (
        <div className="px-4 pb-4 space-y-6">
          <Separator />
          
          {/* Pitch Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-foreground">معرفی دوره</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">{job.pitch}</p>
          </div>

          {/* ChatGPT Use Cases */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <ChatCircle className="h-5 w-5 text-accent" />
              <h4 className="font-semibold text-foreground">۳ استفاده کلیدی ChatGPT</h4>
            </div>
            <ul className="space-y-2 mr-6">
              {job.chatgptUseCases.map((useCase, index) => (
                <li key={index} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-accent font-medium">{index + 1}.</span>
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ready Prompts */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <ChatCircle className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-foreground">۲ پرامپت آماده</h4>
            </div>
            <div className="space-y-3">
              {job.readyPrompts.map((prompt, index) => (
                <Card key={index} className="bg-secondary/30">
                  <CardContent className="p-4">
                    <p className="text-sm text-foreground">{prompt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mini Automation */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Lightning className="h-5 w-5 text-accent" />
              <h4 className="font-semibold text-foreground">۱ مینی‌اتوماسیون</h4>
            </div>
            <Card className="bg-accent/10 border-accent/20">
              <CardContent className="p-4">
                <p className="text-foreground">{job.miniAutomation}</p>
              </CardContent>
            </Card>
          </div>

          {/* Measurable KPIs */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <ChartBar className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-foreground">۲ KPI قابل سنجش</h4>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {job.measurableKPIs.map((kpi, index) => (
                <Card key={index} className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <p className="text-sm text-foreground font-medium">{kpi}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}