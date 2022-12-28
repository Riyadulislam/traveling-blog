import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form";

const singup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   
    const onSubmit = data => {
        console.log(data)
    }
    
    return (
        <div className=' h-[600px] flex justify-center items-center'>
            <div className='w-96'>
                <h1 className='text-center text-2xl font-bold'>Singup</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Name</span>    </label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered w-full"
                            {...register("name")}

                        />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Email</span>    </label>
                        <input name="email" type="email" placeholder="Email" className="input input-bordered w-full"
                            {...register("email", { required: " please valid email" })}
                        />
                    </div>
                    {errors.email?.type === 'required' && <p className='text-red-600'>Email is required</p>}

                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered w-full"
                            {...register("password", {
                                required: " please give a password",
                                minLength: { value: 2, message: "you should Atleast  character" },
                                pattern: { value: /^(?=.*[A-Z])(?=.*[0-9].*[0-9])(?=.*[a-z])./, message: "must be strong password" }
                            })}
                        />

                    </div>
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                    <input className=' mt-3 btn btn-accent w-full' value="Singup" type="submit" />

                </form>
             
                <p className='text-center'>Already Have an account<Link href="/login" className='text-secondary'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className=' w-full btn btn-outline btn-accent'>CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default singup;