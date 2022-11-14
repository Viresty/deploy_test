import React, { useState } from "react";

import { MoreGift } from "components/JoinEvent/MoreGift";
import AuthInput from "public/shared/AuthInput";
import TextArea from "public/shared/TextArea";
import BgBlueButton from "public/shared/BgBlueButton";
import ButtonAndIcon from "public/shared/ButtonAndIcon";
import Line from "public/shared/Line";


function EventRewardRegister () {
    
    const [giftCount, setGiftCount] = useState(0)

    const [giftList, setGiftList] = useState([])

    const contentCSS = {
        background: "-webkit-linear-gradient(45deg, #003B93, #00F0FF)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
    }
    // icon plus/minus
    const icon = {
        width:"32px",
        height:"32px",
        margin:"0 12px",
        "border-image-source" : "linear-gradient(to right, #003B93, #00F0FF)"
    }

    // logic
    const handleAddGift = () =>
    {
        setGiftList([...giftList, <MoreGift />])
    }

    const handleDeleteGift = () =>
    {

    }

    return (
            <div className="flex flex-col items-center justify-evenly h-screen w-screen">
                <div className="flex flex-col items-center justify-center h-full max-w-[300px]">
                    <h1 className="uppercase text-4xl py-2 font-bold text-[#004599]">đăng ký</h1>
                    <h1 className="uppercase text-xl py-2 mb-2 font-bold text-[#004599]">thông tin giải thưởng</h1>
                    {/* gift name */}

                    <AuthInput content={"Tên giải thưởng"} type={"text"} />

                    <div className="flex justify-evenly w-full my-2 lg:justify-center">
                        <label className="font-bold" style={contentCSS}>Số lượng</label>
                        <div className="flex justify-between items-center text-lg font-bold" style={contentCSS}>
                            <i className="fas fa-minus px-2 flex justify-center items-center cursor-pointer" style={icon} onClick={() => setGiftCount(giftCount - 1)}></i>
                            <label>{giftCount}</label>
                            <i className="fas fa-plus px-2 flex justify-center items-center cursor-pointer" style={icon} onClick={() => setGiftCount(giftCount + 1)}></i>
                        </div>
                    </div>
                    {/* gift detail */}
                        {/* line */}
                    <div class="w-[90%] max-w-sm">
                        <Line content={"Phần quà"}/>
                    </div>

                    <div className="overflow-x-hidden overflow-y-auto flex flex-col h-[190px] w-full max-w-[300px]">
                        <div className="w-full h-full">
                            <div className="flex py-3 justify-between items-center relative w-full h-full">
                                <TextArea  content={"Mô tả phần quà"} row={"3"}/>
                                <i className="fas fa-trash text-red-600 cursor-pointer px-[1rem]" onClick={handleDeleteGift}></i>
                            </div>
                        </div>
                        <ButtonAndIcon content={"Thêm hình ảnh"} classIcon={"fas fa-image"} colorHex={"#40BEE5"}/>
                        {
                            giftList.map((item) =>
                            {
                                return item
                            })
                        }
                    </div>
                    {/* gift event */}
                        {/* line */}
                    <div class="w-[90%] max-w-sm">
                       <Line />
                    </div>

                    <div className="flex justify-center items-center my-2 w-[300px] cursor-pointer" onClick={handleAddGift}>
                        <ButtonAndIcon content={"Thêm phần quà"} colorHex={"#40BEE5"}/>
                    </div>
                    <div className="flex justify-center items-center my-2 w-[300px] text-white cursor-pointer">
                        <ButtonAndIcon content={"Hủy giải thưởng"} colorHex={"#FF6262"}/>
                    </div>
                        {/* line */}
                    <div class="w-[90%] max-w-sm">
                        <Line />
                    </div>

                    <div className="flex justify-center items-center my-2 w-[300px] cursor-pointer">
                        <ButtonAndIcon content={"Thêm giải thưởng"} colorHex={"#40BEE5"}/>
                    </div>
                </div>
            
                {/* create event */}
                <div className="flex items-center justify-center w-[300px] my-[2rem]">
                        <BgBlueButton content={"Đăng ký sự kiện"} islink={true} href={"_eventdetail"} />
                </div>
            </div>
    )
}
export default EventRewardRegister
