import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/secondFooter'
// images
import old_money from '../../Pictures/old_money.png'
import new_money from '../../Pictures/new_money.png'

const Heritage = () => {
    return(
        <>
        <Header />
        <body className="w-full h-auto py-[3rem] px-0 justify-center flex flex-col">
            <div className="flex justify-center py-[3rem]">
                <div className="w-[62rem] h-auto flex justify-between flex-row items-center leading-[1.5rem]">
                    <div className="flex flex-col h-auto w-auto justify-center">
                        <span className="text-black font-bold text-2xl py-[5px]">Стара купюра з Михайлом Грушевським</span>
                        <span className="h-auto w-[30rem] text-base">Стара купюра з Михайлом Грушевським була введена в обіг 
                            у 1992 році в Україні в номіналі 50 купонів (не карбованців). Вона була частиною грошової реформи 
                            після проголошення незалежності України, коли купони стали основною валютою країни. Михайло Грушевський, 
                            видатний історик і політичний діяч, став символом української національної ідентичності та боротьби за незалежність.
                        </span>
                    </div>
                    <img src={old_money} alt="Old Banknote" className="select-none rounded-[1rem]"/>
                </div>
            </div>
            <div className="flex justify-center py-[3rem]">
                <div className="w-[62rem] h-auto flex justify-between flex-row items-center leading-[1.5rem]">
                    <img src={new_money} alt="Old Banknote" className="select-none rounded-[1rem]"/>
                    <div className="flex flex-col h-auto w-auto justify-center">
                        <span className="text-black font-bold text-2xl py-[5px]">Нова купюра з Михайлом Грушевським</span>
                        <span className="h-auto w-[30rem] text-base">Нова купюра номіналом 50 гривень була введена в обіг 2018 
                            року в рамках оновлення серії банкнот Національним банком України. На цій купюрі зображений Михайло 
                            Грушевський, який символізує роль науковців та державних діячів у становленні української незалежної 
                            держави. Купюра має особливе значення як для історії, так і для сучасної економіки України.
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto flex justify-center py-[2rem] text-center'>
                <span className='w-[40rem] text-xl'>Михайло Грушевський — одна з найвизначніших постатей в історії України, чия 
                    діяльність охоплює науку, політику та культуру. Як історик, він заклав основи 
                    національної історіографії, а його праці стали важливим джерелом для розуміння 
                    історії України. Як політичний діяч, Грушевський активно підтримував ідею незалежності 
                    України, сприяв формуванню національної свідомості та державності.
                </span>
            </div>
            
        </body>
        <Footer />
        </>
    )
}

export default Heritage;