import React, {Component} from 'react'; 
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

let kContentColor = '#fbb040';
let kPerformanceColor = '#11B8E0';
let kExhibitionColor = '#A25099';
let kFoodColor = '#ED1A3B';
class EventCalendar extends Component {
    
    
    state = 
    {
        defaultView: 'month',
        defaultDate: '2019-10-01',
        firstDay: 2,
        contentHeight: 'auto',
        calendarWeekends: true,
        header: {
            left:   '',
            center: '',
            right:  ''
        },
        calendarEvents: [
            {
                title: 'K-Content Expo 2019 Indonesia',
                start: '2019-10-03',
                end: '2019-10-07',
                color: kContentColor,
            },
            {
                title: 'Press Conference',
                start: '2019-09-25',
                end: '2019-09-25',
                color: kContentColor 
            },
            {
                title: 'Korean Home Cook Style Food Festival',
                start: '2019-10-03',
                end: '2019-10-14',
                color: kFoodColor,
            },
            {
                title: 'Hangul Day',
                start: '2019-10-09',
                end: '2019-10-09',
                color: kContentColor 
            },
            {
                title: 'Korea-Indonesia Film Festival 2019',
                start: '2019-10-10',
                end: '2019-10-14',
                color: kContentColor 
            },
            {
                title: 'FLYING',
                start: '2019-10-16',
                end: '2019-10-18',
                color: kPerformanceColor 
            },
            {
                title: 'The 6th Korean Cultural Art Association Festival',
                start: '2019-10-19',
                end: '2019-10-26',
                color: kContentColor 
            },
            
            {
                title: 'K-POP Concert',
                start: '2019-10-19',
                end: '2019-10-21',
                color: kPerformanceColor 
            },

            {
                title: 'Follow Gyeonggi K-Culture FESTA 2019',
                start: '2019-10-19',
                end: '2019-10-21',
                color: kPerformanceColor 
            },
            {
                title: '2019 The Best K-POP Cover in Indonesia',
                start: '2019-10-19',
                end: '2019-10-21',
                color: kPerformanceColor 
            },
            {
                title: 'DICAPOEM Exhibition',
                start: '2019-10-19',
                end: '2019-10-26',
                color: kExhibitionColor 
            },
            {
                title: 'Korea Culture Brand Festival',
                start: '2019-10-26',
                end: '2019-10-26',
                color: kExhibitionColor 
            },
            {
                title: 'Hanwha Life Activation Program 2019',
                start: '2019-10-26',
                end: '2019-10-26',
                color: kPerformanceColor 
            },
            {
                title: '2019 Asia Taekwondo Hanmadang Championship',
                start: '2019-10-26',
                end: '2019-10-28',
                color: kPerformanceColor 
            },
            {
                title: 'Asia Traditional Orchestra',
                start: '2019-11-06',
                end: '2019-11-06',
                color: kPerformanceColor 
            },
            
            {
                title: 'Study In Korea Fair',
                start: '2019-11-09',
                end: '2019-11-11',
                color: kExhibitionColor 
            },
            {
                title: 'Jakarta International Premium Products Fair 2019',
                start: '2019-11-07',
                end: '2019-11-10',
                color: kExhibitionColor 
            },
            {
                title: 'Opening Ceremony of Korea Corner',
                start: '2019-10-31',
                end: '2019-10-31',
                color: kExhibitionColor 
            }
        ]
    };

    render()
    {
        return(
            <section className="section section-calendar">
                <div className="col-12" align="left"> 
                    <h2 className="head-gibson main-head"><span className="h2-icon calendar-icon"></span> EVENT CALENDAR OCTOBER & NOVEMBER 2019</h2>
                </div>

                <div class="row">
                    <div className="col-sm-10 calendar" align="left">
                        {/* <div className="fullcalendar"></div> */}
                        <FullCalendar 
                            defaultView="dayGridMonth" 
                            plugins={[ dayGridPlugin ]}
                            contentHeight={this.state.contentHeight}
                            defaultDate={this.state.defaultDate}
                            firstDay={this.state.firstDay}
                            header={this.state.header}
                            events={this.state.calendarEvents}
                        />
                    </div>
                    <div className="col-sm-2 calendar-legend" align="right">

                        <label>
                            <span className="circle" style={{background: "#FFD477"}}></span> K-CONTENT
                        </label>
                        <label>
                            <span className="circle" style={{background: "#11B8E0"}}></span> K-PERFORMANCE
                        </label>
                        <label>
                            <span className="circle" style={{background: "#A25099"}}></span> K-EXHIBITION
                        </label>
                        <label>
                            <span className="circle" style={{background: "#ED1A3B"}}></span> K-FOOD
                        </label>
                    </div>
                </div>
                
            </section>
        )
    }
}

export default EventCalendar;
