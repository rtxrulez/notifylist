// import alarm from 'alarm'
// import store from '../redux/store'
// import ReactNotifications from 'react-browser-notifications'

// var now = new Date();
// var date = new Date(+now + 2000);


// export const timerStart = () => {
//   alarm(date, function() {
//     console.log('stor', store.getState())
//     console.log('Hello, world!');
//   });  

//   store.subscribe((state)=> {
//     console.log('st', store.getState())
//     store.getState().notify.map((val, ks)=>{
//       const time = val.time
//     })
//   })
// }


// export const addAlarm = () => {

// }

// export const setTimer = (state) => {
//   console.info('Установка таймеров из таблицы', state);
//   state.map((v, k) => {
//     if(v.started) {
//       let hour = v.time.split(':')[0];
//       let minute = v.time.split(':')[1];
//       let now = new Date();
//       now.setHours(hour);
//       now.setMinutes(minute);
//       now.setSeconds(0)
//       console.log('now', now)
//       alarm(now, () => {
//         console.info('Сообщение: ', v.desc)
//       })
//       console.log(alarm(now));
//     }
//   })
// }
