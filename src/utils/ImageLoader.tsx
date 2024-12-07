import Image from "next/image";
import React, { useState } from "react";

const ImageLoader = ({
	src,
	sizes,
	unoptimized,
	priority,
	loading,
	className,
	quality,
	width,
	height,
	fill,
	style,
	placeholder,
	alt,
	blurDataURL,
	...all
}: any) => {

	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<React.Fragment>
			{!isLoaded && <div className="rounded-[20px] overflow-hidden img_loader_bg" />}
			<Image
				src={src}
				sizes={sizes}
				unoptimized={unoptimized}
				priority={priority}
				loading={loading}
				className={className}
				quality={quality ?? 100}
				fill={fill}
				width={width}
				height={height}
				style={style}
				alt={alt}
				placeholder={placeholder}
				blurDataURL={blurDataURL}
				onLoadingComplete={() => setIsLoaded(true)}
				{...all}
			/>
		</React.Fragment>
	);
};

export default ImageLoader;
