import MD1 from '../../assets/MD1.jpg'
import MD2 from '../../assets/MD2.jpg'

const MainDetails1 = () => {
    return (
        <div>
            <div className='mt-8 max-w-4xl mx-0'>
                <p className='text-5xl ml-4 mt-1 font-bold italic text-center'> <span className='text-amber-700'>Who</span> <span className='text-amber-500'>we are !!</span> </p>
                <h1 className='text-3xl mt-4 text-center italic text-amber-900'>Where bookworms and coffee lovers meet</h1>
            </div>

            <div className='flex'>
                <div className='mt-4'>
                    <img className='' src={MD1} alt="" />
                </div> 
                <div className='mt-15'>
                      <img src={MD2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MainDetails1;