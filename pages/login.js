import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const login = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const [loginerror,setLoginerror]=useState(' ')
    const onSubmit = data => console.log(data);
    const submit=()=>{
       
    }
 

    return (
        <div className=' h-[600px] flex justify-center items-center'>
        <div className='w-96'>
        <h1 className='text-center text-2xl font-bold'>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>   
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text">Email</span>    </label>
                    <input name="email" type="text" placeholder="Type here"  className="input input-bordered w-full "
                     {...register("email",{required:true})} />
                </div>
                {errors.email?.type === 'required' && <p className='text-red-600'>Email is required</p>}
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text">Password</span></label>
                    <input name="password" type="password" placeholder="password"  className="input input-bordered w-full "
                     {...register("password",{required:"password is required",
                      minLength:{value: 6, message: "you should atleast 6 character "}})} />
                    <label className="label"><span className="label-text">Forget password</span></label>
                </div>
                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                <input className=' mt-3 btn btn-accent w-full'  value="Login" type="submit" />
                
            </form>
            <div>{loginerror && <p className='text-red-500'>{loginerror}</p>}</div>
            <p className='text-center'>New to Traveling Blog? <Link href="/singup" className='text-secondary'>Create a New Account</Link></p>
            <div className="divider">OR</div>
            <button onClick={submit} className=' w-full btn btn-outline btn-accent'>CONTINUE WITH GOOGLE</button>
            </div>
 
    </div>
    );
};

export default login;