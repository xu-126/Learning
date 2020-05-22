import React, { useEffect,useState } from 'react'
import moment from 'moment'

const Date = () => {
    const [date,setDate] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));
    
    useEffect(() => {
        const times = setInterval(() => setDate(moment().format('YYYY-MM-DD HH:mm:ss'),1000));
        return(
            ()=> {
                clearInterval(times);
            }
        )
    },[date])

    return (
        <div>
            <div>当前时间：</div>
            <p>{date}</p>
        </div>
    );
}
export default Date;
