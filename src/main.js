import Rx from 'rxjs/Rx';
import $ from 'jquery';

//one example
// const data = [
//                 {"title":"one","name":"Ruslan"},
//                 {"title":"two","name":"Ruslan"},
//                 {"title":"three","name":"Ruslan"},
//                 {"title":"four","name":"Ruslan"},
//             ];
// const data$ = Rx.Observable.from(data).take(1);
// data$.subscribe(datas=>{$('#users').append('<li>'+datas.title+'</li>')}, error=>console.log(error), done=>console.log('done'));


//two example
const data$ = Rx.Observable.interval(3000)
                .take(5)
                .subscribe(value=>console.log(value*6));