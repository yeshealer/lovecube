import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
    CreateDeckBody,
    Content
} from './style'
import {
    FromWho,
    Occasion,
    ToWho,
    Inscription,
    Describe,
    CreateCard,
    UploadImage,
    OwnMsg,
    MoreOption,
    SendMail
} from './components'

export default function CreateDeckPage() {
    const location = useLocation()
    const pathname = location.pathname
    const words = pathname.split('/')
    const mainPathname = words[words.length - 2]
    const subPathname = words[words.length - 1]

    const [occasion, setOccasion] = useState('')
    const [toFirstName, setToFirstName] = useState('')
    const [toLastName, setToLastName] = useState('')
    const [toNickName, setToNickName] = useState('')
    const [fromFirstName, setFromFirstName] = useState('')
    const [fromLastName, setFromLastName] = useState('')
    const [fromNickName, setFromNickName] = useState('')
    const [inscription, setInscription] = useState('')
    const [moreOption, setMoreOption] = useState('')
    const [selectedDescribe, setSelectedDescribe] = useState([])
    const [isFinalImage, setIsFinalImage] = useState(false)
    const [ownMessage, setOwnMessage] = useState('')
    const [sendMail, setSendMail] = useState('')
    return (
        <CreateDeckBody>
            <Content>
                <div className='text-[#6c757d] pt-3'>Tell us about who this is for and we'll customize the messages.</div>
                {subPathname === 'to-who' && <ToWho
                    occasion={occasion}
                    pathname={mainPathname}
                    setFirstName={setToFirstName}
                    setLastName={setToLastName}
                    setNickName={setToNickName}
                    firstName={toFirstName}
                    lastName={toLastName}
                    nickName={toNickName}
                />}
                {subPathname === 'occasion' && <Occasion
                    mainPathname={mainPathname}
                    setOccasion={setOccasion}
                    occasion={occasion}
                    toFirstName={toFirstName}
                />}
                {subPathname === 'inscription' && <Inscription
                    toFirstName={toFirstName}
                    occasion={occasion}
                    pathname={mainPathname}
                    setInscription={setInscription}
                    inscription={inscription}
                />}
                {subPathname === 'describe' && <Describe
                    toFirstName={toFirstName}
                    occasion={occasion}
                    inscription={inscription}
                    pathname={mainPathname}
                    setSelectedButton={setSelectedDescribe}
                    selectedButton={selectedDescribe}
                />}
                {subPathname === 'more-option' && <MoreOption
                    toFirstName={toFirstName}
                    occasion={occasion}
                    inscription={inscription}
                    pathname={mainPathname}
                    setSelectedButton={setSelectedDescribe}
                    selectedButton={selectedDescribe}
                    setMoreOption={setMoreOption}
                    moreOption={moreOption}
                    selectedDescribe={selectedDescribe}
                />}
                {subPathname === 'create-card' && <CreateCard
                    toFirstName={toFirstName}
                    occasion={occasion}
                    inscription={inscription}
                    pathname={mainPathname}
                    selectedDescribe={selectedDescribe}
                    moreOption={moreOption}
                />}
                {subPathname === 'upload' && <UploadImage
                    toFirstName={toFirstName}
                    occasion={occasion}
                    inscription={inscription}
                    pathname={mainPathname}
                    selectedDescribe={selectedDescribe}
                    setIsFinalImage={setIsFinalImage}
                    moreOption={moreOption}
                />}
                {subPathname === 'own-msg' && <OwnMsg
                    toFirstName={toFirstName}
                    occasion={occasion}
                    inscription={inscription}
                    pathname={mainPathname}
                    selectedDescribe={selectedDescribe}
                    setOwnMessage={setOwnMessage}
                    ownMessage={ownMessage}
                    moreOption={moreOption}
                />}
                {subPathname === 'from-who' && <FromWho
                    toFirstName={toFirstName}
                    occasion={occasion}
                    pathname={mainPathname}
                    setFirstName={setFromFirstName}
                    setLastName={setFromLastName}
                    setNickName={setFromNickName}
                    firstName={fromFirstName}
                    lastName={fromLastName}
                    nickName={fromNickName}
                    inscription={inscription}
                    selectedDescribe={selectedDescribe}
                    moreOption={moreOption}
                />}
                {subPathname === 'send-mail' && <SendMail
                    toFirstName={toFirstName}
                    occasion={occasion}
                    inscription={inscription}
                    pathname={mainPathname}
                    selectedDescribe={selectedDescribe}
                    moreOption={moreOption}
                    fromFirstName={fromFirstName}
                    setSendMail={setSendMail}
                    sendMail={sendMail}
                />}
            </Content>
        </CreateDeckBody>
    )
}