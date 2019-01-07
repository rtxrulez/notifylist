import alarm from 'alarm'
import store from '../redux/store'

var now = new Date();
var date = new Date(+now + 2000);


export const timerStart = () => {
  alarm(date, function() {
    console.log('stor', store.getState())
    console.log('Hello, world!');
  });  

  store.subscribe((state)=> {
    console.log('st', store.getState())
    store.getState().notify.map((val, ks)=>{
      const time = val.time
    })
  })
}


export const addAlarm = () => {

}
