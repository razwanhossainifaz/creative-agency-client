import React from 'react';
import { useForm } from 'react-hook-form';

const OrderSubmit = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('https://thawing-hollows-35596.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Order has been send successfully.');
                }
            })
    }
    return (
            <div>
                <form className="customFormStyle" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" className="form-control form-control-lg" placeholder="Your name / company’s name" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" className="form-control form-control-lg" placeholder="Your email address" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="serviceName" className="form-control form-control-lg" placeholder="Graphic Design" />
                        {errors.serviceName && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <textarea type="text" ref={register({ required: true })} name="details" className="form-control" cols="30" rows="6" placeholder="Project Details"></textarea>
                        {errors.details && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <div class="form-row">
                            <div class="col">
                                <input type="number" ref={register({ required: true })} name="price" className="form-control form-control-lg" placeholder="Price" />
                                {errors.price && <span className="text-danger">This field is required</span>}
                            </div>
                            <div class="col">
                                <button type="file" className="btn btn-success w-100 form-control-lg btnUploadFile"> Upload project file </button>
                                <span className="text-warning">*Optional</span>
                            </div>
                        </div>
                    </div>

                    <button style = {{backgroundColor: '#111430' , color: "white" , border: 'none' , fontWeight: 800,}} type="submit" className="btn btnSubmit pr-5 pl-5" >Submit</button>

                </form>
            </div>
    );
};

export default OrderSubmit;