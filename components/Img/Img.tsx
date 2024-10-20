// Module imports
import {forwardRef, LegacyRef} from "react";
import Image, {StaticImageData} from "next/image";

interface ImgProps {
    image: StaticImageData;
    width?: number | null;
    height?: number | null;
    alt?: string;
    className?: string;
    priority?: boolean;
}

function rawImg(props: ImgProps, ref: LegacyRef<HTMLImageElement> | undefined) {
    const {
        image,

        width = null,
        height = null,

        alt = "",
        className = "",
        priority = false,
    } = props;

    return (
        <img ref={ref} className={className} width={width !== null ? width : image.width}
             height={height !== null ? height : image.height} alt={alt} decoding={'async'}
             fetchPriority={priority ? 'high' : 'low'} loading={priority ? 'eager' : 'lazy'} src={image.src} />
    )
}

/**
 * Renders the Raw Img component.
 *
 * @component
 */
export const RawImg = forwardRef<HTMLImageElement | null, ImgProps>(rawImg)

/**
 * Renders the Img component.
 *
 * @component
 */
const Img = forwardRef<HTMLImageElement | null, ImgProps>(function Img(props, ref) {
    const {
        image,

        width = null,
        height = null,

        alt = "",
        className = "",
        priority = false,
    } = props;

    if (image.src.endsWith('.svg')) {
        return rawImg(props, ref);
    }

    return (
        <Image priority={priority} loading={priority ? 'eager' : 'lazy'} ref={ref}
               className={className} width={width !== null ? width : image.width}
               height={height !== null ? height : image.height} sizes="100vw" src={image.src} alt={alt}
               style={{width: '100%', height: 'auto'}}/>
    )
})

export default Img;
