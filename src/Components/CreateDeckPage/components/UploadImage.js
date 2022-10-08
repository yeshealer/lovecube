import React, { useState, useCallback } from 'react'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import ImageUploading from 'react-images-uploading';
import Cropper from 'react-easy-crop'
import { getCroppedImg } from '../../../Hooks/hooks';

export default function UploadImage(props) {
    const navigate = useNavigate()

    const {
        toFirstName,
        pathname,
        occasion,
        inscription,
        selectedDescribe,
        setIsFinalImage,
        moreOption
    } = props

    const [images, setImages] = useState([]);
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)
    const [isCropped, setIsCropped] = useState(false)

    const maxNumber = 69;

    const onChange = (imageList) => {
        setImages(imageList);
    };

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const showCroppedImage = useCallback(async (imageURL) => {
        try {
            const croppedImage = await getCroppedImg(
                imageURL,
                croppedAreaPixels,
            )
            console.log('donee', { croppedImage })
            setCroppedImage(croppedImage)
            setIsCropped(true)
        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels])

    const handleNextUploadImage = () => {
        setIsFinalImage(true)
        navigate(`/create-deck/${pathname}/own-msg`)
    }

    return (
        <div className='flex flex-col items-center w-9/10 md:w-2/3'>
            <div className='w-full md:w-3/4'>
                <div className='flex items-center gap-1 mt-7'>
                    <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                    <div className='text-base text-[#6c757d]'>This is for: </div>
                    <div className='text-base'>{toFirstName}</div>
                    <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/to-who`)}>
                        <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                        <div className='text-[#3e9ca3] text-base'>edit</div>
                    </div>
                </div>

                <div className='flex items-center gap-1 mt-1'>
                    <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                    <div className='text-base text-[#6c757d]'>Occasion: </div>
                    <div className='text-base'>{occasion}</div>
                    <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/occasion`)}>
                        <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                        <div className='text-[#3e9ca3] text-base'>edit</div>
                    </div>
                </div>

                <div className='flex items-center gap-1 mt-1'>
                    <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                    <div className='text-base text-[#6c757d]'>Inscription: </div>
                    <div className={`text-base ${inscription.length > 18 && 'hidden sm:block'}`}>{inscription}</div>
                    <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/inscription`)}>
                        <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                        <div className='text-[#3e9ca3] text-base'>edit</div>
                    </div>
                </div>
                <div className={`text-base ${inscription.length > 18 && 'block sm:hidden'} text-end w-full`}>{inscription}</div>

                <div className='flex items-center gap-1 mt-1'>
                    <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                    <div className='text-base text-[#6c757d]'>Traits: </div>
                    <div className='text-base'>{selectedDescribe.length} amazing traits</div>
                    <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/describe`)}>
                        <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                        <div className='text-[#3e9ca3] text-base'>edit</div>
                    </div>
                </div>

                <div className='flex items-center gap-1 mt-1'>
                    <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                    <div className='text-base text-[#6c757d]'>More Message: </div>
                    <div className={`text-base ${moreOption.length > 18 && 'hidden sm:block'}`}>{moreOption}</div>
                    <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/more-option`)}>
                        <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                        <div className='text-[#3e9ca3] text-base'>edit</div>
                    </div>
                </div>
                <div className={`text-base ${moreOption.length > 18 && 'block sm:hidden'} text-end w-full`}>{moreOption}</div>

                <div className='flex items-center gap-1 mt-1'>
                    <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                    <div className='text-base text-[#6c757d]'>Title card created</div>
                </div>

                <div className='text-2xl md:text-3xl my-8'>Add a picture for the final card</div>
                <div className='text-[#9a1f60] font-bold text-center'>Hint: One of you and Adan would be perfect</div>
                <div className='text=[#6c757d] text-center my-2'>(You'll be able to add more pictures and images later.)</div>
            </div>
            <ImageUploading
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    isDragging,
                    dragProps,
                }) => (
                    <div className="flex flex-col items-center justify-center my-3 w-full">
                        {!isCropped && <button
                            className={`${isDragging ? 'text-[#ff0000]' : 'text-white'} flex items-center bg-[#3e9ca3] gap-2 p-3 py-2 rounded-md`}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            <Icon icon="fa:cloud-upload" width="24" height="24" />
                            Upload
                        </button>}
                        {imageList.map((image, index) => (
                            <>
                                <div key={index} className="w-[700px] h-[700px] bg-gray-100 relative flex items-center justify-center mt-5 rounded-2xl">
                                    {!isCropped ? <Cropper
                                        image={image['data_url']}
                                        crop={crop}
                                        zoom={zoom}
                                        aspect={3 / 3}
                                        onCropChange={setCrop}
                                        onCropComplete={onCropComplete}
                                        onZoomChange={setZoom}
                                    /> :
                                        <img src={croppedImage} alt="cropped" className='rounded-2xl' />
                                    }
                                </div>
                                {!isCropped ? (
                                    <button className='flex items-center bg-[#3e9ca3] gap-2 p-3 py-2 rounded-md text-white mt-5' onClick={() => showCroppedImage(image['data_url'])}>Show Result</button>
                                ) : (
                                    <div className='flex items-center gap-5'>
                                        <button className='flex items-center bg-[#9a1f60] gap-2 p-3 py-2 rounded-md text-white mt-5' onClick={() => setIsCropped(false)}>
                                            <Icon icon="carbon:crop" width="24" height="24" />
                                            Edit
                                        </button>
                                        <button className='flex items-center bg-[#3e9ca3] gap-2 p-3 py-2 rounded-md text-white mt-5' onClick={() => handleNextUploadImage()}>
                                            Save
                                            <Icon icon="akar-icons:arrow-right" width="24" height="24" />
                                        </button>
                                    </div>
                                )}
                            </>
                        ))}
                        <button className='text-[#3e9ca3] mt-10' onClick={() => navigate(`/create-deck/${pathname}/own-msg`)}>Skip this step</button>
                    </div>
                )}
            </ImageUploading>
        </div>
    )
}
