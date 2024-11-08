import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
// images imports
import first_pic from '../../Pictures/logo.png'
import second_pic from '../../Pictures/mh_table.jpg'
import third_pic from '../../Pictures/mh_book.jpg'
import prison from '../../Pictures/prison.png'
import young from '../../Pictures/young.png'
import creating from '../../Pictures/creating.jpg'
import oldmh from '../../Pictures/old.png'

const Home = () => {
    return(
        <>
        <Header />
        <body className="w-full h-auto py-[3rem] px-0 justify-center flex flex-col">
            <div className="flex justify-center py-[3rem]">
                <div className="stories">
                    <div className="flex flex-col h-auto w-auto justify-center">
                        <span className="text-black font-bold text-2xl py-[5px]">Дитинство Грушевського</span>
                        <span className="h-auto w-[30rem] text-base">Михайло Сергійович Грушевський народився 29 вересня 1866
                            року в місті Холм, яке тоді входило до складу російської імперії (тепер Польща).
                            Його батько, Василь Грушевський, був українським діячем, який активно підтримував розвиток культури та 
                            освіти, що значно вплинуло на виховання Михайла.
                        </span>
                    </div>
                    <img src={first_pic} alt="Mykhailo Hryshevsky" className="select-none rounded-[1rem]"/>
                </div>
            </div>
            <div className="flex justify-center py-[3rem]">
                <div className="w-full h-auto flex justify-center bg-[#2c2c2c] py-[3rem]">
                    <div className="stories">
                        <img src={young} alt="Mykhailo Hryshevsky" className="select-none rounded-[1rem]" />
                        <div className="flex flex-col h-auto w-auto justify-center">
                            <span className="text-white font-bold text-2xl py-[5px]">Молодість Михайла Грушевського</span>
                            <span className="h-auto w-[30rem] text-base text-white">Грушевський навчався у Київському університеті, 
                                де здобув ступінь історика. Під час навчання він активно брав участь в організації культурно-освітніх заходів. 
                                Уже в юнацькі роки він виявив глибокий інтерес до історії України та проблем національного відродження. 
                                Молодий Михайло долучався до культурно-просвітницьких гуртків, в яких обговорювалися ідеї української автономії.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-[3rem]">
                <div className="stories">
                    <div className="flex flex-col h-auto w-auto justify-center">
                        <span className="text-black font-bold text-2xl py-[5px]">Політична історія Михайла Грушевського</span>
                        <span className="h-auto w-[30rem] text-base">У 1904 році Грушевський заснував "Літературно-науковий вісник", 
                            через який активно пропагував ідеї національної незалежності України. У 1917 році, 
                            після Лютневої революції в Росії, він став головою Центральної Ради, органу, що в 
                            умовах революції оголосив Українську Народну Республіку (УНР) незалежною. Це було 
                            важливим етапом у боротьбі за українську автономію та суверенітет.
                        </span>
                    </div>
                    <img src={creating} alt="Mykhailo Hryshevsky" className="select-none rounded-[1rem]"/>
            </div>
            </div>
            <div className="flex justify-center py-[3rem]">
                <div className="w-full h-auto flex justify-center bg-[#2c2c2c] py-[3rem]">
                    <div className="stories">
                        <img src={second_pic} alt="Mykhailo Hryshevsky" className="select-none rounded-[1rem]" />
                        <div className="flex flex-col h-auto w-auto justify-center">
                            <span className="text-black font-bold text-2xl text-white py-[5px]">Творчість Михайла Грушевського</span>
                            <span className="h-auto w-[30rem] text-base text-white">Михайло Грушевський відомий передусім як історик, 
                                автор багатьох фундаментальних праць. Його найбільше визнання здобула "Історія України-Руси", 
                                що є всебічним дослідженням історії України від найдавніших часів до 17 століття. Крім того, 
                                Грушевський займався публіцистикою, історіографією, а також активно працював над українським 
                                літературним відродженням, здійснюючи значний вклад у формування національної історичної свідомості.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-[3rem]">
                <div className="stories">
                    <div className="flex flex-col h-auto w-auto justify-center">
                        <span className="text-black font-bold text-2xl py-[5px]">Активність у зрілому віці</span>
                        <span className="h-auto w-[30rem] text-base">У зрілому віці Грушевський продовжував
                            працювати як історик і публіцист, активно підтримуючи ідеї незалежності України. 
                            Окрім наукової діяльності, він брав участь у політичному житті, будучи членом урядів 
                            Української Народної Республіки та здійснюючи активну дипломатичну діяльність. Він 
                            також став однією з ключових постатей у боротьбі за національні права українців у період, 
                            коли Україна переживала важливі політичні зміни.
                        </span>
                    </div>
                    <img src={third_pic} alt="Mykhailo Hryshevsky" className="select-none rounded-[1rem]"/>
                </div>
            </div>
            <div className="flex justify-center py-[3rem]">
                <div className="w-full h-auto flex justify-center bg-[#2c2c2c] py-[3rem]">
                    <div className="stories">
                        <img src={prison} alt="Mykhailo Hryshevsky" className="select-none rounded-[1rem]" />
                        <div className="flex flex-col h-auto w-auto justify-center">
                            <span className="text-black font-bold text-2xl text-white py-[5px]">Як М. Грушевський потрапив до тюрми</span>
                            <span className="h-auto w-[30rem] text-base text-white">Під час Першої світової війни, 1914 року, Михайло 
                                Грушевський був заарештований австрійськими властями через його підтримку української автономії та ідеї 
                                національного відродження. Це сталося на тлі політичної активності Грушевського, який публічно виступав за 
                                права українців та виступав проти імперських амбіцій Австро-Угорщини. Він перебував під арештом до 1916 року, 
                                коли був звільнений під тиском міжнародної громадськості та політичної ситуації.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-[3rem]">
                <div className="stories">
                    <div className="flex flex-col h-auto w-auto justify-center">
                        <span className="text-black font-bold text-2xl py-[5px]">Старість М. Грушевського, останні роки життя</span>
                        <span className="h-auto w-[30rem] text-base">Після звільнення з ув'язнення Грушевський повернувся до 
                            політичної діяльності в Україні, але після більшовицького захоплення влади в 1917 році емігрував 
                            до Чехії, а згодом оселився у Празі. В останні роки життя він працював над історією України, 
                            активно співпрацюючи з науковими колами. Помер 25 листопада 1934 року. Грушевський залишив 
                            глибокий слід у розвитку української історії, культури та політики, і до сьогодні його ім'я 
                            є символом національного відродження та боротьби за незалежність.
                        </span>
                    </div>
                    <img src={oldmh} alt="Mykhailo Hryshevsky" className="select-none rounded-[1rem]" />
                </div>
            </div>
        </body>
        <Footer />
        </>
        
    )
}

export default Home;