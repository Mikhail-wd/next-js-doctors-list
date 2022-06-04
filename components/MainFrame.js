import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/img/drivers_icons/appvelox_logo.svg';
import alertImg from '../public/img/drivers_icons/help_alert.svg';
import heart from '../public/img/drivers_icons/heart.svg';
import sound from '../public/img/drivers_icons/sound.svg';
import speak from '../public/img/drivers_icons/speak.svg';
import chek_list from '../public/img/drivers_icons/chek_list.svg';
import book from '../public/img/drivers_icons/book.svg';

import avatar from '../public/img/avatars/image7.png';
import arrowDown from '../public/img/profile_icons/avatars down arrow.svg';
import bell from '../public/img/profile_icons/bell 1.svg';
import eye from '../public/img/profile_icons/eye 1.svg';
import search from '../public/img/profile_icons/search (4) 1.svg';

function MainFrame({children}) {

    
    return (
        <>
            <div className="App">
                <div className='driverList'>
                <div>
                    <p>Логотип</p>
                </div> 
                <div>                
                    <ul>
                    <li className='selected'><Image src={heart} alt='heart' /><p>Профиль</p></li>
                    <li><Image src={sound} alt='sound' /><p>Врачи клиники</p></li>
                    <li><Image src={speak} alt='speak'/><p>Сообщения</p></li>
                    <li><Image src={chek_list} alt='chek_list'/><p>Тестирование</p></li>
                    <li><Image src={book} alt='book'/><p>Полезно знать</p></li>
                    <li><button>Подать заявку</button></li>
                    </ul>          
                </div>
                <div className='logo'>
                    <ul>
                    <li><Image src={alertImg} alt='help'/>Помощь</li>
                    <li><Image src={logo} alt='logo'/></li>
                    </ul>
                </div>
                </div>
                <div className='driverContent'>
                    <div className='myProfile'>
                        <div className='name'>
                            <p>Мой профиль</p>
                        </div>
                        <div className='profileOption'>
                            <ul>
                                <li><Image src={search} alt='search'/></li>
                                <li><Image src={bell} alt='bell'/></li>
                                <li><Image src={eye} alt='eye'/></li>
                                <li><div><Image src={avatar} className='avatar' alt='ava'/></div><Image src={arrowDown} alt='arrowDown'/></li>
                            </ul>
                        </div>
                    </div>
                    {children} 
                </div>
            </div>
        </>
    );
}

export default MainFrame;