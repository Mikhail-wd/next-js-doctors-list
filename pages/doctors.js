import Link from 'next/link';
import MainFrame from '../components/MainFrame.js';

import Image from 'next/image';
import back from '../public/img/content_icons/back.svg';

import forwCalendar from '../public/img/content_icons/calendar_for.svg';
import backCalendar from '../public/img/content_icons/calendar_bak.svg';

function doctors(){
    const array_of_doctors =[
        {id:1,avatar:'/img/avatars/1.jpg', name:'Малушко Т. Н.', title:'Хирургия',day:'Понедельник', serviceDay:15,serviceTime:'15:30', place:'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А'},
        {id:2,avatar:'/img/avatars/2.jpg', name:'Паразитов Г. Г.', title:'Терапия',day:'Четверг', serviceDay:25,serviceTime:'15:30', place:'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А'},
        {id:3,avatar:'/img/avatars/3.jpg', name:'Слесарев Т. И.', title:'Диагностика',day:'Понедельник', serviceDay:1,serviceTime:'15:30', place:'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А'},
        {id:4,avatar:'/img/avatars/4.jpg', name:'Молотков А. Н.', title:'Настройка',day:'Четверг', serviceDay:11,serviceTime:'15:30', place:'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А'},
        {id:5,avatar:'/img/avatars/5.jpg', name:'Быстрова З. М.', title:'Кардио',day:'Понедельник', serviceDay:8,serviceTime:'15:30', place:'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А'},
        {id:6,avatar:'/img/avatars/6.jpg', name:'Куропаткина Е. Е.', title:'Офтальмогия',day:'Понедельник', serviceDay:15,serviceTime:'17:30', place:'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А'},
        {id:7,avatar:'/img/avatars/7.jpg', name:'Длиннов Б. Д.', title:'Проктология',day:'Пятница', serviceDay:19,serviceTime:'15:30', place:'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А'},
        {id:8,avatar:'/img/avatars/8.jpg',name:'Головач Л. Е.', title:'Психотерапия',day:'Среда', serviceDay:24,serviceTime:'15:30', place:'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А'},
    ];
    const calendars_days=[];

    for(var i=1; i<=31; i++){
        calendars_days.push(<div key={i} className={i<=4 ? 'days lastMonth' : 'days'}><p>{i}</p><p className={array_of_doctors.filter(item =>{return item.serviceDay == i}).length == 0 ? "": "blueNumber" }>{array_of_doctors.filter(item =>{return item.serviceDay == i}).length == 0? "" : array_of_doctors.filter(item =>{return item.serviceDay == i}).length}</p></div>)
    };

    console.log(calendars_days);
    
    return(
        <>
            <MainFrame>
                <div className='doctors'>
                    <div className='doctorsWrites'><Image src={back} alt='back_arrow'/><Link href='/'><p><a>Мои записи</a></p></Link></div>
                    <br/>
                    <div className='doctorsSlider'>
                        {array_of_doctors.map(index=>
                            <div key={index.id} className='doctorPlate'>
                                <div>
                                    <p>{index.day} {index.serviceDay}.06.20 | {index.serviceTime} </p>
                                    <p>{index.place}</p>
                                    <div>
                                        <Image src={index.avatar} width={60} height={60} alt='avatar' />
                                        <div className='doctorsName'>
                                        <p>{index.name}</p>
                                        <br/>
                                        <p>{index.title}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button>Отменить</button>
                                </div>
                            </div>
                            )}                    
                    </div>
                    <div className='calendar'>
                        <div className='month'>
                            <p><Image src={backCalendar} alt='back'/><span>   Июнь, 2020  </span><Image src={forwCalendar} alt='forw'/></p>
                        </div>
                        <div className='daysNames'>
                            <p>Пн</p><p>Вт</p><p>Ср</p><p>Чт</p><p>Пт</p><p>Сб</p><p>Вс</p>
                        </div>
                        <div className='daysMonth'>
                            {calendars_days}
                        </div>
                    </div>
                </div>
            </MainFrame>
        </>
    );
}

export default doctors;