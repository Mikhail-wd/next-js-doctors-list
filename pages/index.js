import Image from 'next/image';

import add from '../public/img/content_icons/add (1) 1.svg';
import report from '../public/img/content_icons/report (2) 1.svg';
import lab from '../public/img/content_icons/lab 1.svg';
import clock from '../public/img/content_icons/clock 1.svg';

import MainFrame from '../components/MainFrame.js';
import Link from 'next/link';


function App() {
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

    return (
    <>
      <MainFrame>
            <div className='writes'>
                <p>Запись на прием</p>
                <div className='doctorsList'>  
                {array_of_doctors.slice(0,2).map(index=>
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
                <div className='lastInRow'>
                    Еще {array_of_doctors.length} записи
                    <br/>
                    <Link href='/doctors'>
                        <a>Подробнее</a>
                    </Link>
                </div>
    
                </div>
                <p className='lastPar'>Электронная карта</p>       
                <div className='writeCard'>
                    <div className='helpPlate'>
                        <div>
                            <Image src={report} alt='report'/>
                        </div>
                        <div>
                            <p>Информация о пациенте</p>
                            <ul>
                                <li>Ваши даннные</li>
                                <li>Рекомандыции врачей</li>
                                <li>История болезней</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className='helpPlate'>
                        <div>
                            <Image src={lab} alt='lab' />
                        </div>
                        <div>
                            <p>Результаты анализов</p>
                            <ul>
                                <li>Вы можете узнать здесь результаты своих анализов</li>
                            </ul>
                        </div>
                    </div>
    
                    <div className='helpPlate'>
                        <div>
                            <Image src={add} alt='add'/>
                        </div>
                        <div>
                            <p>Добавить  информацию</p>
                            <ul>
                                <li>Добавляйте в свою электронную медицинскую карту новые данные</li>
                            </ul>
                        </div>
                    </div>
    
                    <div className='helpPlate'>
                        <div>
                            <Image src={clock} alt='clock' />
                        </div>
                        <div>
                            <p>История приемов</p>
                            <ul>
                                <li>Вся информация о полученных услугах за все время хранится здесь</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>        
      </MainFrame>
    </>
    );
  }
  
  export default App;
  