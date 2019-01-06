import alarm from 'alarm'
import store from '../redux/store'

var now = new Date();
var date = new Date(+now + 2000);


export const test = () => {
  alarm(date, function() {
    console.log('stor', store.getState())
    console.log('Hello, world!');
  });  

  store.subscribe(()=> {
    console.log(store)
  })
}


export const addAlarm = () => {

}
