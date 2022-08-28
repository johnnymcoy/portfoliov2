// Imports
import SmallWindow from 'components/ui/SmallWindow';
import Textbox from 'components/ui/Textbox';
import React,{ useRef, useState, useEffect } from 'react';
import ProgressBar from '../UI/ProgressBar';
// CSS Styles
import CSS from './CountDownTimer.module.scss';

function CountDownTimer(){
    const dateInput = useRef();
    
    const currentDate = new Date().getTime();
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    
    // useEffect(() => {
    //   const timer = setInterval(() => {   
    //       if(dateInput.current.valueAsDate)
    //       {
    //         dateChanged();
    //       }   
    //     }, 1000);              
    //      // clearing interval
    //   return () => clearInterval(timer);
    // });
  
    function dateChanged()
    {
        let dateInputValue = dateInput.current.valueAsDate.getTime();
        let distance = dateInputValue - currentDate;
        // Time calculations for days, hours, minutes and seconds
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours((Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))-10);//get time gets 10am(so -10)
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }
   return(
<SmallWindow title="Countdown Timer" className={CSS.countDownTimer}>
    <h1>Bucci Countdown Timer V1</h1>
    <div>
        <Textbox className={CSS.dateInput} type="date" ref={dateInput} onChange={dateChanged} />
    </div>
    <div className={CSS.timers}>
        <ProgressBar 
            progress={days}
            progressMax={365}
            size={100}
            strokeWidth={10}
            percent={false}
            circleOneStroke="#ffb24a"
            text="days"
            />
        <ProgressBar 
            progress={hours}
            progressMax={24}
            size={100}
            strokeWidth={10}
            percent={false}
            circleOneStroke="#ffb24a"
            text="hours"
            />
        <ProgressBar 
            progress={minutes}
            progressMax={60}
            size={100}
            strokeWidth={10}
            percent={false}
            circleOneStroke="#ffb24a"
            text="minutes"
            />
        <ProgressBar 
            progress={seconds}
            progressMax={60}
            size={100}
            strokeWidth={10}
            percent={false}
            circleOneStroke="#ffb24a"
            text="seconds"
            />
    </div>
</SmallWindow>
);}

export default CountDownTimer;