import React from 'react'

const Sizes=() => {

    const INPUT_STYLE=[
        'rounded-md',
        'py-2',
        'px-5',
        'outline-none',
        'bg-slate-200'
    ].join(" ");
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 my-10 lg:mx-16 mx-10 lg:gap-10 gap-5'>
                <div>
                    <form className='flex flex-col space-y-3 text-right'>
                        <label>اندازه آستین</label>
                        <input type={"text"} className={`${INPUT_STYLE}`} />
                        <label>اندازه بغل</label>
                        <input type={"text"} className={`${INPUT_STYLE}`} />
                        <label>قد پیراهن </label>
                        <input type={"text"} className={`${INPUT_STYLE}`} />
                    </form>
                </div>
                <div>
                    <form className='flex flex-col space-y-3 text-right'>
                        <label>اندازه شانه</label>
                        <input type={"text"} className={`${INPUT_STYLE}`} />
                        <label>اندازه کمر</label>
                        <input type={"text"} className={`${INPUT_STYLE}`} />
                        <label>قدشلوار  </label>
                        <input type={"text"} className={`${INPUT_STYLE}`} />
                        <label>جزییات بیشتر  </label>
                        <input type={"text"} className={`${INPUT_STYLE}`} />
                    </form>
                </div>

            </div>
            <div className='flex justify-center my-10 gap-10 mx-5 md:mx-0'>
                <button className='px-5 md:px-10 py-1 text-white font-bold bg-blue-500 rounded-md hover:bg-blue-600'>ذخیره</button>

                <button className='px-10 py-1 text-blue-500 border border-blue-600 hover:bg-blue-500 hover:text-white rounded-md font-bold'> ویرایش اطلاعات </button>
            </div>
        </>
    )
}

export default Sizes