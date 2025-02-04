import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

function Question() {
  return (
    <Card className='w-full max-h-[23vh] lg:max-h-[30vh] py-1 lg:py-3'>
        <CardHeader className='text-center p-1 lg:p-3'>
            <CardTitle>what is Next</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-wrap py-2 px-6 gap-2 lg:gap-4 justify-between items-center overflow-hidden'>
            <p className='max-w-[40%] max-h-[20px] overflow-hidden'>option fdsjfnsdja</p>
            <p className='max-w-[40%]  max-h-[20px] overflow-hidden'>option djdbfdjsibfa</p>
            <p className='max-w-[40%] max-h-[20px] overflow-hidden'>option asduuuuuuuuuuuuui</p>
            <p className='max-w-[40%]  max-h-[20px] overflow-hidden'>option jsdooooooooooooa</p>
            <div className='min-w-full flex items-center justify-center gap-4'>
                <Button variant="default" >Edit</Button>
                <Button variant="destructive">Delete</Button>
            </div>
        </CardContent>
    </Card>
  )
}

export default Question