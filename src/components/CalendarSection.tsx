import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Clock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Meeting {
  id: string;
  mainMeeting: string;
  subMeeting: string;
  date: string;
  agenda: string;
  location: string;
  startDate: number;
  endDate?: number;
}

const CalendarSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 8)); // September 2025
  
  const sampleMeetings: Meeting[] = [
    {
      id: '1',
      mainMeeting: 'SB8J-1 (Subsidiary Body on Article 8(j))',
      subMeeting: 'Indigenous and Traditional Knowledge Systems',
      date: 'September 2-6, 2025',
      agenda: 'Traditional Territories and Biodiversity Conservation',
      location: 'Panama City, Panama',
      startDate: 2,
      endDate: 6
    },
    {
      id: '2',
      mainMeeting: 'SBSTTA-27',
      subMeeting: 'Scientific, Technical and Technological Advice',
      date: 'September 15-19, 2025',
      agenda: 'Global Biodiversity Framework Implementation',
      location: 'Panama City, Panama',
      startDate: 15,
      endDate: 19
    },
    {
      id: '3',
      mainMeeting: 'SB8J-1 Follow-up',
      subMeeting: 'Community Consultation Session',
      date: 'September 25, 2025',
      agenda: 'Post-meeting Community Feedback',
      location: 'Virtual & Panama City',
      startDate: 25
    }
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getMeetingForDate = (day: number) => {
    return sampleMeetings.find(meeting => {
      if (meeting.endDate) {
        return day >= meeting.startDate && day <= meeting.endDate;
      }
      return day === meeting.startDate;
    });
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-border"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const meeting = getMeetingForDate(day);
      days.push(
        <div key={day} className="h-24 border border-border p-1 relative bg-background hover:bg-muted/50 transition-colors">
          <div className="text-sm font-medium text-foreground mb-1">{day}</div>
          {meeting && (
            <div className="text-xs p-1 rounded" style={{ backgroundColor: 'hsl(var(--iifb-orange) / 0.1)', color: 'hsl(var(--iifb-orange))' }}>
              {meeting.mainMeeting}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <section className="py-16 lg:py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: 'hsl(var(--iifb-orange))' }}></div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'hsl(var(--iifb-orange))' }}>Event Calendar</span>
            <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: 'hsl(var(--iifb-orange))' }}></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Upcoming <span style={{ color: 'hsl(var(--iifb-orange))' }}>Events & Meetings</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about important meetings, workshops, and events related to biodiversity conservation and Indigenous knowledge systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card className="shadow-strong">
              <CardContent className="p-6">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">THIS MONTH</span>
                    <h3 className="text-2xl font-bold text-foreground">
                      {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigateMonth('prev')}
                      className="p-2"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigateMonth('next')}
                      className="p-2"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Days of Week Header */}
                <div className="grid grid-cols-7 gap-0 mb-2">
                  {daysOfWeek.map(day => (
                    <div key={day} className="p-2 text-xs font-semibold text-muted-foreground text-center">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-0 border border-border rounded-lg overflow-hidden">
                  {renderCalendarDays()}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Meeting Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Meeting Details</h3>
            {sampleMeetings.map((meeting) => (
              <Card key={meeting.id} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-1">{meeting.mainMeeting}</h4>
                      <p className="text-sm text-muted-foreground">{meeting.subMeeting}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-secondary" />
                        <span className="text-sm text-foreground">{meeting.date}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-secondary" />
                        <span className="text-sm text-foreground">{meeting.location}</span>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <FileText className="h-4 w-4 text-secondary mt-0.5" />
                        <span className="text-sm text-foreground">{meeting.agenda}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;