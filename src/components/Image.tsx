import { useEffect, useState } from "react"

const Image_Errors = "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg"
type Image_ErrorProps = {
    src: string,
    defaults?: string
    className?: string
    alt?: string | undefined
}
const Image_Default = ({ src, defaults = Image_Errors, className, alt, ...prop }: Image_ErrorProps) => {
    const [imageSrc, setImageSrc] = useState("")
    const onError = () => {
        setImageSrc(defaults)
    }
    useEffect(() => {
        setImageSrc(src)
    }, [src])
    return (
        <>
            <img src={imageSrc || src} className={className} {...prop} alt={alt} onError={onError} />
        </>
    )
}

export default Image_Default