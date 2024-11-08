import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
// images imports
import first_pic from '../../Pictures/logo.png'
import second_pic from '../../Pictures/mh_table.jpg'
import third_pic from '../../Pictures/mh_book.jpg'

const Home = () => {
    return(
        <>
        <Header />
        <body className="w-full h-auto py-[3rem] px-0 justify-center flex flex-col">
            <div className="flex justify-center py-[3rem]">
            <div className="stories">
                <span className="h-auto w-[30rem] text-center">Михайло Грушевський — видатний український історик, громадський діяч і перший голова Центральної Ради УНР,
                    який відіграв ключову роль у становленні української державності початку ХХ століття. Народився 1866 року в місті Холм (сучасна Польща),
                    але зростав у сім'ї, де з дитинства вивчав українську історію та культуру. Він здобув освіту в Київському університеті, а згодом став професором
                    у Львові, де почав писати свою масштабну «Історію України-Руси» — роботу, що охопила всі етапи історії українських земель.</span>
                <img src={first_pic} alt="Mykhailo Hryshevsky" className="select-none rounded-1"/>
            </div>
            </div>
            <div className="flex justify-center py-[3rem]">
                <div className="w-full h-auto flex justify-center bg-[#2c2c2c] py-[3rem]">
                    <div className="stories">
                        <img src={second_pic} alt="Mykhailo Hryshevsky" className="select-none rounded-[1rem]" />
                        <span className="h-auto w-[30rem] text-center text-white">Він був не тільки істориком і політиком, але й плідним письменником.
                            Його найвідоміша праця — «Історія України-Руси» — монументальна багатотомна робота, яка охоплює всю історію українських земель
                            від найдавніших часів до XVII століття. Ця праця стала фундаментом для української історіографії, оскільки Грушевський був одним з перших,
                            хто розглядав історію України як окрему від історії Росії та Польщі. Це не лише історична праця, але й важливий елемент формування української ідентичності,
                            особливо цінний і актуальний сьогодні.</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-[3rem]">
            <div className="stories">
                <span className="h-auto w-[30rem] text-center text-black">Михайло Грушевський залишив помітний слід у багатьох сферах суспільного та культурного життя України.
                    Як історик, він здійснив глибокий аналіз української минувшини, заклавши наукову базу для подальших поколінь дослідників.
                    Його погляди на історію України як на самостійну, відмінну від сусідніх держав історичну реальність, відобразилися в десятках наукових і
                    публіцистичних праць, які він писав до кінця свого життя.</span>
                    <img src={third_pic} alt="Mykhailo Hryshevsky" className="select-none rounded-1"/>
            </div>
            </div>
            <div className="flex justify-center py-[3rem]">
                <div className="w-full h-auto flex justify-center bg-[#2c2c2c] py-[3rem]">
                    <div className="stories">
                        <img src={second_pic} alt="Mykhailo Hryshevsky" className="select-none rounded-[1rem]" />
                        <span className="h-auto w-[30rem] text-center text-white">Він був не тільки істориком і політиком, але й плідним письменником.
                            Його найвідоміша праця — «Історія України-Руси» — монументальна багатотомна робота, яка охоплює всю історію українських земель
                            від найдавніших часів до XVII століття. Ця праця стала фундаментом для української історіографії, оскільки Грушевський був одним з перших,
                            хто розглядав історію України як окрему від історії Росії та Польщі. Це не лише історична праця, але й важливий елемент формування української ідентичності,
                            особливо цінний і актуальний сьогодні.</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-[3rem]">
            <div className="stories">
                <span className="h-auto w-[30rem] text-center text-black">Михайло Грушевський залишив помітний слід у багатьох сферах суспільного та культурного життя України.
                    Як історик, він здійснив глибокий аналіз української минувшини, заклавши наукову базу для подальших поколінь дослідників.
                    Його погляди на історію України як на самостійну, відмінну від сусідніх держав історичну реальність, відобразилися в десятках наукових і
                    публіцистичних праць, які він писав до кінця свого життя.</span>
                    <img src={third_pic} alt="Mykhailo Hryshevsky" className="select-none rounded-1"/>
            </div>
            </div>
        </body>
        <Footer />
        </>
        
    )
}

export default Home;