import React, { useEffect, useState } from "react";
import Title from "public/shared/Title";
import RewardList from "public/shared/RewardList";
import PlayerList from "./PlayerList";
import Trans from "public/trans/hooks/Trans";

export default function CurrentEventDetail({listPlayer, listReward, remainReward = false, isAdmin = false}) {
    const trans = Trans().curentEventDetail;
    const [expand, setExpand] = useState(false);

    const EventDetailExpand = (
        <div className="flex flex-col w-full absolute bg-[#40BEE5] rounded-t-2xl bottom-0" onClick={(e) => {e.stopPropagation();}}
            style={{height: !expand?"60%":"90%"}}>
                <div className="flex w-14 absolute bg-[#40BEE5] h-7 rounded-t-2xl -top-7 right-6 items-center justify-center" onClick={() => setExpand(!expand)}>
                    <span className="pointer-event-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={expand?"w-6 h-6 fill-white rotate-90":"w-6 h-6 fill-white -rotate-90"}>
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                    </span>
                </div>
                <div className="flex flex-col w-full h-fit items-center" style={{marginTop: expand?"1rem":"0.5rem"}}>
                    <p className="w-full text-center items-center uppercase text-white font-[900] text-[20px]">{trans.title}</p>
                </div>
                <div className="flex flex-col w-full h-full max-h-64 px-5 overflow-hidden" style={{minHeight: "8rem"}}>
                    <Title title={trans.reward} fontSize="text-[20]" margin="mb-4"/>
                    <div className="h-1 bg-white w-full -mt-4 mb-2 grow-0"></div>
                    <RewardList listReward={listReward} showRemain={remainReward} eventPaticipant={Object.values(listPlayer)} />
                </div>
                <div className="flex flex-col w-full h-full px-5 mt-4 overflow-hidden">
                    <Title title={trans.player} fontSize="text-[20]" margin="mb-4" />
                    <div className="h-1 bg-white w-full -mt-4 mb-4 grow-0"></div>
                    <PlayerList listPlayer={listPlayer} listReward={listReward} isAdmin={isAdmin} />
                </div>
        </div>
    )

    return (
        <div className="w-full absolute bottom-0 z-40 flex flex-col ease-in duration-200 overflow-hidden"  onClick={() => setExpand(!expand)}
            style={{height: !expand?"4rem":"100vh"}}>
                <div className="w-full h-full grow absolute rounded-t-2xl bottom-0 items-center" onClick={() => setExpand(!expand)}>
                    {EventDetailExpand}
                </div>
        </div>
    );
}
