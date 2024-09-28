import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import ImageLoader from '@/utils/ImageLoader';
import Slider from '@/components/Slider';
import { StaticPath } from "@/utils/baseUtils";

const ProjectSlider = (props: any) => {
	const slickRef = useRef<any>(null);
	const [currentSlide, setCurrentSlide] = useState<any>(0);

	useEffect(() => {
		const handleResize = () => {
			if (slickRef.current) {
				slickRef.current.slickGoTo(currentSlide);
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const settings: any = {
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 3000,
		cssEase: "linear",
		centerMode: true,
		// variableWidth: true,
		beforeChange: (oldIndex: any, newIndex: any) => setCurrentSlide(newIndex),
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	};

	return (
		<section className={`${props?.layoutStyle}`}>
			<div className={`w-[88%] max-w-[1300px] mx-auto`}>
				<p className={`text-[32px] font-[400] text-black text-center`}>
					{props?.title}
				</p>
				<Slider ref={slickRef} {...settings} className={`my-[35px]`}>
					{props?.images.length > 0 && props?.images?.map((item: any, i: number) => (
						<div
							key={i}
							// href={item?.link}
							className={``}
							// href={item?.badge_link}
							// target={`_blank`}
							>
							<ImageLoader
								className={`object-contain sm:max-w-[580px] lg:max-h-[415px] h-[415px]`}
								src={StaticPath(item?.src)}
								alt={item?.alt_values}
								width={580}
								height={415}
							/>
						</div>
					))}
				</Slider>
			</div>
		</section>
	)
}

export default ProjectSlider;

