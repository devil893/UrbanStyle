import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@mui/material';

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>

                <div className='flex items-center'>
                    <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg-h-[9rem] '>
                        <img className='h-full w-full object-cover object-top' src='data:image/jpeg;base64,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'
                        alt=""></img>

                    <div className = 'ml-5 space-y-1'>
                        <p className='font-semibold'>Girl with jeans</p>
                        <p className='opacity-70'>Size:L,white</p>
                        <p className='opacity-70 mt-2'>Seller : Ideas by Gul Ahmed</p>

                        <div className='flex space-x-5 items-center text-gray-900 mt-6'>
                            <p className='font-semibold'>$199</p>
                            <p className='opacity-50 line-through'>$211</p>
                            <p className='text-green-600 font-semibold'>5% Off</p>

                            </div>  
                        


                    </div>
                    </div>

                    <div className='lg:flex items-center lg:space-x-10 pt-4'>

                        <div className='flex items-center space-x-2'>
                            <IconButton>
                                <RemoveCircleOutlineIcon />
                            </IconButton>
                            <span className='py-1 rounded-sm px-7 border'>
                            <IconButton sx={{color:"RGB(145 85 253)"}}>
                                <AddCircleOutlineIcon/>
                            </IconButton>
                            </span>

                        </div>

                        <div>
                            <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
                        </div>

                    </div>

            
        </div>
        </div>
    );
}
export default CartItem