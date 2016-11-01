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
// const data$ = Rx.Observable.interval(3000)
//                 .take(5)
//                 .subscribe(value=>console.log(value*6));


//three example
// const data = [
//                 {"title":"one","name":"Ruslan"},
//                 {"title":"two","name":"Ruslan"},
//                 {"title":"three","name":"Ruslan"},
//                 {"title":"four","name":"Ruslan"},
//             ];

// //filter object and output title
// const data$ = Rx.Observable.from(data)
//                 .pluck('title');
// data$.subscribe(x=>console.log(x));



//four example (Merge and concat)

// const data$ = Rx.Observable.interval(2000)
//                 .merge(Rx.Observable.interval(500))
//                 .take(25)
//                 .subscribe(x=>console.log(x));



// const source1 = Rx.Observable.range(1,6).map(v=>'Source_1 '+v);
// const source2 = Rx.Observable.range(1,10).map(v=>'Source_1 '+v);

// const merge = Rx.Observable.merge(source1, source2)
//                             .take(7)
//                             .subscribe(v=>console.log(v));

Rx.Observable.of('hello')
            .subscribe(x=>Rx.Observable.of(x+" Everyone").subscribe(g=>console.log(g)));