import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { Icon } from '@iconify/react';
import PureModal from 'react-pure-modal';
import { useLocation } from 'react-router-dom'
import ImageUploading from 'react-images-uploading';
import Cropper from 'react-easy-crop'
import { Body, SubTitle } from './style'
import { getCroppedImg } from '../../Hooks/hooks';

export default function EditCardPage() {
    const location = useLocation()
    const pathname = location.pathname
    const paths = pathname.split('/')
    const uniqueId = paths[paths.length - 1]

    const [updateEmail, setUpdateEmail] = useState("")
    const [details, setDetails] = useState([])
    const [isOpen, setIsOpenModal] = useState(false)
    const [showUpdateMessage, setShowUpdateMessage] = useState(false)

    useEffect(() => {
        (async () => {
            const details = await axios.get(`https://agile-lake-31041.herokuapp.com/getDataById?uniqueId=${uniqueId}`)
            setDetails(details.data[0])
            setUpdateEmail(details.data[0].yourMail)
        })()
    }, [uniqueId])

    const updateUserMail = async () => {
        document.cookie = `userId=${updateEmail}`
        await axios.post(`https://agile-lake-31041.herokuapp.com/updateEmail?uniqueId=${uniqueId}&yourMail=${updateEmail}`)
        setShowUpdateMessage(true)
        setInterval(() => {
            setShowUpdateMessage(false)
        }, 5000)
    }

    const updateFinalImage = async () => {
        await axios.post(`https://agile-lake-31041.herokuapp.com/updateFinalImage?uniqueId=${uniqueId}&finalCardImage=${croppedImage}`)
        const details = await axios.get(`https://agile-lake-31041.herokuapp.com/getDataById?uniqueId=${uniqueId}`)
        setDetails(details.data[0])
        setIsOpenModal(false)
    }

    const handleSetUpdatedEmail = (event) => {
        const updated_email = event.target.value
        if (updated_email.length <= 30) {
            setUpdateEmail(updated_email)
        }
    }

    const MobileModalCloseIcon = (
        <Icon icon="ep:circle-close" width="30" height="30" />
    )

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
            setCroppedImage(croppedImage)
            setIsCropped(true)
        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels])

    return (
        <Body>
            <SubTitle>Edit, swap, update and more!</SubTitle>
            <div className='border rounded-md p-4 flex flex-col items-center text-[#3F51B5] bg-[#f2f2f2]'>
                <div className='font-bold text-lg'>Save Adan's LoveCube!</div>
                <div className=''>We'll send you a link for returning later.</div>
                <div class="flex mt-2 w-full">
                    <input type="text" id="website-admin" value={updateEmail} onChange={e => handleSetUpdatedEmail(e)} class="rounded-none outline-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-[#3e9ca3] focus:border-[#3e9ca3] block flex-1 min-w-0 w-full text-sm border-[#3F51B5] p-2.5 focus:ring-purple-400 focus:ring-2" />
                    <button class="inline-flex items-center px-3 text-base text-white bg-[#3F51B5] hover:bg-[#4F69C5] animation-all duration-300 font-bold rounded-r-md border border-l-0 border-gray-300" onClick={() => updateUserMail()}>
                        Update email
                    </button>
                </div>
                {showUpdateMessage && <div className='text-base font-bold mt-5'>Email successfully saved!</div>}
            </div>
            <div className='max-w-6xl my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {/* <img src={details.topCardImage} alt="top Card" className='w-48 h-48 rounded-xl border-4 border-[#e2e2e2] shadow-xl' /> */}
                <img src={details.finalCardImage} alt="final Card" className='w-48 h-48 rounded-xl border-4 border-[#e2e2e2] shadow-xl cursor-pointer' onClick={() => setIsOpenModal(true)} />
            </div>
            <div className="cropModal">
                <PureModal
                    isOpen={isOpen}
                    closeButton={MobileModalCloseIcon}
                    closeButtonPosition="bottom"
                    onClose={() => {
                        setIsOpenModal(false);
                        return true;
                    }}
                >
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
                                {imageList.map((image, index) => {
                                    return (
                                        <>
                                            <div key={index} className="w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-gray-100 relative flex items-center justify-center mt-5 rounded-2xl">
                                                {!isCropped ? <Cropper
                                                    image={image['data_url']}
                                                    crop={crop}
                                                    zoom={zoom}
                                                    aspect={3 / 3}
                                                    onCropChange={setCrop}
                                                    onCropComplete={onCropComplete}
                                                    onZoomChange={setZoom}
                                                /> :
                                                    <img src={croppedImage} alt="cropped" className='rounded-2xl w-[320px] w-[320px] sm:w-[500px] sm:h-[500px]' />
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
                                                    <button className='flex items-center bg-[#3e9ca3] gap-2 p-3 py-2 rounded-md text-white mt-5' onClick={() => updateFinalImage()}>
                                                        Save
                                                        <Icon icon="akar-icons:arrow-right" width="24" height="24" />
                                                    </button>
                                                </div>
                                            )}
                                        </>
                                    )
                                })}
                            </div>
                        )}
                    </ImageUploading>
                </PureModal>
            </div>
        </Body>
    )
}
