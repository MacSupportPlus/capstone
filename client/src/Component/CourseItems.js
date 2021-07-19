import React from "react";
import {useSelector} from 'react-redux';
import {formatCurrency} from '../components/utils';
import Fade from 'react-reveal/Fade';

const CourseItems = () => {

    const courseItems = useSelector(state => state.cart.courseItems);
    const numberOfItems = useSelector(state => state.course.numberOfItems);
    const totalCosts = useSelector(state => state.course.totalCosts);

  return <>
    <div>
        {courseItems.length === 0 
            ?
            <div>Cart is empty</div>

            : 
            <div>
                You have <em>{numberOfItems}</em> items in the cart
            </div>
        }
    </div>

        <Fade left cascade>
        <div className="row cart-items">
            {courseItems.map(item =>{
                return <div key={item.id} className="col-12 d-flex flex-column">

                    <div className="d-flex">
                            <div>
                                <img src={item.image} alt={item.title} />
                            </div>

                            <div>
                                {item.title}
                            </div>
                    </div>

                    <div className="">
                        {formatCurrency(item.price)} X {item.count}
                        <button className="btn btn-warning">Remove</button>
                    </div>
                </div>
            })}
        </div>
        </Fade>
  </>;
};

export default CourseItems;
