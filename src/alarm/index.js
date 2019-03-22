import alarm from "alarm";
import store from "../redux/store";

var now = new Date();
var date = new Date(+now + 2000);

export const timerStart = () => {
  alarm(date, function() {
    console.log("stor", store.getState());
    console.log("Hello, world!");
  });
};

export const addAlarm = time => {
  // время в виде строки например 10:30
  const hours = time.split(":")[0];
  const minutes = time.split(":")[1];
  let thisTime = new Date();
  thisTime.setHours(hours);
  thisTime.setMinutes(minutes);
  thisTime.setSeconds('00')
  console.info('add alarm time: ', time)
  alarm(thisTime, () => {
    console.info("time: ", thisTime, "Alarm!!!!!");
  });
};


export const alarmAddList = array => {
    array.map((val, key)=> {
        if(val.started) {
            console.log("val", val);
            addAlarm(val.time);
        }
    })
}
