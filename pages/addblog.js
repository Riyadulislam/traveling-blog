import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';


const addblog = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey='92c89661a53463a398ae074089cebb72';
    const onSubmit = data =>{ 

        const blog=data
        console.log(blog)
        const image=data.image[0]
      
        const formData = new FormData();
         formData.append('image',image);
         fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: 'POST',
            body: formData
          })
          .then(res=>res.json())
          .then(imagedata=>{
            console.log(imagedata.data.url)
            fetch('http://localhost:5000/addblog',{
                method: 'POST', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({...blog,image:imagedata.data.url}),
                
            })
            .then((response) => response.json())
            .then(data=>console.log(data))
        })
          
      
    }
   
    return (
        <div>
            <div className='w-80 mx-auto'>
<h3 className=" text-center text-lg font-bold"></h3>
<form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 mt-10'>
<input name="Description" type="text" placeholder="Description" className="input w-full input-bordered"
{...register("Description")} />
<input type="text" name="Location" placeholder="Location" className="input w-full input-bordered"
{...register("Location")} />
<input type="file"  placeholder="Location" className="input w-full input-bordered"
{...register("image")} />
<input type="submit" className=' btn btn-accent w-full' value="Submit" />
</form>
</div>
        </div>
    );
};

export default addblog;