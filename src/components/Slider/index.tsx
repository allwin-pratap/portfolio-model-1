import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReactSlickSlider = (props: any) => {
    return (
        <Slider {...props} ref={props?.forwardRef}>
            {props.children}
        </Slider>
    );
};

export default ReactSlickSlider;