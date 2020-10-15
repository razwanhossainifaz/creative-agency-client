import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

const ReviewDetail = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        // insert review into database
        fetch('https://thawing-hollows-35596.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Review post successfully.')
                    console.log(success);
                }
            })

    }

    return (
        <div>

            <form className="customFormStyle" onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="name" className="form-control form-control-lg" placeholder="Your name" />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="company" className="form-control form-control-lg" placeholder="Company’s name, Designation" />
                    {errors.company && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <textarea type="text" ref={register({ required: true })} name="details" className="form-control" cols="30" rows="6" placeholder="Project Details"></textarea>
                    {errors.details && <span className="text-danger">This field is required</span>}
                </div>

                <button style = {{backgroundColor: '#111430' , color: "white" , border: 'none' , fontWeight: 800,}} type="submit" className="btn btnSubmit pr-5 pl-5" >Submit</button>

            </form>
        </div>

    );
};

export default ReviewDetail;